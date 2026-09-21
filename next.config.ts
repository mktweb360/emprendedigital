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
  async redirects() {
    return [
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
        destination: "/tienda/microfonos/elgato-wave3-microfono-condensador-usb",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
