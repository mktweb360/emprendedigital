import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores escritorios ajustables en altura 2025 — Standing desks para teletrabajo",
  description:
    "FlexiSpot E7 Pro, EG1, Autonomous SmartDesk y más. Guía completa para elegir el escritorio ajustable en altura perfecto para tu home office.",
  keywords: "mejores escritorios ajustables altura, standing desk teletrabajo, escritorio eléctrico altura, FlexiSpot E7 Pro review",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-escritorios-ajustables-altura" },
  openGraph: {
    title: "Mejores escritorios ajustables en altura 2025",
    description: "Guía de standing desks para home office: FlexiSpot, Autonomous y más.",
    url: "https://www.emprendedigital.es/mejores-escritorios-ajustables-altura",
  },
};

const products = [
  { pos: 1, name: "FlexiSpot E7 Pro", asin: "B08C6JFNHQ", price: "€499,99", motor: "Dual motor", range: "58–123 cm", weight: "125 kg", memory: "4 posiciones", noise: "<50 dB", stars: "4,6/5", best: "El mejor premium" },
  { pos: 2, name: "FlexiSpot EG1", asin: "B08GQ2TXFC", price: "€229,99", motor: "Motor único", range: "71–121 cm", weight: "70 kg", memory: "No", noise: "<50 dB", stars: "4,4/5", best: "Mejor precio" },
  { pos: 3, name: "IKEA Bekant (referencia)", asin: "B07WVKWFZT", price: "€419,00", motor: "Motor único", range: "65–125 cm", weight: "70 kg", memory: "No", noise: "—", stars: "4,2/5", best: "Confianza IKEA" },
  { pos: 4, name: "Autonomous SmartDesk Pro", asin: "B08HH8RF3S", price: "€549,00", motor: "Dual motor", range: "60–125 cm", weight: "130 kg", memory: "4 posiciones", noise: "<45 dB", stars: "4,4/5", best: "Para trabajo pesado" },
  { pos: 5, name: "FlexiSpot E5", asin: "B07WWMRQTZ", price: "€349,99", motor: "Dual motor", range: "58–123 cm", weight: "100 kg", memory: "3 posiciones", noise: "<50 dB", stars: "4,5/5", best: "Gama media" },
];

const faqs = [
  { q: "¿Vale la pena un escritorio ajustable en altura para teletrabajo?", a: "Sí, con matices. Si teletrabajas 8+ horas al día, alternar entre sentado y de pie mejora la circulación, reduce el dolor lumbar y puede aumentar la energía por las tardes. Los estudios sugieren que los trabajadores de pie 2-3 horas al día tienen mejor bienestar y ligeramente mayor productividad. Pero no es una solución mágica: de pie mal posicionado es tan malo como sentado en una mala silla. La combinación ideal es un buen escritorio ajustable + una buena silla ergonómica + moverse regularmente." },
  { q: "¿Motor único o doble motor en un escritorio ajustable?", a: "El motor doble es más estable, más silencioso y más rápido al ajustar la altura, además de soportar más carga (100-125 kg vs 70 kg del motor único). Si el escritorio va a estar cargado con múltiples monitores, altavoces y equipo pesado, el motor doble es necesario. Para uso básico con portátil y un monitor, el motor único (como el FlexiSpot EG1) es suficiente y mucho más económico." },
  { q: "¿Cuál es la altura correcta para trabajar de pie?", a: "La altura correcta para trabajar de pie: los codos deben estar a 90° cuando están apoyados en el escritorio, con los hombros relajados. En la práctica, esto suele ser entre 95 y 115 cm para la mayoría de personas adultas. Un antialguno consejo: si usas el escritorio de pie durante más de 30 minutos seguidos, añade una alfombrilla antifatiga y alterna el peso entre ambos pies regularmente." },
  { q: "¿Qué superficie (tablero) elijo para mi escritorio ajustable?", a: "La mayoría de escritorios ajustables venden la base por separado del tablero, o incluyen un tablero básico. Para máxima durabilidad, el tablero de bambú es sostenible y resistente. Para aspecto premium, los tableros de madera maciza son los mejores pero también los más caros. El MDF laminado incluido en muchos kits (como el FlexiSpot EG1) es suficiente para uso normal. El tamaño recomendado para un setup de trabajo completo es 140×70 cm como mínimo." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores escritorios ajustables en altura 2025 — Standing desks para teletrabajo",
  datePublished: "2025-03-20",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-escritorios-ajustables-altura",
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
    { "@type": "ListItem", position: 3, name: "Mejores escritorios ajustables altura", item: "https://www.emprendedigital.es/mejores-escritorios-ajustables-altura" },
  ],
};

