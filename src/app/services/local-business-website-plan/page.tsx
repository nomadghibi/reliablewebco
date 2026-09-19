import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import PaymentButton from '@/components/PaymentButton';

const pageUrl = 'https://www.reliablewebstudio.com/services/local-business-website-plan';

export const metadata: Metadata = {
  title: 'Managed Small Business Website | $150 Setup + $100/Month',
  description:
    'A managed website plan for Palm Bay, Melbourne, and Space Coast service businesses. Website design, hosting, maintenance, basic SEO, analytics, and local support for $150 setup plus $100/month.',
  keywords: [
    'managed small business website',
    'monthly website service',
    'small business website Palm Bay',
    'web design Melbourne FL',
    'Space Coast web design',
    'website maintenance Brevard County',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Managed Local Business Website | Reliable Web Studio',
    description: '$150 setup + $100/month. We build, host, maintain, and support your small business website.',
    url: pageUrl,
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Reliable Web Studio managed local business website plan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Local Business Website | Reliable Web Studio',
    description: '$150 setup + $100/month for design, hosting, maintenance, basic SEO, and local support.',
    images: ['/api/og'],
  },
};

const included = [
  ['Professional website design', 'A clean, credible website shaped around your services, customers, and local market.'],
  ['Approximately five core pages', 'A practical structure such as Home, About, Services, Service Area, and Contact.'],
  ['Mobile-first experience', 'Fast, readable layouts with tap-to-call actions for customers using their phones.'],
  ['Managed hosting and SSL', 'Secure hosting, HTTPS, monitoring, backups, and routine technical maintenance.'],
  ['Lead capture essentials', 'Contact form, click-to-call links, map or service-area details, and clear calls to action.'],
  ['Local SEO foundation', 'Page titles, descriptions, sitemap, indexing setup, and structured data where appropriate.'],
  ['Analytics setup', 'Google Analytics and Search Console foundations so visibility and inquiries can be measured.'],
  ['Minor monthly updates', 'Up to 30 minutes each month for small text, photo, hours, or service-detail changes.'],
];

const steps = [
  ['Tell us about your business', 'Send your services, location, contact details, logo, photos, and goals.'],
  ['We plan and build', 'We organize the pages, write a clear conversion path, and build the first version.'],
  ['You review it', 'You check the facts, services, images, and calls to action before launch.'],
  ['We launch it', 'We connect the client-owned domain, verify forms, and complete the search setup.'],
  ['We keep managing it', 'Hosting, monitoring, maintenance, backups, and included minor updates continue each month.'],
];

const industries = [
  'Handyman services', 'Plumbing', 'Electrical', 'HVAC', 'Cleaning services', 'Landscaping',
  'Painting', 'Pressure washing', 'Roofing', 'Pool service', 'Mobile services', 'General contractors',
];

const faqs = [
  {
    question: 'What does the Local Website Plan cost?',
    answer: 'The standard plan costs $150 to set up and $100 per month with a 12-month initial service term. After the initial term, it continues month-to-month.',
  },
  {
    question: 'Who owns the domain name?',
    answer: 'The domain should be registered in your name or business name whenever technically possible. Domain registration and renewal charges are separate unless included in a written proposal.',
  },
  {
    question: 'Is hosting included?',
    answer: 'Yes. Managed hosting, SSL, routine maintenance, monitoring, and backups are included while your monthly plan is active and paid.',
  },
  {
    question: 'How many pages are included?',
    answer: 'The standard plan is designed for approximately five core pages. Extra pages, e-commerce, custom booking systems, and advanced features can be quoted separately.',
  },
  {
    question: 'Can you update the website after it launches?',
    answer: 'Yes. The standard plan includes up to 30 minutes of minor updates each billing month. Larger changes and new pages are quoted before work begins.',
  },
  {
    question: 'Does this guarantee a first-page Google ranking?',
    answer: 'No company can honestly guarantee a specific organic ranking. The plan includes a sound local SEO and indexing foundation; ongoing SEO campaigns are available separately.',
  },
  {
    question: 'What happens if I cancel?',
    answer: 'After the 12-month initial term, you can cancel with 30 days written notice. Managed hosting and maintenance end when service ends. Your client-owned domain remains yours.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local Business Website Plan',
  url: pageUrl,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Reliable Web Studio',
    telephone: '+1-321-953-5199',
    address: { '@type': 'PostalAddress', addressLocality: 'Palm Bay', addressRegion: 'FL', addressCountry: 'US' },
  },
  areaServed: ['Palm Bay', 'Melbourne', 'Brevard County', 'Florida Space Coast'],
  description: 'Managed website design, hosting, maintenance, basic SEO, analytics, and local support for small service businesses.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '100',
    description: '$150 setup plus $100 per month with a 12-month initial service term.',
    availability: 'https://schema.org/InStock',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.reliablewebstudio.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.reliablewebstudio.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Local Business Website Plan', item: pageUrl },
  ],
};

