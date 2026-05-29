import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { market } from "@/lib/markets";
import type { LandingPageContent } from "@/lib/seo/pages/content";

type LandingPageTemplateProps = {
  page: LandingPageContent;
};

const { landingTemplate } = market.ui;

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  const breadcrumbs = [
    { name: landingTemplate.breadcrumbHome, path: "/" },
    { name: page.h1.split("–")[0]?.trim() ?? page.title, path: page.path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-slate-900">
                {landingTemplate.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-700">{page.title.split("–")[0]?.trim()}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {page.h1}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">{page.intro}</p>

        <div className="mt-10 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-4 leading-relaxed text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            {landingTemplate.ctaHeading}
          </h2>
          <p className="mt-2 text-slate-600">{landingTemplate.ctaText}</p>
          <Button href="/#waitlist-email" className="mt-5" size="lg">
            {landingTemplate.ctaButton}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {page.relatedLinks.length > 0 ? (
          <aside className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {landingTemplate.relatedHeading}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {page.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-brand-700 hover:text-brand-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </article>
    </>
  );
}
