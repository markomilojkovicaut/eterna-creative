"use client";

import { FeaturedReviewCard } from "@/components/ui/FeaturedReviewCard";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { ReviewCardsCarousel } from "@/components/ui/ReviewCardsCarousel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { clientReviews, featuredClientReview } from "@/lib/client-stories";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";

export function ClientStories() {
  return (
    <div>
      <SectionLabel tone="light">Client stories</SectionLabel>

      <LightEditorialDisplay className="mt-3 max-w-[520px]">
        <span className={lightEditorialLineClasses}>What founders say</span>
        <span className={lightEditorialAccentLineClasses}>after launch</span>
      </LightEditorialDisplay>

      <FeaturedReviewCard review={featuredClientReview} className="mt-10" />

      <ReviewCardsCarousel reviews={clientReviews} className="mt-6" />
    </div>
  );
}
