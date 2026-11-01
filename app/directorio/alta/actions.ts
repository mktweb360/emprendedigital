"use server";

import { headers } from "next/headers";

import { DIRECTORIO_ACTIVO, enviarAlta } from "@/lib/directorio";

export type AltaEstado = { ok: boolean; error?: string } | null;

const txt = (f: FormData, k: string, max = 500) => {
  const v = f.get(k);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
};

export async function enviarAltaAction(_prev: AltaEstado, f: FormData): Promise<AltaEstado> {
  if (!DIRECTORIO_ACTIVO) return { ok: false, error: "El directorio no está disponible ahora mismo." };
  // Campo trampa: los bots lo rellenan; se responde como si hubiera ido bien.
  if (txt(f, "web_extra")) return { ok: true };

  const name = txt(f, "name", 120);
  const contactName = txt(f, "contactName", 120);
  const contactEmail = txt(f, "contactEmail", 200);
  const shortDescription = txt(f, "shortDescription", 300);
  if (!name || !contactName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) return { ok: false, error: "Rellena el nombre de la empresa, tu nombre y un correo válido." };
  if (shortDescription.length < 20) return { ok: false, error: "Escribe una descripción corta de al menos 20 caracteres." };
  if (f.get("terms") !== "on") return { ok: false, error: "Tienes que aceptar las condiciones del directorio." };

  const services: Array<{ name: string; description?: string; url?: string }> = [];
  for (let i = 1; i <= 3; i++) {
    const n = txt(f, `service${i}Name`, 100);
    if (!n) continue;
    services.push({ name: n, description: txt(f, `service${i}Description`, 300) || undefined, url: txt(f, `service${i}Url`, 300) || undefined });
  }

  const h = await headers();
  const res = await enviarAlta({
    name, contactName, contactEmail, contactPhone: txt(f, "contactPhone", 40) || undefined,
    category: txt(f, "category", 80) || undefined, province: txt(f, "province", 60) || undefined,
    shortDescription, longDescription: txt(f, "longDescription", 2000) || undefined,
    websiteUrl: txt(f, "websiteUrl", 300) || undefined, logoUrl: txt(f, "logoUrl", 300) || undefined,
    services, termsAccepted: true, marketingConsent: f.get("marketing") === "on",
    clientIp: h.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
  });
  return res.ok ? { ok: true } : { ok: false, error: res.error };
}
