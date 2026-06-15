import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductsByCategory, getProductBySlug, categories } from "@/data/products";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

type Props = { params: Promise<{ categoria: string; producto: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ categoria: p.categorySlug, producto: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { producto } = await params;
  const product = getProductBySlug(producto);
  if (!product) return {};
  return {
    title: `${product.name} — Análisis y opiniones 2025`,
    description: `Análisis completo del ${product.name}: especificaciones, pros, contras, precio en Amazon y comparativa con alternativas. ¿Vale la pena en 2025?`,
    alternates: { canonical: `https://www.emprendedigital.es/tienda/${product.categorySlug}/${product.slug}` },
  };
}

const categoryFaqs: Record<string, { q: string; a: string }[]> = {
  portatiles: [
    { q: "¿Cuánta RAM necesito para teletrabajar?", a: "En 2025, 16 GB es el mínimo recomendable para multitarea cómoda. Con 8 GB puedes trabajar, pero con Chrome, Teams/Zoom y Office abiertos simultáneamente notarás limitaciones. Para diseño gráfico o edición de vídeo, considera 32 GB." },
    { q: "¿SSD o HDD para un portátil de trabajo?", a: "SSD siempre. La diferencia en velocidad de arranque, apertura de aplicaciones y transferencia de archivos es enorme. En 2025 todos los portátiles de gama media y alta incluyen SSD de serie. Un SSD de 512 GB es suficiente para la mayoría; si trabajas con archivos de vídeo grandes, 1 TB es preferible." },
  ],
  perifericos: [
    { q: "¿Mecánico o membrana para uso de oficina?", a: "Para oficinas abiertas o videollamadas frecuentes, los teclados de membrana silenciosos son más considerados con los compañeros. Para trabajo individual en casa, los mecánicos con switches táctiles ofrecen una experiencia de escritura superior." },
    { q: "¿Qué DPI necesito en un ratón para trabajo de oficina?", a: "Para trabajo de oficina en monitores Full HD o QHD, 800-1600 DPI es más que suficiente. El DPI alto es útil principalmente para gaming o trabajo en monitores 4K con mucho espacio de pantalla." },
  ],
  microfonos: [
    { q: "¿A qué distancia debo hablar al micrófono?", a: "Para micrófonos de condensador USB, la distancia ideal es de 15-25 cm, hablando directamente hacia la cápsula (no desde el lateral). Hablar demasiado cerca produce efecto de proximidad (voz muy grave y resonante); demasiado lejos capta más ruido de fondo." },
    { q: "¿Necesito filtro anti-pop para un micrófono USB?", a: "Para podcast y streaming, sí recomendamos usar un filtro anti-pop: elimina los sonidos explosivos de las consonantes 'P' y 'B' que pueden resultar molestos para los oyentes. Los filtros básicos cuestan menos de 10€ y marcan una diferencia notable en grabaciones de voz." },
  ],
  webcams: [
    { q: "¿Necesito drivers para instalar una webcam?", a: "La mayoría de webcams modernas (especialmente Logitech) son plug-and-play: se conectan por USB y el sistema operativo las reconoce automáticamente sin instalar drivers. Solo necesitas software adicional (como Logi Capture) si quieres acceder a funciones avanzadas de configuración." },
    { q: "¿La webcam funciona con cualquier aplicación?", a: "Sí. Las webcams USB se registran como dispositivos de captura estándar en el sistema operativo y son compatibles con cualquier aplicación que use la cámara: Zoom, Teams, Meet, OBS, Streamlabs, Discord, etc." },
  ],
  auriculares: [
    { q: "¿Los auriculares Bluetooth tienen latencia en videollamadas?", a: "La latencia del Bluetooth en videollamadas (voz/audio de conversación) es imperceptible para el uso humano: estamos hablando de 40-120 ms, que el cerebro no detecta como desincronización en una llamada normal. La latencia solo importa para juegos o edición de vídeo donde se percibe el desfase entre imagen y sonido." },
    { q: "¿Puedo usar los mismos auriculares para trabajo y entretenimiento?", a: "Sí, y los buenos auriculares con ANC son especialmente versátiles: funcionan perfectamente para videollamadas (con su micrófono), escuchar música mientras trabajas y ver contenido de entretenimiento. Modelos como el Sony WH-1000XM5 son excelentes en ambos contextos." },
  ],
  iluminacion: [
    { q: "¿Necesito una o dos luces para videollamadas?", a: "Con una sola luz frontal bien posicionada (a 45° frente a ti, ligeramente sobre el nivel de los ojos) consigues una imagen excelente para videollamadas. Una segunda luz de relleno más suave reduce las sombras del lado opuesto y da un resultado más profesional, pero no es necesaria para la mayoría." },
    { q: "¿La ring light produce el reflejo en los ojos que veo en vídeos?", a: "Sí. El reflejo circular característico que ves en los ojos de muchos YouTubers e influencers es el reflejo de la ring light. Es muy valorado en contenido de lifestyle y maquillaje por su efecto 'ojos vivos'. Para videollamadas de trabajo es perfectamente válido aunque también algo reconocible como setup de creador." },
  ],
  "sillas-ergonomicas": [
    { q: "¿Cuánto tiempo dura una silla ergonómica de calidad?", a: "Una silla ergonómica de calidad (200€+) dura entre 8 y 15 años con uso normal. Los componentes que primero se deterioran son las almohadillas del asiento (se comprimen con el tiempo) y los pistones de gas (pueden perder presión). Marcas como Herman Miller, Steelcase, o Secretlab ofrecen garantías de 5-12 años." },
    { q: "¿La silla ergonómica soluciona el dolor de espalda?", a: "Una buena silla ergonómica correctamente ajustada puede reducir significativamente el dolor de espalda causado por mala postura. Sin embargo, no es una solución mágica: también necesitas pausas regulares (levantarte cada 45-60 minutos), ejercicio y, si el dolor es persistente, consultar a un fisioterapeuta." },
  ],
  escritorios: [
    { q: "¿Cuánto tiempo al día debería trabajar de pie?", a: "La recomendación general es alternar entre sentado y de pie: 45-60 minutos sentado, 15-20 minutos de pie. Empezar por 1-2 horas de pie al día y aumentar gradualmente. Trabajar de pie todo el día tiene sus propios problemas (fatiga, várices). El objetivo es el movimiento regular, no maximizar el tiempo de pie." },
    { q: "¿Necesito una alfombrilla antifatiga con el escritorio ajustable?", a: "Si vas a estar de pie más de 20-30 minutos seguidos, sí. Una alfombrilla antifatiga reduce la fatiga en pies y rodillas significativamente. Son especialmente importantes en suelos duros (parqué, baldosas). Las mejores cuestan entre 30 y 80€ y duran años." },
  ],
};

export default async function ProductoPage({ params }: Props) {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  if (!product || product.categorySlug !== categoria) notFound();

  const cat = categories.find((c) => c.slug === categoria);
  const faqs = categoryFaqs[categoria] ?? [];
  const related = getProductsByCategory(categoria)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription,
    offers: {
      "@type": "Offer",
      price: product.priceMin,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: amazonLink(product.asin),
      seller: { "@type": "Organization", name: "Amazon.es" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
      { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.emprendedigital.es/tienda" },
      { "@type": "ListItem", position: 3, name: cat?.name ?? categoria, item: `https://www.emprendedigital.es/tienda/${categoria}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `https://www.emprendedigital.es/tienda/${categoria}/${producto}` },
    ],
  };

  const faqSchema = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/tienda" className="hover:text-indigo-600">Tienda</Link>{" › "}
          <Link href={`/tienda/${categoria}`} className="hover:text-indigo-600">{cat?.name ?? categoria}</Link>{" › "}
          <span className="text-gray-600">{product.name}</span>
        </nav>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
            {product.categoryName}
          </span>
          {product.badge && (
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">{product.name}</h1>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex text-yellow-400">{"★".repeat(Math.round(product.rating))}</div>
          <span className="font-bold text-gray-900">{product.rating}/5</span>
          <span className="text-gray-400 text-sm">({product.reviewCount} valoraciones)</span>
        </div>

        <AffiliateDisclosure />

        <div className="my-6 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-3xl font-extrabold text-gray-900">{product.price}</div>
            <div className="text-sm text-gray-500 mt-1">Precio orientativo · Ver precio actualizado en Amazon</div>
          </div>
          <a
            href={amazonLink(product.asin)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary shrink-0"
          >
            Ver precio en Amazon →
          </a>
        </div>

        <div className="prose">
          <h2>Análisis completo — {product.name}</h2>
          <p>{product.fullDescription}</p>
        </div>

        <AdSenseAd slot="9999999999" />

        <div className="grid sm:grid-cols-2 gap-6 my-8">
          <div className="p-5 bg-green-50 border border-green-100 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-green-500">✓</span> Ventajas
            </h3>
            <ul className="space-y-2">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 bg-red-50 border border-red-100 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-red-400">✗</span> Inconvenientes
            </h3>
            <ul className="space-y-2">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Especificaciones técnicas</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={key}
                className={`flex gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <span className="font-semibold text-gray-700 w-40 shrink-0">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 p-6 bg-indigo-600 text-white rounded-2xl">
          <h3 className="text-xl font-bold mb-2">¿Lo compramos?</h3>
          <p className="text-indigo-100 text-sm mb-4">
            El {product.name} es {product.shortDescription.toLowerCase()} Disponible en Amazon España con entrega
            rápida Prime.
          </p>
          <a
            href={amazonLink(product.asin)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Ver el mejor precio en Amazon →
          </a>
        </div>

        {faqs.length > 0 && (
          <div className="my-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    <span>{faq.q}</span>
                    <span className="text-indigo-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 leading-relaxed bg-gray-50 text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        )}

        <AffiliateDisclosure />

        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Otros productos de {cat?.name}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/tienda/${categoria}/${p.slug}`}
                  className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 hover:shadow-md transition-all group"
                >
                  {p.badge && (
                    <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mb-2">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-indigo-600 transition-colors mb-1 leading-snug">
                    {p.name}
                  </h3>
                  <p className="font-bold text-gray-800 text-sm">{p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
