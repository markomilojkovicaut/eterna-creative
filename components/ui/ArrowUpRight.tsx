import { cn } from "@/lib/utils";

export interface ArrowUpRightProps {
  className?: string;
}

/** Short straight-right CTA arrow — used sitewide on primary CTAs. */
export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0 text-brand-pink", className)}
      aria-hidden
    >
      <path d="M5 12h12" />
      <path d="M13 7l5 5-5 5" />
    </svg>
  );
}
