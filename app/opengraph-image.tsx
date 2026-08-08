import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Emprende Digital — Herramientas y equipamiento para emprendedores digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ background: "linear-gradient(135deg, #4f46e5, #3730a3)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px" }}>
      <div style={{ color: "#ffffff", fontSize: 68, fontWeight: 800, letterSpacing: "-2px", marginBottom: 24, textAlign: "center" }}>Emprende Digital</div>
      <div style={{ color: "#c7d2fe", fontSize: 30, fontWeight: 400, textAlign: "center", maxWidth: 800 }}>Herramientas y equipamiento para emprendedores</div>
      <div style={{ position: "absolute", bottom: 48, right: 60, color: "#818cf8", fontSize: 22, fontWeight: 600 }}>emprendedigital.es</div>
    </div>,
    { ...size }
  );
}
