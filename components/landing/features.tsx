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
    title: "Intuitive Wochenplanung",
    description:
      "Planen Sie Dienste per Drag-and-Drop im Wochenraster – mit KPIs, Detailansicht und klarer Status-Maschine von Entwurf bis Abschluss.",
  },
  {
    icon: Users,
    title: "Mitarbeitersicht & Anträge",
    description:
      "Ihr Team sieht Schichten und Zeitkonten jederzeit – auch unterwegs auf dem Smartphone. Ferien, Absenzen und TZT-Wünsche lassen sich direkt melden, ohne E-Mail-Pingpong.",
  },
  {
    icon: Clock3,
    title: "Schweizer Zeitlogik",
    description:
      "Sollzeit, Zeitsaldo, UEZ, Ferien und TZT werden automatisch gebucht – inklusive manueller Korrekturen und Jahreswechsel.",
  },
  {
    icon: CalendarRange,
    title: "Standorte & Feiertage",
    description:
      "Verwalten Sie mehrere Standorte, Dienstvorlagen und regionale Feiertagskalender zentral für Ihren Betrieb.",
  },
  {
    icon: ClipboardCheck,
    title: "Genehmigungs-Workflow",
    description:
      "Admins prüfen Wünsche im Planungskontext, genehmigen oder lehnen ab – mit nachvollziehbarer Historie im Audit-Log.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Tenant & Datenschutz",
    description:
      "Mehrere Betriebe sauber getrennt, rollenbasierte Rechte und DSGVO-konforme Export- sowie Löschanfragen integriert.",
  },
];

export function Features() {
  return (
    <section id="funktionen" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Funktionen
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Alles für den Alltag in Gastronomie, Pflege und Dienstleistung
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            PersonalPlaner verbindet Planung, Kommunikation und Zeitkonten in
            einer Oberfläche – entwickelt für Betriebe, die schnell planen und
            fair abrechnen müssen.
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
