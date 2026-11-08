import type { Metadata } from "next";

import { CONTACTO_EMAIL, TITULAR } from "@/lib/directorio";

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
          <strong>{TITULAR.razon}</strong> (CIF {TITULAR.cif}), con domicilio en {TITULAR.domicilio} y email de contacto {CONTACTO_EMAIL}, es el
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

        <h2 id="directorio">7. Directorio de empresas</h2>
        <p>
          Esta sección se aplica a las personas que dan de alta una empresa o ficha en el{" "}
          <a href="/directorio" className="text-indigo-600 hover:underline">directorio de empresas</a> (persona de
          contacto) y a quienes visitan las fichas. El resto de apartados de esta política también se aplican.
        </p>
        <ul>
          <li>
            <strong>Responsable:</strong> {TITULAR.razon} (CIF {TITULAR.cif}), {TITULAR.domicilio}. Correo:{" "}
            {CONTACTO_EMAIL}.
          </li>
          <li>
            <strong>Datos que tratamos:</strong> nombre, correo y teléfono (opcional) de la persona de contacto; el
            nombre, la descripción, la categoría, la provincia, la web, el logotipo, las imágenes, los servicios y
            demás datos que la empresa decide publicar (por ejemplo razón social, NIF o CIF, dirección, horario,
            redes y preguntas frecuentes); la fecha y la versión de las condiciones aceptadas; y, si la empresa lo
            marca, el consentimiento para recibir ofertas (con el texto mostrado, la fecha, la IP y el navegador en
            el momento de confirmarlo). Si facilitas datos de una persona distinta del titular del correo, debes
            tener su permiso.
          </li>
        </ul>
        <p><strong>Para qué y con qué base jurídica:</strong></p>
        <ul>
          <li>
            Gestionar el alta, revisar y publicar la ficha, permitir su edición desde el panel y atender avisos sobre
            ella: aplicación de la solicitud de la empresa (art. 6.1.b RGPD).
          </li>
          <li>
            Verificar el correo, enviar avisos de la ficha y un informe mensual de visitas y clics, con enlace de baja:
            ejecución del servicio solicitado e interés legítimo en informar a quien ha dado de alta una ficha (art.
            6.1.b y 6.1.f RGPD).
          </li>
          <li>
            Atender solicitudes de planes de pago y gestionar la relación comercial resultante: medidas
            precontractuales y contrato (art. 6.1.b RGPD) e interés legítimo (art. 6.1.f RGPD).
          </li>
          <li>
            Enviar ofertas y novedades de {TITULAR.razon} y de sus webs y marcas, solo si marcas la casilla opcional y
            confirmas tu correo: consentimiento (art. 6.1.a RGPD y art. 21 LSSI-CE). Puedes retirarlo cuando quieras.
          </li>
          <li>
            Medir las visitas y los clics de las fichas: interés legítimo (art. 6.1.f RGPD). Esta medición no usa
            cookies ni guarda nada en tu dispositivo. Para no contar dos veces al mismo visitante en un día,
            calculamos una huella diaria a partir de la IP y del navegador; no guardamos la IP y la huella se borra a
            los 2 días. Después solo quedan cifras agregadas (visitas, clics y el dominio de la web de procedencia).
          </li>
          <li>
            Prevenir abusos y fraude y atender reclamaciones o avisos sobre contenidos: interés legítimo (art. 6.1.f
            RGPD) y cumplimiento de obligaciones legales.
          </li>
        </ul>
        <p>
          <strong>Qué se publica.</strong> Todo lo que figura en la ficha es público y puede aparecer en buscadores. El
          correo y el teléfono de contacto solo se publican si la empresa lo activa en su panel. Si eres autónomo,
          publica tu NIF y tu dirección solo si quieres.
        </p>
        <p>
          <strong>Destinatarios.</strong> Proveedores que tratan datos por nuestra cuenta: alojamiento y base de datos
          (Vercel y Supabase) y envío de correo (el servicio de correo transaccional que usamos para los avisos y los
          informes). Cuando pulsas «Ver mapa» en una ficha, Google. No cedemos tus datos a otros terceros salvo
          obligación legal.
        </p>
        <p>
          <strong>Transferencias internacionales.</strong> Algunos de estos proveedores pueden tratar datos en EE. UU.
          al amparo del Marco de Privacidad de Datos UE-EE. UU. o de las cláusulas contractuales tipo de la Comisión
          Europea.
        </p>
        <p>
          <strong>Conservación.</strong> Mientras la ficha esté publicada. Si se da de baja (desde el botón «Dar de baja
          mi ficha» del panel o por correo), suprimimos los datos de contacto en un máximo de 30 días, salvo los que
          debamos conservar por obligación legal (por ejemplo, la facturación de un plan de pago), que se mantienen
          bloqueados mientras puedan surgir responsabilidades. Las solicitudes rechazadas se borran a los 12 meses. La
          huella diaria de las visitas se borra a los 2 días y las cifras agregadas no contienen datos personales.
        </p>
        <p>
          <strong>Derechos y reclamación.</strong> Puedes ejercer los derechos que se indican en el apartado siguiente
          escribiendo a {CONTACTO_EMAIL}. Si no estás conforme, puedes reclamar ante la Agencia Española de Protección
          de Datos (www.aepd.es). Las{" "}
          <a href="/directorio/condiciones" className="text-indigo-600 hover:underline">condiciones del directorio</a>{" "}
          regulan el resto de la relación con las empresas.
        </p>

        <h2>8. Derechos del usuario</h2>
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
          Para ejercer estos derechos, puedes contactarnos en {CONTACTO_EMAIL} (los datos de contacto están
          también en la{" "}
          <a href="/contacto" className="text-indigo-600 hover:underline">
            página de contacto
          </a>
          ). También tienes derecho a
          presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
        </p>

        <h2>9. Conservación de datos</h2>
        <p>
          Los datos de uso analítico (Google Analytics 4) se conservan hasta 14 meses. Los emails de contacto se
          conservan el tiempo necesario para responder y, después, durante los plazos legales de prescripción. Los
          plazos del directorio de empresas figuran en el apartado 7.
        </p>

        <p className="text-gray-400 text-xs mt-8">Última actualización: 8 de noviembre de 2026</p>
      </div>
    </div>
  );
}
