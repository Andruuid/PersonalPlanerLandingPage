"use client";

import Link from "next/link";
import { handleWaitlistClick, isWaitlistHref } from "@/lib/focus-waitlist";

type WaitlistLinkProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export function WaitlistLink({
  href = "/#waitlist-email",
  className,
  children,
}: WaitlistLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        if (isWaitlistHref(href)) {
          handleWaitlistClick(event, href);
        }
      }}
    >
      {children}
    </Link>
  );
}
