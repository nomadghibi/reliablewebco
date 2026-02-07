'use client';

import Link from 'next/link';
import { PAYMENT_LINKS, isPaymentConfigured } from '@/config/payments';

type PaymentType = keyof typeof PAYMENT_LINKS;

interface PaymentButtonProps {
  type: PaymentType;
  text?: string;
  className?: string;
  variant?: 'primary' | 'accent' | 'secondary';
  fullWidth?: boolean;
}

export default function PaymentButton({
  type,
  text,
  className = '',
  variant = 'accent',
  fullWidth = false,
}: PaymentButtonProps) {
  const payment = PAYMENT_LINKS[type];
  const isConfigured = isPaymentConfigured(payment.url);

  // Default text based on payment type
  const buttonText = text || `Buy Now — $${payment.price}`;

  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-colors duration-200';

  const variantStyles = {
    primary: 'text-white bg-primary-600 hover:bg-primary-700',
    accent: 'text-white bg-accent-600 hover:bg-accent-700',
    secondary: 'text-primary-700 bg-white border-2 border-primary-600 hover:bg-primary-50',
  };

  const widthClass = fullWidth ? 'w-full text-center' : '';

  // If not configured, link to contact page instead
  const href = isConfigured ? payment.url : '/contact';

  return (
    <Link
      href={href}
      target={isConfigured ? '_blank' : undefined}
      rel={isConfigured ? 'noopener noreferrer' : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`}
    >
      {buttonText}
      {isConfigured && (
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </Link>
  );
}
