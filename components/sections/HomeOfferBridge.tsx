import { Section } from "@/components/layout/Section";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";

/**
 * Quiet white bridge between Start here (offer) and Challenges (how).
 * Gives the page a breath before the problem narrative.
 */
export function HomeOfferBridge() {
  return (
    <Section background="surface" className="!py-16 text-text-ink-sub sm:!py-20">
      <div className="mx-auto max-w-[640px] text-center">
        <LightEditorialDisplay className="text-[28px] sm:text-[32px] lg:text-[32px]">
          <span className={lightEditorialLineClasses}>
            You know where you stand.
          </span>{" "}
          <span className={lightEditorialAccentLineClasses}>
            Next we name what usually breaks.
          </span>
        </LightEditorialDisplay>
        <p className="mx-auto mt-5 max-w-[420px] text-body-md leading-relaxed text-text-ink-sub">
          Most products fail for predictable reasons. We built our methodology
          around those failure points - so your build does not repeat them.
        </p>
      </div>
    </Section>
  );
}
