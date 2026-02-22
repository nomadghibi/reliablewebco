import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sample Website Analysis Report | Reliable Web Studio',
  description:
    'Preview the structure of our website analysis report including P0/P1/P2 findings and a 7-day, 30-day action plan.',
  alternates: {
    canonical: 'https://reliablewebstudio.com/audit/sample',
  },
  openGraph: {
    title: 'Sample Website Analysis Report | Reliable Web Studio',
    description:
      'See a sample report format for our website analysis service with prioritized technical, SEO, and conversion fixes.',
    url: 'https://reliablewebstudio.com/audit/sample',
    type: 'article',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Sample website analysis report' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sample Website Analysis Report | Reliable Web Studio',
    description:
      'See a sample report format for our website analysis service with prioritized technical, SEO, and conversion fixes.',
    images: ['/api/og'],
  },
};

export default function AuditSamplePage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <section className="container-custom max-w-4xl">
        <Link href="/audit" className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800 mb-6">
          ← Back to Free Website Analysis
        </Link>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-wide text-primary-700 mb-3">Sample Deliverable</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Website Analysis Report Preview</h1>
          <p className="text-gray-700 mb-8">
            This sample shows the same structure we send to clients: prioritized issues, what to fix first, and a practical action roadmap.
          </p>

          <div className="space-y-8">
            <section className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-xl font-bold text-red-900 mb-3">P0 - Revenue & UX Blockers</h2>
              <ul className="space-y-2 text-red-900">
                <li>• Primary CTA is unclear above the fold on mobile.</li>
                <li>• Forms are missing event tracking for submit success.</li>
                <li>• Checkout path lacks clear return navigation.</li>
              </ul>
            </section>

            <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-bold text-amber-900 mb-3">P1 - SEO & Structure Gaps</h2>
              <ul className="space-y-2 text-amber-900">
                <li>• Service pages need stronger city-specific uniqueness.</li>
                <li>• Missing internal links from blog posts to money pages.</li>
                <li>• FAQ coverage is thin for high-intent local queries.</li>
              </ul>
            </section>

            <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-3">P2 - Optimization Opportunities</h2>
              <ul className="space-y-2 text-blue-900">
                <li>• Add more proof blocks with analytics screenshots.</li>
                <li>• Expand industry landing pages with internal link clusters.</li>
                <li>• Add city-specific trust and conversion sections.</li>
              </ul>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Action Plan</h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Next 7 Days</h3>
                  <ul className="space-y-2">
                    <li>• Fix CTA hierarchy and mobile conversion flow.</li>
                    <li>• Add full event tracking for forms and checkout.</li>
                    <li>• Improve one high-traffic service page first.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Next 30 Days</h3>
                  <ul className="space-y-2">
                    <li>• Publish 3 intent-matched local pages.</li>
                    <li>• Add proof-backed case studies with metrics.</li>
                    <li>• Launch monthly conversion + SEO reporting loop.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/audit" className="btn-primary">
              Request My Website Analysis
            </Link>
            <Link href="/contact#book-call" className="btn-secondary">
              Book a 10-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
