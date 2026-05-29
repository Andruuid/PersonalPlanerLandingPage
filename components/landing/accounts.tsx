import { BadgeCheck, PiggyBank, Scale, Timer } from "lucide-react";

const accounts = [
  {
    icon: Timer,
    name: "Zeitsaldo",
    description: "Über- und Unterstunden transparent nach Soll/Ist pro Woche.",
    tone: "from-brand-500/15 to-brand-500/5 text-brand-800",
  },
  {
    icon: PiggyBank,
    name: "Ferien",
    description: "Ferienanspruch, Bezüge und Resttage immer nachvollziehbar.",
    tone: "from-sky-500/15 to-sky-500/5 text-sky-900",
  },
  {
    icon: Scale,
    name: "UEZ & TZT",
    description: "Überstunden und Zeitausgleich nach Schweizer Praxis abbilden.",
    tone: "from-violet-500/15 to-violet-500/5 text-violet-900",
  },
  {
    icon: BadgeCheck,
    name: "Audit-Log",
    description: "Jede Buchung und jede Planänderung bleibt revisionssicher.",
    tone: "from-amber-500/15 to-amber-500/5 text-amber-900",
  },
];

export function Accounts() {
  return (
    <section id="zeitkonten" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                Zeitkonten
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Faire Abrechnung statt Excel-Tabellen
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                PersonalPlaner führt Zeitsaldo, Ferien, UEZ und TZT zentral –
                mit automatischen Wochenbuchungen, manuellen Korrekturen und
                vollständigem Audit-Trail für Vertrauen auf beiden Seiten.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {accounts.map((account) => (
                <article
                  key={account.name}
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br ${account.tone} p-5 backdrop-blur-sm`}
                >
                  <account.icon className="h-5 w-5" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {account.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">
                    {account.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
