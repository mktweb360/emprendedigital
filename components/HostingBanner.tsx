// Banners de afiliado de hosting (SiteGround + Webempresa). Imágenes servidas
// desde dominios externos: se usa <img> en lugar de next/image para no tener
// que declarar los dominios remotos en next.config y porque los creativos ya
// vienen al tamaño exacto.
export default function HostingBanner() {
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <p className="text-sm text-gray-500 text-center mb-4 font-medium uppercase tracking-wide">
        Hosting recomendado para emprendedores
      </p>
      <div className="flex flex-wrap justify-center gap-6 items-center">
        {/* SiteGround Hosting Web */}
        <a
          href="https://siteground.es/hosting-web.htm?afimagecode=aee7f6afc3a9caa1e8db41d4701e0520"
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://siteground.com/static/affiliate/es_ES/NOPRICE/general_ES_general-hosting-square-light.jpg"
            alt="Hosting Web SiteGround — 80% dto."
            width={250}
            height={250}
            loading="lazy"
            style={{ border: 0 }}
            className="max-w-full h-auto"
          />
        </a>
        {/* SiteGround WordPress */}
        <a
          href="https://siteground.es/hosting-wordpress.htm?afimagecode=074e4b1347fb343f55e2440eee4a977f"
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://siteground.com/static/affiliate/es_ES/NOPRICE/general_ES_wordpress-square-blue.jpg"
            alt="Hosting WordPress SiteGround — 80% dto."
            width={250}
            height={250}
            loading="lazy"
            style={{ border: 0 }}
            className="max-w-full h-auto"
          />
        </a>
        {/* Webempresa Soluciones IA */}
        <a
          href="https://clientes.webempresa.com/europa/gestion/aff.php?aff=7573&landing=soluciones-ia"
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://afiliados.webempresa.eu/banner-afiliados-soluciones-ia-250x250px.gif"
            alt="Soluciones IA — Webempresa"
            width={250}
            height={250}
            loading="lazy"
            style={{ border: 0 }}
            className="max-w-full h-auto"
          />
        </a>
      </div>
      <p className="text-xs text-gray-400 text-center mt-3">
        Enlace de afiliado — si contratas a través de este enlace recibimos una comisión sin coste adicional para ti.
      </p>
    </div>
  );
}
