import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";

const BASE = "https://www.emprendedigital.es";

const staticArticles = [
  "/mejores-portatiles-trabajo-remoto",
  "/mejores-microfonos-podcast-streaming",
  "/mejores-auriculares-teletrabajo",
  "/mejores-webcams-videollamadas",
  "/iluminacion-streaming-youtube",
  "/mejores-sillas-ergonomicas-teletrabajo",
  "/mejores-teclados-trabajo-remoto",
  "/mejores-escritorios-ajustables-altura",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/tienda`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/sobre-nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/aviso-legal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/politica-de-privacidad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/politica-de-cookies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  const articlePages: MetadataRoute.Sitemap = staticArticles.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/tienda/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}/tienda/${product.categorySlug}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...categoryPages, ...productPages];
}
