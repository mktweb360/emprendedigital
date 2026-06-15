"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "emprendedigital_consent";

type ConsentState = "pending" | "accepted" | "rejected" | "custom";

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>("pending");
  const [showCustom, setShowCustom] = useState(false);
  const [analyticsOk, setAnalyticsOk] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as { state: ConsentState; analytics: boolean };
      setConsent(parsed.state);
      setAnalyticsOk(parsed.analytics);
    }
  }, []);

  function save(state: ConsentState, analytics: boolean) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, analytics }));
    setConsent(state);
    setAnalyticsOk(analytics);
  }

  if (consent !== "pending") {
    return analyticsOk ? (
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6063067965030118"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    ) : null;
  }

  if (showCustom) {
    return (
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
          <label className="flex items-center gap-3 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={analyticsOk}
              onChange={(e) => setAnalyticsOk(e.target.checked)}
              className="w-4 h-4 accent-indigo-500"
            />
            <span className="text-sm text-gray-700">
              <strong>Cookies de publicidad</strong> — Google AdSense
            </span>
          </label>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => save("custom", analyticsOk)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold text-sm hover:bg-indigo-600 transition-colors"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
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
            onClick={() => save("rejected", false)}
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
            onClick={() => save("accepted", true)}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
