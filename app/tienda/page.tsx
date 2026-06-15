import type { Metadata } from "next";
import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Tienda — Herramientas y equipamiento para emprendedores digitales",
  description:
    "Explora nuestra selección de portátiles, micrófonos, webcams, auriculares, sillas ergonómicas y más. Análisis detallados y los mejores precios en Amazon.",
  alternates: { canonical: "https://www.emprendedigital.es/tienda" },
  openGraph: {
    title: "Tienda — Herramientas para emprendedores digitales | Emprende Digital",
    description: "Los mejores productos para tu home office y setup de trabajo remoto.",
    url: "https://www.emprendedigital.es/tienda",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tienda Emprende Digital — Herramientas para emprendedores",
  description: "Selección de los mejores productos para emprendedores digitales y teletrabajadores.",
  url: "https://www.emprendedigital.es/tienda",
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
    { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.emprendedigital.es/tienda" },
  ],
};

export default function TiendaPage() {
  const featured = getFeaturedProducts(6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Tienda</h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Todo el equipamiento que necesitas para tu home office: analizamos, comparamos y seleccionamos los mejores productos disponibles en Amazon España.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/tienda/${cat.slug}`}
                className="flex flex-col items-center gap-2 p-5 border border-gray-100 rounded-xl hover:border-indigo-200 hover:shadow-md transition-all group text-center"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="font-semibold text-gray-800 text-sm group-hover:text-indigo-600 transition-colors leading-tight">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-400">{cat.priceRange}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <Link
                key={product.slug}
                href={`/tienda/${product.categorySlug}/${product.slug}`}
                className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {product.categoryName}
                  </span>
                  {product.badge && (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-900">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviewCount})</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block w-full text-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg py-2 transition-colors">
                    Ver análisis completo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">¿Por qué comprar a través de Emprende Digital?</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <div className="text-2xl mb-2">🔍</div>
              <strong className="block text-gray-900 mb-1">Análisis independiente</strong>
              Evaluamos cada producto de forma objetiva con criterios claros y comparativas reales.
            </div>
            <div>
              <div className="text-2xl mb-2">💰</div>
              <strong className="block text-gray-900 mb-1">Sin coste adicional</strong>
              Los enlaces de Amazon son afiliados: el precio es exactamente el mismo para ti.
            </div>
            <div>
              <div className="text-2xl mb-2">🔄</div>
              <strong className="block text-gray-900 mb-1">Contenido actualizado</strong>
              Revisamos nuestras recomendaciones regularmente para que siempre sean relevantes.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
