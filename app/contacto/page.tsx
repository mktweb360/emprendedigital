import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Emprende Digital",
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
            <span className="text-gray-600 text-sm">Respondemos en 24–48 horas laborables</span>
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
    </div>
  );
}
