import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ — Fast Website Development Questions Answered | Reliable Web Studio',
  description:
    'Get answers about our 24-hour landing pages, website-in-a-week builds, pricing, revisions, hosting, and more. Everything you need to know before getting started.',
  openGraph: {
    title: 'FAQ — Fast Website Development Questions Answered | Reliable Web Studio',
    description:
      'Get answers about our 24-hour landing pages, website-in-a-week builds, pricing, revisions, hosting, and more.',
    url: 'https://reliablewebstudio.com/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Fast Website Development Questions Answered | Reliable Web Studio',
    description:
      'Get answers about our 24-hour landing pages, website-in-a-week builds, pricing, revisions, hosting, and more.',
  },
  alternates: {
    canonical: 'https://reliablewebstudio.com/faq',
  },
};

const faqItems = [
  { q: 'What do you need from me to get started?', a: "Business name, phone, email, service list, service area, 3 competitor links you respect, logo (or text-only is fine), and any photos you have (optional). That's it." },
  { q: 'How fast can you really launch a site?', a: 'The 24-Hour Landing Page is delivered within 24 hours AFTER you complete the intake and payment is received. Website-in-a-Week takes 5-7 days from intake to review.' },
  { q: 'Do I need to have my domain ready?', a: "Not required to start. I can launch on a temporary URL first, then move it to your domain when ready. Or you can provide your domain and I'll handle the setup." },
  { q: "What's the difference between the packages?", a: '24-Hour Landing Page ($499) = 1 page focused on conversions. Website-in-a-Week ($2,000) = 5 pages with better SEO structure. Growth Website ($3,500+) = 8-12 pages with dedicated service pages and stronger local SEO.' },
  { q: 'Can I upgrade later?', a: "Yes. Start with a landing page, then upgrade to a full website when you're ready. I'll credit what you already paid." },
  { q: 'Do you offer payment plans?', a: 'Website-in-a-Week and Growth packages are split: 50% deposit to start, 50% before launch. Landing pages are paid 100% upfront.' },
  { q: 'What if I need more pages?', a: 'We can add pages as needed. Custom pages are billed separately or you can upgrade to the Growth package.' },
  { q: 'Can you use my current domain?', a: 'Yes. I can work with your existing domain or help you register a new one.' },
  { q: 'Do you do hosting?', a: 'Yes. Hosting is included in our monthly care plans starting at $99/mo, which also includes updates and backups.' },
  { q: 'Can you do WordPress?', a: "I specialize in modern, fast tech stacks (Next.js, etc.) for better performance. If you need WordPress specifically, let's discuss your requirements." },
  { q: 'Will my site work on mobile?', a: 'Yes. Every site is built mobile-first. Mobile responsiveness is tested before launch.' },
  { q: 'Do you handle email setup?', a: 'Basic form-to-email is included. For custom business email (name@yourdomain.com), I can set that up as an add-on.' },
  { q: 'How many revisions do I get?', a: 'Landing Page and Website-in-a-Week include 1 revision round. Growth Website includes 2 rounds. Additional rounds are billed hourly.' },
  { q: 'What if I miss the deadline?', a: 'If you complete the intake and I miss the agreed deadline, you get $100 back. No drama. No excuses.' },
  { q: 'What happens after launch?', a: 'Your site is live and you own it. If you want ongoing support, updates, and hosting, monthly care plans start at $99/mo.' },
  { q: 'Can you help with SEO after launch?', a: 'Yes. The Pro care plan ($299/mo) includes conversion/SEO reporting and performance tweaks.' },
  { q: 'Do you offer custom features or integrations?', a: "Yes. For custom features like booking systems, payment processing, or integrations, let's schedule a scope call to discuss requirements and pricing." },
  { q: 'What industries do you work with?', a: "HVAC, plumbing, cleaning, dental, landscaping, home services, and other local service businesses. If you need leads now, we're a good fit." },
  { q: 'Do you work with businesses outside Florida?', a: 'Yes. While I specialize in Florida businesses, I work with service businesses anywhere.' },
  { q: 'Can I see examples of your work?', a: "Yes. Check out the Portfolio page to see real examples of sites I've built." },
];

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
