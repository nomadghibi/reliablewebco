import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ReliableWeb Studio',
  description: 'Terms of service for ReliableWeb Studio.',
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1>Terms of Service</h1>
            <p className="text-gray-600">Last Updated: January 29, 2026</p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services of ReliableWeb Studio / Best Computer Tech LLC (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>

            <h2>Services</h2>
            <p>ReliableWeb Studio provides web design and development services, including but not limited to:</p>
            <ul>
              <li>24-Hour Landing Pages</li>
              <li>Website-in-a-Week packages</li>
              <li>Growth Websites</li>
              <li>Authority Websites</li>
              <li>Platform / Web App MVPs</li>
              <li>Monthly care and maintenance plans</li>
            </ul>

            <h2>Service Delivery</h2>
            <h3>Timeline</h3>
            <p>
              Project timelines are estimates and begin upon receipt of full payment (or deposit, where applicable) and
              completion of the intake process. Timelines may vary based on client responsiveness and scope changes.
            </p>

            <h3>24-Hour Landing Page Guarantee</h3>
            <p>
              The 24-Hour Landing Page will be delivered within 24 hours after intake completion and payment receipt. If
              we miss this deadline and you have completed your obligations, you will receive a $100 refund.
            </p>

            <h3>Client Responsibilities</h3>
            <p>Clients must provide:</p>
            <ul>
              <li>Required business information</li>
              <li>Content, images, and branding materials</li>
              <li>Timely feedback during revision rounds</li>
              <li>Access to domain and hosting (if applicable)</li>
            </ul>

            <h2>Payment Terms</h2>
            <h3>Pricing</h3>
            <ul>
              <li>24-Hour Landing Page: $499 (100% upfront)</li>
              <li>Website-in-a-Week: $2,000 ($1,000 deposit, $1,000 before launch)</li>
              <li>Growth Website: $3,500-$4,500 (50% deposit, 50% before launch)</li>
              <li>Authority Website: $5,500-$7,500+ (50% deposit, 50% before launch)</li>
              <li>Platform / Web App MVP: $8,000-$25,000+ (quote after scope call)</li>
            </ul>

            <h3>Payment Methods</h3>
            <p>We accept payment via credit card, debit card, and electronic transfer.</p>

            <h3>Refunds</h3>
            <p>
              Deposits are non-refundable once work has commenced. Refunds may be issued at our discretion in cases of
              service failure or as specified in our guarantee.
            </p>

            <h2>Revisions</h2>
            <p>Revision rounds included:</p>
            <ul>
              <li>24-Hour Landing Page: 1 revision round</li>
              <li>Website-in-a-Week: 1 revision round</li>
              <li>Growth Website: 2 revision rounds</li>
            </ul>
            <p>
              Additional revision rounds beyond those included will be billed at our standard hourly rate. Revisions
              must be requested within 30 days of initial delivery.
            </p>

            <h2>Intellectual Property</h2>
            <h3>Ownership</h3>
            <p>
              Upon full payment, you own the website content and design. ReliableWeb Studio retains the right to display the project in
              our portfolio unless otherwise agreed in writing.
            </p>

            <h3>Third-Party Assets</h3>
            <p>
              Some assets (fonts, stock images, plugins) may be licensed from third parties. You are responsible for
              complying with applicable licenses.
            </p>

            <h2>Hosting and Maintenance</h2>
            <p>
              Hosting and ongoing maintenance are available through our monthly care plans. If you choose to host
              elsewhere, you are responsible for all hosting, security, and maintenance.
            </p>

            <h2>Limitations of Liability</h2>
            <p>
              ReliableWeb Studio is not liable for any indirect, incidental, or consequential damages arising from the use
              or inability to use our services. Our total liability shall not exceed the amount paid for the specific
              service.
            </p>

            <h2>Warranty Disclaimer</h2>
            <p>
              Services are provided &quot;as is&quot; without warranties of any kind. We make reasonable efforts to
              ensure quality but do not guarantee specific results or performance metrics.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate the service agreement with written notice. Upon termination, you will receive
              all completed work. Deposits are non-refundable.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting
              to our website. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts
              of Florida.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:hello@reliablewebco.com" className="text-primary-600">
                  hello@reliablewebco.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+13219535199" className="text-primary-600">
                  (321) 953-5199
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
