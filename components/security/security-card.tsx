import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type SecurityCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  hrefLabel?: string;
};

export function SecurityCard({
  icon: Icon,
  title,
  description,
  badge,
  href,
  hrefLabel,
}: SecurityCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      {badge ? (
        <p
          className={cn(
            "mt-3 inline-flex rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800",
          )}
        >
          {badge}
        </p>
      ) : null}
      {href && hrefLabel ? (
        <a
          href={href}
          className="mt-3 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          {...(href.startsWith("http") ? { rel: "noopener noreferrer", target: "_blank" } : {})}
        >
          {hrefLabel} →
        </a>
      ) : null}
    </article>
  );
}
