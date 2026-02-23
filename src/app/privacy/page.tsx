import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Reliable Web Studio',
  description: 'Privacy policy for Reliable Web Studio.',
  openGraph: {
    title: 'Privacy Policy | Reliable Web Studio',
    description: 'Read the Privacy Policy for Reliable Web Studio.',
    url: 'https://www.reliablewebstudio.com/privacy',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Reliable Web Studio Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Reliable Web Studio',
    description: 'Read the Privacy Policy for Reliable Web Studio.',
    images: ['/api/og'],
  },
  alternates: {
    canonical: 'https://www.reliablewebstudio.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1>Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: January 29, 2026</p>

            <h2>Introduction</h2>
            <p>
              Reliable Web Studio / Best Computer Tech LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out a contact form</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage with our services</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name and details</li>
              <li>Other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process your requests for services</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              with:
            </p>
            <ul>
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Legal and regulatory authorities, as required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of
              transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance your experience on our website. You can
              set your browser to refuse cookies, but some features of our site may not function properly.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of
              these websites. We encourage you to review their privacy policies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by the
              &quot;Last Updated&quot; date at the top of this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:hello@reliablewebstudio.com" className="text-primary-600">
                  hello@reliablewebstudio.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+13219535199" className="text-primary-600">
                  (321) 953-5199
                </a>
              </li>
            </ul>

            <div className="not-prose mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Related Pages</h2>
              <p className="text-gray-700 mb-4">
                Review service terms, pricing, and contact options before starting your project.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/terms" className="btn-secondary">Terms of Service</Link>
                <Link href="/pricing" className="btn-secondary">Pricing</Link>
                <Link href="/contact" className="btn-secondary">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
