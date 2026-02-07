import Link from 'next/link';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Launch a lead-generating website fast — fixed price, professional, and built to convert.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Get a modern landing page <strong>in 24 hours</strong> or a complete <strong>5-page website in 7 days</strong>. Designed to generate <strong>calls, form leads, and bookings</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start My $499 Page
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Book a 10-Minute Call
              </Link>
            </div>

            <p className="text-sm text-gray-500">Speed + quality without agency timelines.</p>
          </div>
        </div>
      </section>

      {/* SUCCESS / OUTCOME STRIP */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">✓</div>
              <div className="font-semibold">More calls</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">✓</div>
              <div className="font-semibold">More form leads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">✓</div>
              <div className="font-semibold">Clear message</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">✓</div>
              <div className="font-semibold">Fast load speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">✓</div>
              <div className="font-semibold">Mobile-first</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / AGITATE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Most small business websites fail for 3 reasons:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐌</span>
                </div>
                <h3 className="text-xl font-bold mb-2">They load slow</h3>
                <p className="text-gray-600">Nobody waits 5 seconds for your site to load</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤔</span>
                </div>
                <h3 className="text-xl font-bold mb-2">They confuse people</h3>
                <p className="text-gray-600">Visitors can&apos;t figure out what you do or how to contact you</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❌</span>
                </div>
                <h3 className="text-xl font-bold mb-2">No clear action</h3>
                <p className="text-gray-600">No prominent phone number or contact form</p>
              </div>
            </div>
            <p className="text-center text-xl text-gray-700 mt-12 font-semibold">
              That&apos;s why you&apos;re &quot;online&quot;… but still not winning jobs.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER CARDS */}
      <section id="offers" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 24-Hour Landing Page */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-accent-500">
              <div className="text-accent-600 font-bold text-sm uppercase mb-2">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">24-Hour Landing Page</h3>
              <div className="text-4xl font-bold mb-6">
                $499
                <span className="text-base font-normal text-gray-600"></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Built for calls/leads</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Mobile-first design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>CTA buttons everywhere</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1 revision round</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-accent w-full text-center">
                Buy Now
              </Link>
            </div>

            {/* Website-in-a-Week */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-primary-600 font-bold text-sm uppercase mb-2">Best Value</div>
              <h3 className="text-2xl font-bold mb-2">Website-in-a-Week</h3>
              <div className="text-4xl font-bold mb-6">
                $2,000
                <span className="text-base font-normal text-gray-600"></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>5 pages (Home, About, Services, Service Area, Contact)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Strong CTA structure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Forms routed to email</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Basic SEO + indexing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1 revision round</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center">
                Book Call
              </Link>
            </div>

            {/* Growth Website */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-gray-600 font-bold text-sm uppercase mb-2">For Growth</div>
              <h3 className="text-2xl font-bold mb-2">Growth Website</h3>
              <div className="text-4xl font-bold mb-6">
                $3,500+
                <span className="text-base font-normal text-gray-600"></span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>8-12 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Dedicated service pages for SEO</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>FAQ + Reviews sections</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Stronger local SEO structure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>2 revision rounds</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary w-full text-center">
                Book Call
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
              View Full Pricing Details →
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF (Portfolio Preview) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-4">Built to Convert. Not Just Look Nice.</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every project is designed with one goal: get you more leads and sales.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">Project {i}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sample Project {i}</h3>
                  <p className="text-gray-600 mb-4">
                    Clean, fast, mobile-first design built to generate leads.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded">
                      Landing Page
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Intake</h3>
              <p className="text-gray-600">15-minute call to understand your business and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Build</h3>
              <p className="text-gray-600">I build your site fast with proven conversion tactics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Review</h3>
              <p className="text-gray-600">One revision round to get it perfect</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Launch</h3>
              <p className="text-gray-600">Go live and start getting leads</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/process" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Our Guarantee</h2>
            <p className="text-xl mb-4">
              If you complete the intake and I miss the agreed deadline, you get $100 back.
            </p>
            <p className="text-lg">(No drama. No excuses.)</p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What do you need from me?',
                a: 'Business name, phone, email, service list, service area, 3 competitor links you respect, and logo (or text-only is fine).',
              },
              {
                q: 'Can you use my current domain?',
                a: 'Yes. I can work with your existing domain or help you set up a new one.',
              },
              {
                q: 'Do you do hosting?',
                a: 'Yes, included in our monthly care plans starting at $99/mo.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="Stop losing jobs to competitors with better websites."
        subtitle="Book a call. Or buy the $499 landing page right now."
        primaryCTA={{ text: 'Book a Call', href: '/contact' }}
        secondaryCTA={{ text: 'Buy Landing Page ($499)', href: '/contact' }}
        darkBg={true}
      />
    </main>
  );
}
