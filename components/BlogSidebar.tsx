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
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide text-center mb-3">Publicidad</p>
          <AdSenseAd
            slot="4567890123"
            format="vertical"
            responsive={false}
            className="min-h-[250px]"
          />
        </div>
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
      </div>
    </aside>
  );
}
