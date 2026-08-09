import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Emprende Digital",
  description:
    "Laura Sánchez, especialista en productividad digital y trabajo remoto con 7 años de experiencia. Conoce quién hay detrás de Emprende Digital, cómo evaluamos los productos y nuestra política de afiliación.",
  alternates: { canonical: "https://www.emprendedigital.es/sobre-nosotros" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Laura Sánchez",
  jobTitle: "Especialista en Productividad Digital",
  url: "https://www.emprendedigital.es/sobre-nosotros",
  description:
    "Especialista en productividad digital y herramientas de trabajo remoto con 7 años de experiencia asesorando a equipos distribuidos y emprendedores digitales.",
  knowsAbout: [
    "productividad digital",
    "trabajo remoto",
    "herramientas SaaS",
    "ergonomía en oficina",
    "emprendimiento digital",
    "equipamiento para home office",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Emprende Digital",
    url: "https://www.emprendedigital.es",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Especialista en Productividad Digital",
    description:
      "Análisis y evaluación de herramientas de productividad digital, equipamiento para home office y soluciones SaaS para equipos distribuidos.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Emprende Digital",
  legalName: "Mkt Web 360 SLU",
  url: "https://www.emprendedigital.es",
  logo: {
    "@type": "ImageObject",
    url: "https://www.emprendedigital.es/logo.png",
  },
  taxID: "B87679304",
  description:
    "Portal especializado en herramientas de productividad digital, equipamiento para home office y recursos para emprendedores. Comparativas y análisis con criterio profesional.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "productividad digital",
    "trabajo remoto",
    "equipamiento home office",
    "sillas ergonómicas",
    "herramientas SaaS",
  ],
  sameAs: [
    "https://www.instagram.com/emprendedigital.es",
    "https://www.facebook.com/emprendedigital.es",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@emprendedigital.es",
    availableLanguage: "Spanish",
  },
  employee: {
    "@type": "Person",
    name: "Laura Sánchez",
    jobTitle: "Especialista en Productividad Digital",
  },
};

const expertiseAreas = [
  "Productividad digital",
  "Trabajo remoto",
  "Herramientas SaaS",
  "Ergonomía en home office",
  "Emprendimiento digital",
  "Equipamiento para teletrabajo",
];

const evaluationCriteria = [
  {
    title: "Investigación de mercado",
    description:
      "Identificamos los productos más relevantes en cada categoría: los más vendidos en Amazon España, los mejor valorados por usuarios reales y las novedades más destacadas de cada temporada.",
  },
  {
    title: "Criterios objetivos y verificables",
    description:
      "Evaluamos con métricas concretas: especificaciones técnicas verificadas, relación calidad-precio, valoraciones de compradores confirmados y comparativa directa con alternativas del mismo rango de precio.",
  },
  {
    title: "Actualización continua",
    description:
      "El mercado tecnológico cambia rápido. Revisamos nuestras recomendaciones periódicamente para garantizar que siguen siendo las mejores opciones disponibles, retirando productos discontinuados o superados.",
  },
  {
    title: "Transparencia total",
    description:
      "Indicamos claramente cuándo un enlace es de afiliado y explicamos por qué recomendamos cada producto. La comisión nunca determina nuestra recomendación: si un producto no es bueno, no lo recomendamos.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-indigo-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-indigo-200">Sobre Nosotros</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Sobre Nosotros</h1>
          <p className="text-indigo-100 text-lg">
            Quiénes somos, cómo evaluamos los productos y por qué puedes confiar en nuestras recomendaciones.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Author Card */}
        <section>
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            {/* Avatar */}
            <div className="shrink-0 w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold select-none">
              LS
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-extrabold text-gray-900 mb-0.5">Laura Sánchez</h2>
              <p className="text-sm font-semibold text-indigo-600 mb-3">
                Especialista en Productividad Digital y Trabajo Remoto
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Con más de 7 años asesorando a equipos distribuidos y emprendedores digitales, he probado, analizado y
                descartado cientos de herramientas y equipos. Mi trabajo en Emprende Digital es simple: ahorrarte
                tiempo y dinero con recomendaciones honestas basadas en uso real, no en fichas técnicas.
              </p>
              <div className="flex flex-wrap gap-2">
                {expertiseAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qué es EmprenderDigital.es */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">¿Qué es Emprende Digital?</h2>
          <div className="prose prose-gray max-w-none">
            <p>
              <strong>Emprende Digital</strong> es una publicación independiente dedicada a ayudar a emprendedores,
              freelancers y teletrabajadores a elegir el mejor equipamiento y las mejores herramientas para su trabajo
              remoto. Analizamos portátiles, monitores, sillas ergonómicas, escritorios regulables, periféricos,
              herramientas SaaS de productividad y mucho más, con comparativas honestas y criterio profesional.
            </p>
            <p>
              No somos una tienda. No tenemos stock. No dependemos de ningún fabricante ni distribuidor. Somos un
              equipo de personas que trabaja en remoto desde hace años y que ha cometido errores comprando equipamiento
              —y aprendido de ellos— para que tú no tengas que hacerlo.
            </p>
          </div>
        </section>

        {/* Cómo evaluamos los productos */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Cómo evaluamos los productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {evaluationCriteria.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate transparency */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Transparencia en afiliados</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm font-bold text-amber-900 mb-2">⚠️ Divulgación de afiliados</p>
            <p className="text-amber-900 text-sm leading-relaxed">
              Emprende Digital participa en el Programa de Afiliados de Amazon EU. Cuando haces clic en un enlace
              marcado y compras el producto, recibimos una pequeña comisión <strong>sin coste adicional para ti</strong>:
              el precio es exactamente el mismo que si fueras directamente a Amazon. Estas comisiones nos permiten
              mantener el sitio y seguir produciendo análisis de calidad de forma gratuita.
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Nuestra política es clara: <strong>nunca recomendamos un producto solo porque genere una comisión más
            alta</strong>. Si un producto no supera nuestra evaluación, no aparece en el sitio. Si existe una
            alternativa mejor, la señalamos aunque su comisión sea menor o incluso nula. La confianza de nuestros
            lectores vale más que cualquier comisión puntual.
          </p>
        </section>

        {/* Contact + Legal */}
        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Contacto y datos de empresa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Empresa</p>
              <p>Mkt Web 360 SLU</p>
              <p>CIF: B87679304</p>
              <p>País: España</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Contacto</p>
              <p>
                <a href="mailto:info@emprendedigital.es" className="text-indigo-600 hover:underline">
                  info@emprendedigital.es
                </a>
              </p>
              <p className="mt-1">
                <Link href="/contacto" className="text-indigo-600 hover:underline">
                  Formulario de contacto
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/aviso-legal" className="text-indigo-600 hover:underline">Aviso Legal</Link>
            <Link href="/politica-de-privacidad" className="text-indigo-600 hover:underline">Política de Privacidad</Link>
            <Link href="/politica-de-cookies" className="text-indigo-600 hover:underline">Política de Cookies</Link>
          </div>
        </section>

      </div>
    </>
  );
}
