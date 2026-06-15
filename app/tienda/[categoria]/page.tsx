import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/data/products";
import { amazonLink } from "@/lib/amazon";

type Props = { params: Promise<{ categoria: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} — Guía de compra y comparativa 2025`,
    description: `Los mejores ${cat.name.toLowerCase()} para emprendedores digitales y teletrabajadores. Análisis, comparativas y los mejores precios en Amazon.`,
    alternates: { canonical: `https://www.emprendedigital.es/tienda/${cat.slug}` },
  };
}

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
      "Los periféricos correctos mejoran la ergonomía y la productividad. Un buen teclado de membrana o mecánico reduce la fatiga en jornadas largas de escritura.",
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
      "La iluminación es la inversión con mayor impacto visual por euro gastado. Una buena iluminación frontal transforma la calidad de tu imagen en videollamadas y grabaciones.",
      "La posición ideal para la luz principal es a 45° frente a ti, ligeramente por encima del nivel de los ojos. Esto crea una iluminación facial natural sin sombras duras.",
      "Para ajustar la temperatura de color: 5000-5500K para entornos con luz natural de día; 3000-3500K si hay predominancia de bombillas cálidas en la habitación.",
    ],
  },
  "sillas-ergonomicas": {
    title: "¿Cómo elegir la silla ergonómica correcta?",
    paragraphs: [
      "Los ajustes imprescindibles: altura del asiento, profundidad del asiento, soporte lumbar ajustable en altura y profundidad, y reposabrazos ajustables. Sin estos ajustes, una silla no puede adaptarse a tu cuerpo.",
      "Para uso intensivo (8+ horas/día), invierte al menos 200-250€. Por debajo de ese precio es difícil encontrar una silla con los ajustes ergonómicos necesarios para jornadas largas.",
      "El respaldo de malla transpirable es la mejor opción en climas mediterráneos y habitaciones que se calientan. El tapizado de cuero es más cálido y premium en apariencia pero retiene más el calor.",
    ],
  },
  escritorios: {
    title: "¿Qué escritorio ajustable en altura elegir?",
    paragraphs: [
      "El doble motor ofrece más estabilidad, mayor capacidad de carga (100-125 kg vs 70 kg) y es más silencioso. Para setups con múltiples monitores, el doble motor es necesario.",
      "El rango de altura debe cubrir tu posición sentada y de pie. Para la mayoría de adultos (165-185 cm), un rango de 60-125 cm es suficiente.",
      "Las posiciones de memoria programables son una comodidad real: elimina el ajuste manual cada vez que cambias de postura y fomenta que realmente uses el modo de pie.",
    ],
  },
};

const relatedArticles: Record<string, { title: string; href: string }[]> = {
  portatiles: [{ title: "Los 5 mejores portátiles para trabajo remoto en 2025", href: "/mejores-portatiles-trabajo-remoto" }],
  perifericos: [{ title: "Mejores teclados para trabajo remoto 2025", href: "/mejores-teclados-trabajo-remoto" }],
  microfonos: [{ title: "Mejores micrófonos para podcast y streaming 2025", href: "/mejores-microfonos-podcast-streaming" }],
  webcams: [{ title: "Mejores webcams para videollamadas y streaming 2025", href: "/mejores-webcams-videollamadas" }],
  auriculares: [{ title: "Auriculares para teletrabajo con cancelación de ruido 2025", href: "/mejores-auriculares-teletrabajo" }],
  iluminacion: [{ title: "Iluminación para streaming y YouTube: ring lights y paneles LED", href: "/iluminacion-streaming-youtube" }],
  "sillas-ergonomicas": [{ title: "Mejores sillas ergonómicas para teletrabajo 2025", href: "/mejores-sillas-ergonomicas-teletrabajo" }],
  escritorios: [{ title: "Mejores escritorios ajustables en altura 2025", href: "/mejores-escritorios-ajustables-altura" }],
};

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) notFound();

  const catProducts = getProductsByCategory(categoria);
  const guide = buyingGuides[categoria];
  const related = relatedArticles[categoria] ?? [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
      { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.emprendedigital.es/tienda" },
      { "@type": "ListItem", position: 3, name: cat.name, item: `https://www.emprendedigital.es/tienda/${cat.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/tienda" className="hover:text-indigo-600">Tienda</Link>{" › "}
          <span className="text-gray-600">{cat.name}</span>
        </nav>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-5xl">{cat.icon}</span>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{cat.name}</h1>
            <p className="text-gray-500 mt-1">{cat.description} · Rango de precio: {cat.priceRange}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {catProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/tienda/${cat.slug}/${product.slug}`}
              className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              {product.badge && (
                <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mb-3">
                  {product.badge}
                </span>
              )}
              <h2 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug text-sm">
                {product.name}
              </h2>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.shortDescription}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg text-gray-900">{product.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviewCount})</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="flex-1 text-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg py-2 transition-colors">
                  Ver análisis →
                </span>
                <a
                  href={amazonLink(product.asin)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg py-2 transition-colors"
                >
                  Amazon →
                </a>
              </div>
            </Link>
          ))}
        </div>

        {guide && (
          <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{guide.title}</h2>
            <div className="space-y-3">
              {guide.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 text-sm leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="p-6 bg-white border border-gray-100 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-3">Guías de compra relacionadas</h3>
            <ul className="space-y-2">
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
      </div>
    </>
  );
}
