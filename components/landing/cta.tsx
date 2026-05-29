import { siteConfig } from "@/lib/site-config";
import { WaitlistForm } from "@/components/landing/waitlist-form";

export function Cta() {
  return (
    <section id="kontakt" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-700 to-brand-800 px-6 py-10 text-white shadow-2xl shadow-brand-900/20 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.06),transparent_50%)]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-200">
                Warteliste
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Bereit, Ihre Personalplanung zu modernisieren?
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-50/90">
                Hinterlassen Sie Ihre E-Mail – wir informieren Sie, sobald
                PersonalPlaner für Ihren Betrieb verfügbar ist.
              </p>
            </div>

            <div className="w-full shrink-0 lg:max-w-[26rem]">
              <WaitlistForm />

              <p className="mt-4 text-center text-xs leading-relaxed text-brand-100/75 lg:text-left">
                Keine Kreditkarte nötig · Unverbindlich · Jederzeit abmeldbar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
