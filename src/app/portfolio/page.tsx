import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/CTASection';
import PortfolioGrid from '@/components/PortfolioGrid';

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
    category: 'Website-in-a-Week',
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
    category: 'Website-in-a-Week',
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
    features: ['Risk assessment', 'Prevention tools', 'Healthcare focused', 'User dashboard', 'In development'],
    liveUrl: 'https://stridesafe.vercel.app',
    isLive: true,
    inDevelopment: true,
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
  {
    id: 12,
    title: 'Flippers Remodeling',
    category: 'Website-in-a-Week',
    description: 'Professional home remodeling website for a general contractor specializing in kitchen, bathroom, and whole-home renovations. Built to generate local leads.',
    features: ['Service pages', 'Lead generation', 'Mobile responsive', 'Local SEO', 'Live in production'],
    liveUrl: 'https://flipperscremodeling.com',
    isLive: true,
    image: '/images/portfolio/flippersremodeling.jpg',
  },
  {
    id: 13,
    title: 'Florida Reliable Courier Service',
    category: 'Growth Website',
    description: 'Courier and delivery service website with service area coverage, package tracking info, quote requests, and trust-building features for Florida businesses.',
    features: ['Service pages', 'Quote requests', 'Local SEO', 'Mobile responsive', 'Live in production'],
    liveUrl: 'https://packagesdeliveryserviceofflorida.com',
    isLive: true,
    image: '/images/portfolio/floridareliabledcourier.jpg',
  },
  {
    id: 14,
    title: 'A Brighter Day Daycare',
    category: 'Website-in-a-Week',
    description: 'Childcare and daycare services website serving Palm Bay and Melbourne, Florida. Features location info, enrollment details, and parent resources.',
    features: ['Multi-location', 'Enrollment info', 'Parent resources', 'Local SEO', 'Live in production'],
    liveUrl: 'https://abrighterday.net',
    isLive: true,
    image: '/images/portfolio/abrighterday.jpg',
  },
  {
    id: 15,
    title: 'Best Computer Tech',
    category: 'Authority Website',
    description: 'Full-service IT and computer repair company website with service pages, business solutions, and customer support portal. Comprehensive online presence for a tech services provider.',
    features: ['Service pages', 'Business solutions', 'Support portal', 'Professional design', 'Live in production'],
    liveUrl: 'https://bestcomputertec.com',
    isLive: true,
    image: '/images/portfolio/bestcomputertech.jpg',
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      {/* Hero — Space Coast Night Sky */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-primary-800 overflow-hidden">
        {/* CSS Stars */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[15%] animate-pulse opacity-80" />
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[8%] left-[45%] animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[75%] animate-pulse opacity-70" style={{ animationDelay: '1s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[20%] left-[30%] opacity-50" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[5%] left-[60%] animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[25%] left-[85%] opacity-40" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[12%] left-[92%] animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[18%] left-[8%] opacity-60" />
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[6%] left-[25%] animate-pulse opacity-40" style={{ animationDelay: '0.8s' }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[22%] left-[55%] opacity-50" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[3%] left-[38%] opacity-70" />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[28%] left-[70%] opacity-30" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Live Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">Real Websites. Real Results.</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              See live projects built for real businesses — from fast landing pages to full-stack web applications.
            </p>
            <p className="text-lg text-blue-200/80">
              Every project is designed with one goal: convert visitors into customers.
            </p>

            {/* Space Coast Location Callout */}
            <div className="flex items-center justify-center gap-2 mt-6 text-blue-200">
              <svg aria-hidden="true" className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8" />
              </svg>
              <span className="text-sm md:text-base font-medium">
                Built on Florida&apos;s Space Coast — Serving Businesses Nationwide
              </span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 96h1440V56c-120-20-240-40-360-36s-240 32-360 40-240-8-360-20S120 16 0 24v72z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Featured Projects — 3 representing each tier */}
      <section className="section-padding bg-white" aria-labelledby="featured-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-flex items-center bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                LIVE IN PRODUCTION
              </span>
            </div>
            <h2 id="featured-heading" className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">One from each tier — platforms, websites, and landing pages.</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Featured 1: HVAC Pro Office — Platform MVP */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Platform / Web App MVP
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">HVAC Pro Office</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Full-stack business management platform built for HVAC companies. Handles customer management, scheduling, invoicing, and reporting.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {['User authentication & role-based access', 'Customer portal for service history & invoices', 'Scheduling & dispatch system', 'Invoice generation & payment tracking'].map((feat) => (
                        <li key={feat} className="flex items-start">
                          <svg aria-hidden="true" className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://hvacprooffice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Outcome metrics instead of price */}
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center w-full max-w-xs">
                    <div className="text-sm font-bold text-primary-600 uppercase tracking-wide mb-4">Results</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">Live</div>
                        <div className="text-sm text-gray-600">In production, serving customers</div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-3xl font-bold text-gray-900">&lt;2s</div>
                        <div className="text-sm text-gray-600">Page load time</div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-3xl font-bold text-gray-900">Full-Stack</div>
                        <div className="text-sm text-gray-600">Custom database + dashboards</div>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <Link href="/pricing" className="text-sm text-primary-600 font-semibold hover:text-primary-700">
                        See Platform MVP pricing →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured 2: Flippers Remodeling — Website-in-a-Week */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    Website-in-a-Week
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Flippers Remodeling</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Professional home remodeling website for a general contractor specializing in kitchen, bathroom, and whole-home renovations. Designed to generate local leads and showcase completed projects.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {['Service pages & project showcase', 'Lead generation & contact forms', 'Local SEO optimized', 'Mobile-first responsive design'].map((feat) => (
                        <li key={feat} className="flex items-start">
                          <svg aria-hidden="true" className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://flipperscremodeling.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center w-full max-w-xs">
                    <div className="text-sm font-bold text-amber-600 uppercase tracking-wide mb-4">Results</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">7 Days</div>
                        <div className="text-sm text-gray-600">Intake to launch</div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-3xl font-bold text-gray-900">Local Leads</div>
                        <div className="text-sm text-gray-600">SEO-optimized for service area</div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-3xl font-bold text-gray-900">Mobile-First</div>
                        <div className="text-sm text-gray-600">Responsive on every device</div>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <Link href="/pricing" className="text-sm text-amber-600 font-semibold hover:text-amber-700">
                        See Website-in-a-Week pricing →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured 3: Mr. Clifford — 24-Hour Landing Page */}
            <div className="bg-gradient-to-br from-yellow-50 to-accent-50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-block bg-yellow-600 text-white text-sm font-bold px-4 py-2 rounded mb-4">
                    24-Hour Landing Page
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Mr. Clifford Landing Page</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Fast, conversion-focused single-page landing site delivered in under 24 hours. Perfect for immediate online presence.
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {['Single-page focused design', 'Clear call-to-action buttons', 'Lightning-fast load times', 'Mobile-first responsive'].map((feat) => (
                        <li key={feat} className="flex items-start">
                          <svg aria-hidden="true" className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://mrclifford.netlify.app/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    Visit Live Site
                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl p-6 text-center w-full max-w-xs">
                    <div className="text-sm font-bold text-yellow-600 uppercase tracking-wide mb-4">Results</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">&lt;24h</div>
                        <div className="text-sm text-gray-600">Delivered same day</div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-3xl font-bold text-gray-900">Conversion-First</div>
                        <div className="text-sm text-gray-600">Click-to-call + lead forms</div>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-3xl font-bold text-gray-900">90+</div>
                        <div className="text-sm text-gray-600">Lighthouse performance score</div>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <Link href="/pricing" className="text-sm text-yellow-600 font-semibold hover:text-yellow-700">
                        See 24-Hour pricing →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid — All Projects with Filters */}
      <section className="section-padding bg-gray-50" aria-labelledby="all-projects-heading">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 id="all-projects-heading" className="heading-lg mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our complete portfolio across all service tiers.
            </p>
          </div>

          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white" aria-labelledby="stats-heading">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="stats-heading" className="heading-lg mb-4">Built For Results</h2>
              <p className="text-xl text-gray-600">Every project follows proven principles that drive conversions.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Lightning Fast</div>
                <p className="text-gray-700">Sub-2 second load times on all pages for better user experience and SEO.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-50 to-white border border-accent-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 text-white rounded-full mb-4">
                  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Mobile First</div>
                <p className="text-gray-700">Designed for mobile, perfected for desktop. Flawless on every device.</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4">
                  <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="section-padding bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="testimonials-heading" className="heading-lg mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real business owners who grew their business with Reliable Web Studio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
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
                  <p className="font-semibold text-gray-900">Mike R.</p>
                  <p className="text-sm text-gray-600">HVAC company, Palm Bay, FL</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
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
                  <p className="font-semibold text-gray-900">Sarah K.</p>
                  <p className="text-sm text-gray-600">Cleaning service, Melbourne, FL</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 20 20">
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
                  <p className="font-semibold text-gray-900">Carlos M.</p>
                  <p className="text-sm text-gray-600">Plumbing business, Brevard County, FL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Single attribution */}
          <p className="text-center text-xs text-gray-400 mt-10">All projects designed & built by Reliable Web Studio (Best Computer Tech LLC)</p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Success Story?"
        subtitle="Join the businesses already growing with Reliable Web Studio. From landing pages to full platforms."
        primaryCTA={{ text: 'Get Started Today', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
