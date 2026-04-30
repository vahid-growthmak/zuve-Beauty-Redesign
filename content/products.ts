import type { Product } from "./types";

const baseTrust: Product["trustBadges"] = [
  { icon: "leaf", label: "Cruelty-Free" },
  { icon: "flag", label: "Made in India" },
  { icon: "refresh", label: "Reusable up to 15 wears" },
];

const baseReviews: Product["reviews"] = [
  {
    id: "r1",
    initials: "Riya",
    location: "Mumbai",
    date: "March 2026",
    rating: 5,
    headline: "Love it",
    body: "I'm very pleased with this set, going on with my body oil. Smells wonderful and leaves my skin silky and smooth.",
    recommends: true,
  },
  {
    id: "r2",
    initials: "Naina",
    location: "New Delhi",
    date: "February 2026",
    rating: 5,
    headline: "Wonderful",
    body: "The lotion is very creamy and it holds its fragrance all day. I get compliments every time I wear it.",
    recommends: true,
  },
  {
    id: "r3",
    initials: "Vihu",
    location: "BNY Mellon Co Lt",
    date: "February 2026",
    rating: 5,
    headline: "Smells amazing",
    body: "Best body milk I have ever tried. Smells amazing everyone adores it's divine smell.",
    recommends: true,
  },
  {
    id: "r4",
    initials: "Ria",
    location: "Sharaport",
    date: "January 2026",
    rating: 5,
    headline: "The perfect scent",
    body: "I first purchased this item around Christmas time as a gift set and I've been addicted to it ever since. It was a must I repurchased.",
    recommends: true,
  },
  {
    id: "r5",
    initials: "Mihika Elizabeth",
    location: "—",
    date: "January 2026",
    rating: 5,
    headline: "Beautiful skin, happy husband",
    body: "I recently purchased this especially since I spend much time outside running and gardening. I will say that my skin is very happy as is my husband.",
    recommends: true,
  },
];

