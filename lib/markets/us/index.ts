import type { Market } from "@/lib/markets/types";
import { usConfig } from "@/lib/markets/us/config";
import { usHome } from "@/lib/markets/us/home";
import { usUi } from "@/lib/markets/us/ui";
import { usLandingPages } from "@/lib/markets/us/landing-pages";
import { usFaq } from "@/lib/markets/us/faq";
import { usPricing } from "@/lib/markets/us/pricing";
import { usSitemapRoutes } from "@/lib/markets/us/routes";

export const usMarket: Market = {
  config: usConfig,
  home: usHome,
  ui: usUi,
  landingPages: usLandingPages,
  faq: usFaq,
  pricing: usPricing,
  sitemapRoutes: usSitemapRoutes,
};
