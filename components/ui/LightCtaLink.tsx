import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { ctaSizeClasses } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

export interface LightCtaLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "className"> {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof ctaSizeClasses;
}

/** Dark CTA for light sections — black background, white text, pink arrow. */
export function LightCtaLink({
  children,
  className,
  size = "default",
  ...props
}: LightCtaLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-soft bg-text-ink font-semibold !text-bg-surface no-underline transition-opacity hover:opacity-90",
        ctaSizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
      <ArrowUpRight />
    </Link>
  );
}
