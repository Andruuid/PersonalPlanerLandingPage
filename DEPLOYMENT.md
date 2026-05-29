# Deployment — multi-market landing page

One codebase serves multiple markets. The active market is chosen by the
`NEXT_PUBLIC_MARKET` environment variable:

| Market | `NEXT_PUBLIC_MARKET` | Language | Domain (example)        |
| ------ | -------------------- | -------- | ----------------------- |
| CH     | `CH` (default)       | German   | `www.easyplaner.ch`     |
| US     | `US`                 | English  | `www.easyteamplan.com`  |

If `NEXT_PUBLIC_MARKET` is unset or unknown, the build defaults to **CH** — so the
existing Swiss site keeps working with no env change.

## How it works

- `lib/market.ts` resolves the active market from `NEXT_PUBLIC_MARKET`.
- `lib/markets/{ch,us}/*` hold each market's content bundle (config, home copy, UI
  strings, landing pages, FAQ, pricing, sitemap routes).
- `lib/markets/index.ts` selects the active bundle; `lib/site-config.ts` and the
  `lib/seo/*` modules re-export from it, so every component is market-aware.
- Route folders for *both* markets exist in `app/(marketing)/`. A page whose slug
  isn't in the active market's bundle calls `notFound()` (404). So German slugs
  resolve only on CH and English slugs only on US.

`NEXT_PUBLIC_*` variables are inlined at **build time**, so each deployment must be
built with its own value. Both markets are intended to run **at the same time on
separate domains** (not one deployment toggled back and forth).

## Recommended: two Vercel projects, one Git repo

Create two Vercel projects pointing at this same repository.

### Project 1 — CH (Switzerland)
- Domain: `www.easyplaner.ch`
- Environment variables:
  - `NEXT_PUBLIC_MARKET=CH`
  - `NEXT_PUBLIC_SITE_URL=https://www.easyplaner.ch`
  - `NEXT_PUBLIC_FORMSPREE_ENDPOINT=<CH Formspree endpoint>`

### Project 2 — US
- Domain: `www.easyteamplan.com`
- Environment variables:
  - `NEXT_PUBLIC_MARKET=US`
  - `NEXT_PUBLIC_SITE_URL=https://www.easyteamplan.com`
  - `NEXT_PUBLIC_FORMSPREE_ENDPOINT=<US Formspree endpoint>`

Pushing to the repo triggers a redeploy of both projects; each rebuilds with its own
market.

## SEO checklist per market

- Register a **separate Google Search Console property** for each domain.
- Submit each domain's `/sitemap.xml` (generated per market).
- `<html lang>`, Open Graph locale, and schema.org `inLanguage`/`areaServed` are set
  automatically from the market config.

## Local development

```bash
# CH (default)
npm run dev

# US
# PowerShell:
$env:NEXT_PUBLIC_MARKET="US"; npm run dev
# bash:
NEXT_PUBLIC_MARKET=US npm run dev
```

## Adding a new market (e.g. UK)

1. Add `"UK"` to `MarketId` in `lib/market.ts` and the selector in
   `lib/markets/index.ts`.
2. Create `lib/markets/uk/*` mirroring `lib/markets/us/*`.
3. Add UK slug route folders under `app/(marketing)/` (thin files that call
   `buildLandingPage(...)`), plus market-specific legal/guide pages.
4. For English-on-English markets (US ↔ UK), add cross-domain `hreflang`
   (`en-US` / `en-GB`) once both domains are live. (Deferred — see the plan.)
