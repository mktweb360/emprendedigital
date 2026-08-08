import { ImageResponse } from "next/og";
import { getPostBySlug, posts } from "@/data/posts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Blog Emprende Digital";
  const category = post?.category ?? "Home Office";
  const displayTitle = title.length > 60 ? title.slice(0, 57) + "…" : title;
  return new ImageResponse(
    <div style={{ background: "linear-gradient(135deg, #4f46e5, #3730a3)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "70px 80px" }}>
      <div style={{ background: "#4338ca", color: "#a5b4fc", fontSize: 24, fontWeight: 700, padding: "8px 20px", borderRadius: 6, marginBottom: 28, textTransform: "uppercase", letterSpacing: "2px" }}>{category}</div>
      <div style={{ color: "#ffffff", fontSize: 60, fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.15, marginBottom: 36, maxWidth: 980 }}>{displayTitle}</div>
      <div style={{ color: "#818cf8", fontSize: 26, fontWeight: 600 }}>emprendedigital.es</div>
    </div>,
    { ...size }
  );
}
