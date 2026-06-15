import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Iluminación para streaming y YouTube: ring lights y paneles LED 2025",
  description:
    "Elgato Key Light Air, Neewer Ring Light 18\" y más. Guía completa para iluminar correctamente tu espacio de grabación y videollamadas.",
  keywords: "iluminación streaming youtube, ring light para videollamadas, panel LED home studio, Elgato Key Light review",
  alternates: { canonical: "https://www.emprendedigital.es/iluminacion-streaming-youtube" },
  openGraph: {
    title: "Iluminación para streaming y YouTube 2025",
    description: "Ring lights y paneles LED para videollamadas, streaming y grabación de contenido.",
    url: "https://www.emprendedigital.es/iluminacion-streaming-youtube",
  },
};

const products = [
  { pos: 1, name: "Elgato Key Light Air", asin: "B082QHRZFW", price: "€99,99", type: "Panel LED", watts: "38W", color: "2900–7000K", control: "App / WiFi", stars: "4,4/5", best: "Elección de streamers" },
  { pos: 2, name: "Neewer Ring Light 18\"", asin: "B01N3ONOQY", price: "€54,99", type: "Ring Light", watts: "55W", color: "3200–5500K", control: "Manual", stars: "4,5/5", best: "Mejor calidad-precio" },
  { pos: 3, name: "Elgato Key Light", asin: "B07L755X9G", price: "€149,99", type: "Panel LED", watts: "80W", color: "2900–7000K", control: "App / WiFi", stars: "4,5/5", best: "El más potente" },
  { pos: 4, name: "Lume Cube Panel Mini", asin: "B08KWQZJJT", price: "€89,99", type: "Panel LED", watts: "6W", color: "3000–5600K", control: "Manual", stars: "4,2/5", best: "El más portátil" },
  { pos: 5, name: "Godox SL-60W LED", asin: "B07DPPWNMB", price: "€79,99", type: "Fresnel LED", watts: "60W", color: "5600K fijo", control: "Manual", stars: "4,3/5", best: "Para vídeo profesional" },
];

const faqs = [
  { q: "¿Ring light o panel LED para videollamadas?", a: "Para videollamadas, el panel LED es más versátil: ilumina uniformemente una zona amplia, es más fácil de posicionar sin el reflejo circular en ojos que da la ring light. La ring light brilla en primeros planos y retratos gracias al reflejo circular en los ojos que resulta muy fotogénico, y es ideal para maquillaje y lifestyle. Para streaming de gaming o trabajo de cara a cámara en mesa, el panel LED frontal (como el Elgato Key Light Air) es la opción más cómoda y profesional." },
  { q: "¿Qué temperatura de color debo usar para videollamadas?", a: "Para videollamadas con luz natural de día (mañana/mediodía): 5000-5500K (luz de día neutra). Para entornos con luz artificial amarilla de bombillas: 3000-3500K para mezclar mejor con el ambiente. El ajuste ideal es que tu piel no aparezca ni demasiado fría/azulada ni demasiado cálida/naranja en cámara. La ventaja de los modelos con ajuste de temperatura (como el Elgato Key Light) es que puedes adaptar el tono según la hora del día." },
  { q: "¿Dónde debe colocarse la iluminación para video y streaming?", a: "La posición clásica 'Rembrandt' para vídeo: la luz principal a 45° frente a ti, ligeramente por encima del nivel de los ojos. Esto crea una iluminación facial natural sin sombras duras en la nariz. Para un look más plano (videollamadas de trabajo): la luz directamente frente a ti, al nivel de los ojos. Evita la luz en el techo (aplana la cara y proyecta sombras en los ojos) y nunca pongas la luz principal detrás de ti." },
  { q: "¿Cuántos lúmenes necesito para videollamadas en casa?", a: "Para una habitación de tamaño normal con algo de luz ambiente, 1000-2000 lúmenes de luz artificial frontal son suficientes para conseguir una imagen limpia con webcams modernas. Los modelos de gama media como el Elgato Key Light Air (2800 lúmenes) o el Neewer Ring Light 18\" son más que suficientes. Si grabas en espacios muy grandes o necesitas eliminar completamente la luz ambiente, necesitas más potencia." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Iluminación para streaming y YouTube: ring lights y paneles LED 2025",
  datePublished: "2025-04-28",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/iluminacion-streaming-youtube",
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
    { "@type": "ListItem", position: 3, name: "Iluminación streaming YouTube", item: "https://www.emprendedigital.es/iluminacion-streaming-youtube" },
  ],
};

