"use client";

import AdSenseAd from "@/components/AdSenseAd";

/**
 * Sidebar para artículos del blog de emprendedigital.es
 * Solo visible en desktop (hidden lg:block).
 * 1 anuncio vertical AdSense + CTA opcional a tienda.
 */
export default function BlogSidebar({ ctaHref, ctaText }: {
  ctaHref?: string;
  ctaText?: string;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-6 space-y-6">
        <AdSenseAd placement="lateral" />
        {ctaHref && ctaText && (
          <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5 text-center">
            <p className="text-sm font-semibold text-indigo-800 mb-3">¿Buscas el mejor equipo?</p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors"
            >
              {ctaText}
            </a>
          </div>
        )}
        <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
          <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">Del equipo editor</p>
          <p className="text-sm text-gray-700 mb-2">¿Quieres que tu web te traiga clientes?</p>
          <a
            href="https://www.mktweb360.com/?utm_source=emprendedigital&utm_medium=referral&utm_campaign=sidebar"
            target="_blank"
            rel="nofollow noopener"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 underline"
          >
            Conoce Mkt Web 360
          </a>
        </div>
      </div>
    </aside>
  );
}
