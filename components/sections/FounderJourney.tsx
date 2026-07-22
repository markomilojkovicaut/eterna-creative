import {
  DarkSectionBackdrop,
  SectionHeading,
} from "@/components/ui";
import { ChallengeAccordion } from "@/components/ui/ChallengeAccordion";
import { founderJourneySteps } from "@/lib/founder-journey";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function FounderJourney() {
  return (
    <section className="relative bg-bg-base pt-section pb-section">
      <DarkSectionBackdrop objectPosition="right" gradient="section" />

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <SectionHeading
            label="Challenges"
            lines={[
              { text: "The typical", variant: "default" },
              { text: "founder journey", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[640px]"
            subheading="Six moments where most products lose the plot. Hover to pause, click to jump."
            subheadingMaxWidth="max-w-[420px]"
          />

          <div className="mt-14 max-w-[720px]">
            <ChallengeAccordion items={founderJourneySteps} />
          </div>
        </div>
      </div>
    </section>
  );
}
