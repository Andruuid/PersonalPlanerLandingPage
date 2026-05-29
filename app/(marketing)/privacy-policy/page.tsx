import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";
import { market } from "@/lib/markets";
import { MARKET } from "@/lib/market";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} – how we collect and use personal information, including CCPA/CPRA rights.`,
  path: "/privacy-policy",
});

const { breadcrumbHome } = market.ui.landingTemplate;

export default function PrivacyPolicyPage() {
  if (MARKET !== "US") notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {breadcrumbHome}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-4 text-slate-600">Last updated: May 2026</p>

      <div className="mt-8 space-y-8 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Who we are</h2>
          <p className="mt-3">
            This site is operated by {siteConfig.name}. You can reach us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-brand-700 hover:text-brand-800"
            >
              {siteConfig.contactEmail}
            </a>
            . The legal entity name and mailing address will be added before
            launch.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            2. Information we collect
          </h2>
          <p className="mt-3">
            When you visit this website, technical access data (such as IP
            address, browser type, and timestamp) is processed in server logs as
            needed for operation and security.
          </p>
          <p className="mt-3">
            When you join the waitlist, we process your email address and,
            optionally, your industry and team size so we can let you know when{" "}
            {siteConfig.name} is available.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Form processing</h2>
          <p className="mt-3">
            Form submissions may be processed through Formspree (Formspree Inc.,
            USA). The privacy terms of that provider apply to data processed on
            their platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            4. How we use information
          </h2>
          <p className="mt-3">
            We use the information above to operate the site and to contact you
            about the product launch. We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            5. Your privacy rights (CCPA/CPRA)
          </h2>
          <p className="mt-3">
            Depending on where you live, you may have the right to know what
            personal information we hold, request its deletion or correction, and
            opt out of the sale or sharing of personal information. California
            residents have these rights under the CCPA/CPRA. We do not sell
            personal information. To exercise any of these rights, contact{" "}
            {siteConfig.contactEmail}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6. Data retention and security
          </h2>
          <p className="mt-3">
            Access is role-based, and we keep personal information only as long
            as needed for the purposes described here. Hosting provider, storage
            location, and detailed retention periods will be added before launch.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Contact</h2>
          <p className="mt-3">
            Questions about this policy? Email{" "}
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
