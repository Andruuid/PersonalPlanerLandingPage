export function focusWaitlistEmail() {
  const input = document.getElementById("waitlist-email");

  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  input.scrollIntoView({ behavior: "smooth", block: "center" });
  window.history.replaceState(null, "", "#waitlist-email");

  window.setTimeout(() => {
    input.focus({ preventScroll: true });
  }, 450);
}
