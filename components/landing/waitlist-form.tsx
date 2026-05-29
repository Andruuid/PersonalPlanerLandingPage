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
        className="scroll-mt-28 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-slate-900"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <Mail className="h-5 w-5" aria-hidden="true" />
        </span>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="min-w-0 flex-1">
            <label
              htmlFor="waitlist-email"
              className="block text-xs font-medium uppercase tracking-wide text-slate-500"
            >
              E-Mail
            </label>
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
              className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:font-normal placeholder:text-slate-400 disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || status === "success"}
            aria-label="E-Mail senden"
            className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </form>

      <div aria-live="polite" className="mt-3 min-h-5 text-center text-xs">
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
