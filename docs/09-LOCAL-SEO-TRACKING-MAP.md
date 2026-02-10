# Local SEO Tracking + Event Map

## Goal
Measure local SEO performance by city and service intent, not just total traffic.

## Core KPI Layers
- Visibility: impressions, clicks, average position (by page cluster)
- Engagement: sessions, scroll depth, outbound clicks
- Conversion: call clicks, form starts, form submits, booking clicks
- Quality: lead source by city/service page, close-rate feedback from sales

## Existing Event Names (implemented)
- `cta_primary_click`
- `cta_call_click`
- `pricing_view`
- `package_select`
- `form_start`
- `form_submit`
- `outbound_stripe_click`
- `outbound_calendar_click`

## Required Page-Level Dimensions
Attach these dimensions to every tracked event where possible:
- `page_type`:
  - `home`
  - `pricing`
  - `portfolio`
  - `blog`
  - `location_city`
  - `service_city`
- `city_slug` (for local pages)
- `service_slug` (for service+city pages)
- `cta_location` (header, hero, mid_page, footer)

## Event Map by Template

### `/locations/[slug]`
- Primary CTA click -> `cta_primary_click`
  - params: `page_type=location_city`, `city_slug`, `cta_location`
- Contact form start/submit (if routed) -> `form_start`, `form_submit`
  - params: `page_type=location_city`, `city_slug`

### `/services/[service]/[city]`
- Primary CTA click -> `cta_primary_click`
  - params: `page_type=service_city`, `city_slug`, `service_slug`, `cta_location`
- Secondary call intent -> `cta_call_click`
  - params: `page_type=service_city`, `city_slug`, `service_slug`

### `/blog/[slug]`
- Internal money-page clicks (pricing/contact) -> `cta_primary_click`
  - params: `page_type=blog`, `blog_slug`, `destination`

## Reporting Views (monthly)

### 1) City Performance Table
- dimensions: `city_slug`
- metrics: sessions, call clicks, form starts, form submits, conversion rate

### 2) Service+City Performance Table
- dimensions: `service_slug`, `city_slug`
- metrics: sessions, CTA clicks, lead conversion, assisted conversions

### 3) Cluster View (content strategy)
- dimensions: `blog_cluster` (pricing, lead-gen, local, niche, trust, tools)
- metrics: sessions, money-page clickthrough, lead assists

## Operational Cadence
- Weekly: monitor top 10 city/service pages for event drop-offs
- Monthly: compare city-page and service-city conversion rates
- Quarterly: remove or merge underperforming overlapping pages

## Release Gate Add-on
Before publish, verify:
1. Page has unique title/meta and canonical
2. Schema is valid (Service/Breadcrumb where applicable)
3. At least 2 internal links to money pages
4. CTA event parameters include page type and local dimensions
