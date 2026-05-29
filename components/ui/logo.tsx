import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

export function Logo({ className, height = 36, priority = false }: LogoProps) {
  return (
    <Image
      src="/easyplan-logo.png"
      alt="easyplan"
      width={Math.round(height * 4.2)}
      height={height}
      className={cn("h-auto w-auto", className)}
      style={{ height, width: "auto" }}
      priority={priority}
    />
  );
}

export function LogoLink({
  className,
  height = 36,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <Logo height={height} priority />
    </Link>
  );
}
