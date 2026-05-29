import Link from "next/link";
import { faqItems } from "@/lib/seo/faq-data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Häufige Fragen zur Personalplanung Software
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Antworten zu Dienstplan, Ferienplanung und Kosten – für Schweizer KMU.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-brand-600 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Weitere Antworten finden Sie auf der{" "}
          <Link href="/faq" className="font-medium text-brand-700 hover:text-brand-800">
            FAQ-Seite
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
