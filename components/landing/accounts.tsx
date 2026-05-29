import { BadgeCheck, PiggyBank, Scale, Timer } from "lucide-react";
import { market } from "@/lib/markets";

const accountStyles = [
  { icon: Timer, tone: "from-brand-500/15 to-brand-500/5 text-brand-800" },
  { icon: PiggyBank, tone: "from-sky-500/15 to-sky-500/5 text-sky-900" },
  { icon: Scale, tone: "from-violet-500/15 to-violet-500/5 text-violet-900" },
  { icon: BadgeCheck, tone: "from-amber-500/15 to-amber-500/5 text-amber-900" },
];

const { accounts } = market.home;
const { sectionIds } = market.ui;

export function Accounts() {
  return (
    <section id={sectionIds.accounts} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                {accounts.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {accounts.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {accounts.intro}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {accounts.items.map((account, index) => {
                const style = accountStyles[index] ?? accountStyles[0];
                const Icon = style.icon;
                return (
                  <article
                    key={account.name}
                    className={`rounded-2xl border border-white/10 bg-gradient-to-br ${style.tone} p-5 backdrop-blur-sm`}
                  >
                    <Icon className="h-5 w-5" />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {account.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {account.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
