export interface FloridaLocation {
  slug: string;
  city: string;
  county: string;
  region: string;
  image: string;
  summary: string;
  localIntent: string;
  detailedIntro: string[];
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
    detailedIntro: [
      'Palm Bay businesses usually do not have a traffic problem first. They have a clarity problem. People land on the site, scan for a few seconds, and leave if the service promise is vague or the next step is not obvious. Our approach for Palm Bay pages is to remove that friction immediately. We structure the first screen around one clear service outcome, one clear action, and localized trust signals that reflect how real customers in Brevard evaluate providers. Instead of generic copy, we use practical intent language that matches what buyers search when they need help now.',
      'From a local SEO perspective, Palm Bay pages work best when they are part of a connected structure, not isolated landing pages. We build city pages, service pages, and support content so internal links reinforce commercial intent and nearby area relevance. This improves crawl clarity and helps visitors move from discovery to action without confusion. The result is a site that supports both ranking growth and lead quality, with conversion tracking in place so you can see what pages produce real calls and form submissions.'
    ],
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
    detailedIntro: [
      'Melbourne buyers compare options quickly, especially on mobile, and most decisions are made before they read long copy blocks. That is why we treat your Melbourne website like a sales system, not a brochure. We focus on offer clarity, credibility positioning, and direct call-to-action flow so visitors know exactly what you do, where you serve, and why your team is the safe choice. We also map the page hierarchy around real decision points, including urgency, service fit, and contact confidence.',
      'For ongoing SEO value, Melbourne pages need both topical depth and local context. We build that with service-focused pages tied to city relevance through clean internal linking, schema support, and conversion-focused metadata. This keeps content expansion organized as your coverage grows into nearby markets like Eau Gallie and Satellite Beach. Instead of publishing disconnected pages, you get a repeatable framework that helps rankings improve while keeping lead quality and operational clarity high over time.'
    ],
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
    detailedIntro: [
      'In Titusville, many service businesses rely on referrals but still lose digital opportunities because their websites do not convert intent into action. A visitor might understand the business generally but still hesitate if pricing expectations, process clarity, and response timing are unclear. We solve this by building pages with clear service positioning, repeated CTA pathways, and trust elements placed where hesitation usually happens. The goal is simple: reduce uncertainty and make the next step easy for high-intent visitors.',
      'We also design Titusville pages to support future expansion without rebuilding your entire site structure. That means clean URL patterns, scoped content blocks, and page templates that can scale into nearby markets like Mims and Port St. John while preserving relevance. Combined with event tracking for phone and form behavior, this gives you a measurable system for local lead growth. You can see what is working, refine fast, and keep your web presence aligned to business outcomes instead of vanity metrics.'
    ],
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
    detailedIntro: [
      'Viera audiences often expect a higher standard of professionalism before they ever call. Visual polish matters, but conversion performance matters more. We build Viera pages that combine premium presentation with practical user flow so prospects can quickly understand value, evaluate trust, and take action. This includes concise positioning, strong service proof, and CTA placement that supports both immediate contact and considered decision-making for higher-value services.',
      'On the SEO side, we create a structured foundation that allows Viera businesses to compete locally without content sprawl. Service pages, location context, and supporting posts are connected through deliberate internal linking and consistent metadata so search engines can interpret depth and relevance. This model is especially effective for multi-location or multi-service teams that need a scalable framework. You get a site that looks credible, loads fast, and supports measurable growth through clear lead tracking and continuous optimization.'
    ],
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
    detailedIntro: [
      'Orlando markets are competitive, so generic websites struggle even when traffic volume is strong. Winning here requires sharper positioning and tighter conversion architecture. We build Orlando pages around decision-stage search intent, meaning the headline, service framing, proof, and CTA sequence are aligned to what users need before they contact you. This reduces drop-off and improves lead quality, especially for businesses running paid campaigns where each click has direct cost.',
      'We also structure Orlando site content in clusters so core service pages, city context pages, and educational posts reinforce each other instead of competing. That improves search clarity and gives your team a repeatable growth path as you expand offers or service areas. With analytics events configured for key actions, you can tie content performance to business outcomes and scale what works. The result is a reliable digital system designed for both immediate conversion gains and long-term local SEO strength.'
    ],
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
    detailedIntro: [
      'Tampa businesses often have strong services but inconsistent web performance because the page experience does not match local buyer intent. Visitors arrive from search or Google Business Profile and see unclear messaging, weak hierarchy, or too many competing actions. We address this with conversion-first layouts that prioritize service clarity, trust proof, and one primary contact path. By simplifying decisions and making the CTA flow obvious, we help Tampa pages generate more qualified calls and form submissions.',
      'To support durable SEO growth, we build Tampa pages inside a scalable information architecture that links service depth with city relevance. This improves crawl understanding and allows new pages to launch without weakening existing rankings. We also implement event tracking so you can see which pages and CTA positions drive leads, then optimize based on real behavior. That combination of structure, content intent, and measurement creates a dependable system rather than a one-time redesign.'
    ],
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
    detailedIntro: [
      'Jacksonville service areas can be broad, which makes website structure especially important. If pages are too generic, users from different neighborhoods do not feel the site matches their needs. We solve this by combining clear service framing with location-aware messaging that keeps the offer consistent while still feeling relevant across your target coverage. The experience is built for action: strong above-the-fold positioning, reduced friction in forms, and repeated contact options where users naturally decide.',
      'From an SEO standpoint, Jacksonville growth is strongest when content is organized as a connected system. We align service pages, city context, and supporting articles so internal links guide both search crawlers and buyers toward high-intent pages. With schema and tracking in place, your team can monitor performance by page type and expand strategically. This approach helps you maintain credibility, improve ranking relevance, and turn website traffic into measurable pipeline outcomes.'
    ],
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
