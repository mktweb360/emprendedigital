import type { Ficha } from "@/lib/directorio";

/** Logo de la empresa; sin logo, una inicial sobre fondo neutro para que la cabecera no quede vacía. */
export function Logo({ f, size = 96 }: { f: Pick<Ficha, "name" | "logoUrl">; size?: number }) {
  const px = `${size}px`;
  if (f.logoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={f.logoUrl}
        alt={`Logotipo de ${f.name}`}
        width={size}
        height={size}
        loading="lazy"
        referrerPolicy="no-referrer"
        style={{ width: px, height: px }}
        className="object-contain rounded-xl border border-gray-100 bg-white p-1.5 shrink-0"
      />
    );
  }
  const inicial = (f.name.trim()[0] ?? "?").toUpperCase();
  return (
    <div
      aria-hidden="true"
      style={{ width: px, height: px, fontSize: `${Math.round(size * 0.42)}px` }}
      className="rounded-xl bg-indigo-50 text-indigo-700 font-extrabold flex items-center justify-center shrink-0"
    >
      {inicial}
    </div>
  );
}

/** Qué significa «Ficha revisada» (mismo sentido que la cláusula 4 de las condiciones). No es un aval ni una verificación de la empresa. */
export const AYUDA_REVISADA =
  "Ficha revisada: hemos comprobado que la ficha está completa y que no incumple nuestras reglas de contenido. No verificamos la identidad, la solvencia ni la calidad de la empresa, y no es una recomendación.";

/** Ficha de la empresa editora del directorio (MKTWEB360, S.L.U.): se rotula para que no parezca contenido de un tercero neutral. */
export function esFichaEditor(f: Pick<Ficha, "slug" | "websiteUrl">): boolean {
  if (f.slug === "mkt-web-360-slu") return true;
  try {
    const h = new URL(f.websiteUrl ?? "").hostname.toLowerCase().replace(/^www\./, "");
    return h === "mktweb360.com";
  } catch {
    return false;
  }
}

export function EtiquetaEditor() {
  return <span className="text-xs text-gray-500">Ficha de la empresa editora de este sitio</span>;
}

/** Insignia: todas las fichas publicadas pasan una revisión editorial básica antes de salir (la verificación del correo va aparte). */
export function InsigniaRevisada() {
  return (
    <span title={AYUDA_REVISADA} className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">
      <svg aria-hidden="true" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
      </svg>
      Ficha revisada
    </span>
  );
}

/** Dominio visible del enlace («ejemplo.com»), sin protocolo ni «www». */
export function dominioDe(url: string | null): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}
