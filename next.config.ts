import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  // Panel de las empresas del directorio: vive en MktOS, pero la empresa lo ve en este dominio (/directorio-empresa).
  // Solo con el directorio activo y MKTOS_URL https; si no, esas rutas dan 404 como el resto del directorio.
  async rewrites() {
    const base = (process.env.MKTOS_URL ?? "").trim().replace(/\/+$/, "");
    if (process.env.DIRECTORIO_ACTIVO !== "true" || !/^https:\/\/[a-z0-9.-]+$/i.test(base)) return [];
    // Dos reglas y no «:path*»: con la raíz vacía el destino salía con barra final («/directorio-empresa/»), MktOS la quitaba con un
    // 308 de ruta relativa y el navegador volvía a este dominio: bucle de redirecciones al entrar al panel tras el enlace de acceso.
    return [
      { source: "/directorio-empresa", destination: `${base}/directorio-empresa` },
      { source: "/directorio-empresa/:path+", destination: `${base}/directorio-empresa/:path+` },
    ];
  },
  async redirects() {
    return [
      { source: "/tienda/portatiles/apple-macbook-air-m3-13", destination: "/tienda/portatiles/apple-macbook-air-m5-13", permanent: true },
      { source: "/tienda/portatiles/lenovo-thinkpad-x1-carbon-gen12", destination: "/tienda/portatiles/asus-zenbook-14-oled-ux3405", permanent: true },
      { source: "/tienda/portatiles/hp-pavilion-plus-14-oled", destination: "/tienda/portatiles/hp-omnibook-5-14-oled-snapdragon", permanent: true },
      { source: "/tienda/microfonos/elgato-wave3-microfono-condensador-usb", destination: "/tienda/microfonos/elgato-wave3-mk2-microfono-condensador-usb", permanent: true },
      { source: "/tienda/escritorios/flexispot-e7-pro-escritorio-ajustable", destination: "/tienda/escritorios/flexispot-escritorio-elevable-120x60-tablero-entero", permanent: true },
      { source: "/tienda/escritorios/flexispot-eg1-escritorio-ajustable", destination: "/tienda/escritorios/flexispot-escritorio-elevable-120x60-tablero-entero", permanent: true },
      { source: "/tienda/hubs-docking/anker-powerexpand-13en1-docking", destination: "/tienda/hubs-docking", permanent: true },
      { source: "/tienda/webcams/razer-kiyo-pro-webcam-streaming", destination: "/tienda/webcams/ugreen-finecam-lite-4k-webcam", permanent: true },
      { source: "/tienda/hubs-docking/baseus-nomos-air-displaylink-12en1", destination: "/tienda/hubs-docking/baseus-docking-station-12en1", permanent: true },
      { source: "/tienda/sillas-ergonomicas/protoarc-ec200-pro-silla-malla-reposabrazos-4d", destination: "/tienda/sillas-ergonomicas/sihoo-m57-silla-ergonomica", permanent: true },
      {
        source: "/mejores-portatiles-trabajo-remoto",
        destination: "/tienda/portatiles",
        permanent: true,
      },
      {
        source: "/mejores-microfonos-podcast-streaming",
        destination: "/blog/mejor-microfono-usb-podcast-streaming-2026",
        permanent: true,
      },
      {
        source: "/mejores-auriculares-teletrabajo",
        destination: "/blog/mejores-auriculares-cancelacion-ruido-trabajo-2025",
        permanent: true,
      },
      {
        source: "/mejores-webcams-videollamadas",
        destination: "/blog/mejor-webcam-videollamadas-trabajo-remoto",
        permanent: true,
      },
      {
        source: "/iluminacion-streaming-youtube",
        destination: "/blog/iluminacion-videollamadas-home-office",
        permanent: true,
      },
      {
        source: "/mejores-sillas-ergonomicas-teletrabajo",
        destination: "/blog/mejor-silla-ergonomica-home-office-2025",
        permanent: true,
      },
      {
        source: "/mejores-escritorios-ajustables-altura",
        destination: "/blog/escritorio-regulable-altura-home-office",
        permanent: true,
      },
      {
        source: "/mejores-teclados-trabajo-remoto",
        destination: "/blog/mejor-teclado-raton-trabajo-remoto",
        permanent: true,
      },
      {
        source: "/blog/productividad-trabajo-remoto-herramientas",
        destination: "/blog/herramientas-productividad-trabajo-remoto-2025",
        permanent: true,
      },
      {
        source: "/blog/baseus-docking-station-12en1-analisis",
        destination: "/blog/conectar-dos-monitores-portatil-guia",
        permanent: true,
      },
      {
        source: "/tienda/perifericos/keychron-k2-teclado-mecanico",
        destination: "/tienda/perifericos/keychron-k2-pro-mecanico",
        permanent: true,
      },
      {
        source: "/tienda/perifericos/logitech-mx-master-3s-raton",
        destination: "/tienda/perifericos/logitech-mx-master-3s",
        permanent: true,
      },
      {
        source: "/tienda/monitores/lg-27gn850-ultragear-27-monitor",
        destination: "/tienda/monitores/dell-s2725qc-monitor-4k-usbc",
        permanent: true,
      },
      {
        source: "/tienda/perifericos/logitech-c920-webcam-hd",
        destination: "/tienda/webcams/logitech-c920-hd-pro-webcam",
        permanent: true,
      },
      {
        source: "/tienda/webcams/logitech-c920-webcam-hd",
        destination: "/tienda/webcams/logitech-brio-4k-webcam",
        permanent: true,
      },
      {
        source: "/blog/hosting-web-empresas-espana-comparativa",
        destination: "/blog/hosting-wordpress-comparativa-espana-2025",
        permanent: true,
      },
      {
        source: "/tienda/monitores-home-office",
        destination: "/tienda/monitores",
        permanent: true,
      },
      {
        source: "/blog/productividad-trabajo-remoto-herramientas-ia",
        destination: "/blog/herramientas-ia-productividad-2025",
        permanent: true,
      },
      {
        source: "/tienda/microfonos/rode-nt-usb-mini-microfono",
        destination: "/tienda/microfonos/elgato-wave3-mk2-microfono-condensador-usb",
        permanent: true,
      },
      {
        source: "/blog/sihoo-m57-analisis-opinion",
        destination: "/blog/mejor-silla-ergonomica-home-office-2025",
        permanent: true,
      },
      {
        source: "/blog/flexispot-e7-pro-analisis-opinion",
        destination: "/blog/escritorio-regulable-altura-home-office",
        permanent: true,
      },
      {
        source: "/blog/logitech-mx-keys-analisis-opinion",
        destination: "/blog/mejor-teclado-raton-trabajo-remoto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
