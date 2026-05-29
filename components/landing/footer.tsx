import Link from "next/link";
import { LogoIcon, LogoWordmark } from "@/components/ui/logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-3">
            <LogoIcon size={36} />
            <div>
              <LogoWordmark size="sm" />
              <p className="mt-0.5 text-sm text-slate-500">{siteConfig.tagline}</p>
              <p className="mt-2 text-sm font-medium text-brand-700">
                Entwickelt in der Schweiz
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            ))}
            {siteConfig.footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-slate-500">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-medium text-slate-700 hover:text-slate-900"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="mt-2">© {year} {siteConfig.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
