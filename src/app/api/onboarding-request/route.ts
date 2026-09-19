import { NextResponse } from 'next/server';
import { verifyLocalWebsiteCheckout } from '@/lib/stripe-checkout';

const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgweovk';

type OnboardingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  serviceArea?: string;
  services?: string;
  about?: string;
  differentiator?: string;
  primaryCta?: string;
  domainName?: string;
  domainStatus?: string;
  socialLinks?: string;
  reviewLink?: string;
  assetLinks?: string;
  brandNotes?: string;
  additionalNotes?: string;
  botField?: string;
  stripeSessionId?: string;
};

class ValidationError extends Error {}
class PaymentVerificationError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

function clean(value: string | undefined, maxLength: number): string {
  return (value ?? '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > 50_000) {
      return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
    }

    const body = (await request.json()) as OnboardingPayload;

    if (clean(body.botField, 120)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 160);
    const businessName = clean(body.businessName, 160);
    const businessType = clean(body.businessType, 120);
    const serviceArea = clean(body.serviceArea, 240);
    const services = clean(body.services, 2000);

    if (!name) throw new ValidationError('Your name is required.');
    if (!validEmail(email)) throw new ValidationError('A valid email is required.');
    if (!businessName) throw new ValidationError('Business name is required.');
    if (!businessType) throw new ValidationError('Business type is required.');
    if (!serviceArea) throw new ValidationError('Primary service area is required.');
    if (!services) throw new ValidationError('Please list the services the website should feature.');

    const checkout = await verifyLocalWebsiteCheckout(clean(body.stripeSessionId, 240));
    if (!checkout.verified) {
      const temporarilyUnavailable = checkout.reason === 'unconfigured' || checkout.reason === 'unavailable';
      throw new PaymentVerificationError(
        temporarilyUnavailable
          ? 'Payment verification is temporarily unavailable. Please try again shortly.'
          : 'A verified Local Website Plan payment is required before submitting this form.',
        temporarilyUnavailable ? 503 : 403
      );
    }

    if (checkout.customerEmail && checkout.customerEmail !== email.toLowerCase()) {
      throw new PaymentVerificationError('Use the same email address entered during Stripe checkout.', 403);
    }

    const requestId = crypto.randomUUID();
    const endpoint = process.env.FORMSPREE_ONBOARDING_ENDPOINT || DEFAULT_FORMSPREE_ENDPOINT;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inquiry_type: 'paid_website_onboarding',
        request_id: requestId,
        stripe_session_id: checkout.sessionId,
        name,
        email,
        phone: clean(body.phone, 80),
        business_name: businessName,
        business_type: businessType,
        primary_service_area: serviceArea,
        services,
        about_the_business: clean(body.about, 2000),
        differentiator: clean(body.differentiator, 1200),
        primary_call_to_action: clean(body.primaryCta, 200),
        domain_name: clean(body.domainName, 320),
        domain_status: clean(body.domainStatus, 160),
        social_links: clean(body.socialLinks, 1200),
        reviews_link: clean(body.reviewLink, 500),
        logo_and_photo_links: clean(body.assetLinks, 1600),
        brand_notes: clean(body.brandNotes, 1000),
        additional_notes: clean(body.additionalNotes, 2000),
      }),
    });

    if (!response.ok) {
      throw new Error(`Could not submit onboarding information (HTTP ${response.status}).`);
    }

    return NextResponse.json({ ok: true, requestId });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (error instanceof PaymentVerificationError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { error: 'We could not submit your onboarding information. Please try again or call (321) 953-5199.' },
      { status: 500 }
    );
  }
}
