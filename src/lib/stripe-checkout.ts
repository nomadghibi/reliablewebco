const STRIPE_API_BASE = 'https://api.stripe.com/v1/checkout/sessions';
const EXPECTED_AMOUNT_TOTAL = 25_000;

type StripeCheckoutSession = {
  id?: string;
  status?: string;
  payment_status?: string;
  mode?: string;
  currency?: string;
  amount_total?: number;
  payment_link?: string | { id?: string };
  customer_details?: {
    email?: string | null;
  } | null;
  customer_email?: string | null;
};

export type CheckoutVerification =
  | { verified: true; customerEmail: string; sessionId: string }
  | { verified: false; reason: 'invalid' | 'unconfigured' | 'unavailable' };

function paymentLinkId(value: StripeCheckoutSession['payment_link']): string {
  if (typeof value === 'string') return value;
  return value?.id ?? '';
}

export async function verifyLocalWebsiteCheckout(sessionId: string): Promise<CheckoutVerification> {
  const normalizedSessionId = sessionId.trim();
  if (!/^cs_(?:live|test)_[A-Za-z0-9]+$/.test(normalizedSessionId)) {
    return { verified: false, reason: 'invalid' };
  }

  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  const expectedPaymentLink = process.env.STRIPE_LOCAL_WEBSITE_PAYMENT_LINK_ID?.trim();
  if (!secretKey || !expectedPaymentLink) {
    return { verified: false, reason: 'unconfigured' };
  }

  try {
    const response = await fetch(`${STRIPE_API_BASE}/${encodeURIComponent(normalizedSessionId)}`, {
      headers: { Authorization: `Bearer ${secretKey}` },
      cache: 'no-store',
    });

    if (!response.ok) {
      return { verified: false, reason: response.status >= 500 ? 'unavailable' : 'invalid' };
    }

    const session = (await response.json()) as StripeCheckoutSession;
    const paid = ['paid', 'no_payment_required'].includes(session.payment_status ?? '');
    const verified =
      session.id === normalizedSessionId &&
      session.status === 'complete' &&
      paid &&
      session.mode === 'subscription' &&
      session.currency?.toLowerCase() === 'usd' &&
      session.amount_total === EXPECTED_AMOUNT_TOTAL &&
      paymentLinkId(session.payment_link) === expectedPaymentLink;

    if (!verified) return { verified: false, reason: 'invalid' };

    return {
      verified: true,
      customerEmail: (session.customer_details?.email ?? session.customer_email ?? '').trim().toLowerCase(),
      sessionId: normalizedSessionId,
    };
  } catch {
    return { verified: false, reason: 'unavailable' };
  }
}

