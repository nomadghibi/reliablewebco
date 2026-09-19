import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)',
          padding: '60px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.5px',
            }}
          >
            Reliable Web Studio
          </div>
          <div
            style={{
              marginLeft: 'auto',
              background: '#22c55e',
              color: '#ffffff',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            MANAGED WEBSITE | LOCAL SUPPORT
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Website pricing built for local businesses.
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#93c5fd',
            marginBottom: '48px',
          }}
        >
          Start managed or choose a larger custom build.
        </div>

        {/* Pricing pills */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { name: 'Local Website Setup', price: '$150', highlight: true },
            { name: 'Managed Website', price: '$100/mo', highlight: true },
            { name: '24h Landing Page', price: '$499', highlight: true },
            { name: 'Website-in-a-Week', price: '$2,000', highlight: false },
            { name: 'Growth Website', price: '$3,500+', highlight: false },
          ].map((pkg) => (
            <div
              key={pkg.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: pkg.highlight ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                border: pkg.highlight ? '2px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '16px 24px',
                minWidth: '180px',
              }}
            >
              <div style={{ fontSize: '15px', color: '#93c5fd', marginBottom: '4px' }}>
                {pkg.name}
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff' }}>
                {pkg.price}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            marginTop: 'auto',
            fontSize: '18px',
            color: 'rgba(147, 197, 253, 0.7)',
          }}
        >
          reliablewebstudio.com/pricing | Palm Bay, Melbourne & Florida&apos;s Space Coast
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
