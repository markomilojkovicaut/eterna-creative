import {
  DarkSectionBackdrop,
  SectionHeading,
  TimelineMarker,
  TimelineRail,
} from "@/components/ui";
import { founderJourneySteps } from "@/lib/founder-journey";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

const periodClasses = {
  neutral: "text-text-heading",
  challenge: "text-brand-danger",
} as const;

export function FounderJourney() {
  return (
    <section className="relative bg-bg-base pt-section pb-0">
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
          />

          <div className="relative mt-14 max-w-[720px] overflow-visible pb-20">
            <TimelineRail variant="challenge-gradient" />

            <ol className="flex flex-col overflow-visible">
              {founderJourneySteps.map((step, index) => (
                <li
                  key={step.period}
                  className={cn(
                    "relative flex items-start overflow-visible pl-8 sm:pl-9",
                    index < founderJourneySteps.length - 1 && "pb-14 sm:pb-16",
                    index === founderJourneySteps.length - 1 && "mb-section"
                  )}
                >
                  <TimelineMarker phase={step.phase} />

                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        "text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.08em]",
                        periodClasses[step.phase]
                      )}
                    >
                      {step.period}
                    </p>
                    <h3 className="mt-2 font-heading text-[18px] font-bold leading-snug text-text-heading">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[600px] text-body-md leading-relaxed text-text-body">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
