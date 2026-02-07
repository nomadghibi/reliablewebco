'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import CTASection from '@/components/CTASection';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What do you need from me to get started?',
        a: 'Business name, phone, email, service list, service area, 3 competitor links you respect, logo (or text-only is fine), and any photos you have (optional). That\'s it.',
      },
      {
        q: 'How fast can you really launch a site?',
        a: 'The 24-Hour Landing Page is delivered within 24 hours AFTER you complete the intake and payment is received. Website-in-a-Week takes 5-7 days from intake to review.',
      },
      {
        q: 'Do I need to have my domain ready?',
        a: 'Not required to start. I can launch on a temporary URL first, then move it to your domain when ready. Or you can provide your domain and I\'ll handle the setup.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    questions: [
      {
        q: 'What\'s the difference between the packages?',
        a: '24-Hour Landing Page ($499) = 1 page focused on conversions. Website-in-a-Week ($2,000) = 5 pages with better SEO structure. Growth Website ($3,500+) = 8-12 pages with dedicated service pages and stronger local SEO.',
      },
      {
        q: 'Can I upgrade later?',
        a: 'Yes. Start with a landing page, then upgrade to a full website when you\'re ready. I\'ll credit what you already paid.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Website-in-a-Week and Growth packages are split: 50% deposit to start, 50% before launch. Landing pages are paid 100% upfront.',
      },
      {
        q: 'What if I need more pages?',
        a: 'We can add pages as needed. Custom pages are billed separately or you can upgrade to the Growth package.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'Can you use my current domain?',
        a: 'Yes. I can work with your existing domain or help you register a new one.',
      },
      {
        q: 'Do you do hosting?',
        a: 'Yes. Hosting is included in our monthly care plans starting at $99/mo, which also includes updates and backups.',
      },
      {
        q: 'Can you do WordPress?',
        a: 'I specialize in modern, fast tech stacks (Next.js, etc.) for better performance. If you need WordPress specifically, let\'s discuss your requirements.',
      },
      {
        q: 'Will my site work on mobile?',
        a: 'Yes. Every site is built mobile-first. Mobile responsiveness is tested before launch.',
      },
      {
        q: 'Do you handle email setup?',
        a: 'Basic form-to-email is included. For custom business email (name@yourdomain.com), I can set that up as an add-on.',
      },
    ],
  },
  {
    category: 'Process & Support',
    questions: [
      {
        q: 'How many revisions do I get?',
        a: 'Landing Page and Website-in-a-Week include 1 revision round. Growth Website includes 2 rounds. Additional rounds are billed hourly.',
      },
      {
        q: 'What if I miss the deadline?',
        a: 'If you complete the intake and I miss the agreed deadline, you get $100 back. No drama. No excuses.',
      },
      {
        q: 'What happens after launch?',
        a: 'Your site is live and you own it. If you want ongoing support, updates, and hosting, monthly care plans start at $99/mo.',
      },
      {
        q: 'Can you help with SEO after launch?',
        a: 'Yes. The Pro care plan ($299/mo) includes conversion/SEO reporting and performance tweaks.',
      },
      {
        q: 'Do you offer custom features or integrations?',
        a: 'Yes. For custom features like booking systems, payment processing, or integrations, let\'s schedule a scope call to discuss requirements and pricing.',
      },
    ],
  },
  {
    category: 'Business',
    questions: [
      {
        q: 'What industries do you work with?',
        a: 'HVAC, plumbing, cleaning, dental, landscaping, home services, and other local service businesses. If you need leads now, we\'re a good fit.',
      },
      {
        q: 'Do you work with businesses outside Florida?',
        a: 'Yes. While I specialize in Florida businesses, I work with service businesses anywhere.',
      },
      {
        q: 'Can I see examples of your work?',
        a: 'Yes. Check out the Portfolio page to see real examples of sites I\'ve built.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700">
              Everything you need to know about getting your website built fast.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="heading-sm mb-6 text-primary-600">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((item, itemIdx) => {
                    const itemId = `${sectionIdx}-${itemIdx}`;
                    const isOpen = openItem === itemId;

                    return (
                      <div key={itemId} className="bg-gray-50 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-bold text-lg text-gray-900">{item.q}</span>
                          <svg
                            className={`w-6 h-6 text-gray-600 transform transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md mb-4">Still have questions?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Book a 10-minute call and I&apos;ll answer everything you need to know.
            </p>
            <a href="/contact" className="btn-primary text-lg">
              Book a 10-Minute Call
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to get started?"
        subtitle="Let's build a site that gets you customers."
        primaryCTA={{ text: 'Start My $499 Page', href: '/contact' }}
        secondaryCTA={{ text: 'View Pricing', href: '/pricing' }}
        darkBg={true}
      />
    </main>
  );
}
