import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get My Website Started | Reliable Web Studio',
  description:
    'Start your Space Coast local business website plan for $150 setup + $100/month, request custom website pricing, or book a 10-minute call. Phone: (321) 953-5199.',
  openGraph: {
    title: 'Get My Website Started | Reliable Web Studio',
    description:
      'Start your Space Coast local business website plan for $150 setup + $100/month, request custom website pricing, or book a 10-minute call.',
    url: 'https://www.reliablewebstudio.com/contact',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Contact Reliable Web Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get My Website Started | Reliable Web Studio',
    description:
      'Start your Space Coast local business website plan for $150 setup + $100/month, request custom website pricing, or book a 10-minute call.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.reliablewebstudio.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
