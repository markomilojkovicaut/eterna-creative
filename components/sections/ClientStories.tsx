"use client";

import { FeaturedReviewCard } from "@/components/ui/FeaturedReviewCard";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clientReviews, featuredClientReview } from "@/lib/client-stories";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";

export function ClientStories() {
  return (
    <div>
      <Reveal>
        <SectionLabel tone="light">Client stories</SectionLabel>

        <LightEditorialDisplay className="mt-3 max-w-[520px]">
          <span className={lightEditorialLineClasses}>What founders say</span>
          <span className={lightEditorialAccentLineClasses}>after launch</span>
        </LightEditorialDisplay>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <Reveal delay={60} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <FeaturedReviewCard review={featuredClientReview} className="h-full" />
        </Reveal>

        {clientReviews.map((review, index) => (
          <Reveal key={review.id} delay={100 + index * 50}>
            <ReviewCard review={review} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
