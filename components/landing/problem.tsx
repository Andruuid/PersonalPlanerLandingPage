import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { market } from "@/lib/markets";

const { problem } = market.home;

export function Problem() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {problem.heading}
          </h2>
          {problem.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={
                index === 0
                  ? "mt-6 text-lg leading-relaxed text-slate-600"
                  : "mt-4 text-lg leading-relaxed text-slate-600"
              }
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-4">
            {problem.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
