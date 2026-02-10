# Reliable Web Studio Marketing Site

A high-converting marketing website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Overview

Reliable Web Studio is a marketing site for a Florida-based web design service that specializes in:
- 24-Hour Landing Pages ($499)
- Website-in-a-Week ($2,000)
- Growth Websites ($3,500+)
- Web App/Portal Development (Starts $8,000+)
- Monthly Care Plans ($99-$299/mo)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Optimized for Vercel

## Features

- ✅ Mobile-first responsive design
- ✅ Fast performance (static generation)
- ✅ SEO optimized with metadata
- ✅ Sitemap and robots.txt
- ✅ Conversion-focused CTAs throughout
- ✅ Sticky header with CTA
- ✅ Mobile click-to-call button
- ✅ Contact form integration (Formspree)
- ✅ Website analysis request flow with backend snapshot
- ✅ FAQ with accordion
- ✅ Privacy and Terms pages

## Pages

1. **Home** (`/`) - Long-form landing with hero, offers, proof, process, guarantee, FAQ preview
2. **Pricing** (`/pricing`) - Detailed pricing for all packages and care plans
3. **Portfolio** (`/portfolio`) - Examples of work with testimonials
4. **Platform** (`/platform`) - Platform and web app MVP capabilities, process, and pricing
5. **Process** (`/process`) - 4-step process, intake requirements, payment structure
6. **About** (`/about`) - Company background, service area, and differentiators
7. **FAQ** (`/faq`) - Comprehensive FAQs organized by category
8. **Contact** (`/contact`) - Contact form, phone, and email
9. **Audit** (`/audit`) - Website analysis intake form (next-day email report flow)
10. **Privacy** (`/privacy`) - Privacy policy
11. **Terms** (`/terms`) - Terms of service
12. **Checkout Success** (`/checkout/success`) - Post-payment confirmation
13. **Checkout Cancel** (`/checkout/cancel`) - Checkout cancellation recovery

## Local Development

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Import repo into Vercel
3. Vercel will auto-detect Next.js and deploy
4. Add custom domain in Project Settings → Domains
5. Follow DNS instructions (A record for apex, CNAME for www)

### Environment Variables

Recommended environment variables:

- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 measurement ID (enables analytics event tracking)
- `NEXT_PUBLIC_STRIPE_LANDING_PAGE_LINK` - Optional override for landing page payment link
- `NEXT_PUBLIC_STRIPE_WEBSITE_DEPOSIT_LINK` - Website deposit payment link
- `NEXT_PUBLIC_STRIPE_CARE_BASIC_LINK` - Basic care plan payment link
- `NEXT_PUBLIC_STRIPE_CARE_STANDARD_LINK` - Standard care plan payment link
- `NEXT_PUBLIC_STRIPE_CARE_PRO_LINK` - Pro care plan payment link

## Customization

### Update Contact Information

Replace placeholder phone number and email in:
- `src/components/Header.tsx` (mobile click-to-call button)
- `src/components/Footer.tsx` (footer contact info)
- `src/app/contact/page.tsx` (contact page)
- `src/app/privacy/page.tsx` (privacy contact)
- `src/app/terms/page.tsx` (terms contact)

### Update Branding

Colors are defined in `src/app/globals.css`:
- `--color-primary-*` - Primary blue colors
- `--color-accent-*` - Accent orange colors

### Integrate Form Submission

The contact form in `src/app/contact/page.tsx` is currently wired to Formspree. To switch providers, replace the submit endpoint and payload handling with:
- Email service (SendGrid, Mailgun, etc.)
- Alternate form service (Netlify Forms, Basin, etc.)
- Custom API endpoint

## Project Structure

```
reliablewebstudio/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── about/      # About page
│   │   ├── api/og/     # OpenGraph image routes
│   │   ├── checkout/   # Checkout success/cancel pages
│   │   ├── contact/    # Contact page
│   │   ├── faq/        # FAQ page
│   │   ├── platform/   # Platform page
│   │   ├── portfolio/  # Portfolio page
│   │   ├── pricing/    # Pricing page
│   │   ├── privacy/    # Privacy page
│   │   ├── process/    # Process page
│   │   ├── terms/      # Terms page
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── globals.css # Global styles
│   │   ├── sitemap.ts  # Sitemap generation
│   │   └── robots.ts   # Robots.txt generation
│   └── components/     # Reusable components
│       ├── Header.tsx  # Site header
│       ├── Footer.tsx  # Site footer
│       └── CTASection.tsx # CTA component
├── docs/               # Documentation
└── package.json
```

## Performance

The site is optimized for performance:
- Static generation for all pages
- Optimized images (when added)
- Minimal JavaScript
- Fast Tailwind CSS v4

## SEO

SEO metadata is configured for each page:
- Page titles follow pattern: "[Page Name] | Reliable Web Studio"
- Meta descriptions for all pages
- OpenGraph tags for social sharing
- Structured sitemap
- Robots.txt for search engines

## Next Steps

1. **Replace placeholder content**:
   - Add real portfolio examples
   - Update testimonials
   - Add actual photos

2. **Integrate services**:
   - Email form submission
   - Google Analytics
   - Payment processing (for $499 landing page buy-now flow)

3. **Add features** (optional):
   - Blog for SEO
   - Case studies
   - Video testimonials
   - Live chat widget

## Support

For questions about this codebase, refer to the documentation in `/docs` folder.

## License

Proprietary - All rights reserved
