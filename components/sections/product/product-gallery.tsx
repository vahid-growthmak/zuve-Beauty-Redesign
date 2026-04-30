"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div className="md:flex md:gap-4">
      {/* Thumbnails — hidden on mobile, swipe gallery instead */}
      <div className="hidden md:flex flex-col gap-2 w-20 shrink-0">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative w-20 h-20 bg-cream border ${
              i === active ? "border-ink" : "border-transparent"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative flex-1">
        <div className="relative aspect-square md:aspect-[4/5] bg-cream">
          <Image
            src={main}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Mobile: dot pagination */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: i === active ? "#1A1A1A" : "rgba(26,26,26,.25)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
