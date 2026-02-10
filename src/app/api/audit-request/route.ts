import { NextResponse } from 'next/server';

type AuditRequestPayload = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  websiteUrl?: string;
  cityRegion?: string;
  primaryGoal?: string;
  notes?: string;
  botField?: string;
};

type QuickAuditSnapshot = {
  finalUrl: string;
  httpStatus: number;
  title: string;
  metaDescription: string;
  h1Count: number;
  h2Count: number;
  imageCount: number;
  imagesWithoutAlt: number;
  hasJsonLd: boolean;
  hasPrimaryCtaKeyword: boolean;
  hasCityKeyword: boolean;
  score: number;
  findings: string[];
};

class ValidationError extends Error {}

const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgweovk';
const USER_AGENT =
  'ReliableWebStudioAuditBot/1.0 (+https://reliablewebstudio.com; contact: hello@reliablewebstudio.com)';

const CTA_PATTERN =
  /\b(call|book|schedule|quote|get started|get a quote|request quote|contact us|start now)\b/i;

function sanitizeText(value: string | undefined, maxLength = 600): string {
  return (value ?? '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function normalizeWebsiteUrl(value: string): URL {
  const rawValue = value.trim();
  const withProtocol = /^https?:\/\//i.test(rawValue) ? rawValue : `https://${rawValue}`;
  const url = new URL(withProtocol);

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new ValidationError('Website URL must use http or https.');
  }

  if (url.username || url.password) {
    throw new ValidationError('Website URL cannot include credentials.');
  }

  return url;
}

function isPrivateIpv4(hostname: string): boolean {
  const match = hostname.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (!match) return false;
  const [first, second] = [Number(match[1]), Number(match[2])];

  if (first === 10 || first === 127) return true;
  if (first === 169 && second === 254) return true;
  if (first === 192 && second === 168) return true;
  if (first === 172 && second >= 16 && second <= 31) return true;
  return false;
}

function assertPublicHostname(hostname: string): void {
  const normalized = hostname.trim().toLowerCase();

  if (
    normalized === 'localhost' ||
    normalized === '0.0.0.0' ||
    normalized === '::1' ||
    normalized.endsWith('.local') ||
    normalized.endsWith('.internal')
  ) {
    throw new ValidationError('Public website URL is required.');
  }

  if (isPrivateIpv4(normalized)) {
    throw new ValidationError('Public website URL is required.');
  }
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 10000): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function getAttrValue(tag: string, attrName: string): string {
  const regex = new RegExp(`${attrName}\\s*=\\s*["']([^"']*)["']`, 'i');
  const match = tag.match(regex);
  return sanitizeText(match?.[1] ?? '', 320);
}

function decodeHtmlEntities(input: string): string {
  return input
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function stripTags(input: string): string {
  return input.replace(/<[^>]+>/g, ' ');
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return sanitizeText(decodeHtmlEntities(stripTags(match?.[1] ?? '')), 180);
}

function extractMetaDescription(html: string): string {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of metaTags) {
    const name = getAttrValue(tag, 'name').toLowerCase();
    const property = getAttrValue(tag, 'property').toLowerCase();
    if (name === 'description' || property === 'og:description') {
      return sanitizeText(decodeHtmlEntities(getAttrValue(tag, 'content')), 260);
    }
  }
  return '';
}

function countMatches(source: string, pattern: RegExp): number {
  return (source.match(pattern) ?? []).length;
}

function clampScore(value: number): number {
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
}

function buildSnapshot(html: string, finalUrl: string, httpStatus: number, cityRegion: string): QuickAuditSnapshot {
  const normalizedHtml = html.slice(0, 900_000);
  const textContent = stripTags(normalizedHtml).replace(/\s+/g, ' ').toLowerCase();
  const cityKeyword = sanitizeText(cityRegion, 80).toLowerCase();

  const title = extractTitle(normalizedHtml);
  const metaDescription = extractMetaDescription(normalizedHtml);
  const h1Count = countMatches(normalizedHtml, /<h1\b[^>]*>/gi);
  const h2Count = countMatches(normalizedHtml, /<h2\b[^>]*>/gi);
  const imageTags = normalizedHtml.match(/<img\b[^>]*>/gi) ?? [];
  const imageCount = imageTags.length;
  const imagesWithoutAlt = imageTags.filter((tag) => {
    const alt = getAttrValue(tag, 'alt');
    return alt.length === 0;
  }).length;
  const hasJsonLd = /application\/ld\+json/i.test(normalizedHtml);
  const hasPrimaryCtaKeyword = CTA_PATTERN.test(textContent);
  const hasCityKeyword = cityKeyword.length > 0 ? textContent.includes(cityKeyword) : false;

  const findings: string[] = [];
  let score = 100;

  if (!title) {
    score -= 22;
    findings.push('Missing page title on homepage.');
  }
  if (title && title.length > 65) {
    score -= 4;
    findings.push('Homepage title may be too long for search results.');
  }
  if (!metaDescription) {
    score -= 18;
    findings.push('Missing meta description on homepage.');
  }
  if (h1Count === 0) {
    score -= 16;
    findings.push('No H1 found on homepage.');
  }
  if (h1Count > 1) {
    score -= 6;
    findings.push('Multiple H1 tags found on homepage.');
  }
  if (!hasPrimaryCtaKeyword) {
    score -= 12;
    findings.push('No obvious call-to-action language detected.');
  }
  if (imageCount > 0 && imagesWithoutAlt / imageCount > 0.35) {
    score -= 10;
    findings.push('Many images appear to be missing alt text.');
  }
  if (!hasJsonLd) {
    score -= 8;
    findings.push('No JSON-LD schema script detected on homepage.');
  }
  if (cityKeyword && !hasCityKeyword) {
    score -= 4;
    findings.push('Primary service area was not clearly detected on homepage.');
  }

  return {
    finalUrl,
    httpStatus,
    title,
    metaDescription,
    h1Count,
    h2Count,
    imageCount,
    imagesWithoutAlt,
    hasJsonLd,
    hasPrimaryCtaKeyword,
    hasCityKeyword,
    score: clampScore(score),
    findings,
  };
}

