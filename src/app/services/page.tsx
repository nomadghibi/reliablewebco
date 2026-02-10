import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { floridaLocations } from '@/data/locations';
import { localSeoServices } from '@/data/local-seo';

export const metadata: Metadata = {
  title: 'Florida Service + City Pages | Local SEO Web Design',
  description:
    'Browse service and city-focused local SEO pages for Florida businesses. Find the right website strategy by service type and location intent.',
  alternates: {
    canonical: 'https://reliablewebstudio.com/services',
  },
  openGraph: {
    title: 'Florida Service + City Pages | Local SEO Web Design',
    description:
      'Service and city-focused page framework built for Florida local SEO and lead conversion.',
    url: 'https://reliablewebstudio.com/services',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Florida local SEO service pages' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Service + City Pages | Local SEO Web Design',
    description:
      'Service and city-focused page framework built for Florida local SEO and lead conversion.',
    images: ['/api/og'],
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Florida Local SEO Service Pages',
  url: 'https://reliablewebstudio.com/services',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: localSeoServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: `https://reliablewebstudio.com/services/${service.slug}/${floridaLocations[0].slug}`,
    })),
  },
};

export default function ServicesPage() {
  const featuredCities = floridaLocations.slice(0, 4);

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={servicesSchema} />

      <section className="section-padding bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Service + City SEO Page Framework</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Built to match local search intent and convert visits into calls, forms, and bookings.
          </p>
          <p className="text-blue-200">
            Choose a service model, then drill down into your target Florida city pages.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Choose a Service Strategy</h2>
            <p className="text-xl text-gray-700">Each service strategy includes SEO-ready city pages with conversion-focused layout patterns.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {localSeoServices.map((service) => (
              <article key={service.slug} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                <p className="text-sm text-gray-600 mb-5">Best for: {service.idealFor}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.keywords.map((keyword) => (
                    <span key={keyword} className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {featuredCities.map((city) => (
                    <Link
                      key={`${service.slug}-${city.slug}`}
                      href={`/services/${service.slug}/${city.slug}`}
                      className="block text-sm font-semibold text-primary-700 hover:text-primary-800"
                    >
                      {service.name} in {city.city}, FL
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Service + City Pages Built for Your Market?"
        subtitle="Get a scalable local SEO framework with clean tracking and conversion-first structure."
        primaryCTA={{ text: 'Start My Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
