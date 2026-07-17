"use client";

import { useCallback, useState } from "react";

import { ReviewCard } from "@/components/ui/ReviewCard";
import type { ClientReview } from "@/lib/client-stories";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 3;

const navButtonClasses = cn(
  "inline-flex size-11 shrink-0 items-center justify-center rounded-soft border border-border-muted",
  "bg-bg-muted text-body-md font-medium text-text-ink",
  "transition-colors hover:border-border-strong hover:bg-bg-surface",
  "disabled:pointer-events-none disabled:opacity-40"
);

export function ReviewCardsCarousel({
  reviews,
  className,
}: {
  reviews: ClientReview[];
  className?: string;
}) {
  const maxStartIndex = Math.max(0, reviews.length - VISIBLE_COUNT);
  const [startIndex, setStartIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStartIndex;

  const goTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex < 0 || nextIndex > maxStartIndex) return;
      setStartIndex(nextIndex);
    },
    [maxStartIndex]
  );

  if (reviews.length === 0) return null;

  return (
    <div
      className={cn(
        "relative [--slide-step:calc((100%-2*1.25rem)/3+1.25rem)]",
        className
      )}
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-1 * ${startIndex} * var(--slide-step)))`,
          }}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              className="w-[calc((100%-2*1.25rem)/3)] shrink-0"
            />
          ))}
        </div>
      </div>

      {reviews.length > VISIBLE_COUNT && (
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(startIndex - 1)}
            disabled={!canGoPrev}
            className={navButtonClasses}
            aria-label="Previous testimonial"
          >
            <span aria-hidden>←</span>
          </button>

          <button
            type="button"
            onClick={() => goTo(startIndex + 1)}
            disabled={!canGoNext}
            className={navButtonClasses}
            aria-label="Next testimonial"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
