import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { floridaLocations } from '@/data/locations';
import { localSeoServices } from '@/data/local-seo';

export const metadata: Metadata = {
  title: 'Florida Web Design Service Areas | Reliable Web Studio',
  description:
    'Explore our Florida web design service areas. Find city-focused landing page and website builds across Palm Bay, Melbourne, Orlando, Tampa, Jacksonville, and more.',
  openGraph: {
    title: 'Florida Web Design Service Areas | Reliable Web Studio',
    description:
      'City-focused web design and lead generation pages for Florida service businesses.',
    url: 'https://reliablewebstudio.com/locations',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Reliable Web Studio Florida service areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Web Design Service Areas | Reliable Web Studio',
    description:
      'City-focused web design and lead generation pages for Florida service businesses.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/locations',
  },
};

const locationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Reliable Web Studio Florida Service Areas',
  url: 'https://reliablewebstudio.com/locations',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: floridaLocations.map((location, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://reliablewebstudio.com/locations/${location.slug}`,
      name: `Web Design in ${location.city}, FL`,
    })),
  },
};

export default function LocationsPage() {
  return (
    <main className="pt-20 bg-white">
      <JsonLd data={locationsSchema} />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              Florida Local SEO Coverage
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Design Service Areas Across Florida
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              City-focused landing pages and websites for local businesses that need calls, leads, and bookings.
            </p>
            <p className="text-base md:text-lg text-blue-200">
              Built in Palm Bay, serving teams across the Space Coast and statewide markets.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96h1440V56c-120-20-240-40-360-36s-240 32-360 40-240-8-360-20S120 16 0 24v72z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="areas-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="areas-heading" className="heading-lg mb-4">Choose Your City</h2>
            <p className="text-xl text-gray-700">
              Each location page includes city-specific messaging, SEO structure, and a direct launch path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {floridaLocations.map((location) => (
              <article key={location.slug} className="rounded-xl border border-gray-200 p-6 bg-gray-50 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-800">
                    {location.region}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.city}, FL</h3>
                <p className="text-sm text-gray-500 mb-4">{location.county}</p>
                <p className="text-gray-700 mb-5">{location.summary}</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                  {location.serviceHighlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/locations/${location.slug}`} className="btn-primary w-full text-center">
                  View {location.city} Page
                </Link>
              </article>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Not seeing your city listed?</h3>
            <p className="text-gray-700 mb-6">
              We work with service businesses across Florida. We can create a dedicated location page for your market as part of your project scope.
            </p>
            <Link href="/contact" className="btn-secondary">
              Request My City Page
            </Link>
          </div>

          <div className="max-w-5xl mx-auto mt-12 rounded-2xl border border-gray-200 bg-white p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Service + City Local SEO Pages</h3>
            <p className="text-gray-700 text-center mb-6">
              Explore service-focused local pages built for higher intent matching and conversion clarity.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {localSeoServices.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${floridaLocations[0].slug}`}
                  className="block rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-primary-700 hover:text-primary-800 hover:border-primary-300 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/services" className="btn-secondary">View All Service + City Pages</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a City-Focused Website That Converts?"
        subtitle="Launch with local intent pages, clear CTAs, and a conversion-first structure."
        primaryCTA={{ text: 'Start My Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
