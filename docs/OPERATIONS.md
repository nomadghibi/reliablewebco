# Operations (Delivery System)

## Intake Fields (must match website form)
- Business name
- Website/domain (if any)
- Phone + email
- Service area (cities/zip)
- Main offer
- Primary CTA: Call / Book / Quote
- Top 3 services
- 3 competitors (links)
- Upload logo + photos (optional)
- Reviews/testimonials (optional)
- Brand color preference (optional)

## 24-Hour Landing Page Sprint Checklist
- Confirm payment + intake complete
- Choose template style + hero layout
- Write conversion copy (short)
- Add form + call/sms buttons
- Add tracking + OG
- Preview -> 1 revision -> deploy
- Send handoff email with links

## Website-in-a-Week Checklist
Day 1: intake + outline + draft
Day 2–3: build pages + navigation + mobile
Day 4: proof/FAQ + contact + tracking
Day 5: revision + polish
Day 6–7: launch + handoff

## Scope guardrails
If client requests login/portal/dashboard -> move to Platform MVP tier.

## Website Analysis Workflow (Next-Day Email)
- Client submits form at `/audit`.
- Backend endpoint `/api/audit-request` runs a quick automated homepage snapshot.
- Request details + snapshot are forwarded to Formspree inbox.
- Manual expert review is completed and full report is emailed by next business day.
- Use `docs/10-AUDIT-REPORT-TEMPLATE.md` + `docs/11-AUDIT-SCORING-CHECKLIST.md` for consistent delivery.

## Email Setup Recommendation

### Cloudflare Email Routing (Recommended)
**Cost:** Free
**What it does:** Create professional email addresses like `you@yourdomain.com` and forward incoming mail to your existing inbox (Gmail/Outlook/etc.)
**Limitation:** Forwarding only (not a full mailbox host) - you can receive emails but will send from your personal email

**Setup Steps:**
1. Domain must be on Cloudflare DNS (free)
2. Go to Email → Email Routing in Cloudflare dashboard
3. Add destination address (your Gmail/Outlook)
4. Create custom addresses (info@, hello@, contact@, etc.)
5. Cloudflare automatically configures MX records

**Perfect for:**
- Small service businesses
- Forwarding contact form replies to owner's existing email
- Professional appearance without email hosting costs

**Alternative (if full mailbox needed):**
- Google Workspace: $6/user/month
- Microsoft 365: $6/user/month
- Zoho Mail: $1/user/month
