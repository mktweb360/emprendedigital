import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto: dudas, sugerencias y correcciones",
  description: "Contacta con el equipo de Emprende Digital para consultas, correcciones o colaboraciones.",
  alternates: { canonical: "https://www.emprendedigital.es/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contacto</h1>
      <p className="text-lg text-gray-500 mb-8">
        ¿Tienes alguna pregunta, quieres corregir información o proponer una colaboración? Escríbenos.
      </p>

      <div className="space-y-4 mb-10">
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="text-2xl">📧</span>
          <div>
            <strong className="block text-gray-900 text-sm">Email general</strong>
            <a href="mailto:info@emprendedigital.es" className="text-indigo-600 hover:underline text-sm">
              info@emprendedigital.es
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="text-2xl">🏢</span>
          <div>
            <strong className="block text-gray-900 text-sm">Empresa</strong>
            <span className="text-gray-600 text-sm">Mkt Web 360 SLU — CIF B87679304</span>
          </div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="text-2xl">⏰</span>
          <div>
            <strong className="block text-gray-900 text-sm">Tiempo de respuesta</strong>
            <span className="text-gray-600 text-sm">Te respondemos por email</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-900">
        <strong className="block mb-2">¿Quieres colaborar con nosotros?</strong>
        <p className="m-0 text-gray-700">
          Si tienes una marca o producto relacionado con el equipamiento para emprendedores digitales y quieres
          colaborar con Emprende Digital, puedes escribirnos a{" "}
          <a href="mailto:info@emprendedigital.es" className="text-indigo-600 hover:underline">
            info@emprendedigital.es
          </a>{" "}
          indicando el asunto "Colaboración". Ten en cuenta que solo recomendamos productos que realmente
          consideramos valiosos para nuestros lectores.
        </p>
      </div>

      <section className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">¿Para qué puedes escribirnos?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Dudas sobre una guía o comparativa</strong> del{" "}
              <Link href="/blog" className="text-indigo-600 hover:underline">blog</Link>: si no tienes claro qué
              modelo encaja con tu uso, cuéntanos qué necesitas y te indicamos qué guía lo trata.
            </li>
            <li>
              <strong>Sugerencias de productos o temas</strong> que te gustaría ver analizados en la web.
            </li>
            <li>
              <strong>Errores detectados</strong>: un dato o una especificación incorrecta, un enlace que no funciona o
              un producto que ya no está disponible. Indícanos la página y lo revisamos.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Lo que no hacemos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>No vendemos directamente.</strong> Los productos de la{" "}
              <Link href="/tienda" className="text-indigo-600 hover:underline">tienda</Link> se compran en Amazon.es,
              así que los pedidos, envíos, devoluciones y garantías se gestionan con Amazon o con el vendedor de cada
              producto, no con nosotros.
            </li>
            <li>
              <strong>No respondemos consultas médicas.</strong> Nuestros contenidos sobre ergonomía y postura son
              informativos; si tienes dolor o una lesión, consulta con un profesional sanitario.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Cómo elegimos y actualizamos los productos</h2>
          <p>
            Antes de recomendar un producto comparamos sus especificaciones y características con las de sus
            alternativas, y revisamos el catálogo para retirar o marcar los que dejan de estar disponibles. Explicamos
            el proceso completo, y cómo funcionan los enlaces de afiliado, en{" "}
            <Link href="/sobre-nosotros" className="text-indigo-600 hover:underline">Sobre nosotros</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Quién responde</h2>
          <p>
            Emprende Digital es un sitio de Mkt Web 360 SLU. Los datos completos del titular están en el{" "}
            <Link href="/aviso-legal" className="text-indigo-600 hover:underline">Aviso Legal</Link>, y lo que
            hacemos con los datos de tu mensaje se explica en la{" "}
            <Link href="/politica-de-privacidad" className="text-indigo-600 hover:underline">Política de Privacidad</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