export default function EscritoriosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>{" › "}
          <span className="text-gray-600">Escritorios ajustables altura</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores escritorios ajustables en altura 2025 — Standing desks para teletrabajo
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 20 marzo 2025 · 11 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>Los escritorios ajustables en altura —o standing desks— han pasado de ser un artículo de lujo de Silicon Valley a una inversión accesible para cualquier teletrabajador en 2025. Por menos de 250€ ya puedes tener un escritorio eléctrico de calidad que te permita alternar entre sentado y de pie durante la jornada laboral, con beneficios reales para la salud y la productividad.</p>
          <p>Hemos analizado los <strong>5 mejores escritorios ajustables en altura</strong> disponibles en Amazon España en 2025.</p>
          <h2>Tabla comparativa — Los mejores standing desks 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Motor</th>
                <th className="px-3 py-3 text-left">Rango altura</th>
                <th className="px-3 py-3 text-left">Carga máx.</th>
                <th className="px-3 py-3 text-left">Memoria</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.motor}</td>
                  <td className="px-3 py-3 text-gray-600">{p.range}</td>
                  <td className="px-3 py-3 text-gray-600">{p.weight}</td>
                  <td className="px-3 py-3 text-gray-600">{p.memory}</td>
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

        <AdSenseAd slot="8888888888" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. FlexiSpot E7 Pro — El mejor para uso profesional intensivo (★★★★½)</h3>
          <p>El <strong>FlexiSpot E7 Pro</strong> es el escritorio ajustable de referencia en la gama premium accesible. Doble motor con capacidad de 125 kg, sistema anti-colisión, 4 posiciones de memoria programables y una estabilidad excepcional incluso al máximo de altura. Las patas reforzadas con perfil ovalado son más rígidas que las cuadradas de modelos más económicos. Si tienes múltiples monitores y equipamiento pesado, el E7 Pro es el modelo correcto.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08C6JFNHQ")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver FlexiSpot E7 Pro en Amazon →
            </a>
          </div>

          <h3>2. FlexiSpot EG1 — La mejor opción económica (★★★★)</h3>
          <p>El <strong>FlexiSpot EG1</strong> es el punto de entrada más recomendable en escritorios ajustables eléctricos: motor único silencioso, rango de 71 a 121 cm y carga de 70 kg —suficiente para un setup básico—. Sin memoria de posiciones, pero el panel de control es sencillo e intuitivo. Para quienes empiezan con un único monitor y equipamiento ligero, es la inversión más inteligente.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B08GQ2TXFC")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver FlexiSpot EG1 en Amazon →
            </a>
          </div>

          <h3>3. IKEA Bekant Ajustable — La opción de confianza (★★★★)</h3>
          <p>El <strong>IKEA Bekant</strong> eléctrico combina la facilidad de montaje característica de IKEA con la fiabilidad de un motor simple. El tablero blanco de 160×80 cm es grande y práctico. Sin memoria de posiciones, lo que lo hace algo menos conveniente para quienes alternan posición frecuentemente.</p>

          <h3>4. Autonomous SmartDesk Pro — Para setups muy cargados (★★★★)</h3>
          <p>El <strong>Autonomous SmartDesk Pro</strong> soporta 130 kg de carga —el máximo del comparativo— con doble motor y 4 posiciones de memoria. Ideal para setups de triple monitor o con mucho equipamiento. El proceso de pedido y tiempos de entrega son algo más largos al tratarse de importación directa.</p>

          <h3>5. FlexiSpot E5 — El gama media equilibrado (★★★★½)</h3>
          <p>El <strong>FlexiSpot E5</strong> es el punto medio entre el E7 Pro y el EG1: doble motor, 100 kg de carga, 3 posiciones de memoria y certificación BIFMA. Para la mayoría de home offices con uno o dos monitores es el equilibrio perfecto entre prestaciones y precio.</p>

          <h2>Preguntas frecuentes sobre escritorios ajustables en altura</h2>
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
            <li><Link href="/mejores-sillas-ergonomicas-teletrabajo" className="text-indigo-600 hover:underline">→ Mejores sillas ergonómicas para teletrabajo 2025</Link></li>
            <li><Link href="/mejores-teclados-trabajo-remoto" className="text-indigo-600 hover:underline">→ Mejores teclados para trabajo remoto 2025</Link></li>
            <li><Link href="/mejores-portatiles-trabajo-remoto" className="text-indigo-600 hover:underline">→ Los 5 mejores portátiles para trabajo remoto en 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
