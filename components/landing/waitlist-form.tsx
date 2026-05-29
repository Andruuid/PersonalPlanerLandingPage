"use client";

import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { focusWaitlistEmail } from "@/lib/focus-waitlist";

type FormStatus = "idle" | "loading" | "success" | "error";

const industries = [
  "Detailhandel",
  "Gastronomie",
  "Dienstleistung",
  "Coiffeur / Beauty",
  "Sonstiges",
];

const teamSizes = ["1–5", "6–10", "11–20", "21–50", "50+"];

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (window.location.hash === "#waitlist-email") {
      focusWaitlistEmail();
    }

    function onHashChange() {
      if (window.location.hash === "#waitlist-email") {
        focusWaitlistEmail();
      }
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.includes("@")) {
      setStatus("error");
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    const endpoint = siteConfig.formspreeEndpoint;

    if (!endpoint) {
      setEmail("");
      setIndustry("");
      setTeamSize("");
      setStatus("success");
      setError("");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          industry: industry || undefined,
          teamSize: teamSize || undefined,
          source: siteConfig.source,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        setError(`Senden fehlgeschlagen (${response.status}). Bitte erneut versuchen.`);
        return;
      }

      setEmail("");
      setIndustry("");
      setTeamSize("");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.");
    }
  }

  const isLoading = status === "loading";

  if (status === "success") {
    return (
      <div
        role="status"
        className="scroll-mt-28 rounded-xl bg-white/10 px-6 py-8 text-center backdrop-blur-sm"
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-brand-100"
          aria-hidden="true"
        />
        <p className="mt-4 text-base font-semibold text-white">
          Danke! Wir melden uns bald bei Ihnen.
        </p>
        <p className="mt-2 text-sm text-brand-100/90">
          Sie sind auf der Warteliste eingetragen.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="scroll-mt-28 space-y-3">
        <div className="relative min-w-0">
          <label htmlFor="waitlist-email" className="sr-only">
            E-Mail
          </label>
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-600"
            aria-hidden="true"
          />
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "error") {
                setStatus("idle");
                setError("");
              }
            }}
            disabled={isLoading}
            placeholder="ihre@email.ch"
            className="w-full scroll-mt-28 rounded-xl border-0 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 shadow-lg shadow-black/10 outline-none placeholder:font-normal placeholder:text-slate-400 focus:ring-2 focus:ring-white/40 disabled:opacity-60"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="waitlist-industry" className="sr-only">
              Branche
            </label>
            <select
              id="waitlist-industry"
              name="industry"
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
              disabled={isLoading}
              className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-sm text-slate-900 shadow-lg shadow-black/10 outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-60"
            >
              <option value="">Branche (optional)</option>
              {industries.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="waitlist-team-size" className="sr-only">
              Teamgrösse
            </label>
            <select
              id="waitlist-team-size"
              name="teamSize"
              value={teamSize}
              onChange={(event) => setTeamSize(event.target.value)}
              disabled={isLoading}
              className="w-full rounded-xl border-0 bg-white/95 px-4 py-3 text-sm text-slate-900 shadow-lg shadow-black/10 outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-60"
            >
              <option value="">Teamgrösse (optional)</option>
              {teamSizes.map((value) => (
                <option key={value} value={value}>
                  {value} Mitarbeitende
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-50 px-6 py-3.5 text-sm font-semibold text-brand-800 shadow-lg shadow-black/10 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Wird gesendet …
            </>
          ) : (
            <>
              Kostenlos vormerken
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {status === "error" && error ? (
        <div aria-live="polite" className="mt-3 text-sm">
          <p className="text-red-200">{error}</p>
        </div>
      ) : null}
    </div>
  );
}
