'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CheckoutActionsProps {
  checkoutHref: string;
  configured: boolean;
  requiresTermAcceptance: boolean;
}

export default function CheckoutActions({
  checkoutHref,
  configured,
  requiresTermAcceptance,
}: CheckoutActionsProps) {
  const [accepted, setAccepted] = useState(false);
  const canContinue = !requiresTermAcceptance || accepted;

  return (
    <>
      {configured && requiresTermAcceptance && (
        <label className="mb-6 flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span>
            I understand this plan includes a 12-month initial commitment at $100/month, plus the $150 setup fee, and I agree to the{' '}
            <Link href="/service-agreement/local-website-plan" target="_blank" className="font-semibold text-primary-700 underline hover:text-primary-800">
              Local Website Plan Service Agreement
            </Link>{' '}
            and{' '}
            <Link href="/terms" target="_blank" className="font-semibold text-primary-700 underline hover:text-primary-800">
              Terms of Service
            </Link>.
          </span>
        </label>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {configured ? (
          <a
            href={canContinue ? checkoutHref : undefined}
            aria-disabled={!canContinue}
            className={`btn-primary text-center ${!canContinue ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Continue to Secure Payment
          </a>
        ) : (
          <Link href="/contact#website-plan" className="btn-primary text-center">
            Contact Us to Start
          </Link>
        )}
        <Link href="/contact#book-call" className="btn-secondary text-center">
          Book a 10-Minute Call
        </Link>
      </div>
    </>
  );
}
