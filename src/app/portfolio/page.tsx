import type { Metadata } from 'next';
import { Suspense } from 'react';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import PortfolioGrid from '@/components/PortfolioGrid';
import FeaturedProject from '@/components/portfolio/FeaturedProject';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio — Real Websites, Real Results | Reliable Web Studio',
  description:
    'View our live portfolio of websites and web applications. From 24-hour landing pages to full-stack platforms. See real projects serving real customers.',
  openGraph: {
    title: 'Portfolio — Real Websites, Real Results | Reliable Web Studio',
    description: 'View our live portfolio of websites and web applications. From 24-hour landing pages to full-stack platforms.',
    url: 'https://reliablewebstudio.com/portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Real Websites, Real Results | Reliable Web Studio',
    description: 'View our live portfolio of websites and web applications. From 24-hour landing pages to full-stack platforms.',
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/portfolio',
  },
};

const featuredItems = portfolioItems.filter((item) => item.featured);

const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Reliable Web Studio Portfolio',
  url: 'https://reliablewebstudio.com/portfolio',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: portfolioItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://reliablewebstudio.com/portfolio/${item.slug}`,
      item: {
        '@type': 'CreativeWork',
        name: item.title,
        image: `https://reliablewebstudio.com${item.image}`,
        category: item.category,
      },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <JsonLd data={portfolioJsonLd} />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Live Portfolio + Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">Real Websites. Real Results.</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              See live projects built for real businesses, and review the case study behind each build.
            </p>
            <p className="text-lg text-blue-200/80">
              Filter by tier, industry, status, and keywords to find projects like yours.
            </p>

            <div className="flex items-center justify-center gap-2 mt-6 text-blue-200">
              <svg aria-hidden="true" className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8" />
              </svg>
              <span className="text-sm md:text-base font-medium">Built on Florida&apos;s Space Coast - Serving Businesses Nationwide</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96h1440V56c-120-20-240-40-360-36s-240 32-360 40-240-8-360-20S120 16 0 24v72z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="featured-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-flex items-center bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                FEATURED CASE STUDIES
              </span>
            </div>
            <h2 id="featured-heading" className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Selected launches across landing pages, websites, and platform builds.</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {featuredItems.map((item) => (
              <FeaturedProject key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" aria-labelledby="all-projects-heading">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 id="all-projects-heading" className="heading-lg mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Use filters and search to quickly find the project type that matches your business.</p>
          </div>

          <Suspense fallback={<p className="text-center text-gray-500 py-10">Loading portfolio filters...</p>}>
            <PortfolioGrid items={portfolioItems} />
          </Suspense>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="stats-heading">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="stats-heading" className="heading-lg mb-4">Built For Results</h2>
              <p className="text-xl text-gray-600">Every project follows proven principles that drive conversions.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Fast Launches</div>
                <p className="text-gray-700">Delivery windows matched to business urgency, from 24 hours to full platform MVPs.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-50 to-white border border-accent-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 text-white rounded-full mb-4">
                  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Mobile First</div>
                <p className="text-gray-700">Designed for mobile, optimized for desktop, and structured for real-world customer behavior.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Conversion Focused</div>
                <p className="text-gray-700">Clear CTA paths, trust signals, and decision-stage content throughout every build.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="heading-lg mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from business owners who used these builds to improve visibility and lead flow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                &quot;We went from no clear website funnel to a site that actually supports sales conversations.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">M</div>
                <div>
                  <p className="font-semibold text-gray-900">Mike R.</p>
                  <p className="text-sm text-gray-600">HVAC company, Palm Bay, FL</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                &quot;The launch was fast, and the messaging finally matched what we actually offer clients.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 font-bold">S</div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah K.</p>
                  <p className="text-sm text-gray-600">Cleaning service, Melbourne, FL</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                &quot;The portfolio and case-study approach made it much easier for prospects to trust us faster.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">C</div>
                <div>
                  <p className="font-semibold text-gray-900">Carlos M.</p>
                  <p className="text-sm text-gray-600">Service business owner, Brevard County, FL</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">All projects designed and built by Reliable Web Studio (Best Computer Tech LLC)</p>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Success Story?"
        subtitle="Choose your tier, review real examples, then launch with a focused build process."
        primaryCTA={{ text: 'Start My Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
