"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/store/cart";
import { formatINR } from "@/lib/utils";
import type { Product } from "@/content/types";

type Props = {
  product: Pick<
    Product,
    | "id"
    | "slug"
    | "name"
    | "primaryImage"
    | "hoverImage"
    | "price"
    | "originalPrice"
    | "defaultShape"
    | "descriptor"
  >;
  size?: "default" | "tall";
  showQuickAdd?: boolean;
};

export function ProductCard({
  product,
  size = "default",
  showQuickAdd = true,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const add = useCart((s) => s.add);

  return (
    <article
      className="group block min-w-[75vw] sm:min-w-0 shrink-0 snap-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className={`relative bg-cream overflow-hidden ${
            size === "tall" ? "aspect-[3/4]" : "aspect-square"
          }`}
        >
          <Image
            src={product.primaryImage}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-500 ease-out-expo ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />
          <Image
            src={product.hoverImage}
            alt=""
            aria-hidden
            fill
            className={`object-cover transition-opacity duration-500 ease-out-expo ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />

          {showQuickAdd && (
            <button
              aria-label={`Quick add ${product.name}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                add({
                  id: `${product.id}-${product.defaultShape}`,
                  slug: product.slug,
                  name: product.name,
                  shape: product.defaultShape,
                  image: product.primaryImage,
                  price: product.price,
                });
              }}
              className={`absolute right-3 bottom-3 w-9 h-9 bg-ink/90 text-bone flex items-center justify-center rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out-expo md:opacity-0 md:group-hover:opacity-100 sm:opacity-100 sm:translate-y-0`}
            >
              <Plus size={16} strokeWidth={1.5} />
            </button>
          )}
        </div>

        <div className="pt-5 pb-4 text-center">
          <h3 className="font-serif text-body relative inline-block">
            <span>{product.name}</span>
            <span
              aria-hidden
              className={`absolute left-0 right-0 -bottom-1 h-px bg-gold transition-transform duration-400 ease-out-expo origin-left ${
                hovered ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </h3>
          {product.descriptor && (
            <p className="mt-1 text-[11px] uppercase tracking-wider2 text-mute">
              {product.descriptor.split(".")[0]}
            </p>
          )}
          <p className="mt-3 text-small flex items-center justify-center gap-2">
            {product.originalPrice && (
              <span className="text-mute line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
            <span>{formatINR(product.price)}</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
