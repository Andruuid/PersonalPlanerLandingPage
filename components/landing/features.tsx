"use client";

import {
  CalendarRange,
  ClipboardCheck,
  Clock3,
  LayoutGrid,
  ShieldCheck,
  Users,
} from "lucide-react";
import { market } from "@/lib/markets";

const featureIcons = [
  LayoutGrid,
  Users,
  Clock3,
  CalendarRange,
  ClipboardCheck,
  ShieldCheck,
];

const { features } = market.home;

export function Features() {
  return (
    <section id="funktionen" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {features.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {features.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {features.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature, index) => {
            const Icon = featureIcons[index] ?? LayoutGrid;
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
