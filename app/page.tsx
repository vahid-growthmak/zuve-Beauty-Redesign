import { HeroCarousel } from "@/components/sections/home/hero-carousel";
import { FirstPressOn } from "@/components/sections/home/first-press-on";
import { ZuveRitual } from "@/components/sections/home/zuve-ritual";
import { HeroStoryBanner } from "@/components/sections/home/hero-story-banner";
import { SeasonalDrop } from "@/components/sections/home/seasonal-drop";
import { BrandStoryBanner } from "@/components/sections/home/brand-story-banner";
import { FinishingTouch } from "@/components/sections/home/finishing-touch";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <FirstPressOn />
      <ZuveRitual />
      <HeroStoryBanner />
      <SeasonalDrop />
      <BrandStoryBanner />
      <FinishingTouch />
    </>
  );
}
