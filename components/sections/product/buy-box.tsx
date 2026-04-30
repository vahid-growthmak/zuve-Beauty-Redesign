"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Ruler, Leaf, Flag, Repeat, ChevronDown } from "lucide-react";
import type { Product, Shape } from "@/content/types";
import { useCart } from "@/lib/store/cart";
import { formatINR } from "@/lib/utils";
import { StarRating } from "./star-rating";
import { SizingModal } from "./sizing-modal";

const ICONS = {
  leaf: Leaf,
  flag: Flag,
  refresh: Repeat,
};

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-ink/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-small uppercase tracking-wider2">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out-expo ${
          open ? "max-h-[800px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-small text-ink/80 space-y-2">{children}</div>
      </div>
    </div>
  );
}

export function BuyBox({ product }: { product: Product }) {
  const [shape, setShape] = useState<Shape>(product.defaultShape);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [sizingOpen, setSizingOpen] = useState(false);
  const add = useCart((s) => s.add);

  const handleAdd = () => {
    setAdding(true);
    add({
      id: `${product.id}-${shape}`,
      slug: product.slug,
      name: product.name,
      shape,
      image: product.primaryImage,
      price: product.price,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setAdding(false);
    }, 1500);
  };

  return (
    <div>
      <p className="eyebrow mb-3">{product.category}</p>
      <h1
        className="font-serif text-h1 md:text-[2.5rem] leading-tight"
        style={{ fontWeight: 400 }}
      >
        {product.name}
      </h1>
      <p className="italic font-serif text-body text-ink/75 mt-2">
        {product.descriptor}
      </p>

      <div className="mt-5 flex items-center gap-3">
        <StarRating rating={product.rating} />
        <a
          href="#reviews"
          className="text-small text-ink/80 hover:text-ink transition-colors"
        >
          {product.rating.toFixed(1)} — {product.reviewCount} reviews
        </a>
      </div>

      <div className="mt-6 flex items-baseline gap-3">
        {product.originalPrice && (
          <span className="text-mute line-through text-small">
            {formatINR(product.originalPrice)}
          </span>
        )}
        <span className="text-h2" style={{ fontWeight: 400 }}>
          {formatINR(product.price)}
        </span>
      </div>
      <p className="eyebrow mt-1">INCLUSIVE OF ALL TAXES</p>

      {/* Trust strip */}
      <ul className="mt-6 grid grid-cols-3 gap-3 border-y border-ink/10 py-4">
        {product.trustBadges.map((b) => {
          const Icon = ICONS[b.icon];
          return (
            <li key={b.label} className="flex flex-col items-center text-center gap-2">
              <Icon size={18} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-wider2 text-ink/80">
                {b.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Shape selector */}
      <div className="mt-6">
        <p className="eyebrow mb-3">Shape</p>
        <div className="flex gap-2 flex-wrap">
          {product.shapes.map((s) => (
            <button
              key={s}
              onClick={() => setShape(s)}
              className={`px-4 py-2 text-small uppercase tracking-wider2 border transition-colors ${
                shape === s
                  ? "bg-ink text-bone border-ink"
                  : "bg-transparent text-ink border-ink/30 hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Sizing CTA */}
      <button
        onClick={() => setSizingOpen(true)}
        className="mt-5 inline-flex items-center gap-2 link-hairline link-hairline-reverse"
      >
        <Ruler size={14} strokeWidth={1.5} />
        Find my size
      </button>

      {/* Quantity */}
      <div className="mt-6 flex items-center gap-4">
        <p className="eyebrow">Qty</p>
        <div className="flex items-center border border-ink/20">
          <button
            aria-label="Decrease"
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-10 h-10 flex items-center justify-center hover:bg-ink/5"
          >
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center text-small">{qty}</span>
          <button
            aria-label="Increase"
            onClick={() => setQty(qty + 1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-ink/5"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Primary CTA */}
      <button
        onClick={handleAdd}
        disabled={adding}
        className="mt-6 btn-primary w-full disabled:opacity-80"
      >
        {added ? "Added ✓" : `Add to Bag — ${formatINR(product.price * qty)}`}
      </button>

      <Link
        href="#"
        className="mt-3 block text-center text-[11px] uppercase tracking-wider2 text-ink/70 hover:text-ink"
      >
        Express Payment · UPI · Razorpay
      </Link>

      <div className="mt-5 pt-4 border-t border-ink/10">
        <p className="text-small text-ink/80">
          Free 2-day shipping on orders above ₹1,500.
        </p>
      </div>

      {/* Mother's Day callout */}
      <div className="mt-5 bg-cream p-5">
        <p className="eyebrow-gold mb-1">MOTHER'S DAY GIFTING</p>
        <p className="text-small text-ink/85">
          Enjoy complimentary 2-day shipping on orders of ₹1,500+ for gifts in
          time for Mother's Day.
          <Link href="#" className="block mt-2 link-hairline link-hairline-reverse">
            Learn more
          </Link>
        </p>
      </div>

      {/* Accordions */}
      <div className="mt-8">
        <Accordion title="Ingredients & Materials">
          <ul className="list-disc list-inside space-y-1">
            {product.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="How to Apply">
          <ol className="list-decimal list-inside space-y-1">
            {product.howToApply.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p>{product.shippingNote}</p>
          <p>30-day returns on unopened sets. COD ₹100 handling fee.</p>
        </Accordion>
      </div>

      <SizingModal open={sizingOpen} onClose={() => setSizingOpen(false)} />
    </div>
  );
}
