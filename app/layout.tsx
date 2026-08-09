import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.emprendedigital.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Emprende Digital — Herramientas y equipamiento para emprendedores digitales",
    template: "%s | Emprende Digital",
  },
  description:
    "Guías de compra, análisis y comparativas de herramientas y equipamiento para emprendedores digitales, creadores de contenido y teletrabajadores. Portátiles, micrófonos, webcams, sillas ergonómicas y mucho más.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Emprende Digital",
  },
  twitter: {
    card: "summary_large_image",
    site: "@emprendedigital",
  },
  verification: {
    google: "mQ3vsd6JtXw_k52OlLUmIJuiE_4pfhubKPFvhsDMOPI",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Emprende Digital",
  url: SITE_URL,
  description:
    "Guías de compra y análisis de herramientas y equipamiento para emprendedores digitales y teletrabajadores.",
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Emprende Digital",
  legalName: "Mkt Web 360 SLU",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  taxID: "B87679304",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@emprendedigital.es",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      });
    `,
          }}
        />
        {/* AdSense is loaded conditionally by CookieBanner after consent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
