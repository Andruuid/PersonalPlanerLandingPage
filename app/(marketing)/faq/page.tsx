import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaitlistLink } from "@/components/ui/waitlist-link";
import { JsonLd } from "@/components/seo/json-ld";
import { faqItems } from "@/lib/seo/faq-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "FAQ – Personalplanung Software für Schweizer KMU",
  description:
    "Antworten zu Dienstplan Software, Ferienplanung, Kosten und Mitarbeiter-App – häufige Fragen zu easyplan für Schweizer KMU.",
  path: "/faq",
  keywords: [
    "Personalplanung Software FAQ",
    "Dienstplan Software Schweiz",
    "Mitarbeiterplanung Fragen",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />

      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">FAQ</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Häufige Fragen zur Personalplanung Software
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Alles Wichtige zu Dienstplan, Ferienplanung, Zeitsaldo und Kosten –
          für Detailhandel, Gastronomie und Dienstleistung in der Schweiz.
        </p>

        <div className="mt-12 space-y-8">
          {faqItems.map((item) => (
            <section key={item.question}>
              <h2 className="text-xl font-semibold text-slate-900">{item.question}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <p className="font-semibold text-slate-900">Noch Fragen?</p>
          <p className="mt-2 text-slate-600">
            Tragen Sie sich unverbindlich ein – wir melden uns bei Ihnen.
          </p>
          <WaitlistLink className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
            Kostenlos vormerken
            <ArrowRight className="h-4 w-4" />
          </WaitlistLink>
        </div>
      </article>
    </>
  );
}
