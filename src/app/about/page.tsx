import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About — ReliableWeb Studio | Fast, Professional Website Development',
  description:
    'Learn about ReliableWeb Studio. We build lead-generating websites fast. No agency bloat, no endless timelines — just professional websites that convert.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Fast Launch. Clear Pricing. Built to Convert.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              We&apos;re not a traditional agency. We&apos;re a lead generation website builder for businesses that need results now.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                ReliableWeb Studio (operated by Best Computer Tech LLC) specializes in building high-converting websites for local service businesses.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We saw a problem: most small businesses were stuck between cheap template sites that don&apos;t convert and expensive agency builds that take months.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                So we created a better solution — professional, conversion-focused websites delivered fast at a fixed price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Us Different</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3">Speed Without Sacrifice</h3>
                <p className="text-gray-700">
                  We deliver fast because we&apos;ve built systems, not because we&apos;re cutting corners. Every site is custom-built to your business and optimized for conversions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3">Fixed Pricing</h3>
                <p className="text-gray-700">
                  No hourly rates. No scope creep. You know exactly what you&apos;re paying and what you&apos;re getting before we start.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Conversion-First Design</h3>
                <p className="text-gray-700">
                  We don&apos;t build pretty websites that sit there. We build lead-generating machines with clear CTAs, fast load times, and mobile-first design.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-2xl font-bold mb-3">No Agency Bloat</h3>
                <p className="text-gray-700">
                  No account managers. No endless meetings. No "discovery phases." Just a simple intake, fast build, one revision round, and launch.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-3">Modern Stack</h3>
                <p className="text-gray-700">
                  We use modern, fast technologies (not WordPress unless you specifically need it). Your site loads fast, ranks better, and converts higher.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-3">Clear Boundaries</h3>
                <p className="text-gray-700">
                  We tell you exactly what&apos;s included and what&apos;s not. No surprises. No hidden fees. If you need more, we&apos;ll quote it upfront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Serve</h2>

            <div className="bg-primary-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Local Service Businesses</h3>
              <p className="text-lg text-gray-700 mb-4">
                We specialize in businesses that need leads now, not "branding exercises":
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>HVAC companies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Plumbing services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Cleaning companies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Dental practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Landscaping services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Contractors & remodelers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Home services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>And more...</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 text-center">
              Based in Florida, but we work with service businesses anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process is Simple</h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">You fill out a quick intake form (5 minutes)</h3>
                  <p className="text-gray-700">Tell us about your business, services, and goals. Upload your logo and photos if you have them.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">We build your site fast</h3>
                  <p className="text-gray-700">24 hours for a landing page. 5–7 days for a full website. We write the copy, design the layout, and set up tracking.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">You review and request changes</h3>
                  <p className="text-gray-700">One revision round is included. We make it right, fast.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">We launch your site</h3>
                  <p className="text-gray-700">Live on your domain (or a temporary URL). Forms tested. Mobile + desktop checked. Ready to generate leads.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/process" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-700 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                See Full Process Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Guarantee</h2>
            <p className="text-xl mb-4">
              If you complete the intake and we miss the agreed deadline, you get $100 back.
            </p>
            <p className="text-lg">No drama. No excuses.</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 mb-8">
              Have questions? Want to see if we&apos;re a good fit? Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13219535199"
                className="inline-flex items-center justify-center gap-2 text-xl font-bold text-primary-600 hover:text-primary-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (321) 953-5199
              </a>
              <a
                href="mailto:hello@reliablewebco.com"
                className="inline-flex items-center justify-center gap-2 text-xl font-bold text-primary-600 hover:text-primary-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@reliablewebco.com
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-8">Response time: Within 24 hours</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to get started?"
        subtitle="Launch your lead-generating website fast."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact', isCalendly: true }}
        darkBg={true}
      />
    </main>
  );
}
