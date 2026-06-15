import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Los 5 mejores portátiles para trabajo remoto en 2025 — Análisis y comparativa",
  description:
    "Comparativa de los mejores portátiles para teletrabajar: MacBook Air M3, ASUS ZenBook 14 OLED, Lenovo ThinkPad X1 Carbon y más. Elige según tu presupuesto.",
  keywords: "mejores portátiles trabajo remoto, portátil teletrabajo, portátil oficina en casa, MacBook vs Windows teletrabajo",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-portatiles-trabajo-remoto" },
  openGraph: {
    title: "Los 5 mejores portátiles para trabajo remoto en 2025",
    description: "Comparativa completa de portátiles para teletrabajar con análisis de rendimiento, batería y precio.",
    url: "https://www.emprendedigital.es/mejores-portatiles-trabajo-remoto",
  },
};

const products = [
  { pos: 1, name: "Apple MacBook Air M3 13\"", asin: "B0CX22V2B8", price: "€1.299", cpu: "Apple M3", ram: "8 GB", battery: "Hasta 18h", weight: "1,24 kg", stars: "4,8/5", best: "Mejor overall" },
  { pos: 2, name: "ASUS ZenBook 14 OLED UX3405", asin: "B0CQXVFR67", price: "€899", cpu: "Core Ultra 7", ram: "16 GB", battery: "Hasta 15h", weight: "1,39 kg", stars: "4,5/5", best: "Mejor pantalla" },
  { pos: 3, name: "Lenovo ThinkPad X1 Carbon Gen 12", asin: "B0CRTJ6K3M", price: "€1.599", cpu: "Core Ultra 5", ram: "16 GB", battery: "Hasta 16h", weight: "1,12 kg", stars: "4,6/5", best: "Para profesionales" },
  { pos: 4, name: "HP Pavilion Plus 14 OLED", asin: "B0C6FB9VBK", price: "€749", cpu: "Core i7-1255U", ram: "16 GB", battery: "Hasta 10h", weight: "1,46 kg", stars: "4,3/5", best: "Mejor calidad-precio" },
  { pos: 5, name: "Dell XPS 13 Plus 9320", asin: "B0BF5M5VKK", price: "€999", cpu: "Core i7-1360P", ram: "16 GB", battery: "Hasta 12h", weight: "1,24 kg", stars: "4,4/5", best: "Mejor diseño" },
];

const faqs = [
  { q: "¿Cuánta RAM necesita un portátil para trabajo remoto?", a: "En 2025, 16 GB de RAM son el mínimo recomendable para un teletrabajo cómodo con multitarea (varias pestañas de Chrome, Teams o Zoom, Office y otras apps abiertas simultáneamente). Con 8 GB puedes trabajar, pero notarás limitaciones con muchas pestañas abiertas. Los MacBook con chip M-series aprovechan mejor la RAM unificada: 8 GB en un M3 equivalen aproximadamente a 12-14 GB en un Intel/AMD convencional." },
  { q: "¿MacBook o Windows para trabajar en remoto?", a: "Depende de tu ecosistema y tus apps. Si usas iPhone y iPad, el MacBook ofrece una integración perfecta (AirDrop, Handoff, Universal Clipboard). Si trabajas con software específico de Windows (SAP, determinados ERP, software de contabilidad español), un portátil Windows es la elección más práctica. En términos de rendimiento por vatio, los chips Apple M son superiores, pero Windows ofrece más variedad de hardware y precios." },
  { q: "¿Vale la pena una pantalla OLED para trabajar?", a: "Para diseñadores gráficos, editores de foto y vídeo, una pantalla OLED marca una diferencia real: colores más vivos, negros absolutos y contraste prácticamente infinito. Para trabajo de oficina (emails, hojas de cálculo, documentos), la diferencia es menos crítica y un buen panel IPS es perfectamente válido. El único riesgo de los OLED es el burn-in si dejas elementos estáticos (barra de tareas, iconos) en pantalla durante horas." },
  { q: "¿Cuánta batería real necesita un portátil para teletrabajar?", a: "Si trabajas siempre enchufado, la batería es irrelevante. Pero si te desplazas (cafeterías, coworking, viajes) o trabajas sin enchufe cerca, una batería real de 8-10 horas te dará comodidad para una jornada completa. Ten en cuenta que las cifras del fabricante (con pantalla a mínimo y sin WiFi) suelen estar un 30-50% por encima de la realidad de uso." },
  { q: "¿Qué puertos son imprescindibles en un portátil para teletrabajo?", a: "Como mínimo: 2 puertos USB-C (preferiblemente con soporte Thunderbolt 4), al menos 1 USB-A para periféricos sin adaptador, y salida de vídeo (HDMI o DisplayPort). El lector de tarjetas SD es muy útil si trabajas con fotografía o grabación de vídeo. El jack de auriculares de 3,5mm sigue siendo importante para auriculares cableados en reuniones." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Los 5 mejores portátiles para trabajo remoto en 2025 — Análisis y comparativa",
  description: "Comparativa de los mejores portátiles para teletrabajar en España.",
  datePublished: "2025-05-10",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-portatiles-trabajo-remoto",
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
    { "@type": "ListItem", position: 3, name: "Mejores portátiles trabajo remoto", item: "https://www.emprendedigital.es/mejores-portatiles-trabajo-remoto" },
  ],
};

