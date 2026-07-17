import { LabelPill } from "@/components/ui/LabelPill";
import { LightCtaLink } from "@/components/ui/LightCtaLink";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { ProcessStepCard } from "@/components/ui/ProcessStepCard";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";
import { processSteps } from "@/lib/process-steps";

const stickyAsideClass =
  "lg:sticky lg:top-6 lg:w-full lg:max-w-[400px] lg:shrink-0 lg:self-start";

const spreadLayoutClass =
  "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16";

const rightColumnClass =
  "w-full min-w-0 max-w-[480px] shrink-0 border-t border-border-muted";

export function TheProcess() {
  return (
    <div className={spreadLayoutClass}>
      <aside className={stickyAsideClass}>
        <LabelPill variant="light">The process</LabelPill>

        <LightEditorialDisplay className="mt-3">
          <span className={lightEditorialLineClasses}>From first call to</span>
          <span className={lightEditorialAccentLineClasses}>
            long-term partner
          </span>
        </LightEditorialDisplay>

        <LightCtaLink href="/book" className="mt-8">
          Book strategy session
        </LightCtaLink>
      </aside>

      <div className={rightColumnClass}>
        {processSteps.map((step, index) => (
          <ProcessStepCard
            key={step.id}
            step={step}
            showTopBorder={
              index > 0 &&
              !step.gradientBackground &&
              !processSteps[index - 1]?.gradientBackground
            }
          />
        ))}
      </div>
    </div>
  );
}
