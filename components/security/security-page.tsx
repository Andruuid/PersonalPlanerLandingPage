import Link from "next/link";
import { SecurityCard } from "@/components/security/security-card";
import { SecurityContact } from "@/components/security/security-contact";
import { SecurityDisclaimer } from "@/components/security/security-disclaimer";
import { SecurityHero } from "@/components/security/security-hero";
import { securityIconMap } from "@/components/security/security-icons";
import { SecuritySection } from "@/components/security/security-section";
import type { SecurityPageContent } from "@/lib/markets/types";
import {
  formatCoverageBadge,
  replaceSecurityMetrics,
  type SecurityMetrics,
} from "@/lib/security-metrics";
import { market } from "@/lib/markets";

export type SecurityPageViewProps = {
  content: SecurityPageContent;
  metrics: SecurityMetrics;
  updatedAt: string;
};

export function SecurityPageView({
  content,
  metrics,
  updatedAt,
}: SecurityPageViewProps) {
  const breadcrumbHome = market.ui.landingTemplate.breadcrumbHome;
  const updatedAtLabel = `${content.hero.updateNotePrefix} ${updatedAt}`;

  const resolveHref = (hrefKey: "knownLimitations" | undefined) => {
    if (hrefKey === "knownLimitations") return metrics.knownLimitationsUrl;
    return undefined;
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link
          href="/"
          className="hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
        >
          {breadcrumbHome}
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="font-medium text-slate-700">{content.breadcrumb}</span>
      </nav>

      <SecurityHero
        title={content.hero.title}
        subline={content.hero.subline}
        updatedAtLabel={updatedAtLabel}
        status={{
          status: metrics.status,
          label: metrics.statusLabel,
        }}
      />

      {content.sections.map((section) => (
        <SecuritySection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
          columns={section.columns}
        >
          {section.cards.map((card) => {
            const Icon = securityIconMap[card.icon];
            const description = replaceSecurityMetrics(card.description, metrics);
            const badge = card.showCoverageBadge
              ? formatCoverageBadge(metrics.coveragePercent)
              : undefined;

            return (
              <SecurityCard
                key={card.title}
                icon={Icon}
                title={card.title}
                description={description}
                badge={badge}
                href={resolveHref(card.hrefKey)}
                hrefLabel={card.hrefLabel}
              />
            );
          })}
        </SecuritySection>
      ))}

      <SecurityContact
        title={content.contact.title}
        responsibleLine={replaceSecurityMetrics(
          content.contact.responsibleTemplate,
          metrics,
        )}
        email={content.contact.email}
        pgpNote={content.contact.pgpNote}
        slaLines={[content.contact.slaCritical, content.contact.slaGeneral]}
      />

      <SecurityDisclaimer text={content.disclaimer} />
    </article>
  );
}
