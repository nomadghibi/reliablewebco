import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioItem } from '@/data/portfolio';

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const isLive = item.status === 'live';

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={`${item.title} website screenshot`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute top-3 right-3">
          <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {item.category}
          </span>
        </div>

        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${
              isLive ? 'bg-green-500' : 'bg-blue-500'
            }`}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
            {isLive ? 'LIVE' : 'IN DEVELOPMENT'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
          <span className="text-xs font-semibold text-gray-500">{item.year}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {item.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-block bg-gray-50 text-gray-700 text-xs px-2.5 py-1 rounded-md border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Link
            href={`/portfolio/${item.slug}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-primary-600 text-primary-700 font-semibold hover:bg-primary-50 transition-colors"
          >
            Case Study
          </Link>
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            {isLive ? 'Visit Live Site' : 'Preview Site'}
          </a>
        </div>
      </div>
    </article>
  );
}
