import { Shield } from "lucide-react";

export type SecurityContactProps = {
  title: string;
  responsibleLine: string;
  email: string;
  pgpNote: string;
  slaLines: string[];
};

export function SecurityContact({
  title,
  responsibleLine,
  email,
  pgpNote,
  slaLines,
}: SecurityContactProps) {
  return (
    <section
      id="kontakt"
      aria-labelledby="security-contact-heading"
      className="scroll-mt-24 py-12 sm:py-16"
    >
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm">
          <Shield className="h-5 w-5" strokeWidth={2.1} aria-hidden />
        </div>
        <h2
          id="security-contact-heading"
          className="mt-5 text-2xl font-semibold tracking-tight text-slate-900"
        >
          {title}
        </h2>
        <p className="mt-4 text-slate-600">{responsibleLine}</p>
        <p className="mt-2 text-slate-600">
          E-Mail:{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            {email}
          </a>
          {" "}
          | {pgpNote}
        </p>
        <div className="mt-6 space-y-2 border-t border-brand-200/80 pt-6">
          <p className="text-sm font-semibold text-slate-900">SLA</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
            {slaLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
