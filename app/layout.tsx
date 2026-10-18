// STAGED FIX — emprendedigital.es — app/layout.tsx
// CWV improvements applied on top of emprendedigital-schema-layout.tsx:
//   1. Added rel="preconnect" + dns-prefetch to AdSense domains.
//   2. Added google-adsense-account meta tag (was missing from live layout).
//   3. Geist next/font already present (from schema-layout.tsx) — kept as-is.
//   4. See emprendedigital-cwv-globals.css for the body font-family fix.
// Deploy: cp emprendedigital-cwv-layout.tsx ../emprendedigital/app/layout.tsx
//         cp emprendedigital-cwv-globals.css ../emprendedigital/app/globals.css

import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  description: "Portal especializado en herramientas de productividad digital, equipamiento para home office y recursos para emprendedores. Comparativas y análisis con criterio profesional.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: ["productividad digital", "trabajo remoto", "equipamiento home office", "sillas ergonómicas", "herramientas SaaS"],
  sameAs: ["https://www.instagram.com/empdedigitaloficial", "https://www.facebook.com/emprendedigital.es"],
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
        {/* CWV: preconexión a los dominios de AdSense */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* AdSense: el script se carga siempre; el consentimiento (RGPD / TCF v2.2) lo gestiona el
            mensaje certificado de Google configurado en AdSense > Privacidad y mensajes. */}
        <Script
          id="adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6063067965030118"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Analytics />
        {/* AdSense: verificación de la propiedad del sitio */}
        <meta name="google-adsense-account" content="ca-pub-6063067965030118" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
