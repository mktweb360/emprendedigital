import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores auriculares para teletrabajo con cancelación de ruido 2025",
  description:
    "Sony WH-1000XM5, Jabra Evolve2 55, Bose QC45 y más. Guía completa para elegir los auriculares perfectos para trabajo remoto y videollamadas.",
  keywords: "mejores auriculares teletrabajo, auriculares cancelación de ruido trabajo, auriculares para videollamadas, Sony WH-1000XM5 vs Jabra",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-auriculares-teletrabajo" },
  openGraph: {
    title: "Mejores auriculares para teletrabajo 2025",
    description: "Guía completa de auriculares con ANC para trabajo remoto y videollamadas.",
    url: "https://www.emprendedigital.es/mejores-auriculares-teletrabajo",
  },
};

const products = [
  { pos: 1, name: "Sony WH-1000XM5", asin: "B09XS7JWHH", price: "€279,00", anc: "Sí (8 mics)", battery: "30h con ANC", mic: "Excelente", weight: "250 g", stars: "4,7/5", best: "Mejor ANC" },
  { pos: 2, name: "Jabra Evolve2 55", asin: "B08QHF3KZS", price: "€349,00", anc: "Sí (6 mics)", battery: "36h con ANC", mic: "Excepcional", weight: "285 g", stars: "4,5/5", best: "Para profesionales" },
  { pos: 3, name: "Bose QuietComfort 45", asin: "B098HTH9G6", price: "€249,00", anc: "Sí (6 mics)", battery: "24h con ANC", mic: "Muy bueno", weight: "238 g", stars: "4,6/5", best: "Más cómodos" },
  { pos: 4, name: "JBL Tune 510BT", asin: "B099XHSHQ8", price: "€39,99", anc: "No", battery: "40h", mic: "Básico", weight: "160 g", stars: "4,3/5", best: "Mejor precio" },
  { pos: 5, name: "Logitech H390 USB", asin: "B000UXZQ42", price: "€29,99", anc: "No", battery: "Cable USB", mic: "Muy bueno", weight: "170 g", stars: "4,3/5", best: "Para calls de trabajo" },
];

const faqs = [
  { q: "¿ANC (cancelación activa) o pasiva para teletrabajo?", a: "Depende de tu entorno. Si trabajas en casa con silencio relativo, el aislamiento pasivo de los auriculares circumaurales (que rodean la oreja) puede ser suficiente. Si trabajas en espacios ruidosos (oficina abierta, cafetería, con niños en casa), la cancelación activa de ruido (ANC) marca una diferencia enorme: bloquea eficazmente el ruido constante como ventilación, tráfico y conversaciones de fondo, permitiendo concentrarse mucho mejor." },
  { q: "¿Cableados o inalámbricos para trabajo remoto?", a: "Para teletrabajo intensivo con muchas videollamadas, los inalámbricos Bluetooth son más cómodos: te permiten moverte por la habitación sin arrastrar cables y la batería de los modelos actuales (30-40h) cubre varias jornadas completas. La calidad de audio por Bluetooth con AptX o LDAC es indistinguible de un cable para la mayoría de usos. Eso sí, ten un cable de reserva para cuando se acabe la batería en medio de una reunión importante." },
  { q: "¿Qué importancia tiene la calidad del micrófono en auriculares?", a: "Para trabajo remoto, el micrófono de los auriculares es tan importante como la calidad de audio. Los auriculares de consumo general (Sony, Bose) tienen micrófonos correctos para llamadas, pero los modelos pensados para comunicaciones empresariales (Jabra, Poly, Sennheiser) incorporan micrófonos con reducción de ruido de voz avanzada que filtra ruidos de fondo con mucha más eficacia. Si tienes muchas reuniones al día, considera modelos Jabra o similares." },
  { q: "¿Cuánto tiempo pueden usarse cómodamente los auriculares?", a: "Los mejores auriculares circumaurales (que rodean la oreja) como el Sony WH-1000XM5 o el Bose QC45 pueden usarse cómodamente durante 4-6 horas seguidas gracias a sus almohadillas de memory foam. Por encima de ese tiempo, es recomendable hacer descansos de 10-15 minutos para evitar la fatiga auditiva y la presión en las orejas. Los auriculares in-ear (tipo AirPods) son menos adecuados para uso prolongado, ya que la presión en el canal auditivo cansa antes." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores auriculares para teletrabajo con cancelación de ruido 2025",
  datePublished: "2025-06-05",
  dateModified: "2025-06-10",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-auriculares-teletrabajo",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.emprendedigital.es/blog" },
    { "@type": "ListItem", position: 3, name: "Mejores auriculares teletrabajo", item: "https://www.emprendedigital.es/mejores-auriculares-teletrabajo" },
  ],
};