export default function PortatilesPage() {
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
          <span className="text-gray-600">Portátiles trabajo remoto</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Los 5 mejores portátiles para trabajo remoto en 2025 — Análisis y comparativa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 10 mayo 2025 · Actualizado: 1 junio 2025 · 14 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>
            El portátil es la herramienta más importante de cualquier teletrabajador o emprendedor digital. En 2025, la oferta es más amplia y competitiva que nunca: desde portátiles Windows con procesadores Intel Core Ultra e IA integrada hasta los MacBook con chip M3, que han redefinido lo que es posible en términos de rendimiento y autonomía.
          </p>
          <p>
            Hemos analizado los <strong>5 mejores portátiles para trabajo remoto</strong> disponibles en Amazon España en 2025, evaluando rendimiento real, autonomía de batería, calidad de pantalla, comodidad de teclado y relación calidad-precio. Nuestra selección cubre un rango desde los 749€ hasta los 1.599€.
          </p>
          <h2>Tabla comparativa — Los mejores portátiles para teletrabajo 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">CPU</th>
                <th className="px-3 py-3 text-left">RAM</th>
                <th className="px-3 py-3 text-left">Batería</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.cpu}</td>
                  <td className="px-3 py-3 text-gray-600">{p.ram}</td>
                  <td className="px-3 py-3 text-gray-600">{p.battery}</td>
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

        <AdSenseAd slot="1111111111" />

        <div className="prose">
          <h2>Análisis detallado de cada portátil</h2>

          <h3>1. Apple MacBook Air M3 13&quot; — Mejor overall (★★★★★)</h3>
          <p>
            El <strong>MacBook Air M3</strong> es el portátil de referencia en 2025 para emprendedores digitales y teletrabajadores. El chip M3 ofrece un rendimiento extraordinario para las tareas habituales de oficina —y va mucho más allá— con una autonomía real que supera las 15 horas en uso mixto. El diseño sin ventilador garantiza un funcionamiento completamente silencioso, lo que es una ventaja enorme en entornos de trabajo.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>Rendimiento excepcional para cualquier tarea de oficina y más</li>
            <li>15+ horas de batería real — una jornada y media completa</li>
            <li>Sin ventilador — 0 dB de ruido en funcionamiento</li>
            <li>Pantalla Liquid Retina 2560×1664 con True Tone</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>Solo 2 puertos USB-C — necesita hub para conectar periféricos</li>
            <li>Base de 8 GB de RAM (recomendamos subir a 16 GB para futuro)</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B0CX22V2B8")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver MacBook Air M3 en Amazon →
            </a>
          </div>

          <h3>2. ASUS ZenBook 14 OLED — Mejor pantalla (★★★★½)</h3>
          <p>
            El <strong>ASUS ZenBook 14 OLED</strong> ofrece la mejor pantalla de su categoría de precio: OLED 2,8K con 120Hz y 100% DCI-P3. Para diseñadores, fotógrafos y quienes pasan muchas horas mirando la pantalla, la diferencia visual respecto a un IPS convencional es enorme. El Intel Core Ultra 7 con capacidades de IA integradas lo hace muy eficiente en tareas modernas.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>OLED 2,8K 120Hz — la mejor pantalla por menos de 1.000€</li>
            <li>16 GB de RAM de serie — sin necesidad de configurar</li>
            <li>HDMI 2.1 integrado — sin adaptador para monitor externo</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>Sin lector de tarjetas SD</li>
            <li>La webcam integrada es solo 1080p</li>
          </ul>
          <div className="not-prose my-4">
            <a href={amazonLink("B0CQXVFR67")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver ASUS ZenBook 14 OLED en Amazon →
            </a>
          </div>

          <h3>3. Lenovo ThinkPad X1 Carbon Gen 12 — Para profesionales (★★★★½)</h3>
          <p>
            El <strong>ThinkPad X1 Carbon Gen 12</strong> es el portátil empresarial más refinado del mercado. Con 1,12 kg de peso (el más ligero de nuestro comparativo), certificación militar MIL-STD-810H y el mejor teclado de cualquier portátil de consumo, es la elección de directivos, abogados y cualquier profesional que exige lo mejor. Su batería de 16 horas reales es la segunda más larga del comparativo.
          </p>
          <p><strong>Pros:</strong></p>
          <ul>
            <li>El más ligero: 1,12 kg — ideal para quienes viajan</li>
            <li>Mejor teclado del comparativo (ThinkPad es legendario)</li>
            <li>Certificación MIL-STD-810H — resistente a caídas y polvo</li>
          </ul>
          <p><strong>Contras:</strong></p>
          <ul>
            <li>El más caro del comparativo</li>
            <li>Pantalla IPS (no OLED) en la configuración base</li>
          </ul>

          <h3>4. HP Pavilion Plus 14 OLED — Mejor relación calidad-precio (★★★★)</h3>
          <p>
            El <strong>HP Pavilion Plus 14 OLED</strong> es la opción más accesible con pantalla OLED. Por menos de 750€ ofrece una pantalla 2,8K, 16 GB de RAM, 512 GB de SSD y un Core i7. La autonomía (8-10 horas reales) es algo inferior a los modelos más caros, pero para quien trabaja cerca de un enchufe la mayor parte del tiempo, la diferencia no es crítica.
          </p>

          <h3>5. Dell XPS 13 Plus 9320 — Mejor diseño (★★★★)</h3>
          <p>
            El <strong>Dell XPS 13 Plus</strong> es el portátil Windows más bonito del mercado: pantalla táctil OLED, teclado sin bordes entre teclas y trackpad háptico de vidrio templado que ocupa prácticamente toda la parte inferior. Para quienes valoran el diseño tanto como la funcionalidad, es la elección más atractiva de Windows.
          </p>

          <h2>Guía de compra: cómo elegir el portátil para trabajo remoto</h2>
          <p>Antes de comprar, considera estos factores clave:</p>
          <ul>
            <li><strong>Ecosistema:</strong> ¿Usas iPhone y iPad? El MacBook se integra mejor. ¿Dependes de software Windows específico? Elige un portátil Windows.</li>
            <li><strong>RAM:</strong> Mínimo 16 GB en 2025 para multitarea cómoda. Los M3 de Apple aprovechan mejor los 8 GB que cualquier Windows.</li>
            <li><strong>Pantalla:</strong> OLED para diseñadores y editores. IPS de calidad (400 nits+) es suficiente para ofimática.</li>
            <li><strong>Batería:</strong> Si te desplazas, prioriza modelos con 12+ horas reales. Si trabajas siempre en escritorio, este factor importa menos.</li>
            <li><strong>Puertos:</strong> Asegúrate de tener los puertos que necesitas o presupuesta un hub USB-C de calidad.</li>
          </ul>

          <h2>Preguntas frecuentes sobre portátiles para trabajo remoto</h2>
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
            <li><Link href="/mejores-auriculares-teletrabajo" className="text-indigo-600 hover:underline">→ Auriculares para teletrabajo con cancelación de ruido</Link></li>
            <li><Link href="/mejores-webcams-videollamadas" className="text-indigo-600 hover:underline">→ Mejores webcams para videollamadas 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
