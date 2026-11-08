import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Logo, InsigniaRevisada, dominioDe, esFichaEditor } from "@/components/directorio/Logo";
import { DestacadosCarrusel, ServicioCard, ServiciosTabs, type Categoria, type ItemFicha } from "@/components/directorio/Servicios";
import { CabeceraPremium } from "@/components/directorio/CabeceraPremium";
import { FaqSeccion, NoticiasSeccion } from "@/components/directorio/FaqNoticias";
import { RedesSociales, UbicacionSeccion } from "@/components/directorio/Ubicacion";
import { TrackedLink, TrackView } from "@/components/directorio/Track";
import { BASE, CONTACTO_EMAIL, DIRECTORIO_ACTIVO, TITULAR, getFichas, type Ficha, redesFicha } from "@/lib/directorio";
import { ofertaVigente } from "@/lib/ofertas";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  if (!DIRECTORIO_ACTIVO) return [];
  return (await getFichas()).map((f) => ({ slug: f.slug }));
}

async function ficha(slug: string) {
  if (!DIRECTORIO_ACTIVO) return null;
  return (await getFichas()).find((f) => f.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = await ficha(slug);
  if (!f) return { title: "Ficha no encontrada", robots: { index: false, follow: false } };
  return {
    title: `${f.name.slice(0, 42)}: ficha del directorio`,
    description: (f.shortDescription ?? `Ficha de ${f.name} en el directorio de empresas para emprender.`).slice(0, 155),
    alternates: { canonical: `${BASE}/directorio/${f.slug}` },
    // Solo se indexan las fichas que MktOS marca como completas y activas.
    robots: f.indexable ? { index: true, follow: true } : { index: false, follow: true },
  };
}

/** JSON-LD con datos reales de la ficha. Sin Offer, Product ni valoraciones (lo prohíbe verify-build). */
function esquema(f: Ficha) {
  const url = `${BASE}/directorio/${f.slug}`;
  const org: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${url}#empresa`,
    name: f.name,
  };
  if (f.websiteUrl) org.url = f.websiteUrl;
  if (f.logoUrl) org.logo = f.logoUrl;
  if (f.headerImageUrl) org.image = f.headerImageUrl;
  if (f.shortDescription ?? f.longDescription) org.description = (f.shortDescription ?? f.longDescription)!.slice(0, 300);
  if (f.province) org.address = { "@type": "PostalAddress", addressRegion: f.province, addressCountry: "ES" };
  const b = f.business;
  if (b && f.plan && f.plan !== "free") {
    if (b.street || b.postal || b.city) {
      org.address = { "@type": "PostalAddress", ...(b.street ? { streetAddress: b.street } : {}), ...(b.postal ? { postalCode: b.postal } : {}), ...(b.city ? { addressLocality: b.city } : {}), ...(f.province ? { addressRegion: f.province } : {}), addressCountry: "ES" };
    }
    if (b.legal_name) org.legalName = b.legal_name;
    if (b.tax_id) org.taxID = b.tax_id;
    const redes = redesFicha(b.social).map((r) => r.url);
    if (redes.length) org.sameAs = redes;
  }
  if (f.contactEmail) org.email = f.contactEmail;
  if (f.contactPhone) org.telephone = f.contactPhone;
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${f.name}: ficha del directorio`,
        isPartOf: { "@type": "WebSite", name: "Emprende Digital", url: BASE },
        mainEntity: { "@id": `${url}#empresa` },
      },
      ...(f.faqs?.length ? [{
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: f.faqs.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
      }] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
          { "@type": "ListItem", position: 2, name: "Directorio de empresas", item: `${BASE}/directorio` },
          { "@type": "ListItem", position: 3, name: f.name, item: url },
        ],
      },
    ],
  };
}


type Servicio = Ficha["services"][number];

const slugDe = (t: string) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "grupo";

/** Fecha de hoy en Madrid (AAAA-MM-DD): las ofertas caducan al pasar su fecha de fin (la página se regenera cada hora). */
const hoyMadrid = () => new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });

/**
 * Categorías y subcategorías de la ficha, en el orden en que aparecen. La categoría de un servicio se escribe «Categoría» o
 * «Categoría > Subcategoría»; la frase de la categoría es la del primer servicio que la tenga. Los servicios sin categoría
 * van al final en «Otros servicios».
 */
