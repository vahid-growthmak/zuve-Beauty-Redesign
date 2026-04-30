"use client";

import { useState } from "react";
import type { Review } from "@/content/types";
import { StarRating } from "./star-rating";

export function Reviews({
  productName,
  reviews,
}: {
  productName: string;
  reviews: Review[];
}) {
  const [shown, setShown] = useState(5);

  if (reviews.length < 3) {
    return (
      <section id="reviews" className="bg-bone py-24">
        <div className="container-1200">
          <h2 className="text-center font-serif text-h1 mb-12 uppercase tracking-wider2 text-h3">
            {productName} — Reviews
          </h2>
          <div className="max-w-2xl mx-auto bg-cream/50 p-12 md:p-16 text-center">
            <p
              className="font-serif text-h2 text-ink/85 italic"
              style={{ fontWeight: 300 }}
            >
              "This shade is the one I reach for first."
            </p>
            <p className="mt-4 text-small text-mute">— The Zuve Atelier</p>
            <button className="mt-10 btn-ghost">Be the first to review</button>
          </div>
        </div>
      </section>
    );
  }

  const visible = reviews.slice(0, shown);

  return (
    <section id="reviews" className="bg-bone py-24">
      <div className="container-1200">
        <h2 className="text-center text-[11px] uppercase tracking-wider2 mb-12">
          {productName} — Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 pb-8 border-b border-ink/10">
          <p className="text-[11px] uppercase tracking-wider2 text-mute md:col-span-1">
            Reviews are moderated by our service partner.
            <br />
            <a href="#" className="underline">Read terms</a>
          </p>
          <p className="text-small md:col-span-1">{reviews.length} reviews</p>
          <div className="md:col-span-1 flex items-center gap-2">
            <span className="eyebrow">Sort by</span>
            <select className="text-small bg-transparent border-b border-ink/20 py-1">
              <option>Most recent</option>
              <option>Highest rated</option>
            </select>
          </div>
          <button className="btn-ghost md:col-span-1">Write a review</button>
        </div>

        <ul className="space-y-10">
          {visible.map((r) => (
            <li
              key={r.id}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-10 border-b border-ink/10"
            >
              <div className="md:col-span-1">
                <StarRating rating={r.rating} />
                <p className="mt-3 text-small font-medium">{r.initials}</p>
                <p className="text-[11px] uppercase tracking-wider2 text-mute">
                  {r.location}
                </p>
                <p className="text-[11px] uppercase tracking-wider2 text-mute mt-1">
                  {r.date}
                </p>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif text-h3 mb-2" style={{ fontWeight: 400 }}>
                  {r.headline}
                </h3>
                <p className="text-body text-ink/85">{r.body}</p>
                {r.recommends && (
                  <p className="mt-4 text-[11px] uppercase tracking-wider2 text-success">
                    Yes, recommends this product
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {shown < reviews.length && (
          <div className="text-center mt-10">
            <button onClick={() => setShown(shown + 5)} className="btn-ghost">
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
