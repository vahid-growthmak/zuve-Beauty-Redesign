import Image from "next/image";
import Link from "next/link";

const tiles = [
  {
    title: "The art of gifting",
    image:
      "/images/home/home_triptych_gifting.png",
    href: "#",
  },
  {
    title: "The personal touch",
    image:
      "/images/home/home_triptych_personal.png",
    href: "#",
  },
  {
    title: "Considered, by hand",
    image:
      "/images/home/home_ritual_lifestyle.png",
    href: "#",
  },
];

export function FinishingTouch() {
  return (
    <section className="bg-bone pt-16 md:pt-24 pb-24 md:pb-32">
      <div className="container-1440">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-1 md:pr-6">
            <p className="eyebrow mb-4">THE FINISHING TOUCH</p>
            <h2 className="font-serif text-h1" style={{ fontWeight: 300 }}>
              Perfection is in the details.
            </h2>
            <p className="mt-6 text-body text-ink/80">
              Discover Zuve's exclusive services to elevate your gift and make
              every moment unforgettable.
            </p>
            <div className="mt-8">
              <Link href="#" className="link-hairline">
                Discover
              </Link>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 md:col-span-3 md:grid md:grid-cols-3 md:gap-10 no-scrollbar">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="shrink-0 min-w-[75vw] snap-start md:min-w-0 md:col-span-1 group relative block"
            >
              <div className="relative aspect-[3/4] bg-cream overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
                  <p className="font-serif text-h3" style={{ fontWeight: 400 }}>
                    {t.title}
                  </p>
                  <span className="inline-block mt-3 text-[11px] uppercase tracking-wider2 link-hairline link-hairline-reverse text-bone">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
