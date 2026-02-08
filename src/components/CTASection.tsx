'use client';

import Link from 'next/link';
import CalendlyButton from './CalendlyButton';
import { trackEvent } from '@/lib/analytics';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    isCalendly?: boolean;
  };
  darkBg?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  darkBg = false,
}: CTASectionProps) {
  const trackPrimaryClick = () => {
    trackEvent('cta_primary_click', {
      cta_text: primaryCTA.text,
      cta_href: primaryCTA.href,
      location: 'cta_section',
    });
  };

  const trackSecondaryClick = () => {
    if (!secondaryCTA) return;

    const isCallIntent = /book|call|schedule/i.test(secondaryCTA.text);

    if (isCallIntent) {
      trackEvent('cta_call_click', {
        cta_text: secondaryCTA.text,
        cta_href: secondaryCTA.href,
        location: 'cta_section',
      });
      return;
    }

    trackEvent('cta_primary_click', {
      cta_text: secondaryCTA.text,
      cta_href: secondaryCTA.href,
      location: 'cta_section',
    });
  };

  return (
    <section className={`section-padding ${darkBg ? 'bg-gray-900' : 'bg-primary-50'}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`heading-lg mb-4 ${darkBg ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
          {subtitle && <p className={`text-xl mb-8 ${darkBg ? 'text-gray-300' : 'text-gray-700'}`}>{subtitle}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className={darkBg ? 'btn-accent' : 'btn-primary'}
              onClick={trackPrimaryClick}
            >
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              secondaryCTA.isCalendly ? (
                <CalendlyButton
                  text={secondaryCTA.text}
                  variant={darkBg ? 'white' : 'secondary'}
                />
              ) : (
                <Link
                  href={secondaryCTA.href}
                  className={
                    darkBg
                      ? 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200'
                      : 'btn-secondary'
                  }
                  onClick={trackSecondaryClick}
                >
                  {secondaryCTA.text}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
