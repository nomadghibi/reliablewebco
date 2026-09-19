import Link from 'next/link';
import PrintAgreementButton from '@/components/PrintAgreementButton';

export default function LocalWebsitePlanAgreementPage() {
  return (
    <main className="min-h-screen bg-gray-100 pt-28 pb-20 print:bg-white print:pt-0 print:pb-0">
      <div className="container-custom">
        <div className="print-hide mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-between gap-3">
          <Link href="/services/local-business-website-plan" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
            ← Back to Local Website Plan
          </Link>
          <PrintAgreementButton />
        </div>

        <article className="agreement-print mx-auto max-w-4xl bg-white p-7 shadow-xl md:p-12 print:max-w-none print:p-0 print:shadow-none">
          <header className="agreement-document-header mb-10 border-b-2 border-gray-900 pb-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">Reliable Web Studio / Best Computer Tech LLC</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-950">Local Website Plan Service Agreement</h1>
            <p className="mt-3 text-sm text-gray-600">Standard plan: $150 setup plus $100 per month | Version: September 19, 2026</p>
          </header>

          <section className="mb-8 rounded-xl border border-gray-300 p-5 print:break-inside-avoid">
            <h2 className="mb-4 text-lg font-bold text-gray-950">Agreement Information</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <p><span className="font-semibold">Client legal/business name:</span><span className="mt-3 block border-b border-gray-500">&nbsp;</span></p>
              <p><span className="font-semibold">Authorized representative:</span><span className="mt-3 block border-b border-gray-500">&nbsp;</span></p>
              <p><span className="font-semibold">Email:</span><span className="mt-3 block border-b border-gray-500">&nbsp;</span></p>
              <p><span className="font-semibold">Effective date:</span><span className="mt-3 block border-b border-gray-500">&nbsp;</span></p>
              <p><span className="font-semibold">Business domain:</span><span className="mt-3 block border-b border-gray-500">&nbsp;</span></p>
              <p><span className="font-semibold">Primary service area:</span><span className="mt-3 block border-b border-gray-500">&nbsp;</span></p>
            </div>
          </section>

          <div className="agreement-copy space-y-7 text-sm leading-6 text-gray-800">
            <section>
              <h2>1. Parties and Agreement</h2>
              <p>
                This Local Website Plan Service Agreement (&quot;Agreement&quot;) is between Best Computer Tech LLC, doing
                business as Reliable Web Studio (&quot;Provider&quot;), and the client identified above (&quot;Client&quot;).
                This Agreement incorporates the Provider&apos;s <Link href="/terms" className="font-semibold text-primary-700 underline">Terms of Service</Link>.
                If this Agreement conflicts with the Terms of Service, this Agreement controls for the Local Website Plan.
              </p>
            </section>

            <section>
              <h2>2. Standard Plan Scope</h2>
              <p>Provider will design, launch, host, and maintain a small-business website that ordinarily includes:</p>
              <ul>
                <li>Approximately five core pages, based on the Client&apos;s business needs</li>
                <li>Responsive mobile and desktop design</li>
                <li>Contact or quote-request form and click-to-call links</li>
                <li>Map, service-area, or Google Business Profile connection where appropriate</li>
                <li>Basic page titles, descriptions, sitemap, indexing setup, analytics, and structured data</li>
                <li>Managed hosting, SSL, routine monitoring, backups, and technical maintenance</li>
                <li>Up to 30 minutes of minor text, image, hours, or service-detail updates per billing month</li>
              </ul>
              <p>
                The plan does not include additional pages, major redesigns, e-commerce, custom applications, advanced
                booking systems, paid advertising, ongoing SEO campaigns, professional photography, extensive copywriting,
                or third-party subscription fees unless added in writing.
              </p>
            </section>

            <section>
              <h2>3. Fees, Billing, and Initial Term</h2>
              <ul>
                <li>A non-refundable $150 setup fee is due before work begins.</li>
                <li>The recurring service fee is $100 per month.</li>
                <li>The initial service term is 12 months, beginning on the setup-payment date.</li>
                <li>After the initial term, service continues month-to-month until canceled with 30 days&apos; written notice.</li>
                <li>If Client ends service before the initial term expires, the remaining monthly fees for that term remain due unless Provider agrees otherwise in writing.</li>
                <li>Client authorizes the recurring payment method selected during secure checkout.</li>
              </ul>
            </section>

            <section>
              <h2>4. Client Responsibilities</h2>
              <p>
                Client will provide accurate contact, service, pricing, and service-area information; logos, photos, and
                content Client has permission to use; timely feedback and approvals; and required access to the domain,
                analytics, business profile, or related accounts. Client is responsible for reviewing facts, claims,
                spelling, pricing, legal notices, and industry-specific requirements before approving launch.
              </p>
            </section>

            <section>
              <h2>5. Schedule, Review, and Changes</h2>
              <p>
                Work begins after payment and complete onboarding information are received. Delivery estimates depend on
                Client responsiveness, content readiness, scope, and third-party services. Client will receive an opportunity
                to review the website before launch. Requests that change the agreed scope will be quoted separately and may
                change the schedule.
              </p>
            </section>

            <section>
              <h2>6. Domain and Hosting</h2>
              <p>
                The domain should be registered in Client&apos;s legal or business name whenever technically possible. Client
                owns a client-registered domain and remains responsible for its registration and renewal fees. Domain,
                premium-domain, transfer, and specialty extension fees are separate unless included in writing. Managed
                hosting is included only while the monthly plan is active and paid.
              </p>
            </section>

            <section>
              <h2>7. Website Materials and Ownership</h2>
              <p>
                Client retains ownership of Client-supplied logos, photographs, trademarks, and content. Provider retains
                ownership of pre-existing and reusable code, systems, components, methods, and licensed tools. During active
                service, Client receives the right to use the managed website for Client&apos;s business. Any export, migration,
                or buyout must be technically feasible and separately agreed in writing; third-party licenses may not transfer.
              </p>
            </section>

            <section>
              <h2>8. Updates and Support</h2>
              <p>
                Included update time is limited to 30 minutes per billing month and does not roll over. Provider will confirm
                pricing before performing work outside that allowance. Support covers the managed website and included
                services, not unrelated devices, accounts, marketing platforms, or third-party systems unless separately agreed.
              </p>
            </section>

            <section>
              <h2>9. Search and Business Results</h2>
              <p>
                Provider will implement the basic website, analytics, indexing, and local SEO foundations included in the
                plan. Provider does not guarantee rankings, traffic, leads, sales, Google Business Profile approval, or other
                results controlled by competition, search platforms, algorithms, or Client operations.
              </p>
            </section>

            <section>
              <h2>10. Late Payment and Suspension</h2>
              <p>
                Provider may pause work, updates, support, or managed hosting after reasonable notice when an account is
                overdue. Suspension does not change ownership of Client&apos;s domain. Service may resume after outstanding
                balances and any disclosed restoration costs are paid.
              </p>
            </section>

            <section>
              <h2>11. End of Service</h2>
              <p>
                When service ends, hosting, maintenance, monitoring, backups, updates, and support end. Provider will
                reasonably cooperate with a domain transfer or an approved migration after the account is paid in full.
                Client should request any available export before the termination date.
              </p>
            </section>

            <section>
              <h2>12. Electronic Acceptance</h2>
              <p>
                Client may accept this Agreement electronically by checking the agreement acknowledgment during checkout and
                submitting payment. Electronic acceptance has the same effect as a handwritten signature. The signature
                lines below may also be used when a printed agreement is requested.
              </p>
            </section>
          </div>

          <section className="mt-12 grid gap-10 border-t-2 border-gray-900 pt-10 sm:grid-cols-2 print:break-inside-avoid">
            <div>
              <p className="font-bold text-gray-950">Client</p>
              <p className="mt-10 border-b border-gray-700">&nbsp;</p>
              <p className="mt-1 text-xs text-gray-600">Authorized signature</p>
              <p className="mt-8 border-b border-gray-700">&nbsp;</p>
              <p className="mt-1 text-xs text-gray-600">Printed name and title</p>
              <p className="mt-8 border-b border-gray-700">&nbsp;</p>
              <p className="mt-1 text-xs text-gray-600">Date</p>
            </div>
            <div>
              <p className="font-bold text-gray-950">Best Computer Tech LLC / Reliable Web Studio</p>
              <p className="mt-10 border-b border-gray-700">&nbsp;</p>
              <p className="mt-1 text-xs text-gray-600">Authorized signature</p>
              <p className="mt-8 border-b border-gray-700">&nbsp;</p>
              <p className="mt-1 text-xs text-gray-600">Printed name and title</p>
              <p className="mt-8 border-b border-gray-700">&nbsp;</p>
              <p className="mt-1 text-xs text-gray-600">Date</p>
            </div>
          </section>

          <footer className="agreement-document-footer mt-12 border-t border-gray-300 pt-5 text-xs text-gray-500">
            <p>Reliable Web Studio / Best Computer Tech LLC | Palm Bay, Florida | (321) 953-5199 | hello@reliablewebstudio.com</p>
          </footer>
        </article>
      </div>
    </main>
  );
}
