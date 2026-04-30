import type { Collection } from "./types";

export const collections: Collection[] = [
  {
    slug: "soft-feminine",
    name: "Soft Feminine",
    eyebrow: "THE COLLECTION",
    italicDescriptor: "A curated edit of rose-tinted shades for the considered hand.",
    heroImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2400&q=80",
    intro: [
      "Soft Feminine is the season's edit of rose-tinted, low-saturation shades — composed for the woman who would rather whisper than declare.",
      "Each tile is hand-finished in our Mumbai atelier, then quality-checked by the founder before it leaves the workshop. The shapes are deliberately restrained: a softened almond, a clean squoval, a tapered coffin.",
      "Wear them on the days you would have worn pearls.",
    ],
    pullQuote: "Refinement is what stays after restraint has done its work.",
    signatureProductId: "rose-bloom",
    coreProductIds: ["rose-bloom", "porcelain", "champagne", "petal", "berry-bloom", "noir"],
    companionProductIds: ["prep-kit", "remover"],
    giftingImage:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1600&q=80",
    giftingHeadline: "The art of gifting.",
    giftingBody:
      "Each set arrives in our signature reusable case, dressed in a hand-tied ribbon. Add a complimentary monogrammed card at checkout.",
    outroSignoff:
      "And if she asks where it came from, you may, of course, tell her.",
    nextCollectionSlug: "bridal-edit",
    nextCollectionName: "Bridal Edit",
    midBreakImage:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=2400&q=80",
    midBreakHeadline: "A note for her.",
    midBreakCaption: "An edit, not a catalogue. Composed by hand.",
  },
  {
    slug: "bridal-edit",
    name: "Bridal Edit",
    eyebrow: "THE COLLECTION",
    italicDescriptor: "Pearlised neutrals for the morning of.",
    heroImage:
      "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=2400&q=80",
    intro: [
      "The Bridal Edit is built from a single restraint — that the hand should be the second thing you notice, after the woman herself.",
      "Pearlised neutrals, soft champagnes, near-translucent ivories. Photographed under window light, finished by hand.",
    ],
    pullQuote: "What is quiet is what is remembered.",
    signatureProductId: "champagne",
    coreProductIds: ["champagne", "porcelain", "petal"],
    companionProductIds: ["prep-kit", "remover"],
    giftingImage:
      "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=1600&q=80",
    giftingHeadline: "For the bridal party.",
    giftingBody: "Sets of three, four, or six — gift-wrapped, monogrammed.",
    outroSignoff: "And so begins the morning of.",
    nextCollectionSlug: "soft-feminine",
    nextCollectionName: "Soft Feminine",
    midBreakImage:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=2400&q=80",
    midBreakHeadline: "The morning of.",
    midBreakCaption: "Composed in window light.",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function listCollections(): Collection[] {
  return collections;
}
