import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { getPortfolioItemBySlug, portfolioItems } from '@/data/portfolio';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    return {
      title: 'Case Study Not Found | Reliable Web Studio',
    };
  }

  return {
    title: `${item.title} Case Study | Reliable Web Studio`,
    description: `${item.title}: ${item.description}`,
    alternates: {
      canonical: `https://reliablewebstudio.com/portfolio/${item.slug}`,
    },
    openGraph: {
      title: `${item.title} Case Study | Reliable Web Studio`,
      description: item.description,
      url: `https://reliablewebstudio.com/portfolio/${item.slug}`,
      type: 'article',
      images: [
        {
          url: `https://reliablewebstudio.com${item.image}`,
          alt: `${item.title} case study preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} Case Study | Reliable Web Studio`,
      description: item.description,
      images: [`https://reliablewebstudio.com${item.image}`],
    },
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedProjects = portfolioItems
    .filter((project) => project.slug !== item.slug && project.tier === item.tier)
    .slice(0, 3);

  const statusLabel = item.status === 'live' ? 'Live in production' : 'In active development';
  const statusClass = item.status === 'live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  const featureChecklist = item.features.filter((feature) => !/live in production|in development/i.test(feature));

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${item.title} Case Study`,
    description: item.description,
    image: `https://reliablewebstudio.com${item.image}`,
    author: {
      '@type': 'Organization',
      name: 'Reliable Web Studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reliable Web Studio',
    },
    mainEntityOfPage: `https://reliablewebstudio.com/portfolio/${item.slug}`,
  };

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={caseStudyJsonLd} />

      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom max-w-6xl relative z-10">
          <div className="mb-6">
            <Link href="/portfolio" className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800">
              ← Back to Portfolio
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.6fr,1fr] gap-8 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white">
                  Case Study
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${statusClass}`}>
                  {statusLabel}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  {item.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{item.title}</h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl">{item.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {item.status === 'live' ? 'Visit Live Site' : 'Preview Build'}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Build Something Similar
                </Link>
              </div>
            </div>

            <aside className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Project Brief</h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Industry</dt>
                  <dd className="font-semibold text-gray-900">{item.industry}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Timeline</dt>
                  <dd className="font-semibold text-gray-900">{item.caseStudy.timeline}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Tier</dt>
                  <dd className="font-semibold text-gray-900">{item.category}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Year</dt>
                  <dd className="font-semibold text-gray-900">{item.year}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Public URL</dt>
                  <dd className="font-semibold text-primary-700 break-all">{item.liveUrl.replace(/^https?:\/\//, '')}</dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="aspect-[16/9] relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-100">
            <Image src={item.image} alt={`${item.title} project screenshot`} fill className="object-cover object-top" priority />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl grid md:grid-cols-3 gap-6">
          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Business Challenges</h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              {item.caseStudy.problem.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Execution Strategy</h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              {item.caseStudy.solution.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Outcome Summary</h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              {item.caseStudy.outcome.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl grid md:grid-cols-2 gap-8">
          <article className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Scope Delivered</h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5 mb-6">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">Functional Checklist</h3>
            <div className="flex flex-wrap gap-2">
              {featureChecklist.map((feature) => (
                <span key={feature} className="inline-flex items-center px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-sm text-gray-800">
                  {feature}
                </span>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {item.stack.map((tech) => (
                <span key={tech} className="inline-flex items-center px-3 py-1 rounded-md bg-primary-50 border border-primary-100 text-sm font-semibold text-primary-800">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">Project Notes</h3>
            <p className="text-gray-700 leading-relaxed">{item.caseStudy.testimonial.quote}</p>
            <p className="text-sm text-gray-500 mt-3">
              Source: {item.caseStudy.testimonial.author}, {item.caseStudy.testimonial.role}
            </p>
          </article>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="block rounded-xl border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-900 mb-1">{project.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{project.industry} · {project.category}</p>
                  <p className="text-xs text-gray-500">Timeline: {project.caseStudy.timeline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Want a Similar Outcome for Your Business?"
        subtitle="Share your goals and get a clear scope, timeline, and launch plan before we start."
        primaryCTA={{ text: 'Start My Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
