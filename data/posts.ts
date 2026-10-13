export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  relatedProducts?: string[];
  relatedPosts?: string[];
  categoryCta?: { href: string; text: string };
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "black-friday-oficina-en-casa-que-comprar-2026",
    title: "Black Friday 2026 para la oficina en casa: qué merece la pena comprar",
    excerpt:
      "Qué comprar en el Black Friday y el Cyber Monday de 2026 para montar o mejorar tu oficina en casa: silla, escritorio elevable, monitor, brazo, periféricos, iluminación y hub. Qué priorizar, qué comprobar en cada producto y qué errores evitar.",
    date: "2026-10-13",
    category: "Home Office",
    readTime: "10 min",
    relatedProducts: [
      "sihoo-m57-silla-ergonomica",
      "clouvou-silla-oficina-ergonomica-malla",
      "flexispot-escritorio-elevable-120x60-tablero-entero",
      "ergear-escritorio-elevable-140x70",
      "dell-s2725qc-monitor-4k-usbc",
      "lenovo-l27h-4a-monitor-qhd-usb-c",
      "invision-mx200-brazo-monitor",
      "logitech-mx-keys-mini",
      "logitech-mx-master-4",
      "yeelight-barra-luz-monitor-mando",
      "anker-555-hub-usbc-8en1",
      "jabra-evolve2-55-auriculares-inalambricos",
    ],
    relatedPosts: [
      "regalos-navidad-reyes-teletrabajo-2026",
      "home-office-setup-productivo-guia",
      "mejor-silla-ergonomica-home-office-2025",
      "mejor-monitor-home-office-2025",
    ],
    categoryCta: { href: "/tienda", text: "Ver todo el equipamiento para home office →" },
  },
  {
    slug: "regalos-navidad-reyes-teletrabajo-2026",
    title: "Regalos para quien teletrabaja: ideas para Navidad y Reyes 2026",
    excerpt:
      "Ideas de regalo de Navidad y Reyes para quien trabaja desde casa, por perfil y tamaño de regalo: webcam, luz para videollamadas, auriculares con cancelación de ruido, teclado y ratón, brazo de monitor, micrófono, hub y, entre varios, silla o escritorio elevable.",
    date: "2026-10-13",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: [
      "ugreen-finecam-lite-4k-webcam",
      "logitech-brio-4k-webcam",
      "logitech-litra-glow-luz-streaming",
      "neewer-nl-116ai-panel-led-escritorio",
      "sony-wh-1000xm6-auriculares",
      "soundcore-space-one-auriculares",
      "logitech-m650-raton-inalambrico-silencioso",
      "logitech-mx-master-4",
      "invision-mx200-brazo-monitor",
      "rode-podmic-usb-microfono-xlr-usb",
      "anker-555-hub-usbc-8en1",
      "sihoo-m57-silla-ergonomica",
    ],
    relatedPosts: [
      "black-friday-oficina-en-casa-que-comprar-2026",
      "setup-trabajo-remoto-productividad-maxima",
      "mejor-webcam-videollamadas-trabajo-remoto",
      "mejores-auriculares-cancelacion-ruido-trabajo-2025",
    ],
    categoryCta: { href: "/tienda", text: "Ver ideas de equipamiento para regalar →" },
  },
  {
    slug: "mejor-silla-ergonomica-home-office-2025",
    image: "/images/blog/mejor-silla-ergonomica-home-office-2025.jpg",
    title: "Mejor silla ergonómica para home office — Comparativa completa",
    excerpt:
      "Las mejores sillas ergonómicas para trabajar desde casa: HOLLUDLE y Ticova comparadas. Guía de compra por presupuesto y horas de uso.",
    date: "2025-07-01",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["sihoo-m57-silla-ergonomica", "hbada-silla-ergonomica-pro"],
    relatedPosts: ["dolor-espalda-trabajar-casa-soluciones", "home-office-setup-productivo-guia", "escritorio-regulable-altura-home-office"],
    categoryCta: { href: "/tienda/sillas-ergonomicas", text: "Ver sillas ergonómicas →" },
  },
  {
    slug: "escritorio-regulable-altura-home-office",
    image: "/images/blog/escritorio-regulable-altura-home-office.jpg",
    title: "Escritorio regulable en altura para home office: guía de compra",
    excerpt:
      "Cómo elegir el mejor escritorio regulable en altura para trabajar desde casa: FlexiSpot E7 Pro vs FlexiSpot EG1. Comparativa por uso, presupuesto y espacio.",
    date: "2025-07-03",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["flexispot-e7-pro-escritorio-ajustable", "flexispot-eg1-escritorio-ajustable"],
    relatedPosts: ["mejor-silla-ergonomica-home-office-2025", "home-office-setup-productivo-guia", "organizar-cables-home-office-guia"],
    categoryCta: { href: "/tienda/escritorios", text: "Ver escritorios ajustables →" },
  },
  {
    slug: "home-office-setup-productivo-guia",
    image: "/images/blog/home-office-setup-productivo-guia.jpg",
    title: "Cómo montar un home office productivo: guía completa",
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
    categoryCta: { href: "/tienda/sillas-ergonomicas", text: "Ver equipamiento home office →" },
  },
  {
    slug: "dolor-espalda-trabajar-casa-soluciones",
    image: "/images/blog/dolor-espalda-trabajar-casa-soluciones.jpg",
    title: "Dolor de espalda trabajando desde casa: causas y soluciones reales",
    excerpt:
      "Por qué aparece el dolor de espalda al trabajar desde casa y qué cambios de equipamiento y hábitos lo eliminan realmente. Guía basada en ergonomía.",
    date: "2025-07-06",
    category: "Home Office",
    readTime: "8 min",
    relatedProducts: ["sihoo-m57-silla-ergonomica", "hbada-silla-ergonomica-pro"],
    relatedPosts: ["mejor-silla-ergonomica-home-office-2025", "home-office-setup-productivo-guia", "hjh-office-ergohuman-slim-gen2-analisis"],
    categoryCta: { href: "/tienda/sillas-ergonomicas", text: "Ver sillas ergonómicas →" },
  },
  {
    slug: "mejor-teclado-raton-trabajo-remoto",
    image: "/images/blog/mejor-teclado-raton-trabajo-remoto.jpg",
    title: "Mejor teclado y ratón para trabajo remoto — Comparativa",
    excerpt:
      "Los mejores teclados y ratones para trabajar desde casa: Logitech MX Keys S, MX Master 3S y Keychron V6 MAX. Guía por uso y presupuesto.",
    date: "2025-07-09",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "logitech-mx-master-3s", "keychron-k2-pro-mecanico"],
    relatedPosts: ["setup-trabajo-remoto-productividad-maxima", "herramientas-productividad-trabajo-remoto-2025", "monitor-4k-vs-full-hd-trabajo-remoto"],
    categoryCta: { href: "/tienda/perifericos", text: "Ver teclados y ratones →" },
  },
  {
    slug: "setup-trabajo-remoto-productividad-maxima",
    image: "/images/blog/setup-trabajo-remoto-productividad-maxima.jpg",
    title: "Setup de trabajo remoto para máxima productividad: guía",
    excerpt:
      "Cómo construir un setup de trabajo remoto productivo: teclado, ratón, monitor e iluminación. Guía por niveles de presupuesto con productos reales.",
    date: "2025-07-11",
    category: "Productividad",
    readTime: "9 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "logitech-mx-master-3s"],
    relatedPosts: ["mejor-teclado-raton-trabajo-remoto", "iluminacion-videollamadas-home-office", "productividad-trabajando-desde-casa-habitos", "mejor-monitor-home-office-2025"],
    categoryCta: { href: "/tienda/perifericos", text: "Ver periféricos →" },
  },
  {
    slug: "herramientas-productividad-trabajo-remoto-2025",
    image: "/images/blog/herramientas-productividad-trabajo-remoto-2025.jpg",
    title: "Las mejores herramientas de productividad para trabajo remoto",
    excerpt:
      "Herramientas de productividad esenciales para trabajar desde casa: gestión de tareas, comunicación, foco y automatización. Guía actualizada.",
    date: "2025-07-12",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "logitech-mx-master-3s", "keychron-k2-pro-mecanico"],
    relatedPosts: ["productividad-trabajando-desde-casa-habitos", "setup-trabajo-remoto-productividad-maxima", "trabajo-remoto-espana-guia-completa-2025"],
    categoryCta: { href: "/tienda/perifericos", text: "Ver periféricos →" },
  },
  {
    slug: "mejores-auriculares-cancelacion-ruido-trabajo-2025",
    image: "/images/blog/mejores-auriculares-cancelacion-ruido-trabajo-2025.jpg",
    title: "Mejores auriculares con cancelación de ruido para trabajar",
    excerpt:
      "Los mejores auriculares con cancelación de ruido para trabajar desde casa: Sony WH-1000XM5 y Jabra Evolve2 65. Guía por uso profesional y presupuesto.",
    date: "2025-07-13",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["sony-wh-1000xm5-auriculares", "jabra-evolve2-55-auriculares", "jbl-tune-510bt-auriculares"],
    relatedPosts: ["sony-wh1000xm5-analisis-opinion", "mejor-webcam-videollamadas-trabajo-remoto", "productividad-trabajando-desde-casa-habitos"],
    categoryCta: { href: "/tienda/auriculares", text: "Ver auriculares →" },
  },
  {
    slug: "mejor-webcam-videollamadas-trabajo-remoto",
    image: "/images/blog/mejor-webcam-videollamadas-trabajo-remoto.jpg",
    title: "Mejor webcam para videollamadas de trabajo remoto",
    excerpt:
      "Comparativa de las mejores webcams para trabajo remoto: Logitech C920 y Brio 4K, y cuándo añadir un micrófono externo. Guía por calidad y presupuesto.",
    date: "2025-07-14",
    category: "Home Office",
    readTime: "7 min",
    relatedProducts: ["logitech-c920-hd-pro-webcam", "logitech-brio-4k-webcam", "blue-yeti-usb-microfono"],
    relatedPosts: ["iluminacion-videollamadas-home-office", "mejores-auriculares-cancelacion-ruido-trabajo-2025", "setup-trabajo-remoto-productividad-maxima"],
    categoryCta: { href: "/tienda/webcams", text: "Ver webcams →" },
  },
  {
    slug: "sony-wh1000xm5-analisis-opinion",
    image: "/images/blog/sony-wh1000xm5-analisis-opinion.jpg",
    title: "Sony WH-1000XM5: análisis completo y opiniones",
    excerpt:
      "Todo sobre los Sony WH-1000XM5: la mejor cancelación de ruido del mercado, calidad de audio, comodidad y si justifican su precio.",
    date: "2025-07-15",
    category: "Productividad",
    readTime: "8 min",
    relatedProducts: ["sony-wh-1000xm5-auriculares", "jbl-tune-510bt-auriculares"],
    relatedPosts: ["mejores-auriculares-cancelacion-ruido-trabajo-2025", "productividad-trabajando-desde-casa-habitos", "setup-trabajo-remoto-productividad-maxima"],
    categoryCta: { href: "/tienda/auriculares", text: "Ver auriculares →" },
  },
  {
    slug: "iluminacion-videollamadas-home-office",
    image: "/images/blog/iluminacion-videollamadas-home-office.jpg",
    title: "Iluminación para videollamadas: guía completa y mejores opciones",
    excerpt:
      "Cómo mejorar la iluminación en videollamadas de trabajo remoto: Elgato Key Light Air vs Neewer Ring Light. Guía por calidad de imagen y presupuesto.",
    date: "2025-07-16",
    category: "Home Office",
    readTime: "8 min",
    relatedProducts: ["elgato-key-light-air", "neewer-ring-light-18-pulgadas"],
    relatedPosts: ["mejor-webcam-videollamadas-trabajo-remoto", "mejores-auriculares-cancelacion-ruido-trabajo-2025", "home-office-setup-productivo-guia"],
    categoryCta: { href: "/tienda/iluminacion", text: "Ver iluminación →" },
  },
  {
    slug: "organizar-cables-home-office-guia",
    image: "/images/blog/organizar-cables-home-office-guia.jpg",
    title: "Cómo organizar los cables del home office: guía práctica",
    excerpt:
      "Cómo eliminar el caos de cables en tu home office: soluciones reales por presupuesto, desde velcro y canaletas hasta hubs USB-C.",
    date: "2025-07-17",
    category: "Home Office",
    readTime: "7 min",
    relatedPosts: ["home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima", "escritorio-regulable-altura-home-office"],
  },
  {
    slug: "mejor-hosting-web-emprendedores-2025",
    image: "/images/blog/mejor-hosting-web-emprendedores-2025.jpg",
    title: "Mejor hosting web para emprendedores — Guía comparativa",
    excerpt:
      "Comparativa de los mejores servicios de hosting web para emprendedores y autónomos en España: SiteGround, Webempresa y ProfesionalHosting.",
    date: "2025-07-18",
    category: "Emprender Online",
    readTime: "9 min",
    relatedPosts: ["hosting-wordpress-comparativa-espana-2025", "como-empezar-negocio-online-desde-casa-2025", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "como-empezar-negocio-online-desde-casa-2025",
    image: "/images/blog/como-empezar-negocio-online-desde-casa-2025.jpg",
    title: "Cómo empezar un negocio online desde casa: guía paso a paso",
    excerpt:
      "Guía práctica para empezar un negocio online desde casa: qué modelos funcionan, qué equipamiento necesitas y cómo evitar los errores más comunes.",
    date: "2025-07-19",
    category: "Emprender Online",
    readTime: "10 min",
    relatedProducts: ["logitech-c920-hd-pro-webcam", "blue-yeti-usb-microfono", "elgato-wave3-microfono-condensador-usb"],
    relatedPosts: ["mejor-hosting-web-emprendedores-2025", "hosting-wordpress-comparativa-espana-2025", "trabajo-remoto-espana-guia-completa-2025"],
    categoryCta: { href: "/tienda/webcams", text: "Ver equipamiento para negocio online →" },
  },
  {
    slug: "trabajo-remoto-espana-guia-completa-2025",
    image: "/images/blog/trabajo-remoto-espana-guia-completa-2025.jpg",
    title: "Trabajo remoto en España: guía completa para empleados y autónomos",
    excerpt:
      "Todo sobre el trabajo remoto en España: derechos legales, equipamiento deducible, mejores herramientas y cómo negociar el teletrabajo con tu empresa.",
    date: "2025-07-20",
    category: "Trabajo Remoto",
    readTime: "9 min",
    relatedPosts: ["productividad-trabajando-desde-casa-habitos", "home-office-setup-productivo-guia", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "productividad-trabajando-desde-casa-habitos",
    image: "/images/blog/productividad-trabajando-desde-casa-habitos.jpg",
    title: "Productividad trabajando desde casa: los hábitos que realmente funcionan",
    excerpt:
      "Guía basada en evidencia sobre productividad en trabajo remoto: rutinas, gestión del tiempo, separación trabajo-vida y cómo evitar el burnout en casa.",
    date: "2025-07-21",
    category: "Trabajo Remoto",
    readTime: "8 min",
    relatedProducts: ["logitech-mx-keys-advanced-s", "sony-wh-1000xm5-auriculares"],
    relatedPosts: ["trabajo-remoto-espana-guia-completa-2025", "herramientas-productividad-trabajo-remoto-2025", "setup-trabajo-remoto-productividad-maxima"],
    categoryCta: { href: "/tienda/perifericos", text: "Ver periféricos →" },
  },
  {
    slug: "hosting-wordpress-comparativa-espana-2025",
    image: "/images/blog/hosting-wordpress-comparativa-espana-2025.jpg",
    title: "Hosting para WordPress en España: comparativa completa",
    excerpt:
      "Comparativa de los mejores hostings para WordPress en España: SiteGround, Webempresa y ProfesionalHosting. Velocidad, soporte y precio real con renovaciones.",
    date: "2025-07-22",
    category: "Emprender Online",
    readTime: "9 min",
    relatedPosts: ["mejor-hosting-web-emprendedores-2025", "como-empezar-negocio-online-desde-casa-2025", "herramientas-productividad-trabajo-remoto-2025"],
  },
  {
    slug: "mejor-monitor-home-office-2025",
    image: "/images/blog/mejor-monitor-home-office-2025.jpg",
    title: "Mejor monitor para home office — Comparativa completa",
    excerpt:
      "Los mejores monitores para trabajar desde casa: LG 4K, Dell USB-C y BenQ Eye-Care. Guía de compra por uso y presupuesto.",
    date: "2025-08-01",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: ["lg-27u730-monitor-4k", "dell-s2725qc-monitor-4k-usbc", "benq-gw2790-monitor-eye-care"],
    relatedPosts: ["home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima", "mejor-teclado-raton-trabajo-remoto"],
    categoryCta: { href: "/tienda/monitores", text: "Ver monitores →" },
  },
  {
    slug: "monitor-4k-vs-full-hd-trabajo-remoto",
    image: "/images/blog/monitor-4k-vs-full-hd-trabajo-remoto.jpg",
    title: "Monitor 4K vs Full HD para trabajo remoto: cuál elegir",
    excerpt:
      "Diferencias reales entre monitor 4K y Full HD para trabajar desde casa: nitidez, espacio de trabajo, precio y cuándo vale la pena el salto a 4K.",
    date: "2025-08-02",
    category: "Productividad",
    readTime: "7 min",
    relatedProducts: ["lg-27u730-monitor-4k", "dell-s2725qc-monitor-4k-usbc", "benq-gw2790-monitor-eye-care"],
    relatedPosts: ["mejor-monitor-home-office-2025", "home-office-setup-productivo-guia", "setup-trabajo-remoto-productividad-maxima"],
    categoryCta: { href: "/tienda/monitores", text: "Ver monitores →" },
  },
  {
    slug: "mejor-tablet-teletrabajo-2025",
    image: "/images/blog/mejor-tablet-teletrabajo-2025.jpg",
    title: "Mejor tablet para trabajar desde casa: iPad vs Android vs Windows",
    excerpt:
      "Comparativa de las mejores tablets para teletrabajo: iPad Air M2, Galaxy Tab S9 FE y Surface Pro 9. Guía por ecosistema, uso y presupuesto.",
    date: "2025-08-05",
    category: "Productividad",
    readTime: "9 min",
    relatedPosts: [
      "mejor-monitor-home-office-2025",
      "home-office-setup-productivo-guia",
      "herramientas-productividad-trabajo-remoto-2025",
      "mejor-hub-usb-c-portatil-2025",
    ],
    categoryCta: { href: "/tienda/portatiles", text: "Ver portátiles →" },
  },
  {
    slug: "herramientas-ia-productividad-2025",
    image: "/images/blog/herramientas-ia-productividad-2025.jpg",
    title: "Las mejores herramientas de IA para trabajar y emprender",
    excerpt:
      "Guía práctica de las mejores herramientas de inteligencia artificial para autónomos y equipos pequeños: escritura, reuniones, diseño, automatización y ventas.",
    date: "2025-08-06",
    category: "Emprender Online",
    readTime: "10 min",
    relatedPosts: [
      "herramientas-productividad-trabajo-remoto-2025",
      "como-empezar-negocio-online-desde-casa-2025",
      "productividad-trabajando-desde-casa-habitos",
      "trabajo-remoto-espana-guia-completa-2025",
    ],
  },
  {
    slug: "mejor-hub-usb-c-portatil-2025",
    image: "/images/blog/mejor-hub-usb-c-portatil-2025.jpg",
    title: "Mejor hub USB-C para portátil: guía de compra y comparativa",
    excerpt:
      "Los mejores hubs USB-C para MacBook y portátiles Windows: qué puertos necesitas, diferencias con una docking station y los 5 modelos más recomendados.",
    date: "2025-08-07",
    category: "Home Office",
    readTime: "8 min",
    relatedProducts: ["ugreen-revodok-hub-usbc-10en1", "ugreen-revodok-107-hub-7en1-ethernet", "baseus-docking-station-12en1"],
    relatedPosts: [
      "mejor-monitor-home-office-2025",
      "home-office-setup-productivo-guia",
      "mejor-tablet-teletrabajo-2025",
      "setup-trabajo-remoto-productividad-maxima",
    ],
    categoryCta: { href: "/tienda/hubs-docking", text: "Ver hubs y docking stations →" },
  },
  {
    slug: "hjh-office-ergohuman-slim-gen2-analisis",
    title: "hjh OFFICE Ergohuman Slim GEN2: análisis de la silla ergonómica premium",
    excerpt:
      "Análisis de la hjh OFFICE Ergohuman Slim GEN2, la evolución de la icónica Ergohuman: soporte lumbar flexible, diseño original y si su precio de gama alta se justifica.",
    date: "2026-09-07",
    category: "Home Office",
    readTime: "7 min",
    relatedProducts: ["ergohuman-plus-silla-malla", "secretlab-titan-evo-2022-silla"],
    relatedPosts: ["mejor-silla-ergonomica-home-office-2025", "dolor-espalda-trabajar-casa-soluciones"],
    categoryCta: { href: "/tienda/sillas-ergonomicas", text: "Ver sillas ergonómicas →" },
  },
  {
    slug: "soundcore-space-one-analisis",
    title: "Soundcore Space One: la alternativa económica a los Sony WH-1000XM5",
    excerpt:
      "Análisis de los Soundcore Space One: ANC adaptativa, audio LDAC y 40h de batería por menos de un tercio del precio de un Sony WH-1000XM5. ¿Compensa la diferencia?",
    date: "2026-09-07",
    category: "Home Office",
    readTime: "6 min",
    relatedProducts: ["soundcore-space-one-auriculares", "sony-wh-1000xm5-auriculares"],
    relatedPosts: ["mejores-auriculares-cancelacion-ruido-trabajo-2025", "productividad-trabajando-desde-casa-habitos"],
    categoryCta: { href: "/tienda/auriculares", text: "Ver auriculares →" },
  },
  {
    slug: "mejor-microfono-usb-podcast-streaming-2026",
    title: "Mejor micrófono USB para podcast, streaming y videollamadas en 2026",
    excerpt:
      "Comparativa de los 4 micrófonos USB del catálogo — Blue Yeti, Elgato Wave:3, HyperX SoloCast y FIFINE — para elegir según tu presupuesto y tu uso: podcast, streaming o simplemente sonar mejor en videollamadas.",
    date: "2026-09-17",
    category: "Emprender Online",
    readTime: "9 min",
    relatedProducts: [
      "blue-yeti-usb-microfono",
      "elgato-wave3-microfono-condensador-usb",
      "hyperx-solocast-microfono",
      "fifine-microfono-usb-condensador",
    ],
    relatedPosts: [
      "como-empezar-negocio-online-desde-casa-2025",
      "mejor-webcam-videollamadas-trabajo-remoto",
      "herramientas-ia-productividad-2025",
    ],
    categoryCta: { href: "/tienda/microfonos", text: "Ver micrófonos →" },
  },
  {
    slug: "conectar-dos-monitores-portatil-guia",
    image: "/images/blog/conectar-dos-monitores-portatil-guia.jpg",
    title: "Cómo conectar dos monitores a un portátil: guía para Windows y Mac",
    excerpt:
      "Cómo conectar dos monitores a un portátil según tu sistema y tus puertos: HDMI + USB-C, dock Thunderbolt, hub MST o DisplayLink. Qué funciona en Windows, qué funciona en Mac y qué comprobar antes de comprar.",
    date: "2026-09-29",
    category: "Home Office",
    readTime: "9 min",
    relatedProducts: [
      "caldigit-ts4-thunderbolt-4-dock",
      "baseus-nomos-air-displaylink-12en1",
      "anker-powerexpand-8en1-doble-hdmi",
      "dell-s2725qc-monitor-4k-usbc",
    ],
    relatedPosts: [
      "mejor-hub-usb-c-portatil-2025",
      "mejor-monitor-home-office-2025",
      "monitor-4k-vs-full-hd-trabajo-remoto",
      "organizar-cables-home-office-guia",
    ],
    categoryCta: { href: "/tienda/hubs-docking", text: "Ver hubs y docking stations →" },
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
