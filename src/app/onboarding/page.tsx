'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  businessType: '',
  serviceArea: '',
  services: '',
  about: '',
  differentiator: '',
  primaryCta: 'Call for a quote',
  domainName: '',
  domainStatus: '',
  socialLinks: '',
  reviewLink: '',
  assetLinks: '',
  brandNotes: '',
  additionalNotes: '',
  botField: '',
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClass = 'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200';

export default function OnboardingPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [stripeSessionId, setStripeSessionId] = useState('');

  useEffect(() => {
    let active = true;

    const loadSessionId = async () => {
      await Promise.resolve();
      const sessionId = new URLSearchParams(window.location.search).get('session_id') ?? '';
      if (active) setStripeSessionId(sessionId);
    };

    void loadSessionId();
    return () => {
      active = false;
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/onboarding-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, stripeSessionId }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || 'Unable to submit onboarding information.');

      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unable to submit onboarding information.');
    }
  };

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32 pb-20">
        <div className="container-custom"><div className="max-w-2xl mx-auto rounded-3xl border border-green-200 bg-white p-8 md:p-12 text-center shadow-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">✓</div>
          <h1 className="heading-lg mb-4">Your Website Details Are Submitted</h1>
          <p className="text-lg text-gray-700 mb-4">We will review everything and contact you if we need clarification or additional assets.</p>
          <p className="text-gray-600 mb-8">Keep an eye on the email address you provided for project updates.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/" className="btn-primary">Return Home</Link>
            <a href="tel:+13219535199" className="btn-secondary">Call (321) 953-5199</a>
          </div>
        </div></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-sm font-semibold text-primary-700 hover:text-primary-800">← Back to Home</Link>
          </div>
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-700 mb-3">Project intake</p>
            <h1 className="heading-xl mb-4">Tell Us What We Need to Build Your Website</h1>
            <p className="text-xl text-gray-700">Complete this after payment. Detailed answers help us prepare a stronger first draft with fewer delays.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-xl">
            <input name="botField" value={form.botField} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            {!stripeSessionId && (
              <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                This intake form requires a verified payment. Return to checkout and complete payment before submitting your website details.
              </div>
            )}

            <fieldset className="mb-10">
              <legend className="heading-sm mb-5">Your Contact Information</legend>
              <div className="grid md:grid-cols-2 gap-5">
                <label className="text-sm font-semibold text-gray-800">Your name *<input name="name" value={form.name} onChange={handleChange} required className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-gray-800">Email *<input type="email" name="email" value={form.email} onChange={handleChange} required className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-gray-800">Phone<input type="tel" name="phone" value={form.phone} onChange={handleChange} className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-gray-800">Business name *<input name="businessName" value={form.businessName} onChange={handleChange} required className={`${inputClass} mt-2`} /></label>
              </div>
            </fieldset>

            <fieldset className="mb-10">
              <legend className="heading-sm mb-5">Business and Services</legend>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <label className="text-sm font-semibold text-gray-800">Business type *<input name="businessType" value={form.businessType} onChange={handleChange} required placeholder="Example: handyman, HVAC, cleaning" className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-gray-800">Primary service area *<input name="serviceArea" value={form.serviceArea} onChange={handleChange} required placeholder="Cities, county, or ZIP codes" className={`${inputClass} mt-2`} /></label>
              </div>
              <div className="space-y-5">
                <label className="block text-sm font-semibold text-gray-800">Services to feature *<textarea name="services" value={form.services} onChange={handleChange} required rows={4} placeholder="List your main services and any important details." className={`${inputClass} mt-2 resize-y`} /></label>
                <label className="block text-sm font-semibold text-gray-800">About the business<textarea name="about" value={form.about} onChange={handleChange} rows={4} placeholder="History, experience, licenses, team, and the customers you serve." className={`${inputClass} mt-2 resize-y`} /></label>
                <label className="block text-sm font-semibold text-gray-800">What makes you different?<textarea name="differentiator" value={form.differentiator} onChange={handleChange} rows={3} placeholder="Why should a customer choose your business?" className={`${inputClass} mt-2 resize-y`} /></label>
                <label className="block text-sm font-semibold text-gray-800">Primary customer action<select name="primaryCta" value={form.primaryCta} onChange={handleChange} className={`${inputClass} mt-2`}><option>Call for a quote</option><option>Request a quote online</option><option>Book an appointment</option><option>Send a text message</option><option>Visit the business</option></select></label>
              </div>
            </fieldset>

            <fieldset className="mb-10">
              <legend className="heading-sm mb-5">Domain, Reviews, and Brand Assets</legend>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <label className="text-sm font-semibold text-gray-800">Current or preferred domain<input name="domainName" value={form.domainName} onChange={handleChange} placeholder="example.com" className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-gray-800">Domain status<select name="domainStatus" value={form.domainStatus} onChange={handleChange} className={`${inputClass} mt-2`}><option value="">Select one</option><option>I own the domain</option><option>I need help choosing a domain</option><option>I have an existing website to replace</option><option>I am not sure</option></select></label>
                <label className="text-sm font-semibold text-gray-800">Google reviews or profile link<input type="url" name="reviewLink" value={form.reviewLink} onChange={handleChange} placeholder="https://..." className={`${inputClass} mt-2`} /></label>
                <label className="text-sm font-semibold text-gray-800">Social profile links<textarea name="socialLinks" value={form.socialLinks} onChange={handleChange} rows={3} placeholder="Facebook, Instagram, LinkedIn, or other profiles" className={`${inputClass} mt-2 resize-y`} /></label>
              </div>
              <div className="space-y-5">
                <label className="block text-sm font-semibold text-gray-800">Logo and photo links<textarea name="assetLinks" value={form.assetLinks} onChange={handleChange} rows={3} placeholder="Share Google Drive, Dropbox, or other public download links. Do not include passwords." className={`${inputClass} mt-2 resize-y`} /></label>
                <label className="block text-sm font-semibold text-gray-800">Colors or brand preferences<textarea name="brandNotes" value={form.brandNotes} onChange={handleChange} rows={3} placeholder="Colors, style preferences, or websites you like." className={`${inputClass} mt-2 resize-y`} /></label>
                <label className="block text-sm font-semibold text-gray-800">Anything else we should know?<textarea name="additionalNotes" value={form.additionalNotes} onChange={handleChange} rows={4} className={`${inputClass} mt-2 resize-y`} /></label>
              </div>
            </fieldset>

            {status === 'error' && <p className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{errorMessage}</p>}
            <button type="submit" disabled={status === 'submitting' || !stripeSessionId} className="btn-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'submitting' ? 'Submitting...' : 'Submit Website Information'}
            </button>
            <p className="mt-4 text-center text-xs text-gray-500">Do not submit passwords, payment information, or other sensitive credentials through this form.</p>
          </form>
        </div>
      </div>
    </main>
  );
}
