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
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
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
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            FREE Hosting & Domain — 1 Year
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '18px',
            color: 'rgba(147, 197, 253, 0.8)',
            marginBottom: '32px',
          }}
        >
          Palm Bay, Melbourne & Florida&apos;s Space Coast
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            maxWidth: '900px',
          }}
        >
          Launch a lead-generating website fast.
        </div>

        <div
          style={{
            fontSize: '26px',
            color: '#93c5fd',
            marginBottom: '48px',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Fixed price. Professional. Built to convert.
        </div>

        {/* Two main offers */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(251, 191, 36, 0.6)',
              borderRadius: '20px',
              padding: '24px 32px',
            }}
          >
            <div style={{ fontSize: '16px', color: '#fbbf24', fontWeight: 700, marginBottom: '4px' }}>
              MOST POPULAR
            </div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>
              $499
            </div>
            <div style={{ fontSize: '16px', color: '#93c5fd' }}>
              24-Hour Landing Page
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              padding: '24px 32px',
            }}
          >
            <div style={{ fontSize: '16px', color: '#60a5fa', fontWeight: 700, marginBottom: '4px' }}>
              BEST VALUE
            </div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>
              $2,000
            </div>
            <div style={{ fontSize: '16px', color: '#93c5fd' }}>
              Website-in-a-Week
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '24px 32px',
            }}
          >
            <div style={{ fontSize: '16px', color: '#93c5fd', marginBottom: '4px' }}>
              + Growth, Authority & MVP
            </div>
            <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>
              $3.5k–$25k+
            </div>
            <div style={{ fontSize: '16px', color: '#93c5fd' }}>
              Custom builds
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            marginTop: 'auto',
            fontSize: '18px',
            color: 'rgba(147, 197, 253, 0.6)',
          }}
        >
          reliablewebstudio.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
