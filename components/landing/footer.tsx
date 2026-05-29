import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <CalendarDays className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-slate-900">{siteConfig.name}</p>
            <p className="text-sm text-slate-500">{siteConfig.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </a>
          ))}
          <Link
            href={siteConfig.appUrl}
            className="hover:text-slate-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </Link>
        </nav>

        <p className="text-sm text-slate-500">
          © {year} {siteConfig.name}. Made in Switzerland.
        </p>
      </div>
    </footer>
  );
}
