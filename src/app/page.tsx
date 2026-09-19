import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';
import SectionViewTracker from '@/components/SectionViewTracker';
import Reveal from '@/components/Reveal';
import { floridaLocations } from '@/data/locations';
import { getLatestBlogPosts } from '@/data/blog';
import { industryPlaybooks } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Space Coast Small Business Websites | $150 Setup + $100/Month',
  description:
    'Professional websites for Palm Bay, Melbourne, and Space Coast small businesses. $150 to start, $100/month for design, hosting, maintenance, basic SEO, analytics, and support.',
  keywords:
    'web design Palm Bay FL, web designer Palm Bay, web design Melbourne FL, Space Coast web design, small business website Palm Bay, local business website Melbourne FL, website design Brevard County, affordable small business websites, handyman website design, contractor website design',
  openGraph: {
    title: 'Professional Websites for Space Coast Small Businesses',
    description:
      '$150 to start. $100/month. We design it, host it, maintain it, and help your local business get found online.',
    url: 'https://www.reliablewebstudio.com',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Reliable Web Studio managed local business website plan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Coast Small Business Websites | $150 Setup + $100/Month',
    description:
      'We build it, host it, maintain it, and help your business get found online.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.reliablewebstudio.com',
  },
};

const planIncludes = [
  'Professional website design',
  'Up to approximately 5 core pages',
  'Mobile-responsive design',
  'Fast hosting and SSL/security',
  'Contact or quote-request form',
  'Click-to-call buttons',
  'Google Maps / Google Business Profile integration',
  'Basic on-page SEO',
  'Google Search Console setup',
  'Google Analytics setup',
  'XML sitemap and indexing setup',
  'Website monitoring and technical maintenance',
  'Backups where applicable',
  'Minor text/photo updates',
  'Local-business structured data where appropriate',
];

const serviceBusinesses = [
  'Handyman',
  'Plumber',
  'Electrician',
  'HVAC',
  'Cleaner',
  'Landscaper',
  'Painter',
  'Pressure Washing',
  'Roofing',
  'Pool Service',
  'Mobile Services',
  'Contractors',
];

const processSteps = [
  {
    title: 'Tell Us About Your Business',
    copy: 'Complete a short form or talk with us about your services, customers, and service area.',
  },
  {
    title: 'We Build Your Website',
    copy: 'We create a professional site designed around calls, quote requests, and local customers.',
  },
  {
    title: 'You Review It',
    copy: 'You review the site and provide feedback before launch.',
  },
  {
    title: 'We Launch It',
    copy: 'We connect your domain, forms, analytics, Search Console, SEO basics, and required services.',
  },
  {
    title: 'We Keep Managing It',
    copy: 'You operate your business. We handle the website, hosting, maintenance, and technical details.',
  },
];

const comparisonRows = [
  ['Large upfront investment', '$150 startup cost'],
  ['Hosting may cost extra', 'Hosting included'],
  ['Maintenance may cost extra', 'Maintenance included'],
  ['Technical updates are on you', 'We handle technical updates'],
  ['SEO setup often separate', 'Basic SEO foundation included'],
  ['Relationship may end after launch', 'Ongoing support included'],
];

