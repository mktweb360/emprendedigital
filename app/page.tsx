import type { Metadata } from "next";
import Link from "next/link";
import { categories, getFeaturedProducts, getProductsByCategory } from "@/data/products";
import HeroBackground from "@/components/HeroBackground";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import OffersSlider, { type OfferSlide } from "@/components/OffersSlider";

export const metadata: Metadata = {
  title: "Emprende Digital — Herramientas y equipamiento para emprendedores digitales",
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

// Ofertas destacadas del slider — productos reales del catálogo con imagen y badge verificados
const offerSlides: OfferSlide[] = [
  {
    image: "/images/products/apple-macbook-air-m3-13.jpg",
    badge: "Mejor overall",
    title: "Apple MacBook Air M3 13\"",
    subtitle: "8GB / 256GB — rendimiento y autonomía para teletrabajo",
    price: "€1.299,00",
    href: "/tienda/portatiles/apple-macbook-air-m3-13",
  },
  {
    image: "/images/products/logitech-mx-master-3s.jpg",
    badge: "El mejor ratón",
    title: "Logitech MX Master 3S",
    subtitle: "Ratón inalámbrico de precisión para productividad diaria",
    price: "€99,99",
    href: "/tienda/perifericos/logitech-mx-master-3s",
  },
  {
    image: "/images/products/blue-yeti-usb-microfono.jpg",
    badge: "Referencia del sector",
    title: "Blue Yeti USB",
    subtitle: "Micrófono de condensador para podcast y streaming",
    price: "€129,99",
    href: "/tienda/microfonos/blue-yeti-usb-microfono",
  },
];

const articles = [
  {
    href: "/mejores-portatiles-trabajo-remoto",
    title: "Los 5 mejores portátiles para trabajo remoto en 2025",
    excerpt:
      "Comparativa completa: MacBook Air M3, ThinkPad X1 Carbon, ASUS ZenBook OLED y más. Elige según tu presupuesto y necesidades.",
    date: "2025-05-10",
  },
  {
    href: "/mejores-microfonos-podcast-streaming",
    title: "Mejores micrófonos para podcast y streaming 2025",
    excerpt:
      "Blue Yeti, HyperX SoloCast, Rode NT-USB Mini y más. Guía completa para empezar a grabar con calidad profesional desde casa.",
    date: "2025-05-18",
  },
  {
    href: "/mejores-sillas-ergonomicas-teletrabajo",
    title: "Mejores sillas ergonómicas para teletrabajo 2025",
    excerpt:
      "Invierte en tu salud: guía de compra de sillas ergonómicas para jornadas largas de trabajo en casa.",
    date: "2025-06-01",
  },
  {
    href: "/mejores-auriculares-teletrabajo",
    title: "Auriculares para teletrabajo con cancelación de ruido 2025",
    excerpt:
      "Sony WH-1000XM5, Jabra Evolve2 y más. Los mejores auriculares para concentrarte y comunicarte en trabajo remoto.",
    date: "2025-06-05",
  },
];

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
  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count: getProductsByCategory(cat.slug).length,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden text-white py-24 px-4" style={{minHeight: "520px"}}>
        <HeroBackground overlay="from-indigo-900/50 via-blue-800/35 to-indigo-900/45" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            Emprende Digital — Herramientas y equipamiento para emprendedores digitales
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl mx-auto [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
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
              href="/mejores-portatiles-trabajo-remoto"
              className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors text-lg"
            >
              Portátiles 2025 →
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías + Ofertas destacadas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Categorías y ofertas destacadas
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Elige tu categoría o descubre los productos mejor valorados del momento
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Menú vertical de categorías — 25% */}
            <aside className="w-full md:w-1/4 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm h-full">
                <div className="bg-indigo-600 px-4 py-3">
                  <span className="text-white font-semibold text-sm uppercase tracking-wide">
                    Categorías
                  </span>
                </div>
                <nav className="divide-y divide-gray-50">
                  {categoriesWithCount.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/tienda/${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 hover:text-indigo-700 transition-colors group"
                    >
                      <span className="text-xl leading-none">{cat.icon}</span>
                      <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-indigo-700 leading-tight">
                        {cat.name}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Slider de ofertas destacadas — 75% */}
            <div className="w-full md:w-3/4">
              <OffersSlider slides={offerSlides} intervalMs={4000} />
            </div>
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
            En <strong>Emprende Digital</strong> analizamos cada producto con criterio y honestidad. Comparamos especificaciones, leemos cientos de reseñas reales y probamos los equipos para darte las recomendaciones más útiles antes de comprar. No publicamos contenido patrocinado: nuestros ingresos provienen de comisiones de afiliado de Amazon, lo que no afecta a nuestras valoraciones.
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
