'use client';

import Link from 'next/link';

export default function CheckoutCancelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Back Icon */}
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            No Problem!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your checkout was cancelled. No charges were made.
          </p>

          {/* Options */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              We're happy to answer any questions before you decide. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="tel:+13219535199"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
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
              <span className="hidden sm:inline text-gray-400">|</span>
              <a
                href="mailto:hello@reliablewebstudio.com"
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@reliablewebstudio.com
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://buy.stripe.com/28E28r2dh7xw81B5t0dUY09"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try Again - $499
            </a>
            <Link href="/pricing" className="btn-secondary">
              View All Pricing
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
