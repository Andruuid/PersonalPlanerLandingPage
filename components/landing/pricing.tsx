import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/seo/pricing-data";
import { cn } from "@/lib/utils";

const badgeClasses = {
  Starter: "bg-brand-50 text-brand-700",
  Plus: "bg-amber-50 text-amber-700",
} as const;

export function Pricing() {
  return (
    <section id="preisgestaltung" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Preisgestaltung
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Transparente Preise für kleine Teams in der Schweiz
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Ab CHF 2.90 pro Mitarbeiter und Monat – ohne versteckte Kosten,
            monatlich kündbar. Beispiel: 10 Mitarbeitende = CHF 29 pro Monat.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-[1.75rem] border bg-white p-8 shadow-sm",
                plan.popular
                  ? "border-amber-200 shadow-lg shadow-amber-600/5"
                  : "border-slate-200",
              )}
            >
              {plan.popular ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Am beliebtesten
                </div>
              ) : null}

              <span
                className={cn(
                  "inline-flex w-fit rounded-lg px-3 py-1 text-sm font-semibold uppercase tracking-wide",
                  badgeClasses[plan.name],
                )}
              >
                {plan.name}
              </span>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-semibold tracking-tight text-slate-900">
                  CHF {plan.price}
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-slate-700">
                {plan.subtitle}
              </p>
              <p className="mt-1 text-sm text-slate-500">{plan.note}</p>

              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                {plan.description}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#waitlist-email"
                className="mt-8 w-full justify-center"
                size="lg"
              >
                Jetzt vormerken – ab CHF {plan.price}/MA
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
