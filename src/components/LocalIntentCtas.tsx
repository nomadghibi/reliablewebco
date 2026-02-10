'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface LocalIntentCtasProps {
  pageType: 'location_city' | 'service_city';
  citySlug: string;
  serviceSlug?: string;
  ctaLocation?: string;
}

export default function LocalIntentCtas({
  pageType,
  citySlug,
  serviceSlug,
  ctaLocation = 'hero',
}: LocalIntentCtasProps) {
  const commonParams = {
    page_type: pageType,
    city_slug: citySlug,
    service_slug: serviceSlug || 'none',
    cta_location: ctaLocation,
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="btn-primary"
        onClick={() => {
          trackEvent('cta_primary_click', {
            cta_text: 'Start My Project',
            cta_href: '/contact',
            location: ctaLocation,
            ...commonParams,
          });
        }}
      >
        Start My Project
      </Link>

      <Link
        href="/pricing"
        className="btn-secondary"
        onClick={() => {
          trackEvent('cta_primary_click', {
            cta_text: 'See Pricing',
            cta_href: '/pricing',
            location: ctaLocation,
            ...commonParams,
          });
        }}
      >
        See Pricing
      </Link>

      <a
        href="tel:+13219535199"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 border-2 border-primary-300 rounded-lg hover:bg-primary-50 transition-colors duration-200"
        onClick={() => {
          trackEvent('cta_call_click', {
            cta_text: 'Call Now',
            cta_href: 'tel:+13219535199',
            location: ctaLocation,
            ...commonParams,
          });
        }}
      >
        Call (321) 953-5199
      </a>
    </div>
  );
}
