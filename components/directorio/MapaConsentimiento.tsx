"use client";

import { useState } from "react";

/**
 * Mapa de Google que solo se carga cuando el visitante lo pide: hasta entonces la página no contacta con Google ni deja cookies
 * suyas (consentimiento por acción expresa). El mapa se incrusta con la dirección de la ficha, sin clave de API.
 */
export function MapaConsentimiento({ consulta, nombre }: { consulta: string; nombre: string }) {
  const [cargado, setCargado] = useState(false);
  if (cargado) {
    return (
      <iframe
        title={`Mapa de la ubicación de ${nombre}`}
        src={`https://www.google.com/maps?q=${consulta}&output=embed`}
        className="mt-4 h-72 w-full rounded-lg border border-gray-200"
        loading="lazy"
        referrerPolicy="no-referrer"
        allowFullScreen
      />
    );
  }
  return (
    <div className="mt-4 flex flex-col items-start gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
      <button type="button" onClick={() => setCargado(true)} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2">
        Ver mapa
      </button>
      <p className="text-xs text-gray-600">Al pulsar, se carga el mapa de Google Maps y Google puede usar cookies propias.</p>
    </div>
  );
}
