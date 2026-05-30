import type { Market } from "@/lib/markets/types";
import { chConfig } from "@/lib/markets/ch/config";
import { chHome } from "@/lib/markets/ch/home";
import { chUi } from "@/lib/markets/ch/ui";
import { chLandingPages } from "@/lib/markets/ch/landing-pages";
import { chFaq } from "@/lib/markets/ch/faq";
import { chPricing } from "@/lib/markets/ch/pricing";
import { chSitemapRoutes } from "@/lib/markets/ch/routes";
import { chSecurity } from "@/lib/markets/ch/security";

export const chMarket: Market = {
  config: chConfig,
  home: chHome,
  ui: chUi,
  landingPages: chLandingPages,
  faq: chFaq,
  pricing: chPricing,
  sitemapRoutes: chSitemapRoutes,
  security: chSecurity,
};
