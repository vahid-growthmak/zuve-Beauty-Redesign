"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { heroSlides } from "@/content/home";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      7000,
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured edits"
    >
      <div className="relative h-[calc(100vh-104px)] md:h-[calc(100vh-120px)] w-full overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out-expo ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-transparent to-ink/10" />
            <div
              className={`absolute inset-0 flex items-center px-8 md:px-20 ${
                slide.align === "right"
                  ? "justify-end text-right"
                  : "justify-start text-left"
              }`}
            >
              <div className="max-w-xl text-bone">
                <p className="eyebrow text-bone/80 mb-4 md:mb-6">{slide.eyebrow}</p>
                <h1
                  className="font-serif text-display-sm md:text-display leading-[1.05] mb-8 text-shadow"
                  style={{ fontWeight: 300, textShadow: "0 1px 30px rgba(0,0,0,.25)" }}
                >
                  {slide.headline}
                </h1>
                <Link href={slide.href} className="link-hairline text-bone">
                  <span>{slide.cta}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom controls */}
        <div className="absolute bottom-6 left-0 right-0 flex items-end justify-between px-6 md:px-10">
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play" : "Pause"}
            className="text-bone/80 hover:text-bone p-2"
          >
            {paused ? <Play size={16} strokeWidth={1.5} /> : <Pause size={16} strokeWidth={1.5} />}
          </button>
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: i === active ? "#C9A87C" : "rgba(250,247,242,0.4)",
                  width: i === active ? 24 : 8,
                }}
              />
            ))}
          </div>
          <div className="text-bone/80 text-[11px] uppercase tracking-wider2">
            {String(active + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Chapter thumbnails */}
      <div className="border-y border-gold/30 bg-bone">
        <div className="container-1440 flex overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-3">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setActive(i)}
              className={`flex shrink-0 min-w-[280px] snap-start md:min-w-0 items-center gap-3 md:gap-4 py-3 md:py-4 px-2 md:px-4 border-r last:border-r-0 border-gold/20 hover:bg-cream/50 transition-colors text-left ${
                i === active ? "bg-cream/40" : ""
              }`}
            >
              <div className="relative w-12 h-9 md:w-16 md:h-12 shrink-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <span className="text-[11px] uppercase tracking-wider2">{slide.chip}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
