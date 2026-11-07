import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BASE, CATEGORIAS, DIRECTORIO_ACTIVO, MARKETING_TEXT } from "@/lib/directorio";

import AltaForm from "./AltaForm";

export const metadata: Metadata = {
  title: "Añade tu empresa al directorio",
  description: "Alta gratuita en el directorio de empresas para emprender. Revisamos cada ficha antes de publicarla.",
  alternates: { canonical: `${BASE}/directorio/alta` },
  robots: { index: false, follow: true },
};

export default function AltaPage() {
  if (!DIRECTORIO_ACTIVO) notFound();
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <p className="text-sm mb-4"><Link href="/directorio" className="text-indigo-600 hover:underline">← Directorio</Link></p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Añade tu empresa al directorio</h1>
      <p className="text-gray-600 mb-8">
        El alta es gratuita. Creamos tu ficha con los datos que nos des y la revisamos antes de publicarla. El enlace a tu web se publica como
        contenido enviado por usuarios (no transmite autoridad en buscadores).
      </p>
      <p className="text-sm text-gray-600 mb-8 -mt-4">
        ¿Ya tienes ficha?{" "}
        <a href="/directorio-empresa/acceso" rel="nofollow" className="text-indigo-600 hover:underline font-semibold">Accede a tu ficha</a>.
      </p>
      <AltaForm categorias={CATEGORIAS} marketingTexto={MARKETING_TEXT} />
    </div>
  );
}
