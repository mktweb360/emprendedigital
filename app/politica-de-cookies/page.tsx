import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Emprende Digital",
  description: "Política de cookies de Emprende Digital — qué cookies usamos y cómo gestionarlas.",
  alternates: { canonical: "https://www.emprendedigital.es/politica-de-cookies" },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Política de Cookies</h1>
      <div className="prose text-sm">
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web depositan en el dispositivo del usuario cuando
          los visita. Permiten al sitio web recordar información sobre tu visita (idioma, preferencias, etc.) para
          facilitar una experiencia más personalizada y eficiente en visitas futuras.
        </p>

        <h2>2. Tipos de cookies que utilizamos</h2>

        <h3>Cookies técnicas (necesarias)</h3>
        <p>
          Son imprescindibles para el funcionamiento del sitio web. Sin ellas, el sitio no puede funcionar
          correctamente. No requieren consentimiento del usuario según la normativa vigente.
        </p>
        <table>
          <thead>
            <tr><th>Nombre</th><th>Finalidad</th><th>Duración</th></tr>
          </thead>
          <tbody>
            <tr><td>emprendedigital_consent</td><td>Almacena las preferencias de consentimiento de cookies del usuario</td><td>1 año</td></tr>
          </tbody>
        </table>

        <h3>Cookies analíticas</h3>
        <p>
          Permiten cuantificar el número de usuarios y analizar el comportamiento de navegación, identificar las
          páginas más visitadas y el flujo de contenidos. La información recogida es anónima y se usa para mejorar
          el sitio web.
        </p>

        <h3>Cookies publicitarias (Google AdSense)</h3>
        <p>
          Usamos Google AdSense para mostrar publicidad. Google puede usar cookies para personalizar los anuncios
          que se muestran basándose en el historial de navegación del usuario. Estas cookies solo se activan si el
          usuario ha dado su consentimiento explícito.
        </p>
        <table>
          <thead>
            <tr><th>Proveedor</th><th>Finalidad</th><th>Duración</th></tr>
          </thead>
          <tbody>
            <tr><td>Google (AdSense)</td><td>Publicidad personalizada basada en intereses</td><td>Hasta 2 años</td></tr>
            <tr><td>Amazon (afiliados)</td><td>Seguimiento de conversiones de afiliado</td><td>24 horas</td></tr>
          </tbody>
        </table>

        <h2>3. Cómo gestionar las cookies</h2>
        <p>Tienes varias opciones para gestionar tus preferencias de cookies:</p>
        <ul>
          <li>
            <strong>Banner de cookies del sitio:</strong> Al entrar por primera vez en el sitio, puedes aceptar,
            rechazar o personalizar las cookies mediante el banner de consentimiento. Puedes cambiar tu elección
            borrando las cookies de tu navegador.
          </li>
          <li>
            <strong>Configuración del navegador:</strong> Puedes bloquear o eliminar las cookies desde la
            configuración de privacidad de tu navegador (Chrome, Firefox, Safari, Edge).
          </li>
          <li>
            <strong>Herramientas de opt-out:</strong> Para publicidad de Google, puedes gestionar tus preferencias
            en{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              adssettings.google.com
            </a>.
          </li>
        </ul>

        <h2>4. Actualización de esta política</h2>
        <p>
          Podemos actualizar esta política de cookies periódicamente para reflejar cambios en las cookies que
          utilizamos o por otros motivos operativos, legales o reglamentarios. Te recomendamos revisar esta página
          regularmente para mantenerte informado.
        </p>

        <p className="text-gray-400 text-xs mt-8">Última actualización: junio 2025</p>
      </div>
    </div>
  );
}
