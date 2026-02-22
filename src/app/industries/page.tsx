import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { industryPlaybooks } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industry Website Playbooks | Reliable Web Studio',
  description:
    'Explore industry-focused website playbooks for HVAC, contractors, and clinics. Conversion-first structure, fixed pricing, and fast launch timelines.',
  alternates: {
    canonical: 'https://reliablewebstudio.com/industries',
  },
  openGraph: {
    title: 'Industry Website Playbooks | Reliable Web Studio',
    description:
      'Industry-specific website playbooks for local service businesses that need more calls, quote requests, and bookings.',
    url: 'https://reliablewebstudio.com/industries',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Industry Website Playbooks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Website Playbooks | Reliable Web Studio',
    description:
      'Industry-specific website playbooks for local service businesses that need more calls, quote requests, and bookings.',
    images: ['/api/og'],
  },
};

const industriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industry Website Playbooks',
  url: 'https://reliablewebstudio.com/industries',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: industryPlaybooks.map((industry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: industry.name,
      url: `https://reliablewebstudio.com/industries/${industry.slug}`,
    })),
  },
};

export default function IndustriesPage() {
  return (
    <main className="pt-20 bg-white">
      <JsonLd data={industriesSchema} />

      <section className="section-padding bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industry Conversion Playbooks</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Pick the industry path that matches your business, then launch fast with fixed pricing.
          </p>
          <p className="text-blue-200">
            Built for local service businesses that need calls, estimate requests, and booked appointments.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industryPlaybooks.map((industry) => (
              <article key={industry.slug} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-3">{industry.shortName}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h2>
                <p className="text-gray-700 mb-4">{industry.summary}</p>
                <p className="text-sm text-gray-600 mb-6">Ideal for: {industry.idealFor}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {industry.keyWins.slice(0, 3).map((win) => (
                    <li key={win} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{win}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/industries/${industry.slug}`} className="btn-secondary w-full text-center">
                  View {industry.shortName} Playbook
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want This Built for Your Business?"
        subtitle="Choose your industry path, then we scope the fastest launch route for your goals."
        primaryCTA={{ text: 'Start 24-Hour Landing Page', href: '/checkout?package=landingPage' }}
        secondaryCTA={{ text: 'Book a 10-Minute Call', href: '/contact#book-call' }}
        darkBg={true}
      />
    </main>
  );
}
