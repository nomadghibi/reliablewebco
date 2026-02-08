/**
 * Stripe Payment Links Configuration
 *
 * To set up:
 * 1. Go to https://dashboard.stripe.com/payment-links
 * 2. Create a payment link for each product
 * 3. Replace the placeholder URLs below with your actual Stripe payment links
 *
 * Free to create - you only pay standard Stripe fees (2.9% + 30¢) when someone pays
 */

export const PAYMENT_LINKS = {
  // 24-Hour Landing Page Sprint - $499
  landingPage: {
    price: 499,
    label: '24-Hour Landing Page',
    url: 'https://buy.stripe.com/28E28r2dh7xw81B5t0dUY09',
  },

  // Website-in-a-Week Deposit - $1,000
  websiteDeposit: {
    price: 1000,
    label: 'Website-in-a-Week Deposit',
    // Replace with your actual Stripe payment link
    url: process.env.NEXT_PUBLIC_STRIPE_WEBSITE_DEPOSIT_LINK || 'https://buy.stripe.com/PLACEHOLDER_WEBSITE_DEPOSIT',
  },

  // Care Plan - Basic $99/mo
  carePlanBasic: {
    price: 99,
    label: 'Basic Care Plan',
    recurring: true,
    // Replace with your actual Stripe payment link
    url: process.env.NEXT_PUBLIC_STRIPE_CARE_BASIC_LINK || 'https://buy.stripe.com/PLACEHOLDER_CARE_BASIC',
  },

  // Care Plan - Standard $199/mo
  carePlanStandard: {
    price: 199,
    label: 'Standard Care Plan',
    recurring: true,
    // Replace with your actual Stripe payment link
    url: process.env.NEXT_PUBLIC_STRIPE_CARE_STANDARD_LINK || 'https://buy.stripe.com/PLACEHOLDER_CARE_STANDARD',
  },

  // Care Plan - Pro $299/mo
  carePlanPro: {
    price: 299,
    label: 'Pro Care Plan',
    recurring: true,
    // Replace with your actual Stripe payment link
    url: process.env.NEXT_PUBLIC_STRIPE_CARE_PRO_LINK || 'https://buy.stripe.com/PLACEHOLDER_CARE_PRO',
  },
} as const;

// Helper to check if payment links are configured
export const isPaymentConfigured = (linkUrl: string) => {
  return !linkUrl.includes('PLACEHOLDER');
};
