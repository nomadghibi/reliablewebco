import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import BlogCard from '@/components/blog/BlogCard';
import { getLatestBlogPosts } from '@/data/blog';

const posts = getLatestBlogPosts();

export const metadata: Metadata = {
  title: 'Blog | Florida Web Design, Local SEO, and Conversion Strategy',
  description:
    'Actionable articles on Florida web design, local SEO, landing pages, and conversion strategy for service businesses.',
  openGraph: {
    title: 'Reliable Web Studio Blog',
    description:
      'Actionable articles on Florida web design, local SEO, landing pages, and conversion strategy for service businesses.',
    url: 'https://reliablewebstudio.com/blog',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Reliable Web Studio blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Web Studio Blog',
    description:
      'Actionable articles on Florida web design, local SEO, landing pages, and conversion strategy for service businesses.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/blog',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Reliable Web Studio Blog',
  url: 'https://reliablewebstudio.com/blog',
  description:
    'Actionable Florida-focused content on local SEO, web design systems, and lead generation for service businesses.',
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'Reliable Web Studio',
    url: 'https://reliablewebstudio.com',
  },
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `https://reliablewebstudio.com/blog/${post.slug}`,
    keywords: post.keywords.join(', '),
  })),
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: posts.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://reliablewebstudio.com/blog/${post.slug}`,
    name: post.title,
  })),
};

export default function BlogPage() {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={blogSchema} />
      <JsonLd data={itemListSchema} />

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              Florida Growth Content Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Blogs on Web Design, Local SEO, and Lead Generation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-5">
              Professional articles built for Florida service businesses that want more calls, form leads, and booked appointments.
            </p>
            <p className="text-base md:text-lg text-blue-200">
              Covering Palm Bay, Melbourne, Orlando, Tampa, Jacksonville, and statewide growth strategy.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96h1440V56c-120-20-240-40-360-36s-240 32-360 40-240-8-360-20S120 16 0 24v72z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <span key={category} className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-800">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50" aria-labelledby="latest-posts-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 id="latest-posts-heading" className="heading-lg mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-700">
              Read practical, no-fluff guidance for building a Florida website that ranks and converts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need a topic covered for your city or industry?</h3>
            <p className="text-gray-700 mb-6">
              We publish based on real business questions. Tell us your niche, service area, and growth challenge.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Topic
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want These Strategies Applied to Your Website?"
        subtitle="Get a clear build plan, fast execution, and conversion-focused implementation."
        primaryCTA={{ text: 'Start My Project', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
