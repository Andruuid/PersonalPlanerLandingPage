"use client";

import { ArrowRight, Loader2, Mail } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { focusWaitlistEmail } from "@/lib/focus-waitlist";

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
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
          source: siteConfig.source,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        setError(`Senden fehlgeschlagen (${response.status}). Bitte erneut versuchen.`);
        return;
      }

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.");
    }
  }

  const isLoading = status === "loading";

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="scroll-mt-28 flex flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <div className="relative min-w-0 flex-1">
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
            disabled={isLoading || status === "success"}
            placeholder="ihre@email.ch"
            className="w-full rounded-xl border-0 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 shadow-lg shadow-black/10 outline-none placeholder:font-normal placeholder:text-slate-400 focus:ring-2 focus:ring-white/40 disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || status === "success"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-50 px-6 py-3.5 text-sm font-semibold text-brand-800 shadow-lg shadow-black/10 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <>
              Anmelden
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      <div aria-live="polite" className="mt-3 min-h-5 text-sm">
        {status === "success" ? (
          <p className="text-brand-100">Danke! Wir melden uns bald bei Ihnen.</p>
        ) : null}
        {status === "error" && error ? (
          <p className="text-red-200">{error}</p>
        ) : null}
      </div>
    </div>
  );
}
