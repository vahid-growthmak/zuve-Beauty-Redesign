import Image from "next/image";
import Link from "next/link";

export function FirstPressOn() {
  return (
    <section className="bg-bone">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:h-[680px]">
          <Image
            src="/images/home/home_featured_hands.png"
            alt="A close-up of hands wearing the first Zuve press-on set."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative md:h-[680px] flex md:items-end px-6 md:px-16 lg:px-24 py-16 md:py-0 md:pb-24">
          <div className="max-w-md md:ml-auto">
            <p className="eyebrow mb-6">THE FIRST PRESS-ON</p>
            <h2 className="font-serif text-h1 md:text-display-sm leading-[1.05] mb-6" style={{ fontWeight: 300 }}>
              The art of effortless nails.
            </h2>
            <p className="text-body text-ink/80 mb-8 max-w-sm">
              The Zuve press-on is hand-finished, sized to your fingers, and reusable up
              to fifteen wears. A salon-quality manicure, on your own time.
            </p>
            <Link href="/collections/soft-feminine" className="link-hairline">
              Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
