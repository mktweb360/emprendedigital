// Utilidades de ofertas del directorio, sin dependencias de servidor: las usan la página (servidor) y el módulo de servicios (cliente).

/** Una oferta está vigente si tiene texto y su fecha de fin (AAAA-MM-DD, opcional) no ha pasado. */
export function ofertaVigente(s: { offerText?: string | null; offerUntil?: string | null }, hoy: string): boolean {
  return !!s.offerText && (!s.offerUntil || s.offerUntil >= hoy);
}

/** 30/11 a partir de 2026-11-30. */
export const fechaCorta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;
