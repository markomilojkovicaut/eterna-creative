"use client";

import { FeaturedReviewCard } from "@/components/ui/FeaturedReviewCard";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { Reveal } from "@/components/ui/Reveal";
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
      <Reveal>
        <SectionLabel tone="light">Client stories</SectionLabel>

        <LightEditorialDisplay className="mt-3 max-w-[520px]">
          <span className={lightEditorialLineClasses}>What founders say</span>
          <span className={lightEditorialAccentLineClasses}>after launch</span>
        </LightEditorialDisplay>
      </Reveal>

      <Reveal delay={80}>
        <FeaturedReviewCard review={featuredClientReview} className="mt-10" />
      </Reveal>

      <Reveal delay={160}>
        <ReviewCardsCarousel reviews={clientReviews} className="mt-6" />
      </Reveal>
    </div>
  );
}
