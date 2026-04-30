import Image from "next/image";
import Link from "next/link";

export function BrandStoryBanner() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b8?auto=format&fit=crop&w=2880&q=80"
        alt="Zuve packaging photographed as still life."
        fill
        className="object-cover opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 px-6 text-center text-bone">
        <div className="max-w-2xl">
          <h2
            className="font-serif text-h1 md:text-display leading-[1.05] mb-6"
            style={{ fontWeight: 300, textShadow: "0 1px 30px rgba(0,0,0,.4)" }}
          >
            Dressed in Zuve.
          </h2>
          <Link href="#" className="link-hairline text-bone">
            Read the story
          </Link>
        </div>
      </div>
    </section>
  );
}
