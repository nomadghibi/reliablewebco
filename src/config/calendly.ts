const DEFAULT_CALENDLY_URL = 'https://calendly.com/freddehnashi/30min';

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL;

export function buildCalendlyUrl(params: Record<string, string | number | boolean> = {}) {
  const url = new URL(CALENDLY_URL);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  return url.toString();
}
