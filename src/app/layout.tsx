import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const sameAsLinks = [
  process.env.NEXT_PUBLIC_GBP_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
].filter(Boolean);

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reliablewebstudio.com"),
  title: "Reliable Web Studio — Managed Websites for Space Coast Small Businesses",
  description: "Professional websites for Palm Bay, Melbourne, and Brevard County small businesses. $150 setup + $100/month for design, hosting, maintenance, basic SEO, and support.",
  keywords: "web design Palm Bay FL, web design Melbourne FL, Space Coast web design, small business website Palm Bay, website design Brevard County, affordable small business websites",
  openGraph: {
    title: "Reliable Web Studio — Managed Websites for Space Coast Small Businesses",
    description: "$150 setup + $100/month. We build it, host it, maintain it, and help your business get found.",
    url: "https://www.reliablewebstudio.com",
    siteName: "Reliable Web Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Web Studio — Managed Websites for Space Coast Small Businesses",
    description: "$150 setup + $100/month. We build it, host it, maintain it, and help your business get found.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reliable Web Studio",
  legalName: "Best Computer Tech LLC",
  url: "https://www.reliablewebstudio.com",
  email: "hello@reliablewebstudio.com",
  telephone: "+1-321-953-5199",
  sameAs: sameAsLinks,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Reliable Web Studio",
  url: "https://www.reliablewebstudio.com",
  telephone: "+1-321-953-5199",
  email: "hello@reliablewebstudio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palm Bay",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.0345,
    longitude: -80.5887,
  },
  sameAs: sameAsLinks,
  areaServed: [
    { "@type": "City", name: "Palm Bay", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "AdministrativeArea", name: "Brevard County", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "State", name: "Florida" },
  ],
  priceRange: "$100/mo - $25000+",
  description: "Managed website service and custom website development for local service businesses in Palm Bay, Melbourne, Brevard County, and Florida's Space Coast.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Local Business Website Subscription" },
        price: "100",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "100",
          priceCurrency: "USD",
          billingIncrement: "P1M",
          description: "$150 setup plus $100 per month. 12-month initial service term.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "24-Hour Landing Page Sprint" },
        price: "499",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website-in-a-Week" },
        price: "2000",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Growth Website" },
        priceSpecification: { "@type": "PriceSpecification", minPrice: "3500", maxPrice: "4500", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Authority Website" },
        priceSpecification: { "@type": "PriceSpecification", minPrice: "5500", maxPrice: "7500", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Platform / Web App MVP" },
        priceSpecification: { "@type": "PriceSpecification", minPrice: "8000", maxPrice: "25000", priceCurrency: "USD" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
