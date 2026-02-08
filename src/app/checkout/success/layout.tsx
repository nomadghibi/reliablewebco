import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful | Reliable Web Studio',
  description: 'Thank you for your purchase! We will start building your landing page right away.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
