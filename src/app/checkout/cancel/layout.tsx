import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout Cancelled | Reliable Web Studio',
  description: 'Your checkout was cancelled. No charges were made. Feel free to try again or contact us with questions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutCancelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
