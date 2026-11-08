"use client";

// Módulo de servicios y productos de la ficha del directorio: categorías (y subcategorías) a la izquierda, tarjetas de la
// categoría elegida a la derecha, y el carrusel «Productos destacados». Todo el contenido va en el HTML (los paneles
// inactivos solo se ocultan), así que los buscadores ven todos los servicios.

import { useEffect, useState, useSyncExternalStore } from "react";

import { fechaCorta, ofertaVigente } from "@/lib/ofertas";

import { TrackedLink } from "./Track";

export type ItemFicha = {
  i: number;
  name: string;
  description?: string | null;
  url?: string | null;
  group?: string | null;
  groupNote?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  featured?: boolean | null;
  offerText?: string | null;
  offerUntil?: string | null;
};

export type Categoria = {
  id: string;
  nombre: string;
  nota: string | null;
  sueltos: ItemFicha[];
  subs: Array<{ id: string; nombre: string; items: ItemFicha[] }>;
  total: number;
};

/** Consulta de medios sin parpadeos de hidratación: el servidor supone `servidor` y el navegador responde con el valor real. */
function useMedia(consulta: string, servidor: boolean) {
  return useSyncExternalStore(
    (aviso) => { const m = window.matchMedia(consulta); m.addEventListener("change", aviso); return () => m.removeEventListener("change", aviso); },
    () => window.matchMedia(consulta).matches,
    () => servidor,
  );
}


function Etiqueta({ s, hoy }: { s: ItemFicha; hoy: string }) {
  if (ofertaVigente(s, hoy)) {
    return (
      <span className="inline-block text-xs font-bold text-amber-800 bg-amber-100 rounded-full px-2.5 py-1">
        Oferta{s.offerUntil ? ` hasta el ${fechaCorta(s.offerUntil)}` : ""}
      </span>
    );
  }
  if (s.featured) return <span className="inline-block text-xs font-bold text-indigo-700 bg-indigo-50 rounded-full px-2.5 py-1">Destacado</span>;
  return null;
}

const claseTarjeta = "flex flex-col bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden scroll-mt-24";

/** Tarjeta de un servicio o producto (panel derecho y lista plana). */
export function ServicioCard({ s, slug, rel, hoy }: { s: ItemFicha; slug: string; rel: string; hoy: string }) {
  return (
    <li id={`svc-${s.i}`} className={claseTarjeta}>
      {s.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={s.imageUrl}
          alt={s.imageAlt?.trim() || `Imagen de ${s.name}`}
          width={800}
          height={450}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full aspect-[16/9] object-cover bg-gray-100"
        />
      )}
      <div className="p-4">
        <Etiqueta s={s} hoy={hoy} />
        <strong className="block text-gray-900 text-sm mt-1 first:mt-0">
          {s.url ? (
            <TrackedLink kind="click_product" slug={slug} href={s.url} target="_blank" rel={rel} className="text-indigo-700 hover:underline">
              {s.name}
            </TrackedLink>
          ) : (
            s.name
          )}
        </strong>
        {ofertaVigente(s, hoy) && <span className="block text-sm font-semibold text-amber-800 mt-1">{s.offerText}</span>}
        {s.description && <span className="block text-sm text-gray-600 mt-1">{s.description}</span>}
      </div>
    </li>
  );
}

function Rejilla({ items, slug, rel, hoy }: { items: ItemFicha[]; slug: string; rel: string; hoy: string }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((s) => <ServicioCard key={s.i} s={s} slug={slug} rel={rel} hoy={hoy} />)}
    </ul>
  );
}

