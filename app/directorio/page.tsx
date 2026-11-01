import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BASE, DIRECTORIO_ACTIVO, getFichas } from "@/lib/directorio";

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

export default async function DirectorioPage() {
  if (!DIRECTORIO_ACTIVO) notFound();
  const fichas = await getFichas();
  const categorias = [...new Set(fichas.map((f) => f.category).filter((c): c is string => !!c))].sort();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
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
      ) : (
        <>
          {categorias.length > 1 && <p className="text-xs text-gray-500 mb-4">Categorías: {categorias.join(" · ")}</p>}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fichas.map((f) => (
              <li key={f.slug} className="p-5 border border-gray-200 rounded-xl bg-white">
                <h2 className="text-lg font-bold text-gray-900">
                  <Link href={`/directorio/${f.slug}`} className="hover:text-indigo-600">{f.name}</Link>
                </h2>
                <p className="text-xs text-gray-500 mt-1">{[f.category, f.province].filter(Boolean).join(" · ")}</p>
                {f.shortDescription && <p className="text-sm text-gray-700 mt-3 line-clamp-3">{f.shortDescription}</p>}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
