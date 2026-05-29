import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";
import { market } from "@/lib/markets";
import { MARKET } from "@/lib/market";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
  path: "/terms",
});

const { breadcrumbHome } = market.ui.landingTemplate;

export default function TermsPage() {
  if (MARKET !== "US") notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Terms</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-4 text-slate-600">Last updated: May 2026</p>

      <div className="mt-8 space-y-8 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of terms</h2>
          <p className="mt-3">
            By accessing this website you agree to these Terms of Service. If you
            do not agree, please do not use the site. The legal entity, governing
            law, and jurisdiction will be specified before launch.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. The service</h2>
          <p className="mt-3">
            This website presents information about {siteConfig.name} and lets you
            join a waitlist ahead of launch. Features and availability may change.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Waitlist</h2>
          <p className="mt-3">
            Joining the waitlist means providing an email address so we can notify
            you about availability. It creates no obligation for you or for us, and
            you can ask to be removed at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Intellectual property</h2>
          <p className="mt-3">
            The content, branding, and design of this site are owned by{" "}
            {siteConfig.name} and may not be copied or reused without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Disclaimer</h2>
          <p className="mt-3">
            This site is provided “as is,” without warranties of any kind. We make
            no guarantee that the information is complete, accurate, or current.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6. Limitation of liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, {siteConfig.name} is not liable
            for any damages arising from your use of this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Changes to these terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the site
            after changes take effect constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
          <p className="mt-3">
            Questions about these terms? Email{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-brand-700 hover:text-brand-800"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
