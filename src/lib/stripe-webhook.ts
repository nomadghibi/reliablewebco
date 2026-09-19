import { createHmac, timingSafeEqual } from 'node:crypto';

const DEFAULT_TOLERANCE_SECONDS = 300;

type StripeSignature = {
  timestamp: number;
  signatures: string[];
};

function parseSignatureHeader(header: string): StripeSignature | null {
  let timestamp = 0;
  const signatures: string[] = [];

  for (const item of header.split(',')) {
    const [key, value] = item.trim().split('=', 2);
    if (key === 't') timestamp = Number(value);
    if (key === 'v1' && value) signatures.push(value);
  }

  if (!Number.isInteger(timestamp) || timestamp <= 0 || signatures.length === 0) {
    return null;
  }

  return { timestamp, signatures };
}

function safeHexEqual(left: string, right: string): boolean {
  if (!/^[a-f0-9]+$/i.test(left) || !/^[a-f0-9]+$/i.test(right)) return false;

  const leftBuffer = Buffer.from(left, 'hex');
  const rightBuffer = Buffer.from(right, 'hex');
  if (leftBuffer.length !== rightBuffer.length) return false;

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function verifyStripeSignature(
  payload: string,
  signatureHeader: string,
  secret: string,
  nowSeconds = Math.floor(Date.now() / 1000),
  toleranceSeconds = DEFAULT_TOLERANCE_SECONDS
): boolean {
  const parsed = parseSignatureHeader(signatureHeader);
  if (!parsed) return false;

  if (Math.abs(nowSeconds - parsed.timestamp) > toleranceSeconds) return false;

  const expected = createHmac('sha256', secret)
    .update(`${parsed.timestamp}.${payload}`, 'utf8')
    .digest('hex');

  return parsed.signatures.some((signature) => safeHexEqual(signature, expected));
}

