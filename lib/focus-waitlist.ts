import type { MouseEvent } from "react";

export const WAITLIST_HASH = "#waitlist-email";
export const WAITLIST_PATH = `/${WAITLIST_HASH}`;

export function isWaitlistHref(href: string): boolean {
  const normalized = href.trim();
  return (
    normalized === WAITLIST_HASH ||
    normalized === WAITLIST_PATH ||
    normalized.endsWith(WAITLIST_HASH)
  );
}

function focusWaitlistInput(): boolean {
  const input = document.getElementById("waitlist-email");

  if (!(input instanceof HTMLInputElement)) {
    return false;
  }

  input.scrollIntoView({ behavior: "smooth", block: "center" });

  if (window.location.pathname === "/") {
    window.history.replaceState(null, "", WAITLIST_HASH);
  }

  window.setTimeout(() => {
    input.focus({ preventScroll: true });
  }, 350);

  return true;
}

export function focusWaitlistEmail(retry = 0): void {
  if (focusWaitlistInput()) {
    return;
  }

  if (window.location.pathname !== "/") {
    window.location.assign(WAITLIST_PATH);
    return;
  }

  if (retry < 10) {
    window.setTimeout(() => focusWaitlistEmail(retry + 1), 100);
  }
}

export function handleWaitlistClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
): void {
  event.preventDefault();

  if (window.location.pathname !== "/") {
    window.location.assign(href.startsWith("/") ? href : WAITLIST_PATH);
    return;
  }

  focusWaitlistEmail();
}
