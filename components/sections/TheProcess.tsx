"use client";

import { LabelPill } from "@/components/ui/LabelPill";
import { LightCtaLink } from "@/components/ui/LightCtaLink";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { ProcessStepCard } from "@/components/ui/ProcessStepCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";
import {
  LIGHT_SPREAD_LAYOUT_CLASS,
  LIGHT_STICKY_ASIDE_CLASS,
} from "@/lib/layout-constants";
import { processSteps } from "@/lib/process-steps";
import { cn } from "@/lib/utils";

export function TheProcess() {
  return (
    <div className={LIGHT_SPREAD_LAYOUT_CLASS}>
      <Reveal as="aside" className={LIGHT_STICKY_ASIDE_CLASS}>
        <LabelPill variant="light">The process</LabelPill>

        <LightEditorialDisplay className="mt-3">
          <span className={lightEditorialLineClasses}>From first call to</span>
          <span className={lightEditorialAccentLineClasses}>
            long-term partner
          </span>
        </LightEditorialDisplay>

        <LightCtaLink href="/book" className="mt-8">
          Book a strategy call
        </LightCtaLink>
      </Reveal>

      <Reveal
        delay={100}
        className={cn(
          "w-full min-w-0 max-w-[480px] shrink-0 border-t border-border-muted"
        )}
      >
        {processSteps.map((step, index) => (
          <Reveal key={step.id} delay={80 + index * 70}>
            <ProcessStepCard
              step={step}
              showTopBorder={
                index > 0 &&
                !step.gradientBackground &&
                !processSteps[index - 1]?.gradientBackground
              }
            />
          </Reveal>
        ))}
      </Reveal>
    </div>
  );
}
