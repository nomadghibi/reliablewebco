import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import PaymentButton from '@/components/PaymentButton';

export const metadata: Metadata = {
  title: 'Pricing — 24-Hour Landing Pages ($499) | Reliable Web Studio',
  description:
    'Choose the build speed you need. 24-Hour Landing Page ($499), Website-in-a-Week ($2,000), Growth Website ($3,500+), Authority Website ($5,500+), Platform MVP ($8,000+), and monthly care plans.',
};

export default function PricingPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Choose the build speed you need</h1>
            <p className="text-xl text-gray-700 mb-6">
              Every package is designed to generate leads. Fixed price, fast delivery, professional launch.
            </p>

            {/* Free Hosting Banner */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">FREE Hosting & Domain for 1 Year</div>
                <div className="text-green-100 text-sm">Included with all packages — No hidden fees!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="packages" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* 24-Hour Landing Page */}
            <div id="landing-page" className="bg-white rounded-lg shadow-xl p-8 border-2 border-accent-500 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <div className="text-accent-600 font-bold text-sm uppercase mb-2">Most Popular</div>
              <h2 className="text-3xl font-bold mb-4">24-Hour Landing Page</h2>
              <div className="text-5xl font-bold mb-6">
                $499
                <span className="text-lg font-normal text-gray-600 ml-2">one-time</span>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Best for:</h3>
                <p className="text-gray-700">Businesses that need calls/leads NOW.</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1-page high-converting landing page</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Mobile-first + fast performance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Click-to-call + lead form</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Basic on-page SEO (title/meta/OG)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Analytics ready</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1 revision round</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Does NOT include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Multi-page site</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Custom backend/web app features</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Advanced SEO campaigns</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Payment:</h3>
                <p className="text-gray-700">Pay 100% upfront to start</p>
                <p className="text-sm text-gray-600 mt-1">Delivery: within 24 hours AFTER intake is complete</p>
              </div>

              <PaymentButton
                type="landingPage"
                text="Buy Now — $499"
                variant="accent"
                fullWidth
              />
            </div>

            {/* Website-in-a-Week */}
            <div id="website-in-a-week" className="bg-white rounded-lg shadow-xl p-8 border-2 border-primary-500 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <div className="text-primary-600 font-bold text-sm uppercase mb-2">Best Value</div>
              <h2 className="text-3xl font-bold mb-4">Website-in-a-Week</h2>
              <div className="text-5xl font-bold mb-6">
                $2,000
                <span className="text-lg font-normal text-gray-600 ml-2">one-time</span>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Home, About, Services, Service Area, Contact</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Strong CTA structure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Forms routed to email</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Basic SEO + indexing setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>1 revision round</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Launch support</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Payment:</h3>
                <p className="text-gray-700">$1,000 deposit to start</p>
                <p className="text-gray-700">$1,000 before launch</p>
              </div>

              <Link href="/contact" className="btn-primary w-full text-center">
                Book a Call
              </Link>
            </div>
          </div>

          {/* Growth Website & Authority Website */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Growth Website */}
            <div id="growth-website" className="bg-white rounded-lg shadow-xl p-8 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <h2 className="text-3xl font-bold mb-4">Growth Website</h2>
              <div className="text-4xl font-bold mb-2">
                $3,500–$4,500
              </div>
              <p className="text-gray-600 mb-6">Delivery: 7–10 days</p>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Adds:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>8–12 pages (separate service pages for SEO)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Reviews/testimonials + FAQ</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Stronger local SEO structure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Optional blog setup</span>
                  </li>
                </ul>
              </div>

              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200 w-full text-center">
                Request a Quote
              </Link>
            </div>

            {/* Authority Website */}
            <div id="authority-website" className="bg-white rounded-lg shadow-xl p-8 border-2 border-primary-500 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <h2 className="text-3xl font-bold mb-4">Authority Website</h2>
              <div className="text-4xl font-bold mb-2">
                $5,500–$7,500+
              </div>
              <p className="text-gray-600 mb-6">Delivery: 2–3 weeks</p>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>12–20 pages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Multi-service + multi-area SEO buildout</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Premium look and trust system</span>
                  </li>
                </ul>
              </div>

              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200 w-full text-center">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Platform / Web App MVP */}
          <div className="max-w-3xl mx-auto">
            <div id="web-app" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl p-8 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <h2 className="text-3xl font-bold mb-4">Platform / Web App MVP</h2>
              <div className="text-4xl font-bold mb-6">
                $8,000–$25,000+
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-white">Includes:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Login/JWT + roles</li>
                  <li>• Database CRUD + admin dashboard</li>
                  <li>• Payments/subscriptions (optional)</li>
                  <li>• Integrations (optional)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Examples:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Customer portals</li>
                  <li>• Booking systems</li>
                  <li>• Internal dashboards</li>
                  <li>• SaaS platforms</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full text-center"
              >
                Schedule Scope Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Care Plans */}
      <section id="care-plans" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-4">Monthly Care Plans</h2>
            <p className="text-xl text-gray-700">Keep your site fast, secure, and up-to-date</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-6">
                $99<span className="text-lg font-normal text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Hosting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Backups</span>
                </li>
              </ul>
              <PaymentButton
                type="carePlanBasic"
                text="Get Started"
                variant="secondary"
                fullWidth
              />
            </div>

            {/* Standard */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-primary-500">
              <div className="text-primary-600 font-bold text-sm uppercase mb-2">Popular</div>
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <div className="text-4xl font-bold mb-6">
                $199<span className="text-lg font-normal text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Small edits (up to 60 min/mo)</span>
                </li>
              </ul>
              <PaymentButton
                type="carePlanStandard"
                text="Get Started"
                variant="primary"
                fullWidth
              />
            </div>

            {/* Pro */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $299<span className="text-lg font-normal text-gray-600">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Everything in Standard</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Conversion/SEO reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Performance tweaks</span>
                </li>
              </ul>
              <PaymentButton
                type="carePlanPro"
                text="Get Started"
                variant="secondary"
                fullWidth
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-Ons</h2>
            <p className="text-xl text-gray-700">Enhance your website with these optional services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Extra Revision Round</h3>
              <div className="text-3xl font-bold text-primary-600 mb-3">$99</div>
              <p className="text-gray-600">Additional revision round beyond what's included in your package</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Pixel Setup</h3>
              <div className="text-3xl font-bold text-primary-600 mb-3">$99</div>
              <p className="text-gray-600">Meta/TikTok/Google Ads pixel installation and configuration</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Email/SMS Follow-up Automation</h3>
              <div className="text-3xl font-bold text-primary-600 mb-3">$199</div>
              <p className="text-gray-600">Automated follow-up sequences for leads</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Google Business Profile Optimization</h3>
              <div className="text-3xl font-bold text-primary-600 mb-3">$199–$399</div>
              <p className="text-gray-600">Complete GBP setup and optimization for local SEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Offer */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-primary-500">
            <div className="text-center">
              <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-4">
                Special Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upgrade & Save $200</h2>
              <p className="text-xl text-gray-700 mb-6">
                <strong>Upgrade to Website-in-a-Week within 7 days and get $200 credit</strong> from your $499 sprint.
              </p>
              <p className="text-gray-600 mb-8">
                Start with the 24-Hour Landing Page to test the waters, then upgrade to a full 5-page website and save $200.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                Start My $499 Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to get started?"
        subtitle="Book a call or start your $499 landing page right now."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact', isCalendly: true }}
        darkBg={true}
      />
    </main>
  );
}
