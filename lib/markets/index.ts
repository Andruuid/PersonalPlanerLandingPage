import { MARKET } from "@/lib/market";
import type { Market } from "@/lib/markets/types";
import { chMarket } from "@/lib/markets/ch";
import { usMarket } from "@/lib/markets/us";

/** The active market bundle for this deployment (selected by NEXT_PUBLIC_MARKET). */
export const market: Market = MARKET === "US" ? usMarket : chMarket;
