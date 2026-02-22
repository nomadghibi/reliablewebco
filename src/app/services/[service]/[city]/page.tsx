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
import { getBlogPostsForCity } from '@/data/blog';

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
    return {
      title: 'Service Page Not Found | Reliable Web Studio',
      description: 'Requested local service page could not be found.',
      alternates: {
        canonical: 'https://reliablewebstudio.com/services',
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${service.name} in ${city.city}, FL | Reliable Web Studio`;
  const description = `${service.shortDescription} ${city.localIntent}`;
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
      images: [{ url: city.image, width: 1200, height: 675, alt: `${service.name} in ${city.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [city.image],
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
  const cityBlogPosts = getBlogPostsForCity(city.city, 3);

  const serviceUrl = `https://reliablewebstudio.com/services/${service.slug}/${city.slug}`;
  const relatedCitiesByRegion = floridaLocations
    .filter((item) => item.locationType !== 'county' && item.slug !== city.slug && item.region === city.region)
    .slice(0, 3);
  const relatedCities =
    relatedCitiesByRegion.length > 0
      ? relatedCitiesByRegion
      : floridaLocations
        .filter((item) => item.locationType !== 'county' && item.slug !== city.slug)
        .slice(0, 3);
  const executionPrioritiesByService: Record<string, string[]> = {
    'landing-page-design': [
      'Lead with one primary offer and one primary CTA above the fold.',
      'Use short-form sections built for fast mobile scanning.',
      'Track call clicks and form submissions from day one.',
    ],
    'website-in-a-week': [
      'Build service-page hierarchy around high-intent buyer questions.',
      'Use role-based trust sections (proof, process, guarantees) on key pages.',
      'Connect each page to one measurable conversion path.',
    ],
    'local-seo-web-design': [
      'Align title/H1/internal links to service + city intent clusters.',
      'Build location relevance without repeating thin copy blocks.',
      'Create crawl-friendly pathways between city pages and money pages.',
    ],
    'conversion-website-redesign': [
      'Preserve existing ranking assets during redesign rollout.',
      'Rebuild CTA flow to reduce drop-off at key decision points.',
      'Instrument analytics events before and after launch for comparison.',
    ],
    'service-industry-web-design': [
      'Match page language to service-specific buyer pain points.',
      'Add trust elements tied to licensing, response time, and local reputation.',
      'Standardize lead-routing workflows so inquiries are not missed.',
    ],
  };
  const executionPriorities =
    executionPrioritiesByService[service.slug] ??
    [
      'Clarify your offer immediately for local buyers.',
      'Use one primary CTA path with low-friction form flow.',
      'Track lead actions to improve conversion performance over time.',
    ];
  const faqItems = city.faq.slice(0, 3);

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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
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
          <article className="rounded-xl border border-gray-200 p-6 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Market Context in {city.city}</h2>
            <p className="text-gray-700 mb-4">{city.localIntent}</p>
            <div className="space-y-4 text-gray-700">
              {city.detailedIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Execution Priorities for {service.name}</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              {executionPriorities.map((priority) => (
                <li key={priority} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{priority}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-3">
              Ideal for: <span className="font-semibold text-gray-900">{service.idealFor}</span>
            </p>
            <p className="text-sm text-gray-600">
              Nearby areas we account for in structure: {city.nearbyAreas.join(', ')}.
            </p>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl grid lg:grid-cols-2 gap-8">
          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Works in {city.city}</h2>
            <ul className="space-y-3 text-gray-700">
              {city.serviceHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Keyword and City Signal Focus</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.keywords.map((keyword) => (
                <span key={keyword} className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 text-sm text-gray-800">
                  {keyword}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Local Signals Referenced</h3>
            <ul className="space-y-3 mb-6">
              {city.cityHighlights.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-gray-200 bg-white p-3 hover:border-primary-300"
                  >
                    <p className="font-semibold text-primary-700">{item.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href={`/locations/${city.slug}`}
              className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              Explore full {city.city} city page →
            </Link>
          </article>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {service.name} in {city.city}: Common Questions
            </h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <article key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {cityBlogPosts.length > 0 && (
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-custom max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Related {city.city} SEO Articles
            </h2>
            <p className="text-gray-700 mb-6">
              Continue with local content that supports this service + city conversion strategy.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {cityBlogPosts.map((post) => (
                <article key={post.slug} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">{post.category}</p>
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.readingTime}</p>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="rounded-xl border border-gray-200 p-6 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Service Cities in {city.region}</h2>
            <div className="grid md:grid-cols-3 gap-3">
              {relatedCities.map((relatedCity) => (
                <Link
                  key={relatedCity.slug}
                  href={`/services/${service.slug}/${relatedCity.slug}`}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-primary-700 hover:border-primary-300 hover:text-primary-800"
                >
                  {service.name} in {relatedCity.city}, FL
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Need ${service.name} for ${city.city}?`}
        subtitle="Get a fixed-scope SEO and conversion plan built for local lead generation."
        primaryCTA={{ text: 'Start 24-Hour Landing Page', href: '/checkout?package=landingPage' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact#book-call' }}
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
