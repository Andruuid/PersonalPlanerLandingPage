import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const logoColors = {
  teal: "#16a095",
  navy: "#0d2c5c",
  orange: "#f37032",
  light: "#d9eded",
} as const;

type LogoIconProps = {
  size?: number;
  className?: string;
};

export function LogoIcon({ size = 36, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      {/* Calendar rings */}
      <rect x="18" y="5" width="5" height="9" rx="2.5" fill={logoColors.teal} />
      <rect x="33" y="5" width="5" height="9" rx="2.5" fill={logoColors.teal} />

      {/* Calendar frame */}
      <rect
        x="8"
        y="12"
        width="40"
        height="34"
        rx="5"
        stroke={logoColors.teal}
        strokeWidth="2.5"
        fill="white"
      />

      {/* Grid cells — row 0 */}
      <rect x="12" y="17" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />
      <rect x="21.5" y="17" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />
      <rect x="31" y="17" width="7.5" height="7.5" rx="1.5" fill={logoColors.teal} />
      <rect x="40.5" y="17" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />

      {/* Grid cells — row 1 */}
      <rect x="12" y="26.5" width="7.5" height="7.5" rx="1.5" fill={logoColors.teal} />
      <rect x="21.5" y="26.5" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />
      <rect x="31" y="26.5" width="7.5" height="7.5" rx="1.5" fill={logoColors.orange} />
      <rect x="40.5" y="26.5" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />

      {/* Checkmark on orange cell */}
      <path
        d="M33.5 30.5 L35.5 32.5 L38.5 28.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Grid cells — row 2 */}
      <rect x="12" y="36" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />
      <rect x="21.5" y="36" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />
      <rect x="31" y="36" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />
      <rect x="40.5" y="36" width="7.5" height="7.5" rx="1.5" fill={logoColors.light} />

      {/* People silhouettes */}
      <circle cx="17" cy="44" r="4.5" fill={logoColors.teal} />
      <path
        d="M11 56 C11 50.5 14 48 17 48 C20 48 23 50.5 23 56"
        fill={logoColors.teal}
      />

      <circle cx="28" cy="42.5" r="5.5" fill={logoColors.navy} />
      <path
        d="M20 56 C20 49 23.5 46 28 46 C32.5 46 36 49 36 56"
        fill={logoColors.navy}
      />

      <circle cx="39" cy="44" r="4.5" fill={logoColors.teal} />
      <path
        d="M33 56 C33 50.5 36 48 39 48 C42 48 45 50.5 45 56"
        fill={logoColors.teal}
      />
    </svg>
  );
}

type LogoWordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function LogoWordmark({ className, size = "md" }: LogoWordmarkProps) {
  return (
    <span
      className={cn(
        "font-logo font-bold leading-none tracking-tight",
        size === "sm" && "text-lg",
        size === "md" && "text-[1.35rem]",
        size === "lg" && "text-2xl",
        className,
      )}
    >
      <span style={{ color: logoColors.teal }}>{siteConfig.wordmark.first}</span>
      <span style={{ color: logoColors.navy }}>{siteConfig.wordmark.second}</span>
    </span>
  );
}

type LogoProps = {
  className?: string;
  iconSize?: number;
  wordmarkSize?: "sm" | "md" | "lg";
};

export function Logo({ className, iconSize = 36, wordmarkSize = "md" }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoIcon size={iconSize} />
      <LogoWordmark size={wordmarkSize} />
    </span>
  );
}

export function LogoLink({
  className,
  iconSize = 36,
  wordmarkSize = "md",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={siteConfig.logoAriaLabel}
    >
      <Logo iconSize={iconSize} wordmarkSize={wordmarkSize} />
    </Link>
  );
}
