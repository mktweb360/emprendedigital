import type { Metadata } from "next";
import Link from "next/link";
import { amazonLink } from "@/lib/amazon";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AdSenseAd from "@/components/AdSenseAd";

export const metadata: Metadata = {
  title: "Mejores sillas ergonómicas para teletrabajo 2025 — Guía completa",
  description:
    "SIHOO M57, Hbada Pro, Herman Miller Aeron y más. Guía completa para elegir la silla ergonómica perfecta y cuidar tu espalda en jornadas largas de teletrabajo.",
  keywords: "mejores sillas ergonómicas teletrabajo, silla oficina espalda, silla ergonómica barata, Herman Miller vs alternativas",
  alternates: { canonical: "https://www.emprendedigital.es/mejores-sillas-ergonomicas-teletrabajo" },
  openGraph: {
    title: "Mejores sillas ergonómicas para teletrabajo 2025",
    description: "Guía completa para elegir la silla ergonómica perfecta para trabajo remoto.",
    url: "https://www.emprendedigital.es/mejores-sillas-ergonomicas-teletrabajo",
  },
};

const products = [
  { pos: 1, name: "SIHOO M57", asin: "B09MZDSJXQ", price: "€239,99", lumbar: "Ajustable 3D", armrests: "4D", recline: "90–126°", material: "Malla transpirable", warranty: "3 años", stars: "4,4/5", best: "Mejor calidad-precio" },
  { pos: 2, name: "Hbada Silla Ergonómica Pro", asin: "B085ZPCBMQ", price: "€189,99", lumbar: "Sí", armrests: "2D", recline: "90–120°", material: "Malla transpirable", warranty: "2 años", stars: "4,3/5", best: "La más económica" },
  { pos: 3, name: "Secretlab Titan Evo 2022", asin: "B0BLS7M2MR", price: "€449,00", lumbar: "Magnético", armrests: "4D", recline: "85–165°", material: "Cuero SoftWeave", warranty: "5 años", stars: "4,6/5", best: "Para gaming + trabajo" },
  { pos: 4, name: "Markus IKEA (referencia)", asin: "B09FH9L56P", price: "€149,99", lumbar: "Fija", armrests: "Fijos", recline: "Sí (limitado)", material: "Malla", warranty: "10 años", stars: "4,2/5", best: "Clásico asequible" },
  { pos: 5, name: "Ergohuman ME7ERG", asin: "B001DCBBWA", price: "€699,00", lumbar: "Ajustable", armrests: "3D", recline: "90–130°", material: "Malla premium", warranty: "5 años", stars: "4,5/5", best: "Semi-profesional" },
];

