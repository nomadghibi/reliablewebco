import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-4">
              Reliable<span className="text-primary-400">WebCo</span>
            </div>
            <p className="text-sm text-gray-400">
              Fast launch. Clear pricing. Built to convert.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Best Computer Tech LLC
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pricing#landing-page" className="hover:text-white transition-colors">
                  24-Hour Landing Page
                </Link>
              </li>
              <li>
                <Link href="/pricing#website-in-a-week" className="hover:text-white transition-colors">
                  Website-in-a-Week
                </Link>
              </li>
              <li>
                <Link href="/pricing#growth-website" className="hover:text-white transition-colors">
                  Growth Website
                </Link>
              </li>
              <li>
                <Link href="/pricing#web-app" className="hover:text-white transition-colors">
                  Web App / Portal
                </Link>
              </li>
              <li>
                <Link href="/pricing#care-plans" className="hover:text-white transition-colors">
                  Care Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-white transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="tel:+13219535199"
                className="text-white font-semibold hover:text-primary-400 transition-colors"
              >
                (321) 953-5199
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {currentYear} ReliableWebCo / Best Computer Tech LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
