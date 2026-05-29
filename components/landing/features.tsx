"use client";

import {
  CalendarRange,
  ClipboardCheck,
  Clock3,
  LayoutGrid,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Wochenplanung per Drag-and-Drop",
    description:
      "Erstellen Sie den Wochendienstplan im Raster – mit Besetzungsübersicht, KPIs und klarem Status von Entwurf bis Veröffentlichung.",
  },
  {
    icon: Users,
    title: "Mitarbeiter-App für Schichtplan und Anträge",
    description:
      "Ihr Team sieht Schichten und Zeitkonten jederzeit auf dem Smartphone. Ferien, Absenzen und Teilzeitausgleich-Wünsche (TZT) lassen sich direkt melden – ohne E-Mail-Pingpong.",
  },
  {
    icon: Clock3,
    title: "Zeitsaldo, Ferien und Abwesenheiten",
    description:
      "Soll- und Ist-Zeiten, Ferienanspruch und Überzeitausgleich (UEZ) werden automatisch gebucht – inklusive manueller Korrekturen und Jahreswechsel nach Schweizer Praxis.",
  },
  {
    icon: CalendarRange,
    title: "Mehrere Standorte und Feiertage",
    description:
      "Verwalten Sie Filialen, Dienstvorlagen und kantonale Feiertagskalender zentral – ideal für Betriebe mit mehr als einem Standort.",
  },
  {
    icon: ClipboardCheck,
    title: "Ferien- und Absenzwünsche genehmigen",
    description:
      "Anträge erscheinen direkt im Planungsboard. Sie entscheiden im Kontext – mit nachvollziehbarer Historie aller Änderungen.",
  },
  {
    icon: ShieldCheck,
    title: "Datenschutz & revisionssichere Historie",
    description:
      "Rollenbasierte Rechte, getrennte Mandanten und DSGVO-konforme Export- sowie Löschanfragen – damit Sie und Ihr Team sicher planen können.",
  },
];

export function Features() {
  return (
    <section id="funktionen" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Funktionen
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Funktionen für Gastronomie, Detailhandel und Dienstleistung
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            easyplan verbindet Schichtplanung, Mitarbeiterkommunikation und
            Zeitkonten in einer Oberfläche – ohne Schulungswochen und ohne
            IT-Abteilung.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <feature.icon className="h-5 w-5" strokeWidth={2.1} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
