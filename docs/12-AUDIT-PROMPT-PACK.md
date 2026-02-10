# Website Audit Prompt Pack

Use these prompts in sequence for consistent, high-quality audits.

## Prompt 1: Intake Normalizer
```text
You are a website audit assistant.
Normalize this intake into structured JSON.

Input:
- Client name: {{CLIENT_NAME}}
- Website URL: {{WEBSITE_URL}}
- Industry: {{INDUSTRY}}
- Main offer: {{MAIN_OFFER}}
- City/service area: {{CITY_REGION}}
- Main goal: {{PRIMARY_GOAL}}
- Notes: {{CLIENT_NOTES}}

Return JSON only with keys:
client_name, website_url, industry, main_offer, city_region, primary_goal, notes, assumptions, missing_data.
```

## Prompt 2: Conversion Audit (Homepage + Main Service Page)
```text
Audit this website for conversion performance.
Focus on homepage and one core service page.

Website: {{WEBSITE_URL}}
Goal: {{PRIMARY_GOAL}}

Return:
1) Top 5 conversion blockers
2) Evidence for each blocker (url/path + observed element)
3) Recommended fix for each blocker
4) Priority label (P0/P1/P2)
5) Expected impact (high/medium/low)

Rules:
- Be specific, no generic advice.
- Tie each finding to business outcomes.
- Keep output concise and actionable.
```

## Prompt 3: Local SEO Audit (Florida-focused)
```text
Run a local SEO audit for this site.

Website: {{WEBSITE_URL}}
Primary city/region: {{CITY_REGION}}
Primary service: {{MAIN_OFFER}}

Check:
- Title/meta alignment with city + service intent
- Service page depth and uniqueness
- Location page strategy
- Internal links to money pages
- Local trust signals (NAP, map, testimonials, local relevance)
- Schema opportunities (LocalBusiness, Service, FAQ where appropriate)

Return:
- P0/P1/P2 findings
- Exact on-page fixes
- Suggested new pages (service x city) with slugs
```

## Prompt 4: Technical and Measurement Audit
```text
Run a lightweight technical and tracking audit for this website.

Website: {{WEBSITE_URL}}

Check:
- Crawl/index basics (robots, sitemap, canonical consistency)
- Mobile UX issues that hurt conversions
- Obvious performance bottlenecks
- CTA/form reliability from visible frontend behavior
- Analytics and event tracking gaps

Return a table:
Issue | Evidence | Priority | Fix | Effort (S/M/L)
```

## Prompt 5: Competitor Gap Analysis
```text
Compare this website to competitors and identify practical gaps.

Business website: {{WEBSITE_URL}}
Competitors:
1) {{COMPETITOR_1}}
2) {{COMPETITOR_2}}
3) {{COMPETITOR_3}}

Return:
- What competitors do better (conversion, trust, local SEO)
- What this site does better
- 10 specific improvements to close the gap
- Which 3 improvements should be done first
```

## Prompt 6: Final Report Builder
```text
Create a final client-facing website audit report.
Use these sections exactly:
1) Executive Summary
2) Score Snapshot (0-100 with category breakdown)
3) P0 Findings
4) P1 Findings
5) P2 Findings
6) 7-Day Quick Wins
7) 30-Day Plan
8) Recommended Package and Next Step

Inputs:
- Intake JSON: {{INTAKE_JSON}}
- Conversion findings: {{CONVERSION_OUTPUT}}
- Local SEO findings: {{LOCAL_SEO_OUTPUT}}
- Technical findings: {{TECH_OUTPUT}}
- Competitor findings: {{COMPETITOR_OUTPUT}}

Rules:
- No fluff.
- Each finding must include evidence, impact, and exact fix.
- Keep it professional and easy for non-technical owners.
```

## Prompt 7: Deliverable Formatter (Email + PDF-ready Markdown)
```text
Turn the final report into:
1) Client email summary (150-220 words)
2) PDF-ready markdown version
3) 1-page action plan checklist

Tone:
- Direct
- Professional
- Outcome-focused
```

