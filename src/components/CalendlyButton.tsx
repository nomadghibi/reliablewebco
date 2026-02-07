'use client';

import { useEffect } from 'react';

// Calendly URL
const CALENDLY_URL = 'https://calendly.com/freddehnashi/30min';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'white';
}

export default function CalendlyButton({
  text = 'Book a 10-Minute Call',
  className = '',
  variant = 'secondary',
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1f2937&primary_color=2563eb`,
      });
    }
  };

  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-colors duration-200 cursor-pointer';

  const variantStyles = {
    primary: 'text-white bg-primary-600 hover:bg-primary-700',
    secondary: 'text-primary-700 bg-white border-2 border-primary-600 hover:bg-primary-50',
    white: 'text-gray-900 bg-white hover:bg-gray-100',
  };

  return (
    <button
      onClick={openCalendly}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </button>
  );
}
