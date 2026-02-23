import type { Metadata } from 'next';
import Link from 'next/link';
import {
  analyticsDimensions,
  analyticsEventMap,
  weeklyMetrics,
  weeklyOpsChecklist,
} from '@/data/analytics-map';

export const metadata: Metadata = {
  title: 'GA4 Event & Reporting Map | Reliable Web Studio',
  description:
    'Operational GA4 event naming map, dimensions, and weekly conversion reporting checklist for Reliable Web Studio.',
  openGraph: {
    title: 'GA4 Event & Reporting Map | Reliable Web Studio',
    description:
      'Operational GA4 event naming map, dimensions, and weekly conversion reporting checklist for Reliable Web Studio.',
    url: 'https://www.reliablewebstudio.com/analytics',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Reliable Web Studio analytics map' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GA4 Event & Reporting Map | Reliable Web Studio',
    description:
      'Operational GA4 event naming map, dimensions, and weekly conversion reporting checklist for Reliable Web Studio.',
    images: ['/api/og'],
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.reliablewebstudio.com/analytics',
  },
};

export default function AnalyticsMapPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <section className="container-custom max-w-6xl">
        <div className="max-w-4xl mb-10">
          <p className="text-xs font-bold uppercase tracking-wide text-primary-700 mb-3">Ops Dashboard Spec</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">GA4 Event Naming and Weekly Reporting Map</h1>
          <p className="text-lg text-gray-700 mb-6">
            This page is the source of truth for event names, parameters, and weekly KPI review. Use it to keep analytics decisions
            consistent across offers, local pages, and conversion funnels.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-secondary">Go to Pricing</Link>
            <Link href="/audit" className="btn-secondary">Go to Free Audit</Link>
            <Link href="/contact#book-call" className="btn-secondary">Book a 10-Minute Call</Link>
          </div>
        </div>

        <section className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Taxonomy (Live)</h2>
          <div className="space-y-4">
            {analyticsEventMap.map((eventDef) => (
              <article key={eventDef.name} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <code className="inline-flex rounded-md bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-800">
                    {eventDef.name}
                  </code>
                  <span className="inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-800">
                    Active
                  </span>
                </div>
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> {eventDef.purpose}</p>
                <p className="text-gray-700 mb-2"><strong>Trigger:</strong> {eventDef.trigger}</p>
                <p className="text-gray-700 mb-2"><strong>Primary KPI:</strong> {eventDef.primaryKpi}</p>
                <p className="text-gray-700 mb-2"><strong>Pages:</strong> {eventDef.pages.join(' • ')}</p>
                <p className="text-gray-700"><strong>Key Params:</strong> {eventDef.keyParams.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mb-10">
          <article className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Register as GA4 Custom Dimensions</h2>
            <p className="text-gray-700 mb-5">
              Add these as <strong>event-scoped</strong> custom dimensions in GA4 Admin so they are available in reports and explorations.
            </p>
            <div className="space-y-3">
              {analyticsDimensions.map((dimension) => (
                <div key={dimension.name} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900 mb-1">{dimension.name}</p>
                  <p className="text-sm text-gray-700 mb-1">{dimension.description}</p>
                  <p className="text-xs text-gray-600">Examples: {dimension.examples.join(' • ')}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Weekly KPI Scorecard</h2>
            <p className="text-gray-700 mb-5">
              Use this as your Monday review structure. Keep one sheet/tab per week and compare changes week-over-week.
            </p>
            <div className="space-y-3">
              {weeklyMetrics.map((metric) => (
                <div key={metric.metric} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900 mb-1">{metric.metric}</p>
                  <p className="text-sm text-gray-700 mb-1"><strong>GA4 Source:</strong> {metric.ga4Source}</p>
                  <p className="text-sm text-gray-700"><strong>Why:</strong> {metric.whyItMatters}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weekly Reporting Runbook</h2>
          <ol className="space-y-3 text-gray-700">
            {weeklyOpsChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-primary-700 font-semibold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-lg border border-primary-200 bg-white p-4">
            <p className="text-sm text-gray-700">
              Recommended cadence: <strong>weekly KPI review</strong>, <strong>monthly deep-dive</strong>, and <strong>quarterly taxonomy cleanup</strong>.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
