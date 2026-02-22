import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Get a Free Quote | Reliable Web Studio',
  description:
    'Request a free quote, book a 10-minute call, or start your $499 landing page today. Response within 24 hours. Phone: (321) 953-5199.',
  openGraph: {
    title: 'Contact — Get a Free Quote | Reliable Web Studio',
    description:
      'Request a free quote, book a 10-minute call, or start your $499 landing page today. Response within 24 hours.',
    url: 'https://reliablewebstudio.com/contact',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Contact Reliable Web Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Get a Free Quote | Reliable Web Studio',
    description:
      'Request a free quote, book a 10-minute call, or start your $499 landing page today. Response within 24 hours.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
