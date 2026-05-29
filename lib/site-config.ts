import { market } from "@/lib/markets";

/**
 * Active-market site config. The shape is stable across markets; the values are
 * selected by the NEXT_PUBLIC_MARKET env var. See lib/markets/* for the bundles.
 */
export const siteConfig = market.config;