export const products: Product[] = [
  {
    id: "rose-bloom",
    slug: "rose-bloom",
    name: "Rose Bloom — Almond",
    category: "SOFT GEL NAILS",
    collection: "soft-feminine",
    descriptor: "Reusable soft-gel press-on nails with a rose-pink finish.",
    description: [
      "The Rose Bloom set takes a rose-pink finish and softens it into something quiet and considered. The shade reads warm in evening light and almost porcelain in daylight — built for the woman who notices the difference.",
      "Each set is hand-finished with a high-shine top coat, contoured to sit flush against the natural nail bed, and packaged in our signature reusable case.",
      "Composed of premium soft-gel; non-yellowing; reusable up to fifteen wears with proper care. Sized using our fifteen-tile fitting system.",
    ],
    pullQuote: "The shade I reach for first.",
    price: 1890,
    originalPrice: 2200,
    shapes: ["Almond", "Squoval", "Coffin"],
    defaultShape: "Almond",
    rating: 4.8,
    reviewCount: 124,
    primaryImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: [
      "Premium reusable soft-gel polymer",
      "Non-toxic, non-yellowing top finish",
      "Cruelty-free; vegan adhesive tabs included",
    ],
    howToApply: [
      "Push back cuticles and lightly buff the natural nail.",
      "Cleanse each nail with the prep wipe; allow to dry for thirty seconds.",
      "Select the closest tile size for each finger. Press from cuticle to tip.",
      "Hold for ten seconds. Reapply at the lift if needed.",
    ],
    shippingNote:
      "Free 2-day shipping on orders above ₹1,500. COD available with a ₹100 handling fee.",
    trustBadges: baseTrust,
    reviews: baseReviews,
  },
  {
    id: "porcelain",
    slug: "porcelain",
    name: "Porcelain — Squoval",
    category: "SOFT GEL NAILS",
    collection: "soft-feminine",
    descriptor: "A near-translucent ivory in a softened squoval shape.",
    description: [
      "Porcelain reads almost barely-there — a near-translucent ivory tile that sits flush against the natural nail. Squoval shape softens the line and reads modern at any length.",
      "Reusable up to fifteen wears with proper care. Comes with our fifteen-tile fit set.",
    ],
    price: 1890,
    shapes: ["Squoval", "Almond"],
    defaultShape: "Squoval",
    rating: 4.7,
    reviewCount: 86,
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Premium soft-gel", "Non-yellowing top finish"],
    howToApply: [
      "Push back cuticles and lightly buff.",
      "Prep each nail with cleanser wipe.",
      "Apply tile from cuticle to tip; hold ten seconds.",
      "Press into place along sides for full bond.",
    ],
    shippingNote:
      "Free 2-day shipping on orders above ₹1,500. COD available with a ₹100 handling fee.",
    trustBadges: baseTrust,
    reviews: baseReviews.slice(0, 2),
  },
  {
    id: "noir",
    slug: "noir",
    name: "Noir — Coffin",
    category: "SOFT GEL NAILS",
    collection: "soft-feminine",
    descriptor: "An obsidian black, mirror-finish coffin shape.",
    description: [
      "An obsidian black with a mirror-finish top coat. Coffin shape reads sculptural and is finished by hand to a clean, sharp tip.",
      "Reusable up to fifteen wears with proper care.",
    ],
    price: 2100,
    shapes: ["Coffin", "Almond"],
    defaultShape: "Coffin",
    rating: 4.9,
    reviewCount: 64,
    primaryImage:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Premium soft-gel", "Mirror-finish top"],
    howToApply: [
      "Buff the natural nail.",
      "Wipe with prep cleanser.",
      "Apply each tile, press for ten seconds.",
      "Smooth seams along sides.",
    ],
    shippingNote: "Free 2-day shipping on orders above ₹1,500.",
    trustBadges: baseTrust,
    reviews: baseReviews.slice(0, 1),
  },
  {
    id: "champagne",
    slug: "champagne",
    name: "Champagne — Almond",
    category: "SOFT GEL NAILS",
    collection: "soft-feminine",
    descriptor: "A warm sheer champagne with a soft, pearlised finish.",
    description: [
      "A warm sheer champagne with a soft, pearlised finish — the bridal favourite, three seasons running.",
    ],
    price: 1990,
    shapes: ["Almond", "Squoval"],
    defaultShape: "Almond",
    rating: 4.9,
    reviewCount: 212,
    primaryImage:
      "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Premium soft-gel", "Pearlised top finish"],
    howToApply: [
      "Buff and prep.",
      "Cleanse with prep wipe.",
      "Apply tiles, hold ten seconds each.",
      "Inspect seam line; smooth if needed.",
    ],
    shippingNote: "Free 2-day shipping on orders above ₹1,500.",
    trustBadges: baseTrust,
    reviews: baseReviews,
  },
  {
    id: "berry-bloom",
    slug: "berry-bloom",
    name: "Berry Bloom — Almond",
    category: "SOFT GEL NAILS",
    collection: "soft-feminine",
    descriptor: "A deep berry red, almond-shaped, hand-finished gloss.",
    description: [
      "A deep berry red, almond-shaped, hand-finished gloss. Reads cinematic in evening light.",
    ],
    price: 2100,
    shapes: ["Almond", "Coffin"],
    defaultShape: "Almond",
    rating: 4.8,
    reviewCount: 98,
    primaryImage:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Premium soft-gel", "High-gloss top finish"],
    howToApply: [
      "Buff and prep nail.",
      "Cleanse with prep wipe.",
      "Apply tile from cuticle to tip.",
      "Hold for ten seconds.",
    ],
    shippingNote: "Free 2-day shipping on orders above ₹1,500.",
    trustBadges: baseTrust,
    reviews: baseReviews.slice(0, 3),
  },
  {
    id: "petal",
    slug: "petal",
    name: "Petal — Squoval",
    category: "SOFT GEL NAILS",
    collection: "soft-feminine",
    descriptor: "A soft, milky petal pink. The everyday favourite.",
    description: ["A soft, milky petal pink that flatters every skin tone."],
    price: 1790,
    shapes: ["Squoval", "Almond", "Round"],
    defaultShape: "Squoval",
    rating: 4.7,
    reviewCount: 156,
    primaryImage:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Premium soft-gel"],
    howToApply: [
      "Buff and prep nail.",
      "Cleanse with prep wipe.",
      "Apply tile from cuticle to tip.",
      "Hold ten seconds.",
    ],
    shippingNote: "Free 2-day shipping on orders above ₹1,500.",
    trustBadges: baseTrust,
    reviews: baseReviews.slice(0, 2),
  },
  {
    id: "prep-kit",
    slug: "prep-kit",
    name: "The Prep Ritual",
    category: "ACCESSORIES",
    collection: "soft-feminine",
    descriptor: "Cuticle pusher, buffer, prep wipes, and travel case.",
    description: [
      "Everything required to prepare the natural nail. Stainless steel cuticle pusher, three-grain buffer, twenty prep wipes, and our travel case.",
    ],
    price: 990,
    shapes: ["Almond"],
    defaultShape: "Almond",
    rating: 4.6,
    reviewCount: 41,
    primaryImage:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Stainless steel pusher", "Three-grain buffer"],
    howToApply: ["Use as part of the application ritual."],
    shippingNote: "Free 2-day shipping on orders above ₹1,500.",
    trustBadges: baseTrust,
    reviews: [],
  },
  {
    id: "remover",
    slug: "remover",
    name: "The Gentle Remover",
    category: "ACCESSORIES",
    collection: "soft-feminine",
    descriptor: "A gentle bond-release oil for clean removal.",
    description: ["A gentle bond-release oil for a clean, residue-free removal."],
    price: 690,
    shapes: ["Almond"],
    defaultShape: "Almond",
    rating: 4.7,
    reviewCount: 28,
    primaryImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1611042553365-9b101441c135?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
    ],
    ingredients: ["Plant-derived bond release"],
    howToApply: ["Apply two drops at the seam, wait sixty seconds."],
    shippingNote: "Free 2-day shipping on orders above ₹1,500.",
    trustBadges: baseTrust,
    reviews: [],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function listProducts(): Product[] {
  return products;
}
