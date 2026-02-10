import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import LocalIntentCtas from '@/components/LocalIntentCtas';
import { floridaLocations, getLocationBySlug } from '@/data/locations';
import { localSeoServices } from '@/data/local-seo';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return floridaLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: 'Location Not Found | Reliable Web Studio',
    };
  }

  const cityTitle = `Web Design in ${location.city}, FL | Reliable Web Studio`;
  const description = `${location.summary} ${location.localIntent}`;

  return {
    title: cityTitle,
    description,
    alternates: {
      canonical: `https://reliablewebstudio.com/locations/${location.slug}`,
    },
    openGraph: {
      title: cityTitle,
      description,
      url: `https://reliablewebstudio.com/locations/${location.slug}`,
      type: 'article',
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: `${location.city}, Florida web design`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: cityTitle,
      description,
      images: ['/api/og'],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Web Design Services in ${location.city}, Florida`,
    serviceType: 'Web Design and Local SEO Website Development',
    provider: {
      '@type': 'Organization',
      name: 'Reliable Web Studio',
      url: 'https://reliablewebstudio.com',
      telephone: '+1-321-953-5199',
      email: 'hello@reliablewebstudio.com',
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: {
        '@type': 'State',
        name: 'Florida',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${location.city} Website Packages`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24-Hour Landing Page Sprint',
          },
          price: '499',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website-in-a-Week',
          },
          price: '2000',
          priceCurrency: 'USD',
        },
      ],
    },
    url: `https://reliablewebstudio.com/locations/${location.slug}`,
    description: `${location.summary} ${location.localIntent}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://reliablewebstudio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Florida Service Areas',
        item: 'https://reliablewebstudio.com/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${location.city}, FL`,
        item: `https://reliablewebstudio.com/locations/${location.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Florida Service Areas', href: '/locations' },
              { label: `${location.city}, FL` },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-800">
                  {location.region}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  {location.county}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
                Web Design in {location.city}, Florida
              </h1>
              <p className="text-xl text-gray-700 mb-4">{location.summary}</p>
              <p className="text-lg text-gray-600 mb-8">{location.localIntent}</p>

              <LocalIntentCtas pageType="location_city" citySlug={location.slug} ctaLocation="location_hero" />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={location.image}
                alt={`${location.city}, Florida skyline style graphic`}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Build for {location.city} Businesses</h2>
            <ul className="space-y-3 text-gray-700">
              {location.serviceHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Areas We Support</h2>
            <p className="text-gray-700 mb-4">
              In addition to {location.city}, we commonly build pages for nearby markets and neighborhoods:
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {location.nearbyAreas.map((area) => (
                <span key={area} className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 text-sm text-gray-800">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Need multi-city coverage? We can create a structured service + location content model that scales.
            </p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Popular Service Pages for {location.city}</h2>
          <p className="text-gray-700 mb-6">
            These pages target service + city intent combinations for stronger local SEO coverage and clearer conversion paths.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {localSeoServices.map((service) => (
              <Link
                key={`${service.slug}-${location.slug}`}
                href={`/services/${service.slug}/${location.slug}`}
                className="block rounded-lg border border-gray-200 bg-gray-50 p-4 hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                <p className="text-sm text-gray-600">{location.city}, FL</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="heading-md mb-8 text-center">{location.city}, FL Web Design FAQ</h2>
          <div className="space-y-4">
            {location.faq.map((item) => (
              <article key={item.question} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need a ${location.city}-Focused Site That Converts?`}
        subtitle="Get a fixed-scope plan, transparent timeline, and a clear launch path."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact', isCalendly: true }}
        darkBg={true}
        trackingLocation="location_cta_section"
        trackingContext={{
          page_type: 'location_city',
          city_slug: location.slug,
          service_slug: 'none',
        }}
      />
    </main>
  );
}