export default function AucularesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>{" › "}
          <span className="text-gray-600">Auriculares teletrabajo</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores auriculares para teletrabajo con cancelación de ruido 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 5 junio 2025 · 10 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>Los auriculares con cancelación activa de ruido (ANC) son el complemento más transformador para el teletrabajador: eliminan las distracciones del entorno, mejoran la concentración y garantizan que tus videollamadas suenen profesionales. En 2025 la calidad del ANC ha llegado a un nivel que habría parecido imposible hace apenas tres años.</p>
          <p>Hemos analizado los <strong>5 mejores auriculares para trabajo remoto</strong> en 2025, desde opciones premium hasta soluciones económicas para cualquier presupuesto.</p>
          <h2>Tabla comparativa — Los mejores auriculares para teletrabajo 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">ANC</th>
                <th className="px-3 py-3 text-left">Batería</th>
                <th className="px-3 py-3 text-left">Micrófono</th>
                <th className="px-3 py-3 text-left">Peso</th>
                <th className="px-3 py-3 text-left">Valoración</th>
                <th className="px-3 py-3 text-left">Ver en Amazon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-indigo-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3 text-gray-600">{p.anc}</td>
                  <td className="px-3 py-3 text-gray-600">{p.battery}</td>
                  <td className="px-3 py-3 text-gray-600">{p.mic}</td>
                  <td className="px-3 py-3 text-gray-600">{p.weight}</td>
                  <td className="px-3 py-3 text-yellow-500 font-semibold">⭐ {p.stars}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
                      className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                      Ver precio →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="3333333333" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Sony WH-1000XM5 — El mejor ANC del mercado (★★★★★)</h3>
          <p>Los <strong>Sony WH-1000XM5</strong> siguen siendo la referencia en cancelación de ruido para uso personal en 2025. Sus 8 micrófonos y dos procesadores dedicados bloquean de forma efectiva los ruidos constantes de oficina, tráfico, ventilación y conversaciones de fondo. El modo Speak-to-Chat es especialmente útil: pausa automáticamente la música cuando empiezas a hablar con alguien. La batería de 30 horas con ANC activo es más que suficiente para varios días de teletrabajo.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09XS7JWHH")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">Ver Sony WH-1000XM5 en Amazon →</a>
          </div>

          <h3>2. Jabra Evolve2 55 — Para comunicaciones profesionales (★★★★½)</h3>
          <p>Si tienes muchas videollamadas al día, los <strong>Jabra Evolve2 55</strong> son superiores a los Sony en calidad de micrófono: 6 micrófonos en la diadema con reducción de ruido de voz avanzada capturan tu voz con una claridad excepcional incluso en entornos ruidosos. Están certificados para Microsoft Teams, Zoom y Google Meet. Son más caros, pero si las reuniones son tu trabajo principal, la inversión está justificada.</p>

          <h3>3. Bose QuietComfort 45 — Los más cómodos (★★★★½)</h3>
          <p>Los <strong>Bose QC45</strong> son los auriculares más cómodos del comparativo: las almohadillas de espuma visco-elástica y el peso de solo 238 g los hacen casi imperceptibles incluso en jornadas de 8 horas. El ANC de Bose no es tan agresivo como el de Sony pero resulta más cómodo para uso prolongado: no produce el efecto de presión que algunos usuarios notan con el Sony.</p>

          <h3>4. JBL Tune 510BT — La opción económica (★★★★)</h3>
          <p>Los <strong>JBL Tune 510BT</strong> no tienen ANC, pero ofrecen 40 horas de batería y sonido Pure Bass de calidad por menos de 40€. Son la opción correcta para quienes trabajan en entornos silenciosos y no necesitan cancelación activa de ruido.</p>

          <h3>5. Logitech H390 USB — Para videollamadas puras (★★★★)</h3>
          <p>El <strong>Logitech H390</strong> es un headset con cable USB diseñado específicamente para videollamadas de trabajo. No tiene ANC ni gran calidad musical, pero el micrófono integrado con cancelación de ruido es muy bueno para su precio, el sonido en llamadas es nítido y la conexión USB garantiza compatibilidad total con cualquier ordenador sin configuración.</p>

          <h2>Preguntas frecuentes sobre auriculares para teletrabajo</h2>
        </div>

        <div className="space-y-4 my-8">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>{faq.q}</span>
                <span className="text-indigo-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-600 leading-relaxed bg-gray-50">{faq.a}</div>
            </details>
          ))}
        </div>

        <AffiliateDisclosure />

        <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mejores-microfonos-podcast-streaming" className="text-indigo-600 hover:underline">→ Mejores micrófonos para podcast y streaming 2025</Link></li>
            <li><Link href="/mejores-webcams-videollamadas" className="text-indigo-600 hover:underline">→ Mejores webcams para videollamadas 2025</Link></li>
            <li><Link href="/mejores-portatiles-trabajo-remoto" className="text-indigo-600 hover:underline">→ Los 5 mejores portátiles para trabajo remoto en 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
