export interface IndustryPlaybook {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  heroTitle: string;
  heroSubtitle: string;
  idealFor: string;
  keyWins: string[];
  localSignals: string[];
  packagePath: {
    title: string;
    detail: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  seoKeywords: string[];
}

export const industryPlaybooks: IndustryPlaybook[] = [
  {
    slug: 'hvac-web-design',
    name: 'HVAC Web Design',
    shortName: 'HVAC',
    summary:
      'HVAC websites built for urgent service intent, clear financing offers, and call-first conversion flow.',
    heroTitle: 'HVAC Websites Built to Generate Calls Fast',
    heroSubtitle:
      'Launch a conversion-focused HVAC page in 24 hours, then scale into a full service-area website in 7 days.',
    idealFor: 'Residential and commercial HVAC teams that need more estimate calls and fewer cold leads.',
    keyWins: [
      'Emergency and after-hours call routing built into the layout.',
      'Financing and quote-request messaging structured above the fold.',
      'Service-area page structure designed for local search intent.',
      'Call click and form event tracking enabled from launch day.',
    ],
    localSignals: [
      'Seasonal demand swings and emergency call windows',
      'Service-area radius and nearby city intent coverage',
      'High-trust copy for repairs, maintenance plans, and installs',
    ],
    packagePath: [
      {
        title: '24-Hour Landing Page',
        detail: 'Fast launch page for one high-intent offer and one primary CTA.',
        ctaLabel: 'Start 24-Hour Landing Page',
        ctaHref: '/checkout?package=landingPage',
      },
      {
        title: 'Website-in-a-Week',
        detail: 'Up to 8 pages for service lines, financing, trust sections, and quote flow.',
        ctaLabel: 'Start Website-in-a-Week',
        ctaHref: '/checkout?package=websiteDeposit',
      },
      {
        title: 'Local Growth Retainer',
        detail: 'Monthly service page expansion, GBP updates, and conversion tune-ups.',
        ctaLabel: 'See Local Growth Retainer',
        ctaHref: '/pricing#local-growth-retainer',
      },
    ],
    faq: [
      {
        question: 'Can you launch an HVAC page in 24 hours?',
        answer:
          'Yes. The timeline starts after intake and payment. We prioritize one core offer, one CTA path, and fast mobile conversion flow.',
      },
      {
        question: 'Can you support multiple service cities?',
        answer:
          'Yes. We can build structured city and service pages so your HVAC offers are mapped to local search intent.',
      },
      {
        question: 'Do you include follow-up automation?',
        answer:
          'Yes. The Lead Sprint bundle adds email/SMS follow-up so new inquiries are contacted quickly.',
      },
    ],
    seoKeywords: ['hvac web design', 'hvac website design', 'heating and cooling website', 'hvac landing page'],
  },
  {
    slug: 'contractor-web-design',
    name: 'Contractor & Remodeler Web Design',
    shortName: 'Contractors',
    summary:
      'Conversion-focused contractor websites that turn project photos and trust signals into estimate requests.',
    heroTitle: 'Contractor Websites That Win More Estimate Requests',
    heroSubtitle:
      'Show your work, prove trust fast, and move visitors into a quote request without extra friction.',
    idealFor: 'General contractors, remodelers, roofers, and specialty trades competing in local markets.',
    keyWins: [
      'Project gallery and before/after proof built for conversion, not just looks.',
      'License, insurance, and review trust blocks placed at decision points.',
      'Quote intake flow designed for mobile and fast follow-up.',
      'Service and city page architecture ready for local SEO scaling.',
    ],
    localSignals: [
      'Neighborhood-specific demand and service radius coverage',
      'High-intent terms for remodel, repair, install, and estimate',
      'Trust-driven messaging for licensed and insured operations',
    ],
    packagePath: [
      {
        title: '24-Hour Landing Page',
        detail: 'Launch a focused estimate page around one service and one service area.',
        ctaLabel: 'Start 24-Hour Landing Page',
        ctaHref: '/checkout?package=landingPage',
      },
      {
        title: 'Website-in-a-Week',
        detail: 'Build project gallery, service pages, and trust structure for better close rates.',
        ctaLabel: 'Start Website-in-a-Week',
        ctaHref: '/checkout?package=websiteDeposit',
      },
      {
        title: 'Local Growth Retainer',
        detail: 'Monthly expansion with city pages, GBP improvements, and reporting.',
        ctaLabel: 'See Local Growth Retainer',
        ctaHref: '/pricing#local-growth-retainer',
      },
    ],
    faq: [
      {
        question: 'Will you structure the site for more estimate requests?',
        answer:
          'Yes. We design CTA placement, form flow, and trust proof around the exact quote-request actions you need.',
      },
      {
        question: 'Can we keep using our existing branding and photos?',
        answer:
          'Yes. We can use your current assets and improve layout, copy hierarchy, and conversion flow around them.',
      },
      {
        question: 'Do you support growth after launch?',
        answer:
          'Yes. We offer ongoing local growth packages that add high-intent pages and monthly conversion improvements.',
      },
    ],
    seoKeywords: ['contractor web design', 'remodeler website design', 'construction company website', 'home service web design'],
  },
  {
    slug: 'clinic-web-design',
    name: 'Clinic & Dental Web Design',
    shortName: 'Clinics',
    summary:
      'Professional clinic websites that improve trust, appointment intent, and local visibility.',
    heroTitle: 'Clinic Websites That Turn Visitors Into Booked Appointments',
    heroSubtitle:
      'Build a premium digital front door for your practice with clear appointment CTAs and mobile-first patient flow.',
    idealFor: 'Dental, wellness, and specialty clinics that need stronger appointment conversion and local trust.',
    keyWins: [
      'Appointment-first layout with clear intake and contact paths.',
      'Provider and service positioning to increase trust quickly.',
      'Mobile speed and readability tuned for patient decision flow.',
      'Local SEO structure aligned with Google Business Profile intent.',
    ],
    localSignals: [
      'Location and service visibility for nearby patient searches',
      'Trust-focused copy for treatment pages and new-patient intake',
      'Review and authority alignment with GBP and local citations',
    ],
    packagePath: [
      {
        title: '24-Hour Landing Page',
        detail: 'Launch one high-converting service page for consultations or appointments.',
        ctaLabel: 'Start 24-Hour Landing Page',
        ctaHref: '/checkout?package=landingPage',
      },
      {
        title: 'Website-in-a-Week',
        detail: 'Build complete practice pages, service hierarchy, and trust sections.',
        ctaLabel: 'Start Website-in-a-Week',
        ctaHref: '/checkout?package=websiteDeposit',
      },
      {
        title: 'Local Growth Retainer',
        detail: 'Add service intent content and monthly conversion tuning.',
        ctaLabel: 'See Local Growth Retainer',
        ctaHref: '/pricing#local-growth-retainer',
      },
    ],
    faq: [
      {
        question: 'Can you support appointment-first website flow?',
        answer:
          'Yes. We design the page path around one primary booking action and reduce distractions that lower conversions.',
      },
      {
        question: 'Do you help with local SEO for clinics?',
        answer:
          'Yes. We align service pages, location signals, and GBP strategy so your practice appears for local intent searches.',
      },
      {
        question: 'Can you keep compliance-friendly copy structure?',
        answer:
          'Yes. We keep messaging clear and professional, and we can work with your approved content process.',
      },
    ],
    seoKeywords: ['clinic web design', 'dental website design', 'medical practice website', 'appointment website design'],
  },
];

export function getIndustryBySlug(slug: string): IndustryPlaybook | undefined {
  return industryPlaybooks.find((industry) => industry.slug === slug);
}
