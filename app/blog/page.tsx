import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Guías de compra y análisis de herramientas para emprendedores digitales",
  description:
    "Todos nuestros artículos sobre portátiles, micrófonos, webcams, auriculares, sillas ergonómicas y más. Comparativas y guías de compra actualizadas para 2025.",
  alternates: { canonical: "https://www.emprendedigital.es/blog" },
  openGraph: {
    title: "Blog — Guías de compra para emprendedores digitales | Emprende Digital",
    description: "Todos nuestros artículos sobre herramientas y equipamiento para emprendedores digitales.",
    url: "https://www.emprendedigital.es/blog",
  },
};

const articles = [
  {
    href: "/mejores-portatiles-trabajo-remoto",
    icon: "💻",
    title: "Los 5 mejores portátiles para trabajo remoto en 2025 — Análisis y comparativa",
    excerpt:
      "MacBook Air M3, ASUS ZenBook 14 OLED, Lenovo ThinkPad X1 Carbon y más. Elige el portátil perfecto según tu presupuesto y necesidades.",
    date: "2025-05-10",
    price: "400–2.500€",
    category: "Portátiles",
  },
  {
    href: "/mejores-microfonos-podcast-streaming",
    icon: "🎙️",
    title: "Mejores micrófonos para podcast y streaming 2025 — Guía de compra",
    excerpt:
      "Blue Yeti, HyperX SoloCast, Rode NT-USB Mini y más. Guía completa para empezar a grabar con calidad profesional desde casa.",
    date: "2025-05-18",
    price: "30–250€",
    category: "Audio",
  },
  {
    href: "/mejores-auriculares-teletrabajo",
    icon: "🎧",
    title: "Auriculares para teletrabajo con cancelación de ruido 2025",
    excerpt:
      "Sony WH-1000XM5, Jabra Evolve2 55 y más. Los mejores auriculares para concentrarte y comunicarte en trabajo remoto.",
    date: "2025-06-05",
    price: "20–350€",
    category: "Audio",
  },
  {
    href: "/mejores-webcams-videollamadas",
    icon: "📷",
    title: "Mejores webcams para videollamadas y streaming 2025 — Comparativa",
    excerpt:
      "Logitech C920, Brio 4K, Razer Kiyo Pro y más. Mejora tu imagen en Zoom, Teams y Meet con la webcam adecuada.",
    date: "2025-05-25",
    price: "25–200€",
    category: "Vídeo",
  },
  {
    href: "/iluminacion-streaming-youtube",
    icon: "💡",
    title: "Iluminación para streaming y YouTube: ring lights y paneles LED 2025",
    excerpt:
      "Elgato Key Light Air, Neewer Ring Light y más. Cómo iluminar correctamente tu espacio para videollamadas y grabaciones de vídeo.",
    date: "2025-04-28",
    price: "15–300€",
    category: "Vídeo",
  },
  {
    href: "/mejores-sillas-ergonomicas-teletrabajo",
    icon: "🪑",
    title: "Mejores sillas ergonómicas para teletrabajo 2025 — Guía completa",
    excerpt:
      "SIHOO M57, Hbada Pro y más. Cómo elegir la silla ergonómica perfecta para cuidar tu espalda en jornadas largas.",
    date: "2025-06-01",
    price: "100–800€",
    category: "Oficina",
  },
  {
    href: "/mejores-teclados-trabajo-remoto",
    icon: "⌨️",
    title: "Mejores teclados para trabajo remoto 2025 — Mecánicos y de membrana",
    excerpt:
      "Logitech MX Keys, Keychron K2 Pro y más. Los mejores teclados para escribir horas sin fatiga y con precisión.",
    date: "2025-04-15",
    price: "20–200€",
    category: "Periféricos",
  },
  {
    href: "/mejores-escritorios-ajustables-altura",
    icon: "🖥️",
    title: "Mejores escritorios ajustables en altura 2025 — Standing desks",
    excerpt:
      "FlexiSpot E7 Pro, EG1 y más. Por qué un escritorio ajustable mejora tu salud y productividad, y cuál elegir.",
    date: "2025-03-20",
    price: "80–600€",
    category: "Oficina",
  },
];

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
          {articles.map((art) => (
            <Link
              key={art.href}
              href={art.href}
              className="flex flex-col sm:flex-row gap-4 border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <div className="text-5xl shrink-0">{art.icon}</div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {art.category}
                  </span>
                  <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-medium">
                    {art.price}
                  </span>
                </div>
                <h2 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {art.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">{art.excerpt}</p>
                <time className="text-xs text-gray-400">{art.date}</time>
              </div>
              <div className="shrink-0 self-center">
                <span className="text-indigo-600 font-semibold text-sm whitespace-nowrap">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
