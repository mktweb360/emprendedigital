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
    relatedPosts: ["sihoo-m57-analisis-opinion", "dolor-espalda-trabajar-casa-soluciones", "home-office-setup-productivo-guia"],
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
    relatedPosts: ["mejor-silla-ergonomica-home-office-2025", "escritorio-regulable-altura-home-office", "dolor-espalda-trabajar-casa-soluciones"],
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
    relatedPosts: ["flexispot-e7-pro-analisis-opinion", "home-office-setup-productivo-guia", "organizar-cables-home-office-guia"],
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
    relatedPosts: ["escritorio-regulable-altura-home-office", "home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima"],
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
    relatedPosts: ["mejor-silla-ergonomica-home-office-2025", "escritorio-regulable-altura-home-office", "setup-trabajo-remoto-productividad-maxima", "mejor-monitor-home-office-2025"],
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
    relatedPosts: ["mejor-silla-ergonomica-home-office-2025", "sihoo-m57-analisis-opinion", "home-office-setup-productivo-guia"],
  },
  {
    slug: "mejor-teclado-raton-trabajo-remoto",
    title: "Mejor teclado y ratón para trabajo remoto en 2025 — Comparativa",
    excerpt:
      "Los mejores teclados y ratones para trabajar desde casa: Logitech MX Keys Advanced S, MX Master 3S y Keychron K2 Pro. Guía por uso y presupuesto.",
    date: "2025-07-09",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "logitech-mx-master-3s", "keychron-k2-pro-mecanico"],
    relatedPosts: ["logitech-mx-keys-analisis-opinion", "setup-trabajo-remoto-productividad-maxima", "herramientas-productividad-trabajo-remoto-2025", "monitor-4k-vs-full-hd-trabajo-remoto"],
  },
  {
    slug: "logitech-mx-keys-analisis-opinion",
    title: "Logitech MX Keys: análisis completo y opiniones 2025",
    excerpt:
      "Análisis del Logitech MX Keys Advanced S: por qué es el teclado más recomendado para home office, sus limitaciones reales y si justifica los 119 €.",
    date: "2025-07-10",
    category: "Productividad",
    readTime: "7 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "keychron-k2-pro-mecanico"],
    relatedPosts: ["mejor-teclado-raton-trabajo-remoto", "setup-trabajo-remoto-productividad-maxima", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "setup-trabajo-remoto-productividad-maxima",
    title: "Setup de trabajo remoto para máxima productividad: guía 2025",
    excerpt:
      "Cómo construir un setup de trabajo remoto productivo: teclado, ratón, monitor e iluminación. Guía por niveles de presupuesto con productos reales.",
    date: "2025-07-11",
    category: "Productividad",
    readTime: "9 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "logitech-mx-master-3s"],
    relatedPosts: ["mejor-teclado-raton-trabajo-remoto", "iluminacion-videollamadas-home-office", "productividad-trabajando-desde-casa-habitos", "mejor-monitor-home-office-2025"],
  },
  {
    slug: "herramientas-productividad-trabajo-remoto-2025",
    title: "Las mejores herramientas de productividad para trabajo remoto en 2025",
    excerpt:
      "Herramientas de productividad esenciales para trabajar desde casa: gestión de tareas, comunicación, foco y automatización. Guía actualizada 2025.",
    date: "2025-07-12",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "logitech-mx-master-3s", "keychron-k2-pro-mecanico"],
    relatedPosts: ["productividad-trabajando-desde-casa-habitos", "setup-trabajo-remoto-productividad-maxima", "trabajo-remoto-espana-guia-completa-2025"],
  },
  {
    slug: "mejores-auriculares-cancelacion-ruido-trabajo-2025",
    title: "Mejores auriculares con cancelación de ruido para trabajar en 2025",
    excerpt:
      "Los mejores auriculares con cancelación de ruido para trabajar desde casa: Sony WH-1000XM5 y Jabra Evolve2 55. Guía por uso profesional y presupuesto.",
    date: "2025-07-13",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["sony-wh-1000xm5-auriculares", "jabra-evolve2-55-auriculares", "jbl-tune-510bt-auriculares"],
    relatedPosts: ["sony-wh1000xm5-analisis-opinion", "mejor-webcam-videollamadas-trabajo-remoto", "productividad-trabajando-desde-casa-habitos"],
  },
  {
    slug: "mejor-webcam-videollamadas-trabajo-remoto",
    title: "Mejor webcam para videollamadas de trabajo remoto en 2025",
    excerpt:
      "Comparativa de las mejores webcams para trabajo remoto: Logitech C920 y Brio 4K, y cuándo añadir un micrófono externo. Guía por calidad y presupuesto.",
    date: "2025-07-14",
    category: "Home Office",
    readTime: "7 min",
    relatedProducts: ["logitech-c920-hd-pro-webcam", "logitech-brio-4k-webcam", "blue-yeti-usb-microfono"],
    relatedPosts: ["iluminacion-videollamadas-home-office", "mejores-auriculares-cancelacion-ruido-trabajo-2025", "setup-trabajo-remoto-productividad-maxima"],
  },
  {
    slug: "sony-wh1000xm5-analisis-opinion",
    title: "Sony WH-1000XM5: análisis completo y opiniones 2025",
    excerpt:
      "Todo sobre los Sony WH-1000XM5: la mejor cancelación de ruido del mercado, calidad de audio, comodidad y si justifican los 279 €.",
    date: "2025-07-15",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["sony-wh-1000xm5-auriculares", "jbl-tune-510bt-auriculares"],
    relatedPosts: ["mejores-auriculares-cancelacion-ruido-trabajo-2025", "productividad-trabajando-desde-casa-habitos", "setup-trabajo-remoto-productividad-maxima"],
  },
  {
    slug: "iluminacion-videollamadas-home-office",
    title: "Iluminación para videollamadas: guía completa y mejores opciones 2025",
    excerpt:
      "Cómo mejorar la iluminación en videollamadas de trabajo remoto: Elgato Key Light Air vs Neewer Ring Light. Guía por calidad de imagen y presupuesto.",
    date: "2025-07-16",
    category: "Home Office",
    readTime: "8 min",
    relatedProducts: ["elgato-key-light-air", "neewer-ring-light-18-pulgadas"],
    relatedPosts: ["mejor-webcam-videollamadas-trabajo-remoto", "mejores-auriculares-cancelacion-ruido-trabajo-2025", "home-office-setup-productivo-guia"],
  },
  {
    slug: "organizar-cables-home-office-guia",
    title: "Cómo organizar los cables del home office: guía práctica 2025",
    excerpt:
      "Cómo eliminar el caos de cables en tu home office: soluciones reales por presupuesto, desde velcro y canaletas hasta hubs USB-C.",
    date: "2025-07-17",
    category: "Home Office",
    readTime: "7 min",
    relatedPosts: ["home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima", "escritorio-regulable-altura-home-office"],
  },
  {
    slug: "mejor-hosting-web-emprendedores-2025",
    title: "Mejor hosting web para emprendedores en 2025 — Guía comparativa",
    excerpt:
      "Comparativa de los mejores servicios de hosting web para emprendedores y autónomos en España: SiteGround, Webempresa y ProfesionalHosting.",
    date: "2025-07-18",
    category: "Emprender Online",
    readTime: "9 min",
    relatedPosts: ["hosting-wordpress-comparativa-espana-2025", "como-empezar-negocio-online-desde-casa-2025", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "como-empezar-negocio-online-desde-casa-2025",
    title: "Cómo empezar un negocio online desde casa en 2025: guía paso a paso",
    excerpt:
      "Guía práctica para empezar un negocio online desde casa: qué modelos funcionan, qué equipamiento necesitas y cómo evitar los errores más comunes.",
    date: "2025-07-19",
    category: "Emprender Online",
    readTime: "10 min",
    relatedProducts: ["logitech-c920-hd-pro-webcam", "blue-yeti-usb-microfono", "rode-nt-usb-mini-microfono"],
    relatedPosts: ["mejor-hosting-web-emprendedores-2025", "hosting-wordpress-comparativa-espana-2025", "trabajo-remoto-espana-guia-completa-2025"],
  },
  {
    slug: "trabajo-remoto-espana-guia-completa-2025",
    title: "Trabajo remoto en España: guía completa para empleados y autónomos 2025",
    excerpt:
      "Todo sobre el trabajo remoto en España: derechos legales, equipamiento deducible, mejores herramientas y cómo negociar el teletrabajo con tu empresa.",
    date: "2025-07-20",
    category: "Trabajo Remoto",
    readTime: "9 min",
    relatedPosts: ["productividad-trabajando-desde-casa-habitos", "home-office-setup-productivo-guia", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "productividad-trabajando-desde-casa-habitos",
    title: "Productividad trabajando desde casa: los hábitos que realmente funcionan",
    excerpt:
      "Guía basada en evidencia sobre productividad en trabajo remoto: rutinas, gestión del tiempo, separación trabajo-vida y cómo evitar el burnout en casa.",
    date: "2025-07-21",
    category: "Trabajo Remoto",
    readTime: "8 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "sony-wh-1000xm5-auriculares"],
    relatedPosts: ["trabajo-remoto-espana-guia-completa-2025", "herramientas-productividad-trabajo-remoto-2025", "setup-trabajo-remoto-productividad-maxima"],
  },
  {
    slug: "hosting-wordpress-comparativa-espana-2025",
    title: "Hosting para WordPress en España: comparativa completa 2025",
    excerpt:
      "Comparativa de los mejores hostings para WordPress en España: SiteGround, Webempresa y ProfesionalHosting. Velocidad, soporte y precio real con renovaciones.",
    date: "2025-07-22",
    category: "Emprender Online",
    readTime: "9 min",
    relatedPosts: ["mejor-hosting-web-emprendedores-2025", "como-empezar-negocio-online-desde-casa-2025", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "mejor-monitor-home-office-2025",
    title: "Mejor monitor para home office en 2025 — Comparativa completa",
    excerpt:
      "Los mejores monitores para trabajar desde casa en 2025: LG 4K, Dell USB-C y BenQ Eye-Care. Guía de compra por uso y presupuesto.",
    date: "2025-08-01",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["lg-27u730-monitor-4k", "dell-s2725qc-monitor-4k-usbc", "benq-gw2790-monitor-eye-care"],
    relatedPosts: ["home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima", "mejor-teclado-raton-trabajo-remoto"],
  },
  {
    slug: "monitor-4k-vs-full-hd-trabajo-remoto",
    title: "Monitor 4K vs Full HD para trabajo remoto: cuál elegir en 2025",
    excerpt:
      "Diferencias reales entre monitor 4K y Full HD para trabajar desde casa: nitidez, espacio de trabajo, precio y cuándo vale la pena el salto a 4K.",
    date: "2025-08-02",
    category: "Productividad",
    readTime: "7 min",
    relatedProducts: ["lg-27u730-monitor-4k", "dell-s2725qc-monitor-4k-usbc", "benq-gw2790-monitor-eye-care"],
    relatedPosts: ["mejor-monitor-home-office-2025", "home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima"],
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
