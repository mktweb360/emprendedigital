import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { posts } from "@/data/posts";

const BASE = "https://www.emprendedigital.es";

// Las landing pages estáticas antiguas se consolidaron en el blog con 301 (10/10/2026).
const staticArticles: string[] = [];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.9 },
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

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
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

  return [...staticPages, ...articlePages, ...categoryPages, ...productPages, ...blogPages];
}
