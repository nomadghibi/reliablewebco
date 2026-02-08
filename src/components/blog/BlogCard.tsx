import Link from 'next/link';
import type { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const publishedLabel = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-primary-300 hover:shadow-md transition-all">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-800">
          {post.category}
        </span>
        <span className="text-xs text-gray-500">{publishedLabel}</span>
        <span className="text-xs text-gray-500">{post.readingTime}</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary-700 transition-colors">
          {post.title}
        </Link>
      </h2>

      <p className="text-gray-700 mb-4">{post.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.cityFocus.map((city) => (
          <span key={city} className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
            {city}
          </span>
        ))}
      </div>

      <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800">
        Read Article
        <span aria-hidden="true" className="ml-1">{'->'}</span>
      </Link>
    </article>
  );
}
