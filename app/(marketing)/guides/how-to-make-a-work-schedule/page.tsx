import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { WaitlistLink } from "@/components/ui/waitlist-link";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { market } from "@/lib/markets";
import { MARKET } from "@/lib/market";

export const metadata = createPageMetadata({
  title: "How to Make a Work Schedule – A Guide for Small Businesses",
  description:
    "How to make a work schedule for your small business: step by step from team setup to publishing — and when scheduling software beats a spreadsheet.",
  path: "/guides/how-to-make-a-work-schedule",
  keywords: [
    "how to make a work schedule",
    "work schedule maker",
    "employee scheduling guide",
  ],
});

const { breadcrumbHome } = market.ui.landingTemplate;

const breadcrumbs = [
  { name: breadcrumbHome, path: "/" },
  { name: "Guides", path: "/guides/how-to-make-a-work-schedule" },
];

export default function HowToMakeAWorkScheduleArticle() {
  if (MARKET !== "US") notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            {breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Guides</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          How to make a work schedule: a guide for US small businesses
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A good weekly schedule saves time, prevents miscommunication, and keeps
          time off fair. Here&apos;s how to do it step by step — and when software
          beats a spreadsheet.
        </p>

        <div className="mt-10 space-y-10 text-slate-600">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Set up your team data
            </h2>
            <p className="mt-4 leading-relaxed">
              Before you plan the first week, you need a clean foundation:
              employees, roles, availability, locations, and shift templates (AM,
              PM, all-day). The clearer this data, the faster ongoing scheduling
              becomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Structure the week
            </h2>
            <p className="mt-4 leading-relaxed">
              Plan the days with the highest staffing needs first — for example,
              Saturdays in retail or Friday nights in a restaurant. Check minimum
              coverage per shift and flag open gaps before you handle requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Factor in requests and time off
            </h2>
            <p className="mt-4 leading-relaxed">
              Time-off and availability requests belong in the same process as the
              schedule — not in separate chats. That way you catch conflicts early
              and can decide fairly. If you operate where Fair Workweek rules
              apply, post the schedule well in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Publish and communicate the schedule
            </h2>
            <p className="mt-4 leading-relaxed">
              A schedule only helps if everyone sees it. Publish the weekly
              schedule centrally — ideally so employees can pull it up on mobile,
              without forwarding PDFs or screenshots.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              When is scheduling software worth it?
            </h2>
            <p className="mt-4 leading-relaxed">
              At around five employees, the effort with a spreadsheet climbs fast.
              A cloud tool like EasyTeamPlan combines scheduling, hours, and PTO —
              from $2.99 per employee per month.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <Link href="/excel-schedule-alternative" className="text-brand-700 hover:text-brand-800">
                  Excel schedule alternative
                </Link>
              </li>
              <li>
                <Link href="/shift-scheduling-software" className="text-brand-700 hover:text-brand-800">
                  Shift scheduling software
                </Link>
              </li>
              <li>
                <Link href="/restaurant-employee-scheduling" className="text-brand-700 hover:text-brand-800">
                  Restaurant employee scheduling
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <p className="font-semibold text-slate-900">Try EasyTeamPlan</p>
          <p className="mt-2 text-slate-600">
            Join the waitlist — we&apos;ll let you know at launch.
          </p>
          <WaitlistLink className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </WaitlistLink>
        </div>
      </article>
    </>
  );
}
