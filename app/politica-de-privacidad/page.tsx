import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad y protección de datos",
  description: "Política de privacidad de Emprende Digital — cómo recogemos, usamos y protegemos tus datos personales.",
  alternates: { canonical: "https://www.emprendedigital.es/politica-de-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Política de Privacidad</h1>
      <div className="prose text-sm">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>Mkt Web 360 SLU</strong> (CIF B87679304), con email de contacto info@emprendedigital.es, es el
          responsable del tratamiento de los datos personales recogidos a través del sitio web www.emprendedigital.es.
          Sus datos identificativos completos figuran en el{" "}
          <a href="/aviso-legal" className="text-indigo-600 hover:underline">
            Aviso Legal
          </a>
          .
        </p>

        <h2>2. Datos que recogemos</h2>
        <p>Podemos recoger los siguientes tipos de datos:</p>
        <ul>
          <li>
            <strong>Datos de uso:</strong> Información sobre cómo interactúas con el sitio web (páginas visitadas,
            clics en enlaces a Amazon, navegador y dispositivo) a través de Google Analytics 4, con cookies solo si las
            aceptas (ver apartado 5).
          </li>
          <li>
            <strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo y proveedor de
            servicios de Internet, recogidos automáticamente por los servidores web.
          </li>
          <li>
            <strong>Datos de contacto:</strong> Si nos envías un correo electrónico, recogemos tu dirección de email
            y el contenido de tu mensaje.
          </li>
        </ul>

        <h2>3. Finalidad y base legal del tratamiento</h2>
        <ul>
          <li>
            <strong>Análisis de uso:</strong> Para medir de forma agregada las visitas y mejorar el contenido del sitio
            web. Base legal: consentimiento (Art. 6.1.a RGPD).
          </li>
          <li>
            <strong>Publicidad:</strong> Si aceptas las cookies de publicidad, usamos Google AdSense para mostrar
            anuncios personalizados. Base legal: consentimiento (Art. 6.1.a RGPD).
          </li>
          <li>
            <strong>Atención al usuario:</strong> Para responder a tus consultas por email. Base legal: interés
            legítimo o consentimiento según el caso.
          </li>
        </ul>

        <h2>4. Cookies y tecnologías de seguimiento</h2>
        <p>
          Utilizamos cookies propias y de terceros. Puedes consultar más información en nuestra{" "}
          <a href="/politica-de-cookies" className="text-indigo-600 hover:underline">
            Política de Cookies
          </a>. Puedes gestionar tus preferencias de cookies en cualquier momento a través del banner de cookies del
          sitio o borrando las cookies de tu navegador.
        </p>

        <h2>5. Analítica web: Google Analytics 4</h2>
        <p>
          Usamos Google Analytics 4, un servicio de Google Ireland Limited, para medir de forma agregada las visitas, las
          páginas vistas y los clics en los enlaces de afiliado a Amazon (registramos la URL del enlace y la página en la
          que se pulsa), con el fin de saber qué contenidos resultan útiles y mejorarlos.
        </p>
        <ul>
          <li>
            <strong>Base legal:</strong> tu consentimiento (Art. 6.1.a RGPD), que das o rechazas en el mensaje de
            consentimiento de Google y puedes retirar en cualquier momento desde «Preferencias de cookies» en el pie de
            página.
          </li>
          <li>
            <strong>Datos tratados:</strong> identificador online de la cookie de analítica, dirección IP (Google
            Analytics 4 la trunca o anonimiza y no la almacena completa) y datos de navegación y del dispositivo
            (páginas vistas, enlaces pulsados, navegador, sistema operativo y tipo de dispositivo).
          </li>
          <li>
            <strong>Sin consentimiento:</strong> no se instalan cookies de analítica; Google Analytics solo recibe
            señales sin cookies y sin identificadores persistentes.
          </li>
          <li>
            <strong>Conservación:</strong> los datos de usuario y de eventos se conservan en Google Analytics hasta 14
            meses.
          </li>
          <li>
            <strong>Transferencias internacionales:</strong> los datos pueden ser tratados por Google LLC en EE. UU.; la
            transferencia está amparada en el Marco de Privacidad de Datos UE-EE. UU. y en las cláusulas contractuales
            tipo de la Comisión Europea.
          </li>
        </ul>

        <h2>6. Google AdSense</h2>
        <p>
          Este sitio utiliza Google AdSense para mostrar publicidad. Google, como proveedor externo, usa cookies para
          mostrar anuncios basados en las visitas anteriores del usuario al sitio y a otros sitios web. Puedes
          desactivar la publicidad personalizada en{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Configuración de anuncios de Google
          </a>.
        </p>

        <h2>7. Derechos del usuario</h2>
        <p>
          Como usuario, tienes los siguientes derechos sobre tus datos personales:
        </p>
        <ul>
          <li>Derecho de acceso, rectificación y supresión de datos</li>
          <li>Derecho a la limitación del tratamiento</li>
          <li>Derecho a la portabilidad de datos</li>
          <li>Derecho de oposición al tratamiento</li>
          <li>Derecho a retirar el consentimiento en cualquier momento</li>
        </ul>
        <p>
          Para ejercer estos derechos, puedes contactarnos en info@emprendedigital.es (los datos de contacto están
          también en la{" "}
          <a href="/contacto" className="text-indigo-600 hover:underline">
            página de contacto
          </a>
          ). También tienes derecho a
          presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
        </p>

        <h2>8. Conservación de datos</h2>
        <p>
          Los datos de uso analítico (Google Analytics 4) se conservan hasta 14 meses. Los emails de contacto se
          conservan el tiempo necesario para responder y, después, durante los plazos legales de prescripción.
        </p>

        <p className="text-gray-400 text-xs mt-8">Última actualización: octubre de 2026</p>
      </div>
    </div>
  );
}
