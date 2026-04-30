export type Shape = "Almond" | "Squoval" | "Coffin" | "Round";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  descriptor: string;
  description: string[];
  pullQuote?: string;
  price: number;
  originalPrice?: number;
  shapes: Shape[];
  defaultShape: Shape;
  rating: number;
  reviewCount: number;
  primaryImage: string;
  hoverImage: string;
  galleryImages: string[];
  ingredients: string[];
  howToApply: string[];
  shippingNote: string;
  trustBadges: { icon: "leaf" | "flag" | "refresh"; label: string }[];
  reviews: Review[];
};

export type Review = {
  id: string;
  initials: string;
  location: string;
  date: string;
  rating: number;
  headline: string;
  body: string;
  recommends: boolean;
  photos?: string[];
};

export type Collection = {
  slug: string;
  name: string;
  eyebrow: string;
  italicDescriptor: string;
  heroImage: string;
  intro: string[];
  pullQuote: string;
  signatureProductId: string;
  coreProductIds: string[];
  companionProductIds: string[];
  giftingImage: string;
  giftingHeadline: string;
  giftingBody: string;
  outroSignoff: string;
  nextCollectionSlug: string;
  nextCollectionName: string;
  midBreakImage: string;
  midBreakHeadline: string;
  midBreakCaption: string;
};

export type HomeProductTrio = {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  href: string;
};
