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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Get a Free Quote | Reliable Web Studio',
    description:
      'Request a free quote, book a 10-minute call, or start your $499 landing page today. Response within 24 hours.',
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
