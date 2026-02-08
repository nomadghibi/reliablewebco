import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import CalendlyButton from '@/components/CalendlyButton';
import PaymentButton from '@/components/PaymentButton';

export const metadata: Metadata = {
  title: 'Reliable Web Studio — 24-Hour Landing Pages & Websites in a Week',
  description:
    'Get a modern landing page in 24 hours ($499) or a complete website in 7 days ($2,000). Fixed price, professional, built to convert. Florida web design for local service businesses.',
  openGraph: {
    title: 'Reliable Web Studio — 24-Hour Landing Pages & Websites in a Week',
    description:
      'Get a modern landing page in 24 hours or a complete website in 7 days. Built to generate calls, form leads, and bookings.',
    url: 'https://reliablewebstudio.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Web Studio — 24-Hour Landing Pages & Websites in a Week',
    description:
      'Get a modern landing page in 24 hours or a complete website in 7 days. Built to generate calls, form leads, and bookings.',
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com',
  },
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Launch a lead-generating website fast — fixed price, professional, and built to convert.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Get a modern landing page <strong>in 24 hours</strong> or a complete <strong>5-page website in 7 days</strong>. Designed to generate <strong>calls, form leads, and bookings</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <PaymentButton
                type="landingPage"
                text="Start My $499 Page"
                variant="primary"
                className="px-8 py-4 text-lg"
              />
              <CalendlyButton
                text="Book a 10-Minute Call"
                className="px-8 py-4 text-lg"
                variant="secondary"
              />
            </div>

            <p className="text-sm text-gray-500">Speed + quality without agency timelines.</p>

            {/* Free Hosting Banner */}
            <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="font-semibold">FREE Hosting & Domain for 1 Year — All Packages!</span>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER CARDS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 24-Hour Landing Page Sprint */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-accent-500 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <div className="text-accent-600 font-bold text-sm uppercase mb-2">Most Popular</div>
              <h2 className="text-3xl font-bold mb-4">24-Hour Landing Page Sprint — $499</h2>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>1-page conversion landing page</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Form + click-to-call + booking button</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Basic SEO + analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Live in 24 hours</strong></span>
                </li>
              </ul>
              <PaymentButton
                type="landingPage"
                text="Start My $499 Page"
                variant="accent"
                fullWidth
              />
            </div>

            {/* Website-in-a-Week */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-primary-500 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <div className="text-primary-600 font-bold text-sm uppercase mb-2">Best Value</div>
              <h2 className="text-3xl font-bold mb-4">Website-in-a-Week — $2,000</h2>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 8 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Mobile-first + fast performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Contact + tracking + launch</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Live in 5–7 days</strong></span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200 w-full text-center">
                Get Website-in-a-Week
              </Link>
            </div>
          </div>

          {/* Content Note */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-4 rounded-xl">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">
                <strong>Just tell us what business you're in — we take care of the rest.</strong> Content & images? Provide your own or we source them for you.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Our Sites Convert</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold text-lg mb-2">Conversion-first layouts</h3>
                <p className="text-gray-600">Built for calls and leads</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-lg mb-2">Fast turnaround</h3>
                <p className="text-gray-600">Clear scope boundaries</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="font-bold text-lg mb-2">Professional launch</h3>
                <p className="text-gray-600">Modern stack, clean design</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-2">
                  &quot;Clean, fast, and the phone started ringing.&quot;
                </p>
                <p className="text-sm text-gray-600">— Local Service Owner</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-gray-700 italic mb-2">
                  &quot;Finally a site that looks legit and converts.&quot;
                </p>
                <p className="text-sm text-gray-600">— Contractor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Pay & Complete Intake</h3>
              <p className="text-gray-600 text-sm">5 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Preview Delivered Fast</h3>
              <p className="text-gray-600 text-sm">Same day / Day 3</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">One Revision Round</h3>
              <p className="text-gray-600 text-sm">Fast iteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Go Live</h3>
              <p className="text-gray-600 text-sm">24h or 7 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See what your site can look like</h2>
            <p className="text-xl text-gray-700">
              Choose a style, then we customize it to your offer and service area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Destiny Insights', image: '/images/portfolio/destinyinsights.jpg', url: 'https://www.destiny-insights.com', category: 'AI Platform' },
              { name: 'TechEze AI', image: '/images/portfolio/techezeai.jpg', url: 'https://www.techezeai.com', category: 'AI Consulting' },
              { name: 'StrideSafe', image: '/images/portfolio/stridesafe.jpg', url: 'https://stridesafe.vercel.app', category: 'Healthcare Platform' },
              { name: 'HVAC Pro Office', image: '/images/portfolio/hvacprooffice.png', url: 'https://hvacprooffice.com', category: 'Platform MVP' },
            ].map((demo, idx) => (
              <a
                key={idx}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold flex items-center gap-2">
                      View Live
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-1">{demo.category}</div>
                  <h3 className="font-bold text-gray-900">{demo.name}</h3>
                  <p className="text-xs text-gray-500 mt-2">Designed by Reliable Web Studio - Best Computer Tech LLC</p>
                </div>
              </a>
            ))}

            {/* Your Site Here - CTA Card */}
            <Link
              href="/contact"
              className="group bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-primary-700 hover:to-primary-800 md:col-span-2 md:max-w-md md:mx-auto"
            >
              <div className="aspect-video relative flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Site Here</h3>
                  <p className="text-primary-100 text-sm">Starting at $499</p>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-1">Free Hosting & Domain</div>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  Get Started Today
                  <svg className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              See Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">All Packages</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">$499 Landing Page (24h)</span>
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">View →</Link>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">$2,000 Website-in-a-Week</span>
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">View →</Link>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">$3,500–$4,500 Growth Website</span>
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">View →</Link>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">$5,500–$7,500+ Authority Website</span>
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">View →</Link>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">$8,000–$25,000+ Platform MVP</span>
              <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">View →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="Need something live fast?"
        subtitle="Start with the $499 sprint. Upgrade anytime."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact', isCalendly: true }}
        darkBg={true}
      />
    </main>
  );
}
