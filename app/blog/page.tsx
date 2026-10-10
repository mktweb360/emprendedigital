import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Guías de compra y análisis de herramientas para emprendedores digitales",
  description:
    "Todos nuestros artículos sobre portátiles, micrófonos, webcams, auriculares, sillas ergonómicas y más. Comparativas y guías de compra actualizadas.",
  alternates: { canonical: "https://www.emprendedigital.es/blog" },
  openGraph: {
    title: "Blog — Guías de compra para emprendedores digitales | Emprende Digital",
    description: "Todos nuestros artículos sobre herramientas y equipamiento para emprendedores digitales.",
    url: "https://www.emprendedigital.es/blog",
  },
};

type ArticleCard = {
  href: string;
  icon: string;
  title: string;
  excerpt: string;
  date: string;
  price: string | null;
  category: string;
  image?: string;
};

// Las antiguas landing pages estáticas se consolidaron en el blog con 301 (10/10/2026).
const staticArticles: ArticleCard[] = [];

const postIcons: Record<string, string> = {
  "Home Office": "🪑",
  Productividad: "⚡",
  "Emprender Online": "🚀",
  "Trabajo Remoto": "🏠",
};

// Artículos del motor de blog dinámico (data/posts.ts → /blog/[slug]).
const blogPosts: ArticleCard[] = posts.map((p) => ({
  href: `/blog/${p.slug}`,
  icon: postIcons[p.category] ?? "📝",
  title: p.title,
  excerpt: p.excerpt,
  date: p.date,
  price: null,
  category: p.category,
  image: p.image,
}));

const allArticles: ArticleCard[] = [...staticArticles, ...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.emprendedigital.es/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500 mb-10">
          Guías de compra y análisis actualizados para emprendedores digitales en 2025
        </p>
        <div className="grid grid-cols-1 gap-6">
          {allArticles.map((art) => (
            <Link
              key={art.href}
              href={art.href}
              className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              {art.image ? (
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              ) : (
                <div className="px-6 pt-6 text-5xl">{art.icon}</div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {art.category}
                  </span>
                </div>
                <h2 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {art.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{art.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-gray-400">{art.date}</time>
                  <span className="text-indigo-600 font-semibold text-sm whitespace-nowrap">
                    Leer →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
