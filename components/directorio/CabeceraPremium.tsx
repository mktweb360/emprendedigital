import type { CSSProperties } from "react";

import { TrackedLink } from "@/components/directorio/Track";
import type { Ficha } from "@/lib/directorio";

type Hero = NonNullable<Ficha["headerHero"]>;

const FUENTES: Record<string, string> = {
  serif: 'Georgia, "Times New Roman", Times, serif',
  redondeada: '"Trebuchet MS", "Arial Rounded MT Bold", ui-rounded, "Segoe UI", sans-serif',
  condensada: '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const HEX = /^#[0-9a-f]{6}$/i;
const color = (v: unknown, def: string) => (typeof v === "string" && HEX.test(v) ? v : def);

/** Texto legible sobre un color de fondo: negro sobre colores claros, blanco sobre oscuros. */
function tintaSobre(hex: string): string {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.5 ? "#111827" : "#ffffff";
}

/** Un botón: enlace a la propia ficha (#ancla) o a una web (se abre aparte y cuenta como clic a la web de la empresa). */
function Boton({ b, slug, rel, estilo, className }: { b: { text: string; url: string }; slug: string; rel: string; estilo: CSSProperties; className: string }) {
  if (/^#[a-z0-9_-]{1,60}$/i.test(b.url)) return <a href={b.url} style={estilo} className={className}>{b.text}</a>;
  if (!/^https?:\/\/[^\s"'<>]+$/i.test(b.url)) return null;
  return (
    <TrackedLink kind="click_web" slug={slug} href={b.url} target="_blank" rel={rel} style={estilo} className={className}>
      {b.text}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </TrackedLink>
  );
}

/**
 * Cabecera premium (plan Plus): la imagen de la empresa con su mensaje y hasta dos botones. En pantallas anchas el texto va
 * sobre la imagen; en móvil, debajo, para que ni la imagen ni el texto se tapen. El h1 de la página sigue siendo el nombre de la empresa.
 */
export function CabeceraPremium({ f, hero, rel }: { f: Ficha; hero: Hero; rel: string }) {
  const texto = color(hero.textColor, "#ffffff");
  const resalte = color(hero.accentColor, "#f97316");
  const fondoBoton = color(hero.btnColor, "#f97316");
  const fuente = hero.font && FUENTES[hero.font] ? { fontFamily: FUENTES[hero.font] } : {};
  const [linea1, ...resto] = (hero.title ?? "").split("|").map((x) => x.trim());
  const linea2 = resto.join(" ").trim();
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900";
  return (
    <div className="relative bg-[#0b0f19] md:min-h-[500px] flex flex-col" style={fuente}>
      {f.headerImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={f.headerImageUrl}
          alt={f.headerImageAlt?.trim() || `Imagen de cabecera de ${f.name}`}
          width={1600}
          height={900}
          loading="eager"
          referrerPolicy="no-referrer"
          className="w-full aspect-[16/9] object-cover md:aspect-auto md:absolute md:inset-0 md:h-full md:object-top"
        />
      )}
      <div className="relative md:flex-1 flex flex-col justify-center px-6 py-8 md:px-12 md:pt-32 md:pb-14">
        <div className="max-w-xl" style={{ color: texto }}>
          {(linea1 || linea2) && (
            <p className="text-3xl md:text-5xl font-extrabold leading-[1.1] md:[text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              {linea1}
              {linea2 && (<><br /><span style={{ color: resalte }}>{linea2}</span></>)}
            </p>
          )}
          {hero.subtitle && <p className="mt-4 text-base md:text-xl leading-relaxed opacity-95 md:[text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">{hero.subtitle}</p>}
          {(hero.btn1 || hero.btn2) && (
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              {hero.btn1 && <Boton b={hero.btn1} slug={f.slug} rel={rel} className={base} estilo={{ backgroundColor: fondoBoton, color: tintaSobre(fondoBoton) }} />}
              {hero.btn2 && <Boton b={hero.btn2} slug={f.slug} rel={rel} className={`${base} border-2 bg-black/20 backdrop-blur-[2px]`} estilo={{ borderColor: texto, color: texto }} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