const faqs = [
  { q: "¿Cuánto debo gastar en una silla para teletrabajo?", a: "Si teletrabajas 8 horas diarias, invertir 200-400€ en una silla de calidad es una de las mejores decisiones que puedes tomar. Los problemas de espalda por mala postura cuestan mucho más en fisioterapia y en productividad perdida. Por debajo de 150€ es difícil encontrar una silla con suficiente ajuste ergonómico para uso profesional intensivo. La alternativa es comprar de segunda mano modelos premium (Herman Miller, Steelcase) que tienen una vida útil de 10-15 años." },
  { q: "¿Qué ajustes son imprescindibles en una silla ergonómica?", a: "Los ajustes mínimos indispensables: 1) Altura del asiento regulable para que los pies estén planos en el suelo y las rodillas a 90°. 2) Soporte lumbar ajustable en altura y profundidad para respetar la curvatura natural de la columna. 3) Reposabrazos ajustables en altura para que los codos queden a 90° y los hombros relajados. 4) Profundidad del asiento ajustable para que haya 2-3 dedos entre la parte trasera de la rodilla y el borde del asiento. Todo lo demás (inclinación del respaldo, soporte cervical, reposacabezas) es deseable pero no crítico." },
  { q: "¿Malla o tapizado para una silla de trabajo?", a: "Para teletrabajo intensivo, el respaldo de malla transpirable es superior al tapizado en la mayoría de climas: la malla permite la circulación del aire y evita que la espalda se caliente y sude en sesiones largas. El tapizado de cuero o similares (sintético) puede ser más cómodo en climas fríos y tiene un aspecto más premium, pero retiene más el calor. Si vives en zona mediterránea o tu habitación tiende a calentarse, la malla es claramente la mejor opción." },
  { q: "¿Cómo ajusto correctamente la altura de la silla?", a: "Procedimiento de ajuste: 1) Siéntate con la espalda contra el respaldo. 2) Ajusta la altura hasta que los pies estén planos en el suelo y las rodillas formen un ángulo de 90°. Si los pies no llegan, usa un reposapiés. 3) Ajusta el soporte lumbar para que rellene el hueco natural de tu zona lumbar sin empujar la espalda hacia adelante. 4) Ajusta los reposabrazos para que los codos descansen sin elevar los hombros. 5) La parte superior del monitor debe estar al nivel de los ojos o ligeramente por debajo." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mejores sillas ergonómicas para teletrabajo 2025 — Guía completa",
  datePublished: "2025-06-01",
  dateModified: "2025-06-10",
  author: { "@type": "Organization", name: "Emprende Digital" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.emprendedigital.es" },
  mainEntityOfPage: "https://www.emprendedigital.es/mejores-sillas-ergonomicas-teletrabajo",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.emprendedigital.es" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.emprendedigital.es/blog" },
    { "@type": "ListItem", position: 3, name: "Mejores sillas ergonómicas teletrabajo", item: "https://www.emprendedigital.es/mejores-sillas-ergonomicas-teletrabajo" },
  ],
};

