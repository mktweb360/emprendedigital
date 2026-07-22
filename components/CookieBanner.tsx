"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "emprendedigital_consent_v2";
const LEGACY_STORAGE_KEY = "emprendedigital_consent";

type Consent = { advertising: boolean; analytics: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent({ advertising, analytics }: Consent) {
  const value = (granted: boolean) => (granted ? "granted" : "denied");
  window.dataLayer = window.dataLayer || [];
  const gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer!.push(args);
    });
  gtag("consent", "update", {
    ad_storage: value(advertising),
    ad_user_data: value(advertising),
    ad_personalization: value(advertising),
    analytics_storage: value(analytics),
  });
}

/**
 * Reads the v2 consent, migrating from the legacy key when present.
 * The legacy key stored either a bare "accepted" / "rejected" string or
 * a `{ state, analytics }` object, so both shapes are handled.
 */
function readStoredConsent(): Consent | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Partial<Consent>;
      return {
        advertising: parsed.advertising === true,
        analytics: parsed.analytics === true,
      };
    } catch {
      return null;
    }
  }

  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacy) return null;
  localStorage.removeItem(LEGACY_STORAGE_KEY);

  let migrated: Consent;
  if (legacy === "accepted") {
    migrated = { advertising: true, analytics: true };
  } else if (legacy === "rejected") {
    migrated = { advertising: false, analytics: false };
  } else {
    try {
      const parsed = JSON.parse(legacy) as { state?: string; analytics?: boolean };
      const accepted = parsed.state === "accepted";
      migrated = {
        advertising: accepted || parsed.analytics === true,
        analytics: accepted || parsed.analytics === true,
      };
    } catch {
      return null;
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
  return migrated;
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [advertisingOk, setAdvertisingOk] = useState(false);
  const [analyticsOk, setAnalyticsOk] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      setAdvertisingOk(stored.advertising);
      setAnalyticsOk(stored.analytics);
      updateGoogleConsent(stored);
    } else {
      setBannerOpen(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    function reopen() {
      setShowCustom(false);
      setBannerOpen(true);
    }
    window.addEventListener("openCookieBanner", reopen);
    return () => window.removeEventListener("openCookieBanner", reopen);
  }, []);

  function save(next: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    updateGoogleConsent(next);
    setConsent(next);
    setAdvertisingOk(next.advertising);
    setAnalyticsOk(next.analytics);
    setShowCustom(false);
    setBannerOpen(false);
  }

  return (
    <>
      {consent?.advertising && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6063067965030118"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      {hydrated && bannerOpen && showCustom && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
            <h2 className="text-lg font-bold mb-2 text-gray-900">Personalizar cookies</h2>
            <p className="text-sm text-gray-600 mb-4">
              Selecciona qué cookies deseas aceptar.
            </p>
            <label className="flex items-center gap-3 mb-3 cursor-pointer">
              <input type="checkbox" checked disabled className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                <strong>Cookies necesarias</strong> — siempre activas
              </span>
            </label>
            <label className="flex items-center gap-3 mb-3 cursor-pointer">
              <input
                type="checkbox"
                checked={advertisingOk}
                onChange={(e) => setAdvertisingOk(e.target.checked)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-sm text-gray-700">
                <strong>Cookies de publicidad</strong> — Google AdSense
              </span>
            </label>
            <label className="flex items-center gap-3 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsOk}
                onChange={(e) => setAnalyticsOk(e.target.checked)}
                className="w-4 h-4 accent-indigo-500"
              />
              <span className="text-sm text-gray-700">
                <strong>Cookies de analítica</strong> — medición de audiencia
              </span>
            </label>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() =>
                  save({ advertising: advertisingOk, analytics: analyticsOk })
                }
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold text-sm hover:bg-indigo-600 transition-colors"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}

      {hydrated && bannerOpen && !showCustom && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-600 flex-1">
              Usamos cookies para mostrar publicidad personalizada (Google AdSense) y mejorar tu experiencia.
              Consulta nuestra{" "}
              <a href="/politica-de-cookies" className="text-indigo-600 underline">
                Política de cookies
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => save({ advertising: false, analytics: false })}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={() => setShowCustom(true)}
                className="px-4 py-2 border border-indigo-400 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors"
              >
                Personalizar
              </button>
              <button
                onClick={() => save({ advertising: true, analytics: true })}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
