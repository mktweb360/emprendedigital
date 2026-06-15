import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Emprende Digital",
  description:
    "Somos un equipo de emprendedores y teletrabajadores apasionados por la tecnología. Conoce quiénes somos, cómo evaluamos los productos y nuestra política de afiliación.",
  alternates: { canonical: "https://www.emprendedigital.es/sobre-nosotros" },
};

export default function SobreNosotrosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Sobre Nosotros</h1>
      <p className="text-lg text-gray-500 mb-10">Quiénes somos y cómo trabajamos</p>

      <div className="prose">
        <h2>¿Qué es Emprende Digital?</h2>
        <p>
          <strong>Emprende Digital</strong> es una publicación independiente dedicada a ayudar a emprendedores digitales,
          freelancers y teletrabajadores a elegir el mejor equipamiento para su home office y setup de trabajo remoto.
          Analizamos portátiles, micrófonos, webcams, auriculares, sillas ergonómicas, escritorios ajustables y más,
          con comparativas honestas basadas en criterios objetivos.
        </p>

        <h2>Nuestra metodología</h2>
        <p>
          Cada artículo en Emprende Digital sigue un proceso riguroso de investigación:
        </p>
        <ul>
          <li>
            <strong>Investigación de mercado:</strong> Identificamos los productos más relevantes en cada categoría,
            incluyendo los más vendidos en Amazon España, los mejor valorados por usuarios reales y las novedades más
            destacadas de cada temporada.
          </li>
          <li>
            <strong>Criterios objetivos:</strong> Evaluamos cada producto con métricas concretas: especificaciones
            técnicas verificadas, relación calidad-precio, opiniones de miles de compradores verificados, y comparativa
            con alternativas directas.
          </li>
          <li>
            <strong>Actualización continua:</strong> El mercado tecnológico cambia rápido. Revisamos nuestras
            recomendaciones periódicamente para garantizar que siguen siendo las mejores opciones disponibles.
          </li>
          <li>
            <strong>Transparencia:</strong> Indicamos claramente cuándo un enlace es de afiliado y explicamos por qué
            recomendamos cada producto. Nunca recomendamos algo solo porque nos genere una comisión más alta.
          </li>
        </ul>

        <h2>Nuestra empresa</h2>
        <p>
          Emprende Digital es una publicación de <strong>Mkt Web 360 SLU</strong> (CIF B87679304), empresa española con
          domicilio fiscal en España. Somos una empresa legalmente establecida y cumplimos con toda la normativa
          española y europea de comercio electrónico y protección de datos (RGPD / LOPD).
        </p>

        <div className="not-prose my-6 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900">
          <strong className="block mb-2">⚠️ Divulgación de afiliados</strong>
          <p className="m-0">
            Emprende Digital participa en el Programa de Afiliados de Amazon EU, un programa de publicidad
            para afiliados diseñado para proporcionar a sitios web un medio para obtener comisiones por publicidad,
            mediante la publicación de enlaces a Amazon.es. El precio final para el comprador es exactamente el mismo
            tanto si hace clic en nuestros enlaces como si va directamente a Amazon. Las comisiones que recibimos
            nos permiten mantener este sitio web y seguir produciendo contenido de calidad de forma gratuita para
            nuestros lectores.
          </p>
        </div>

        <h2>Contacto</h2>
        <p>
          Para cualquier consulta, corrección o colaboración, puedes contactarnos en{" "}
          <a href="mailto:info@emprendedigital.es" className="text-indigo-600 hover:underline">
            info@emprendedigital.es
          </a>{" "}
          o a través de nuestra{" "}
          <Link href="/contacto" className="text-indigo-600 hover:underline">
            página de contacto
          </Link>.
        </p>

        <h2>Aviso legal y privacidad</h2>
        <p>
          Puedes consultar nuestra información legal completa en los siguientes documentos:
        </p>
        <ul>
          <li><Link href="/aviso-legal" className="text-indigo-600 hover:underline">Aviso Legal</Link></li>
          <li><Link href="/politica-de-privacidad" className="text-indigo-600 hover:underline">Política de Privacidad</Link></li>
          <li><Link href="/politica-de-cookies" className="text-indigo-600 hover:underline">Política de Cookies</Link></li>
        </ul>
      </div>
    </div>
  );
}
