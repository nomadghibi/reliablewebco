import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReliableWeb Studio — Launch a Lead-Generating Website Fast | 24-Hour Landing Pages",
  description: "Get a modern landing page in 24 hours or a complete 5-page website in 7 days. Fixed price, professional, and built to convert. Generate calls, form leads, and bookings.",
  keywords: "24 hour landing page, website in a week, lead generation website, conversion website, fast website launch",
  openGraph: {
    title: "ReliableWeb Studio — Launch a Lead-Generating Website Fast",
    description: "Get a modern landing page in 24 hours or a complete 5-page website in 7 days. Built to generate calls, form leads, and bookings.",
    type: "website",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
