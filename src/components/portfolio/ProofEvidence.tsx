import Image from 'next/image';
import type { CaseStudyEvidence } from '@/data/portfolio';

interface ProofEvidenceProps {
  items: CaseStudyEvidence[];
}

export default function ProofEvidence({ items }: ProofEvidenceProps) {
  if (items.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50/40">
      <div className="container-custom max-w-6xl">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">Proof Evidence</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Measured Outcome Evidence</h2>
          <p className="text-gray-700">
            These KPI snapshots summarize tracked outcomes from this project. Metrics reflect observed periods in client reporting environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((evidence) => (
            <article key={`${evidence.label}-${evidence.metric}`} className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
              {evidence.image && (
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-gray-200 mb-4 bg-gray-100">
                  <Image
                    src={evidence.image}
                    alt={evidence.imageAlt || `${evidence.label} evidence image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">{evidence.label}</p>
              <p className="text-3xl font-bold text-gray-900 mb-3">{evidence.metric}</p>
              <p className="text-gray-700 mb-3">{evidence.detail}</p>
              <p className="text-xs text-gray-500">Source: {evidence.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
