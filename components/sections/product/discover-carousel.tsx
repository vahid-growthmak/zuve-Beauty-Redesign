"use client";

import { ProductCard } from "@/components/site/product-card";
import type { Product } from "@/content/types";

export function DiscoverCarousel({ items }: { items: Product[] }) {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-1440">
        <h2 className="text-center font-serif text-h1 mb-12" style={{ fontWeight: 300 }}>
          Discover
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
