import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Analysis | Reliable Web Studio',
  description:
    'Submit your website URL and get a professional AI-assisted analysis with prioritized fixes. Full report delivered by next business day.',
  alternates: {
    canonical: 'https://reliablewebstudio.com/audit',
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

