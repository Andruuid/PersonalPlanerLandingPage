import Link from "next/link";
import { faqItems } from "@/lib/seo/faq-data";
import { market } from "@/lib/markets";

const { faq } = market.home;
const { sectionIds } = market.ui;

export function Faq() {
  return (
    <section id={sectionIds.faq} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {faq.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {faq.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{faq.intro}</p>
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
          {faq.footerLeading}
          <Link href="/faq" className="font-medium text-brand-700 hover:text-brand-800">
            {faq.footerLinkLabel}
          </Link>
          {faq.footerTrailing}
        </p>
      </div>
    </section>
  );
}
