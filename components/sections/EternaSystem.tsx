"use client";

import { BorderedDarkPanel, SectionHeading } from "@/components/ui";
import { EngineCircle } from "@/components/ui/EngineCircle";
import { Reveal } from "@/components/ui/Reveal";
import { eternaEngines } from "@/lib/eterna-engines";
import {
  eternaMethodContrast,
  eternaMethodName,
  eternaMethodSteps,
} from "@/lib/eterna-method";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

/**
 * Eterna Method panel: named 4-step delivery system + six engines.
 * Contained dark panel; no full-bleed section fill.
 */
export function EternaSystem() {
  return (
    <section className="relative bg-bg-surface pt-0" id="eterna-method">
      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={cn("relative -mt-20", LAYOUT_INNER_CLASS)}>
          <BorderedDarkPanel
            className="bg-bg-base"
            backdrop={{ flip: true, objectPosition: "left", gradient: "panel" }}
          >
            <Reveal>
              <SectionHeading
                split
                label={eternaMethodName}
                lines={[
                  { text: "Validate. Spec.", variant: "gradient" },
                  { text: "Ship. Compound.", variant: "default" },
                ]}
                titleMaxWidth="max-w-[560px]"
                subheading={
                  <>
                    Our named delivery system - four human-gated steps so AI
                    speed never skips judgment. Six engines run inside the loop
                    from research to retention.
                  </>
                }
              />
            </Reveal>

            <Reveal delay={80}>
              <ol className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-4">
                {eternaMethodSteps.map((step) => (
                  <li
                    key={step.id}
                    className="flex flex-col rounded-soft border border-border-dark bg-bg-card/40 p-4 sm:p-5"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-heading text-heading-md font-bold text-text-heading">
                      {step.title}
                    </h3>
                    <p className="mt-2 flex-1 text-body-sm leading-relaxed text-text-body">
                      {step.description}
                    </p>
                    <p className="mt-4 border-t border-border-dark pt-3 text-[11px] leading-snug text-text-sub">
                      <span className="font-semibold text-brand-purple-light">
                        Your gate:{" "}
                      </span>
                      {step.humanGate}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-6">
                <div className="rounded-soft border border-border-dark/80 bg-bg-base/40 p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                    Traditional way
                  </p>
                  <ul className="mt-4 space-y-3">
                    {eternaMethodContrast.traditional.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-body-sm leading-relaxed text-text-body"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-text-muted"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-soft border border-brand-purple/35 bg-brand-purple/10 p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                    {eternaMethodName}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {eternaMethodContrast.eterna.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 text-body-sm leading-relaxed text-text-sub"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-purple-light"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 sm:mt-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                  Six engines inside the method
                </p>
                <p className="mt-2 max-w-[520px] text-body-md text-text-body">
                  Open an engine to see how we research, engineer, acquire,
                  activate, retain, and measure - the failure points every product
                  hits.
                </p>
                <div className="mt-8 sm:mt-10 lg:-mx-6 xl:-mx-10">
                  <EngineCircle engines={eternaEngines} />
                </div>
              </div>
            </Reveal>
          </BorderedDarkPanel>
        </div>
      </div>
    </section>
  );
}
