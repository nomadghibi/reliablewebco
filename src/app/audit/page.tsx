'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

type AuditFormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  websiteUrl: string;
  cityRegion: string;
  primaryGoal: string;
  notes: string;
  botField: string;
};

export default function AuditPage() {
  const [form, setForm] = useState<AuditFormState>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    websiteUrl: '',
    cityRegion: '',
    primaryGoal: '',
    notes: '',
    botField: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [requestId, setRequestId] = useState('');
  const [hasTrackedStart, setHasTrackedStart] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocusCapture = () => {
    if (hasTrackedStart) return;
    setHasTrackedStart(true);
    trackEvent('form_start', {
      form_name: 'website_analysis_request',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/audit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { error?: string; requestId?: string };

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(payload.error || 'Could not submit request. Please try again.');
        return;
      }

      setStatus('success');
      setRequestId(payload.requestId ?? '');
      trackEvent('form_submit', {
        form_name: 'website_analysis_request',
      });
      setForm({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        websiteUrl: '',
        cityRegion: '',
        primaryGoal: '',
        notes: '',
        botField: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Could not submit request. Please call (321) 953-5199.');
    }
  };

  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-accent-500 blur-3xl" />
        </div>
        <div className="container-custom relative py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-100">
              Free Website Analysis
            </p>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              Get a professional website analysis and clear fix plan by next business day
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-blue-100">
              Submit your website URL. We run an automated snapshot, then send a prioritized report with
              P0/P1/P2 fixes you can act on immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-5 max-w-7xl mx-auto">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Request Your Analysis</h2>
                  <p className="text-gray-600 mt-2">
                    We review your site and email your report by next business day.
                  </p>
                </div>

                <form onSubmit={handleSubmit} onFocusCapture={handleFocusCapture} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                        placeholder="you@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
                        Business Name
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        value={form.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                        placeholder="Reliable HVAC"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                        placeholder="(321) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="websiteUrl" className="block text-sm font-semibold text-gray-900 mb-2">
                      Website URL
                    </label>
                    <input
                      id="websiteUrl"
                      name="websiteUrl"
                      type="url"
                      required
                      value={form.websiteUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="cityRegion" className="block text-sm font-semibold text-gray-900 mb-2">
                        Primary City / Region
                      </label>
                      <input
                        id="cityRegion"
                        name="cityRegion"
                        type="text"
                        required
                        value={form.cityRegion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                        placeholder="Palm Bay, FL"
                      />
                    </div>
                    <div>
                      <label htmlFor="primaryGoal" className="block text-sm font-semibold text-gray-900 mb-2">
                        Main Goal
                      </label>
                      <select
                        id="primaryGoal"
                        name="primaryGoal"
                        required
                        value={form.primaryGoal}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200"
                      >
                        <option value="">Select goal</option>
                        <option value="more-leads">Generate more leads</option>
                        <option value="more-calls">Increase calls and bookings</option>
                        <option value="improve-local-seo">Improve local SEO visibility</option>
                        <option value="better-conversion">Improve conversion rate</option>
                        <option value="full-rebuild">Plan a full rebuild</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                      Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={form.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-50 focus:bg-white transition-all duration-200 resize-none"
                      placeholder="Tell us anything specific you want reviewed."
                    />
                  </div>

                  <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="botField">Leave this empty</label>
                    <input
                      id="botField"
                      name="botField"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.botField}
                      onChange={handleChange}
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    By submitting, you agree to receive your analysis by email. No spam.
                  </p>

                  {status === 'success' && (
                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                      Request received. We will email your full website analysis by next business day.
                      {requestId ? ` Request ID: ${requestId}` : ''}
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting Request...' : 'Run My Website Analysis'}
                  </button>
                </form>
              </div>
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What You Get</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>Automated technical snapshot of your homepage</li>
                  <li>Conversion and local SEO review</li>
                  <li>P0 / P1 / P2 fix priorities</li>
                  <li>7-day and 30-day action plan</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Timeline</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li>1. Submit website URL and goals</li>
                  <li>2. We run backend snapshot + review</li>
                  <li>3. Full report emailed next business day</li>
                </ol>
              </div>

              <div className="rounded-2xl bg-primary-700 text-white p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Need Faster Help?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Book a call and we can walk through critical issues live.
                </p>
                <Link href="/contact#book-call" className="inline-flex w-full justify-center rounded-lg bg-white px-4 py-3 font-semibold text-primary-700 hover:bg-primary-50 transition-colors">
                  Book a 10-Minute Call
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

