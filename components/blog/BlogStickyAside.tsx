import Link from "next/link";

import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { cn } from "@/lib/utils";

export function BlogStickyAside({ className }: { className?: string }) {
  return (
    <aside className={cn("space-y-4", className)}>
      <Link
        href="/tools/app-cost-calculator"
        className={cn(
          "group block overflow-hidden rounded-soft border border-border-dark bg-bg-base p-5 no-underline",
          "transition-colors hover:border-border-strong"
        )}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
          Free tool
        </p>
        <p className="mt-2 font-heading text-heading-sm font-bold text-text-heading">
          App cost calculator
        </p>
        <p className="mt-2 text-body-sm leading-relaxed text-text-body">
          Ballpark your build investment in ~3 minutes - before you book a call.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-brand-purple-light">
          Try calculator
          <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>

      <div className="overflow-hidden rounded-soft">
        <NewsletterSignup className="min-h-[200px]" />
      </div>
    </aside>
  );
}
