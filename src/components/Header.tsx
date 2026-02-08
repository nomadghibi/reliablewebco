'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PAYMENT_LINKS, isPaymentConfigured } from '@/config/payments';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const landingPageUrl = PAYMENT_LINKS.landingPage.url;
  const isLandingPageConfigured = isPaymentConfigured(landingPageUrl);
  const landingPageHref = isLandingPageConfigured ? landingPageUrl : '/contact';

  const trackLandingPageClick = () => {
    trackEvent('cta_primary_click', {
      cta_text: 'Start Landing Page',
      location: 'header',
    });
    trackEvent('package_select', {
      package_type: 'landingPage',
      destination: landingPageHref,
      location: 'header',
    });

    if (isLandingPageConfigured) {
      trackEvent('outbound_stripe_click', {
        package_type: 'landingPage',
        destination: landingPageUrl,
        location: 'header',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              Reliable <span className="text-primary-600">Web</span> Studio
            </span>
            <span className="text-xs text-gray-500 tracking-wide">Digital Transformation & Automation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4 mr-2">
            <a
              href={landingPageHref}
              target={isLandingPageConfigured ? '_blank' : undefined}
              rel={isLandingPageConfigured ? 'noopener noreferrer' : undefined}
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
              onClick={trackLandingPageClick}
            >
              Start Landing Page
            </a>
            <a
              href="tel:+13219535199"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (321) 953-5199
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/locations"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href={landingPageHref}
                target={isLandingPageConfigured ? '_blank' : undefined}
                rel={isLandingPageConfigured ? 'noopener noreferrer' : undefined}
                className="btn-primary w-full text-center mt-4"
                onClick={trackLandingPageClick}
              >
                Start Landing Page
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Click-to-Call Button */}
      <a
        href="tel:+13219535199"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-accent-600 text-white p-4 rounded-full shadow-lg hover:bg-accent-700 transition-colors"
        aria-label="Call us"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </header>
  );
}
