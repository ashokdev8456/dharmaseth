import type { Metadata } from "next";
import { Reveal } from "@/components/common/Reveal";
import { AccountPanel } from "@/components/home/landing/AccountPanel";
import { CauseSpotlight } from "@/components/home/landing/CauseSpotlight";
import { GatheringCards } from "@/components/home/landing/GatheringCards";
import { GiftPanel } from "@/components/home/landing/GiftPanel";
import { HeritagePanel } from "@/components/home/landing/HeritagePanel";
import { HomeScreenSnap } from "@/components/home/landing/HomeScreenSnap";
import { LandingHero } from "@/components/home/landing/LandingHero";
import { PurposeBand } from "@/components/home/landing/PurposeBand";
import { ServiceGrid } from "@/components/home/landing/ServiceGrid";
import { StoryCards } from "@/components/home/landing/StoryCards";
import { pageMetadata } from "@/config/seo";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: `A bridge to living tradition | ${siteConfig.name}`,
  description: siteConfig.description,
  path: routes.home,
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <HomeScreenSnap />
      <LandingHero />
      <Reveal>
        <CauseSpotlight />
      </Reveal>
      <Reveal delay={80}>
        <ServiceGrid />
      </Reveal>
      <Reveal delay={80}>
        <HeritagePanel />
      </Reveal>
      <Reveal delay={80}>
        <PurposeBand />
      </Reveal>
      <Reveal delay={80}>
        <GiftPanel />
      </Reveal>
      <Reveal delay={80}>
        <AccountPanel />
      </Reveal>
      <Reveal delay={80}>
        <StoryCards />
      </Reveal>
      <Reveal delay={80}>
        <GatheringCards />
      </Reveal>
    </>
  );
}
