import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaitlistLink } from "@/components/ui/waitlist-link";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/lib/seo/faq-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { market } from "@/lib/markets";

const f = market.ui.faqPage;
const { breadcrumbHome } = market.ui.landingTemplate;

export const metadata = createPageMetadata({
  title: f.metaTitle,
  description: f.metaDescription,
  path: "/faq",
  keywords: f.metaKeywords,
});

export default function FaqPage() {
  const breadcrumbs = [
    { name: breadcrumbHome, path: "/" },
    { name: f.breadcrumb, path: "/faq" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            {breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{f.breadcrumb}</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {f.h1}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{f.intro}</p>

        <div className="mt-12 space-y-8">
          {faqItems.map((item) => (
            <section key={item.question}>
              <h2 className="text-xl font-semibold text-slate-900">{item.question}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <p className="font-semibold text-slate-900">{f.ctaTitle}</p>
          <p className="mt-2 text-slate-600">{f.ctaText}</p>
          <WaitlistLink className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
            {f.ctaButton}
            <ArrowRight className="h-4 w-4" />
          </WaitlistLink>
        </div>
      </article>
    </>
  );
}
