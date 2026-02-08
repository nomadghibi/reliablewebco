'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  liveUrl: string;
  isLive: boolean;
  inDevelopment?: boolean;
  image: string;
}

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Platforms', value: 'Platform / Web App MVP' },
  { label: 'Authority', value: 'Authority Website' },
  { label: 'Growth', value: 'Growth Website' },
  { label: 'Website-in-a-Week', value: 'Website-in-a-Week' },
  { label: '24-Hour', value: '24-Hour Landing Page' },
];

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? items
    : items.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Filter Chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              activeFilter === f.value
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700'
            }`}
          >
            {f.label}
            {f.value !== 'all' && (
              <span className="ml-1.5 text-xs opacity-70">
                ({items.filter((i) => i.category === f.value).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={`${item.title} website screenshot`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Status Badge */}
              {item.isLive && !item.inDevelopment && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
                    LIVE
                  </span>
                </div>
              )}
              {item.inDevelopment && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse" />
                    IN DEVELOPMENT
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

              {/* Feature Tags */}
              <div className="mb-5">
                <div className="flex flex-wrap gap-1.5">
                  {item.features.slice(0, 4).map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-50 text-gray-700 text-xs px-2.5 py-1 rounded-md border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                  {item.features.length > 4 && (
                    <span className="inline-block bg-gray-50 text-gray-500 text-xs px-2.5 py-1 rounded-md border border-gray-200">
                      +{item.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                {item.inDevelopment ? 'Preview Site' : 'View Live Site'}
                <svg aria-hidden="true" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">No projects in this category yet.</p>
      )}
    </>
  );
}
