import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import LocalIntentCtas from '@/components/LocalIntentCtas';
import { floridaLocations, getLocationBySlug } from '@/data/locations';
import { getLocalSeoServiceBySlug, localSeoServiceCityPairs } from '@/data/local-seo';

interface PageProps {
  params: Promise<{
    service: string;
    city: string;
  }>;
}

export function generateStaticParams() {
  return localSeoServiceCityPairs.map((pair) => ({
    service: pair.serviceSlug,
    city: pair.citySlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getLocalSeoServiceBySlug(serviceSlug);
  const city = getLocationBySlug(citySlug);

  if (!service || !city) {
    return { title: 'Service Page Not Found | Reliable Web Studio' };
  }

  const title = `${service.name} in ${city.city}, FL | Reliable Web Studio`;
  const description = `${service.shortDescription} Local SEO and conversion strategy for ${city.city}, ${city.county}.`;
  const canonical = `https://reliablewebstudio.com/services/${service.slug}/${city.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: [{ url: '/api/og', width: 1200, height: 630, alt: `${service.name} in ${city.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/api/og'],
    },
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { service: serviceSlug, city: citySlug } = await params;
  const service = getLocalSeoServiceBySlug(serviceSlug);
  const city = getLocationBySlug(citySlug);

  if (!service || !city) {
    notFound();
  }

  const serviceUrl = `https://reliablewebstudio.com/services/${service.slug}/${city.slug}`;
  const relatedCities = floridaLocations.filter((item) => item.slug !== city.slug).slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.city}, Florida`,
    serviceType: service.name,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Reliable Web Studio',
      url: 'https://reliablewebstudio.com',
      telephone: '+1-321-953-5199',
      email: 'hello@reliablewebstudio.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Palm Bay',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    url: serviceUrl,
    description: `${service.shortDescription} Built for ${city.city} businesses that need measurable lead growth.`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reliablewebstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://reliablewebstudio.com/services' },
      { '@type': 'ListItem', position: 3, name: `${city.city}, FL`, item: serviceUrl },
    ],
  };

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: `${service.name} in ${city.city}` },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-800">
                  {service.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  {city.city}, FL
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                {service.name} in {city.city}, Florida
              </h1>
              <p className="text-xl text-gray-700 mb-4">{service.shortDescription}</p>
              <p className="text-lg text-gray-600 mb-8">
                We help {city.city} businesses build SEO-ready pages that rank locally and convert visitors into calls, forms, and booked appointments.
              </p>
              <LocalIntentCtas
                pageType="service_city"
                citySlug={city.slug}
                serviceSlug={service.slug}
                ctaLocation="service_city_hero"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={city.image}
                alt={`${city.city}, Florida skyline style graphic`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl grid lg:grid-cols-2 gap-8">
          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Works in {city.city}</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✓</span><span>Service + city intent alignment in titles, headings, and schema</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✓</span><span>Conversion-first layout with repeated CTA strategy</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✓</span><span>Tracking setup for calls, form starts, and submissions</span></li>
              <li className="flex items-start gap-3"><span className="text-green-600 font-bold">✓</span><span>Scalable template system for nearby city expansion</span></li>
            </ul>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Keyword Focus</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.keywords.map((keyword) => (
                <span key={keyword} className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 text-sm text-gray-800">
                  {keyword}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Related Service Cities</h3>
            <div className="space-y-2">
              {relatedCities.map((relatedCity) => (
                <Link
                  key={relatedCity.slug}
                  href={`/services/${service.slug}/${relatedCity.slug}`}
                  className="block text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  {service.name} in {relatedCity.city}, FL
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CTASection
        title={`Need ${service.name} for ${city.city}?`}
        subtitle="Get a fixed-scope SEO and conversion plan built for local lead generation."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact', isCalendly: true }}
        darkBg={true}
        trackingLocation="service_city_cta_section"
        trackingContext={{
          page_type: 'service_city',
          city_slug: city.slug,
          service_slug: service.slug,
        }}
      />
    </main>
  );
}
