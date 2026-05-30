import { notFound } from "next/navigation";
import { SecurityPageView } from "@/components/security/security-page";
import { JsonLd } from "@/components/seo/json-ld";
import { MARKET } from "@/lib/market";
import { market } from "@/lib/markets";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import {
  formatSecurityStandDate,
  getSecurityMetrics,
} from "@/lib/security-metrics";
import { siteConfig } from "@/lib/site-config";

const security = market.security;

export const metadata = createPageMetadata({
  title: security?.metaTitle ?? "Sicherheit & Vertrauen",
  description:
    security?.metaDescription ??
    `Sicherheit, Datenschutz und Transparenz bei ${siteConfig.name}.`,
  path: "/security",
  keywords: security?.metaKeywords,
});

export default function SecurityPage() {
  if (MARKET !== "CH" || !market.security) notFound();

  const metrics = getSecurityMetrics();
  const updatedAt = formatSecurityStandDate();
  const breadcrumbs = [
    { name: market.ui.landingTemplate.breadcrumbHome, path: "/" },
    { name: market.security.breadcrumb, path: "/security" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <SecurityPageView
        content={market.security}
        metrics={metrics}
        updatedAt={updatedAt}
      />
    </>
  );
}
