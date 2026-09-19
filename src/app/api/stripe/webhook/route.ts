import { NextResponse } from 'next/server';
import { verifyStripeSignature } from '@/lib/stripe-webhook';

export const runtime = 'nodejs';

const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgweovk';
const MAX_WEBHOOK_BYTES = 1_000_000;
const BILLING_EVENTS = new Set([
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded',
  'invoice.paid',
  'invoice.payment_failed',
  'customer.subscription.deleted',
]);

type StripeEvent = {
  id?: string;
  type?: string;
  data?: {
    object?: Record<string, unknown>;
  };
};

function stringValue(value: unknown, maxLength = 320): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function nestedRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function amountInDollars(value: unknown): string {
  return typeof value === 'number' && Number.isFinite(value)
    ? (value / 100).toFixed(2)
    : '';
}

function inquiryType(eventType: string): string {
  if (eventType === 'invoice.payment_failed') return 'stripe_payment_failed';
  if (eventType === 'customer.subscription.deleted') return 'stripe_subscription_canceled';
  return 'stripe_payment_confirmed';
}

async function sendBillingNotice(event: StripeEvent): Promise<void> {
  const object = event.data?.object ?? {};
  const customerDetails = nestedRecord(object.customer_details);
  const customerEmail = stringValue(customerDetails.email || object.customer_email, 160);
  const customerName = stringValue(customerDetails.name, 120);
  const eventType = stringValue(event.type, 100);

  const endpoint =
    process.env.FORMSPREE_PAYMENT_ENDPOINT ||
    process.env.FORMSPREE_ONBOARDING_ENDPOINT ||
    DEFAULT_FORMSPREE_ENDPOINT;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inquiry_type: inquiryType(eventType),
      stripe_event_id: stringValue(event.id, 120),
      stripe_event_type: eventType,
      payment_status: stringValue(object.payment_status || object.status, 80),
      customer_name: customerName,
      customer_email: customerEmail,
      customer: stringValue(object.customer, 120),
      amount_paid: amountInDollars(object.amount_total ?? object.amount_paid),
      amount_due: amountInDollars(object.amount_due),
      currency: stringValue(object.currency, 12).toUpperCase(),
      payment_link: stringValue(object.payment_link, 120),
      subscription: stringValue(object.subscription, 120),
      attempt_count: typeof object.attempt_count === 'number' ? object.attempt_count : '',
      cancel_at_period_end:
        typeof object.cancel_at_period_end === 'boolean'
          ? object.cancel_at_period_end
            ? 'yes'
            : 'no'
          : '',
      canceled_at: typeof object.canceled_at === 'number' ? object.canceled_at : '',
      current_period_end: typeof object.current_period_end === 'number' ? object.current_period_end : '',
    }),
  });

  if (!response.ok) {
    throw new Error(`Payment notification failed with HTTP ${response.status}.`);
  }
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook is not configured.' }, { status: 503 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature.' }, { status: 400 });
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_WEBHOOK_BYTES) {
    return NextResponse.json({ error: 'Webhook payload is too large.' }, { status: 413 });
  }

  const payload = await request.text();
  if (Buffer.byteLength(payload, 'utf8') > MAX_WEBHOOK_BYTES) {
    return NextResponse.json({ error: 'Webhook payload is too large.' }, { status: 413 });
  }
  if (!verifyStripeSignature(payload, signature, webhookSecret)) {
    return NextResponse.json({ error: 'Invalid Stripe signature.' }, { status: 400 });
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(payload) as StripeEvent;
  } catch {
    return NextResponse.json({ error: 'Invalid webhook payload.' }, { status: 400 });
  }

  if (!event.id || !event.type) {
    return NextResponse.json({ error: 'Incomplete webhook event.' }, { status: 400 });
  }

  if (!BILLING_EVENTS.has(event.type)) {
    return NextResponse.json({ received: true });
  }

  const object = event.data?.object ?? {};
  if (
    event.type.startsWith('checkout.session.') &&
    !['paid', 'no_payment_required'].includes(stringValue(object.payment_status, 80))
  ) {
    return NextResponse.json({ received: true });
  }

  // Checkout already reports the first subscription payment. Keep invoice notices for renewals.
  if (event.type === 'invoice.paid' && stringValue(object.billing_reason, 80) === 'subscription_create') {
    return NextResponse.json({ received: true });
  }

  try {
    await sendBillingNotice(event);
  } catch {
    return NextResponse.json({ error: 'Billing notification could not be delivered.' }, { status: 502 });
  }

  return NextResponse.json({ received: true });
}
