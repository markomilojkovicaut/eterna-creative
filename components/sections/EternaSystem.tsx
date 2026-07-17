import { EngineCard } from "@/components/ui/EngineCard";
import { BorderedDarkPanel, SectionHeading } from "@/components/ui";
import { eternaEngines } from "@/lib/eterna-engines";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function EternaSystem() {
  return (
    <section className="relative bg-bg-base pb-section pt-0">
      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={cn("relative -mt-20", LAYOUT_INNER_CLASS)}>
          <BorderedDarkPanel
            backdrop={{ flip: true, objectPosition: "left", gradient: "panel" }}
          >
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
                  Every one of these failure points is a stage in our
                  methodology. We don&apos;t just build - we research before we
                  build, plan acquisition before we launch, and instrument
                  retention before it is a problem.
                </>
              }
            />

            <div className="mt-10 overflow-hidden rounded-soft border border-border-dark lg:mt-14">
              <div className="grid divide-x divide-y divide-border-dark md:grid-cols-2 lg:grid-cols-3">
                {eternaEngines.map((engine) => (
                  <EngineCard key={engine.id} engine={engine} />
                ))}
              </div>
            </div>
          </BorderedDarkPanel>
        </div>
      </div>
    </section>
  );
}
