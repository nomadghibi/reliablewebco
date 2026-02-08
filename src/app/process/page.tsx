import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Process — Launch Fast Without the Agency Drag | Reliable Web Studio',
  description:
    'Simple 4-step process: Intake, Build, Review, Launch. No endless meetings. No project delays. Just results.',
  openGraph: {
    title: 'Process — Launch Fast Without the Agency Drag | Reliable Web Studio',
    description: 'Simple 4-step process: Intake, Build, Review, Launch. No endless meetings. No project delays.',
    url: 'https://reliablewebstudio.com/process',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process — Launch Fast Without the Agency Drag | Reliable Web Studio',
    description: 'Simple 4-step process: Intake, Build, Review, Launch. No endless meetings. No project delays.',
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/process',
  },
};

export default function ProcessPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">How It Works</h1>
            <p className="text-xl text-gray-700 mb-4">Simple. Fast. No drama.</p>
            <p className="text-lg text-gray-600">
              Four clear steps from idea to launch. No endless meetings. No project delays.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h2 className="heading-md mb-4">Intake (15 min)</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Quick call or form to understand your business, services, and goals.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3">What I need from you:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Business name + phone + email</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Service list + service area</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>3 competitor links you respect</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Logo (or initial text-only)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Any photos (optional)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h2 className="heading-md mb-4">Build (Fast)</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I build your site with proven conversion tactics. No fluff. No unnecessary features.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3">Timeline:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent-600 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>
                        <strong>24-Hour Landing Page:</strong> Delivered within 24 hours after intake + payment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        <strong>Website-in-a-Week:</strong> 5–7 days from intake to review
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        <strong>Growth Website:</strong> 10–14 days depending on scope
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h2 className="heading-md mb-4">Review (1 Round)</h2>
                <p className="text-lg text-gray-700 mb-4">
                  You get one revision round to tweak copy, images, or layout. Simple feedback = fast turnaround.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3">Revision Policy:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Landing page: 1 revision round included</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Website-in-a-Week: 1 revision round included</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Growth Website: 2 revision rounds included</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <svg
                        className="w-5 h-5 text-gray-400 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Additional rounds billed hourly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h2 className="heading-md mb-4">Launch (Live)</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Site goes live on your domain (or temporary URL). Forms tested. Mobile + desktop checked.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-3">Acceptance Criteria:</h3>
                  <p className="text-gray-700 mb-3">Project is complete when:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Page is live on provided domain (or temporary URL)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Forms tested and working</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Mobile + desktop responsiveness verified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Our Guarantee</h2>
            <p className="text-xl mb-4">
              If you complete the intake and I miss the agreed deadline, you get $100 back.
            </p>
            <p className="text-lg">(No drama. No excuses.)</p>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Payment Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">24-Hour Landing Page</h3>
                <p className="text-3xl font-bold text-primary-600 mb-2">$499</p>
                <p className="text-gray-700">Pay 100% upfront to start</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Website-in-a-Week</h3>
                <p className="text-3xl font-bold text-primary-600 mb-2">$2,000</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• $1,000 deposit to start</li>
                  <li>• $1,000 before launch</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Growth Website</h3>
                <p className="text-3xl font-bold text-primary-600 mb-2">$3,500-$4,500</p>
                <p className="text-gray-700">50% deposit, 50% before launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to start?"
        subtitle="Book a 10-minute intake call and let's get you online."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'View Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
