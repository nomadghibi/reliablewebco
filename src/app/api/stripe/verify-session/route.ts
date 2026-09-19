import { NextResponse } from 'next/server';
import { verifyLocalWebsiteCheckout } from '@/lib/stripe-checkout';

export const runtime = 'nodejs';

type VerifyPayload = {
  sessionId?: string;
};

export async function POST(request: Request) {
  let body: VerifyPayload;
  try {
    body = (await request.json()) as VerifyPayload;
  } catch {
    return NextResponse.json({ verified: false }, { status: 400 });
  }

  const result = await verifyLocalWebsiteCheckout(body.sessionId ?? '');
  if (!result.verified) {
    const status = result.reason === 'unconfigured' || result.reason === 'unavailable' ? 503 : 403;
    return NextResponse.json({ verified: false }, { status });
  }

  return NextResponse.json({ verified: true });
}

