import Link from "next/link";

import { QuoteIcon } from "@/components/ui/QuoteIcon";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";
import type { SectionQuote } from "@/lib/section-quotes";
import { cn } from "@/lib/utils";

/**
 * Compact pull quote for dark homepage sections - adds voice between card grids
 * without opening a full testimonials chapter.
 */
export function SectionPullQuote({
  quote,
  className,
}: {
  quote: SectionQuote;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-soft border border-border-dark bg-bg-card/25 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-purple-dark/35 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="min-w-0 max-w-[720px]">
          <QuoteIcon className="mb-5" />
          <blockquote className="font-heading text-[1.25rem] font-normal leading-[1.35] tracking-[-0.02em] text-text-heading sm:text-[1.5rem] lg:text-[1.625rem]">
            &ldquo;{quote.quote}&rdquo;
          </blockquote>
        </div>

        <figcaption className="flex shrink-0 items-center gap-3 lg:flex-col lg:items-end lg:text-right">
          <ReviewAvatar name={quote.name} src={quote.avatarSrc} size="md" />
          <div className="min-w-0">
            <p className="font-heading text-body-sm font-bold text-text-heading">
              {quote.name}
            </p>
            <p className="text-body-sm text-text-sub">{quote.role}</p>
            {quote.reviewSource ? (
              <Link
                href={quote.reviewSource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-purple-light hover:text-text-heading"
              >
                {quote.reviewSource.label}
              </Link>
            ) : null}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
