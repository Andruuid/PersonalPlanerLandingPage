import { cn } from "@/lib/utils";
import type { SecurityStatus } from "@/lib/security-metrics";

export type SecurityStatusIndicatorProps = {
  status: SecurityStatus;
  label: string;
  className?: string;
};

const statusStyles: Record<
  SecurityStatus,
  { dot: string; ring: string; text: string }
> = {
  operational: {
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/20",
    text: "text-emerald-800",
  },
  degraded: {
    dot: "bg-amber-500",
    ring: "ring-amber-500/20",
    text: "text-amber-800",
  },
  outage: {
    dot: "bg-red-500",
    ring: "ring-red-500/20",
    text: "text-red-800",
  },
};

export function SecurityStatusIndicator({
  status,
  label,
  className,
}: SecurityStatusIndicatorProps) {
  const styles = statusStyles[status];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm",
        className,
      )}
    >
      <span
        className={cn(
          "relative flex h-2.5 w-2.5 shrink-0 rounded-full ring-4",
          styles.dot,
          styles.ring,
        )}
        aria-hidden
      />
      <span className={cn("font-medium", styles.text)}>{label}</span>
    </div>
  );
}
