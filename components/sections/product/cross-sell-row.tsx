import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/types";
import { formatINR } from "@/lib/utils";

export function CrossSellRow({ items }: { items: Product[] }) {
  return (
    <section className="bg-bone py-20 md:py-24">
      <div className="container-1440">
        <div className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-8 md:gap-10 snap-x snap-mandatory pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar">
          {items.slice(0, 3).map((p, i) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="shrink-0 min-w-[75vw] snap-start sm:min-w-0 sm:shrink group block text-center"
            >
              <div className="relative aspect-[4/5] bg-cream overflow-hidden">
                <Image
                  src={p.primaryImage}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
              <p className="eyebrow mt-6">Step {i + 1}</p>
              <h3 className="font-serif text-h3 mt-2" style={{ fontWeight: 400 }}>
                {i === 0 ? "Refresh your skin" : i === 1 ? "Hydrate your skin" : "Add the finishing touch"}
              </h3>
              <p className="mt-2 text-small text-ink/70">
                {p.name} · {formatINR(p.price)}
              </p>
              <span className="mt-4 inline-block link-hairline link-hairline-reverse">Discover</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
