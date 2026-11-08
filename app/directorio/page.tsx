import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EtiquetaEditor, Logo, InsigniaRevisada, esFichaEditor } from "@/components/directorio/Logo";
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
          <span className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <InsigniaRevisada />
            {esFichaEditor(f) && <EtiquetaEditor />}
          </span>
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
      <p className="text-sm text-gray-500 mb-6 max-w-3xl">
        «Ficha revisada» significa que hemos comprobado que la ficha está completa y cumple nuestras reglas de contenido. No verificamos a la empresa ni
        es una recomendación. El orden es alfabético y no se paga por posición.{" "}
        <Link href="/directorio/condiciones" className="text-indigo-600 hover:underline">Condiciones del directorio</Link>.
      </p>
      <section aria-labelledby="para-empresas" className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 md:p-6">
        <h2 id="para-empresas" className="text-base font-extrabold text-gray-900 mb-1">Para empresas</h2>
        <p className="text-sm text-gray-600 mb-4 max-w-2xl">
          Si aún no tienes ficha, rellena el formulario de alta: es gratuito y la revisamos antes de publicarla. Si ya la tienes, entra con el correo
          de tu ficha y te enviamos un enlace de acceso, sin contraseña, para editarla y ver sus visitas.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/directorio/alta" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2">
            Añade tu empresa gratis
          </Link>
          {/* El panel vive en MktOS y el blog lo reescribe: enlace normal (no Link) y sin que lo sigan los buscadores. */}
          <a href="/directorio-empresa/acceso" rel="nofollow" className="inline-block bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2">
            Ya tengo ficha: acceder
          </a>
        </div>
      </section>

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
