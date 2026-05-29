import { market } from "@/lib/markets";

export type { LandingPageContent, LandingPageSection } from "@/lib/markets/types";

export const landingPages = market.landingPages;

export function getLandingPage(slug: string) {
  return landingPages[slug];
}

export function getAllLandingPageSlugs(): string[] {
  return Object.keys(landingPages);
}
