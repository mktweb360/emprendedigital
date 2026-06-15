import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores teclados para trabajo remoto 2025 — Mecánicos y de membrana",
  description:
    "Logitech MX Keys, Keychron K2 Pro, Apple Magic Keyboard y más. Guía completa para elegir el teclado perfecto según tu forma de trabajar.",
  keywords: "mejores teclados trabajo remoto, teclado mecánico oficina, Logitech MX Keys review, teclado inalámbrico para teletrabajo",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-teclados-trabajo-remoto" },
  openGraph: {
    title: "Mejores teclados para trabajo remoto 2025",
    description: "Guía completa de teclados mecánicos y de membrana para teletrabajar.",
    url: "https://www.emprendedigital.es/mejores-teclados-trabajo-remoto",
  },
};

const products = [
  { pos: 1, name: "Logitech MX Keys Advanced S", asin: "B0B2R5VP5V", price: "€119,99", type: "Membrana", switches: "Membrana PerfectStroke", layout: "Full-size", connect: "Bluetooth / USB", battery: "10 días", stars: "4,6/5", best: "Más vendido" },
  { pos: 2, name: "Keychron K2 Pro", asin: "B0BKLNBPPH", price: "€89,99", type: "Mecánico", switches: "Red / Brown / Blue", layout: "75%", connect: "Bluetooth / USB-C", battery: "4.000mAh", stars: "4,5/5", best: "Mejor mecánico" },
  { pos: 3, name: "Apple Magic Keyboard", asin: "B09BRG3MZ2", price: "€129,00", type: "Membrana", switches: "Membrana", layout: "Full-size", connect: "Bluetooth", battery: "1 mes", stars: "4,7/5", best: "Para Mac" },
  { pos: 4, name: "Logitech K380 Multi-Device", asin: "B013SL2E7U", price: "€44,99", type: "Membrana", switches: "Membrana", layout: "Compacto", connect: "Bluetooth x3", battery: "24 meses", stars: "4,5/5", best: "Multidispositivo" },
  { pos: 5, name: "Microsoft Ergonomic Keyboard", asin: "B07FNJXQKK", price: "€79,99", type: "Membrana", switches: "Membrana", layout: "Ergonómico split", connect: "USB", battery: "Cable USB", stars: "4,3/5", best: "El más ergonómico" },
];

const faqs = [
  { q: "¿Teclado mecánico o de membrana para trabajar?", a: "Depende de tu contexto. Los teclados mecánicos ofrecen un tacto más satisfactorio, mayor precisión en cada pulsación y son más duraderos (50-100 millones de pulsaciones por tecla vs 5-20 millones en membrana). El inconveniente es el ruido: los switches mecánicos con feedback táctil y auditivo (Brown, Blue) pueden molestar en calls o si hay alguien cerca. En casa con privacidad, un mecánico con switches silenciosos (Red, Silent Red) es una excelente opción. Para oficina o calls frecuentes, un teclado de membrana de calidad como el Logitech MX Keys es más apropiado." },
  { q: "¿Layout completo (Full-size), TKL o compacto (75%, 65%)?", a: "Full-size con teclado numérico: ideal si trabajas mucho con hojas de cálculo y datos numéricos. TKL (sin numérico): el equilibrio más popular, mantiene las teclas de función y flechas en un formato más compacto. 75% (como el Keychron K2): incluye flechas y función pero muy compacto. Para laptop: combina bien con teclados compactos que no añadan mucho espacio al escritorio. Recomendación general: TKL para la mayoría de trabajadores de conocimiento." },
  { q: "¿Inalámbrico Bluetooth o con cable para teletrabajo?", a: "Para trabajo en escritorio fijo, la diferencia práctica es mínima. El cable garantiza cero latencia y no requiere cargar la batería. El Bluetooth/inalámbrico libera el escritorio de cables y permite usar el mismo teclado con varios dispositivos (portátil + iPad, por ejemplo). El Logitech MX Keys puede conectarse a 3 dispositivos y cambiar entre ellos con un botón, lo que es una ventaja real si usas Mac, Windows e iPad." },
  { q: "¿Vale la pena un teclado ergonómico partido (split)?", a: "Para quienes sufren de tensión en muñecas, hombros o síndrome del túnel carpiano, un teclado ergonómico partido puede marcar una diferencia significativa. La posición natural de los brazos y muñecas al escribir en un teclado partido es más anatómica. El período de adaptación (1-2 semanas para recuperar la velocidad de escritura) es el principal obstáculo. Si ya tienes molestias recurrentes, vale la pena probarlos." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores teclados para trabajo remoto 2025 — Mecánicos y de membrana",
  datePublished: "2025-04-15",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-teclados-trabajo-remoto",
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
    { "@type": "ListItem", position: 3, name: "Mejores teclados trabajo remoto", item: "https://www.emprendedigital.es/mejores-teclados-trabajo-remoto" },
  ],
};

