export interface AnalyticsEventDefinition {
  name: string;
  purpose: string;
  trigger: string;
  pages: string[];
  keyParams: string[];
  primaryKpi: string;
}

export interface AnalyticsDimensionDefinition {
  name: string;
  scope: 'event';
  description: string;
  examples: string[];
}

export interface WeeklyMetricDefinition {
  metric: string;
  ga4Source: string;
  whyItMatters: string;
}

export const analyticsEventMap: AnalyticsEventDefinition[] = [
  {
    name: 'cta_primary_click',
    purpose: 'Track high-intent non-phone CTA interactions.',
    trigger: 'User clicks primary CTA buttons and tracked internal links.',
    pages: ['Home', 'Pricing', 'Industries', 'Blog', 'Locations', 'Service+City pages'],
    keyParams: ['cta_text', 'cta_href', 'location', 'page_type', 'city_slug', 'service_slug', 'industry_slug', 'retainer_tier'],
    primaryKpi: 'CTA click-through volume by page type and city.',
  },
  {
    name: 'cta_call_click',
    purpose: 'Measure call-intent actions from key pages.',
    trigger: 'User taps call/book call CTAs where call intent is explicit.',
    pages: ['Header', 'CTA sections', 'Industry pages', 'Local intent blocks'],
    keyParams: ['cta_text', 'cta_href', 'location', 'page_type', 'city_slug', 'service_slug', 'industry_slug'],
    primaryKpi: 'Call intent rate and page-level call conversion trend.',
  },
  {
    name: 'package_select',
    purpose: 'Track package purchase intent before checkout completion.',
    trigger: 'User selects a package button (PaymentButton/Header CTA).',
    pages: ['Home', 'Pricing', 'Header', 'Checkout entry points'],
    keyParams: ['package_type', 'package_label', 'destination', 'location'],
    primaryKpi: 'Package demand mix by offer and entry page.',
  },
  {
    name: 'pricing_view',
    purpose: 'Track visibility of pricing sections on long pages.',
    trigger: 'Pricing marker enters viewport (IntersectionObserver).',
    pages: ['Home pricing preview', 'Pricing packages section'],
    keyParams: ['section'],
    primaryKpi: 'Pricing exposure vs package-select conversion rate.',
  },
  {
    name: 'section_view',
    purpose: 'Track strategic section visibility for new conversion modules.',
    trigger: 'SectionViewTracker markers intersect viewport.',
    pages: ['Industries grid', 'Industry package path', 'Local Growth Retainer'],
    keyParams: ['section'],
    primaryKpi: 'Section visibility-to-CTA interaction ratio.',
  },
  {
    name: 'form_start',
    purpose: 'Capture top-of-funnel form intent before submission.',
    trigger: 'First focus event on trackable forms.',
    pages: ['Audit form', 'Contact forms'],
    keyParams: ['form_name'],
    primaryKpi: 'Form start volume and form abandonment trend.',
  },
  {
    name: 'form_submit',
    purpose: 'Measure successful lead form completions.',
    trigger: 'Successful form submission response.',
    pages: ['Audit form', 'Contact forms'],
    keyParams: ['form_name'],
    primaryKpi: 'Qualified inbound lead count by form type.',
  },
  {
    name: 'outbound_stripe_click',
    purpose: 'Legacy Stripe outbound click tracking.',
    trigger: 'Direct outbound Stripe click handlers (legacy paths).',
    pages: ['Legacy direct-checkout links only'],
    keyParams: ['cta_text', 'location', 'payment_link'],
    primaryKpi: 'Fallback checkout-intent tracking where still used.',
  },
];

export const analyticsDimensions: AnalyticsDimensionDefinition[] = [
  {
    name: 'page_type',
    scope: 'event',
    description: 'Template/page classification for channel and conversion analysis.',
    examples: ['home', 'pricing', 'blog', 'location_city', 'service_city', 'industry_detail'],
  },
  {
    name: 'location',
    scope: 'event',
    description: 'UI placement of CTA or tracked interaction.',
    examples: ['header', 'industry_hero', 'pricing_local_growth_retainer', 'blog_article'],
  },
  {
    name: 'city_slug',
    scope: 'event',
    description: 'City identifier for local pages and local CTA analysis.',
    examples: ['palm-bay-fl', 'melbourne-fl', 'orlando-fl'],
  },
  {
    name: 'service_slug',
    scope: 'event',
    description: 'Service identifier for service+city page tracking.',
    examples: ['landing-page-design', 'website-in-a-week', 'local-seo-web-design'],
  },
  {
    name: 'industry_slug',
    scope: 'event',
    description: 'Industry playbook context for industry funnel analysis.',
    examples: ['hvac-web-design', 'contractor-web-design', 'clinic-web-design'],
  },
  {
    name: 'retainer_tier',
    scope: 'event',
    description: 'Selected Local Growth Retainer tier.',
    examples: ['starter', 'growth', 'authority'],
  },
  {
    name: 'package_type',
    scope: 'event',
    description: 'Checkout package key used before checkout routing.',
    examples: ['landingPage', 'leadSprintBundle', 'websiteDeposit', 'carePlanPro'],
  },
  {
    name: 'form_name',
    scope: 'event',
    description: 'Form identifier for start/submit conversion analysis.',
    examples: ['website_analysis_request', 'contact_form', 'book_call_form'],
  },
  {
    name: 'section',
    scope: 'event',
    description: 'Observed section identifier for visibility markers.',
    examples: ['industries_grid', 'industry_package_path', 'pricing_local_growth_retainer'],
  },
];

export const weeklyMetrics: WeeklyMetricDefinition[] = [
  {
    metric: 'Package intent volume by offer',
    ga4Source: 'Event: package_select (breakdown by package_type)',
    whyItMatters: 'Shows which offers create strongest purchase intent.',
  },
  {
    metric: 'Call-intent trend by page type',
    ga4Source: 'Event: cta_call_click (breakdown by page_type/location)',
    whyItMatters: 'Identifies page templates generating phone-driven leads.',
  },
  {
    metric: 'Form conversion funnel',
    ga4Source: 'Events: form_start -> form_submit (by form_name)',
    whyItMatters: 'Highlights form abandonment and quality bottlenecks.',
  },
  {
    metric: 'Industry-page CTA performance',
    ga4Source: 'Event: cta_primary_click (filter page_type/industry_slug)',
    whyItMatters: 'Validates which industry playbooks convert best.',
  },
  {
    metric: 'Local retainer demand split',
    ga4Source: 'Event: cta_primary_click (location=pricing_local_growth_retainer)',
    whyItMatters: 'Measures monthly-retainer demand by tier.',
  },
  {
    metric: 'Section visibility to action ratio',
    ga4Source: 'Events: section_view vs cta_primary_click by section/location',
    whyItMatters: 'Shows where users see offers but do not click, guiding UX fixes.',
  },
];

export const weeklyOpsChecklist: string[] = [
  'Check package_select trend vs previous week (overall + by package_type).',
  'Check form_start to form_submit conversion for audit/contact funnels.',
  'Review cta_call_click and cta_primary_click by page_type and location.',
  'Review city_slug and service_slug conversion gaps for local pages.',
  'Review Local Growth Retainer tier demand (starter/growth/authority).',
  'Flag pages with high section_view but low CTA clicks for optimization.',
  'Publish one action list: P0 (this week), P1 (this month), P2 (backlog).',
];
