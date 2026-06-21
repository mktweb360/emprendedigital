import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores micrófonos para podcast y streaming 2025 — Análisis y comparativa",
  description:
    "Blue Yeti, HyperX SoloCast, Rode NT-USB Mini y más. Guía completa para elegir el micrófono USB o XLR perfecto para podcast, streaming y videollamadas.",
  keywords: "mejores micrófonos podcast, micrófono USB streaming, Blue Yeti alternativas, micrófono para videollamadas",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-microfonos-podcast-streaming" },
  openGraph: {
    title: "Mejores micrófonos para podcast y streaming 2025",
    description: "Guía completa de micrófonos USB para podcast, streaming y videollamadas.",
    url: "https://www.emprendedigital.es/mejores-microfonos-podcast-streaming",
  },
};

const products = [
  { pos: 1, name: "Blue Yeti USB", asin: "B00N1YPXW2", price: "€129,99", type: "Condensador USB", pattern: "4 patrones", frequency: "20Hz–20kHz", stars: "4,6/5", best: "Referencia del sector" },
  { pos: 2, name: "HyperX SoloCast", asin: "B08KFL3SFV", price: "€49,99", type: "Condensador USB", pattern: "Cardioide", frequency: "20Hz–20kHz", stars: "4,5/5", best: "Mejor calidad-precio" },
  { pos: 3, name: "Rode NT-USB Mini", asin: "B085M7SSVS", price: "€99,00", type: "Condensador USB", pattern: "Cardioide", frequency: "20Hz–20kHz", stars: "4,4/5", best: "Mejor calidad sonido" },
  { pos: 4, name: "Razer Seiren Mini", asin: "B08HH3MXHQ", price: "€54,99", type: "Condensador USB", pattern: "Supercardioide", frequency: "20Hz–20kHz", stars: "4,3/5", best: "Más compacto" },
  { pos: 5, name: "Maono PM421", asin: "B09Q8QLPBR", price: "€39,99", type: "Condensador USB", pattern: "Cardioide", frequency: "30Hz–18kHz", stars: "4,2/5", best: "Mejor precio absoluto" },
];

const faqs = [
  { q: "¿USB o XLR para empezar en podcast?", a: "Para empezar, USB sin duda. Un micrófono USB se conecta directamente al ordenador sin necesitar interfaz de audio, mezclador ni cables adicionales. La calidad de audio de los mejores micrófonos USB (Blue Yeti, Rode NT-USB Mini) es más que suficiente para un podcast profesional. Los micrófonos XLR son el siguiente paso cuando quieres máxima calidad y control creativo, pero requieren una inversión adicional en interfaz de audio (mínimo 60-100€) y más conocimientos técnicos." },
  { q: "¿Qué patrón polar es mejor para grabar en solitario en casa?", a: "Para grabar en solitario —podcast individual, streaming, videollamadas— el patrón cardioide es el más adecuado: captura el sonido frontal (tu voz) y rechaza el sonido lateral y posterior (ruido del teclado, ventilador, conversaciones). Si grabas entrevistas con un invitado en la misma habitación, el patrón bidireccional (figura en 8) es ideal para poner el micrófono entre ambos. El patrón omnidireccional es útil para mesas redondas con varios participantes." },
  { q: "¿Necesito brazo de micrófono o es suficiente el soporte incluido?", a: "Los soportes de mesa incluidos son funcionales pero colocan el micrófono en el escritorio, donde captura las vibraciones del teclado y de la mesa. Un brazo de micrófono (por unos 20-40€) te permite colocar el micrófono justo frente a la boca (a unos 15-20 cm), lo que mejora notablemente la calidad de captación y libera espacio en el escritorio. Para cualquier uso mínimamente serio, el brazo es una inversión que vale la pena desde el primer día." },
  { q: "¿Cuánto influye el tratamiento acústico en la calidad de grabación?", a: "El tratamiento acústico influye tanto o más que el propio micrófono. Una habitación con paredes desnuras y suelos duros genera reverberación que ningún micrófono puede eliminar. La buena noticia es que no necesitas comprar paneles de espuma: una habitación con librería llena de libros, cortinas gruesas y alfombra ya mejora enormemente el sonido. Grabar dentro de un armario con ropa es el truco más efectivo y económico para conseguir un sonido seco y profesional." },
  { q: "¿Con qué frecuencia hay que actualizar el micrófono?", a: "A diferencia del ordenador, un buen micrófono USB dura décadas. El Blue Yeti original (2009) sigue siendo perfectamente válido en 2025. No hay necesidad de actualizar el micrófono salvo que tengas un problema técnico o quieras dar un salto a XLR para mayor control creativo. Invierte en un buen micrófono una vez y dedica el presupuesto futuro a otros aspectos: tratamiento acústico, iluminación, edición de contenido." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores micrófonos para podcast y streaming 2025 — Análisis y comparativa",
  description: "Comparativa de los mejores micrófonos USB para podcast y streaming en España.",
  datePublished: "2025-05-18",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-microfonos-podcast-streaming",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.emprendedigital.es/blog" },
    { "@type": "ListItem", position: 3, name: "Mejores micrófonos podcast streaming", item: "https://www.emprendedigital.es/mejores-microfonos-podcast-streaming" },
  ],
};

