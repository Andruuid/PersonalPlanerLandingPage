import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";
import { MARKET } from "@/lib/market";

export const metadata = createPageMetadata({
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name} – Informationen zur Verarbeitung personenbezogener Daten.`,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  if (MARKET !== "CH") notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Datenschutz</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-slate-600">Stand: Mai 2026</p>

      <div className="mt-8 space-y-8 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Verantwortliche Stelle</h2>
          <p className="mt-3">
            Verantwortlich für die Datenbearbeitung ist{" "}
            {siteConfig.legal?.companyName ?? siteConfig.name}, erreichbar unter{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-brand-700 hover:text-brand-800"
            >
              {siteConfig.contactEmail}
            </a>
            . Weitere Angaben finden Sie im{" "}
            <Link href="/impressum" className="text-brand-700 hover:text-brand-800">
              Impressum
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            2. Erhebung und Zweck der Datenbearbeitung
          </h2>
          <p className="mt-3">
            Beim Besuch dieser Website werden technische Zugriffsdaten (z. B.
            IP-Adresse, Browsertyp, Zeitpunkt) in Server-Logfiles verarbeitet –
            soweit dies für Betrieb und Sicherheit erforderlich ist.
          </p>
          <p className="mt-3">
            Wenn Sie sich für die Warteliste anmelden, verarbeiten wir Ihre
            E-Mail-Adresse sowie optional Angaben zu Branche und Teamgrösse, um
            Sie über den Launch von easyplan zu informieren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Formular-Dienst</h2>
          <p className="mt-3">
            Formularübermittlungen können über Formspree (Formspree Inc., USA)
            verarbeitet werden. Es gelten die Datenschutzbestimmungen des
            jeweiligen Anbieters. [Auftragsbearbeitungsvertrag und
            Transfermechanismus dokumentieren]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Bearbeitung sowie
            Widerspruch. Wenden Sie sich dazu an {siteConfig.contactEmail}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Hosting</h2>
          <p className="mt-3">
            Diese Website wird bei einem Hosting-Anbieter betrieben. [Name und
            Standort des Hosters ergänzen]
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Technische Sicherheit
          </h2>
          <p className="mt-3">
            Details zu Infrastruktur, Verschlüsselung, Tests und Audit-Logs finden
            Sie auf unserer{" "}
            <Link
              href="/security"
              className="font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Sicherheitsseite
            </Link>{" "}
            (inkl.{" "}
            <Link
              href="/security#kontakt"
              className="font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Sicherheitskontakt
            </Link>
            ).
          </p>
        </section>
      </div>
    </article>
  );
}
