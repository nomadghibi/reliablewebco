import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-primary-700 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-gray-900 font-semibold' : ''}>{item.label}</span>
              )}
              {!isLast && <span aria-hidden="true" className="text-gray-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
