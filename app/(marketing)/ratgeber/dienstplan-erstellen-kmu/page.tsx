import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { WaitlistLink } from "@/components/ui/waitlist-link";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { MARKET } from "@/lib/market";

export const metadata = createPageMetadata({
  title: "Dienstplan erstellen – Anleitung für KMU",
  description:
    "So erstellen Sie einen Dienstplan für Ihr KMU: Schritt für Schritt von Stammdaten bis Veröffentlichung – und wann sich Software statt Excel lohnt.",
  path: "/ratgeber/dienstplan-erstellen-kmu",
  keywords: [
    "Dienstplan erstellen online",
    "Wochenplanung Mitarbeiter",
    "Schichtplan Anleitung",
  ],
});

const breadcrumbs = [
  { name: "Startseite", path: "/" },
  { name: "Ratgeber", path: "/ratgeber/dienstplan-erstellen-kmu" },
];

export default function DienstplanErstellenArticle() {
  if (MARKET !== "CH") notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Ratgeber</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Dienstplan erstellen: Anleitung für Schweizer KMU
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Ein guter Wochendienstplan spart Zeit, vermeidet Missverständnisse und
          sorgt für faire Ferienplanung. So gehen Sie Schritt für Schritt vor –
          und wann sich Software statt Excel lohnt.
        </p>

        <div className="mt-10 space-y-10 text-slate-600">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Stammdaten erfassen
            </h2>
            <p className="mt-4 leading-relaxed">
              Bevor Sie die erste Woche planen, brauchen Sie eine saubere Basis:
              Mitarbeitende, Pensum, Verfügbarkeiten, Standorte und
              Dienstvorlagen (Früh, Spät, Ganztag). Je klarer diese Daten, desto
              schneller geht die laufende Planung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Woche strukturieren
            </h2>
            <p className="mt-4 leading-relaxed">
              Planen Sie zuerst die Tage mit höchstem Personalbedarf – etwa
              Samstag im Detailhandel oder Freitagabend in der Gastronomie.
              Prüfen Sie Mindestbesetzung pro Schicht und markieren Sie offene
              Lücken, bevor Sie Anträge bearbeiten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Wünsche und Ferien einbeziehen
            </h2>
            <p className="mt-4 leading-relaxed">
              Ferien- und Absenzwünsche gehören in denselben Prozess wie der
              Schichtplan – nicht in separate Chats. So sehen Sie Konflikte früh
              und können fair entscheiden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Plan veröffentlichen und kommunizieren
            </h2>
            <p className="mt-4 leading-relaxed">
              Ein Plan hilft nur, wenn alle ihn kennen. Veröffentlichen Sie den
              Wochenplan zentral – idealerweise so, dass Mitarbeitende ihn mobil
              abrufen können, ohne PDFs weiterzuleiten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Wann lohnt sich Dienstplan-Software?
            </h2>
            <p className="mt-4 leading-relaxed">
              Ab etwa fünf Mitarbeitenden steigt der Aufwand mit Excel spürbar.
              Eine Cloud-Lösung wie easyplan verbindet Schichtplan, Ferien und
              Zeitsaldo – ab CHF 2.90 pro Mitarbeiter und Monat.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <Link href="/excel-dienstplan-alternative" className="text-brand-700 hover:text-brand-800">
                  Excel Dienstplan Alternative
                </Link>
              </li>
              <li>
                <Link href="/schichtplan-software" className="text-brand-700 hover:text-brand-800">
                  Schichtplan Software
                </Link>
              </li>
              <li>
                <Link href="/dienstplan-gastronomie" className="text-brand-700 hover:text-brand-800">
                  Dienstplan Gastronomie
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <p className="font-semibold text-slate-900">easyplan testen</p>
          <p className="mt-2 text-slate-600">
            Tragen Sie sich unverbindlich ein – wir informieren Sie zum Launch.
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
