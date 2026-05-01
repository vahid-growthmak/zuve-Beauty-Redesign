import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/site/product-card";
import { listProducts } from "@/content/products";

export function SeasonalDrop() {
  const products = listProducts().slice(3, 6);
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-1440">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 md:order-2">
            <div className="relative aspect-[4/5] bg-cream">
              <Image
                src="/images/home/home_newdrop_lifestyle.png"
                alt="A model wearing the Summer 2026 collection."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:order-1">
            <div className="text-center md:text-left mb-10 md:mb-12">
              <p className="eyebrow-gold mb-4">NEW THIS SEASON</p>
              <h2 className="font-serif text-h1 md:text-display-sm" style={{ fontWeight: 300 }}>
                Summer 2026 Edit
              </h2>
            </div>
            <div className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-3 sm:gap-8 snap-x snap-mandatory pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
            <div className="mt-12 text-center md:text-left">
              <Link href="/collections/soft-feminine" className="btn-ghost">
                Discover
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