function construirCategorias(items: ItemFicha[]): Categoria[] {
  const orden: string[] = [];
  const mapa = new Map<string, { nota: string | null; sueltos: ItemFicha[]; subOrden: string[]; subs: Map<string, ItemFicha[]> }>();
  const otros: ItemFicha[] = [];
  for (const it of items) {
    const g = it.group?.trim();
    if (!g) { otros.push(it); continue; }
    const [c, s] = g.split(">").map((x) => x.trim());
    if (!c) { otros.push(it); continue; }
    if (!mapa.has(c)) { mapa.set(c, { nota: null, sueltos: [], subOrden: [], subs: new Map() }); orden.push(c); }
    const m = mapa.get(c)!;
    if (!m.nota && it.groupNote?.trim()) m.nota = it.groupNote.trim();
    if (s) {
      if (!m.subs.has(s)) { m.subs.set(s, []); m.subOrden.push(s); }
      m.subs.get(s)!.push(it);
    } else m.sueltos.push(it);
  }
  const out: Categoria[] = orden.map((nombre, n) => {
    const m = mapa.get(nombre)!;
    const id = `cat-${n + 1}-${slugDe(nombre)}`;
    const subs = m.subOrden.map((s) => ({ id: `${id}-${slugDe(s)}`, nombre: s, items: m.subs.get(s)! }));
    return { id, nombre, nota: m.nota, sueltos: m.sueltos, subs, total: m.sueltos.length + subs.reduce((a, s) => a + s.items.length, 0) };
  });
  if (otros.length && out.length) out.push({ id: "cat-otros", nombre: "Otros servicios", nota: null, sueltos: otros, subs: [], total: otros.length });
  return out;
}

