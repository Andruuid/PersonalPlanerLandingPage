import { siteConfig } from "@/lib/site-config";
import { WaitlistForm } from "@/components/landing/waitlist-form";

export function Cta() {
  return (
    <section id="kontakt" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-12 text-white shadow-2xl shadow-brand-700/25 sm:px-10 sm:py-14">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">
                Warteliste
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Bereit, Ihre Personalplanung zu modernisieren?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-50">
                Hinterlassen Sie Ihre E-Mail – wir informieren Sie, sobald
                PersonalPlaner für Ihren Betrieb verfügbar ist.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <WaitlistForm />

              <p className="mt-4 text-center text-xs text-brand-100/90">
                Keine Kreditkarte nötig · Unverbindlich · Jederzeit abmeldbar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