export default function SillasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">Inicio</Link>{" › "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>{" › "}
          <span className="text-gray-600">Sillas ergonómicas teletrabajo</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Mejores sillas ergonómicas para teletrabajo 2025 — Guía completa
        </h1>
        <p className="text-gray-400 text-sm mb-6">Publicado: 1 junio 2025 · 12 min lectura</p>

        <AffiliateDisclosure />

        <div className="prose">
          <p>La silla es la inversión más importante de tu puesto de teletrabajo después del portátil o el monitor. Pasas sentado entre 6 y 10 horas diarias, y una silla inadecuada no solo provoca dolor de espalda: afecta tu concentración, tu energía y tu productividad. En el largo plazo, los problemas posturales cuestan más en fisioterapia y bajas laborales que lo que cuesta una buena silla.</p>
          <p>Hemos analizado las <strong>5 mejores sillas ergonómicas para teletrabajo</strong> disponibles en 2025, desde opciones asequibles hasta inversiones premium.</p>
          <h2>Tabla comparativa — Mejores sillas ergonómicas 2025</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-3 py-3 text-left">#</th>
                <th className="px-3 py-3 text-left">Modelo</th>
                <th className="px-3 py-3 text-left">Precio</th>
                <th className="px-3 py-3 text-left">Lumbar</th>
                <th className="px-3 py-3 text-left">Reposabrazos</th>
                <th className="px-3 py-3 text-left">Reclinación</th>
                <th className="px-3 py-3 text-left">Material</th>
                <th className="px-3 py-3 text-left">Valoración</th>
                <th className="px-3 py-3 text-left">Ver en Amazon</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.asin} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-3 py-3 font-bold text-indigo-600">{p.pos}</td>
                  <td className="px-3 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-3 py-3 font-bold text-orange-600">{p.price}</td>
                  <td className="px-3 py-3 text-gray-600">{p.lumbar}</td>
                  <td className="px-3 py-3 text-gray-600">{p.armrests}</td>
                  <td className="px-3 py-3 text-gray-600">{p.recline}</td>
                  <td className="px-3 py-3 text-gray-600">{p.material}</td>
                  <td className="px-3 py-3 text-yellow-500 font-semibold">⭐ {p.stars}</td>
                  <td className="px-3 py-3">
                    <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer sponsored"
                      className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                      Ver precio →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AdSenseAd slot="6666666666" />

        <div className="prose">
          <h2>Análisis detallado</h2>

          <h3>1. SIHOO M57 — Mejor relación calidad-precio del mercado (★★★★½)</h3>
          <p>El <strong>SIHOO M57</strong> ha redefinido lo que se puede esperar por menos de 250€ en una silla ergonómica. Soporte lumbar tridimensional ajustable en profundidad, altura e inclinación; reposabrazos 4D completamente configurables; respaldo de malla transpirable que sigue los movimientos del cuerpo. En ensayos comparativos independientes, el SIHOO M57 se acerca a la ergonomía de sillas de el doble y el triple de precio.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B09MZDSJXQ")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver SIHOO M57 en Amazon →
            </a>
          </div>

          <h3>2. Hbada Silla Ergonómica Pro — La más asequible con soporte lumbar (★★★★)</h3>
          <p>La <strong>Hbada Pro</strong> es la opción para quienes tienen un presupuesto más ajustado pero no quieren renunciar a soporte lumbar ajustable y respaldo de malla. No tiene la versatilidad de los reposabrazos del SIHOO, pero para un primer upgrade desde una silla sin ergonomía es un salto importante.</p>
          <div className="not-prose my-4">
            <a href={amazonLink("B085ZPCBMQ")} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary">
              Ver Hbada Pro en Amazon →
            </a>
          </div>

          <h3>3. Secretlab Titan Evo 2022 — Para gaming y trabajo (★★★★½)</h3>
          <p>El <strong>Secretlab Titan</strong> es la mejor opción si alternan trabajo y gaming: soporte lumbar magnético ajustable, reposabrazos 4D, reclinación hasta 165° para descansar, y una construcción robusta con garantía de 5 años. El SoftWeave transpirable es más cómodo que el cuero sintético de las sillas gaming baratas.</p>

          <h3>4. IKEA Markus — El clásico de confianza (★★★★)</h3>
          <p>El <strong>IKEA Markus</strong> merece una mención por su combinación de precio accesible, disponibilidad inmediata, respaldo de malla y garantía de 10 años. Sin los ajustes avanzados de las opciones anteriores, es una opción sólida para quienes valoran la simplicidad y la fiabilidad de una marca establecida.</p>

          <h3>5. Ergohuman ME7ERG — La inversión semi-profesional (★★★★½)</h3>
          <p>El <strong>Ergohuman ME7ERG</strong> está en el escalón previo a las sillas de clase profesional (Herman Miller, Steelcase). Malla de alta calidad, sistema de inclinación sincronizado que acompaña el movimiento del cuerpo, y reposacabezas ajustable. Para quienes buscan una silla de por vida sin llegar al precio de las marcas premium.</p>

          <h2>Preguntas frecuentes sobre sillas ergonómicas</h2>
        </div>

        <div className="space-y-4 my-8">
          {faqs.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>{faq.q}</span>
                <span className="text-indigo-500 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 pt-0 text-gray-600 leading-relaxed bg-gray-50">{faq.a}</div>
            </details>
          ))}
        </div>

        <AffiliateDisclosure />

        <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <h3 className="font-bold text-gray-900 mb-3">También te puede interesar</h3>
          <ul className="space-y-2">
            <li><Link href="/mejores-escritorios-ajustables-altura" className="text-indigo-600 hover:underline">→ Mejores escritorios ajustables en altura 2025</Link></li>
            <li><Link href="/mejores-portatiles-trabajo-remoto" className="text-indigo-600 hover:underline">→ Los 5 mejores portátiles para trabajo remoto en 2025</Link></li>
            <li><Link href="/mejores-teclados-trabajo-remoto" className="text-indigo-600 hover:underline">→ Mejores teclados para trabajo remoto 2025</Link></li>
          </ul>
        </div>
      </article>
    </>
  );
}
