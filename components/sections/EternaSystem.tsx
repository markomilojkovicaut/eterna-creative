import { BorderedDarkPanel, SectionHeading } from "@/components/ui";
import { EngineCircle } from "@/components/ui/EngineCircle";
import { eternaEngines } from "@/lib/eterna-engines";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function EternaSystem() {
  return (
    <section className="relative bg-bg-base pb-section pt-section">
      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <BorderedDarkPanel
            backdrop={{ flip: true, objectPosition: "left", gradient: "panel" }}
          >
            <SectionHeading
              split
              label="How we work"
              lines={[
                { text: "Our six engines", variant: "gradient" },
                { text: "methodology", variant: "default" },
              ]}
              titleMaxWidth="max-w-[520px]"
              subheading={
                <>
                  Engines are how we think - not what you buy. Every failure
                  point is a stage in our methodology: research, engineer,
                  acquire, activate, retain, and measure.
                </>
              }
            />

            <div className="mt-10 sm:mt-12 lg:mt-14">
              <EngineCircle engines={eternaEngines} />
            </div>
          </BorderedDarkPanel>
        </div>
      </div>
    </section>
  );
}
