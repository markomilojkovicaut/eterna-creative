import Link from "next/link";

import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { cn } from "@/lib/utils";

/** Post-article tools row (calculator + newsletter) — kept off the reading column. */
export function BlogStickyAside({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "grid gap-4 sm:grid-cols-2 sm:items-stretch",
        className
      )}
    >
      <Link
        href="/tools/app-cost-calculator"
        className={cn(
          "group flex flex-col overflow-hidden rounded-soft border border-border-muted bg-bg-muted p-5 no-underline",
          "transition-colors hover:border-brand-purple/40"
        )}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple">
          Free tool
        </p>
        <p className="mt-2 font-heading text-heading-sm font-bold text-text-ink">
          App cost calculator
        </p>
        <p className="mt-2 flex-1 text-body-sm leading-relaxed text-text-ink-sub">
          Ballpark your build investment in ~3 minutes - before you book a call.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-brand-purple">
          Try calculator
          <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>

      <div className="min-h-[200px] overflow-hidden rounded-soft sm:min-h-0">
        <NewsletterSignup className="h-full min-h-[200px]" />
      </div>
    </aside>
  );
}
