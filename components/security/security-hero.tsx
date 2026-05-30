import { SecurityStatusIndicator } from "@/components/security/security-status-indicator";
import type { SecurityStatusIndicatorProps } from "@/components/security/security-status-indicator";

export type SecurityHeroProps = {
  title: string;
  subline: string;
  updatedAtLabel: string;
  status?: SecurityStatusIndicatorProps;
};

export function SecurityHero({
  title,
  subline,
  updatedAtLabel,
  status,
}: SecurityHeroProps) {
  return (
    <header className="border-b border-slate-200 pb-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{subline}</p>
          <p className="mt-4 text-sm text-slate-500">{updatedAtLabel}</p>
        </div>
        {status ? (
          <SecurityStatusIndicator
            status={status.status}
            label={status.label}
            className="shrink-0 self-start"
          />
        ) : null}
      </div>
    </header>
  );
}
