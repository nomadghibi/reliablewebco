import Link from 'next/link';
import type { PortfolioItem } from '@/data/portfolio';

const tierColorClasses: Record<PortfolioItem['tier'], string> = {
  '24-hour': 'from-yellow-50 to-accent-50 border-yellow-100 text-yellow-700',
  week: 'from-amber-50 to-orange-50 border-amber-100 text-amber-700',
  growth: 'from-cyan-50 to-blue-50 border-cyan-100 text-cyan-700',
  platform: 'from-primary-50 to-accent-50 border-primary-100 text-primary-700',
  authority: 'from-violet-50 to-indigo-50 border-violet-100 text-violet-700',
};

export default function FeaturedProject({ item }: { item: PortfolioItem }) {
  const colorClasses = tierColorClasses[item.tier] || tierColorClasses.week;

  return (
    <article className={`bg-gradient-to-br ${colorClasses} rounded-2xl overflow-hidden shadow-xl border`}>
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
        <div>
          <div className="inline-block bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded mb-4">
            {item.category}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{item.title}</h3>
          <p className="text-lg text-gray-700 mb-6">{item.description}</p>

          <div className="mb-6">
            <h4 className="font-bold text-lg mb-3 text-gray-900">Outcome Highlights</h4>
            <ul className="space-y-2">
              {item.caseStudy.outcome.slice(0, 3).map((point) => (
                <li key={point} className="flex items-start">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={`/portfolio/${item.slug}`} className="btn-primary inline-flex items-center gap-2">
              View Case Study
            </Link>
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Visit Live Site
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
            <div className="text-sm font-bold uppercase tracking-wide mb-4 text-gray-700">Project Snapshot</div>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gray-500">Industry</dt>
                <dd className="font-semibold text-gray-900">{item.industry}</dd>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <dt className="text-gray-500">Timeline</dt>
                <dd className="font-semibold text-gray-900">{item.caseStudy.timeline}</dd>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <dt className="text-gray-500">Stack</dt>
                <dd className="font-semibold text-gray-900">{item.stack.join(' • ')}</dd>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <dt className="text-gray-500">Status</dt>
                <dd className="font-semibold text-gray-900">{item.status === 'live' ? 'Live in production' : 'In development'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}
