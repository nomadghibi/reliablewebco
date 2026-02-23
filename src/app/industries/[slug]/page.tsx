import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import SectionViewTracker from '@/components/SectionViewTracker';
import TrackedLink from '@/components/TrackedLink';
import { getIndustryBySlug, industryPlaybooks } from '@/data/industries';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return industryPlaybooks.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Page Not Found | Reliable Web Studio',
      description: 'Requested industry playbook could not be found.',
      alternates: {
        canonical: 'https://www.reliablewebstudio.com/industries',
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${industry.name} | Reliable Web Studio`;
  const description = `${industry.summary} ${industry.heroSubtitle}`;
  const canonical = `https://www.reliablewebstudio.com/industries/${industry.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: [{ url: '/api/og', width: 1200, height: 630, alt: industry.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/api/og'],
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const pageUrl = `https://www.reliablewebstudio.com/industries/${industry.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industry.name,
    description: industry.summary,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Reliable Web Studio',
      url: 'https://www.reliablewebstudio.com',
      telephone: '+1-321-953-5199',
      email: 'hello@reliablewebstudio.com',
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
      addressCountry: 'US',
    },
    url: pageUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.reliablewebstudio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industry Playbooks',
        item: 'https://www.reliablewebstudio.com/industries',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: industry.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom max-w-6xl">
          <SectionViewTracker eventName="section_view" sectionName="industry_hero" />
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industry Playbooks', href: '/industries' },
              { label: industry.name },
            ]}
          />

          <div className="max-w-4xl">
            <p className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
              Industry Playbook
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{industry.heroTitle}</h1>
            <p className="mt-5 text-xl text-gray-700">{industry.heroSubtitle}</p>
            <p className="mt-4 text-gray-600">Ideal for: {industry.idealFor}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href="/checkout?package=landingPage"
                className="btn-primary"
                eventName="cta_primary_click"
                eventParams={{
                  cta_text: 'Start 24-Hour Landing Page',
                  location: 'industry_hero',
                  industry_slug: industry.slug,
                }}
              >
                Start 24-Hour Landing Page
              </TrackedLink>
              <TrackedLink
                href="/contact#book-call"
                className="btn-secondary"
                eventName="cta_call_click"
                eventParams={{
                  cta_text: 'Book a 10-Minute Call',
                  location: 'industry_hero',
                  industry_slug: industry.slug,
                }}
              >
                Book a 10-Minute Call
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl grid lg:grid-cols-2 gap-8">
          <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Build for {industry.shortName}</h2>
            <ul className="space-y-3 text-gray-700">
              {industry.keyWins.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Intent Signals We Use</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              {industry.localSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <span className="text-primary-700 font-bold">•</span>
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {industry.seoKeywords.map((keyword) => (
                <span key={keyword} className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700">
                  {keyword}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <SectionViewTracker eventName="section_view" sectionName="industry_package_path" />
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Recommended Build Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {industry.packagePath.map((step) => (
              <article key={step.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 mb-6">{step.detail}</p>
                <TrackedLink
                  href={step.ctaHref}
                  className="btn-secondary w-full text-center"
                  eventName="cta_primary_click"
                  eventParams={{
                    cta_text: step.ctaLabel,
                    location: 'industry_package_path',
                    industry_slug: industry.slug,
                    package_step: step.title,
                  }}
                >
                  {step.ctaLabel}
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{industry.shortName} Web Design FAQ</h2>
          <div className="space-y-4">
            {industry.faq.map((item) => (
              <article key={item.question} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want This Built for Your Business?"
        subtitle="Tell us your service area and offer, and we will map your fastest launch path."
        primaryCTA={{ text: 'Start 24-Hour Landing Page', href: '/checkout?package=landingPage' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact#book-call' }}
        darkBg={true}
        trackingLocation="industry_detail_cta_section"
        trackingContext={{ page_type: 'industry_detail', industry_slug: industry.slug }}
      />
    </main>
  );
}
