import Image from "next/image";
import Link from "next/link";

export function HeroStoryBanner() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2880&q=80"
        alt="A hand draped on rose-tinted silk."
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-bone px-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-bone/80 mb-6">THE EDIT</p>
          <h2
            className="font-serif text-h1 md:text-display leading-[1.05] mb-8"
            style={{ fontWeight: 300, textShadow: "0 1px 30px rgba(0,0,0,.25)" }}
          >
            La Collection Zuve celebrates its iconic signatures.
          </h2>
          <Link href="/collections/bridal-edit" className="link-hairline text-bone">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
