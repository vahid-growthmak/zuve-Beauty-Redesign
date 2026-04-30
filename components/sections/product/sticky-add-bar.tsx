"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/store/cart";
import { formatINR } from "@/lib/utils";
import type { Product } from "@/content/types";

export function StickyAddBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);
  const add = useCart((s) => s.add);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-30 bg-bone border-t border-ink/10 transition-transform duration-200 ease-out-expo ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: 64 }}
    >
      <div className="flex items-center h-full px-4 gap-3">
        <div className="relative w-10 h-10 bg-cream shrink-0 overflow-hidden">
          <Image
            src={product.primaryImage}
            alt={product.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-serif text-small leading-tight truncate">{product.name}</p>
          <p className="text-[11px] uppercase tracking-wider2">{formatINR(product.price)}</p>
        </div>
        <button
          onClick={() =>
            add({
              id: `${product.id}-${product.defaultShape}`,
              slug: product.slug,
              name: product.name,
              shape: product.defaultShape,
              image: product.primaryImage,
              price: product.price,
            })
          }
          className="btn-primary py-3 px-5"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
