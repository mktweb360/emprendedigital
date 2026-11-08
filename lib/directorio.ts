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
  /** Imagen de cabecera de la ficha (premium). Opcional: MktOS la enviará cuando exista el soporte; sin ella, la ficha no cambia. */
  headerImageUrl?: string | null;
  headerImageAlt?: string | null;
  /** Preguntas frecuentes y noticias de la empresa (plan Plus). Texto de la empresa: se vuelve a validar al pintarlo. */
  faqs?: Array<{ q: string; a: string }> | null;
  news?: Array<{ title: string; date?: string; summary?: string; url?: string }> | null;
  /** Cabecera premium (plan Plus): mensaje, botones y estilo sobre la imagen. El texto es de la empresa: se vuelve a validar al pintarlo. */
  headerHero?: {
    title?: string; subtitle?: string; btn1?: { text: string; url: string }; btn2?: { text: string; url: string };
    font?: string; textColor?: string; accentColor?: string; btnColor?: string;
  } | null;
  /** `imageUrl` e `imageAlt` por servicio o producto (premium), también opcionales. */
  services: Array<{
    name: string; description?: string; url?: string; group?: string | null; groupNote?: string | null; imageUrl?: string | null; imageAlt?: string | null;
    /** Destacado por la empresa y oferta con fecha de fin opcional (AAAA-MM-DD). Solo plan Plus. */
    featured?: boolean | null; offerText?: string | null; offerUntil?: string | null;
  }>;
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

/**
 * Red de seguridad: las fichas se prerrenderizan al desplegar y la verificación del blog (cumplimiento de Amazon Associates)
 * bloquea el despliegue si una página lleva «€» o reclamos como «chollo» o «más vendido». MktOS ya los rechaza al guardar; si uno
 * se colara, esa ficha se oculta (y se avisa en el registro) en lugar de romper el despliegue de todo el blog.
 */
const PROHIBIDO = /€|\d[\d.,]*\s?(euros?|eur)\b|chollo|más vendid[oa]s?|best ?seller|mejor(es)? precios?|precio más bajo|comparativa de precios/i;

function fichaSegura(f: Ficha): boolean {
  const h = f.headerHero;
  const textos = [f.name, f.shortDescription, f.longDescription, h?.title, h?.subtitle, h?.btn1?.text, h?.btn2?.text, ...(f.faqs ?? []).flatMap((x) => [x.q, x.a]), ...(f.news ?? []).flatMap((x) => [x.title, x.summary]), ...(f.services ?? []).flatMap((s) => [s.name, s.description, s.group, s.groupNote, s.offerText, s.imageAlt])];
  const ok = !PROHIBIDO.test(textos.filter(Boolean).join(" "));
  if (!ok) console.warn(`[directorio] ficha «${f.slug}» oculta: lleva precios en euros o reclamos de precio`);
  return ok;
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
    return Array.isArray(json.listings) ? json.listings.filter(fichaSegura) : [];
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