export default function IluminacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>{" › "}
          <span className="text-gray-600">Iluminación streaming YouTube</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Iluminación para streaming y YouTube: ring lights y paneles LED 2025
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 28 abril 2025 · 9 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>La iluminación es la variable que más diferencia a un creador de contenido amateur de uno con aspecto profesional. Una buena webcam mal iluminada produce una imagen granulada y poco atractiva; una webcam básica bien iluminada produce una imagen limpia y profesional. La inversión en iluminación tiene el mayor retorno visual por euro gastado de todo el equipamiento de home office.</p>
          <p>Hemos analizado las <strong>5 mejores soluciones de iluminación para streaming, YouTube y videollamadas</strong> disponibles en Amazon España en 2025.</p>
          <h2>Tabla comparativa — La mejor iluminación para streaming 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Tipo</th>
                <th className="px-3 py-3 text-left">Potencia</th>
                <th className="px-3 py-3 text-left">Temperatura</th>
                <th className="px-3 py-3 text-left">Control</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.watts}</td>
                  <td className="px-3 py-3 text-gray-600">{p.color}</td>
                  <td className="px-3 py-3 text-gray-600">{p.control}</td>
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

        <AdSenseAd slot="5555555555" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. Elgato Key Light Air — La elección de los streamers profesionales (★★★★½)</h3>
          <p>El <strong>Elgato Key Light Air</strong> es el estándar de la industria para streamers profesionales por una razón: control total por WiFi desde la app de Elgato (Mac/Windows) o mediante atajo de teclado Stream Deck. Puedes ajustar brillo (0-100%) y temperatura de color (2900-7000K) sin levantarte del sitio durante una transmisión. Los 38W de LED de alta densidad ofrecen una luz uniforme y suave que elimina sombras duras.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B082QHRZFW")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Elgato Key Light Air en Amazon →
            </a>
          </div>

          <h3>2. Neewer Ring Light 18&quot; — La mejor relación calidad-precio (★★★★½)</h3>
          <p>El <strong>Neewer Ring Light 18&quot;</strong> es el favorito de YouTubers, maquilladores e influencers. Su gran diámetro (46 cm) proporciona una luz envolvente muy favorecedora, con el característico reflejo circular en los ojos que da un aspecto vivo y atractivo. Control manual de brillo y temperatura. Incluye soporte de pie telescópico y soporte para móvil. La relación calidad-precio es imbatible.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B01N3ONOQY")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Neewer Ring Light 18&quot; en Amazon →
            </a>
          </div>

          <h3>3. Elgato Key Light — El más potente (★★★★½)</h3>
          <p>El hermano mayor del Key Light Air: 80W de potencia frente a los 38W del Air. Ideal para habitaciones grandes o para quienes necesitan luz muy intensa para superar la luz natural de ventanas amplias. Las mismas ventajas de control WiFi y app, con el doble de potencia lumínica.</p>

          <h3>4. Lume Cube Panel Mini — El más portátil (★★★★)</h3>
          <p>El <strong>Lume Cube Panel Mini</strong> es una solución compacta que se monta directamente sobre la cámara o el monitor del portátil. Perfecto para nómadas digitales que necesitan iluminación portátil. Recargable por USB-C. Para videollamadas ocasionales fuera de casa es una solución práctica.</p>

          <h3>5. Godox SL-60W LED — Para vídeo profesional (★★★★)</h3>
          <p>El <strong>Godox SL-60W</strong> es una luz fresnel LED de estudio, silenciosa (sin ventilador ruidoso) y potente. Temperatura de color fija a 5600K (luz de día). Para quienes producen contenido de vídeo serio en un espacio dedicado, la calidad de luz de un fresnel es superior a la de un panel LED o ring light.</p>

          <h2>Preguntas frecuentes sobre iluminación para streaming</h2>
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
            <li><Link href="/mejores-microfonos-podcast-streaming" className="text-indigo-600 hover:underline">→ Mejores micrófonos para podcast y streaming 2025</Link></li>
            <li><Link href="/mejores-portatiles-trabajo-remoto" className="text-indigo-600 hover:underline">→ Los 5 mejores portátiles para trabajo remoto en 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
