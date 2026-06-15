import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores webcams para videollamadas y streaming 2025 — Comparativa",
  description:
    "Logitech C920, Brio 4K, Razer Kiyo Pro y más. Elige la webcam perfecta para Zoom, Teams y Google Meet según tu presupuesto.",
  keywords: "mejores webcams videollamadas, webcam para Teams Zoom, Logitech C920 vs Brio, webcam streaming 2025",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-webcams-videollamadas" },
  openGraph: {
    title: "Mejores webcams para videollamadas y streaming 2025",
    description: "Comparativa completa de webcams para Zoom, Teams y streaming.",
    url: "https://www.emprendedigital.es/mejores-webcams-videollamadas",
  },
};

const products = [
  { pos: 1, name: "Logitech C920 HD Pro", asin: "B006A2Q81M", price: "€79,99", resolution: "1080p 30fps", fov: "78°", mic: "Dual estéreo", autofocus: "Sí", stars: "4,5/5", best: "Más vendida" },
  { pos: 2, name: "Logitech Brio 4K", asin: "B01N5UOYC4", price: "€169,99", resolution: "4K 30fps", fov: "65/78/90°", mic: "Triple", autofocus: "Sí (AI)", stars: "4,4/5", best: "La mejor 4K" },
  { pos: 3, name: "Razer Kiyo Pro", asin: "B0971CRWWT", price: "€99,99", resolution: "1080p 60fps", fov: "82°/90°", mic: "Triple", autofocus: "Sí", stars: "4,3/5", best: "Mejor baja luz" },
  { pos: 4, name: "Microsoft LifeCam HD-3000", asin: "B008ZVXOXQ", price: "€29,99", resolution: "720p 30fps", fov: "68,5°", mic: "Mono", autofocus: "No", stars: "4,1/5", best: "Mejor precio" },
  { pos: 5, name: "Elgato Facecam", asin: "B09736BDVZ", price: "€149,99", resolution: "1080p 60fps", fov: "82°", mic: "No incluido", autofocus: "No (foco fijo)", stars: "4,4/5", best: "Para streamers" },
];

const faqs = [
  { q: "¿1080p o 4K para videollamadas?", a: "Para videollamadas de trabajo, 1080p es más que suficiente: la mayoría de plataformas (Teams, Zoom, Meet) limitan la transmisión a 1080p incluso con cámaras 4K. La ventaja real del 4K aparece cuando grabas vídeos para editar después (puedes recortar sin perder calidad) o cuando haces streaming con mucho detalle visual. Para uso profesional diario, una buena webcam 1080p como la Logitech C920 ofrece una imagen excelente por mucho menos dinero." },
  { q: "¿Webcam independiente o cámara mirrorless como webcam?", a: "Una cámara mirrorless usada como webcam (con capturadora HDMI) ofrece la mejor calidad de imagen posible, con profundidad de campo bokeh cinematográfica. Pero la complejidad de configuración, el coste adicional (capturadora + adaptador de corriente) y el calentamiento de la cámara en sesiones largas lo hacen poco práctico para uso diario en videollamadas. Para la mayoría, una buena webcam dedicada como la Logitech Brio o la Razer Kiyo Pro es la solución más equilibrada." },
  { q: "¿Qué hacer si tengo contraluz (ventana detrás)?", a: "El contraluz es el principal enemigo de una buena imagen en videollamadas. Soluciones: 1) Gira el escritorio para que la ventana quede a tu lado o frente a ti (la mejor solución). 2) Usa una webcam con HDR como la Logitech Brio o la Razer Kiyo Pro, que compensan el contraluz automáticamente. 3) Añade una ring light o panel LED frente a ti para equilibrar la exposición. La combinación de posicionamiento correcto y buena iluminación frontal transforma cualquier webcam de gama media." },
  { q: "¿Necesito privacidad física en la webcam?", a: "Un obturador físico es una buena práctica de seguridad: garantiza que la cámara está apagada independientemente del software. La Logitech Brio y algunos otros modelos incluyen obturador físico. Si tu webcam no lo tiene, puedes comprar un protector adhesivo por menos de 5€. Los ataques de acceso remoto a webcams son infrecuentes pero posibles, y el obturador físico es la única protección 100% fiable." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores webcams para videollamadas y streaming 2025 — Comparativa",
  datePublished: "2025-05-25",
  dateModified: "2025-06-01",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-webcams-videollamadas",
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
    { "@type": "ListItem", position: 3, name: "Mejores webcams videollamadas", item: "https://www.emprendedigital.es/mejores-webcams-videollamadas" },
  ],
};

