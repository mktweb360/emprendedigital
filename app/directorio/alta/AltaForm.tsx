"use client";

import Link from "next/link";
import { useActionState } from "react";

import { enviarAltaAction, type AltaEstado } from "./actions";

const campo = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none";
const etiqueta = "block text-sm font-semibold text-gray-800 mb-1";

export default function AltaForm({ categorias, marketingTexto, razon, contactoEmail }: { categorias: readonly string[]; marketingTexto: string; razon: string; contactoEmail: string }) {
  const [estado, accion, pendiente] = useActionState<AltaEstado, FormData>(enviarAltaAction, null);

  if (estado?.ok) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-sm text-green-900">
        <strong className="block mb-1">Solicitud recibida</strong>
        Revisaremos tu ficha antes de publicarla y te avisaremos por correo. Mientras tanto no hace falta que envíes nada más.
      </div>
    );
  }

  return (
    <form action={accion} className="space-y-5">
      {estado?.error && <p role="alert" className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">{estado.error}</p>}

      <fieldset className="space-y-4">
        <legend className="text-lg font-extrabold text-gray-900 mb-2">Tu empresa</legend>
        <div><label className={etiqueta} htmlFor="name">Nombre de la empresa *</label><input id="name" name="name" required maxLength={120} className={campo} /></div>
        <div>
          <label className={etiqueta} htmlFor="category">Categoría</label>
          <select id="category" name="category" className={campo} defaultValue="">
            <option value="">Elige una categoría</option>
            {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div><label className={etiqueta} htmlFor="province">Provincia</label><input id="province" name="province" maxLength={60} className={campo} /></div>
        <div><label className={etiqueta} htmlFor="shortDescription">Descripción corta * (20-300 caracteres)</label><textarea id="shortDescription" name="shortDescription" required minLength={20} maxLength={300} rows={3} className={campo} /></div>
        <div><label className={etiqueta} htmlFor="longDescription">Descripción ampliada</label><textarea id="longDescription" name="longDescription" maxLength={2000} rows={5} className={campo} /></div>
        <div><label className={etiqueta} htmlFor="websiteUrl">Web</label><input id="websiteUrl" name="websiteUrl" type="text" inputMode="url" placeholder="https://… o ejemplo.com" maxLength={300} className={campo} /></div>
        <div><label className={etiqueta} htmlFor="logoUrl">Dirección (URL) de tu logotipo</label><input id="logoUrl" name="logoUrl" type="text" inputMode="url" placeholder="https://… o ejemplo.com" maxLength={300} className={campo} /></div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-extrabold text-gray-900 mb-2">Servicios o productos (hasta 3)</legend>
        {[1, 2, 3].map((i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input name={`service${i}Name`} placeholder={`Servicio ${i}`} maxLength={100} aria-label={`Nombre del servicio ${i}`} className={campo} />
            <input name={`service${i}Description`} placeholder="Descripción breve" maxLength={300} aria-label={`Descripción del servicio ${i}`} className={campo} />
            <input name={`service${i}Url`} type="text" inputMode="url" placeholder="https://… o ejemplo.com" maxLength={300} aria-label={`Enlace del servicio ${i}`} className={campo} />
          </div>
        ))}
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-lg font-extrabold text-gray-900 mb-2">Persona de contacto</legend>
        <p className="text-xs text-gray-500">Estos datos son para que podamos escribirte. Solo se publican si tú lo activas en tu panel.</p>
        <div><label className={etiqueta} htmlFor="contactName">Nombre *</label><input id="contactName" name="contactName" required maxLength={120} className={campo} /></div>
        <div><label className={etiqueta} htmlFor="contactEmail">Correo *</label><input id="contactEmail" name="contactEmail" type="email" required maxLength={200} className={campo} /></div>
        <div><label className={etiqueta} htmlFor="contactPhone">Teléfono</label><input id="contactPhone" name="contactPhone" type="tel" maxLength={40} className={campo} /></div>
      </fieldset>

      {/* Campo trampa: oculto para personas; los bots lo rellenan. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label>No rellenar<input name="web_extra" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="space-y-3 text-sm text-gray-700">
        <label className="flex items-start gap-2">
          <input type="checkbox" name="terms" required className="mt-1" />
          <span>He leído y acepto las <Link href="/directorio/condiciones" className="text-indigo-600 hover:underline" target="_blank">condiciones del directorio</Link> y la <Link href="/politica-de-privacidad" className="text-indigo-600 hover:underline" target="_blank">política de privacidad</Link>. *</span>
        </label>
        <label className="flex items-start gap-2">
          <input type="checkbox" name="marketing" className="mt-1" />
          <span>{marketingTexto}</span>
        </label>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs leading-relaxed text-gray-600">
        <p>
          <strong className="text-gray-800">Información básica sobre protección de datos.</strong> Responsable: {razon} Finalidad: gestionar tu
          solicitud, revisar y publicar tu ficha, verificar tu correo y enviarte avisos de la ficha y un informe mensual de visitas y clics.
          Base: aplicar tu solicitud y nuestro interés legítimo en informarte; las ofertas, solo si marcas la casilla. Destinatarios: proveedores
          de alojamiento y de correo. Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad, escribiendo a{" "}
          {contactoEmail}, y reclamación ante la Agencia Española de Protección de Datos. Más información en la{" "}
          <Link href="/politica-de-privacidad#directorio" className="text-indigo-600 hover:underline" target="_blank">política de privacidad</Link>.
        </p>
        <p className="mt-2">Al enviar el formulario declaras que actúas en nombre de esta empresa y con fines profesionales.</p>
      </div>

      <button type="submit" disabled={pendiente} className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors">
        {pendiente ? "Enviando…" : "Enviar para revisión"}
      </button>
    </form>
  );
}
