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

function createLongFormModules(post: BlogPost): BlogSection[] {
  const primaryKeyword = post.keywords[0] || 'local web design strategy';
  const secondaryKeyword = post.keywords[1] || 'conversion-focused website';
  const localFocus = post.cityFocus.join(', ');
  const serviceCategory = post.category;

  return [
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
