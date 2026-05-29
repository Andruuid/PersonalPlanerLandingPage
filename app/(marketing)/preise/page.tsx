import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Pricing } from "@/components/landing/pricing";
import { WaitlistLink } from "@/components/ui/waitlist-link";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { softwareApplicationSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Preise – Personalplanung Software ab CHF 2.90",
  description:
    "Transparente Preise für Personalplanung Software in der Schweiz. Starter ab CHF 2.90, Plus ab CHF 3.90 pro Mitarbeiter – monatlich kündbar.",
  path: "/preise",
  keywords: [
    "Personalplanung Software Preise",
    "Dienstplan Software Kosten Schweiz",
    "Schichtplan Software Preis",
  ],
});

export default function PreisePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />

      <div className="pt-16">
        <div className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-left text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900">
              Startseite
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">Preise</span>
          </nav>

          <h1 className="text-left text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Preise für Personalplanung Software in der Schweiz
          </h1>
          <p className="mt-4 text-left text-lg text-slate-600">
            Einfache, faire Preise für Schweizer KMU – ohne Einrichtungsgebühr
            und ohne versteckte Kosten. Sie zahlen pro Mitarbeiter und Monat.
          </p>
        </div>

        <Pricing />

        <div className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6 lg:px-8">
          <WaitlistLink className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
            Jetzt unverbindlich vormerken
            <ArrowRight className="h-4 w-4" />
          </WaitlistLink>
        </div>
      </div>
    </>
  );
}
