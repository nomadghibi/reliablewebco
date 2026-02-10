export interface FloridaLocation {
  slug: string;
  city: string;
  county: string;
  region: string;
  image: string;
  summary: string;
  localIntent: string;
  serviceHighlights: string[];
  nearbyAreas: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const floridaLocations: FloridaLocation[] = [
  {
    slug: 'palm-bay-fl',
    city: 'Palm Bay',
    county: 'Brevard County',
    region: 'Space Coast',
    image: '/images/cities/palm-bay-fl.svg',
    summary:
      'Conversion-focused web design for Palm Bay service businesses that need faster calls, form leads, and bookings.',
    localIntent:
      'Built for HVAC, cleaning, home services, and healthcare businesses competing in Palm Bay and surrounding Brevard neighborhoods.',
    serviceHighlights: [
      '24-hour landing pages for urgent campaign launches',
      'Website-in-a-week builds with clear service-page architecture',
      'Lead capture setup with call, form, and booking CTAs',
      'Local SEO structure for service + city search intent',
    ],
    nearbyAreas: ['West Melbourne', 'Malabar', 'Bayside Lakes', 'Grant-Valkaria'],
    faq: [
      {
        question: 'Do you build pages specifically for Palm Bay neighborhoods?',
        answer:
          'Yes. We structure location intent around your real service area so your pages match how customers search in and around Palm Bay.',
      },
      {
        question: 'Can you launch quickly for a new Palm Bay business?',
        answer:
          'Yes. The 24-hour landing page sprint is designed for fast go-live with clear conversion-focused messaging.',
      },
    ],
  },
  {
    slug: 'melbourne-fl',
    city: 'Melbourne',
    county: 'Brevard County',
    region: 'Space Coast',
    image: '/images/cities/melbourne-fl.svg',
    summary:
      'Professional website design for Melbourne, FL companies that need stronger trust, better local visibility, and consistent lead flow.',
    localIntent:
      'Ideal for contractors, clinics, legal services, and local operators serving Melbourne, Eau Gallie, and nearby coastal areas.',
    serviceHighlights: [
      'Service-page SEO architecture aligned to buyer intent',
      'High-clarity homepage messaging and offer positioning',
      'Mobile-first layouts with fast performance',
      'Analytics-ready conversion funnels',
    ],
    nearbyAreas: ['Eau Gallie', 'Indian Harbour Beach', 'Satellite Beach', 'West Melbourne'],
    faq: [
      {
        question: 'Do you only work with large companies in Melbourne?',
        answer:
          'No. Most projects are for local small-to-mid-size service businesses that need results quickly.',
      },
      {
        question: 'Can you improve my current site instead of rebuilding from scratch?',
        answer:
          'Yes. We can either rebuild the full site or create high-converting pages that improve your current lead flow.',
      },
    ],
  },
  {
    slug: 'titusville-fl',
    city: 'Titusville',
    county: 'Brevard County',
    region: 'Space Coast',
    image: '/images/cities/titusville-fl.svg',
    summary:
      'Titusville web design services focused on practical conversions, clean user flow, and stronger local ranking potential.',
    localIntent:
      'For home-service teams, local providers, and specialty businesses wanting clear messaging and better customer action paths.',
    serviceHighlights: [
      'Conversion-first landing pages and service pages',
      'Form, call, and booking flow optimization',
      'Structured metadata and schema support',
      'Clear trust signals for local buyers',
    ],
    nearbyAreas: ['Mims', 'Port St. John', 'Cocoa', 'Merritt Island'],
    faq: [
      {
        question: 'Can you target Titusville and nearby towns on one site?',
        answer:
          'Yes. We build scalable location architecture so your site can rank for multiple nearby service areas.',
      },
      {
        question: 'How fast can a Titusville landing page be published?',
        answer: 'As soon as intake is complete, we can deliver the first version within 24 hours for sprint projects.',
      },
    ],
  },
  {
    slug: 'viera-fl',
    city: 'Viera',
    county: 'Brevard County',
    region: 'Space Coast',
    image: '/images/cities/viera-fl.svg',
    summary:
      'Viera-focused website builds for businesses that need premium presentation and measurable conversion performance.',
    localIntent:
      'Strong fit for medical, legal, premium home services, and local brands that compete on professionalism and speed.',
    serviceHighlights: [
      'Premium visual design with performance-first implementation',
      'Offer-led page structure for high-intent traffic',
      'Schema markup for better search understanding',
      'Scalable content setup for growth campaigns',
    ],
    nearbyAreas: ['Suntree', 'Rockledge', 'Melbourne', 'Cocoa'],
    faq: [
      {
        question: 'Do you support multi-location businesses in Viera?',
        answer:
          'Yes. We can create city-specific landing pages and shared service templates to keep your messaging consistent.',
      },
      {
        question: 'Can you include booking and payment integrations?',
        answer: 'Yes. We regularly implement Calendly, Stripe, and custom lead-routing workflows.',
      },
    ],
  },
  {
    slug: 'orlando-fl',
    city: 'Orlando',
    county: 'Orange County',
    region: 'Central Florida',
    image: '/images/cities/orlando-fl.svg',
    summary:
      'Web design and conversion strategy for Orlando businesses that need higher-quality leads from local search and paid traffic.',
    localIntent:
      'Built for high-competition service categories where positioning, speed, and trust signals directly affect conversion rates.',
    serviceHighlights: [
      'Local + service keyword architecture for competitive markets',
      'Ad-ready landing pages with fast load performance',
      'Conversion copy focused on offer clarity and urgency',
      'Event tracking for CTA and funnel optimization',
    ],
    nearbyAreas: ['Winter Park', 'Lake Nona', 'Kissimmee', 'Maitland'],
    faq: [
      {
        question: 'Can you help if we run ads in Orlando?',
        answer:
          'Yes. We create ad-matched landing pages and clear CTA funnels so paid traffic converts more efficiently.',
      },
      {
        question: 'Do we need a separate city page for Orlando?',
        answer:
          'In most cases yes, especially if Orlando is a priority market. It improves topical relevance and internal linking structure.',
      },
    ],
  },
  {
    slug: 'tampa-fl',
    city: 'Tampa',
    county: 'Hillsborough County',
    region: 'West Florida',
    image: '/images/cities/tampa-fl.svg',
    summary:
      'Tampa web design services built for local lead generation, clearer offer positioning, and better conversion consistency.',
    localIntent:
      'For service businesses expanding in Tampa who need a faster and cleaner path from search visit to booked call.',
    serviceHighlights: [
      'Lead-focused layouts with clear CTA hierarchy',
      'SEO-ready service and location content model',
      'Mobile-first UX and page-speed optimization',
      'Analytics setup for outbound click and form tracking',
    ],
    nearbyAreas: ['Brandon', 'Riverview', 'Temple Terrace', 'South Tampa'],
    faq: [
      {
        question: 'Can a Tampa page be added to an existing site?',
        answer:
          'Yes. We can extend your current site with Tampa-specific landing pages and service clusters.',
      },
      {
        question: 'Do you handle both design and technical SEO setup?',
        answer:
          'Yes. We cover technical foundation, content structure, and conversion-focused UX as one scope.',
      },
    ],
  },
  {
    slug: 'jacksonville-fl',
    city: 'Jacksonville',
    county: 'Duval County',
    region: 'North Florida',
    image: '/images/cities/jacksonville-fl.svg',
    summary:
      'Jacksonville website design for local businesses that need modern credibility and a dependable lead capture system.',
    localIntent:
      'Great fit for contractors, healthcare practices, and local teams targeting broad service areas in North Florida.',
    serviceHighlights: [
      'Scalable page structure for multi-area coverage',
      'Trust-building sections and social proof layout',
      'Fast deployment options for time-sensitive campaigns',
      'Technical setup for indexing and crawl clarity',
    ],
    nearbyAreas: ['Orange Park', 'Arlington', 'Mandarin', 'Atlantic Beach'],
    faq: [
      {
        question: 'Can you design for Jacksonville even if your office is on the Space Coast?',
        answer:
          'Yes. Our process is remote-first and built to serve businesses across Florida with the same turnaround standards.',
      },
      {
        question: 'How do you measure lead performance after launch?',
        answer:
          'We configure tracking for key CTA interactions and form activity so you can see what drives real inquiries.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): FloridaLocation | undefined {
  return floridaLocations.find((location) => location.slug === slug);
}
