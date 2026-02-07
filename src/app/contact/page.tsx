'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

// Calendly URL - Update this with your actual Calendly link
const CALENDLY_URL = 'https://calendly.com/reliablewebco/10min';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Placeholder for form submission
    // In production, this would send to an API endpoint or email service
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Let&apos;s Get Started</h1>
            <p className="text-xl text-gray-700 mb-4">
              Ready to get your business online fast? Fill out the form below or call now.
            </p>
            <a
              href="tel:+13219535199"
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary-600 hover:text-primary-700"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (321) 953-5199
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(321) 953-5199"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Which Service? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="landing-page">24-Hour Landing Page ($499)</option>
                    <option value="website-in-a-week">Website-in-a-Week ($2,000)</option>
                    <option value="growth-website">Growth Website ($3,500-$4,500)</option>
                    <option value="authority-website">Authority Website ($5,500-$7,500+)</option>
                    <option value="web-app">Platform / Web App MVP</option>
                    <option value="care-plan">Monthly Care Plan</option>
                    <option value="not-sure">Not Sure / Just Exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell me about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="What services do you offer? Where do you serve? What's your main goal?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Get My Free Quote'}
                </button>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">I&apos;ll get back to you within 24 hours.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="text-sm">Please try calling instead: (321) 953-5199</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              {/* Calendly Inline Widget */}
              <div>
                <h2 className="heading-md mb-6">Or Book a Call</h2>
                <p className="text-gray-700 mb-4">
                  Schedule a 10-minute call to discuss your project. No pressure, just quick answers to your questions.
                </p>
                <div
                  className="calendly-inline-widget rounded-lg overflow-hidden border border-gray-200"
                  data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1f2937&primary_color=2563eb`}
                  style={{ minWidth: '320px', height: '630px' }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </div>

              <div className="bg-accent-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-accent-900">Ready to Buy Now?</h3>
                <p className="text-accent-800 mb-4">
                  If you&apos;re ready to get the $499 landing page, fill out the form above and select &quot;24-Hour
                  Landing Page&quot;. I&apos;ll send you a payment link and intake form immediately.
                </p>
                <div className="bg-white rounded p-4 text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-1">$499</div>
                  <div className="text-sm text-gray-600">24-Hour Landing Page</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:+13219535199" className="text-primary-600 hover:text-primary-700">
                        (321) 953-5199
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:hello@reliablewebco.com" className="text-primary-600 hover:text-primary-700">
                        hello@reliablewebco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div className="text-gray-700">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">1.</span>
                    <span>I&apos;ll respond within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">2.</span>
                    <span>We&apos;ll have a quick 10-min call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">3.</span>
                    <span>You&apos;ll get a clear quote and timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">4.</span>
                    <span>We start building your site</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
