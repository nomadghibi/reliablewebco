import type { BlogPost, BlogSection } from '@/data/blog';

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countSectionWords(section: BlogSection): number {
  const paragraphWords = section.paragraphs.reduce((sum, paragraph) => sum + countWords(paragraph), 0);
  const bulletWords = (section.bullets || []).reduce((sum, bullet) => sum + countWords(bullet), 0);
  return countWords(section.heading) + paragraphWords + bulletWords;
}

export function estimateBasePostWordCount(post: BlogPost): number {
  const introWords = post.intro.reduce((sum, paragraph) => sum + countWords(paragraph), 0);
  const sectionWords = post.sections.reduce((sum, section) => sum + countSectionWords(section), 0);
  const takeawayWords = post.takeaways.reduce((sum, item) => sum + countWords(item), 0);
  const faqWords = post.faq.reduce((sum, item) => sum + countWords(item.question) + countWords(item.answer), 0);

  return (
    countWords(post.title) +
    countWords(post.description) +
    introWords +
    sectionWords +
    takeawayWords +
    faqWords
  );
}

function getCategorySpecificModules(post: BlogPost): BlogSection[] {
  const category = post.category.toLowerCase();

  if (category === 'restaurant marketing') {
    return [
      {
        heading: 'Restaurant Funnel Design: Reservation, Ordering, and Repeat Visits',
        paragraphs: [
          'Restaurant websites convert best when the funnel is intentionally segmented by user intent: reserve now, order now, or browse menu before deciding. Blending those paths without clear prioritization causes drop-off, especially on mobile where attention is limited.',
          'A stronger setup places reservation and ordering actions above the fold, then supports decision-making with menu highlights, location proof, and social validation. This structure improves both immediate conversions and repeat customer behavior.'
        ],
        bullets: [
          'Separate reservation and ordering CTA pathways',
          'Use sticky action controls on mobile',
          'Highlight high-margin menu and offer items in strategic positions'
        ]
      },
      {
        heading: 'Local Restaurant SEO: Capture Near-Me and Neighborhood Intent',
        paragraphs: [
          'Restaurant visibility in Florida depends heavily on local context signals. Pages should reinforce neighborhood relevance, opening hours, and cuisine intent in a natural way that helps users make fast decisions.',
          'When these signals are aligned across site content and local listings, ranking consistency and click-through quality usually improve. Strong internal links to menus, events, and catering pages also increase crawl depth and conversion opportunities.'
        ],
        bullets: [
          'Reinforce neighborhood-level service relevance',
          'Keep hours and location details highly visible',
          'Interlink menu, events, and private dining pages'
        ]
      }
    ];
  }

  if (category === 'pricing strategy' || category === 'budget planning') {
    return [
      {
        heading: 'Pricing Communication: Remove Friction Before the First Call',
        paragraphs: [
          'Pricing content should reduce uncertainty without overwhelming prospects. Most buyers are not asking for exact cost first. They want to understand scope tiers, outcomes, and expected timeline so they can qualify themselves quickly.',
          'A package page that explains fit criteria, boundaries, and upgrade paths can improve lead quality while decreasing unqualified inquiries. This is especially useful for small teams that need predictable sales conversations.'
        ],
        bullets: [
          'Use fit-based package positioning',
          'Clarify scope boundaries for each tier',
          'Show upgrade path to support future growth'
        ]
      },
      {
        heading: 'Budget-Efficient Build Strategy for Growth-Oriented Teams',
        paragraphs: [
          'Affordable projects work best when they prioritize pages and features by business impact. Start with the assets that influence pipeline directly: homepage clarity, service pages, contact conversion flow, and tracking.',
          'As revenue improves, expand with supporting content like location pages, case studies, and deeper educational articles. This staged approach keeps spend aligned to measurable return.'
        ],
        bullets: [
          'Launch core conversion pages first',
          'Delay non-critical features to phase two',
          'Tie expansion decisions to lead and close data'
        ]
      }
    ];
  }

  if (category === 'landing pages') {
    return [
      {
        heading: 'Landing Page Message Match for Paid and Organic Traffic',
        paragraphs: [
          'Landing pages perform best when message continuity is preserved from query or ad to page headline and CTA framing. If users see one promise in search and a different one on-page, trust drops immediately.',
          'Use a controlled message system where offer language, urgency framing, and action copy are intentionally synchronized across channels.'
        ],
        bullets: [
          'Match headline copy to acquisition intent',
          'Use one primary offer per landing page',
          'Align CTA wording across ads and page sections'
        ]
      },
      {
        heading: 'Post-Launch Landing Page Optimization Workflow',
        paragraphs: [
          'A landing page is not complete at publish time. Real gains come from iterative testing of headlines, proof order, CTA placement, and form friction based on event data.',
          'Even small changes can produce meaningful improvements when tested in a structured sequence and tied to lead-quality outcomes.'
        ],
        bullets: [
          'Run one-variable tests on high-impact sections',
          'Prioritize changes using call/form event trends',
          'Document outcomes for repeatable playbook growth'
        ]
      }
    ];
  }

  if (category === 'lead generation') {
    return [
      {
        heading: 'Lead System Diagnosis: Visibility, Messaging, or Conversion Friction',
        paragraphs: [
          'When lead volume is low, diagnose the bottleneck before changing design. Problems typically fall into three categories: not enough qualified traffic, weak message relevance, or conversion friction in page flow.',
          'Segmenting the issue correctly prevents wasted effort and helps teams prioritize fixes that produce measurable results quickly.'
        ],
        bullets: [
          'Audit traffic quality by page and channel',
          'Evaluate offer/message alignment to user intent',
          'Review form and CTA drop-off patterns'
        ]
      },
      {
        heading: 'Lead Quality Improvement Through Pre-Qualification Design',
        paragraphs: [
          'Higher lead volume is not always better if quality is poor. Pre-qualification language and form logic can filter low-fit inquiries while improving close rates.',
          'The best approach balances accessibility with selective clarity so sales teams spend time on high-probability opportunities.'
        ],
        bullets: [
          'Clarify who your service is best for',
          'Use form prompts that gather decision-stage context',
          'Route urgent leads through faster follow-up workflows'
        ]
      }
    ];
  }

  if (category === 'agency selection') {
    return [
      {
        heading: 'Vendor Due Diligence: Questions That Reveal Delivery Risk',
        paragraphs: [
          'Most project failures are visible before the contract is signed if you ask the right operational questions. Ask how the team handles scope changes, quality control, handoff, and post-launch ownership.',
          'Teams with mature delivery systems answer with specifics and examples, not general promises.'
        ],
        bullets: [
          'Request sample timelines and QA checkpoints',
          'Confirm ownership and access for all core assets',
          'Validate post-launch support and response standards'
        ]
      },
      {
        heading: 'Contract and Scope Structure That Protects Outcomes',
        paragraphs: [
          'A strong scope model protects both budget and quality. It should define included pages, technical setup, revision limits, and launch criteria in concrete language.',
          'When scope is explicit, project momentum improves and disagreements decrease because decision boundaries are clear.'
        ],
        bullets: [
          'Define page and feature inventory in writing',
          'Set revision rounds with acceptance criteria',
          'Tie payment milestones to delivery checkpoints'
        ]
      }
    ];
  }

  if (category === 'industry strategy') {
    return [
      {
        heading: 'Service Industry Positioning: Build Trust Before Price Discussion',
        paragraphs: [
          'In service industries, buyers often choose based on confidence before comparing price. Website structure should establish credibility quickly through proof, process clarity, and localized relevance.',
          'Pages that move to pricing too early without trust scaffolding tend to produce lower conversion rates or lower-quality leads.'
        ],
        bullets: [
          'Lead with proof and process clarity',
          'Use local case context where possible',
          'Sequence trust elements before pricing prompts'
        ]
      },
      {
        heading: 'Operational Scalability for Multi-Service, Multi-City Growth',
        paragraphs: [
          'As service businesses expand, website systems need scalable templates for new services and locations. Without this, quality drifts and SEO consistency declines.',
          'A template-driven architecture supports faster content rollout while preserving conversion patterns and technical integrity.'
        ],
        bullets: [
          'Use reusable service-page frameworks',
          'Standardize location-page model for new markets',
          'Maintain shared QA checklist for every new page'
        ]
      }
    ];
  }

  return [];
}

