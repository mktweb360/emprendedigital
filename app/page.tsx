import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { getPostBySlug } from "@/data/posts";
import HeroBackground from "@/components/HeroBackground";
import EmailCaptureSection from "@/components/EmailCaptureSection";

export const metadata: Metadata = {
  title: { absolute: "Emprende Digital — Herramientas y equipamiento para emprendedores digitales" },
  description:
    "Guías de compra, análisis y comparativas de herramientas y equipamiento para emprendedores digitales, creadores de contenido y teletrabajadores.",
  alternates: { canonical: "https://www.emprendedigital.es" },
  openGraph: {
    title: "Emprende Digital — Herramientas y equipamiento para emprendedores digitales",
    description:
      "Guías de compra y comparativas de herramientas para emprendedores digitales y teletrabajadores.",
    url: "https://www.emprendedigital.es",
  },
};

const categories = [
  {
    href: "/tienda/portatiles",
    icon: "💻",
    title: "Portátiles para trabajo remoto",
    desc: "Los mejores portátiles para teletrabajar con rendimiento y autonomía",
    price: "Desde 400€",
  },
  {
    href: "/tienda/microfonos",
    icon: "🎙️",
    title: "Micrófonos para podcast",
    desc: "Calidad de estudio en casa para podcast, streaming y videollamadas",
    price: "Desde 30€",
  },
  {
    href: "/tienda/auriculares",
    icon: "🎧",
    title: "Auriculares para trabajar",
    desc: "Con y sin cancelación de ruido para concentrarte y comunicarte mejor",
    price: "Desde 20€",
  },
  {
    href: "/tienda/webcams",
    icon: "📷",
    title: "Webcams para videollamadas",
    desc: "Imagen profesional en todas tus reuniones de trabajo y streaming",
    price: "Desde 25€",
  },
  {
    href: "/tienda/iluminacion",
    icon: "💡",
    title: "Iluminación para streaming",
    desc: "Ring lights y paneles LED para una imagen impecable en cámara",
    price: "Desde 15€",
  },
  {
    href: "/tienda/sillas-ergonomicas",
    icon: "🪑",
    title: "Sillas ergonómicas",
    desc: "Cuida tu espalda con las mejores sillas ergonómicas para tu oficina",
    price: "Desde 100€",
  },
  {
    href: "/tienda/perifericos",
    icon: "⌨️",
    title: "Teclados para trabajar",
    desc: "Mecánicos o de membrana premium, inalámbricos y multidispositivo",
    price: "Desde 20€",
  },
  {
    href: "/tienda/escritorios",
    icon: "🖥️",
    title: "Escritorios ajustables",
    desc: "Alterna entre sentado y de pie para trabajar más saludable",
    price: "Desde 80€",
  },
  {
    href: "/tienda/monitores",
    icon: "🖥️",
    title: "Monitores",
    desc: "Monitores 4K y Full HD para home office",
    price: "Desde 180€",
  },
];

// Artículos destacados: se leen de data/posts.ts para que título, extracto y fecha estén siempre al día.
const featuredSlugs = [
  "conectar-dos-monitores-portatil-guia",
  "mejor-microfono-usb-podcast-streaming-2026",
  "mejor-silla-ergonomica-home-office-2025",
  "mejores-auriculares-cancelacion-ruido-trabajo-2025",
];
const articles = featuredSlugs
  .map((slug) => getPostBySlug(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({ href: `/blog/${p.slug}`, title: p.title, excerpt: p.excerpt, date: p.date }));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.emprendedigital.es",
    },
  ],
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 px-4" style={{minHeight: "520px"}}>
        <HeroBackground overlay="from-indigo-900/90 via-blue-800/80 to-indigo-900/85" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Herramientas y equipamiento para trabajar desde casa y emprender online
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Comparativas honestas y guías de compra para montar tu oficina en casa y crear contenido de calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-lg"
            >
              Ver todos los artículos
            </Link>
            <Link
              href="/tienda/portatiles"
              className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors text-lg"
            >
              Ver portátiles →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Categorías destacadas
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Elige tu categoría y encuentra el producto perfecto para tu setup
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-indigo-200 transition-all group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{cat.desc}</p>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  Ver productos →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured store products */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold text-gray-900">Tienda destacada</h2>
            <Link href="/tienda" className="text-indigo-600 font-semibold hover:underline text-sm">
              Ver todos →
            </Link>
          </div>
          <p className="text-gray-500 mb-8">Los productos mejor valorados por nuestros lectores</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <div key={product.slug} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{product.categoryName}</span>
                  {product.badge && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3 flex-grow">{product.shortDescription}</p>
                <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-end">
                  <Link
                    href={`/tienda/${product.categorySlug}/${product.slug}`}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Ver análisis →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Últimos artículos
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Análisis actualizados para emprendedores digitales en 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <time className="text-xs text-gray-400 mb-2 block">{art.date}</time>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{art.excerpt}</p>
                <span className="mt-4 inline-block text-indigo-600 text-sm font-semibold">
                  Leer artículo →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué confiar en nosotros?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            En <strong>Emprende Digital</strong> analizamos cada producto con criterio y honestidad. Comparamos especificaciones, leemos cientos de reseñas reales y probamos los equipos para darte las recomendaciones más útiles antes de comprar. No publicamos contenido patrocinado: nuestros ingresos provienen de comisiones de afiliado, lo que no afecta a nuestras valoraciones.
          </p>
          <Link href="/sobre-nosotros" className="text-indigo-600 font-semibold hover:underline">
            Saber más sobre nosotros →
          </Link>
        </div>
      </section>
      
      {/* LEAD MAGNET — Captura de email */}
      <EmailCaptureSection />

    </>
  );
}
