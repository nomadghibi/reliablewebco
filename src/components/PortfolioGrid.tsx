'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  getPortfolioSearchText,
  industryOptions,
  statusOptions,
  tierOptions,
  type PortfolioItem,
  type PortfolioStatus,
  type PortfolioTier,
} from '@/data/portfolio';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

function normalizeTier(value: string | null): PortfolioTier | 'all' {
  const allowed: Array<PortfolioTier | 'all'> = ['all', '24-hour', 'week', 'growth', 'platform', 'authority'];
  return allowed.includes((value as PortfolioTier | 'all') || 'all') ? (value as PortfolioTier | 'all') || 'all' : 'all';
}

function normalizeStatus(value: string | null): PortfolioStatus | 'all' {
  const allowed: Array<PortfolioStatus | 'all'> = ['all', 'live', 'in-development'];
  return allowed.includes((value as PortfolioStatus | 'all') || 'all') ? (value as PortfolioStatus | 'all') || 'all' : 'all';
}

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tier = normalizeTier(searchParams.get('tier'));
  const industry = searchParams.get('industry') || 'all';
  const status = normalizeStatus(searchParams.get('status'));
  const query = searchParams.get('q') || '';

  const updateQuery = (key: 'tier' | 'industry' | 'status' | 'q', value: string) => {
    const next = new URLSearchParams(searchParams.toString());

    if (!value || value === 'all') {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    const target = next.toString() ? `${pathname}?${next.toString()}` : pathname;
    router.replace(target, { scroll: false });
  };

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      if (tier !== 'all' && item.tier !== tier) return false;
      if (industry !== 'all' && item.industry !== industry) return false;
      if (status !== 'all' && item.status !== status) return false;
      if (!normalizedQuery) return true;

      return getPortfolioSearchText(item).includes(normalizedQuery);
    });
  }, [items, tier, industry, status, query]);

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 mb-10 shadow-sm">
        <div className="grid md:grid-cols-4 gap-3">
          <label className="block">
            <span className="sr-only">Filter by tier</span>
            <select
              value={tier}
              onChange={(e) => updateQuery('tier', e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {tierOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="sr-only">Filter by industry</span>
            <select
              value={industry}
              onChange={(e) => updateQuery('industry', e.target.value === 'All Industries' ? 'all' : e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {industryOptions.map((option) => {
                const value = option === 'All Industries' ? 'all' : option;
                return (
                  <option key={option} value={value}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>

          <label className="block">
            <span className="sr-only">Filter by status</span>
            <select
              value={status}
              onChange={(e) => updateQuery('status', e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={query}
              onChange={(e) => updateQuery('q', e.target.value)}
              placeholder="Search title, industry, stack..."
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 py-12">No projects matched this filter set. Try clearing one or two filters.</p>
      )}
    </>
  );
}
