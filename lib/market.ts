export type MarketId = "CH" | "US";

const MARKETS: readonly MarketId[] = ["CH", "US"];
const DEFAULT_MARKET: MarketId = "CH";

function resolveMarket(): MarketId {
  const raw = process.env.NEXT_PUBLIC_MARKET?.trim().toUpperCase();
  return (MARKETS as readonly string[]).includes(raw ?? "")
    ? (raw as MarketId)
    : DEFAULT_MARKET;
}

/** Active market for this deployment. Set via the NEXT_PUBLIC_MARKET env var. */
export const MARKET: MarketId = resolveMarket();