export default function TecladosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>{" › "}
          <span className="text-gray-600">Teclados trabajo remoto</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores teclados para trabajo remoto 2025 — Mecánicos y de membrana
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 15 abril 2025 · 10 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>Pasamos miles de horas al año escribiendo. Un buen teclado mejora la comodidad, reduce la fatiga de las muñecas y, si es mecánico, puede hacer la experiencia de escritura genuinamente placentera. La elección entre mecánico y membrana, inalámbrico o con cable, y el layout correcto depende de cómo y dónde trabajas.</p>
          <p>Hemos analizado los <strong>5 mejores teclados para trabajo remoto</strong> disponibles en Amazon España en 2025.</p>
          <h2>Tabla comparativa — Los mejores teclados para teletrabajo 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Switches</th>
                <th className="px-3 py-3 text-left">Layout</th>
                <th className="px-3 py-3 text-left">Conectividad</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.switches}</td>
                  <td className="px-3 py-3 text-gray-600">{p.layout}</td>
                  <td className="px-3 py-3 text-gray-600">{p.connect}</td>
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

        <AdSenseAd slot="7777777777" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Logitech MX Keys Advanced S — El mejor para productividad (★★★★½)</h3>
          <p>El <strong>Logitech MX Keys Advanced S</strong> es el teclado de referencia para profesionales que valoran la comodidad y la productividad: teclas esféricas que abrazan los dedos, retroiluminación con sensor de presencia, conexión simultánea a 3 dispositivos y compatibilidad con el software Logi Options+ para personalización completa de atajos.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B0B2R5VP5V")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Logitech MX Keys S en Amazon →
            </a>
          </div>

          <h3>2. Keychron K2 Pro — El mejor mecánico para trabajo (★★★★½)</h3>
          <p>El <strong>Keychron K2 Pro</strong> es el mecánico más recomendado para trabajo remoto: layout 75% compacto con teclado de función y flechas, disponible con switches Hot-Swap (puedes cambiar los switches sin soldar), retroiluminación RGB y conexión Bluetooth/USB. Disponible en switches Red (silenciosos), Brown (táctiles) o Blue (auditivos).</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B0BKLNBPPH")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Keychron K2 Pro en Amazon →
            </a>
          </div>

          <h3>3. Apple Magic Keyboard — El mejor para ecosistema Mac (★★★★½)</h3>
          <p>El <strong>Apple Magic Keyboard</strong> con Touch ID es la opción obvia para usuarios de Mac: integración perfecta con macOS, desbloqueo por huella digital, batería de un mes y el perfil ultrafino característico de Apple. Para usuarios de Windows no tiene ventajas particulares.</p>

          <h3>4. Logitech K380 — El más versátil multidispositivo (★★★★½)</h3>
          <p>El <strong>Logitech K380</strong> se conecta a hasta 3 dispositivos Bluetooth simultáneamente y alterna entre ellos con un botón. Compacto, silencioso y con batería de 2 años. La opción perfecta para quienes trabajan con portátil + tablet + móvil y quieren usar el mismo teclado para todo.</p>

          <h3>5. Microsoft Ergonomic Keyboard — Para prevenir lesiones (★★★★)</h3>
          <p>El <strong>Microsoft Ergonomic Keyboard</strong> tiene el diseño partido curvo que reduce la tensión en muñecas y antebrazos. Incluye reposamuñecas integrado. Si tienes molestias en las muñecas, este teclado (junto con el Microsoft Sculpt Ergonomic Mouse) puede aliviarlas significativamente.</p>

          <h2>Preguntas frecuentes sobre teclados para teletrabajo</h2>
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
            <li><Link href="/mejores-portatiles-trabajo-remoto" className="text-indigo-600 hover:underline">→ Los 5 mejores portátiles para trabajo remoto en 2025</Link></li>
            <li><Link href="/mejores-sillas-ergonomicas-teletrabajo" className="text-indigo-600 hover:underline">→ Mejores sillas ergonómicas para teletrabajo 2025</Link></li>
            <li><Link href="/mejores-escritorios-ajustables-altura" className="text-indigo-600 hover:underline">→ Mejores escritorios ajustables en altura 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
