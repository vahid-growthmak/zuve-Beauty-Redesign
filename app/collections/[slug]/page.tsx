import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getCollection, listCollections } from "@/content/collections";
import { getProduct, listProducts } from "@/content/products";
import { ProductCard } from "@/components/site/product-card";
import { formatINR } from "@/lib/utils";

export async function generateStaticParams() {
  return listCollections().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const collection = getCollection(params.slug);
  if (!collection) return { title: "Collection — Zuve Beauty" };
  return {
    title: `${collection.name} — Zuve Beauty`,
    description: collection.italicDescriptor,
  };
}

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = getCollection(params.slug);
  if (!collection) notFound();

  const signature = getProduct(collection.signatureProductId);
  const core = collection.coreProductIds
    .map((id) => listProducts().find((p) => p.id === id))
    .filter(Boolean);
  const companions = collection.companionProductIds
    .map((id) => listProducts().find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      {/* 5.2.1 Collection Hero */}
      <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src={collection.heroImage}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-bone px-6">
          <div>
            <p className="eyebrow text-bone/80 mb-5">{collection.eyebrow}</p>
            <h1
              className="font-serif text-h1 md:text-display leading-[1.05]"
              style={{ fontWeight: 300, textShadow: "0 1px 30px rgba(0,0,0,.25)" }}
            >
              {collection.name}
            </h1>
            <p className="mt-6 italic font-serif text-body md:text-h3 max-w-md mx-auto text-bone/90">
              {collection.italicDescriptor}
            </p>
          </div>
        </div>
      </section>

      {/* 5.2.2 Editorial Intro */}
      <section className="bg-bone py-24 md:py-32">
        <div className="container-1200">
          <div className="max-w-[640px] mx-auto text-center">
            {collection.intro.map((p, i) => (
              <p
                key={i}
                className="font-serif text-body md:text-h3 text-ink/85 leading-relaxed mb-6"
                style={{ fontWeight: 400 }}
              >
                {p}
              </p>
            ))}
            <p
              className="mt-10 italic font-serif text-h3 md:text-h2 text-ink/80"
              style={{ fontWeight: 300 }}
            >
              {`"${collection.pullQuote}"`}
            </p>
          </div>
        </div>
      </section>

      {/* 5.2.3 Hero Product Spotlight */}
      {signature && (
        <section className="bg-cream/40 py-24 md:py-32">
          <div className="container-1200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <Link
                href={`/products/${signature.slug}`}
                className="relative aspect-[4/5] bg-bone block group overflow-hidden"
              >
                <Image
                  src={signature.primaryImage}
                  alt={signature.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
                />
              </Link>
              <div>
                <p className="eyebrow mb-4">EDITOR'S PICK</p>
                <h2
                  className="font-serif text-h1 md:text-display-sm mb-5"
                  style={{ fontWeight: 300 }}
                >
                  {signature.name}
                </h2>
                <p className="text-body text-ink/80 mb-6 max-w-md">
                  {signature.descriptor}
                </p>
                <p className="text-h3 mb-8">{formatINR(signature.price)}</p>
                <Link href={`/products/${signature.slug}`} className="btn-ghost">
                  Discover
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5.2.4 Product Grid #1 — Core Edit (asymmetric) */}
      <section className="bg-bone py-24 md:py-32">
        <div className="container-1440">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">THE EDIT</p>
            <h2 className="font-serif text-h1" style={{ fontWeight: 300 }}>
              The collection
            </h2>
          </div>
          <div className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-10 snap-x snap-mandatory pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar">
            {core.map((p, i) =>
              p ? (
                <div
                  key={p.id}
                  className={i % 3 === 2 ? "md:row-span-1" : ""}
                >
                  <ProductCard product={p} size={i % 3 === 2 ? "tall" : "default"} />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>

      {/* 5.2.5 Editorial Break */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={collection.midBreakImage}
          alt={collection.midBreakHeadline}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-bone px-6">
          <div>
            <h3
              className="font-serif text-h1 md:text-display leading-tight"
              style={{ fontWeight: 300, textShadow: "0 1px 30px rgba(0,0,0,.25)" }}
            >
              {collection.midBreakHeadline}
            </h3>
            <p className="mt-5 italic font-serif text-body md:text-h3 text-bone/90">
              {collection.midBreakCaption}
            </p>
          </div>
        </div>
      </section>

      {/* 5.2.6 Companion Pieces Grid */}
      <section className="bg-bone py-24 md:py-32">
        <div className="container-1440">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">COMPANION PIECES</p>
            <h2 className="font-serif text-h1" style={{ fontWeight: 300 }}>
              The supporting cast
            </h2>
          </div>
          <div className="flex overflow-x-auto gap-4 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-6 md:gap-8 snap-x snap-mandatory pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 no-scrollbar">
            {companions.map((p) =>
              p ? <ProductCard key={p.id} product={p} /> : null,
            )}
          </div>
        </div>
      </section>

      {/* 5.2.7 Gifting Block */}
      <section className="bg-cream/50 py-24 md:py-32">
        <div className="container-1200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] bg-bone">
              <Image
                src={collection.giftingImage}
                alt={collection.giftingHeadline}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow-gold mb-4">THE ART OF GIFTING</p>
              <h2
                className="font-serif text-h1 md:text-display-sm mb-5"
                style={{ fontWeight: 300 }}
              >
                {collection.giftingHeadline}
              </h2>
              <p className="text-body text-ink/80 mb-8 max-w-md">
                {collection.giftingBody}
              </p>
              <Link href="#" className="link-hairline">
                Discover gifting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2.8 Outro Sign-off */}
      <section className="bg-bone py-24 md:py-32">
        <div className="container-1200 text-center">
          <p
            className="italic font-serif text-h3 md:text-h2 text-ink/80 max-w-[560px] mx-auto"
            style={{ fontWeight: 300 }}
          >
            {collection.outroSignoff}
          </p>
          <div className="mt-10">
            <Link
              href={`/collections/${collection.nextCollectionSlug}`}
              className="link-hairline"
            >
              Continue to: {collection.nextCollectionName}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