export default function LocalBusinessWebsitePlanPage() {
  return (
    <main className="pt-20 bg-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.45),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(234,88,12,0.26),transparent_38%)]" aria-hidden="true" />
        <div className="container-custom relative py-20 md:py-28">
          <nav className="mb-8 text-sm text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link><span className="mx-2">/</span>
            <span className="text-white">Local Website Plan</span>
          </nav>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300 mb-4">Built for Space Coast service businesses</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">A Professional Website Without the Large Upfront Bill</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
                We design it, host it, maintain it, and give it the technical foundation to be found locally. You stay focused on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PaymentButton type="localWebsitePlan" text="Get My Website Started" variant="accent" className="px-8 py-4 text-lg" />
                <a href="tel:+13219535199" className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-slate-950 transition-colors">Call (321) 953-5199</a>
              </div>
              <p className="mt-5 text-sm text-blue-200">Serving Palm Bay, Melbourne, Brevard County, and Florida&apos;s Space Coast.</p>
            </div>

            <aside className="rounded-3xl border border-white/15 bg-white p-7 md:p-8 text-gray-900 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-wide text-primary-700 mb-3">Local Website Plan</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-2xl bg-primary-50 p-4 text-center"><p className="text-sm text-gray-600">Setup</p><p className="text-4xl font-bold">$150</p></div>
                <div className="rounded-2xl bg-orange-50 p-4 text-center"><p className="text-sm text-gray-600">Monthly</p><p className="text-4xl font-bold">$100</p></div>
              </div>
              <ul className="space-y-3 text-gray-700">
                {['Professional design', 'Managed hosting and SSL', 'Maintenance and backups', 'Basic local SEO setup', 'Analytics and contact forms'].map((item) => (
                  <li key={item} className="flex gap-3"><span className="font-bold text-green-600" aria-hidden="true">✓</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-500">12-month initial service term. Domain remains registered to the client whenever technically possible.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="included-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-wide text-primary-700 mb-2">One dependable monthly service</p>
            <h2 id="included-heading" className="heading-lg mb-4">What Your Managed Website Includes</h2>
            <p className="text-xl text-gray-700">The essentials a small local business needs to look credible, capture inquiries, and stay technically maintained.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {included.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700" aria-hidden="true">✓</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm leading-6 text-gray-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50" aria-labelledby="fit-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start max-w-6xl mx-auto">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary-700 mb-2">A practical fit</p>
              <h2 id="fit-heading" className="heading-lg mb-4">Designed for Owner-Operated Service Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">This plan works best when your website needs to explain what you do, show where you work, establish trust, and make it easy to call or request service.</p>
              <Link href="/industries" className="font-semibold text-primary-700 hover:text-primary-800">Explore industry website playbooks →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {industries.map((industry) => <div key={industry} className="rounded-xl border border-primary-100 bg-white px-4 py-4 font-semibold text-gray-900 shadow-sm">{industry}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="process-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="process-heading" className="heading-lg mb-4">From Business Details to a Managed Website</h2>
            <p className="text-xl text-gray-700">A clear process, with one local team responsible for the build and ongoing technical care.</p>
          </div>
          <ol className="grid md:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {steps.map(([title, description], index) => (
              <li key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-lg font-bold text-white">{index + 1}</span>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm leading-6 text-gray-700">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white" aria-labelledby="boundaries-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-7">
              <h2 id="boundaries-heading" className="heading-md mb-5">Included in the Standard Plan</h2>
              <ul className="space-y-3 text-blue-100">
                {['Approximately five core pages', 'Hosting, SSL, monitoring, and backups', 'Basic SEO and indexing setup', 'Contact form and tap-to-call actions', 'Up to 30 minutes of minor updates monthly'].map((item) => <li key={item} className="flex gap-3"><span className="text-green-400">✓</span><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-7">
              <h2 className="heading-md mb-5">Quoted Separately When Needed</h2>
              <ul className="space-y-3 text-gray-300">
                {['Additional pages or major redesigns', 'E-commerce, portals, or custom booking systems', 'Paid advertising and ongoing SEO campaigns', 'Extensive copywriting, branding, or photography', 'Third-party subscriptions and premium domain fees'].map((item) => <li key={item} className="flex gap-3"><span className="text-orange-300">+</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container-custom"><div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="heading-lg text-center mb-10">Local Website Plan Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer list-none font-bold text-gray-900 flex items-center justify-between gap-4">{faq.question}<span className="text-primary-600 group-open:rotate-45 transition-transform" aria-hidden="true">+</span></summary>
                <p className="mt-4 leading-7 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div></div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-950 text-white">
        <div className="container-custom text-center"><div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-200 mb-3">You run the business. We handle the website.</p>
          <h2 className="heading-lg mb-5">Start Your Local Business Website for $150</h2>
          <p className="text-xl text-blue-100 mb-8">Tell us what your business does, where you work, and what customers need to do next.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <PaymentButton type="localWebsitePlan" text="Get My Website Started" variant="accent" className="px-8 py-4 text-lg" />
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary-800 transition-colors">Compare All Pricing</Link>
          </div>
          <p className="mt-5 text-sm text-blue-200">
            Before payment, review the <Link href="/service-agreement/local-website-plan" className="underline hover:text-white">service agreement</Link> and{' '}
            <Link href="/terms" className="underline hover:text-white">Terms of Service</Link>.
          </p>
        </div></div>
      </section>
    </main>
  );
}
