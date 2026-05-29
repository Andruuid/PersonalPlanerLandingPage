import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Stammdaten anlegen",
    description:
      "Mitarbeitende, Pensum, Standorte und Dienstvorlagen einmal sauber erfassen – die Basis für jede Woche.",
  },
  {
    number: "02",
    title: "Woche planen & veröffentlichen",
    description:
      "Im Drag-and-Drop-Raster Dienste zuweisen, KPIs prüfen und die Woche für das Team freigeben.",
  },
  {
    number: "03",
    title: "Wünsche bearbeiten",
    description:
      "Anträge landen direkt im Planungsboard. Admins entscheiden im Kontext – ohne Medienbruch.",
  },
  {
    number: "04",
    title: "Zeitkonten aktualisieren",
    description:
      "Nach Abschluss der Woche werden Salden automatisch gebucht. Korrekturen bleiben auditierbar.",
  },
];

const adminBenefits = [
  "Weniger manuelle Nacharbeit",
  "Klare Wochenstatus & Verantwortlichkeiten",
  "Volle Historie aller Änderungen",
];

const employeeBenefits = [
  "Eigene Woche jederzeit einsehbar",
  "Anträge ohne Papierformular",
  "Transparente Kontostände",
];

export function Workflow() {
  return (
    <section id="ablauf" className="border-y border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Ablauf
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Vom Entwurf bis zum Zeitkonto in vier Schritten
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              PersonalPlaner spiegelt den echten Betriebsalltag: Planen,
              kommunizieren, entscheiden – und am Ende sauber abrechnen.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <BenefitCard title="Für Admins" items={adminBenefits} />
              <BenefitCard title="Für Mitarbeitende" items={employeeBenefits} />
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-slate-50/70 p-5 pl-6 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
              >
                {index < steps.length - 1 ? (
                  <span className="absolute bottom-0 left-8 hidden h-full w-px translate-y-1/2 bg-gradient-to-b from-brand-200 to-transparent sm:block" />
                ) : null}
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold tracking-widest text-brand-600">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Bereit für den nächsten Schritt?
                  </p>
                  <p className="mt-1 text-base font-semibold">
                    Live-Demo mit echten Planungs-Szenarien
                  </p>
                </div>
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-300 sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
