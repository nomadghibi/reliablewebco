export type PortfolioTier = '24-hour' | 'week' | 'growth' | 'platform' | 'authority';
export type PortfolioStatus = 'live' | 'in-development';

export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  tier: PortfolioTier;
  industry: string;
  year: number;
  description: string;
  features: string[];
  deliverables: string[];
  stack: string[];
  keywords: string[];
  liveUrl: string;
  status: PortfolioStatus;
  image: string;
  featured: boolean;
  caseStudy: {
    timeline: string;
    problem: string[];
    solution: string[];
    outcome: string[];
    testimonial: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: 'hvac-pro-office',
    title: 'HVAC Pro Office',
    category: 'Platform / Web App MVP',
    tier: 'platform',
    industry: 'HVAC',
    year: 2025,
    description: 'Full-stack HVAC business management platform with customer portal, scheduling, invoicing, and reporting.',
    features: ['User authentication', 'Customer portal', 'Scheduling system', 'Invoice management', 'Live in production'],
    deliverables: ['Product strategy session', 'Admin dashboard + customer portal', 'Scheduling and dispatch workflows', 'Invoicing and reporting modules'],
    stack: ['Next.js', 'React', 'PostgreSQL', 'Stripe'],
    keywords: ['dispatch', 'invoicing', 'dashboard', 'saas'],
    liveUrl: 'https://hvacprooffice.com',
    status: 'live',
    image: '/images/portfolio/hvacprooffice.png',
    featured: true,
    caseStudy: {
      timeline: '6 weeks from kickoff to production',
      problem: [
        'Operations were spread across phone calls, spreadsheets, and manual notes.',
        'Field technicians had no centralized view of jobs and customer history.',
        'Invoicing delays were slowing down payment collection.',
      ],
      solution: [
        'Built role-based dashboards for office staff, technicians, and customers.',
        'Implemented scheduling and dispatch workflows with status tracking.',
        'Added invoice generation and payment tracking tied to completed jobs.',
      ],
      outcome: [
        'Single system for intake, scheduling, and post-service billing.',
        'Faster dispatch coordination with clear job visibility.',
        'Improved closeout flow from completed service to invoice sent.',
      ],
      testimonial: {
        quote: 'The dashboard replaced three separate tools and gave our office real control over daily operations.',
        author: 'Operations Manager',
        role: 'HVAC Pro Office',
      },
    },
  },
  {
    id: 2,
    slug: 'ezzy-dental-platform',
    title: 'Ezzy Dental Platform',
    category: 'Platform / Web App MVP',
    tier: 'platform',
    industry: 'Dental',
    year: 2025,
    description: 'Dental practice management platform with patient records, appointment scheduling, treatment plans, and billing.',
    features: ['Patient portal', 'Appointment system', 'Treatment tracking', 'Billing integration', 'In development'],
    deliverables: ['Practice workflow mapping', 'Patient management module', 'Appointment and treatment planning views', 'Billing integration prep'],
    stack: ['Next.js', 'TypeScript', 'React', 'REST API'],
    keywords: ['practice', 'patients', 'appointments', 'healthcare'],
    liveUrl: 'https://ezzydental.netlify.app',
    status: 'in-development',
    image: '/images/portfolio/ezzydental.jpg',
    featured: false,
    caseStudy: {
      timeline: 'MVP sprint in active development',
      problem: [
        'The team needed a cleaner workflow for appointments and patient records.',
        'Existing process made treatment follow-up inconsistent.',
        'Billing handoff needed tighter integration with front-desk operations.',
      ],
      solution: [
        'Designed modular patient and appointment management screens.',
        'Added treatment timeline views to keep follow-up consistent.',
        'Prepared billing integration points for next release stages.',
      ],
      outcome: [
        'Core scheduling and patient flows are already testable.',
        'Clinic team has clearer daily workflow visibility.',
        'Platform foundation is ready for phased rollout.',
      ],
      testimonial: {
        quote: 'The structure is finally matching how our team actually works day to day.',
        author: 'Practice Coordinator',
        role: 'Ezzy Dental',
      },
    },
  },
  {
    id: 3,
    slug: 'rj-dry-cleaners',
    title: 'RJ Dry Cleaners',
    category: 'Website-in-a-Week',
    tier: 'week',
    industry: 'Dry Cleaning',
    year: 2024,
    description: 'Professional dry cleaning service website with online booking, pricing, and service details.',
    features: ['Online booking', 'Service pricing', 'Location info', 'Customer reviews', 'Live in production'],
    deliverables: ['5-page website', 'Service pricing page', 'Online booking CTA flow', 'Local business content structure'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['local service', 'pricing', 'booking', 'laundry'],
    liveUrl: 'https://rjdrycleaners.com',
    status: 'live',
    image: '/images/portfolio/rjdrycleaners.jpg',
    featured: false,
    caseStudy: {
      timeline: '5 days from intake to launch',
      problem: [
        'Potential customers had no easy way to compare services and pricing.',
        'The business lacked a clear online booking call-to-action.',
        'Search visibility for local dry cleaning terms was weak.',
      ],
      solution: [
        'Structured service pages around common customer intents.',
        'Added pricing clarity and booking-focused page sections.',
        'Implemented local SEO-oriented metadata and page copy.',
      ],
      outcome: [
        'Visitors can quickly choose services and contact the team.',
        'Pricing friction dropped with clearer package presentation.',
        'Improved trust signals through testimonials and service detail pages.',
      ],
      testimonial: {
        quote: 'Customers now know exactly what we offer before they call.',
        author: 'Owner',
        role: 'RJ Dry Cleaners',
      },
    },
  },
  {
    id: 4,
    slug: 'serve-in-christ',
    title: 'Serve In Christ',
    category: 'Website-in-a-Week',
    tier: 'week',
    industry: 'Church / Nonprofit',
    year: 2024,
    description: 'Church/ministry website with event management, donation system, and content management.',
    features: ['Event calendar', 'Online donations', 'Blog & sermons', 'Member portal', 'Live in production'],
    deliverables: ['Content architecture for ministries', 'Event and calendar sections', 'Donation flow', 'Sermon and blog publishing setup'],
    stack: ['Next.js', 'React', 'CMS'],
    keywords: ['church website', 'events', 'donations', 'community'],
    liveUrl: 'https://serveinchrist.org',
    status: 'live',
    image: '/images/portfolio/serveinchrist.jpg',
    featured: false,
    caseStudy: {
      timeline: '1 week delivery',
      problem: [
        'Community updates and events were scattered across multiple channels.',
        'Donation flow was unclear for mobile users.',
        'The team needed easier content publishing for sermons and updates.',
      ],
      solution: [
        'Built a centralized event and updates structure.',
        'Simplified donation page hierarchy for faster completion.',
        'Set up repeatable publishing templates for sermons and blog content.',
      ],
      outcome: [
        'Members can find events and updates in one place.',
        'Donation access is clear across devices.',
        'Staff can publish new content with less manual work.',
      ],
      testimonial: {
        quote: 'Our congregation can finally find everything without chasing links.',
        author: 'Ministry Lead',
        role: 'Serve In Christ',
      },
    },
  },
  {
    id: 5,
    slug: 'j-dehnashi-portfolio',
    title: 'J Dehnashi Portfolio',
    category: 'Authority Website',
    tier: 'authority',
    industry: 'Professional Services',
    year: 2024,
    description: 'Personal portfolio and professional website showcasing work, expertise, and services.',
    features: ['Portfolio showcase', 'Professional bio', 'Contact integration', 'Modern design', 'Live in production'],
    deliverables: ['Personal brand positioning', 'Portfolio layout strategy', 'Lead capture contact flow', 'Content and credibility sections'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['personal brand', 'consulting', 'portfolio'],
    liveUrl: 'https://jdehnashi.netlify.app',
    status: 'live',
    image: '/images/portfolio/jdehnashi.jpg',
    featured: false,
    caseStudy: {
      timeline: '6 days',
      problem: [
        'No clear digital presence to support trust for new prospects.',
        'Services and expertise were spread across disconnected profiles.',
        'Lead capture pathway was inconsistent.',
      ],
      solution: [
        'Built a focused authority site with service positioning.',
        'Added case study highlights and credibility blocks.',
        'Implemented direct contact conversion points.',
      ],
      outcome: [
        'Clear service narrative for inbound prospects.',
        'Better trust through structured proof and project examples.',
        'Simpler path from visit to conversation.',
      ],
      testimonial: {
        quote: 'The site now represents my work clearly and professionally.',
        author: 'Founder',
        role: 'J Dehnashi',
      },
    },
  },
  {
    id: 6,
    slug: 'journeys-staffing-home-care',
    title: 'Journeys Staffing Home Care',
    category: 'Website-in-a-Week',
    tier: 'week',
    industry: 'Home Care',
    year: 2024,
    description: 'Healthcare staffing and home care services website with service details, career opportunities, and client portal.',
    features: ['Service pages', 'Career applications', 'Client portal', 'Mobile responsive', 'Live in production'],
    deliverables: ['Service and staffing pages', 'Career inquiry flow', 'Client portal access points', 'Mobile-first information hierarchy'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['staffing', 'caregiver', 'healthcare recruiting'],
    liveUrl: 'https://journeysstaffinghomecareservices.com',
    status: 'live',
    image: '/images/portfolio/journeys.png',
    featured: false,
    caseStudy: {
      timeline: '7 days',
      problem: [
        'Prospective clients and job seekers were landing on the same unclear pages.',
        'The business needed trust-focused messaging for healthcare services.',
        'Mobile usability was critical for applicants and families.',
      ],
      solution: [
        'Separated client and hiring user journeys in site navigation.',
        'Added service clarity, trust signals, and action-first sections.',
        'Optimized key flows for mobile browsing and inquiry completion.',
      ],
      outcome: [
        'Clearer navigation for both clients and applicants.',
        'Improved readability and contact completion on mobile.',
        'Stronger trust positioning for home care services.',
      ],
      testimonial: {
        quote: 'Families and applicants both find what they need much faster now.',
        author: 'Program Director',
        role: 'Journeys Staffing Home Care',
      },
    },
  },
  {
    id: 7,
    slug: 'mr-clifford-landing-page',
    title: 'Mr. Clifford Landing Page',
    category: '24-Hour Landing Page',
    tier: '24-hour',
    industry: 'Local Services',
    year: 2025,
    description: 'Fast single-page landing site with strong call-to-action and conversion focus. Delivered in under 24 hours.',
    features: ['Single page', 'Click-to-call CTA', 'Fast load time', 'Mobile-first', 'Live in production'],
    deliverables: ['Conversion-focused page structure', 'Immediate call CTA setup', 'Local proof and trust sections', 'Performance tuning'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['landing page', 'quick launch', 'same day'],
    liveUrl: 'https://mrclifford.netlify.app/en/',
    status: 'live',
    image: '/images/portfolio/MrClifford.jpg',
    featured: true,
    caseStudy: {
      timeline: 'Under 24 hours',
      problem: [
        'Business needed an immediate web presence for active campaigns.',
        'No clear conversion path existed for mobile visitors.',
        'Speed to launch was a hard requirement.',
      ],
      solution: [
        'Built a focused one-page conversion funnel.',
        'Placed call and form CTAs above the fold and at decision points.',
        'Shipped a lightweight design optimized for fast delivery.',
      ],
      outcome: [
        'Page launched same day and ready for traffic.',
        'Visitors get immediate call-to-action without navigation friction.',
        'Performance remained strong on mobile networks.',
      ],
      testimonial: {
        quote: 'It was live in less than a day and already generating inquiries.',
        author: 'Owner',
        role: 'Mr. Clifford',
      },
    },
  },
  {
    id: 8,
    slug: 'lyon-tree-service',
    title: 'Lyon Tree Service',
    category: '24-Hour Landing Page',
    tier: '24-hour',
    industry: 'Tree Service',
    year: 2024,
    description: 'Tree service landing page with instant quote requests and emergency contact. Fast deployment for immediate lead generation.',
    features: ['Emergency contact', 'Quote requests', 'Service showcase', 'Mobile responsive', 'Live in production'],
    deliverables: ['Emergency-focused CTA copy', 'Quote request form flow', 'Local trust sections', 'Mobile-first design'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['emergency service', 'tree removal', 'quotes'],
    liveUrl: 'https://lyontree.netlify.app',
    status: 'live',
    image: '/images/portfolio/lyontree.jpg',
    featured: false,
    caseStudy: {
      timeline: '24-hour launch',
      problem: [
        'Potential customers needed immediate access to emergency service contact.',
        'Existing web presence did not communicate urgency or response speed.',
        'Lead capture was inconsistent on mobile devices.',
      ],
      solution: [
        'Designed emergency-first messaging and contact hierarchy.',
        'Implemented clear quote request and click-to-call actions.',
        'Optimized layout for rapid action on mobile.',
      ],
      outcome: [
        'Users can reach the business in one click during urgent situations.',
        'Quote intent is captured with less friction.',
        'Brand trust improved with clearer service presentation.',
      ],
      testimonial: {
        quote: 'Customers can reach us instantly now, especially in emergencies.',
        author: 'Owner',
        role: 'Lyon Tree Service',
      },
    },
  },
  {
    id: 9,
    slug: 'stridesafe',
    title: 'StrideSafe',
    category: 'Platform / Web App MVP',
    tier: 'platform',
    industry: 'Healthcare',
    year: 2025,
    description: 'Fall prevention platform designed to reduce fall-related injuries. Built for healthcare facilities, elderly care communities, and rehabilitation centers.',
    features: ['Risk assessment', 'Prevention tools', 'Healthcare focused', 'User dashboard', 'In development'],
    deliverables: ['MVP planning', 'Risk assessment workflows', 'Dashboard interface', 'Care-team reporting views'],
    stack: ['Next.js', 'React', 'Data Visualization'],
    keywords: ['patient safety', 'risk scoring', 'elder care'],
    liveUrl: 'https://stridesafe.vercel.app',
    status: 'in-development',
    image: '/images/portfolio/stridesafe.jpg',
    featured: false,
    caseStudy: {
      timeline: 'MVP in progress',
      problem: [
        'Care teams needed a unified way to track fall risk and interventions.',
        'Current tracking methods made trend analysis difficult.',
        'Facilities needed better visibility for proactive prevention.',
      ],
      solution: [
        'Built risk-assessment and intervention tracking flows.',
        'Created role-specific dashboard views for care staff.',
        'Added reporting structure for facility-level oversight.',
      ],
      outcome: [
        'Core workflows are set for pilot testing.',
        'Staff can review risk context faster.',
        'Platform is structured for future integrations.',
      ],
      testimonial: {
        quote: 'The product direction finally reflects real clinical workflow needs.',
        author: 'Care Program Lead',
        role: 'StrideSafe',
      },
    },
  },
  {
    id: 10,
    slug: 'techeze-ai',
    title: 'TechEze AI',
    category: 'Authority Website',
    tier: 'authority',
    industry: 'AI Consulting',
    year: 2024,
    description: 'AI consulting firm website showcasing AI automation services for small to mid-market businesses. Features service tiers, case studies, and consultation booking.',
    features: ['Service showcase', 'Pricing tiers', 'Consultation booking', 'Professional design', 'Live in production'],
    deliverables: ['Authority homepage structure', 'Service tier pages', 'Consultation conversion flow', 'Case-study-led trust blocks'],
    stack: ['Next.js', 'React', 'Calendly'],
    keywords: ['automation', 'ai consulting', 'b2b'],
    liveUrl: 'https://www.techezeai.com',
    status: 'live',
    image: '/images/portfolio/techezeai.jpg',
    featured: false,
    caseStudy: {
      timeline: '1 week',
      problem: [
        'The brand needed stronger authority positioning for enterprise prospects.',
        'Service offers were not clearly tiered by business maturity.',
        'Consultation booking required fewer steps.',
      ],
      solution: [
        'Built clear service architecture with tiered offer framing.',
        'Added evidence-focused content and case-study positioning.',
        'Connected high-intent pages directly to consultation booking.',
      ],
      outcome: [
        'Prospects can self-qualify faster through clear offer tiers.',
        'Brand authority improved with focused messaging and proof.',
        'Booking flow reduced friction for discovery calls.',
      ],
      testimonial: {
        quote: 'The new structure helped us communicate value much faster to decision-makers.',
        author: 'Founder',
        role: 'TechEze AI',
      },
    },
  },
  {
    id: 11,
    slug: 'destiny-insights',
    title: 'Destiny Insights',
    category: 'Platform / Web App MVP',
    tier: 'platform',
    industry: 'Consumer App',
    year: 2024,
    description: 'AI-powered astrology and fortune-telling platform with personalized readings, Bazi analysis, compatibility insights, and subscription services.',
    features: ['AI integration', 'Payment system', 'Personalized readings', 'Subscription model', 'Live in production'],
    deliverables: ['Subscriber onboarding flow', 'Reading personalization logic', 'Checkout and subscription setup', 'Member dashboard'],
    stack: ['Next.js', 'React', 'Stripe', 'AI API'],
    keywords: ['subscription', 'ai app', 'consumer platform'],
    liveUrl: 'https://www.destiny-insights.com',
    status: 'live',
    image: '/images/portfolio/destinyinsights.jpg',
    featured: false,
    caseStudy: {
      timeline: 'MVP launch in 5 weeks',
      problem: [
        'The concept required personalized experiences to retain users.',
        'Payments and recurring access had to be tightly integrated.',
        'The product needed a clear path from visitor to subscriber.',
      ],
      solution: [
        'Designed personalized onboarding and reading pathways.',
        'Integrated subscription billing and account management.',
        'Built a member area for recurring engagement.',
      ],
      outcome: [
        'Product launched with end-to-end subscription flow.',
        'Users get clear value progression from free to paid access.',
        'Platform supports iterative feature expansion.',
      ],
      testimonial: {
        quote: 'We launched with a product flow that actually supports long-term growth.',
        author: 'Product Owner',
        role: 'Destiny Insights',
      },
    },
  },
  {
    id: 12,
    slug: 'flippers-remodeling',
    title: 'Flippers Remodeling',
    category: 'Website-in-a-Week',
    tier: 'week',
    industry: 'Home Remodeling',
    year: 2025,
    description: 'Professional home remodeling website for a general contractor specializing in kitchen, bathroom, and whole-home renovations. Built to generate local leads.',
    features: ['Service pages', 'Lead generation', 'Mobile responsive', 'Local SEO', 'Live in production'],
    deliverables: ['Service-specific landing sections', 'Local SEO page structure', 'Lead form and CTA strategy', 'Project showcase formatting'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['contractor', 'renovation', 'local seo'],
    liveUrl: 'https://flipperscremodeling.com',
    status: 'live',
    image: '/images/portfolio/flippersremodeling.jpg',
    featured: true,
    caseStudy: {
      timeline: '7 days',
      problem: [
        'The business needed more local leads from search and referrals.',
        'Service offerings were not clearly explained online.',
        'Trust-building proof was missing from the existing web presence.',
      ],
      solution: [
        'Built service-focused pages mapped to remodel intent.',
        'Added portfolio and proof elements to support trust.',
        'Implemented conversion-first contact and quote pathways.',
      ],
      outcome: [
        'Visitors can quickly identify relevant services.',
        'Lead capture is clearer with stronger CTA placement.',
        'Local credibility improved with project-forward layout.',
      ],
      testimonial: {
        quote: 'The site immediately made our company look established and trustworthy.',
        author: 'Owner',
        role: 'Flippers Remodeling',
      },
    },
  },
  {
    id: 13,
    slug: 'florida-reliable-courier',
    title: 'Florida Reliable Courier Service',
    category: 'Growth Website',
    tier: 'growth',
    industry: 'Courier & Logistics',
    year: 2024,
    description: 'Courier and delivery service website with service area coverage, package tracking info, quote requests, and trust-building features for Florida businesses.',
    features: ['Service pages', 'Quote requests', 'Local SEO', 'Mobile responsive', 'Live in production'],
    deliverables: ['Service area pages', 'Quote capture flow', 'Trust-building proof sections', 'Mobile optimization'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['delivery', 'courier', 'b2b logistics'],
    liveUrl: 'https://packagesdeliveryserviceofflorida.com',
    status: 'live',
    image: '/images/portfolio/floridareliabledcourier.jpg',
    featured: false,
    caseStudy: {
      timeline: '2-week growth-site sprint',
      problem: [
        'Business customers needed clear visibility into service coverage and capabilities.',
        'The old site did not build enough trust for commercial inquiries.',
        'Quote requests were low due to unclear call-to-action paths.',
      ],
      solution: [
        'Created service and coverage pages aligned with search intent.',
        'Added credibility content and straightforward service messaging.',
        'Improved quote request journey with prominent conversion sections.',
      ],
      outcome: [
        'Higher clarity for commercial prospects evaluating providers.',
        'Stronger trust framing for logistics decision-makers.',
        'Improved quote pathway discoverability.',
      ],
      testimonial: {
        quote: 'We now look like a serious provider when business clients check us out.',
        author: 'Operations Team',
        role: 'Florida Reliable Courier Service',
      },
    },
  },
  {
    id: 14,
    slug: 'a-brighter-day-daycare',
    title: 'A Brighter Day Daycare',
    category: 'Website-in-a-Week',
    tier: 'week',
    industry: 'Childcare',
    year: 2024,
    description: 'Childcare and daycare services website serving Palm Bay and Melbourne, Florida. Features location info, enrollment details, and parent resources.',
    features: ['Multi-location', 'Enrollment info', 'Parent resources', 'Local SEO', 'Live in production'],
    deliverables: ['Enrollment information architecture', 'Location-based pages', 'Parent resource content sections', 'Contact and inquiry flow'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['daycare', 'childcare', 'enrollment'],
    liveUrl: 'https://abrighterday.net',
    status: 'live',
    image: '/images/portfolio/abrighterday.jpg',
    featured: false,
    caseStudy: {
      timeline: '7 days',
      problem: [
        'Parents needed fast access to enrollment and location details.',
        'Important trust and safety information was hard to find.',
        'The site needed stronger local discovery for nearby families.',
      ],
      solution: [
        'Organized information around parent decision points.',
        'Highlighted trust and care details across core pages.',
        'Structured local content for Palm Bay and Melbourne visibility.',
      ],
      outcome: [
        'Parents can evaluate fit quickly and contact with confidence.',
        'Enrollment pathway is easier to follow on mobile.',
        'Local presence is clearer for nearby families searching online.',
      ],
      testimonial: {
        quote: 'Families now get the information they need without extra calls.',
        author: 'Program Manager',
        role: 'A Brighter Day Daycare',
      },
    },
  },
  {
    id: 15,
    slug: 'best-computer-tech',
    title: 'Best Computer Tech',
    category: 'Authority Website',
    tier: 'authority',
    industry: 'IT Services',
    year: 2024,
    description: 'Full-service IT and computer repair company website with service pages, business solutions, and customer support portal. Comprehensive online presence for a tech services provider.',
    features: ['Service pages', 'Business solutions', 'Support portal', 'Professional design', 'Live in production'],
    deliverables: ['Service catalog structure', 'Business solution pages', 'Support portal entry points', 'Authority-focused layout and copy'],
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    keywords: ['it support', 'managed services', 'computer repair'],
    liveUrl: 'https://bestcomputertec.com',
    status: 'live',
    image: '/images/portfolio/bestcomputertech.jpg',
    featured: false,
    caseStudy: {
      timeline: '1 week',
      problem: [
        'Service mix for residential and business clients lacked clear structure.',
        'Brand needed stronger authority to compete with larger providers.',
        'Support-related navigation was hard for existing clients.',
      ],
      solution: [
        'Reorganized service architecture around client intent.',
        'Added authority sections for business credibility.',
        'Created clear support and contact pathways.',
      ],
      outcome: [
        'Visitors understand service offerings faster.',
        'Business prospects get a clearer enterprise-ready signal.',
        'Support access is easier for returning customers.',
      ],
      testimonial: {
        quote: 'Our services are finally presented in a way that matches what we actually deliver.',
        author: 'Owner',
        role: 'Best Computer Tech',
      },
    },
  },
];

export const tierOptions: Array<{ label: string; value: PortfolioTier | 'all' }> = [
  { label: 'All Tiers', value: 'all' },
  { label: '24-Hour Landing Page', value: '24-hour' },
  { label: 'Website-in-a-Week', value: 'week' },
  { label: 'Growth Website', value: 'growth' },
  { label: 'Platform / Web App MVP', value: 'platform' },
  { label: 'Authority Website', value: 'authority' },
];

export const statusOptions: Array<{ label: string; value: PortfolioStatus | 'all' }> = [
  { label: 'All Statuses', value: 'all' },
  { label: 'Live', value: 'live' },
  { label: 'In Development', value: 'in-development' },
];

export const industryOptions = [
  'All Industries',
  ...Array.from(new Set(portfolioItems.map((item) => item.industry))).sort((a, b) => a.localeCompare(b)),
];

export function getPortfolioItemBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getPortfolioSearchText(item: PortfolioItem) {
  return [
    item.title,
    item.category,
    item.industry,
    item.description,
    item.keywords.join(' '),
    item.stack.join(' '),
  ]
    .join(' ')
    .toLowerCase();
}
