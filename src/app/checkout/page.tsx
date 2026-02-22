import type { Metadata } from 'next';
import Link from 'next/link';
import { PAYMENT_LINKS, isPaymentConfigured } from '@/config/payments';

type PaymentType = keyof typeof PAYMENT_LINKS;

interface CheckoutPageProps {
  searchParams: Promise<{
    package?: string;
  }>;
}

const packageContent: Record<
  PaymentType,
  {
    title: string;
    summary: string;
    timeline: string;
  }
> = {
  landingPage: {
    title: '24-Hour Landing Page Sprint',
    summary:
      'A conversion-focused landing page built for fast lead generation with call, form, and booking intent.',
    timeline: '24-hour delivery starts after intake completion.',
  },
  leadSprintBundle: {
    title: 'Lead Sprint Bundle',
    summary:
      '24-hour landing page plus follow-up automation setup so new leads are contacted quickly.',
    timeline: 'Design timeline starts after intake completion.',
  },
  websiteDeposit: {
    title: 'Website-in-a-Week Deposit',
    summary:
      'Deposit payment to start your multi-page build with fixed milestones and launch support.',
    timeline: '5-7 day delivery timeline starts after intake completion.',
  },
  carePlanBasic: {
    title: 'Basic Care Plan',
    summary: 'Monthly hosting, updates, and backups for stable ongoing site operations.',
    timeline: 'Plan starts immediately after payment confirmation.',
  },
  carePlanStandard: {
    title: 'Standard Care Plan',
    summary: 'Everything in Basic plus monthly small edits for active site improvement.',
    timeline: 'Plan starts immediately after payment confirmation.',
  },
  carePlanPro: {
    title: 'Pro Care Plan',
    summary: 'Everything in Standard plus conversion/SEO reporting and performance optimization.',
    timeline: 'Plan starts immediately after payment confirmation.',
  },
};

export const metadata: Metadata = {
  title: 'Checkout | Reliable Web Studio',
  description: 'Secure checkout for Reliable Web Studio packages.',
  openGraph: {
    title: 'Checkout | Reliable Web Studio',
    description: 'Secure checkout for Reliable Web Studio packages.',
    url: 'https://reliablewebstudio.com/checkout',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Reliable Web Studio checkout' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checkout | Reliable Web Studio',
    description: 'Secure checkout for Reliable Web Studio packages.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/checkout',
  },
  robots: {
    index: false,
    follow: false,
  },
};

function isPaymentType(value: string): value is PaymentType {
  return value in PAYMENT_LINKS;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { package: packageParam } = await searchParams;
  const selectedType: PaymentType =
    packageParam && isPaymentType(packageParam) ? packageParam : 'landingPage';

  const selectedPackage = PAYMENT_LINKS[selectedType];
  const selectedContent = packageContent[selectedType];
  const configured = isPaymentConfigured(selectedPackage.url);
  const checkoutHref = configured ? selectedPackage.url : '/contact';
  const hasRecurringPrice = 'recurring' in selectedPackage && selectedPackage.recurring;

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-start">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
            >
              ← Back to Pricing
            </Link>
          </div>

          <div className="rounded-2xl bg-white shadow-xl border border-gray-200 p-8 md:p-10">
            <p className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-800 mb-4">
              Secure Checkout
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{selectedContent.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{selectedContent.summary}</p>

            <div className="rounded-xl border border-primary-200 bg-primary-50 px-5 py-4 mb-6">
              <p className="text-sm font-semibold text-primary-800">
                {selectedContent.timeline}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 mb-8">
              <p className="text-sm text-gray-700">
                Package total:{' '}
                <span className="font-bold text-gray-900">
                  ${selectedPackage.price}
                  {hasRecurringPrice ? '/mo' : ''}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={checkoutHref}
                className="btn-primary text-center"
              >
                {configured ? 'Continue to Secure Payment' : 'Contact Us to Start'}
              </a>
              <Link href="/contact#book-call" className="btn-secondary text-center">
                Book a 10-Minute Call
              </Link>
            </div>

            {!configured && (
              <p className="text-sm text-amber-700 mt-4">
                This payment link is not configured yet. Please contact us and we will help you start right away.
              </p>
            )}

            <p className="text-xs text-gray-500 mt-6">
              Need to compare options first? Return to pricing or contact us for help choosing the right package.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
