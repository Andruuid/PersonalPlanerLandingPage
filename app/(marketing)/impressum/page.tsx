import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";
import { MARKET } from "@/lib/market";

export const metadata = createPageMetadata({
  title: "Impressum",
  description: `Impressum und Kontakt – ${siteConfig.legal?.companyName ?? siteConfig.name}, Personalplanung Software für Schweizer KMU.`,
  path: "/impressum",
});

export default function ImpressumPage() {
  if (MARKET !== "CH" || !siteConfig.legal) notFound();

  const legal = siteConfig.legal;

  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          Startseite
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Impressum</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Impressum</h1>

      <div className="prose prose-slate mt-8 max-w-none space-y-6 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Anbieter</h2>
          <p>{legal.companyName}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-brand-700 hover:text-brand-800"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Verantwortlich für den Inhalt
          </h2>
          <p>{legal.contentResponsible}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
      </div>
    </article>
  );
}
