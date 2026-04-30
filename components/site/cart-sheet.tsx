"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { FREE_SHIPPING_THRESHOLD, useCart } from "@/lib/store/cart";
import { formatINR } from "@/lib/utils";

export function CartSheet() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const items = useCart((s) => s.items);
  const setQuantity = useCart((s) => s.setQuantity);
  const remove = useCart((s) => s.remove);

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      document.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [isOpen, close]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`fixed right-0 top-0 z-50 h-full w-full md:w-[420px] bg-bone shadow-2xl transition-transform duration-500 ease-out-expo ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
            <span className="font-serif text-h3">Your Bag</span>
            <button
              aria-label="Close cart"
              onClick={close}
              className="p-1 hover:opacity-70"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Free-shipping progress */}
          <div className="px-6 py-4 bg-cream/50 border-b border-ink/10">
            {remaining > 0 ? (
              <p className="text-small text-ink mb-3">
                You're <strong>{formatINR(remaining)}</strong> away from free
                shipping.
              </p>
            ) : (
              <p className="text-small text-success mb-3">
                You qualify for free shipping.
              </p>
            )}
            <div className="h-px bg-ink/10 relative">
              <div
                className="absolute inset-y-0 left-0 bg-gold"
                style={{ height: 1, width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <p className="font-serif text-h2 mb-3">Your bag is empty.</p>
                <p className="text-small text-mute mb-8">
                  Begin with a curated edit.
                </p>
                <Link
                  href="/collections/soft-feminine"
                  onClick={close}
                  className="btn-ghost"
                >
                  Discover
                </Link>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-24 bg-cream shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-3">
                        <div>
                          <p className="font-serif text-body leading-tight">
                            {item.name}
                          </p>
                          {item.shape && (
                            <p className="text-[11px] uppercase tracking-wider2 text-mute mt-1">
                              {item.shape}
                            </p>
                          )}
                        </div>
                        <p className="text-small">{formatINR(item.price * item.quantity)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-ink/20">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => setQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-ink/5"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-small">
                            {item.quantity}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => setQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-ink/5"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item.id)}
                          className="text-[11px] uppercase tracking-wider2 text-mute hover:text-ink underline-offset-2 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-ink/10 px-6 py-6 space-y-4">
              <div className="flex justify-between text-small">
                <span className="text-mute">Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider2 text-mute">
                Inclusive of all taxes. Shipping calculated at checkout.
              </p>
              <button className="btn-primary w-full">Checkout — {formatINR(subtotal)}</button>
              <button
                onClick={close}
                className="block w-full text-center link-hairline mt-2"
              >
                Continue shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
