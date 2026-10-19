import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/data/products";

type Props = { params: Promise<{ categoria: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  const seo = categorySeo[cat.slug];
  return {
    // Con el sufijo « | Emprende Digital» del layout el <title> final queda en ≤ 65 caracteres.
    title: seo?.title ?? `${cat.name}: guía de compra`,
    description: seo?.description ?? `Los mejores ${cat.name.toLowerCase()} para emprendedores digitales y teletrabajadores. Análisis, comparativas y guías de compra independientes.`,
    alternates: { canonical: `https://www.emprendedigital.es/tienda/${cat.slug}` },
  };
}

// Title y description específicos por categoría (opcional). Las que no figuran aquí
// usan la plantilla genérica de generateMetadata.
const categorySeo: Record<string, { title: string; description: string }> = {
  escritorios: {
    title: "Mesa escritorio elevable y convertidores",
    description: "Mesas de escritorio elevables eléctricas de 100×60 a 160×80 cm, de uno y dos motores, y un convertidor de sobremesa. Rango de altura, carga y memorias.",
  },
  "sillas-ergonomicas": {
    title: "Sillas de oficina ergonómicas: comparativa",
    description: "Sillas de oficina ergonómicas con lumbar ajustable, profundidad de asiento y reposabrazos 3D/4D, de malla o espuma, de gama económica a Steelcase.",
  },
};

const buyingGuides: Record<string, { title: string; paragraphs: string[] }> = {
  portatiles: {
    title: "¿Qué portátil es el adecuado para trabajar en remoto?",
    paragraphs: [
      "Un buen portátil para trabajo remoto debe equilibrar rendimiento, autonomía y portabilidad. En 2025, los chips Apple M3 y los Intel Core Ultra son las opciones más eficientes energéticamente.",
      "Para la mayoría de teletrabajadores (ofimática, videollamadas, gestión), un portátil con 16 GB de RAM y SSD de 512 GB es más que suficiente. Para diseñadores o editores de vídeo, considera modelos con GPU dedicada o 32 GB de RAM.",
      "La autonomía real es crucial si te desplazas: busca modelos con más de 10 horas reales con uso mixto. Los MacBook Air M3 y los ultrabooks premium son los líderes en este apartado.",
    ],
  },
  perifericos: {
    title: "¿Qué teclado y ratón necesitas para trabajar en remoto?",
    paragraphs: [
      "Los periféricos correctos mejoran la ergonomía y la productividad. Un buen teclado de membrana o mecánico reduce la fatiga en jornadas largas de escritura. Si eliges un mecánico, comprueba en la ficha que la distribución sea española (ISO-ES, con ñ) y evita los interruptores clicky si haces videollamadas.",
      "Para el ratón, el factor más importante es la comodidad en sesiones largas. Los ratones ergonómicos como el Logitech MX Master 3S tienen una curva pronunciada que reduce la tensión en la muñeca.",
      "La conectividad Bluetooth o el receptor USB unificador permiten usar los mismos periféricos con múltiples dispositivos, lo que es una ventaja si alternan entre portátil y ordenador de sobremesa.",
    ],
  },
  microfonos: {
    title: "¿Qué micrófono necesitas para podcast y videollamadas?",
    paragraphs: [
      "Para empezar en podcast o streaming, un micrófono USB conectado directamente al ordenador es la opción más sencilla y efectiva. No necesitas ningún hardware adicional.",
      "El patrón cardioide es el ideal para grabaciones individuales: captura el sonido frontal y rechaza los ruidos de fondo. Para entrevistas con invitados en la misma habitación, el patrón bidireccional es más adecuado.",
      "El tratamiento acústico de la habitación importa tanto como el micrófono. Grabar en una habitación con cortinas, alfombra y muebles reduce notablemente la reverberación.",
    ],
  },
  webcams: {
    title: "¿Qué webcam mejora tu imagen en videollamadas?",
    paragraphs: [
      "Una webcam externa de 1080p ya supera significativamente la calidad de la mayoría de cámaras integradas en portátiles, que suelen ser 720p con baja sensibilidad lumínica.",
      "Para videollamadas de trabajo, 1080p es suficiente: la mayoría de plataformas (Teams, Zoom, Meet) no transmiten por encima de 1080p. El 4K solo aporta ventaja real para grabación y edición posterior.",
      "La posición de la webcam es tan importante como la calidad: debe estar al nivel de los ojos o ligeramente por encima, nunca mirando hacia arriba (desde el escritorio) ni hacia abajo.",
    ],
  },
  auriculares: {
    title: "¿Qué auriculares son mejores para el teletrabajo?",
    paragraphs: [
      "Los auriculares con cancelación activa de ruido (ANC) son la inversión más transformadora para teletrabajadores en entornos ruidosos: eliminan el ruido de fondo y mejoran la concentración.",
      "Para muchas videollamadas al día, el micrófono de los auriculares es tan importante como la calidad de audio. Los modelos Jabra y similares tienen micrófonos con supresión de ruido de voz superiores a los de consumo general.",
      "La autonomía es clave: busca modelos con 30+ horas de batería con ANC activo para cubrir varias jornadas sin recargar.",
    ],
  },
  iluminacion: {
    title: "¿Cómo iluminar correctamente tu espacio de trabajo?",
    paragraphs: [
      "La iluminación es la mejora de imagen con mejor relación entre coste y beneficio. Una buena iluminación frontal transforma la calidad de tu imagen en videollamadas y grabaciones.",
      "La posición ideal para la luz principal es a 45° frente a ti, ligeramente por encima del nivel de los ojos. Esto crea una iluminación facial natural sin sombras duras.",
      "Para ajustar la temperatura de color: 5000-5500K para entornos con luz natural de día; 3000-3500K si hay predominancia de bombillas cálidas en la habitación.",
    ],
  },
  "sillas-ergonomicas": {
    title: "¿Cómo elegir una silla de oficina ergonómica?",
    paragraphs: [
      "Una silla de oficina ergonómica tiene que regular la altura del asiento, la profundidad del asiento, el soporte lumbar en altura y profundidad y los reposabrazos.",
      "Sentado con la espalda apoyada, deben quedar unos 5 cm (un puño) entre el borde del asiento y la parte trasera de la rodilla, y los reposabrazos deben rozar el codo con el brazo a 90°, como indica la NTP 1130 del INSST.",
      "La malla transpira mejor y es más fresca en verano; la espuma es más cálida y mullida. Muchas sillas combinan respaldo de malla y asiento de espuma. Tienes la explicación completa en nuestra guía de la silla ergonómica.",
    ],
  },
  escritorios: {
    title: "¿Qué mesa de escritorio elevable elegir?",
    paragraphs: [
      "El rango de altura debe incluir tu altura de codo sentado y de pie: mide del suelo a la parte inferior del codo con los brazos a 90° y compara con la altura mínima y máxima de cada modelo.",
      "El doble motor suele admitir más carga y subir de forma más uniforme: en este catálogo, los modelos de un motor declaran unos 80 kg y el de doble motor, 100 kg. Con dos monitores, brazo o torre sobre la mesa, compensa.",
      "Elige el tablero por tus pantallas: 120 × 60 cm para un monitor, 140 × 70 cm para dos de 24 pulgadas y 160 × 80 cm para dos de 27. Las memorias guardan tus alturas de sentado y de pie, y el sistema anticolisión detiene la mesa si encuentra un obstáculo.",
    ],
  },
};

const relatedArticles: Record<string, { title: string; href: string }[]> = {
  portatiles: [
    { title: "Mejor portátil para trabajar desde casa: Mac, Windows o Windows ARM", href: "/blog/mejor-portatil-trabajar-desde-casa-mac-windows-arm-2026" },
    { title: "Cómo conectar dos monitores a un portátil", href: "/blog/conectar-dos-monitores-portatil-guia" },
  ],
  perifericos: [
    { title: "Teclado mecánico para oficina y teletrabajo: cómo elegirlo y modelos con ñ", href: "/blog/mejores-teclados-mecanicos-trabajar-oficina" },
    { title: "Mejor teclado y ratón para trabajo remoto — Comparativa", href: "/blog/mejor-teclado-raton-trabajo-remoto" },
  ],
  microfonos: [{ title: "Mejor micrófono USB para podcast, streaming y videollamadas en 2026", href: "/blog/mejor-microfono-usb-podcast-streaming-2026" }],
  webcams: [{ title: "Mejor webcam para videollamadas de trabajo remoto", href: "/blog/mejor-webcam-videollamadas-trabajo-remoto" }],
  auriculares: [
    { title: "Mejores auriculares con cancelación de ruido para trabajar", href: "/blog/mejores-auriculares-cancelacion-ruido-trabajo-2025" },
    { title: "Sony WH-1000XM5: análisis y opinión", href: "/blog/sony-wh1000xm5-analisis-opinion" },
    { title: "Soundcore Space One: la alternativa económica a los Sony WH-1000XM5", href: "/blog/soundcore-space-one-analisis" },
  ],
  iluminacion: [{ title: "Iluminación para videollamadas: guía completa y mejores opciones", href: "/blog/iluminacion-videollamadas-home-office" }],
  "sillas-ergonomicas": [
    { title: "Silla ergonómica de oficina: guía para elegirla y comparativa 2026", href: "/blog/mejor-silla-ergonomica-home-office-2025" },
    { title: "Dolor de espalda trabajando desde casa: causas y soluciones", href: "/blog/dolor-espalda-trabajar-casa-soluciones" },
    { title: "hjh OFFICE Ergohuman Slim GEN2: análisis", href: "/blog/hjh-office-ergohuman-slim-gen2-analisis" },
  ],
  escritorios: [
    { title: "Escritorio elevable eléctrico: guía de compra 2026 (altura, motores, tablero y comparativa)", href: "/blog/escritorio-regulable-altura-home-office" },
    { title: "Dolor de espalda trabajando desde casa: causas y soluciones", href: "/blog/dolor-espalda-trabajar-casa-soluciones" },
  ],
};

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) notFound();

  const catProducts = getProductsByCategory(categoria);
  const guide = buyingGuides[categoria];
  const related = relatedArticles[categoria] ?? [];

  const categoriesWithCount = categories.map((c) => ({
    ...c,
    count: getProductsByCategory(c.slug).length,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
      { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.emprendedigital.es/tienda" },
      { "@type": "ListItem", position: 3, name: cat.name, item: `https://www.emprendedigital.es/tienda/${cat.slug}` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.name,
    numberOfItems: catProducts.length,
    itemListElement: catProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.emprendedigital.es/tienda/${cat.slug}/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-5 flex items-center gap-1">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
          <span>›</span>
          <Link href="/tienda" className="hover:text-indigo-600 transition-colors">Tienda</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">{cat.name}</span>
        </nav>

        {/* Mobile: category pills */}
        <div className="md:hidden mb-5 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categoriesWithCount.map((c) => (
              <Link
                key={c.slug}
                href={`/tienda/${c.slug}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap transition-colors ${
                  c.slug === categoria
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-56 lg:w-64 flex-shrink-0">
            <div className="sticky top-4">
              <div className="bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-t-xl">
                Categorías
              </div>
              <nav className="border border-indigo-100 rounded-b-xl overflow-hidden divide-y divide-gray-100 bg-white shadow-sm">
                {categoriesWithCount.map((c) => {
                  const isActive = c.slug === categoria;
                  return (
                    <Link
                      key={c.slug}
                      href={`/tienda/${c.slug}`}
                      className={`flex items-center gap-2.5 px-4 py-2.5 transition-colors group ${
                        isActive
                          ? "bg-indigo-50 border-l-2 border-indigo-600"
                          : "hover:bg-indigo-50 hover:text-indigo-700"
                      }`}
                    >
                      <span className="text-lg leading-none">{c.icon}</span>
                      <span
                        className={`flex-1 text-xs font-medium leading-snug ${
                          isActive ? "text-indigo-700 font-semibold" : "text-gray-700 group-hover:text-indigo-700"
                        }`}
                      >
                        {c.name}
                      </span>
                      <span
                        className={`text-xs rounded-full px-1.5 py-0.5 tabular-nums transition-colors ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-100 text-gray-400 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                        }`}
                      >
                        {c.count}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Compact category header */}
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl leading-none mt-0.5">{cat.icon}</span>
              <div>
                <h1 className="text-xl font-extrabold text-gray-900 leading-tight">{cat.name}</h1>
                <p className="text-sm text-gray-500 mt-0.5">{cat.description}</p>
              </div>
            </div>

            {/* Product count bar */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">{catProducts.length}</span>{" "}
                {catProducts.length === 1 ? "producto analizado" : "productos analizados"}
              </p>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {catProducts.map((product) => (
                <div
                  key={product.slug}
                  className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-indigo-200 transition-all group flex flex-col"
                >
                  <div className="p-4 flex flex-col flex-1">
                    {product.badge && (
                      <span className="inline-block self-start text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mb-2">
                        {product.badge}
                      </span>
                    )}
                    <h2 className="font-bold text-gray-900 mb-1.5 group-hover:text-indigo-600 transition-colors leading-snug text-sm flex-1">
                      {product.name}
                    </h2>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.shortDescription}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500">Ver precio actual</span>
                      <Link
                        href={`/tienda/${cat.slug}/${product.slug}`}
                        className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-3 py-1.5 transition-colors"
                      >
                        Ver análisis →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buying guide */}
            {guide && (
              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mb-6">
                <h2 className="text-base font-bold text-gray-900 mb-3">{guide.title}</h2>
                <div className="space-y-2.5">
                  {guide.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-700 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Related articles */}
            {related.length > 0 && (
              <div className="p-5 bg-white border border-gray-100 rounded-xl mb-4">
                <h3 className="font-bold text-gray-900 mb-2.5 text-sm">Guías de compra relacionadas</h3>
                <ul className="space-y-1.5">
                  {related.map((art) => (
                    <li key={art.href}>
                      <Link href={art.href} className="text-indigo-600 hover:underline text-sm">
                        → {art.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Affiliate footnote */}
            <p className="text-xs text-gray-400 mt-2 pl-3 border-l-2 border-gray-200">
              Este sitio contiene enlaces de afiliado. Si compras a través de ellos recibimos una pequeña comisión, sin coste adicional para ti.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
