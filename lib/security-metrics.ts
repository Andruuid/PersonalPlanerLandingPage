import { siteConfig } from "@/lib/site-config";

/**
 * Dynamic values for the /security page.
 *
 * ## Wiring guide
 *
 * 1. **Stand date** — `formatSecurityStandDate()` runs on each request/build; no env needed.
 * 2. **Tests & coverage** — Set in CI/Vercel after test runs:
 *    - `SECURITY_TEST_COUNT` (e.g. `142`)
 *    - `SECURITY_COVERAGE_PERCENT` (e.g. `87`)
 * 3. **Status indicator** — Until an API exists:
 *    - `SECURITY_STATUS` = `operational` | `degraded` | `outage`
 *    - `SECURITY_STATUS_LABEL` (e.g. "Alle Systeme betriebsbereit")
 *    Later: add `app/api/security-status/route.ts` and fetch from a client wrapper.
 * 4. **Known limitations** — `SECURITY_KNOWN_LIMITATIONS_URL` (GitHub/Notion)
 * 5. **DPO name** — `SECURITY_DPO` or `legal.dataProtectionOfficer` in market config
 * 6. **Copy updates** — Edit `lib/markets/ch/security.ts` only; use `replaceSecurityMetrics()` for templates.
 */

export type SecurityStatus = "operational" | "degraded" | "outage";

export type SecurityMetrics = {
  testCount: number;
  coveragePercent: number;
  knownLimitationsUrl: string;
  status: SecurityStatus;
  statusLabel: string;
  dataProtectionOfficer: string;
};

const VALID_STATUSES: SecurityStatus[] = ["operational", "degraded", "outage"];

function parseStatus(value: string | undefined): SecurityStatus {
  if (value && VALID_STATUSES.includes(value as SecurityStatus)) {
    return value as SecurityStatus;
  }
  return "operational";
}

export function getSecurityMetrics(): SecurityMetrics {
  return {
    testCount: Number(process.env.SECURITY_TEST_COUNT ?? "656") || 656,
    coveragePercent: Number(process.env.SECURITY_COVERAGE_PERCENT ?? "85") || 85,
    knownLimitationsUrl:
      process.env.SECURITY_KNOWN_LIMITATIONS_URL ?? "#",
    status: parseStatus(process.env.SECURITY_STATUS),
    statusLabel:
      process.env.SECURITY_STATUS_LABEL ?? "Alle Systeme betriebsbereit",
    dataProtectionOfficer:
      process.env.SECURITY_DPO ??
      siteConfig.legal?.dataProtectionOfficer ??
      siteConfig.legal?.contentResponsible ??
      siteConfig.name,
  };
}

export function formatSecurityStandDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function replaceSecurityMetrics(
  template: string,
  metrics: Pick<SecurityMetrics, "testCount" | "coveragePercent" | "dataProtectionOfficer">,
): string {
  return template
    .replace(/\{testCount\}/g, String(metrics.testCount))
    .replace(/\{coveragePercent\}/g, String(metrics.coveragePercent))
    .replace(/\{dataProtectionOfficer\}/g, metrics.dataProtectionOfficer);
}

export function formatCoverageBadge(coveragePercent: number): string {
  return `✅ ${coveragePercent}% Coverage`;
}
