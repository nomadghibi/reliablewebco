'use client';

export default function PrintAgreementButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-primary">
      Print or Save as PDF
    </button>
  );
}
