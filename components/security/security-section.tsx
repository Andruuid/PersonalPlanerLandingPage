import { cn } from "@/lib/utils";

export type SecuritySectionProps = {
  id: string;
  eyebrow: string;
  heading: string;
  columns?: 2 | 3;
  children: React.ReactNode;
};

const columnClasses: Record<2 | 3, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

export function SecuritySection({
  id,
  eyebrow,
  heading,
  columns = 3,
  children,
}: SecuritySectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
      >
        {heading}
      </h2>
      <div className={cn("mt-10 grid gap-6", columnClasses[columns])}>
        {children}
      </div>
    </section>
  );
}
