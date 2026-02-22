# Release Checklist

Use this checklist before every deploy.

## 1) Required Gate (must pass)
Run:

```bash
npm run release:check
```

This runs:
- `npm run lint`
- `npm run build`

Do not deploy if either step fails.

## 2) Manual Smoke Check (must confirm)
After preview deploy (or local production run), open and verify:
- `/`
- `/pricing`
- `/contact`
- `/checkout/success`
- `/checkout/cancel`
- `/audit`

For each page, confirm:
- Page loads without console/runtime errors
- Primary CTA is visible and clickable
- Navigation/header/footer links work
- Mobile layout is usable

## 3) Revenue and Lead Flow Checks
- Stripe env links are configured for active offers (`NEXT_PUBLIC_STRIPE_*`)
- Pricing/checkout CTAs route correctly
- Contact form submits successfully
- Audit form submits successfully
- Confirmation/success messages display

## 4) SEO/Indexing Quick Check
- `sitemap.xml` loads
- `robots.txt` loads
- No accidental `noindex` on money pages

## 5) Launch Decision
Deploy only when sections 1-4 are complete.
