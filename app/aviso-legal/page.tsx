import type { Metadata } from "next";

import { CONTACTO_EMAIL, TITULAR } from "@/lib/directorio";

export const metadata: Metadata = {
  title: "Aviso legal y datos del titular",
  description: "Aviso legal de Emprende Digital — MKTWEB360, S.L.U. (CIF B87679304).",
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
          <li><strong>Denominación social:</strong> {TITULAR.razon}</li>
          <li><strong>Nombre comercial:</strong> MKTWEB</li>
          <li><strong>CIF:</strong> {TITULAR.cif}</li>
          <li><strong>Domicilio social:</strong> {TITULAR.domicilio}</li>
          <li><strong>Datos registrales:</strong> {TITULAR.registro}</li>
          <li><strong>Teléfono:</strong> {TITULAR.telefono}</li>
          <li><strong>Email:</strong> {CONTACTO_EMAIL}</li>
          <li><strong>Sitio web:</strong> https://www.emprendedigital.es</li>
        </ul>

        <h2>2. Objeto</h2>
        <p>
          El presente Aviso Legal regula el acceso y la utilización del sitio web{" "}
          <strong>www.emprendedigital.es</strong> (en adelante, el "Sitio Web"), titularidad de {TITULAR.razon}. El
          acceso al Sitio Web implica la aceptación expresa y sin reservas de todos los términos del presente Aviso
          Legal.
        </p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Los contenidos del Sitio Web (textos, imágenes, gráficos, diseño, código fuente, etc.) son propiedad de
          {TITULAR.razon} o de terceros que han autorizado su uso. Queda prohibida la reproducción, distribución,
          comunicación pública y transformación de dichos contenidos sin autorización expresa del titular.
        </p>

        <h2>4. Exclusión de responsabilidad</h2>
        <p>
          {TITULAR.razon} no garantiza la exactitud, integridad o actualidad de la información contenida en el Sitio
          Web. Los precios y disponibilidad de los productos enlazados pueden variar. El usuario debe verificar la
          información directamente en los sitios de venta antes de realizar cualquier compra. Si detectas un dato
          incorrecto, puedes comunicárnoslo desde la{" "}
          <a href="/contacto" className="text-indigo-600 hover:underline">
            página de contacto
          </a>
          .
        </p>

        <h2>5. Programa de afiliados</h2>
        <p>
          Emprende Digital participa en programas de afiliación con distintos partners comerciales. Los enlaces a
          productos incluidos en este sitio son enlaces de afiliado, lo que significa que podemos recibir una comisión si
          realizas una compra tras hacer clic en dichos enlaces. El precio final para el comprador no varía. Consulta el
          detalle de los programas de afiliación en los que participamos en nuestra{" "}
          <a href="/politica-de-privacidad" className="text-indigo-600 hover:underline">
            política de privacidad
          </a>
          .
        </p>

        <h2>6. Directorio de empresas</h2>
        <p>
          El directorio de empresas de este sitio lo edita {TITULAR.razon}. Las fichas las redactan las propias empresas y
          su publicación no implica recomendación ni aval. Las{" "}
          <a href="/directorio/condiciones" className="text-indigo-600 hover:underline">condiciones del directorio</a>{" "}
          explican qué revisamos, cómo avisar de un contenido y cómo darse de baja. La ficha de {TITULAR.razon} en el
          directorio está identificada como ficha de la empresa editora.
        </p>

        <h2>7. Ley aplicable y jurisdicción</h2>
        <p>
          Las relaciones establecidas entre {TITULAR.razon} y el usuario se regirán por la legislación española
          vigente. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales
          españoles competentes.
        </p>

        <p className="text-gray-400 text-xs mt-8">Última actualización: 8 de noviembre de 2026</p>
      </div>
    </div>
  );
}