export default function Home() {
  const latestPosts = getLatestBlogPosts(3);
  const highlightedIndustries = industryPlaybooks.slice(0, 3);

  return (
    <main>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-slate-950 via-blue-950 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl animate-hero-drift" />
          <div className="absolute top-28 -right-24 h-96 w-96 rounded-full bg-accent-400/30 blur-3xl animate-hero-drift" style={{ animationDelay: '2.5s' }} />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <Reveal>
              <div>
                <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 mb-6">
                  Serving Palm Bay, Melbourne &amp; Florida&apos;s Space Coast
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Professional Websites for Space Coast Small Businesses
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-accent-200 mb-5">
                  $150 to Start. $100/Month.
                </p>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
                  We design it, host it, maintain it, and help your business get found online. No huge upfront website bill. No technology headaches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/contact#website-plan" className="btn-accent px-8 py-4 text-lg">
                    Get My Website Started
                  </Link>
                  <Link href="#local-website-plan" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-primary-800">
                    See What&apos;s Included
                  </Link>
                </div>
                <p className="text-sm text-blue-200">
                  You Run Your Business. We Handle Your Website.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-white/15 bg-white/95 p-6 md:p-8 shadow-2xl">
                <p className="text-sm font-bold uppercase tracking-wide text-primary-700 mb-3">Local Business Website Plan</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-2xl bg-primary-50 p-5 text-center">
                    <p className="text-sm text-gray-600">Setup</p>
                    <p className="text-4xl font-bold text-gray-900">$150</p>
                  </div>
                  <div className="rounded-2xl bg-accent-50 p-5 text-center">
                    <p className="text-sm text-gray-600">Monthly</p>
                    <p className="text-4xl font-bold text-gray-900">$100</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  {['Website design', 'Hosting and SSL', 'Maintenance and monitoring', 'Basic local SEO setup', 'Forms, call buttons, analytics'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#website-plan" className="btn-primary w-full text-center">
                  Start for $150
                </Link>
                <p className="mt-4 text-xs text-gray-500">
                  12-month initial service term. Domain stays registered in the client&apos;s name whenever possible.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="local-website-plan" className="section-padding bg-white" aria-labelledby="local-plan-heading">
        <div className="container-custom">
          <SectionViewTracker eventName="pricing_view" sectionName="home_local_website_plan" />
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-wide text-primary-700 mb-2">Website-as-a-Service</p>
              <h2 id="local-plan-heading" className="heading-lg mb-4">Everything Your Local Business Website Needs</h2>
              <p className="text-xl text-gray-700">
                $150 setup + $100/month for the website foundation most small local service businesses need.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 max-w-6xl mx-auto items-start">
            <Reveal delay={80}>
              <div className="rounded-3xl border-2 border-primary-500 bg-primary-50 p-6 md:p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Local Website</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$150</span>
                  <span className="text-gray-600 ml-2">setup</span>
                  <div className="text-3xl font-bold text-primary-700 mt-2">$100/month</div>
                </div>
                <p className="text-gray-700 mb-6">
                  Built for owner-operated service businesses that need a professional website without spending thousands upfront.
                </p>
                <Link href="/contact#website-plan" className="btn-primary w-full text-center mb-4">
                  Start for $150
                </Link>
                <Link href="/services/local-business-website-plan" className="mb-4 block text-center text-sm font-semibold text-primary-700 hover:text-primary-800">
                  See complete plan details
                </Link>
                <p className="text-sm text-gray-600">
                  Includes up to 30 minutes of minor website updates per month. New pages, major redesigns, paid advertising, advanced SEO, and substantial content creation are quoted separately.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="grid sm:grid-cols-2 gap-3">
                {planIncludes.map((item) => (
                  <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">✓</span>
                      <p className="text-sm font-medium text-gray-800">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="who-for-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 id="who-for-heading" className="heading-lg mb-4">Built for Local Businesses That Need Customers - Not Website Headaches</h2>
              <p className="text-xl text-gray-700">
                If you run the business yourself, you shouldn&apos;t have to become a web designer too. Tell us what you do and where you work. We handle the website.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {serviceBusinesses.map((business, index) => (
              <Reveal key={business} delay={index * 35}>
                <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                  <p className="font-bold text-gray-900">{business}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="how-it-works-heading">
        <div className="container-custom">
          <Reveal>
            <h2 id="how-it-works-heading" className="heading-lg text-center mb-12">How It Works</h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <article className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-primary-900 text-white" aria-labelledby="trust-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center max-w-6xl mx-auto">
            <Reveal>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent-200 mb-3">Local technology support</p>
                <h2 id="trust-heading" className="heading-lg mb-5">Local Technology Experience You Can Actually Call</h2>
                <p className="text-lg text-blue-100 mb-6">
                  Reliable Web Studio is operated by Best Computer Tech LLC, serving customers since 2009. After years of providing IT services and building websites, we now offer an affordable managed website service designed specifically for small local businesses.
                </p>
                <p className="text-2xl font-bold text-white">We Build It. We Host It. We Maintain It. We Help You Get Found.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid sm:grid-cols-2 gap-4">
                {['15+ years of technology experience', 'Palm Bay / Space Coast based', 'Local support', 'Real person you can contact', 'Website + IT experience', 'No overseas support center', 'Focus on small businesses', 'Domain in client name whenever possible'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/15 bg-white/10 p-4">
                    <p className="font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="case-study-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-wide text-primary-700 mb-2">Local proof</p>
              <h2 id="case-study-heading" className="heading-lg mb-4">Case Study: Right Away Services LLC - Palm Bay Handyman</h2>
              <p className="text-xl text-gray-700">
                A local handyman business needed a clearer web presence for trust, service-area visibility, and quote requests.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              ['Problem', 'The business needed a professional site that explained services clearly and supported Palm Bay / Melbourne local search intent.'],
              ['Solution', 'We structured the website around service clarity, mobile calls, quote requests, local-service pages, and project proof.'],
              ['Services Provided', 'Website design, mobile optimization, Google Search Console, Google Business Profile support, SEO foundations, project portfolio, and geographic targeting.'],
              ['Results', 'Qualitative result: stronger professional presence and a clearer path for local customers to request help. Performance numbers can be added after analytics history is verified.'],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-50" aria-labelledby="comparison-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 id="comparison-heading" className="heading-lg mb-4">A Professional Website Without the Huge Upfront Cost</h2>
              <p className="text-xl text-gray-700">Compare a typical one-time website project with the Reliable Local Website Plan.</p>
            </div>
          </Reveal>
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-primary-200 bg-white shadow-lg">
            <div className="grid grid-cols-2 bg-gray-900 text-white text-sm font-bold uppercase tracking-wide">
              <div className="p-4">Traditional Website</div>
              <div className="p-4 bg-primary-700">Reliable Local Website Plan</div>
            </div>
            {comparisonRows.map(([traditional, reliable]) => (
              <div key={traditional} className="grid grid-cols-2 border-t border-gray-200">
                <div className="p-4 text-gray-700">{traditional}</div>
                <div className="p-4 font-semibold text-gray-900 bg-primary-50">{reliable}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="bigger-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="bigger-heading" className="heading-lg mb-4">Need Something Bigger?</h2>
              <p className="text-xl text-gray-700">
                For businesses that prefer to purchase a website outright or need custom functionality, e-commerce, integrations, applications, or more advanced SEO, we also provide custom project pricing.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              ['24-Hour Landing Page', '$499 one-time', '/pricing#landing-page'],
              ['Website-in-a-Week', '$2,000 one-time', '/pricing#website-in-a-week'],
              ['Growth / Authority Websites', '$3,500+', '/pricing#growth-website'],
              ['Software Development / ML-AI', '$8,000+', '/platform'],
            ].map(([title, price, href]) => (
              <Reveal key={title}>
                <Link href={href} className="block h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-primary-300 hover:shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-primary-700 font-semibold mb-4">{price}</p>
                  <span className="text-sm font-semibold text-gray-700">View option</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="industry-playbooks-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="industry-playbooks-heading" className="heading-lg mb-4">Service Business Playbooks</h2>
              <p className="text-xl text-gray-700">
                Examples of how we structure sites for common local service industries.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlightedIndustries.map((industry, index) => (
              <Reveal key={industry.slug} delay={(index + 1) * 70}>
                <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">{industry.shortName}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-700 mb-4">{industry.summary}</p>
                  <Link href={`/industries/${industry.slug}`} className="btn-secondary w-full text-center">
                    View {industry.shortName} Page
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" aria-labelledby="portfolio-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 id="portfolio-heading" className="heading-lg mb-4">See What Your Site Can Look Like</h2>
              <p className="text-xl text-gray-700">Real builds and project styles we can adapt around your business, offer, and service area.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Right Away Services Style', image: '/images/portfolio/flippersremodeling.jpg', url: '/portfolio', category: 'Local Service Website' },
              { name: 'HVAC Pro Office', image: '/images/portfolio/hvacprooffice.png', url: '/portfolio/hvac-pro-office', category: 'Custom Platform' },
            ].map((demo) => (
              <Reveal key={demo.name}>
                <Link href={demo.url} className="group block overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={demo.image} alt={demo.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-1">{demo.category}</div>
                    <h3 className="font-bold text-gray-900">{demo.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-secondary">See Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="florida-areas-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 id="florida-areas-heading" className="heading-lg mb-4">Space Coast Service Areas</h2>
              <p className="text-xl text-gray-700">
                Local website design and SEO foundations for Palm Bay, Melbourne, Brevard County, and nearby Space Coast communities.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {floridaLocations.slice(0, 8).map((location, idx) => (
              <Reveal key={location.slug} delay={idx * 60}>
                <Link href={`/locations/${location.slug}`} className="rounded-xl border border-gray-200 bg-white p-5 text-left hover:border-primary-300 hover:shadow-md transition-all block">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">{location.region}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{location.city}, FL</h3>
                  <p className="text-sm text-gray-600">{location.county}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" aria-labelledby="from-blog-heading">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 id="from-blog-heading" className="heading-lg mb-4">From the Blog</h2>
              <p className="text-xl text-gray-700">Florida-focused SEO and conversion insights for local service businesses.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {latestPosts.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 80}>
                <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-primary-300 hover:shadow-md transition-all">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">{post.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-700 transition-colors">{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.readingTime}</p>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary-700 hover:text-primary-800">Read article</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="md:hidden fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-40">
        <Link href="/contact#website-plan" className="btn-accent w-full rounded-full py-4 shadow-2xl">
          Get Started - $150
        </Link>
      </div>

      <CTASection
        title="You Run Your Business. We Handle Your Website."
        subtitle="Start with the $150 setup + $100/month local website plan, or contact us if you need a custom project."
        primaryCTA={{ text: 'Get My Website Started', href: '/contact#website-plan' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
        trackingLocation="home_final_cta"
      />
    </main>
  );
}
