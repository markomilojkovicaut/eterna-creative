"use client";

import { BorderedDarkPanel, SectionHeading } from "@/components/ui";
import { EngineCircle } from "@/components/ui/EngineCircle";
import { Reveal } from "@/components/ui/Reveal";
import { eternaEngines } from "@/lib/eterna-engines";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

/**
 * Contained engines panel: image backdrop stays inside content margins.
 * No full-bleed dark section fill; no bottom section padding.
 */
export function EternaSystem() {
  return (
    <section className="relative bg-bg-surface pt-0">
      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={cn("relative -mt-20", LAYOUT_INNER_CLASS)}>
          <BorderedDarkPanel
            className="bg-bg-base"
            backdrop={{ flip: true, objectPosition: "left", gradient: "panel" }}
          >
            <Reveal>
              <SectionHeading
                split
                label="Eterna system"
                lines={[
                  { text: "Our six engines", variant: "gradient" },
                  { text: "methodology", variant: "default" },
                ]}
                titleMaxWidth="max-w-[520px]"
                subheading={
                  <>
                    Every failure point is a stage in our methodology. Open an
                    engine to explore how we research, engineer, acquire, activate,
                    retain, and measure.
                  </>
                }
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 sm:mt-12 lg:mt-14 lg:-mx-6 xl:-mx-10">
                <EngineCircle engines={eternaEngines} />
              </div>
            </Reveal>
          </BorderedDarkPanel>
        </div>
      </div>
    </section>
  );
}
