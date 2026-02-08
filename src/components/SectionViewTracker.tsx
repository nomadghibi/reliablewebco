'use client';

import { useEffect, useRef } from 'react';
import { trackEvent, type AnalyticsEventName } from '@/lib/analytics';

interface SectionViewTrackerProps {
  eventName: AnalyticsEventName;
  sectionName: string;
  threshold?: number;
}

export default function SectionViewTracker({
  eventName,
  sectionName,
  threshold = 0.35,
}: SectionViewTrackerProps) {
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          trackEvent(eventName, { section: sectionName });
          observer.disconnect();
          break;
        }
      },
      { threshold }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [eventName, sectionName, threshold]);

  return (
    <div
      ref={markerRef}
      aria-hidden="true"
      className="h-px w-full opacity-0 pointer-events-none"
    />
  );
}
