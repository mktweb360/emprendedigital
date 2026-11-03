// Directorio de empresas (piloto, apagado por defecto): las fichas viven en MktOS y el blog las lee desde el servidor.
// Se activa con DIRECTORIO_ACTIVO=true en Vercel. Variables: MKTOS_URL (p. ej. https://mktos360.app) y
// DIRECTORY_WEBHOOK_SECRET (el mismo valor que en MktOS). Sin ellas, el directorio no muestra nada.

export const DIRECTORIO_ACTIVO = process.env.DIRECTORIO_ACTIVO === "true";
export const DOMINIO = "emprendedigital.es";
export const BASE = "https://www.emprendedigital.es";

/** Versión del texto de condiciones que se guarda con cada alta. «borrador»: pendiente de revisión jurídica. */
export const TERMS_VERSION = "2026-11-borrador";

/** Texto exacto de la casilla opcional (se envía a MktOS como prueba de lo que vio la persona). */
export const MARKETING_TEXT =
  "Quiero recibir por correo ofertas, novedades y promociones de servicios y productos del grupo Mkt Web 360. Es opcional y puedo retirarlo cuando quiera.";

export const CATEGORIAS = [
  "Agencias de marketing y SEO",
  "Diseño y desarrollo web",
  "Software y herramientas",
  "Hosting y dominios",
  "Comercio electrónico y logística",
  "Asesoría y gestoría para autónomos",
  "Formación y mentoría",
  "Equipamiento y espacios de trabajo",
  "Creadores y producción de podcast y vídeo",
  "Pagos y financiación",
] as const;

export type Ficha = {
  slug: string;
  name: string;
  category: string | null;
  province: string | null;
  shortDescription: string | null;
  longDescription: string | null;
  websiteUrl: string | null;
  logoUrl: string | null;
  services: Array<{ name: string; description?: string; url?: string }>;
  indexable: boolean;
  plan: string;
  contactEmail: string | null;
  contactPhone: string | null;
  updatedAt: string;
};

function config() {
  const url = process.env.MKTOS_URL?.replace(/\/+$/, "");
  const secret = process.env.DIRECTORY_WEBHOOK_SECRET;
  return DIRECTORIO_ACTIVO && url && secret ? { url, secret } : null;
}

/** Fichas activas. Cualquier fallo o la falta de configuración devuelve una lista vacía: el blog nunca se rompe por esto. */
export async function getFichas(): Promise<Ficha[]> {
  const c = config();
  if (!c) return [];
  try {
    const res = await fetch(`${c.url}/api/webhooks/directory-list?domain=${DOMINIO}`, {
      headers: { "x-webhook-secret": c.secret },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { listings?: Ficha[] };
    return Array.isArray(json.listings) ? json.listings : [];
  } catch {
    return [];
  }
}

export type EventoPayload = { kind: string; slug: string; path?: string; referrer?: string; clientIp: string; userAgent: string };

/** Reenvía una visita o clic a MktOS (huella diaria allí). Sin configuración o con error, no hace nada. */
export async function enviarEvento(p: EventoPayload): Promise<void> {
  const c = config();
  if (!c) return;
  try {
    await fetch(`${c.url}/api/webhooks/directory-event`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-webhook-secret": c.secret },
      body: JSON.stringify({ ...p, domain: DOMINIO }),
      signal: AbortSignal.timeout(4000),
      cache: "no-store",
    });
  } catch {
    /* la medición es opcional */
  }
}

export type AltaPayload = {
  name: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  category?: string;
  province?: string;
  shortDescription?: string;
  longDescription?: string;
  websiteUrl?: string;
  logoUrl?: string;
  services: Array<{ name: string; description?: string; url?: string }>;
  termsAccepted: boolean;
  marketingConsent: boolean;
  _hp?: string;
  clientIp?: string;
};

export type AltaResultado = { ok: true } | { ok: false; error: string };

/** Envía el alta a MktOS desde el servidor (el secreto nunca llega al navegador). */
export async function enviarAlta(p: AltaPayload): Promise<AltaResultado> {
  const c = config();
  if (!c) return { ok: false, error: "El directorio no está disponible ahora mismo." };
  try {
    const res = await fetch(`${c.url}/api/webhooks/directory-apply`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-webhook-secret": c.secret },
      body: JSON.stringify({
        ...p,
        domain: DOMINIO,
        termsVersion: TERMS_VERSION,
        marketingConsentText: p.marketingConsent ? MARKETING_TEXT : undefined,
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (res.ok) return { ok: true };
    if (res.status === 429) return { ok: false, error: "Hay demasiadas solicitudes ahora mismo. Inténtalo de nuevo en un rato." };
    if (res.status === 400) {
      const j = (await res.json().catch(() => null)) as { error?: string } | null;
      return { ok: false, error: j?.error ?? "Revisa los datos del formulario." };
    }
    return { ok: false, error: "No hemos podido recibir tu solicitud. Inténtalo más tarde." };
  } catch {
    return { ok: false, error: "No hemos podido recibir tu solicitud. Inténtalo más tarde." };
  }
}
