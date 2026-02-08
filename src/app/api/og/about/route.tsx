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
              background: 'rgba(255,255,255,0.15)',
              color: '#93c5fd',
              padding: '8px 20px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            About Us
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
          Palm Bay, Melbourne &amp; Florida&apos;s Space Coast
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            maxWidth: '900px',
          }}
        >
          15+ Years Serving Florida&apos;s Space Coast
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
          Fast launch. Clear pricing. Built to convert.
        </div>

        {/* Differentiators */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '20px 28px',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '4px' }}>⚡</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
              Speed Without Sacrifice
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '20px 28px',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '4px' }}>💰</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
              Fixed Pricing
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '20px 28px',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '4px' }}>🎯</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
              Conversion-First
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
          reliablewebstudio.com/about
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