async function fetchHomepageHtml(initialUrl: URL): Promise<{ html: string; finalUrl: string; httpStatus: number }> {
  let currentUrl = new URL(initialUrl.toString());

  for (let redirectCount = 0; redirectCount < 3; redirectCount += 1) {
    assertPublicHostname(currentUrl.hostname);

    const response = await fetchWithTimeout(
      currentUrl.toString(),
      {
        method: 'GET',
        redirect: 'manual',
        headers: {
          'User-Agent': USER_AGENT,
          Accept: 'text/html,application/xhtml+xml',
        },
      },
      10000
    );

    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      if (!location) {
        throw new Error('Redirect response did not include a location header.');
      }
      currentUrl = new URL(location, currentUrl);
      continue;
    }

    if (!response.ok) {
      throw new Error(`Could not access website homepage (HTTP ${response.status}).`);
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.toLowerCase().includes('text/html')) {
      throw new Error('Website did not return HTML content for analysis.');
    }

    return {
      html: await response.text(),
      finalUrl: currentUrl.toString(),
      httpStatus: response.status,
    };
  }

  throw new Error('Too many redirects while trying to analyze this website.');
}

function formatSnapshotForEmail(snapshot: QuickAuditSnapshot): string {
  const findingText =
    snapshot.findings.length > 0
      ? snapshot.findings.map((item, index) => `${index + 1}. ${item}`).join('\n')
      : 'No major blockers detected in quick scan.';

  return [
    `Quick score: ${snapshot.score}/100`,
    `Final URL scanned: ${snapshot.finalUrl}`,
    `HTTP status: ${snapshot.httpStatus}`,
    `Title: ${snapshot.title || 'Missing'}`,
    `Meta description: ${snapshot.metaDescription || 'Missing'}`,
    `H1 count: ${snapshot.h1Count}`,
    `H2 count: ${snapshot.h2Count}`,
    `Images: ${snapshot.imageCount} (missing alt: ${snapshot.imagesWithoutAlt})`,
    `JSON-LD detected: ${snapshot.hasJsonLd ? 'Yes' : 'No'}`,
    `CTA language detected: ${snapshot.hasPrimaryCtaKeyword ? 'Yes' : 'No'}`,
    `Primary city detected: ${snapshot.hasCityKeyword ? 'Yes' : 'No'}`,
    `Findings:\n${findingText}`,
  ].join('\n');
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AuditRequestPayload;

    if (sanitizeText(body.botField, 120)) {
      return NextResponse.json({ ok: true });
    }

    const name = sanitizeText(body.name, 120);
    const email = sanitizeText(body.email, 160);
    const phone = sanitizeText(body.phone, 80);
    const businessName = sanitizeText(body.businessName, 140);
    const cityRegion = sanitizeText(body.cityRegion, 120);
    const primaryGoal = sanitizeText(body.primaryGoal, 120);
    const notes = sanitizeText(body.notes, 1800);
    const websiteInput = sanitizeText(body.websiteUrl, 320);

    if (!name) throw new ValidationError('Name is required.');
    if (!email || !isValidEmail(email)) throw new ValidationError('Valid email is required.');
    if (!websiteInput) throw new ValidationError('Website URL is required.');

    const websiteUrl = normalizeWebsiteUrl(websiteInput);
    assertPublicHostname(websiteUrl.hostname);

    let snapshotText = 'Quick automated snapshot could not be generated.';

    try {
      const fetched = await fetchHomepageHtml(websiteUrl);
      const snapshot = buildSnapshot(fetched.html, fetched.finalUrl, fetched.httpStatus, cityRegion);
      snapshotText = formatSnapshotForEmail(snapshot);
    } catch (snapshotError) {
      snapshotText = `Quick snapshot unavailable: ${
        snapshotError instanceof Error ? snapshotError.message : 'Unknown error'
      }`;
    }

    const requestId = crypto.randomUUID();
    const formspreeEndpoint = process.env.FORMSPREE_AUDIT_ENDPOINT || DEFAULT_FORMSPREE_ENDPOINT;

    const forwardResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inquiry_type: 'website_analysis_request',
        request_id: requestId,
        name,
        email,
        phone,
        business_name: businessName,
        website_url: websiteUrl.toString(),
        city_region: cityRegion,
        primary_goal: primaryGoal,
        notes,
        delivery_expectation: 'Send full audit by next business day',
        automated_snapshot: snapshotText,
      }),
    });

    if (!forwardResponse.ok) {
      throw new Error(`Could not submit audit request (HTTP ${forwardResponse.status}).`);
    }

    return NextResponse.json({
      ok: true,
      requestId,
      eta: 'next business day',
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'We could not submit your request. Please try again in a minute.',
      },
      { status: 500 }
    );
  }
}

