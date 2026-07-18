import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { ctaSizeClasses } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

export interface CallToActionLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "className"> {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof ctaSizeClasses;
}

/** White CTA link - primary booking CTA style sitewide (8px vertical padding). */
export function CallToActionLink({
  children,
  className,
  size = "default",
  ...props
}: CallToActionLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-soft bg-text-heading font-semibold !text-bg-base no-underline transition-opacity hover:!text-bg-base hover:opacity-90 visited:!text-bg-base",
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
