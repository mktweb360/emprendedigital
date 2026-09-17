import type { Metadata } from "next";
import Link from "next/link";
import { categories, getFeaturedProducts, getProductsByCategory } from "@/data/products";

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
  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count: getProductsByCategory(cat.slug).length,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mobile: category pills */}
        <div className="md:hidden mb-6 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categoriesWithCount.map((cat) => (
              <Link
                key={cat.slug}
                href={`/tienda/${cat.slug}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-medium whitespace-nowrap hover:bg-indigo-100 transition-colors"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — hidden on mobile */}
          <aside className="hidden md:block w-56 lg:w-64 flex-shrink-0">
            <div className="sticky top-4">
              <div className="bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-t-xl">
                Categorías
              </div>
              <nav className="border border-indigo-100 rounded-b-xl overflow-hidden divide-y divide-gray-100 bg-white shadow-sm">
                {categoriesWithCount.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/tienda/${cat.slug}`}
                    className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-indigo-50 hover:text-indigo-700 transition-colors group"
                  >
                    <span className="text-lg leading-none">{cat.icon}</span>
                    <span className="flex-1 text-xs font-medium text-gray-700 group-hover:text-indigo-700 leading-snug">
                      {cat.name}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-100 group-hover:bg-indigo-100 group-hover:text-indigo-600 rounded-full px-1.5 py-0.5 tabular-nums transition-colors">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Tienda</h1>
              <p className="text-sm text-gray-500">
                Todo el equipamiento para tu home office: analizamos y seleccionamos los mejores productos disponibles en Amazon España.
              </p>
            </div>

            <div className="mb-2">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Productos destacados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {featured.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/tienda/${product.categorySlug}/${product.slug}`}
                    className="border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-indigo-200 transition-all group flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                        {product.categoryName}
                      </span>
                      {product.badge && (
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-indigo-600 transition-colors leading-snug text-sm flex-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.shortDescription}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-base font-bold text-gray-900">{product.price}</span>
                      <span className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg px-3 py-1.5 transition-colors">
                        Ver análisis →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-6 pl-3 border-l-2 border-gray-200">
              Este sitio contiene enlaces de afiliado a Amazon.es. Si compras a través de ellos recibimos una pequeña comisión, sin coste adicional para ti.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
