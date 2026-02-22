'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent, type AnalyticsEventName } from '@/lib/analytics';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

interface TrackedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventParams?: AnalyticsParams;
}

export default function TrackedLink({
  href,
  className,
  children,
  eventName,
  eventParams = {},
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent(eventName, {
          cta_href: href,
          ...eventParams,
        });
      }}
    >
      {children}
    </Link>
  );
}
