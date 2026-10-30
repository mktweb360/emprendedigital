import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">🚀 Emprende Digital</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Guías de compra y análisis de herramientas y equipamiento para emprendedores digitales, creadores de contenido y teletrabajadores.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              Edita{" "}
              <a
                href="https://www.mktweb360.com/?utm_source=emprendedigital&utm_medium=referral&utm_campaign=footer"
                target="_blank"
                rel="nofollow noopener"
                className="text-indigo-300 hover:text-indigo-200 underline"
              >
                Mkt Web 360
              </a>
              , agencia de webs, SEO y marketing digital.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Artículos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tienda/portatiles" className="hover:text-indigo-400 transition-colors">Portátiles para trabajo remoto</Link></li>
              <li><Link href="/blog/mejor-microfono-usb-podcast-streaming-2026" className="hover:text-indigo-400 transition-colors">Micrófonos para podcast y streaming</Link></li>
              <li><Link href="/blog/mejores-auriculares-cancelacion-ruido-trabajo-2025" className="hover:text-indigo-400 transition-colors">Auriculares para teletrabajo</Link></li>
              <li><Link href="/blog/mejor-webcam-videollamadas-trabajo-remoto" className="hover:text-indigo-400 transition-colors">Webcams para videollamadas</Link></li>
              <li><Link href="/blog/iluminacion-videollamadas-home-office" className="hover:text-indigo-400 transition-colors">Iluminación para streaming</Link></li>
              <li><Link href="/blog/mejor-silla-ergonomica-home-office-2025" className="hover:text-indigo-400 transition-colors">Sillas ergonómicas teletrabajo</Link></li>
              <li><Link href="/blog/mejor-teclado-raton-trabajo-remoto" className="hover:text-indigo-400 transition-colors">Teclados para trabajo remoto</Link></li>
              <li><Link href="/blog/escritorio-regulable-altura-home-office" className="hover:text-indigo-400 transition-colors">Escritorio elevable: guía de compra</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nosotros" className="hover:text-indigo-400 transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-indigo-400 transition-colors">Contacto</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-indigo-400 transition-colors">Aviso legal</Link></li>
              <li><Link href="/politica-de-privacidad" className="hover:text-indigo-400 transition-colors">Política de privacidad</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-indigo-400 transition-colors">Política de cookies</Link></li>
              <li><CookiePreferencesButton /></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-500 mb-2">
            <strong>Divulgación de afiliados:</strong> emprendedigital.es participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.es.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Emprende Digital — emprendedigital.es | Mkt Web 360 SLU, CIF B87679304
          </p>
        </div>
      </div>
    </footer>
  );
}
