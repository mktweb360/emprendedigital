// Fichas de producto que se mantienen indexables (11/2026).
// Criterio: las más citadas por las guías del blog (relatedProducts). El resto de fichas siguen
// accesibles para el usuario, pero con noindex,follow y fuera del sitemap: Google AdSense evalúa
// el sitio completo y las fichas plantilla de afiliado restaban valor al conjunto.
export const FEATURED_PRODUCT_SLUGS = new Set<string>([
  "sihoo-m57-silla-ergonomica",
  "invision-mx200-brazo-monitor",
  "dell-s2725qc-monitor-4k-usbc",
  "logitech-mx-keys-advanced-s",
  "sony-wh-1000xm5-auriculares",
  "elgato-wave3-mk2-microfono-condensador-usb",
  "secretlab-titan-evo-2022-silla",
  "benq-gw2790-monitor-eye-care",
  "keychron-k2-pro-mecanico",
  "hbada-silla-ergonomica-pro",
  "logitech-mx-master-3s",
  "blue-yeti-usb-microfono",
  "rode-podmic-usb-microfono-xlr-usb",
  "hyperx-solocast-microfono",
  "ugreen-finecam-lite-4k-webcam",
]);

export const isFeaturedProduct = (slug: string) => FEATURED_PRODUCT_SLUGS.has(slug);
