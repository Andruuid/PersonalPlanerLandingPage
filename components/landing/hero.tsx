"use client";

import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { HeroHighlight } from "@/lib/markets/types";
import { Button } from "@/components/ui/button";
import { market } from "@/lib/markets";

const { hero } = market.home;
const { leadDescription } = market.config;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="hero-glow absolute inset-0 -z-10" />
      <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">
            <Sparkles className="h-4 w-4" />
            {hero.badge}
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            {hero.titleLead}{" "}
            <span className="bg-gradient-to-r from-brand-700 via-brand-500 to-sky-500 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {leadDescription} {hero.leadSuffix}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#waitlist-email" size="lg">
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="#waitlist-email"
              variant="ghost"
              size="lg"
              className="border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50"
            >
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="mt-10 space-y-3">
            {hero.highlights.map((item) => (
              <HeroHighlightItem key={highlightKey(item)} item={item} />
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-brand-300/30 blur-2xl lg:block" />
          <div className="absolute -right-4 bottom-6 hidden h-28 w-28 rounded-full bg-sky-300/30 blur-2xl lg:block" />

          <div className="animate-float rounded-[1.75rem] border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-900/10">
            <PlanningPreview />
          </div>

          <div className="absolute -bottom-4 -left-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-6">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {hero.preview.floatLeft.label}
            </p>
            <p className="mt-1 text-2xl font-semibold text-brand-700">
              {hero.preview.floatLeft.value}
            </p>
          </div>

          <div className="absolute -right-2 top-10 rounded-2xl border border-slate-200 bg-slate-900 px-4 py-3 text-white shadow-xl sm:-right-6">
            <p className="text-xs font-medium text-slate-300">
              {hero.preview.floatRight.label}
            </p>
            <p className="mt-1 text-sm font-semibold">{hero.preview.floatRight.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanningPreview() {
  const { preview } = hero;

  return (
    <div className="overflow-hidden rounded-[1.35rem] bg-slate-950 text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-xs text-slate-400">{preview.eyebrow}</p>
          <p className="text-sm font-medium">{preview.title}</p>
        </div>
        <span className="rounded-full bg-brand-500/20 px-2.5 py-1 text-xs font-medium text-brand-200">
          {preview.statusBadge}
        </span>
      </div>

      <div className="grid grid-cols-[88px_repeat(7,minmax(0,1fr))] gap-px bg-white/5 p-3 text-[11px]">
        <div />
        {preview.days.map((day) => (
          <div key={day} className="px-1 py-1 text-center font-medium text-slate-400">
            {day}
          </div>
        ))}

        {preview.rows.map((employee) => (
          <Fragment key={employee.name}>
            <div className="flex items-center px-2 font-medium text-slate-300">
              {employee.name}
            </div>
            {employee.shifts.map((shift, index) => (
              <div
                key={`${employee.name}-${index}`}
                className="flex min-h-10 items-center justify-center rounded-md bg-white/[0.03] p-1"
              >
                {shift === "off" ? (
                  <span className="text-slate-600">—</span>
                ) : (
                  <span
                    className={
                      shift === "morning"
                        ? "w-full rounded-md bg-brand-500/25 px-1 py-1.5 text-center text-[10px] font-medium text-brand-100"
                        : "w-full rounded-md bg-sky-500/25 px-1 py-1.5 text-center text-[10px] font-medium text-sky-100"
                    }
                  >
                    {shift === "morning"
                      ? preview.shiftLabels.morning
                      : preview.shiftLabels.late}
                  </span>
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 border-t border-white/10 px-4 py-3 text-center">
        {preview.metrics.map((metric) => (
          <Metric key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>
    </div>
  );
}

function highlightKey(item: HeroHighlight): string {
  return typeof item === "string" ? item : item.text;
}

function HeroHighlightItem({ item }: { item: HeroHighlight }) {
  const text = typeof item === "string" ? item : item.text;
  const href = typeof item === "string" ? undefined : item.href;

  return (
    <li className="flex items-start gap-3 text-sm text-slate-700">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
      {href ? (
        <Link
          href={href}
          className="hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
        >
          {text}
          <span className="font-semibold text-brand-700"> →</span>
        </Link>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
