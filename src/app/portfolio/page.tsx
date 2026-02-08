import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio — Real Websites, Real Results | Reliable Web Studio',
  description:
    'View our live portfolio of websites and web applications. From 24-hour landing pages to full-stack platforms. See real projects serving real customers.',
  openGraph: {
    title: 'Portfolio — Real Websites, Real Results | Reliable Web Studio',
    description: 'View our live portfolio of websites and web applications. From 24-hour landing pages to full-stack platforms.',
    url: 'https://reliablewebstudio.com/portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Real Websites, Real Results | Reliable Web Studio',
    description: 'View our live portfolio of websites and web applications. From 24-hour landing pages to full-stack platforms.',
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/portfolio',
  },
};

const portfolioItems = [
  {
    id: 1,
    title: 'HVAC Pro Office',
    category: 'Platform / Web App MVP',
    description: 'Full-stack HVAC business management platform with customer portal, scheduling, invoicing, and reporting.',
    features: ['User authentication', 'Customer portal', 'Scheduling system', 'Invoice management', 'Live in production'],
    liveUrl: 'https://hvacprooffice.com',
    isLive: true,
    image: '/images/portfolio/hvacprooffice.png',
  },
  {
    id: 2,
    title: 'Ezzy Dental Platform',
    category: 'Platform / Web App MVP',
    description: 'Dental practice management platform with patient records, appointment scheduling, treatment plans, and billing.',
    features: ['Patient portal', 'Appointment system', 'Treatment tracking', 'Billing integration', 'In development'],
    liveUrl: 'https://ezzydental.netlify.app',
    isLive: true,
    inDevelopment: true,
    image: '/images/portfolio/ezzydental.jpg',
  },
  {
    id: 3,
    title: 'RJ Dry Cleaners',
    category: 'Website-in-a-Week',
    description: 'Professional dry cleaning service website with online booking, pricing, and service details.',
    features: ['Online booking', 'Service pricing', 'Location info', 'Customer reviews', 'Live in production'],
    liveUrl: 'https://rjdrycleaners.com',
    isLive: true,
    image: '/images/portfolio/rjdrycleaners.jpg',
  },
  {
    id: 4,
    title: 'Serve In Christ',
    category: 'Growth Website',
    description: 'Church/ministry website with event management, donation system, and content management.',
    features: ['Event calendar', 'Online donations', 'Blog & sermons', 'Member portal', 'Live in production'],
    liveUrl: 'https://serveinchrist.org',
    isLive: true,
    image: '/images/portfolio/serveinchrist.jpg',
  },
  {
    id: 5,
    title: 'J Dehnashi Portfolio',
    category: 'Authority Website',
    description: 'Personal portfolio and professional website showcasing work, expertise, and services.',
    features: ['Portfolio showcase', 'Professional bio', 'Contact integration', 'Modern design', 'Live in production'],
    liveUrl: 'https://jdehnashi.netlify.app',
    isLive: true,
    image: '/images/portfolio/jdehnashi.jpg',
  },
  {
    id: 6,
    title: 'Journeys Staffing Home Care',
    category: 'Growth Website',
    description: 'Healthcare staffing and home care services website with service details, career opportunities, and client portal.',
    features: ['Service pages', 'Career applications', 'Client portal', 'Mobile responsive', 'Live in production'],
    liveUrl: 'https://journeysstaffinghomecareservices.com',
    isLive: true,
    image: '/images/portfolio/journeys.png',
  },
  {
    id: 7,
    title: 'Mr. Clifford Landing Page',
    category: '24-Hour Landing Page',
    description: 'Fast single-page landing site with strong call-to-action and conversion focus. Delivered in under 24 hours.',
    features: ['Single page', 'Click-to-call CTA', 'Fast load time', 'Mobile-first', 'Live in production'],
    liveUrl: 'https://mrclifford.netlify.app/en/',
    isLive: true,
    image: '/images/portfolio/MrClifford.jpg',
  },
  {
    id: 8,
    title: 'Lyon Tree Service',
    category: '24-Hour Landing Page',
    description: 'Tree service landing page with instant quote requests and emergency contact. Fast deployment for immediate lead generation.',
    features: ['Emergency contact', 'Quote requests', 'Service showcase', 'Mobile responsive', 'Live in production'],
    liveUrl: 'https://lyontree.netlify.app',
    isLive: true,
    image: '/images/portfolio/lyontree.jpg',
  },
  {
    id: 9,
    title: 'StrideSafe',
    category: 'Platform / Web App MVP',
    description: 'Fall prevention platform designed to reduce fall-related injuries. Built for healthcare facilities, elderly care communities, and rehabilitation centers.',
    features: ['Risk assessment', 'Prevention tools', 'Healthcare focused', 'User dashboard', 'Live in production'],
    liveUrl: 'https://stridesafe.vercel.app',
    isLive: true,
    image: '/images/portfolio/stridesafe.jpg',
  },
  {
    id: 10,
    title: 'TechEze AI',
    category: 'Authority Website',
    description: 'AI consulting firm website showcasing AI automation services for small to mid-market businesses. Features service tiers, case studies, and consultation booking.',
    features: ['Service showcase', 'Pricing tiers', 'Consultation booking', 'Professional design', 'Live in production'],
    liveUrl: 'https://www.techezeai.com',
    isLive: true,
    image: '/images/portfolio/techezeai.jpg',
  },
  {
    id: 11,
    title: 'Destiny Insights',
    category: 'Platform / Web App MVP',
    description: 'AI-powered astrology and fortune-telling platform with personalized readings, Bazi analysis, compatibility insights, and subscription services.',
    features: ['AI integration', 'Payment system', 'Personalized readings', 'Subscription model', 'Live in production'],
    liveUrl: 'https://www.destiny-insights.com',
    isLive: true,
    image: '/images/portfolio/destinyinsights.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Live Portfolio
            </div>
            <h1 className="heading-xl mb-6">Real Websites. Real Results.</h1>
            <p className="text-xl text-gray-700 mb-4">
              See live projects built for real businesses — from fast landing pages to full-stack web applications.
            </p>
            <p className="text-lg text-gray-600">
              Every project is designed with one goal: convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Live Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-flex items-center bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                LIVE IN PRODUCTION
              </span>
            </div>
            <h2 className="heading-lg mb-4">Featured Live Projects</h2>
            <p className="text-xl text-gray-600">Real websites serving real customers right now.</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* HVAC Pro Office */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Platform / Web App MVP
                  </div>
                  <h3 className="text-4xl font-bold mb-4">HVAC Pro Office</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Full-stack business management platform built for HVAC companies. Handles customer management, scheduling, invoicing, and reporting.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Platform Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>User authentication & role-based access</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Customer portal for service history & invoices</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Scheduling & dispatch system</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Invoice generation & payment tracking</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://hvacprooffice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-primary-600 mb-2">$15k+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Platform MVP Investment</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ Custom database design</p>
                      <p>✓ User authentication system</p>
                      <p>✓ Admin & customer dashboards</p>
                      <p>✓ Payment integrations</p>
                      <p>✓ Deployed & maintained</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ezzy Dental Platform */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-primary-50 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded">
                      Platform / Web App MVP
                    </div>
                    <span className="inline-flex items-center bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      IN DEVELOPMENT
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Ezzy Dental Platform</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Comprehensive dental practice management platform with patient records, appointment scheduling, treatment plans, and integrated billing system.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Platform Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Patient portal & record management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Appointment scheduling & calendar</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Treatment plan tracking</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Billing & payment integration</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://ezzydental.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-lg inline-flex items-center gap-2"
                  >
                    Preview Development Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center border-2 border-blue-100">
                    <div className="text-6xl font-bold text-primary-600 mb-2">$18k+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Platform MVP (In Progress)</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ Complex data modeling</p>
                      <p>✓ Multi-user system</p>
                      <p>✓ Patient & admin dashboards</p>
                      <p>✓ Payment processing</p>
                      <p>✓ HIPAA compliance ready</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-blue-600 font-semibold">Currently in active development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mr. Clifford Landing Page */}
            <div className="bg-gradient-to-br from-yellow-50 to-accent-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-yellow-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    24-Hour Landing Page
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Mr. Clifford Landing Page</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Fast, conversion-focused single-page landing site delivered in under 24 hours. Perfect for immediate online presence.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Landing Page Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Single-page focused design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Clear call-to-action buttons</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Lightning-fast load times</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Mobile-first responsive</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://mrclifford.netlify.app/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-yellow-600 mb-2">$499</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">24-Hour Landing Page</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ Delivered in 24 hours</p>
                      <p>✓ Single conversion-focused page</p>
                      <p>✓ Click-to-call & contact forms</p>
                      <p>✓ Mobile responsive</p>
                      <p>✓ Fast & affordable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RJ Dry Cleaners */}
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-accent-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Website-in-a-Week
                  </div>
                  <h3 className="text-4xl font-bold mb-4">RJ Dry Cleaners</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Professional dry cleaning service website with online booking, service details, and customer information.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Website Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Online booking system</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Service pricing & details</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Location & contact information</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Mobile-first responsive design</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://rjdrycleaners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-accent-600 mb-2">$2,000</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Website-in-a-Week</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ 5-7 page professional site</p>
                      <p>✓ Online booking integration</p>
                      <p>✓ Service pages & pricing</p>
                      <p>✓ Mobile responsive</p>
                      <p>✓ Delivered in 7 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* J Dehnashi Portfolio */}
            <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-primary-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Authority Website
                  </div>
                  <h3 className="text-4xl font-bold mb-4">J Dehnashi Portfolio</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Personal portfolio and professional showcase website with modern design, project gallery, and contact integration.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Website Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Portfolio showcase & gallery</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Professional bio & about section</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Modern UI/UX design</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Contact form & social links</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://jdehnashi.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-blue-600 mb-2">$5,500+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Authority Website</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ 12-20+ page website</p>
                      <p>✓ Portfolio & gallery system</p>
                      <p>✓ Custom design & branding</p>
                      <p>✓ Professional showcase</p>
                      <p>✓ SEO & performance optimized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journeys Staffing Home Care */}
            <div className="bg-gradient-to-br from-green-50 via-teal-50 to-primary-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-teal-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Growth Website
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Journeys Staffing Home Care</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Healthcare staffing and home care services website with comprehensive service details, career opportunities, and client information.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Website Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Service pages & care options</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Career opportunities & applications</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Client portal access</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Mobile responsive design</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://journeysstaffinghomecareservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-teal-600 mb-2">$3,500+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Growth Website</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ 8-12 page website</p>
                      <p>✓ Service & career pages</p>
                      <p>✓ Client portal integration</p>
                      <p>✓ Healthcare compliance ready</p>
                      <p>✓ SEO optimized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serve In Christ */}
            <div className="bg-gradient-to-br from-primary-50 via-purple-50 to-accent-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Growth Website
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Serve In Christ</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Church and ministry website with event management, online donations, sermon library, and member portal.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Website Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Event calendar & registration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Online donation system</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sermon library & blog</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Member portal & resources</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://serveinchrist.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-purple-600 mb-2">$3,500+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Growth Website</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ 8-12 page website</p>
                      <p>✓ Event & donation systems</p>
                      <p>✓ Content management</p>
                      <p>✓ Member portal access</p>
                      <p>✓ SEO optimized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* StrideSafe */}
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Platform / Web App MVP
                  </div>
                  <h3 className="text-4xl font-bold mb-4">StrideSafe</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Fall prevention platform designed to reduce fall-related injuries and accidents. Built for healthcare facilities, elderly care communities, and rehabilitation centers.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Platform Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Fall risk assessment tools</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Prevention protocols & tracking</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Healthcare-focused dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>User-friendly interface</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://stridesafe.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-red-600 mb-2">$12k+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Platform MVP</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ Healthcare compliance</p>
                      <p>✓ Risk assessment engine</p>
                      <p>✓ User management system</p>
                      <p>✓ Reporting & analytics</p>
                      <p>✓ Production deployed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TechEze AI */}
            <div className="bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Authority Website
                  </div>
                  <h3 className="text-4xl font-bold mb-4">TechEze AI</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    AI consulting firm website showcasing automation services for small to mid-market businesses. Features service tiers, ROI-focused messaging, and consultation booking.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Website Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Service tier showcase</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Pricing & packages display</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Consultation booking integration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Professional AI/tech branding</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://www.techezeai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold text-indigo-600 mb-2">$5,500+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Authority Website</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ 12-20+ page website</p>
                      <p>✓ Service & pricing pages</p>
                      <p>✓ Booking integration</p>
                      <p>✓ Professional AI branding</p>
                      <p>✓ SEO & performance optimized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destiny Insights */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Platform / Web App MVP
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Destiny Insights</h3>
                  <p className="text-xl text-gray-700 mb-6">
                    AI-powered astrology and fortune-telling platform delivering personalized readings using ancient Chinese metaphysical systems combined with modern AI technology.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Platform Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>ChatGPT-4 AI integration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Bazi & compatibility analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Subscription & payment system</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>12+ personalized reading types</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://www.destiny-insights.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">$18k+</div>
                    <div className="text-lg font-semibold text-gray-700 mb-4">Platform MVP</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>✓ AI-powered readings engine</p>
                      <p>✓ User authentication system</p>
                      <p>✓ Payment & subscriptions</p>
                      <p>✓ 12+ feature modules</p>
                      <p>✓ 50,000+ users served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - All Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our complete portfolio of websites and applications across all service tiers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Website Screenshot */}
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} - Website Screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Coming Soon</span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Status Badges */}
                  {item.isLive && !item.inDevelopment && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                        LIVE
                      </span>
                    </div>
                  )}
                  {item.inDevelopment && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                        IN DEVELOPMENT
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm leading-relaxed">{item.description}</p>
                  <p className="text-xs text-gray-500 mb-4">Designed by Reliable Web Studio - Best Computer Tech LLC</p>

                  {/* Features Tags */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.features.slice(0, 4).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gray-50 text-gray-700 text-xs px-2.5 py-1 rounded-md border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 4 && (
                        <span className="inline-block bg-gray-50 text-gray-500 text-xs px-2.5 py-1 rounded-md border border-gray-200">
                          +{item.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                    >
                      {item.inDevelopment ? 'Preview Site' : 'View Live Site'}
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <div className="text-center text-sm text-gray-500 py-3 px-4 bg-gray-50 rounded-lg">
                      Demo Project
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Built For Results</h2>
              <p className="text-xl text-gray-600">Every project follows proven principles that drive conversions.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Lightning Fast</div>
                <p className="text-gray-700">Sub-2 second load times on all pages for better user experience and SEO.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-50 to-white border border-accent-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Mobile First</div>
                <p className="text-gray-700">Designed for mobile, perfected for desktop. Flawless on every device.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Conversion Focused</div>
                <p className="text-gray-700">Clear calls-to-action and proven layout patterns that drive leads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real business owners who grew their business with Reliable Web Studio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                &quot;We went from zero online presence to ranking on page 1 in our area. Calls went up 40% in the
                first month.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike</p>
                  <p className="text-sm text-gray-600">HVAC Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                &quot;I had a site live in 20 hours. No joke. And it actually works — people are filling out the
                form.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah</p>
                  <p className="text-sm text-gray-600">Cleaning Service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                &quot;Finally, a developer who understands small business. No fancy jargon, just results.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  C
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Carlos</p>
                  <p className="text-sm text-gray-600">Plumbing Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Success Story?"
        subtitle="Join the businesses already growing with Reliable Web Studio. From landing pages to full platforms, we'll build exactly what you need."
        primaryCTA={{ text: 'Get Started Today', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
