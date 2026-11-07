import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Logo, InsigniaRevisada, dominioDe } from "@/components/directorio/Logo";
import { TrackedLink, TrackView } from "@/components/directorio/Track";
import { BASE, DIRECTORIO_ACTIVO, getFichas, type Ficha } from "@/lib/directorio";

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

/** Servicios agrupados por categoría, en el orden en que aparece cada una; los que no la tienen van al final en «Otros servicios». */
function agrupar(servicios: Servicio[]): Array<{ id: string; nombre: string; items: Servicio[] }> {
  const orden: string[] = [];
  const porNombre = new Map<string, Servicio[]>();
  const sueltos: Servicio[] = [];
  for (const s of servicios) {
    const g = s.group?.trim();
    if (!g) { sueltos.push(s); continue; }
    if (!porNombre.has(g)) { porNombre.set(g, []); orden.push(g); }
    porNombre.get(g)!.push(s);
  }
  const out = orden.map((n, i) => ({ id: `cat-${i + 1}-${slugDe(n)}`, nombre: n, items: porNombre.get(n)! }));
  if (sueltos.length && out.length) out.push({ id: "cat-otros", nombre: "Otros servicios", items: sueltos });
  return out;
}

function ServicioCard({ s, slug, rel }: { s: Servicio; slug: string; rel: string }) {
  return (
    <li className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden">
      {s.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={s.imageUrl}
          alt={s.imageAlt?.trim() || `Imagen de ${s.name}`}
          width={800}
          height={450}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full aspect-[16/9] object-cover bg-gray-100"
        />
      )}
      <div className="p-4">
        <strong className="block text-gray-900 text-sm">
          {s.url ? (
            <TrackedLink kind="click_product" slug={slug} href={s.url} target="_blank" rel={rel} className="text-indigo-700 hover:underline">
              {s.name}
            </TrackedLink>
          ) : (
            s.name
          )}
        </strong>
        {s.description && <span className="block text-sm text-gray-600 mt-1">{s.description}</span>}
      </div>
    </li>
  );
}

export default async function FichaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = await ficha(slug);
  if (!f) notFound();
  const rel = "ugc nofollow noopener noreferrer";
  const dominio = dominioDe(f.websiteUrl);
  const tieneContacto = !!(f.contactEmail || f.contactPhone);
  const grupos = agrupar(f.services);
  // El índice de categorías solo sale si hay al menos dos: con una sola, o ninguna, la lista plana es más clara.
  const conCategorias = grupos.length >= 2;
  const parecidas = f.category
    ? (await getFichas()).filter((o) => o.slug !== f.slug && o.category === f.category).slice(0, 3)
    : [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-12">
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
        {f.headerImageUrl ? (
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
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{f.name}</h1>
            {f.shortDescription && <p className="text-lg text-gray-700 mt-3">{f.shortDescription}</p>}
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
          </div>
        </div>
      </header>

      {f.longDescription && (
        <section aria-labelledby="sobre" className="mb-8">
          <h2 id="sobre" className="text-xl font-extrabold text-gray-900 mb-3">Sobre {f.name}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{f.longDescription}</p>
        </section>
      )}

      {f.services.length > 0 && (
        <section aria-labelledby="servicios" className="mb-8">
          <h2 id="servicios" className="text-xl font-extrabold text-gray-900 mb-3">Servicios y productos</h2>
          {conCategorias ? (
            <>
              <nav aria-label="Categorías de servicios" className="flex flex-wrap gap-2 mb-5">
                {grupos.map((g) => (
                  <a
                    key={g.id}
                    href={`#${g.id}`}
                    className="text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-full px-3.5 py-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                    {g.nombre} <span className="text-indigo-400 font-normal">{g.items.length}</span>
                  </a>
                ))}
              </nav>
              {grupos.map((g) => (
                <div key={g.id} id={g.id} role="group" aria-labelledby={`${g.id}-t`} className="mb-6 scroll-mt-20">
                  <h3 id={`${g.id}-t`} className="text-base font-extrabold text-gray-900 mb-2">{g.nombre}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {g.items.map((s, i) => <ServicioCard key={`${s.name}-${i}`} s={s} slug={f.slug} rel={rel} />)}
                  </ul>
                </div>
              ))}
            </>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {f.services.map((s, i) => <ServicioCard key={`${s.name}-${i}`} s={s} slug={f.slug} rel={rel} />)}
            </ul>
          )}
        </section>
      )}

      {tieneContacto && (
        <section aria-labelledby="contacto" className="mb-8 rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
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

      <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
        Esta ficha la ha creado la propia empresa y la hemos revisado antes de publicarla. Emprende Digital no garantiza la exactitud de sus datos ni recomienda
        sus servicios. Los enlaces a su web van marcados como contenido enviado por usuarios. ¿Es tu empresa?{" "}
        <a href="/directorio-empresa/acceso" rel="nofollow" className="text-indigo-600 hover:underline">Accede a tu ficha</a> o{" "}
        <Link href="/directorio/alta" className="text-indigo-600 hover:underline">añade la tuya gratis</Link>.
      </p>
    </div>
  );
}
