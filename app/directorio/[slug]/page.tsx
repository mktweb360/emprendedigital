import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { TrackedLink, TrackView } from "@/components/directorio/Track";
import { BASE, DIRECTORIO_ACTIVO, getFichas } from "@/lib/directorio";

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

export default async function FichaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = await ficha(slug);
  if (!f) notFound();
  const rel = "ugc nofollow noopener noreferrer";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <TrackView slug={f.slug} />
      <p className="text-sm mb-4"><Link href="/directorio" className="text-indigo-600 hover:underline">← Directorio</Link></p>
      <div className="flex items-start gap-4 mb-4">
        {f.logoUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={f.logoUrl} alt={`Logotipo de ${f.name}`} width={96} height={96} loading="lazy" referrerPolicy="no-referrer" className="w-24 h-24 object-contain rounded-lg border border-gray-100 bg-white" />
        )}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">{f.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{[f.category, f.province].filter(Boolean).join(" · ")}</p>
        </div>
      </div>

      {f.shortDescription && <p className="text-lg text-gray-700 mb-4">{f.shortDescription}</p>}
      {f.longDescription && <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{f.longDescription}</p>}

      {f.services.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Servicios y productos</h2>
          <ul className="space-y-3">
            {f.services.map((s, i) => (
              <li key={`${s.name}-${i}`} className="p-4 bg-gray-50 rounded-xl">
                <strong className="block text-gray-900 text-sm">{s.url ? <TrackedLink kind="click_product" slug={f.slug} href={s.url} target="_blank" rel={rel} className="text-indigo-600 hover:underline">{s.name}</TrackedLink> : s.name}</strong>
                {s.description && <span className="text-sm text-gray-600">{s.description}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="flex flex-wrap gap-3 mb-8">
        {f.websiteUrl && <TrackedLink kind="click_web" slug={f.slug} href={f.websiteUrl} target="_blank" rel={rel} className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">Visitar su web</TrackedLink>}
        {f.contactEmail && <TrackedLink kind="click_email" slug={f.slug} href={`mailto:${f.contactEmail}`} className="text-sm text-indigo-600 hover:underline self-center">{f.contactEmail}</TrackedLink>}
        {f.contactPhone && <TrackedLink kind="click_phone" slug={f.slug} href={`tel:${f.contactPhone.replace(/[^+\d]/g, "")}`} className="text-sm text-indigo-600 hover:underline self-center">{f.contactPhone}</TrackedLink>}
      </div>

      <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
        Esta ficha la ha creado la propia empresa y la hemos revisado antes de publicarla. Emprende Digital no garantiza la exactitud de sus datos ni recomienda
        sus servicios. ¿Es tu empresa?{" "}
        <Link href="/directorio/alta" className="text-indigo-600 hover:underline">Añade la tuya gratis</Link>.
      </p>
    </div>
  );
}
