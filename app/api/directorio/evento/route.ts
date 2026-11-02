import { NextRequest, NextResponse } from "next/server";

import { DIRECTORIO_ACTIVO, enviarEvento } from "@/lib/directorio";

const KINDS = ["listing_view", "click_web", "click_phone", "click_email", "click_product"];

/**
 * POST /api/directorio/evento: visita o clic en una ficha. Se reenvía a MktOS desde el servidor; la IP y el agente del
 * visitante solo sirven para la huella diaria allí y no se guardan. Responde 204 siempre (no da pistas a los bots).
 */
export async function POST(req: NextRequest) {
  if (!DIRECTORIO_ACTIVO) return new NextResponse(null, { status: 404 });
  const origin = req.headers.get("origin");
  if (origin) {
    let host = "";
    try {
      host = new URL(origin).host;
    } catch {
      return new NextResponse(null, { status: 204 }); // «Origin: null» y similares
    }
    if (host !== req.headers.get("host")) return new NextResponse(null, { status: 204 }); // solo desde este sitio
  }
  if (Number(req.headers.get("content-length") ?? 0) > 2000) return new NextResponse(null, { status: 204 });
  try {
    const b = (await req.json()) as Record<string, unknown>;
    if (typeof b.kind !== "string" || !KINDS.includes(b.kind) || typeof b.slug !== "string" || !b.slug) return new NextResponse(null, { status: 204 });
    await enviarEvento({
      kind: b.kind,
      slug: b.slug.slice(0, 80),
      path: typeof b.path === "string" ? b.path.slice(0, 200) : undefined,
      referrer: typeof b.referrer === "string" ? b.referrer.slice(0, 300) : undefined,
      clientIp: req.headers.get("x-real-ip")?.trim() || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "",
      userAgent: req.headers.get("user-agent") ?? "",
    });
  } catch {
    /* nada que hacer: la medición es opcional */
  }
  return new NextResponse(null, { status: 204 });
}
