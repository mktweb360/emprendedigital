import Link from "next/link";

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
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Artículos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mejores-portatiles-trabajo-remoto" className="hover:text-indigo-400 transition-colors">Mejores portátiles trabajo remoto</Link></li>
              <li><Link href="/mejores-microfonos-podcast-streaming" className="hover:text-indigo-400 transition-colors">Micrófonos para podcast y streaming</Link></li>
              <li><Link href="/mejores-auriculares-teletrabajo" className="hover:text-indigo-400 transition-colors">Auriculares para teletrabajo</Link></li>
              <li><Link href="/mejores-webcams-videollamadas" className="hover:text-indigo-400 transition-colors">Webcams para videollamadas</Link></li>
              <li><Link href="/iluminacion-streaming-youtube" className="hover:text-indigo-400 transition-colors">Iluminación para streaming</Link></li>
              <li><Link href="/mejores-sillas-ergonomicas-teletrabajo" className="hover:text-indigo-400 transition-colors">Sillas ergonómicas teletrabajo</Link></li>
              <li><Link href="/mejores-teclados-trabajo-remoto" className="hover:text-indigo-400 transition-colors">Teclados para trabajo remoto</Link></li>
              <li><Link href="/mejores-escritorios-ajustables-altura" className="hover:text-indigo-400 transition-colors">Escritorios ajustables en altura</Link></li>
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
