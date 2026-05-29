import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

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
                Jetzt starten
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Bereit, Ihre Personalplanung zu modernisieren?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-50">
                Wir zeigen Ihnen in einer kurzen Demo, wie PersonalPlaner in
                Ihrem Betrieb funktioniert – inklusive Planungsboard, Anträgen
                und Zeitkonten.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=Demo%20PersonalPlaner`}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-900 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                      E-Mail
                    </span>
                    <span className="block text-sm font-semibold">
                      {siteConfig.contactEmail}
                    </span>
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-400" />
                </a>

                <Button
                  href={siteConfig.appUrl}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center border-white/20 bg-white/10"
                >
                  <MessageSquare className="h-4 w-4" />
                  Live-App öffnen
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-brand-100/90">
                Keine Kreditkarte nötig · Demo-Zugang auf Anfrage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
