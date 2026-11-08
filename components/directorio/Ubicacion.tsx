import type { ReactNode } from "react";

import { MapaConsentimiento } from "@/components/directorio/MapaConsentimiento";
import { redesFicha, type Ficha } from "@/lib/directorio";

type Negocio = NonNullable<Ficha["business"]>;

const REDES: Record<string, { nombre: string; dominios: string[]; icono: ReactNode }> = {
  facebook: { nombre: "Facebook", dominios: ["facebook.com", "fb.com"], icono: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
  instagram: { nombre: "Instagram", dominios: ["instagram.com"], icono: <><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.6" cy="6.4" r="1.3" /></> },
  linkedin: { nombre: "LinkedIn", dominios: ["linkedin.com"], icono: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
  x: { nombre: "X", dominios: ["x.com", "twitter.com"], icono: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /> },
  tiktok: { nombre: "TikTok", dominios: ["tiktok.com"], icono: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /> },
  youtube: { nombre: "YouTube", dominios: ["youtube.com", "youtu.be"], icono: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
  pinterest: { nombre: "Pinterest", dominios: [], icono: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /> },
  whatsapp: { nombre: "WhatsApp", dominios: [], icono: <><path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.9L2.3 21.8l4.8-1.3A9.8 9.8 0 1 0 12 2.2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8.6 7.6c.3-.4.9-.4 1.1 0l.8 1.6c.1.3 0 .6-.2.8l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.6c.2-.2.5-.3.8-.1l1.6.8c.4.2.4.8 0 1.1-.6.6-1.5 1-2.4.8-2.8-.7-5-2.9-5.7-5.7-.2-.9.1-1.5.7-2.1z" /></> },
  telegram: { nombre: "Telegram", dominios: [], icono: <path d="M21.9 3.6 2.6 11c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.6.5.8 1 .8s.7-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.2 1.8-.8l3.2-15c.3-1.3-.5-1.9-1.6-1.4zM8.7 13.5l9.7-6.1c.5-.3.9-.1.5.2l-8.1 7.3-.3 3.4-1.8-4.8z" /> },
  threads: { nombre: "Threads", dominios: [], icono: <text x="12" y="17.5" textAnchor="middle" fontSize="17" fontWeight="700" fontFamily="Arial, sans-serif">@</text> },
  spotify: { nombre: "Spotify", dominios: [], icono: <><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M6.6 9.4c3.6-1 7.6-.7 10.9 1M7.2 12.6c3-.8 6.1-.5 8.8 1M7.9 15.5c2.4-.6 4.7-.4 6.8.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></> },
  other: { nombre: "Enlace", dominios: [], icono: <path d="M10.6 13.4a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 1 0-5-5l-1 1M13.4 10.6a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> },
};

/** Iconos de las redes sociales de la empresa (planes de pago): lista validada de redes (hasta 20). */
export function RedesSociales({ social, rel }: { social: unknown; rel: string }) {
  const items = redesFicha(social);
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap items-center gap-2" aria-label="Redes sociales">
      {items.map(({ net, url }, i) => {
        const r = REDES[net] ?? REDES.other;
        const nombre = net === "other" ? new URL(url).hostname.replace(/^www\./, "") : r.nombre;
        return (
          <li key={`${net}-${i}`}>
            <a
              href={url}
              target="_blank"
              rel={rel}
              aria-label={`${nombre} (se abre en una pestaña nueva)`}
              title={nombre}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">{r.icono}</svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** «Dónde estamos»: dirección, datos de la empresa, horario y mapa (que el visitante carga al pulsar). */
export function UbicacionSeccion({ nombre, negocio, telefono, rel }: { nombre: string; negocio: Negocio; telefono: string | null; rel: string }) {
  const direccion = [negocio.street, [negocio.postal, negocio.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");
  const hayDatos = direccion || negocio.legal_name || negocio.tax_id || negocio.hours;
  if (!hayDatos) return null;
  const consulta = encodeURIComponent(direccion || nombre);
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-t" className="mb-10 max-w-3xl scroll-mt-24">
      <h2 id="ubicacion-t" className="text-xl font-extrabold text-gray-900 mb-4">Dónde estamos</h2>
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          {direccion && (<div><dt className="font-semibold text-gray-900">Dirección</dt><dd className="mt-0.5 text-gray-700"><address className="not-italic">{direccion}</address></dd></div>)}
          {telefono && (<div><dt className="font-semibold text-gray-900">Teléfono</dt><dd className="mt-0.5 text-gray-700">{telefono}</dd></div>)}
          {negocio.hours && (<div><dt className="font-semibold text-gray-900">Horario</dt><dd className="mt-0.5 text-gray-700">{negocio.hours}</dd></div>)}
          {negocio.legal_name && (<div><dt className="font-semibold text-gray-900">Razón social</dt><dd className="mt-0.5 text-gray-700">{negocio.legal_name}</dd></div>)}
          {negocio.tax_id && (<div><dt className="font-semibold text-gray-900">CIF / NIF</dt><dd className="mt-0.5 text-gray-700">{negocio.tax_id}</dd></div>)}
        </dl>
        {direccion && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={`https://www.google.com/maps/search/?api=1&query=${consulta}`} target="_blank" rel={rel} className="inline-flex items-center rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
              Cómo llegar<span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </div>
        )}
        {negocio.map && direccion && <MapaConsentimiento consulta={consulta} nombre={nombre} />}
      </div>
    </section>
  );
}
