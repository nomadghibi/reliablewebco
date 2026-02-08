import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reliablewebstudio.com"),
  title: "Reliable Web Studio — Launch a Lead-Generating Website Fast | 24-Hour Landing Pages",
  description: "Get a modern landing page in 24 hours or a complete website in 7 days (up to 8 pages). Fixed price, professional, and built to convert. Generate calls, form leads, and bookings.",
  keywords: "24 hour landing page, website in a week, lead generation website, conversion website, fast website launch",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Reliable Web Studio — Launch a Lead-Generating Website Fast",
    description: "Get a modern landing page in 24 hours or a complete website in 7 days (up to 8 pages). Built to generate calls, form leads, and bookings.",
    url: "https://reliablewebstudio.com",
    siteName: "Reliable Web Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Web Studio — Launch a Lead-Generating Website Fast",
    description: "Get a modern landing page in 24 hours or a complete website in 7 days (up to 8 pages). Built to generate calls, form leads, and bookings.",
  },
  alternates: {
    canonical: "https://reliablewebstudio.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reliable Web Studio",
  legalName: "Best Computer Tech LLC",
  url: "https://reliablewebstudio.com",
  email: "hello@reliablewebstudio.com",
  telephone: "+1-321-953-5199",
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Reliable Web Studio",
  url: "https://reliablewebstudio.com",
  telephone: "+1-321-953-5199",
  email: "hello@reliablewebstudio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palm Bay",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Palm Bay", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "AdministrativeArea", name: "Brevard County", containedInPlace: { "@type": "State", name: "Florida" } },
    { "@type": "State", name: "Florida" },
  ],
  priceRange: "$499 - $25000+",
  description: "Professional website development for local service businesses. 24-hour landing pages, websites in a week, and custom web app MVPs.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
