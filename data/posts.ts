export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  relatedProducts?: string[];
  relatedPosts?: string[];
};

export const posts: Post[] = [
  {
    slug: "mejor-silla-ergonomica-home-office-2025",
    title: "Mejor silla ergonómica para home office en 2025 — Comparativa completa",
    excerpt:
      "Las mejores sillas ergonómicas para trabajar desde casa en 2025: SIHOO M57 y Hbada Pro comparadas. Guía de compra por presupuesto y horas de uso.",
    date: "2025-07-01",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["sihoo-m57-silla-ergonomica", "hbada-silla-ergonomica-pro"],
  },
  {
    slug: "sihoo-m57-analisis-opinion",
    title: "SIHOO M57: análisis completo y opiniones 2025",
    excerpt:
      "Análisis detallado de la SIHOO M57: qué la diferencia de otras sillas ergonómicas, para quién es la inversión correcta y sus puntos débiles reales.",
    date: "2025-07-02",
    category: "Home Office",
    readTime: "8 min",
    relatedProducts: ["sihoo-m57-silla-ergonomica", "hbada-silla-ergonomica-pro"],
  },
  {
    slug: "escritorio-regulable-altura-home-office",
    title: "Escritorio regulable en altura para home office: guía de compra 2025",
    excerpt:
      "Cómo elegir el mejor escritorio regulable en altura para trabajar desde casa: FlexiSpot E7 Pro vs FlexiSpot EG1. Comparativa por uso, presupuesto y espacio.",
    date: "2025-07-03",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["flexispot-e7-pro-escritorio-ajustable", "flexispot-eg1-escritorio-ajustable"],
  },
  {
    slug: "flexispot-e7-pro-analisis-opinion",
    title: "FlexiSpot E7 Pro: análisis completo y opiniones 2025",
    excerpt:
      "Todo sobre el FlexiSpot E7 Pro: especificaciones reales, experiencia de uso, puntos débiles y si justifica ser el escritorio regulable de referencia.",
    date: "2025-07-04",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["flexispot-e7-pro-escritorio-ajustable", "flexispot-eg1-escritorio-ajustable"],
  },
  {
    slug: "home-office-setup-productivo-guia",
    title: "Cómo montar un home office productivo: guía completa 2025",
    excerpt:
      "Guía paso a paso para montar un home office productivo desde cero: qué equipamiento necesitas, en qué orden comprarlo y cómo optimizar el espacio.",
    date: "2025-07-05",
    category: "Home Office",
    readTime: "10 min",
    relatedProducts: [
      "sihoo-m57-silla-ergonomica",
      "flexispot-e7-pro-escritorio-ajustable",
      "hbada-silla-ergonomica-pro",
    ],
  },
  {
    slug: "dolor-espalda-trabajar-casa-soluciones",
    title: "Dolor de espalda trabajando desde casa: causas y soluciones reales",
    excerpt:
      "Por qué aparece el dolor de espalda al trabajar desde casa y qué cambios de equipamiento y hábitos lo eliminan realmente. Guía basada en ergonomía.",
    date: "2025-07-06",
    category: "Home Office",
    readTime: "8 min",
    relatedProducts: ["sihoo-m57-silla-ergonomica", "hbada-silla-ergonomica-pro"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(n: number): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n);
}
