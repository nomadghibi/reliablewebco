'use client';

import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. We&apos;re excited to start building your landing page!
          </p>

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What Happens Next?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Check Your Email</h3>
                  <p className="text-gray-600">
                    You&apos;ll receive a confirmation email with your receipt within a few minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We&apos;ll Reach Out</h3>
                  <p className="text-gray-600">
                    Our team will contact you within 2 hours (during business hours) to gather your business details and preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Your Page Goes Live</h3>
                  <p className="text-gray-600">
                    Within 24 hours, your professional landing page will be ready to launch!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-gray-600 mb-2">
              Questions? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
