import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";
import { ReviewStars } from "@/components/ui/ReviewStars";
import type { ClientReview } from "@/lib/client-stories";
import { lightResourceGradientClasses } from "@/lib/surface-styles";
import { cn } from "@/lib/utils";

export function ReviewCard({
  review,
  className,
}: {
  review: ClientReview;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-soft border p-5 sm:p-6",
        review.gradientCard
          ? lightResourceGradientClasses
          : "border-border-muted bg-bg-surface",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <ReviewAvatar name={review.name} src={review.avatarSrc} />
        <div className="min-w-0">
          <h3 className="font-heading text-body-md font-bold text-text-ink">
            {review.name}
          </h3>
          <p className="text-body-sm text-text-ink-muted">{review.role}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <ReviewStars />
        {review.reviewSource && (
          <Link
            href={review.reviewSource.href}
            className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-purple transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {review.reviewSource.label}
            <ArrowUpRight className="!h-3 !w-3" />
          </Link>
        )}
      </div>

      <p className="mt-4 flex-1 text-body-md leading-relaxed text-text-ink-sub">
        &ldquo;{review.quote}&rdquo;
      </p>
    </article>
  );
}
