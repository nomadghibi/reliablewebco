import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { estimateTotalPostWordCount, getLongFormSections } from '@/lib/blog-content';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Article Not Found | Reliable Web Studio',
    };
  }

  const pageTitle = `${post.title} | Reliable Web Studio Blog`;

  return {
    title: pageTitle,
    description: post.description,
    alternates: {
      canonical: `https://reliablewebstudio.com/blog/${post.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: post.description,
      url: `https://reliablewebstudio.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.keywords,
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: post.description,
      images: ['/api/og'],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedLabel = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const updatedLabel = new Date(post.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const relatedByCategory = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category);
  const relatedFallback = blogPosts.filter((item) => item.slug !== post.slug);
  const relatedPosts = [...relatedByCategory, ...relatedFallback].slice(0, 3);
  const longFormSections = getLongFormSections(post);
  const renderedSections = [...post.sections, ...longFormSections];
  const totalWordCount = estimateTotalPostWordCount(post);
  const computedReadingTime = `${Math.max(6, Math.ceil(totalWordCount / 220))} min read`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    inLanguage: 'en-US',
    wordCount: totalWordCount,
    timeRequired: `PT${Math.max(6, Math.ceil(totalWordCount / 220))}M`,
    mainEntityOfPage: `https://reliablewebstudio.com/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Reliable Web Studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reliable Web Studio',
      url: 'https://reliablewebstudio.com',
    },
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
        name: 'Blog',
        item: 'https://reliablewebstudio.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://reliablewebstudio.com/blog/${post.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
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
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom max-w-5xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-800">
              {post.heroBadge}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{post.description}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-8">
            <span>Published: {publishedLabel}</span>
            <span>Updated: {updatedLabel}</span>
            <span>{computedReadingTime}</span>
            <span>{totalWordCount} words</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.cityFocus.map((city) => (
              <span key={city} className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none text-gray-800">
            {post.intro.map((paragraph) => (
              <p key={paragraph} className="mb-5 leading-relaxed text-lg text-gray-700">
                {paragraph}
              </p>
            ))}

            {renderedSections.map((section, index) => (
              <section key={`${section.heading}-${index}`} className="mt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-4 leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-gray-700">
                        <span className="text-green-600 font-bold">-</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <section className="mt-12 rounded-xl border border-primary-200 bg-primary-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.takeawayTitle}</h2>
            <ul className="space-y-2">
              {post.takeaways.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800">
                  <span className="text-primary-700 font-bold">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">FAQ</h2>
            <div className="space-y-4">
              {post.faq.map((item) => (
                <article key={item.question} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-xl border border-gray-200 bg-white p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.ctaText}</h2>
            <p className="text-gray-700 mb-6">
              If you want this implemented with real scope, timeline, and measurable conversion goals, we can map your plan quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Start My Project</Link>
              <Link href="/pricing" className="btn-secondary">See Pricing</Link>
            </div>
          </section>
        </div>
      </section>

      <section className="section-padding bg-gray-50" aria-labelledby="related-posts-heading">
        <div className="container-custom max-w-5xl">
          <h2 id="related-posts-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <article key={related.slug} className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary-300 hover:shadow-sm transition-all">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">{related.category}</p>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                  <Link href={`/blog/${related.slug}`} className="hover:text-primary-700 transition-colors">
                    {related.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">{related.readingTime}</p>
                <Link href={`/blog/${related.slug}`} className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Turn Content Strategy Into Revenue?"
        subtitle="We can build the pages, tracking, and local SEO structure behind your growth goals."
        primaryCTA={{ text: 'Start My Project', href: '/contact' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact', isCalendly: true }}
        darkBg={true}
      />
    </main>
  );
}
