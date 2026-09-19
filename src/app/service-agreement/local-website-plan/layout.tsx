import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Website Plan Service Agreement | Reliable Web Studio',
  description: 'Service agreement for the Reliable Web Studio Local Website Plan.',
  robots: { index: false, follow: false },
};

export default function ServiceAgreementLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
