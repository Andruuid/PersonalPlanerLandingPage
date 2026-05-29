import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Pricing } from "@/components/landing/pricing";
import { WaitlistLink } from "@/components/ui/waitlist-link";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { softwareApplicationSchema } from "@/lib/seo/schema";
import { market } from "@/lib/markets";

/**
 * Builds the pricing page for the active market. `routePath` is the physical
 * route's URL ("/preise" for CH, "/pricing" for US); the page renders only when
 * it matches the active market's configured pricing path, otherwise 404s.
 */
export function buildPricingPage(routePath: string) {
  const content = market.ui.pricingPage;
  const { breadcrumbHome } = market.ui.landingTemplate;
  const active = content.path === routePath;

  function generateMetadata(): Metadata {
    if (!active) return {};

    return createPageMetadata({
      title: content.metaTitle,
      description: content.metaDescription,
      path: content.path,
      keywords: content.metaKeywords,
    });
  }

  function Page() {
    if (!active) notFound();

    return (
      <>
        <JsonLd data={softwareApplicationSchema()} />

        <div className="pt-16">
          <div className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-left text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                {breadcrumbHome}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-700">{content.breadcrumb}</span>
            </nav>

            <h1 className="text-left text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {content.h1}
            </h1>
            <p className="mt-4 text-left text-lg text-slate-600">{content.intro}</p>
          </div>

          <Pricing />

          <div className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6 lg:px-8">
            <WaitlistLink className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
              {content.bottomCta}
              <ArrowRight className="h-4 w-4" />
            </WaitlistLink>
          </div>
        </div>
      </>
    );
  }

  return { generateMetadata, Page };
}
