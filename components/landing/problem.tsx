import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Problem() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Warum Excel und WhatsApp bei der Schichtplanung nicht mehr reichen
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            In einem Restaurant, einer Boutique, einem Uhrenshop oder einem
            Coiffeursalon läuft vieles über Zuruf: Schichten in Excel,
            Ferienwünsche per WhatsApp, Überstunden in einer separaten Tabelle.
            Das kostet Zeit, führt zu Missverständnissen und macht die Abrechnung
            fehleranfällig.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            easyplan bringt Dienstplan, Ferienplanung und Zeitsaldo in eine
            Cloud-Lösung – entwickelt für Betriebe ab 5 Mitarbeitenden,
            die keine komplexe HR-Software brauchen, sondern einen Plan, der im
            Alltag funktioniert.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#funktionen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Funktionen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#zeitkonten"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Zeitsaldo und Ferien
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
