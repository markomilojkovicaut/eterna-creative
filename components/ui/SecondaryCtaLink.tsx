import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { cn } from "@/lib/utils";

export interface SecondaryCtaLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "className"> {
  children: React.ReactNode;
  className?: string;
}

/** Outlined dark-section CTA — semi-transparent fill, subtle border. */
export function SecondaryCtaLink({
  children,
  className,
  ...props
}: SecondaryCtaLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-soft border border-border-dark",
        "bg-bg-card/60 px-6 py-[10px] text-body-md font-medium text-text-heading",
        "no-underline transition-colors hover:border-border-strong hover:bg-bg-card/80",
        className
      )}
      {...props}
    >
      {children}
      <ArrowUpRight className="!text-brand-purple-light" />
    </Link>
  );
}
