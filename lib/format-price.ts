/** Format a numeric price string for display, per currency convention. */
export function formatPrice(amount: string, currency: string): string {
  if (currency === "USD") return `$${amount}`;
  if (currency === "GBP") return `£${amount}`;
  return `${currency} ${amount}`; // e.g. "CHF 2.90"
}
