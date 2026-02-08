import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Reliable Web Studio — 24-Hour Landing Pages & Websites in a Week',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Web Studio — 24-Hour Landing Pages & Websites in a Week',
    description:
      'Get a modern landing page in 24 hours or a complete website in 7 days. Built to generate calls, form leads, and bookings.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com',
  },
};

export default function Home() {
  return (
    <main>
      {/* HERO — Space Coast Night Sky */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 overflow-hidden">
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
              Launch a lead-generating website fast — fixed price, professional, and built to convert.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Get a modern landing page <strong className="text-white">in 24 hours</strong> or a complete <strong className="text-white">5-page website in 7 days</strong>. Designed to generate <strong className="text-white">calls, form leads, and bookings</strong>.
            </p>

            {/* Space Coast Location Callout */}
            <div className="flex items-center justify-center gap-2 mb-8 text-blue-200">
              {/* Rocket icon */}
              <svg aria-hidden="true" className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8" />
              </svg>
              <span className="text-sm md:text-base font-medium">
                Serving Palm Bay, Melbourne &amp; Florida&apos;s Space Coast
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <PaymentButton
                type="landingPage"
                text="Start My $499 Page"
                variant="primary"
                className="px-8 py-4 text-lg"
              />
              <CalendlyButton
                text="Book a 10-Minute Call"
                className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10"
                variant="secondary"
              />
            </div>

            {/* Space Coast Trust Badge */}
            <div className="flex items-center justify-center gap-2 mb-6 text-blue-300/80">
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm">
                Proudly Serving Florida&apos;s Space Coast &nbsp;|&nbsp; Palm Bay · Melbourne · Brevard County
              </span>
            </div>

            <p className="text-sm text-blue-300/70">Speed + quality without agency timelines.</p>

            {/* Free Hosting Banner */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="font-semibold">FREE Hosting & Domain for 1 Year — All Packages!</span>
              </div>
              <p className="text-xs text-blue-300/50">Free for year 1 (we set it up; renewals billed at registrar rates).</p>
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

      {/* OFFER CARDS */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="offers-heading">
        <div className="container-custom">
          <h2 id="offers-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose your speed
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 24-Hour Landing Page Sprint */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-accent-500 relative">
              <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                + Free Hosting & Domain
              </div>
              <div className="text-accent-600 font-bold text-sm uppercase mb-2">Most Popular</div>
              <h3 className="text-3xl font-bold mb-4">24-Hour Landing Page Sprint — $499</h3>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>1-page conversion landing page</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Form + click-to-call + booking button</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Basic SEO + analytics</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              <h3 className="text-3xl font-bold mb-4">Website-in-a-Week — $2,000</h3>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Up to 8 pages</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Mobile-first + fast performance</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Contact + tracking + launch</span>
                </li>
                <li className="flex items-start">
                  <svg aria-hidden="true" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span><strong>Live in 5–7 days</strong></span>
                </li>
              </ul>
              <div className="space-y-3">
                <PaymentButton
                  type="websiteDeposit"
                  text="Start My $2,000 Website"
                  variant="primary"
                  fullWidth
                />
                <CalendlyButton
                  text="Book a Call First"
                  className="w-full text-center"
                  variant="secondary"
                />
              </div>
            </div>
          </div>

          {/* Content Note */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-4 rounded-xl">
              <svg aria-hidden="true" className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700">
                <strong>Just tell us what business you&apos;re in — we take care of the rest.</strong> Content & images? Provide your own or we source them for you.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF — Ocean-inspired tint */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
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
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Subtle wave accent at top */}
        <div className="absolute top-0 left-0 right-0 opacity-[0.04]" aria-hidden="true">
          <svg className="w-full h-12" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48V24c240-32 480 16 720 8s480-40 720-16v32H0z" fill="currentColor" className="text-blue-900" />
          </svg>
        </div>
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

      {/* PORTFOLIO PREVIEW — Sandy coastal tones */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/60 to-orange-50/40">
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
                  <Image
                    src={demo.image}
                    alt={demo.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
