import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Onboarding | Reliable Web Studio',
  description: 'Submit the business details and content needed to begin your Reliable Web Studio project.',
  robots: { index: false, follow: false },
};

export default function OnboardingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
