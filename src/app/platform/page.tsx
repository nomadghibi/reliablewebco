import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Platform & Web App Development — Custom MVPs Built Fast | ReliableWeb Studio',
  description:
    'Need a web app, portal, or platform MVP? We build login systems, dashboards, databases, and integrations. $8,000-$25,000+. Quote after scope call.',
};

const platformFeatures = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: 'User Authentication',
    description: 'Login, registration, JWT tokens, role-based access control, password reset, and session management.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: 'Database & CRUD',
    description: 'PostgreSQL or MongoDB setup, data models, create/read/update/delete operations, and data validation.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Admin Dashboard',
    description: 'Custom admin panel to manage users, content, orders, analytics, and system settings.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: 'Payments & Subscriptions',
    description: 'Stripe or PayPal integration, one-time payments, recurring subscriptions, and invoice generation.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'API Development',
    description: 'RESTful or GraphQL APIs, third-party integrations, webhooks, and API documentation.',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Mobile Responsive',
    description: 'Works perfectly on all devices. Progressive web app (PWA) capabilities available.',
  },
];

const useCases = [
  {
    title: 'Customer Portals',
    examples: ['Client dashboards', 'Order tracking', 'Document management', 'Account management'],
  },
  {
    title: 'Internal Tools',
    examples: ['Admin dashboards', 'CRM systems', 'Inventory management', 'Team collaboration'],
  },
  {
    title: 'Booking & Scheduling',
    examples: ['Appointment systems', 'Resource booking', 'Calendar integrations', 'Automated reminders'],
  },
  {
    title: 'Marketplaces & Platforms',
    examples: ['Multi-vendor platforms', 'Service marketplaces', 'Listing sites', 'Review systems'],
  },
  {
    title: 'SaaS MVPs',
    examples: ['Subscription platforms', 'Analytics tools', 'Workflow automation', 'Data processing'],
  },
  {
    title: 'E-Commerce',
    examples: ['Custom stores', 'Product catalogs', 'Shopping carts', 'Payment processing'],
  },
];

export default function PlatformPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-6">
              Platform / Web App MVP
            </div>
            <h1 className="heading-xl mb-6">Build Your Web App or Platform MVP</h1>
            <p className="text-xl text-gray-700 mb-4">
              Need more than a marketing site? We build custom web applications, portals, and platform MVPs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Login systems, databases, dashboards, payments, integrations — quote after scope call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg">
                Discuss Your Project
              </a>
              <a href="#pricing" className="btn-secondary text-lg">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-stack web applications with modern technology, secure authentication, and scalable architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Common Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer portals to SaaS MVPs, we build custom solutions for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary-600">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Modern Tech Stack</h2>
              <p className="text-xl text-gray-600">
                We use proven, scalable technologies that are fast, secure, and maintainable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-900">Frontend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Next.js / React</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Responsive Design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent-900">Backend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Node.js / Python</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">PostgreSQL / MongoDB</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">REST / GraphQL APIs</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-accent-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">Authentication & Security</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Infrastructure & Deployment</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">Vercel / AWS</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">Docker</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">CI/CD</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">SSL & Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">
                From scope call to MVP launch, we keep the process simple and efficient.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Scope Call (30-60 min)</h3>
                  <p className="text-gray-700">
                    We discuss your requirements, user flows, features, integrations, and timeline. I ask detailed
                    questions to understand your vision and technical needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Quote & Agreement</h3>
                  <p className="text-gray-700">
                    You receive a detailed proposal with features, timeline, and pricing ($8,000-$25,000+). Once
                    approved, we sign agreement and you pay 50% deposit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Design & Development</h3>
                  <p className="text-gray-700">
                    I build the MVP in phases (auth → database → features → integrations). You get regular progress
                    updates and can review working demos throughout.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Testing & Launch</h3>
                  <p className="text-gray-700">
                    Full QA testing, bug fixes, deployment to production, and handoff documentation. 50% final payment
                    before launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Platform MVP Pricing</h2>
              <p className="text-xl text-gray-600">
                Custom quote based on your specific requirements. Here's what influences the price:
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-12">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary-600 mb-2">$8,000 – $25,000+</div>
                <div className="text-xl text-gray-700">Platform / Web App MVP</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary-900">Starting at $8,000</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Basic authentication + user roles</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Core database models</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Simple admin dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Deployment & hosting setup</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-accent-900">Price Increases With</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Payment/subscription integration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Third-party API integrations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Complex workflows & automation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Real-time features (chat, notifications)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Advanced reporting & analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Payment Terms</h3>
                <p className="text-gray-700">50% deposit to start, 50% before launch</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Need an Exact Quote?</h3>
              <p className="text-gray-700 mb-6">
                Every project is different. Schedule a scope call and I'll give you a detailed quote with timeline.
              </p>
              <a href="/contact" className="btn-primary text-lg">
                Book a Scope Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-12">Platform Development FAQ</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">How long does it take to build an MVP?</h3>
                <p className="text-gray-700">
                  Typical timeline is 4-8 weeks depending on complexity. Simple auth + CRUD apps are faster. Complex
                  integrations and workflows take longer. You'll get a timeline estimate after the scope call.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What's included in the price?</h3>
                <p className="text-gray-700">
                  Design, development, testing, deployment, and basic documentation. Hosting costs are separate (around
                  $20-100/month depending on usage). Ongoing maintenance is optional via care plans.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Do you offer ongoing support after launch?</h3>
                <p className="text-gray-700">
                  Yes. We offer monthly care plans starting at $199/mo for bug fixes, updates, and feature additions.
                  Or you can hire us for one-off changes as needed.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Can you integrate with my existing systems?</h3>
                <p className="text-gray-700">
                  Yes. We can integrate with most third-party APIs, payment processors, CRMs, email platforms, and
                  databases. Integration complexity is factored into the quote.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Do I own the code?</h3>
                <p className="text-gray-700">
                  Yes. Upon full payment, you own all the code and can host it anywhere. We can provide the repository
                  and deployment instructions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What if my project is smaller than $8,000?</h3>
                <p className="text-gray-700">
                  Check out our{' '}
                  <Link href="/pricing" className="text-primary-600 hover:underline">
                    Growth Website package
                  </Link>{' '}
                  ($3,500-$4,500) or{' '}
                  <Link href="/pricing" className="text-primary-600 hover:underline">
                    Authority Website
                  </Link>{' '}
                  ($5,500-$7,500+). Those include custom features but without full backend/database functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to build your platform?"
        subtitle="Let's discuss your project and get you a detailed quote."
        primaryCTA={{ text: 'Book a Scope Call', href: '/contact' }}
        secondaryCTA={{ text: 'View Other Services', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
