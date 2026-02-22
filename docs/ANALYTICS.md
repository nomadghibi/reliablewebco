# Analytics & Tracking Source of Truth

Operational analytics map is available at:
- `/analytics` (internal ops page, noindex)

## GA4 Events (active)
- `cta_primary_click`
- `cta_call_click`
- `package_select`
- `pricing_view`
- `section_view`
- `form_start`
- `form_submit`
- `outbound_stripe_click` (legacy/direct outbound checkout paths)

## Core Conversions (GA4)
- `form_submit`
- `package_select`
- `cta_call_click`

## Required Event Parameters
- `page_type`
- `location`
- `cta_text`
- `cta_href`
- `city_slug` (local pages)
- `service_slug` (service+city pages)
- `industry_slug` (industry pages)
- `retainer_tier` (pricing retainer section)
- `package_type`
- `form_name`
- `section` (for `section_view`)

## Weekly Reporting Cadence
- Review package intent by `package_type`
- Review form funnel (`form_start` -> `form_submit`)
- Review call-intent trend by page template
- Review city/service conversion gaps
- Review retainer tier demand split
- Publish one action list: P0, P1, P2

## Notes
- New tracking added for industry pages and Local Growth Retainer section.
- Keep event names stable; evolve through parameters and reporting views.
