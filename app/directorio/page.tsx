import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Logo, InsigniaRevisada } from "@/components/directorio/Logo";
import { BASE, DIRECTORIO_ACTIVO, getFichas, type Ficha } from "@/lib/directorio";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const fichas = DIRECTORIO_ACTIVO ? await getFichas() : [];
  return {
    title: "Directorio de empresas para emprender",
    description: "Empresas, agencias y herramientas para emprendedores digitales. Las fichas las crean las propias empresas y las revisamos antes de publicarlas.",
    alternates: { canonical: `${BASE}/directorio` },
    // Mientras haya pocas fichas, la página no se indexa (un directorio casi vacío es contenido pobre).
    robots: fichas.length >= 5 ? { index: true, follow: true } : { index: false, follow: true },
  };
}

function Tarjeta({ f }: { f: Ficha }) {
  return (
    <li>
      <Link
        href={`/directorio/${f.slug}`}
        className="flex gap-4 p-4 h-full border border-gray-200 rounded-xl bg-white hover:border-indigo-200 hover:shadow-sm transition-all"
      >
        <Logo f={f} size={56} />
        <span className="min-w-0 block">
          <span className="block text-base font-bold text-gray-900 leading-snug">{f.name}</span>
          <span className="block text-xs text-gray-500 mt-0.5">{[f.category, f.province].filter(Boolean).join(" · ")}</span>
          {f.shortDescription && <span className="block text-sm text-gray-700 mt-2 line-clamp-3">{f.shortDescription}</span>}
          <span className="inline-block mt-2"><InsigniaRevisada /></span>
        </span>
      </Link>
    </li>
  );
}

export default async function DirectorioPage() {
  if (!DIRECTORIO_ACTIVO) notFound();
  const fichas = await getFichas();
  const porCategoria = new Map<string, Ficha[]>();
  for (const f of fichas) {
    const k = f.category ?? "Otras empresas";
    porCategoria.set(k, [...(porCategoria.get(k) ?? []), f]);
  }
  const grupos = [...porCategoria.entries()].sort(([a], [b]) => a.localeCompare(b, "es"));
  const agrupar = grupos.length > 1;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <nav aria-label="Migas de pan" className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center gap-1.5">
          <li><Link href="/" className="hover:text-indigo-600">Inicio</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" className="text-gray-700 font-medium">Directorio</li>
        </ol>
      </nav>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Directorio de empresas para emprender</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        Agencias, herramientas y servicios para emprendedores digitales. Cada ficha la crea la propia empresa y la revisamos antes de publicarla;
        los enlaces a sus webs van marcados como contenido enviado por usuarios.
      </p>
      <p className="mb-8">
        <Link href="/directorio/alta" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
          Añade tu empresa gratis
        </Link>
      </p>

      {fichas.length === 0 ? (
        <p className="p-6 bg-gray-50 rounded-xl text-gray-600 text-sm">Todavía no hay empresas publicadas. Sé de las primeras en aparecer.</p>
      ) : agrupar ? (
        <div className="space-y-10">
          {grupos.map(([cat, lista]) => (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2 id={`cat-${cat}`} className="text-xl font-extrabold text-gray-900 mb-4">{cat}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">{lista.map((f) => <Tarjeta key={f.slug} f={f} />)}</ul>
            </section>
          ))}
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">{fichas.map((f) => <Tarjeta key={f.slug} f={f} />)}</ul>
      )}
    </div>
  );
}
