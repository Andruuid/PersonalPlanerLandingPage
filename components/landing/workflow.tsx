import { ArrowRight, CheckCircle2 } from "lucide-react";
import { market } from "@/lib/markets";

const { workflow } = market.home;

export function Workflow() {
  return (
    <section id="ablauf" className="scroll-mt-24 border-y border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              {workflow.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {workflow.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {workflow.intro}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <BenefitCard title={workflow.adminTitle} items={workflow.adminBenefits} />
              <BenefitCard
                title={workflow.employeeTitle}
                items={workflow.employeeBenefits}
              />
            </div>
          </div>

          <ol className="space-y-4">
            {workflow.steps.map((step) => (
              <li
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-brand-600/5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
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
                <ArrowRight className="absolute bottom-5 right-5 h-5 w-5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500" />
              </li>
            ))}
          </ol>
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
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
