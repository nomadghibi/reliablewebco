# Weekly Growth Dashboard (Operator Playbook)

## Purpose
Run the business on one weekly scorecard so lead flow, closings, and delivery quality stay predictable.

## Weekly Targets (recommended starting point)
- Website analysis leads: 10 per week
- Booked calls: 6 per week
- Closed projects: 2 per week
- New MRR (care plans/retainers): $300-$1,200 per week
- Case studies published: 1 every 2 weeks
- Outreach volume: 50 contacts per week

## Dashboard Tabs (Google Sheets)
- `01_Scoreboard`
- `02_Lead_Log`
- `03_Outreach_Tracker`
- `04_Pipeline`
- `05_Content_Distribution`
- `06_Experiments`

## Tab 01: Scoreboard Columns
- `Week_Start`
- `Website_Analysis_Leads`
- `Booked_Calls`
- `Proposals_Sent`
- `Projects_Closed`
- `Close_Rate`
- `Avg_Project_Value`
- `New_MRR`
- `Cash_Collected`
- `Top_Channel`
- `P0`
- `P1`
- `P2`

## Scoreboard Formulas
- `Close_Rate = Projects_Closed / Booked_Calls`
- `Cash_Collected = (Projects_Closed * Avg_Project_Value) + New_MRR`
- `Lead_to_Call_Rate = Booked_Calls / Website_Analysis_Leads`

## Tab 02: Lead Log Columns
- `Date`
- `Lead_Name`
- `Business_Name`
- `City`
- `Website`
- `Source` (Audit Form, Referral, Organic, GBP, Outreach, Social)
- `Offer_Interest` ($499 Sprint, Website-in-a-Week, Growth, Authority, Platform)
- `Status` (New, Contacted, Qualified, Proposal Sent, Won, Lost)
- `Next_Action`
- `Next_Action_Date`
- `Estimated_Value`
- `Notes`

## Tab 03: Outreach Tracker Columns
- `Date`
- `Channel` (Email, Instagram DM, LinkedIn, Referral)
- `Target_Business`
- `Contact_Name`
- `City`
- `Message_Angle` (Audit, Speed Launch, SEO Fix)
- `Step` (Initial, Follow-up 1, Follow-up 2, Breakup)
- `Response` (No Reply, Replied, Booked)
- `Booked_Call` (Yes/No)
- `Notes`

## Tab 04: Pipeline Stages
- `Qualified`
- `Audit Sent`
- `Call Booked`
- `Proposal Sent`
- `Verbal Yes`
- `Deposit Paid`
- `In Delivery`
- `Completed`

## Tab 05: Content Distribution Columns
- `Date`
- `Asset_Type` (Case Study, Blog, Reel, Carousel, Email)
- `Topic`
- `Primary_Keyword`
- `City_Target`
- `URL`
- `CTA` (Audit, Book Call, Start Sprint)
- `Impressions`
- `Clicks`
- `Leads`

## Tab 06: Experiments Columns
- `Experiment`
- `Hypothesis`
- `Start_Date`
- `End_Date`
- `Primary_Metric`
- `Baseline`
- `Result`
- `Decision` (Keep, Iterate, Drop)

## Weekly Operating Cadence (Monday to Friday)
- Monday: update scorecard, set weekly target numbers, assign P0/P1/P2 priorities.
- Tuesday: outreach block 1 (25 contacts), follow-up block 1, publish 1 short local proof post.
- Wednesday: audit fulfillment + sales calls + proposal follow-up.
- Thursday: outreach block 2 (25 contacts), partner outreach (agencies, photographers, IT).
- Friday: review metrics, tag lessons, prepare next week list.

## P0/P1/P2 Weekly Rule
- `P0`: revenue blockers (no lead response, broken CTA, no proposals sent).
- `P1`: growth tasks (city page update, case study publish, referral partner setup).
- `P2`: optimization tasks (headline tests, section polish, minor automation).

## Decision Rules
- If `Website_Analysis_Leads < target` for 2 weeks: increase outbound and partner channels.
- If `Booked_Calls` is low but leads are high: tighten follow-up speed and booking CTA.
- If calls are high but closes are low: improve offer clarity and add stronger proof on pricing page.
- If close rate is good but cash is low: raise average package mix and push care plan attach rate.

## Minimum KPI Snapshot to Review Weekly
- Leads by source
- Calls booked rate
- Close rate
- Avg project value
- Care plan attach rate
- Net new MRR

## Implementation Note
Use this dashboard with:
- `docs/16-OUTREACH-TEMPLATES.md`
- `docs/10-AUDIT-REPORT-TEMPLATE.md`
- `docs/11-AUDIT-SCORING-CHECKLIST.md`
