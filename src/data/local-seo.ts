import { floridaLocations } from '@/data/locations';

export interface LocalSeoService {
  slug: string;
  name: string;
  shortDescription: string;
  idealFor: string;
  keywords: string[];
}

export const localSeoServices: LocalSeoService[] = [
  {
    slug: 'landing-page-design',
    name: '24-Hour Landing Page Design',
    shortDescription:
      'Fast, conversion-focused landing pages built for urgent campaign launches and immediate lead capture.',
    idealFor: 'New offers, ad campaigns, and service businesses that need calls quickly.',
    keywords: ['24 hour landing page', 'landing page design', 'lead generation landing page'],
  },
  {
    slug: 'website-in-a-week',
    name: 'Website-in-a-Week',
    shortDescription:
      'Structured multi-page websites with local SEO foundations, trust positioning, and conversion-ready CTAs.',
    idealFor: 'Businesses moving from basic web presence to a serious lead-generation website.',
    keywords: ['website in a week', 'small business website', 'professional website build'],
  },
  {
    slug: 'local-seo-web-design',
    name: 'Local SEO Web Design',
    shortDescription:
      'City-aware website architecture built for local rankings, service intent, and measurable lead growth.',
    idealFor: 'Local service businesses competing across multiple nearby cities.',
    keywords: ['local seo web design', 'city service pages', 'local lead generation website'],
  },
  {
    slug: 'conversion-website-redesign',
    name: 'Conversion Website Redesign',
    shortDescription:
      'Redesign older websites to improve trust, user flow, and conversion performance without losing SEO structure.',
    idealFor: 'Existing businesses with traffic but low call/form conversion rates.',
    keywords: ['website redesign', 'conversion website', 'seo-safe redesign'],
  },
  {
    slug: 'service-industry-web-design',
    name: 'Service Industry Web Design',
    shortDescription:
      'Industry-focused web design for contractors, healthcare, cleaning, and home-service brands.',
    idealFor: 'Service businesses that need niche positioning and clearer buyer messaging.',
    keywords: ['service industry web design', 'contractor web design', 'home service website'],
  },
];

export const localSeoServiceCityPairs = localSeoServices.flatMap((service) =>
  floridaLocations.map((location) => ({
    serviceSlug: service.slug,
    citySlug: location.slug,
  }))
);

export function getLocalSeoServiceBySlug(slug: string): LocalSeoService | undefined {
  return localSeoServices.find((service) => service.slug === slug);
}