export default function WebcamsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>{" › "}
          <span className="text-gray-600">Webcams videollamadas</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores webcams para videollamadas y streaming 2025 — Comparativa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 25 mayo 2025 · 9 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>La cámara integrada en los portátiles suele ofrecer una resolución decepcionante y una imagen granulada en condiciones de baja luz, lo que proyecta una imagen poco profesional en videollamadas de trabajo. Una webcam externa de calidad transforma completamente tu presencia en pantalla y señala profesionalidad.</p>
          <p>Hemos analizado las <strong>5 mejores webcams para videollamadas y streaming</strong> disponibles en Amazon España en 2025.</p>
          <h2>Tabla comparativa — Las mejores webcams 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Resolución</th>
                <th className="px-3 py-3 text-left">Campo visual</th>
                <th className="px-3 py-3 text-left">Micrófono</th>
                <th className="px-3 py-3 text-left">Autofoco</th>
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
                  <td className="px-3 py-3 text-gray-600">{p.resolution}</td>
                  <td className="px-3 py-3 text-gray-600">{p.fov}</td>
                  <td className="px-3 py-3 text-gray-600">{p.mic}</td>
                  <td className="px-3 py-3 text-gray-600">{p.autofocus}</td>
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

        <AdSenseAd slot="4444444444" />

        <div className="prose">
          <h2>Análisis detallado</h2>
          <h3>1. Logitech C920 HD Pro — La más vendida del mundo (★★★★½)</h3>
          <p>La <strong>Logitech C920</strong> es la referencia absoluta en webcams desde hace años. 1080p 30fps con doble micrófono estéreo y corrección automática de luz HD. Compatible con todas las plataformas y sin necesidad de instalar drivers. La elección más segura para la mayoría de teletrabajadores.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B006A2Q81M")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">Ver Logitech C920 en Amazon →</a>
          </div>

          <h3>2. Logitech Brio 4K — La mejor calidad de imagen (★★★★½)</h3>
          <p>La <strong>Logitech Brio</strong> es la webcam más completa del mercado: 4K con HDR, campo visual ajustable entre 65°, 78° y 90°, Windows Hello para autenticación facial y tres micrófonos con supresión de ruido. Para quienes hacen muchas videollamadas y quieren proyectar la mejor imagen posible.</p>

          <h3>3. Razer Kiyo Pro — La mejor en condiciones de baja luz (★★★★)</h3>
          <p>La <strong>Razer Kiyo Pro</strong> destaca por su sensor CMOS de apertura f/2.0, que capta más luz que la competencia y ofrece una imagen excelente en entornos poco iluminados. Ideal para quienes trabajan con poca luz natural o no quieren invertir en iluminación adicional.</p>

          <h3>4. Microsoft LifeCam HD-3000 — La más económica (★★★★)</h3>
          <p>La <strong>Microsoft LifeCam HD-3000</strong> ofrece 720p a un precio imbatible. Sin autofoco y con solo un micrófono mono, sus limitaciones son evidentes, pero para quien solo necesita aparecer en videollamadas ocasionales es más que suficiente.</p>

          <h3>5. Elgato Facecam — Para streamers exigentes (★★★★½)</h3>
          <p>La <strong>Elgato Facecam</strong> está diseñada para streaming: 1080p 60fps con óptica Sony de foco fijo (sin motor de enfoque, lo que evita el efecto de búsqueda durante el stream). Sin micrófono integrado (asume que el streamer usa uno externo). Control total por app Elgato Camera Hub.</p>

          <h2>Preguntas frecuentes sobre webcams</h2>
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
            <li><Link href="/iluminacion-streaming-youtube" className="text-indigo-600 hover:underline">→ Iluminación para streaming y YouTube: ring lights y paneles LED</Link></li>
            <li><Link href="/mejores-microfonos-podcast-streaming" className="text-indigo-600 hover:underline">→ Mejores micrófonos para podcast y streaming 2025</Link></li>
            <li><Link href="/mejores-auriculares-teletrabajo" className="text-indigo-600 hover:underline">→ Auriculares para teletrabajo con cancelación de ruido</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