export default async function FichaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = await ficha(slug);
  if (!f) notFound();
  const pago = !!f.plan && f.plan !== "free";
  // Enlaces de pago: además de «ugc nofollow», «sponsored» (Google lo pide para enlaces patrocinados).
  const rel = pago ? "sponsored ugc nofollow noopener noreferrer" : "ugc nofollow noopener noreferrer";
  const dominio = dominioDe(f.websiteUrl);
  const tieneContacto = !!(f.contactEmail || f.contactPhone);
  const hoy = hoyMadrid();
  const items: ItemFicha[] = f.services.map((s: Servicio, i: number) => ({ ...s, i }));
  const categorias = construirCategorias(items);
  // Con al menos dos categorías, el módulo de categorías a la izquierda y tarjetas a la derecha; si no, lista plana.
  const conModulo = categorias.length >= 2;
  // Franja de arriba: primero las ofertas vigentes y después los destacados (carrusel de 3 columnas).
  const conOferta = items.filter((it) => ofertaVigente(it, hoy));
  const destacados = [...conOferta, ...items.filter((it) => !ofertaVigente(it, hoy) && it.featured)];
  const tituloDestacados = conOferta.length ? "Ofertas y productos destacados" : "Productos destacados";
  const parecidas = f.category
    ? (await getFichas()).filter((o) => o.slug !== f.slug && o.category === f.category).slice(0, 3)
    : [];

  return (
    <div className={`${conModulo ? "max-w-6xl" : "max-w-3xl"} mx-auto px-4 py-10 md:py-12`}>
      {f.indexable && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(esquema(f)) }} />
      )}
      <TrackView slug={f.slug} />

      <nav aria-label="Migas de pan" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link href="/" className="hover:text-indigo-600">Inicio</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/directorio" className="hover:text-indigo-600">Directorio</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" className="text-gray-700 font-medium">{f.name}</li>
        </ol>
      </nav>

      <header className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden mb-8">
        {f.headerHero && (f.headerHero.title || f.headerHero.subtitle || f.headerHero.btn1 || f.headerHero.btn2) ? (
          <CabeceraPremium f={f} hero={f.headerHero} rel={rel} />
        ) : f.headerImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={f.headerImageUrl}
            alt={f.headerImageAlt?.trim() || `Imagen de cabecera de ${f.name}`}
            width={1600}
            height={500}
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full aspect-[16/5] object-cover bg-gray-100"
          />
        ) : (
          <div className="h-2 bg-gradient-to-r from-indigo-600 to-violet-500" aria-hidden="true" />
        )}
        <div className="p-5 md:p-7 flex flex-col sm:flex-row sm:items-start gap-5">
          <Logo f={f} size={96} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {f.category && <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full px-2.5 py-1">{f.category}</span>}
              {f.province && <span className="text-xs text-gray-600 bg-gray-100 rounded-full px-2.5 py-1">{f.province}</span>}
              <InsigniaRevisada />
            </div>
            {esFichaEditor(f) && (
              <p className="text-sm text-gray-600 mb-2 rounded-lg bg-amber-50 border border-amber-100 px-3 py-2 max-w-3xl">
                <strong className="font-semibold text-gray-800">Ficha de la empresa editora de este sitio.</strong> Emprende Digital y este directorio los edita{" "}
                {TITULAR.razon}; esta ficha es suya.
              </p>
            )}
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{f.name}</h1>
            {f.shortDescription && <p className="text-lg text-gray-700 mt-3 max-w-3xl">{f.shortDescription}</p>}
            {f.websiteUrl && (
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <TrackedLink
                  kind="click_web"
                  slug={f.slug}
                  href={f.websiteUrl}
                  target="_blank"
                  rel={rel}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-6 py-3 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
                >
                  Visitar su web
                  <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                    <path d="M11 3a1 1 0 1 0 0 2h2.6L8.3 10.3a1 1 0 1 0 1.4 1.4L15 6.4V9a1 1 0 1 0 2 0V3h-6z" />
                    <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z" />
                  </svg>
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </TrackedLink>
                {dominio && <span className="text-sm text-gray-500">{dominio}</span>}
              </div>
            )}
            {pago && (f.contactPhone || redesFicha(f.business?.social).length > 0) && (
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {f.contactPhone && (
                  <TrackedLink
                    kind="click_phone"
                    slug={f.slug}
                    href={`tel:${f.contactPhone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-5 py-2.5 text-base font-bold text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="currentColor"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.1a1 1 0 0 1 .97.76l.7 2.8a1 1 0 0 1-.27.95L5.8 7.7a11 11 0 0 0 6.5 6.5l1.2-1.2a1 1 0 0 1 .95-.27l2.8.7a1 1 0 0 1 .75.97v2.1A1.5 1.5 0 0 1 16.5 18C8.5 18 2 11.5 2 3.5z" /></svg>
                    Llamar
                  </TrackedLink>
                )}
                <RedesSociales social={f.business?.social} rel={rel} />
              </div>
            )}
          </div>
        </div>
      </header>

      {f.longDescription && (
        <section aria-labelledby="sobre" className="mb-10 max-w-3xl">
          <h2 id="sobre" className="text-xl font-extrabold text-gray-900 mb-3">Sobre {f.name}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{f.longDescription}</p>
        </section>
      )}

      {destacados.length > 0 && <DestacadosCarrusel items={destacados} slug={f.slug} rel={rel} hoy={hoy} titulo={tituloDestacados} />}

      {items.length > 0 && (
        <section id="servicios" aria-labelledby="servicios-t" className="mb-10 scroll-mt-24">
          <h2 id="servicios-t" className="text-xl font-extrabold text-gray-900 mb-4">Servicios y productos</h2>
          {conModulo ? (
            <ServiciosTabs categorias={categorias} slug={f.slug} rel={rel} hoy={hoy} />
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((it) => <ServicioCard key={it.i} s={it} slug={f.slug} rel={rel} hoy={hoy} />)}
            </ul>
          )}
        </section>
      )}

      <FaqSeccion faqs={f.faqs ?? []} />
      <NoticiasSeccion news={f.news ?? []} slug={f.slug} rel={rel} />

      {pago && f.business && <UbicacionSeccion nombre={f.name} negocio={f.business} telefono={f.contactPhone ?? null} rel={rel} />}

      {tieneContacto && (
        <section aria-labelledby="contacto" className="mb-8 max-w-3xl rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
          <h2 id="contacto" className="text-base font-extrabold text-gray-900 mb-3">Contacto</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {f.contactEmail && (
              <TrackedLink kind="click_email" slug={f.slug} href={`mailto:${f.contactEmail}`} className="text-indigo-700 hover:underline break-all">
                {f.contactEmail}
              </TrackedLink>
            )}
            {f.contactPhone && (
              <TrackedLink kind="click_phone" slug={f.slug} href={`tel:${f.contactPhone.replace(/[^+\d]/g, "")}`} className="text-indigo-700 hover:underline">
                {f.contactPhone}
              </TrackedLink>
            )}
          </div>
        </section>
      )}

      {parecidas.length > 0 && (
        <section aria-labelledby="parecidas" className="mb-8">
          <h2 id="parecidas" className="text-xl font-extrabold text-gray-900 mb-3">Otras empresas de {f.category}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {parecidas.map((o) => (
              <li key={o.slug}>
                <Link href={`/directorio/${o.slug}`} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-white hover:border-indigo-200 hover:shadow-sm transition-all h-full">
                  <Logo f={o} size={44} />
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{o.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-xs text-gray-500 border-t border-gray-100 pt-4 max-w-3xl">
        Esta ficha la ha creado la propia empresa. «Ficha revisada» significa que hemos comprobado que está completa y que cumple nuestras reglas de
        contenido; no verificamos la identidad, la solvencia ni la calidad de la empresa, y no es una recomendación. Emprende Digital no garantiza la
        exactitud de sus datos. Los enlaces a su web van marcados como contenido {pago ? "patrocinado y enviado por usuarios" : "enviado por usuarios"}.{" "}
        <Link href="/directorio/condiciones" className="text-indigo-600 hover:underline">Condiciones del directorio</Link>. ¿Es tu empresa?{" "}
        <a href="/directorio-empresa/acceso" rel="nofollow" className="text-indigo-600 hover:underline">Accede a tu ficha</a> o{" "}
        <Link href="/directorio/alta" className="text-indigo-600 hover:underline">añade la tuya gratis</Link>.
      </p>
      <p className="text-xs text-gray-400 mt-2 max-w-3xl">
        <a
          href={`mailto:${CONTACTO_EMAIL}?subject=${encodeURIComponent(`Aviso sobre la ficha ${f.slug}`)}&body=${encodeURIComponent(`Ficha: ${BASE}/directorio/${f.slug}\n\nContenido concreto y motivo:\n\nMi nombre y correo:\n\nSi es un derecho mío (marca, imagen, autoría), cómo lo acredito:\n\nComunico este aviso de buena fe y lo que digo es exacto.`)}`}
          rel="nofollow"
          className="hover:text-indigo-600 hover:underline"
        >
          Avisar de un contenido
        </a>{" "}
        (ilegal o que vulnera tus derechos): respondemos en un máximo de 3 días laborables.
      </p>
    </div>
  );
}
