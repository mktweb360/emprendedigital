# Protocolo de gestión de URLs de producto

## Regla obligatoria

Cualquier producto eliminado de `data/products.ts` debe llevar su redirect en `next.config.ts` **en el mismo commit**.

## Destino del redirect

| Situación | Destino |
|---|---|
| Existe producto sustituto | `/tienda/[categoria]/[slug-sustituto]` |
| No existe sustituto | `/tienda/[categoria]` (la categoría padre) |

## Sintaxis en `next.config.ts`

```ts
{
  source: "/tienda/[categoria]/[slug-eliminado]",
  destination: "/tienda/[categoria]",
  permanent: true,  // HTTP 308, equivalente SEO a 301
},
```

## Commit estándar

```
fix(seo): redirect 308 [slug-eliminado] → [destino]
```

## Revisión periódica (semanal hasta Creators API)

1. GSC → Indexación → Páginas → "No se ha encontrado (404)"
2. Por cada URL de `/tienda/`: añadir redirect en `next.config.ts` y commit
3. Tras deploy, pulsar "Validar corrección" en GSC

## Redirects activos

*(Ninguno aún — registrar aquí cada redirect añadido)*

| Source | Destination | Tipo | Commit |
|---|---|---|---|

## Pendientes SEO

- [ ] Verificar URLs afiliados hosting (ProfesionalHosting, SiteGround, Webempresa)
- [ ] Implementar og:image para páginas de producto individual

*Última actualización: agosto 2026 — auditoría SEO completa*
