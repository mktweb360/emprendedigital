import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { isFeaturedProduct } from "@/lib/indexable";
import { posts } from "@/data/posts";
import { DIRECTORIO_ACTIVO, getFichas } from "@/lib/directorio";

const BASE = "https://www.emprendedigital.es";

// Las landing pages estáticas antiguas se consolidaron en el blog con 301 (10/10/2026).
const staticArticles: string[] = [];

// Última fecha real de publicación: lastmod honesto para la portada y el índice del blog.
const ULTIMO_POST = new Date(posts.map((p) => p.date).sort().at(-1) as string);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: ULTIMO_POST, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, lastModified: ULTIMO_POST, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/tienda`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/sobre-nosotros`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contacto`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/aviso-legal`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/politica-de-privacidad`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/politica-de-cookies`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = staticArticles.map((path) => ({
    url: `${BASE}${path}`,
   
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/tienda/${cat.slug}`,
   
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = products.filter((product) => !product.unavailable && isFeaturedProduct(product.slug)).map((product) => ({
    url: `${BASE}/tienda/${product.categorySlug}/${product.slug}`,
   
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Directorio (apagado por defecto): solo las fichas que MktOS marca como indexables; la portada, con 5 o más fichas.
  const fichas = DIRECTORIO_ACTIVO ? await getFichas() : [];
  const directorioPages: MetadataRoute.Sitemap = [
    ...(fichas.length >= 5 ? [{ url: `${BASE}/directorio`, changeFrequency: "weekly" as const, priority: 0.5 }] : []),
    ...fichas.filter((f) => f.indexable).map((f) => ({ url: `${BASE}/directorio/${f.slug}`, lastModified: new Date(f.updatedAt), changeFrequency: "monthly" as const, priority: 0.4 })),
  ];

  return [...staticPages, ...articlePages, ...categoryPages, ...productPages, ...blogPages, ...directorioPages];
}
