import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal — Emprende Digital",
  description: "Aviso legal de Emprende Digital — Mkt Web 360 SLU (CIF B87679304).",
  alternates: { canonical: "https://www.emprendedigital.es/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Aviso Legal</h1>
      <div className="prose text-sm">
        <h2>1. Datos identificativos del titular</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSICE), se informa que el titular del presente sitio web es:
        </p>
        <ul>
          <li><strong>Denominación social:</strong> Mkt Web 360 SLU</li>
          <li><strong>CIF:</strong> B87679304</li>
          <li><strong>Domicilio social:</strong> España</li>
          <li><strong>Email:</strong> info@emprendedigital.es</li>
          <li><strong>Sitio web:</strong> https://www.emprendedigital.es</li>
        </ul>

        <h2>2. Objeto</h2>
        <p>
          El presente Aviso Legal regula el acceso y la utilización del sitio web{" "}
          <strong>www.emprendedigital.es</strong> (en adelante, el "Sitio Web"), titularidad de Mkt Web 360 SLU. El
          acceso al Sitio Web implica la aceptación expresa y sin reservas de todos los términos del presente Aviso
          Legal.
        </p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Los contenidos del Sitio Web (textos, imágenes, gráficos, diseño, código fuente, etc.) son propiedad de
          Mkt Web 360 SLU o de terceros que han autorizado su uso. Queda prohibida la reproducción, distribución,
          comunicación pública y transformación de dichos contenidos sin autorización expresa del titular.
        </p>

        <h2>4. Exclusión de responsabilidad</h2>
        <p>
          Mkt Web 360 SLU no garantiza la exactitud, integridad o actualidad de la información contenida en el Sitio
          Web. Los precios y disponibilidad de los productos enlazados pueden variar. El usuario debe verificar la
          información directamente en los sitios de venta antes de realizar cualquier compra.
        </p>

        <h2>5. Programa de afiliados de Amazon</h2>
        <p>
          Emprende Digital participa en el Programa de Afiliados de Amazon EU. Los enlaces a productos de Amazon
          incluidos en este sitio son enlaces de afiliado, lo que significa que podemos recibir una comisión si
          realizas una compra tras hacer clic en dichos enlaces. El precio final para el comprador no varía. Puedes
          obtener más información sobre el programa de afiliados de Amazon en{" "}
          <a
            href="https://afiliados.amazon.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            afiliados.amazon.es
          </a>.
        </p>

        <h2>6. Ley aplicable y jurisdicción</h2>
        <p>
          Las relaciones establecidas entre Mkt Web 360 SLU y el usuario se regirán por la legislación española
          vigente. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales
          españoles competentes.
        </p>

        <p className="text-gray-400 text-xs mt-8">Última actualización: junio 2025</p>
      </div>
    </div>
  );
}
