import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/site/product-card";
import { listProducts } from "@/content/products";

export function ZuveRitual() {
  const trio = listProducts().slice(0, 3);
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-1440">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] bg-cream">
              <Image
                src="/images/home/home_ritual_lifestyle.png"
                alt="A woman holding a Zuve press-on case in window light."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="text-center md:text-left mb-10 md:mb-12">
              <p className="eyebrow mb-4">THE RITUAL</p>
              <h2 className="font-serif text-h1 md:text-display-sm" style={{ fontWeight: 300 }}>
                The Zuve Beauty ritual
              </h2>
            </div>
            <div className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-3 sm:gap-8 snap-x snap-mandatory pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar">
              {trio.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
            <div className="mt-12 text-center md:text-left">
              <Link href="/collections/soft-feminine" className="btn-ghost">
                Discover the ritual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
