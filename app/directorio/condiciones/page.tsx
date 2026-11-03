import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BASE, DIRECTORIO_ACTIVO, TERMS_VERSION } from "@/lib/directorio";

export const metadata: Metadata = {
  title: "Condiciones del directorio de empresas",
  description: "Condiciones de uso del directorio de empresas de Emprende Digital.",
  alternates: { canonical: `${BASE}/directorio/condiciones` },
  robots: { index: false, follow: true },
};

// BORRADOR pendiente de revisión jurídica. No se publica hasta que lo revise una persona con criterio legal.
export default function CondicionesPage() {
  if (!DIRECTORIO_ACTIVO) notFound();
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-gray-700 leading-relaxed">
      <p className="text-sm mb-4"><Link href="/directorio" className="text-indigo-600 hover:underline">← Directorio</Link></p>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Condiciones del directorio de empresas</h1>
      <p className="text-xs text-gray-500 mb-8">Versión {TERMS_VERSION}</p>

      <section className="space-y-5 text-sm">
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Qué es</h2><p>Un directorio de empresas, agencias y herramientas para emprendedores digitales, editado por Mkt Web 360 SLU (CIF B87679304). El alta básica es gratuita.</p></div>
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Quién puede darse de alta</h2><p>Empresas y profesionales que ofrezcan servicios o productos relacionados con emprender en digital y que puedan acreditar que actúan en nombre de la empresa. Los datos tienen que ser veraces.</p></div>
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Revisión y publicación</h2><p>Revisamos cada ficha antes de publicarla y podemos rechazarla, pausarla o retirarla si es engañosa, infringe derechos de terceros o no encaja con el directorio. Una ficha incompleta puede publicarse sin indexarse en buscadores.</p></div>
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Contenido y enlaces</h2><p>La empresa es responsable del contenido que envía y garantiza que tiene derecho a usar su texto, logotipo y marcas. Los enlaces a su web se marcan como contenido enviado por usuarios (<code>ugc nofollow</code>). No vendemos posiciones ni enlaces que transmitan autoridad.</p></div>
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Datos personales</h2><p>Mkt Web 360 SLU trata los datos de la persona de contacto para gestionar el alta, avisarle de la revisión y enviarle el informe de su ficha. Más información en la <Link href="/politica-de-privacidad" className="text-indigo-600 hover:underline">política de privacidad</Link>. Puede ejercer sus derechos escribiendo a info@emprendedigital.es.</p></div>
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Comunicaciones comerciales</h2><p>Solo se envían ofertas del grupo Mkt Web 360 a quien marque la casilla opcional y confirme su correo. No es condición para darse de alta y puede retirarse en cualquier momento.</p></div>
        <div><h2 className="text-lg font-extrabold text-gray-900 mb-1">Baja</h2><p>Puedes pedir la retirada de tu ficha en cualquier momento escribiendo a info@emprendedigital.es.</p></div>
      </section>
    </div>
  );
}