function createLongFormModules(post: BlogPost): BlogSection[] {
  const primaryKeyword = post.keywords[0] || 'local web design strategy';
  const secondaryKeyword = post.keywords[1] || 'conversion-focused website';
  const localFocus = post.cityFocus.join(', ');
  const serviceCategory = post.category;
  const baseModules: BlogSection[] = [
    {
      heading: 'Market Context: Why This Topic Matters in Florida Right Now',
      paragraphs: [
        `In Florida, buyer behavior for local services is increasingly mobile, time-sensitive, and comparison-driven. That means a page strategy for ${serviceCategory.toLowerCase()} must do more than look modern. It needs to communicate a clear offer quickly, reduce uncertainty with trust signals, and present one primary action path that matches the decision stage. When pages fail in those first moments, rankings and ad clicks still produce low business impact because visitors do not convert.`,
        `A strong strategy aligns search intent with conversion intent. For example, users searching ${primaryKeyword} usually expect immediate clarity around services, location coverage, and next steps. If that structure is missing, users return to results and try a competitor. Effective Florida pages are built around message precision, local relevance, and practical action design so traffic is translated into measurable outcomes like calls, form submissions, and booked consultations.`
      ],
      bullets: [
        `Prioritize intent clarity over visual complexity`,
        `Design for mobile-first decision speed in ${localFocus}`,
        `Map each page section to one conversion objective`
      ]
    },
    {
      heading: 'SEO Architecture: Build Topical Depth Without Creating Content Chaos',
      paragraphs: [
        `Topical depth is critical for local rankings, but random page creation leads to cannibalization and weak crawl structure. A cleaner model is to organize content into three layers: core service pages, location pages, and supporting articles. Core service pages explain what you do, location pages prove local relevance, and articles like this one expand buyer education. Interlinking these layers strengthens search understanding and keeps users moving toward conversion-focused pages rather than isolated informational dead-ends.`,
        `Use consistent URL conventions, metadata standards, and schema patterns so growth is repeatable as your content library expands. For businesses targeting multiple Florida markets, this system is significantly more scalable than writing disconnected pages one at a time. It also makes ongoing optimization easier because performance can be reviewed by cluster, not only by individual URL. Over time, this architecture supports both ranking stability and improved lead quality across priority services.`
      ],
      bullets: [
        'Use hub-and-spoke internal linking between services and city pages',
        `Integrate keywords like ${secondaryKeyword} naturally in headings and body copy`,
        'Standardize metadata and schema as a publishing requirement'
      ]
    },
    ...getCategorySpecificModules(post),
    {
      heading: 'Conversion Layer: Turn Visibility Into Qualified Inquiries',
      paragraphs: [
        `Many websites lose leads because conversion pathways are not explicit. Even when traffic quality is strong, unclear CTA placement, weak trust positioning, and long form flows create friction. To fix this, pages should present one main CTA near the top, repeat that action at natural decision moments, and pair it with concise credibility signals. This includes testimonials, service guarantees, clear response expectations, and local proof that confirms you actually serve the visitor's area.`,
        `Conversion improvements should be measured, not guessed. Event tracking for phone clicks, form starts, form completions, and booking interactions creates a usable optimization loop. With this data, you can identify whether a page problem is visibility, message clarity, or action friction. That distinction matters because each issue has a different fix. Businesses that apply this measurement model consistently tend to improve lead quality faster than those making design changes without behavioral evidence.`
      ],
      bullets: [
        'Keep one primary CTA per page section',
        'Place trust signals adjacent to forms and call actions',
        'Track user actions that represent real commercial intent'
      ]
    },
    {
      heading: 'Execution Framework: 30-60-90 Day Improvement Cycle',
      paragraphs: [
        `A professional content and SEO strategy should operate on a fixed execution rhythm. In the first 30 days, focus on structural foundations: page hierarchy, metadata quality, schema coverage, and conversion event setup. In days 31 to 60, prioritize content upgrades on high-intent pages, especially service and location URLs that influence pipeline quality. By days 61 to 90, use performance data to refine headlines, CTA sequence, and internal links based on what is producing actual leads in your target cities.`,
        `This staged approach keeps work tied to outcomes and prevents random activity that consumes time without measurable progress. It also supports collaboration between design, SEO, and sales workflows because priorities are visible and time-bound. The most effective teams document each change, its hypothesis, and its observed result. That discipline compounds over time and builds a repeatable playbook your business can use whenever new services, cities, or offers are introduced.`
      ],
      bullets: [
        'Days 1-30: technical and structural baseline',
        'Days 31-60: content depth and trust expansion',
        'Days 61-90: conversion testing and optimization'
      ]
    },
    {
      heading: 'Common Failure Patterns and How to Avoid Them',
      paragraphs: [
        `The first common failure is publishing pages that are too broad to match user intent. Visitors searching precise service outcomes need precision, not generic brand messaging. The second is separating SEO from conversion design, which leads to pages that rank but do not persuade. The third is skipping analytics implementation, which blocks improvement because performance discussions remain subjective. Fixing these three issues typically creates faster gains than redesigning visual components alone.`,
        `Another recurring issue is inconsistent offer language across ads, search snippets, and landing pages. Message mismatch causes trust loss and drop-off before the user reaches your form or call action. Strong teams maintain a message library so core terms, promises, and CTA language stay synchronized. This consistency improves both ad efficiency and organic conversion rate because users receive the same narrative from first click to final action.`
      ],
      bullets: [
        'Avoid generic pages that ignore buyer intent specificity',
        'Do not separate SEO implementation from conversion UX',
        'Maintain messaging consistency across all acquisition channels'
      ]
    },
    {
      heading: 'Action Plan: What to Implement Next',
      paragraphs: [
        `Start by auditing the page most likely to produce revenue in the next quarter. Review its headline clarity, local relevance signals, CTA repetition, and trust placement. Then evaluate technical readiness: metadata quality, indexability, internal links, and schema alignment. This single-page audit often reveals the highest-impact improvements for both lead volume and lead quality. Apply those changes, track results for two to four weeks, then roll the same framework into additional pages based on business priority.`,
        `As you scale, document templates for service pages, location pages, and article content so quality does not drift. Standardization is what allows content velocity without sacrificing SEO integrity. When new pages are launched through a tested framework, they are more likely to rank, convert, and support sales outcomes quickly. This is how content marketing becomes a reliable growth system rather than a collection of disconnected posts.`
      ],
      bullets: [
        `Audit one high-value page this week for ${primaryKeyword}`,
        'Implement measured improvements and monitor conversion events',
        'Scale proven page templates across priority services and cities'
      ]
    }
  ];

  return baseModules;
}

export function getLongFormSections(
  post: BlogPost,
  minWords = 1500,
  maxWords = 2000
): BlogSection[] {
  const baseWords = estimateBasePostWordCount(post);
  if (baseWords >= minWords) {
    return [];
  }

  const modules = createLongFormModules(post);
  const selected: BlogSection[] = [];
  let currentWords = baseWords;

  for (const sectionModule of modules) {
    const moduleWords = countSectionWords(sectionModule);
    if (currentWords >= minWords) break;

    // Keep articles in the requested range with a small tolerance.
    if (currentWords + moduleWords > maxWords + 120 && selected.length > 0) break;

    selected.push(sectionModule);
    currentWords += moduleWords;
  }

  return selected;
}

export function estimateTotalPostWordCount(post: BlogPost): number {
  const longFormSections = getLongFormSections(post);
  const longFormWords = longFormSections.reduce((sum, section) => sum + countSectionWords(section), 0);
  return estimateBasePostWordCount(post) + longFormWords;
}
