import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Analysis | Reliable Web Studio',
  description:
    'Submit your website URL and get a professional AI-assisted analysis with prioritized fixes. Full report delivered by next business day.',
  openGraph: {
    title: 'Free Website Analysis | Reliable Web Studio',
    description:
      'Submit your website URL and get a professional AI-assisted analysis with prioritized fixes. Full report delivered by next business day.',
    url: 'https://www.reliablewebstudio.com/audit',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Free Website Analysis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Analysis | Reliable Web Studio',
    description:
      'Submit your website URL and get a professional AI-assisted analysis with prioritized fixes. Full report delivered by next business day.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.reliablewebstudio.com/audit',
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
