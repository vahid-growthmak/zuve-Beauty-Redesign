import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getProduct, listProducts } from "@/content/products";
import { ProductGallery } from "@/components/sections/product/product-gallery";
import { BuyBox } from "@/components/sections/product/buy-box";
import { StickyAddBar } from "@/components/sections/product/sticky-add-bar";
import { Reviews } from "@/components/sections/product/reviews";
import { CrossSellRow } from "@/components/sections/product/cross-sell-row";
import { DiscoverCarousel } from "@/components/sections/product/discover-carousel";

export async function generateStaticParams() {
  return listProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product — Zuve Beauty" };
  return {
    title: `${product.name} — Zuve Beauty`,
    description: product.descriptor,
    openGraph: {
      title: product.name,
      description: product.descriptor,
      images: [product.primaryImage],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const others = listProducts().filter((p) => p.id !== product.id);
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.descriptor,
    image: product.primaryImage,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      {/* 6.2 Above the fold: gallery + buy box */}
      <section className="bg-bone py-8 md:py-14">
        <div className="container-1440">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-7">
              <ProductGallery
                images={product.galleryImages.length ? product.galleryImages : [product.primaryImage]}
                alt={product.name}
              />
            </div>
            <div className="md:col-span-5">
              <div className="md:sticky md:top-24">
                <BuyBox product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4.1 Description Block */}
      <section className="bg-bone py-20 md:py-24">
        <div className="container-1200">
          <div className="max-w-[640px] mx-auto text-center">
            {product.description.map((p, i) => (
              <p
                key={i}
                className="font-serif text-body md:text-h3 text-ink/85 leading-relaxed mb-5"
                style={{ fontWeight: 400 }}
              >
                {p}
              </p>
            ))}
            {product.pullQuote && (
              <p
                className="mt-8 italic font-serif text-h3 md:text-h2 text-ink/85"
                style={{ fontWeight: 300 }}
              >
                {`"${product.pullQuote}"`}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 6.4.2 How to Apply */}
      <section className="bg-bone py-20 md:py-24">
        <div className="container-1440">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] bg-cream">
              <Image
                src={product.galleryImages[2] || product.primaryImage}
                alt="Application of the press-on tile"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">HOW TO APPLY</p>
              <h2
                className="font-serif text-h1 md:text-display-sm mb-8"
                style={{ fontWeight: 300 }}
              >
                As a finishing touch.
              </h2>
              <p className="text-body text-ink/80 mb-8 max-w-md">
                The exquisitely creamy texture of the soft-gel tile sets in
                seconds and remains bonded all day. The art is hydrated and
                radiant.
              </p>
              <ol className="space-y-5 max-w-md">
                {product.howToApply.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="text-[11px] uppercase tracking-wider2 text-gold w-6 shrink-0 pt-1">
                      0{i + 1}
                    </span>
                    <span className="text-body text-ink/85">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4.3 Ritual Block */}
      <section className="bg-cream/50 py-24 md:py-32">
        <div className="container-1440">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
            <div className="md:order-2 relative aspect-[4/5]">
              <Image
                src={product.galleryImages[1] || product.hoverImage}
                alt="The rose beauty ritual"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-1 md:pr-8">
              <p className="eyebrow mb-4">THE RITUAL</p>
              <h2
                className="font-serif text-h1 md:text-display-sm mb-6"
                style={{ fontWeight: 300 }}
              >
                The rose beauty ritual.
              </h2>
              <p className="text-body text-ink/80 max-w-md">
                Enhance the Zuve manicure with a personalised application —
                designed to leave the hand more lasting, generous, and considered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4.4 Routine cross-sell */}
      <CrossSellRow items={others} />

      {/* 6.4.5 Lifestyle Video Block (placeholder image) */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2880&q=80"
          alt="Lifestyle moment"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-bone px-6">
          <h3
            className="font-serif text-h1 md:text-display-sm leading-tight"
            style={{ fontWeight: 300, textShadow: "0 1px 30px rgba(0,0,0,.25)" }}
          >
            And you, what would you do for love?
          </h3>
        </div>
      </section>

      {/* 6.4.6 Discover */}
      <DiscoverCarousel items={others} />

      {/* 6.5 Reviews */}
      <Reviews productName={product.name.toUpperCase()} reviews={product.reviews} />

      {/* 6.5.3 UGC strip */}
      <section className="bg-bone pb-24">
        <div className="container-1440">
          <p className="eyebrow text-center mb-8">AS WORN BY YOU</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {[
              "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square bg-cream">
                <Image
                  src={src}
                  alt={`UGC tile ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 12vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyAddBar product={product} />
    </>
  );
}