export default function MicrofonosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>
          {" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          {" › "}
          <span className="text-gray-600">Micrófonos podcast y streaming</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores micrófonos para podcast y streaming 2025 — Análisis y comparativa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 18 mayo 2025 · Actualizado: 1 junio 2025 · 11 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            El micrófono es la inversión que más impacto tiene en la percepción de calidad de tu podcast, canal de YouTube o streaming. Un vídeo con mala imagen puede tolerarse, pero un audio deficiente hace que los oyentes abandonen inmediatamente. La buena noticia: con 50-130€ ya tienes acceso a micrófonos USB que superan la calidad de grabación de muchos estudios profesionales de los años 90.
          </p>
          <p>
            Hemos analizado los <strong>5 mejores micrófonos USB para podcast y streaming</strong> disponibles en Amazon España en 2025, evaluando calidad de audio, facilidad de uso, versatilidad y relación calidad-precio.
          </p>
          <h2>Tabla comparativa — Los mejores micrófonos para podcast 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Patrón</th>
                <th className="px-3 py-3 text-left">Frecuencia</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.type}</td>
                  <td className="px-3 py-3 text-gray-600">{p.pattern}</td>
                  <td className="px-3 py-3 text-gray-600">{p.frequency}</td>
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

        <AdSenseAd slot="2222222222" />

        <div className="prose">
          <h2>Análisis detallado de cada micrófono</h2>

          <h3>1. Blue Yeti USB — Referencia del sector (★★★★½)</h3>
          <p>
            El <strong>Blue Yeti</strong> lleva más de una década siendo el micrófono USB de referencia para podcasters, streamers y creadores de contenido. Sus tres cápsulas de condensador con cuatro patrones polares lo hacen extraordinariamente versátil: cardioide para grabación individual, bidireccional para entrevistas cara a cara, omnidireccional para mesas redondas y estéreo para música e instrumentos.
          </p>
          <ul>
            <li>4 patrones polares — la mayor versatilidad del mercado USB</li>
            <li>Control de ganancia y volumen de auriculares directamente en el micrófono</li>
            <li>Monitorización en tiempo real sin latencia</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B00N1YPXW2")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Blue Yeti en Amazon →
            </a>
          </div>

          <h3>2. HyperX SoloCast — Mejor relación calidad-precio (★★★★½)</h3>
          <p>
            El <strong>HyperX SoloCast</strong> ha redefinido lo que se puede esperar por menos de 50€. Con patrón cardioide optimizado para voz individual y botón tap-to-mute con LED de estado, es la opción perfecta para quienes empiezan en podcast o streaming sin querer arriesgar una gran inversión. La calidad de audio es sorprendentemente buena para su precio.
          </p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08HHZXJBL")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver HyperX SoloCast en Amazon →
            </a>
          </div>

          <h3>3. Rode NT-USB Mini — Mejor calidad de sonido (★★★★)</h3>
          <p>
            El <strong>Rode NT-USB Mini</strong> trae la calidad de audio característica de Rode —una de las marcas más respetadas del sector de audio profesional— en formato USB asequible. El sonido es notablemente más cálido y natural que el del Blue Yeti, y la base magnética permite ajustar el ángulo del micrófono con precisión.
          </p>

          <h3>4. Razer Seiren Mini — El más compacto (★★★★)</h3>
          <p>
            El <strong>Razer Seiren Mini</strong> es la mejor opción para espacios reducidos: su formato ultracompacto (15 cm de altura) cabe perfectamente en cualquier escritorio sin ocupar espacio. El patrón supercardioide rechaza el sonido lateral más agresivamente que el cardioide estándar, lo que lo hace ideal para entornos con algo de ruido ambiente.
          </p>

          <h3>5. Maono PM421 — Mejor precio absoluto (★★★★)</h3>
          <p>
            El <strong>Maono PM421</strong> demuestra que no hay que gastar mucho para tener un audio decente. Por menos de 40€ incluye control de ganancia, botón de mute y monitorización de auriculares. Para videollamadas de trabajo y primeras grabaciones, cumple perfectamente.
          </p>

          <h2>Guía de compra: cómo elegir el micrófono para podcast</h2>
          <ul>
            <li><strong>Presupuesto:</strong> Con 50€ (HyperX SoloCast) tienes audio profesional. El Blue Yeti a 130€ añade versatilidad pero no es necesario si grabas en solitario.</li>
            <li><strong>Uso:</strong> Solo o con invitados? Solo cardioide es suficiente. Con invitados en la misma sala, necesitas patrones múltiples o dos micrófonos.</li>
            <li><strong>Entorno:</strong> ¿Tienes ruido ambiente? Elige patrones más directivos (supercardioide) y trata mínimamente la acústica de la habitación.</li>
            <li><strong>Extras:</strong> El brazo de micrófono (20-40€) mejora más el resultado que subir de gama de micrófono. Prioriza el brazo.</li>
          </ul>

          <h2>Preguntas frecuentes sobre micrófonos para podcast</h2>
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
            <li><Link href="/mejores-webcams-videollamadas" className="text-indigo-600 hover:underline">→ Mejores webcams para videollamadas y streaming 2025</Link></li>
            <li><Link href="/iluminacion-streaming-youtube" className="text-indigo-600 hover:underline">→ Iluminación para streaming y YouTube: ring lights y paneles LED</Link></li>
            <li><Link href="/mejores-auriculares-teletrabajo" className="text-indigo-600 hover:underline">→ Auriculares para teletrabajo con cancelación de ruido</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
