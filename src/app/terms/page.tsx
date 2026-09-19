import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Reliable Web Studio',
  description:
    'Terms for Reliable Web Studio managed website plans, custom website projects, hosting, maintenance, payments, and client responsibilities.',
  openGraph: {
    title: 'Terms of Service | Reliable Web Studio',
    description: 'Review the terms for managed website plans and custom web projects.',
    url: 'https://www.reliablewebstudio.com/terms',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Reliable Web Studio Terms of Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Reliable Web Studio',
    description: 'Review the terms for managed website plans and custom web projects.',
    images: ['/api/og'],
  },
  alternates: { canonical: 'https://www.reliablewebstudio.com/terms' },
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1>Terms of Service</h1>
            <p className="text-gray-600">Last updated: September 19, 2026</p>

            <h2>Agreement to These Terms</h2>
            <p>
              These Terms of Service govern services provided by Reliable Web Studio, operated by Best Computer Tech LLC
              (&quot;Reliable Web Studio,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By purchasing a service,
              approving a proposal, or using an ongoing service, the client (&quot;you&quot; or &quot;your&quot;) agrees to these
              terms and any signed proposal or service agreement. If a signed agreement conflicts with these website terms,
              the signed agreement controls.
            </p>

            <h2>Services</h2>
            <p>We provide services that may include:</p>
            <ul>
              <li>Managed local business website plans</li>
              <li>Landing pages and Website-in-a-Week projects</li>
              <li>Growth, authority, and custom websites</li>
              <li>Web applications, portals, automation, and ML/AI integrations</li>
              <li>Hosting, maintenance, analytics, local SEO foundations, and care plans</li>
            </ul>
            <p>
              The exact scope, deliverables, schedule, and price are defined by the selected plan, checkout description,
              proposal, or written service agreement.
            </p>

            <h2>Local Website Plan</h2>
            <h3>Pricing and Initial Term</h3>
            <p>
              The standard Local Website Plan is $150 setup plus $100 per month unless a different amount is shown in a
              written proposal. It has a 12-month initial service term beginning when the setup payment is received. After
              the initial term, service continues month-to-month until canceled under these terms.
            </p>
            <p>
              The initial term is a minimum commitment. If you cancel before it ends, amounts already paid are
              non-refundable and the remaining monthly fees for the initial term remain due unless we agree otherwise in
              writing.
            </p>

            <h3>What the Standard Plan Includes</h3>
            <ul>
              <li>Design and development of a small-business website of approximately five pages</li>
              <li>Responsive mobile and desktop layouts</li>
              <li>Managed hosting, SSL, uptime monitoring, routine maintenance, and backups</li>
              <li>Contact form, click-to-call links, map or service-area information, and basic analytics</li>
              <li>Basic on-page SEO, sitemap, search indexing setup, and appropriate structured data</li>
              <li>Up to 30 minutes of minor content updates per billing month</li>
            </ul>
            <p>
              Unused update time does not roll over. New pages, major redesigns, advanced functionality, paid advertising,
              ongoing SEO campaigns, extensive copywriting, custom photography, e-commerce, and third-party subscription
              fees are outside the standard plan unless included in writing.
            </p>

            <h3>Managed Service and Website Access</h3>
            <p>
              Hosting, maintenance, monitoring, and support are provided while the account is active and current. The
              managed website may use our reusable code, components, systems, and licensed tools. Those underlying tools
              and reusable materials remain our property or the property of their licensors.
            </p>

            <h2>Domains and Hosting</h2>
            <ul>
              <li>Your domain should be registered in your legal or business name whenever technically possible.</li>
              <li>You retain ownership of a client-owned domain and are responsible for keeping its registration current.</li>
              <li>Domain registration, renewal, premium-domain, transfer, and specialty extension fees are not included unless stated in writing.</li>
              <li>Managed hosting is included only while the applicable monthly plan remains active and paid.</li>
              <li>You must provide accurate registration information and required access for DNS or migration work.</li>
            </ul>

            <h2>Project Delivery</h2>
            <h3>Start Date and Timeline</h3>
            <p>
              Work begins after we receive the required payment, completed intake information, content, and account access.
              Timelines are estimates unless a written agreement expressly states a guarantee. Client delays, missing
              materials, third-party outages, and scope changes may extend delivery dates.
            </p>

            <h3>24-Hour Landing Page</h3>
            <p>
              When a 24-hour delivery commitment is included, the delivery period begins only after payment and the complete
              intake are received. The commitment applies to the first review-ready draft, not final launch, and excludes
              delays caused by missing client materials, late feedback, expanded scope, or third-party services.
            </p>

            <h3>Client Responsibilities</h3>
            <p>You agree to provide:</p>
            <ul>
              <li>Accurate business, contact, service, and pricing information</li>
              <li>Content, images, logos, licenses, and branding materials you have the right to use</li>
              <li>Timely, consolidated feedback and approvals</li>
              <li>Access to domains, hosting, analytics, and other accounts when needed</li>
              <li>Required legal notices, professional disclaimers, privacy disclosures, and industry-specific compliance language</li>
            </ul>

            <h2>Payments</h2>
            <p>
              Setup fees, deposits, subscriptions, and project balances are due as stated at checkout or in the applicable
              proposal. You authorize recurring charges when enrolling in a monthly plan. Taxes and third-party fees may be
              added when applicable.
            </p>

            <h3>Late or Failed Payments</h3>
            <p>
              If payment fails or an account becomes overdue, we may pause work, updates, support, or managed hosting after
              reasonable notice. Suspension does not transfer or cancel your domain ownership. Service may be restored after
              outstanding amounts and any disclosed restoration costs are paid.
            </p>

            <h3>Refunds</h3>
            <p>
              Setup fees and deposits become non-refundable once work begins. Completed billing periods and third-party fees
              are non-refundable. Any additional refund or service credit must be stated in writing or required by law.
            </p>

            <h2>Revisions and Scope Changes</h2>
            <p>
              Included revisions are limited to the selected plan or proposal. A revision adjusts an agreed deliverable; it
              does not add a new page, feature, service, or design direction. We will quote work outside the agreed scope
              before proceeding. Project revisions should be submitted within 30 days of the initial delivery unless the
              proposal states otherwise.
            </p>

            <h2>Ownership and Licenses</h2>
            <h3>Your Materials</h3>
            <p>
              You retain ownership of content, logos, photos, trademarks, and other materials you provide. You grant us a
              limited license to use those materials to deliver and promote the services, including displaying completed
              work in our portfolio unless we agree otherwise in writing.
            </p>

            <h3>Custom Project Deliverables</h3>
            <p>
              For a one-time custom project, ownership of the final, client-specific deliverables transfers after all related
              invoices are paid, subject to third-party licenses and our ownership of pre-existing or reusable tools,
              components, methods, and frameworks.
            </p>

            <h3>Managed Plan Deliverables</h3>
            <p>
              Under a managed website plan, you own your domain and client-supplied content. The website service, hosting
              environment, reusable code, and licensed components remain available while the plan is active. Any export,
              migration, or buyout must be technically feasible and separately agreed in writing. Third-party licenses may
              not be transferable.
            </p>

            <h2>Cancellation and Termination</h2>
            <p>
              After the 12-month initial term, you may cancel a Local Website Plan with 30 days&apos; written notice. We may
              terminate or suspend service for nonpayment, unlawful activity, abuse, security risk, material breach, or use
              that harms our systems or other customers. Fees earned before termination remain due.
            </p>
            <p>
              When managed service ends, hosting, maintenance, updates, monitoring, and support end as well. We will
              reasonably cooperate with a requested domain transfer or approved migration after the account is paid in full.
              You should request any available export before the termination date.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Websites may connect to third-party providers such as domain registrars, analytics tools, form processors,
              payment processors, maps, email platforms, or social networks. Their terms, availability, pricing, and data
              practices are outside our control. We are not responsible for interruptions or changes caused by those
              providers.
            </p>

            <h2>SEO, Analytics, and Results</h2>
            <p>
              We apply reasonable website, indexing, analytics, and local SEO practices within the purchased scope. Search
              rankings, traffic, leads, sales, approval by search platforms, and Google Business Profile performance are not
              guaranteed because they depend on competition, algorithms, client operations, and third-party platforms.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You may not use our services for unlawful, fraudulent, infringing, abusive, deceptive, or harmful activity.
              You may not upload malware, attempt unauthorized access, send prohibited spam, or use the service in a way that
              threatens security or platform stability.
            </p>

            <h2>Warranty Disclaimer</h2>
            <p>
              Services are provided &quot;as is&quot; and &quot;as available&quot; to the fullest extent permitted by law. We
              do not warrant uninterrupted operation or specific business, search, accessibility, legal, or financial
              outcomes. You remain responsible for reviewing and approving your website before launch.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Reliable Web Studio and Best Computer Tech LLC will not be liable for
              indirect, incidental, special, consequential, or lost-profit damages. Our total liability arising from a
              specific service will not exceed the amount you paid us for that service during the six months preceding the
              event giving rise to the claim.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Updated terms become effective when posted unless a later date is
              stated. Material changes to an active signed agreement require the process described in that agreement or
              applicable law.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by Florida law, without regard to conflict-of-law rules. Any dispute will be handled
              in a court with jurisdiction in Brevard County, Florida, unless a signed agreement provides another process.
            </p>

            <h2>Contact</h2>
            <p>Questions, notices, and cancellation requests may be sent to:</p>
            <ul>
              <li>Email: <a href="mailto:hello@reliablewebstudio.com" className="text-primary-600">hello@reliablewebstudio.com</a></li>
              <li>Phone: <a href="tel:+13219535199" className="text-primary-600">(321) 953-5199</a></li>
              <li>Business: Best Computer Tech LLC, Palm Bay, Florida</li>
            </ul>

            <div className="not-prose mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Review the Plan Before You Start</h2>
              <p className="text-gray-700 mb-4">Compare the managed website scope, pricing, and project process before submitting your request.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/local-business-website-plan" className="btn-primary">Local Website Plan</Link>
                <Link href="/pricing" className="btn-secondary">Pricing</Link>
                <Link href="/process" className="btn-secondary">Process</Link>
                <Link href="/privacy" className="btn-secondary">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
