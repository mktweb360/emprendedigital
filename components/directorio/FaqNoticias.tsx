import { TrackedLink } from "@/components/directorio/Track";
import type { Ficha } from "@/lib/directorio";

type Faq = NonNullable<Ficha["faqs"]>[number];
type Noticia = NonNullable<Ficha["news"]>[number];

const fechaLarga = (iso: string) => {
  const d = new Date(`${iso}T12:00:00Z`);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
};

/** Preguntas frecuentes (plan Plus): desplegables nativos, sin JavaScript. El mismo contenido va en el JSON-LD FAQPage. */
export function FaqSeccion({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <section id="faq" aria-labelledby="faq-t" className="mb-10 max-w-3xl scroll-mt-24">
      <h2 id="faq-t" className="text-xl font-extrabold text-gray-900 mb-4">Preguntas frecuentes</h2>
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded">
              <span>{f.q}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" className="shrink-0 text-gray-500 transition-transform group-open:rotate-180" fill="currentColor">
                <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed whitespace-pre-line">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Noticias de la empresa (plan Plus): las más recientes primero. Con enlace, se abre aparte y cuenta como clic a su web. */
export function NoticiasSeccion({ news, slug, rel }: { news: Noticia[]; slug: string; rel: string }) {
  if (!news.length) return null;
  const orden = [...news].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  return (
    <section id="noticias" aria-labelledby="noticias-t" className="mb-10 max-w-3xl scroll-mt-24">
      <h2 id="noticias-t" className="text-xl font-extrabold text-gray-900 mb-4">Noticias</h2>
      <ul className="space-y-3">
        {orden.map((n, i) => (
          <li key={i} className="rounded-xl border border-gray-200 bg-white p-4">
            {n.date && fechaLarga(n.date) && <time dateTime={n.date} className="text-xs font-semibold text-indigo-700">{fechaLarga(n.date)}</time>}
            <h3 className="mt-0.5 text-base font-bold text-gray-900">
              {n.url && /^https?:\/\//i.test(n.url) ? (
                <TrackedLink kind="click_web" slug={slug} href={n.url} target="_blank" rel={rel} className="hover:text-indigo-700 hover:underline">
                  {n.title}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </TrackedLink>
              ) : (
                n.title
              )}
            </h3>
            {n.summary && <p className="mt-1 text-sm text-gray-700">{n.summary}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
