import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment, type ReactNode } from "react";

import { CONDICIONES } from "@/lib/condiciones-directorio";
import { BASE, CONTACTO_EMAIL, DIRECTORIO_ACTIVO, TERMS_FECHA, TERMS_VERSION } from "@/lib/directorio";

export const metadata: Metadata = {
  title: "Condiciones del directorio de empresas",
  description: "Condiciones de uso del directorio de empresas de Emprende Digital.",
  alternates: { canonical: `${BASE}/directorio/condiciones` },
  robots: { index: false, follow: true },
};

const enlace = "text-indigo-600 hover:underline";

/** Sustituye las marcas {{email}}, {{privacidad}} y {{aviso}} del texto por el correo y los enlaces. */
function conMarcas(t: string): ReactNode[] {
  return t.split(/(\{\{(?:email|privacidad|aviso)\}\})/).map((p, i) => {
    if (p === "{{email}}") return <a key={i} href={`mailto:${CONTACTO_EMAIL}`} className={enlace}>{CONTACTO_EMAIL}</a>;
    if (p === "{{privacidad}}") return <Link key={i} href="/politica-de-privacidad" className={enlace}>política de privacidad</Link>;
    if (p === "{{aviso}}") return <Link key={i} href="/aviso-legal" className={enlace}>aviso legal</Link>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}

export default function CondicionesPage() {
  if (!DIRECTORIO_ACTIVO) notFound();
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <p className="text-sm mb-4"><Link href="/directorio" className={enlace}>← Directorio</Link></p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Condiciones del directorio de empresas</h1>
      <p className="text-xs text-gray-500 mb-8">Versión {TERMS_VERSION} · en vigor desde el {TERMS_FECHA}</p>

      <section className="space-y-5 text-sm">
        {CONDICIONES.map((c) => (
          <div key={c.titulo}>
            <h2 className="text-lg font-extrabold text-gray-900 mb-1">{c.titulo}</h2>
            {c.texto.map((p, i) => <p key={i} className={i ? "mt-2" : undefined}>{conMarcas(p)}</p>)}
          </div>
        ))}
      </section>
    </div>
  );
}