/** Categorías a la izquierda (en móvil, fila desplazable) y, a la derecha, las tarjetas de la categoría o subcategoría elegida. */
export function ServiciosTabs({ categorias, slug, rel, hoy }: { categorias: Categoria[]; slug: string; rel: string; hoy: string }) {
  const [cat, setCat] = useState(categorias[0].id);
  const [sub, setSub] = useState<string | null>(null);

  // Un enlace con ancla (#cat-… o #svc-…) abre directamente su categoría.
  useEffect(() => {
    const h = decodeURIComponent(window.location.hash.slice(1));
    if (!h) return;
    const m = h.match(/^svc-(\d+)$/);
    const c = categorias.find((x) => x.id === h || x.subs.some((s) => s.id === h) || (m && [...x.sueltos, ...x.subs.flatMap((s) => s.items)].some((it) => it.i === +m[1])));
    if (c) {
      // El ancla solo existe en el navegador, después de hidratar: no se puede leer al renderizar.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCat(c.id);
      setSub(c.subs.find((s) => s.id === h)?.id ?? null);
    }
  }, [categorias]);

  const activa = categorias.find((c) => c.id === cat) ?? categorias[0];
  const elegir = (id: string, s: string | null = null) => { setCat(id); setSub(s); };

  return (
    <div className="lg:grid lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-6 items-start">
      <nav aria-label="Categorías de servicios y productos" className="flex gap-2 overflow-x-auto pb-3 mb-1 lg:flex-col lg:overflow-visible lg:pb-0 lg:sticky lg:top-24">
        {categorias.map((c, n) => {
          const on = c.id === activa.id;
          return (
            <div key={c.id} className="shrink-0 lg:shrink w-56 lg:w-auto">
              <button
                type="button"
                onClick={() => elegir(c.id)}
                aria-current={on ? "true" : undefined}
                className={`w-full text-left rounded-2xl px-4 py-3 border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ${
                  on ? "bg-gradient-to-r from-indigo-700 to-violet-600 text-white border-transparent shadow-md" : "bg-white text-gray-800 border-gray-200 hover:border-indigo-200 hover:shadow-sm"
                }`}
              >
                <span className={`block text-[11px] font-bold uppercase tracking-wide ${on ? "text-white/80" : "text-gray-400"}`}>
                  {String(n + 1).padStart(2, "0")} · {c.nombre} <span className="font-normal normal-case">({c.total})</span>
                </span>
                {c.nota && <span className="block text-sm font-semibold leading-snug mt-0.5">{c.nota}</span>}
              </button>
              {on && c.subs.length > 0 && (
                <ul className="hidden lg:block mt-2 ml-4 space-y-1 border-l border-indigo-100 pl-3">
                  <li>
                    <button type="button" onClick={() => elegir(c.id)} aria-current={sub === null ? "true" : undefined} className={`text-sm text-left hover:text-indigo-700 ${sub === null ? "font-bold text-indigo-700" : "text-gray-600"}`}>
                      Todo
                    </button>
                  </li>
                  {c.subs.map((s) => (
                    <li key={s.id}>
                      <button type="button" onClick={() => elegir(c.id, s.id)} aria-current={sub === s.id ? "true" : undefined} className={`text-sm text-left hover:text-indigo-700 ${sub === s.id ? "font-bold text-indigo-700" : "text-gray-600"}`}>
                        {s.nombre} <span className="text-gray-400">({s.items.length})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      <div className="min-w-0">
        {categorias.map((c) => (
          <section
            key={c.id}
            id={c.id}
            hidden={c.id !== activa.id}
            aria-labelledby={`${c.id}-t`}
            className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 md:p-6 border-t-4 border-t-indigo-600 scroll-mt-24"
          >
            <p className="text-[11px] font-bold uppercase tracking-wide text-indigo-700">{c.nombre}</p>
            <h3 id={`${c.id}-t`} className="text-xl font-extrabold text-gray-900 mb-4">{c.nota ?? c.nombre}</h3>
            {c.subs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 lg:hidden">
                <button type="button" onClick={() => elegir(c.id)} className={`text-sm font-semibold rounded-full px-3 py-1 ${sub === null ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-700"}`}>Todo</button>
                {c.subs.map((s) => (
                  <button key={s.id} type="button" onClick={() => elegir(c.id, s.id)} className={`text-sm font-semibold rounded-full px-3 py-1 ${sub === s.id ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-700"}`}>{s.nombre}</button>
                ))}
              </div>
            )}
            {c.sueltos.length > 0 && <div hidden={c.id === activa.id && sub !== null}><Rejilla items={c.sueltos} slug={slug} rel={rel} hoy={hoy} /></div>}
            {c.subs.map((s) => (
              <div key={s.id} id={s.id} hidden={c.id === activa.id && sub !== null && sub !== s.id} className="mt-5 first:mt-0 scroll-mt-24">
                <h4 className="text-sm font-extrabold text-gray-900 mb-2">{s.nombre}</h4>
                <Rejilla items={s.items} slug={slug} rel={rel} hoy={hoy} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

function TarjetaDestacada({ s, slug, rel, hoy }: { s: ItemFicha; slug: string; rel: string; hoy: string }) {
  const oferta = ofertaVigente(s, hoy);
  return (
    <div className="flex flex-col w-full bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm">
      {s.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={s.imageUrl}
          alt={s.imageAlt?.trim() || `Imagen de ${s.name}`}
          width={800}
          height={450}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full aspect-[16/9] object-cover bg-gray-100"
        />
      )}
      <div className="p-4 flex flex-col flex-1">
        <Etiqueta s={s} hoy={hoy} />
        <h3 className="text-base font-extrabold text-gray-900 mt-2 leading-snug">{s.name}</h3>
        {oferta && <p className="text-sm font-semibold text-amber-800 mt-1">{s.offerText}</p>}
        {s.description && <p className="text-sm text-gray-600 mt-1 line-clamp-3">{s.description}</p>}
        <div className="mt-auto pt-3">
          {s.url ? (
            <TrackedLink kind="click_product" slug={slug} href={s.url} target="_blank" rel={rel} className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-700 hover:text-indigo-800 hover:underline">
              Ver {oferta ? "la oferta" : "más"}
              <span className="sr-only"> de {s.name} (se abre en una pestaña nueva)</span>
            </TrackedLink>
          ) : (
            <a href={`#svc-${s.i}`} className="text-sm font-bold text-indigo-700 hover:underline">Ver en la lista</a>
          )}
          <p className="text-[11px] text-gray-400 mt-1.5">{oferta ? "Oferta publicada por la empresa" : "Destacado por la empresa"}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Carrusel de ofertas y productos destacados: 3 columnas en pantalla ancha (2 en tableta, 1 en móvil), avanza una tarjeta cada
 * 5 segundos y se detiene al pasar el ratón o con el foco dentro. Con 3 tarjetas o menos (las que caben) no se mueve.
 */
export function DestacadosCarrusel({ items, slug, rel, hoy, titulo }: { items: ItemFicha[]; slug: string; rel: string; hoy: string; titulo: string }) {
  const ancha = useMedia("(min-width: 1024px)", true);
  const media = useMedia("(min-width: 640px)", true);
  const reducido = useMedia("(prefers-reduced-motion: reduce)", false);
  const porVista = ancha ? 3 : media ? 2 : 1;
  const [posRaw, setPos] = useState(0);
  const [pausa, setPausa] = useState(false);
  const n = items.length;
  const mueve = n > porVista;
  const maxPos = Math.max(0, n - porVista);
  const pos = Math.min(posRaw, maxPos); // si la pantalla cambia de tamaño, nunca nos pasamos del final

  useEffect(() => {
    if (!mueve || pausa || reducido) return;
    const t = setInterval(() => setPos((p) => (Math.min(p, maxPos) >= maxPos ? 0 : Math.min(p, maxPos) + 1)), 5000);
    return () => clearInterval(t);
  }, [mueve, pausa, reducido, maxPos]);

  return (
    <section id="destacados" aria-roledescription="carrusel" aria-labelledby="destacados-t" className="mb-10 scroll-mt-24">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 id="destacados-t" className="text-xl font-extrabold text-gray-900">{titulo}</h2>
        {mueve && (
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Anterior" onClick={() => setPos((p) => (p <= 0 ? maxPos : p - 1))} className="w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">‹</button>
            <button type="button" aria-label="Siguiente" onClick={() => setPos((p) => (p >= maxPos ? 0 : p + 1))} className="w-8 h-8 rounded-full border border-gray-200 bg-white text-gray-700 hover:border-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">›</button>
          </div>
        )}
      </div>
      {mueve ? (
        <div
          className="overflow-hidden -mx-2"
          onMouseEnter={() => setPausa(true)}
          onMouseLeave={() => setPausa(false)}
          onFocusCapture={() => setPausa(true)}
          onBlurCapture={() => setPausa(false)}
          aria-live={pausa ? "polite" : "off"}
        >
          <ul className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${pos * (100 / porVista)}%)` }}>
            {items.map((s, k) => {
              const visible = k >= pos && k < pos + porVista;
              return (
                <li key={s.i} className="shrink-0 px-2 flex" style={{ width: `${100 / porVista}%` }} aria-hidden={visible ? undefined : true} inert={!visible}>
                  <TarjetaDestacada s={s} slug={slug} rel={rel} hoy={hoy} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((s) => <li key={s.i} className="flex"><TarjetaDestacada s={s} slug={slug} rel={rel} hoy={hoy} /></li>)}
        </ul>
      )}
    </section>
  );
}
