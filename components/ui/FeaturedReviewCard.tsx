import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { QuoteIcon } from "@/components/ui/QuoteIcon";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";
import type { FeaturedClientReview } from "@/lib/client-stories";
import { cn } from "@/lib/utils";

export function FeaturedReviewCard({
  review,
  className,
}: {
  review: FeaturedClientReview;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-soft border border-border-dark bg-bg-base p-6 lg:p-16",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-purple-dark via-bg-base to-bg-base"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16">
        <div className="min-w-0 max-w-[480px] flex-1">
          <QuoteIcon className="mb-6" />

          <blockquote className="font-heading text-[1.5rem] font-normal leading-[1.12] tracking-[-0.02em] text-text-heading sm:text-[1.75rem] lg:text-[2rem]">
            <span className="block">{review.quoteLine1}</span>
            <span className="block text-gradient-hero font-bold">
              {review.quoteLine2}
            </span>
            <span className="block">{review.quoteLine3}</span>
          </blockquote>

          <Link
            href={review.reviewSource.href}
            className="mt-8 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-purple-light transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {review.reviewSource.label}
            <ArrowUpRight className="!h-3.5 !w-3.5" />
          </Link>
        </div>

        <div className="flex w-full shrink-0 flex-col justify-between lg:w-[200px] lg:min-h-[220px]">
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <ReviewAvatar
              name={review.name}
              src={review.avatarSrc}
              size="featured"
            />
            <div className="min-w-0 text-left lg:text-right">
              <p className="font-heading text-body-md font-bold text-text-heading">
                {review.name}
              </p>
              <p className="text-body-sm text-text-sub">{review.role}</p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:flex lg:justify-end">
            {review.companyLogoSrc ? (
              <Image
                src={review.companyLogoSrc}
                alt={review.companyName ?? ""}
                width={120}
                height={32}
                className="h-6 w-auto max-w-[120px] object-contain object-left lg:object-right"
              />
            ) : review.companyName ? (
              <p className="text-body-sm font-medium text-text-sub">
                {review.companyName}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
