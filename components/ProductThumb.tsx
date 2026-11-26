import Image from "next/image";
import type { Product } from "@/data/products";
import { syncedImage } from "@/lib/amazon-sync";

/**
 * Miniatura de producto para las tarjetas de la tienda.
 * Caja de proporción fija (4:3) para que la maquetación no salte (CLS = 0).
 * Si el producto no tiene foto propia, usa la imagen genérica de su categoría
 * (public/images/products/{categorySlug}.jpg), que es ilustrativa, no del producto.
 */
export default function ProductThumb({ product, priority = false }: { product: Product; priority?: boolean }) {
  // Sin foto propia, se usa la imagen oficial de Amazon sincronizada (sin pasar por el optimizador de Vercel).
  const synced = product.image ? undefined : syncedImage(product.asin);
  const own = Boolean(product.image ?? synced);
  return (
    <div className="relative aspect-[4/3] w-full bg-gray-100">
      <Image
        src={product.image ?? synced ?? `/images/products/${product.categorySlug}.jpg`}
        unoptimized={Boolean(synced)}
        alt={own ? `${product.name}: imagen del producto` : ""}
        fill
        sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 100vw"
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={own ? "object-contain p-2 bg-white" : "object-cover"}
      />
    </div>
  );
}
