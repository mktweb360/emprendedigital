"use client";

import { useEffect, type AnchorHTMLAttributes, type ReactNode } from "react";

type Kind = "listing_view" | "click_web" | "click_phone" | "click_email" | "click_product";

// Medición sin cookies ni almacenamiento en el navegador: solo se avisa al servidor del blog, que reenvía el evento a
// MktOS con una huella diaria. No se guarda ninguna IP ni se sigue a nadie de un día a otro.
function send(kind: Kind, slug: string) {
  try {
    const body = JSON.stringify({ kind, slug, path: location.pathname, referrer: document.referrer || undefined });
    if (navigator.sendBeacon) navigator.sendBeacon("/api/directorio/evento", new Blob([body], { type: "application/json" }));
    else void fetch("/api/directorio/evento", { method: "POST", body, headers: { "content-type": "application/json" }, keepalive: true });
  } catch {
    /* la medición nunca debe romper la página */
  }
}

export function TrackView({ slug }: { slug: string }) {
  useEffect(() => {
    send("listing_view", slug);
  }, [slug]);
  return null;
}

export function TrackedLink({ kind, slug, children, ...rest }: { kind: Exclude<Kind, "listing_view">; slug: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...rest} onClick={() => send(kind, slug)} onAuxClick={(e) => { if (e.button === 1) send(kind, slug); }}>
      {children}
    </a>
  );
}
