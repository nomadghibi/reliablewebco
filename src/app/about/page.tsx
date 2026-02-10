import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Reliable Web Studio',
  description:
    '15+ years building lead-generating websites for local businesses in Palm Bay, Melbourne, and Brevard County, Florida.',
  url: 'https://reliablewebstudio.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Reliable Web Studio',
    legalName: 'Best Computer Tech LLC',
    url: 'https://reliablewebstudio.com',
    telephone: '+1-321-953-5199',
    email: 'hello@reliablewebstudio.com',
    areaServed: [
      { '@type': 'City', name: 'Palm Bay', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'City', name: 'Melbourne', containedInPlace: { '@type': 'State', name: 'Florida' } },
      { '@type': 'AdministrativeArea', name: 'Brevard County', containedInPlace: { '@type': 'State', name: 'Florida' } },
    ],
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palm Bay',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  },
};

export const metadata: Metadata = {
  title: 'About — Reliable Web Studio | 15+ Years Serving Palm Bay, Melbourne & Brevard County',
  description:
    'Reliable Web Studio has 15+ years of experience building lead-generating websites for local businesses in Palm Bay, Melbourne, and Brevard County, Florida. Fast, professional, built to convert.',
  openGraph: {
    title: 'About — Reliable Web Studio | 15+ Years Serving Brevard County, FL',
    description: '15+ years building lead-generating websites for local businesses in Palm Bay, Melbourne, and Brevard County, Florida.',
    url: 'https://reliablewebstudio.com/about',
    type: 'website',
    images: [
      {
        url: '/api/og/about',
        width: 1200,
        height: 630,
        alt: 'About Reliable Web Studio — 15+ Years Serving Florida\'s Space Coast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Reliable Web Studio | 15+ Years Serving Brevard County, FL',
    description: '15+ years building lead-generating websites for local businesses in Palm Bay, Melbourne, and Brevard County, Florida.',
    images: ['/api/og/about'],
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <JsonLd data={aboutSchema} />

      {/* Hero — Space Coast Night Sky */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 overflow-hidden">
        {/* CSS Stars */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[15%] animate-pulse opacity-80" />
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[8%] left-[45%] animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[75%] animate-pulse opacity-70" style={{ animationDelay: '1s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[20%] left-[30%] opacity-50" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[5%] left-[60%] animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[25%] left-[85%] opacity-40" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[12%] left-[92%] animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[18%] left-[8%] opacity-60" />
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[6%] left-[25%] animate-pulse opacity-40" style={{ animationDelay: '0.8s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[22%] left-[55%] opacity-50" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[3%] left-[38%] opacity-70" />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[28%] left-[70%] opacity-30" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Fast Launch. Clear Pricing. Built to Convert.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              We&apos;re not a traditional agency. We&apos;re a lead generation website builder for businesses that need results now.
            </p>

            {/* Space Coast Location Callout */}
            <div className="flex items-center justify-center gap-2 mt-6 text-blue-200">
              <svg aria-hidden="true" className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8" />
              </svg>
              <span className="text-sm md:text-base font-medium">
                15+ Years Serving Palm Bay, Melbourne &amp; Florida&apos;s Space Coast
              </span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96h1440V56c-120-20-240-40-360-36s-240 32-360 40-240-8-360-20S120 16 0 24v72z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="who-we-are-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="who-we-are-heading" className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Reliable Web Studio (operated by Best Computer Tech LLC) specializes in building high-converting websites for local service businesses. Based on Florida&apos;s Space Coast, we&apos;ve been serving <strong>Palm Bay, Melbourne, and Brevard County</strong> businesses for over <strong>15 years</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We saw a problem: most small businesses were stuck between cheap template sites that don&apos;t convert and expensive agency builds that take months. Local companies across Brevard County — from HVAC contractors in Palm Bay to dental practices in Melbourne — deserved better.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                So we created a better solution — professional, conversion-focused websites delivered fast at a fixed price. With 15+ years of experience in the Florida market, we understand what local service businesses need to generate calls, bookings, and leads online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different — Ocean tint */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50" aria-labelledby="different-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="different-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Us Different</h2>

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
                  No account managers. No endless meetings. No &quot;discovery phases.&quot; Just a simple intake, fast build, one revision round, and launch.
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
      <section className="py-16 md:py-24 bg-white" aria-labelledby="who-we-serve-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="who-we-serve-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Serve</h2>

            <div className="bg-primary-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Local Service Businesses</h3>
              <p className="text-lg text-gray-700 mb-4">
                We specialize in businesses that need leads now, not &quot;branding exercises&quot;:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>HVAC companies</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Plumbing services</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Cleaning companies</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Dental practices</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Landscaping services</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Contractors & remodelers</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Home services</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>And more...</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 text-center">
              Proudly based in <strong>Palm Bay, Florida</strong> and serving businesses across <strong>Melbourne, Brevard County</strong>, and the entire Space Coast. We also work with service businesses anywhere in the U.S.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="process-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process is Simple</h2>

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
      <section className="py-16 md:py-24 bg-primary-600 text-white" aria-labelledby="guarantee-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="guarantee-heading" className="text-3xl md:text-4xl font-bold mb-6">Our Guarantee</h2>
            <p className="text-xl mb-4">
              If you complete the intake and we miss the agreed deadline, you get $100 back.
            </p>
            <p className="text-lg">No drama. No excuses.</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="contact-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 mb-8">
              Have questions? Want to see if we&apos;re a good fit? Let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13219535199"
                className="inline-flex items-center justify-center gap-2 text-xl font-bold text-primary-600 hover:text-primary-700"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                href="mailto:hello@reliablewebstudio.com"
                className="inline-flex items-center justify-center gap-2 text-xl font-bold text-primary-600 hover:text-primary-700"
              >
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-sm text-gray-600 mb-8">Response time: Within 24 hours</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to get started?"
        subtitle="Launch your lead-generating website fast."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact' }}
        darkBg={true}
      />
    </main>
  );
}
