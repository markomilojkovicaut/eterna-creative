"use client";

import { ApproachCalloutAccordion } from "@/components/ui/ApproachCalloutAccordion";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToolStackCard } from "@/components/ui/ToolStackCard";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";
import {
  LIGHT_RIGHT_COLUMN_CLASS,
  LIGHT_SPREAD_LAYOUT_CLASS,
  LIGHT_STICKY_ASIDE_CLASS,
} from "@/lib/layout-constants";
import { toolStackGroups, toolsByGroup } from "@/lib/tool-stack";
import { cn } from "@/lib/utils";

export function OurApproach() {
  return (
    <div className={LIGHT_SPREAD_LAYOUT_CLASS}>
      <Reveal as="aside" className={LIGHT_STICKY_ASIDE_CLASS}>
        <SectionLabel tone="light">Our approach</SectionLabel>

        <LightEditorialDisplay className="mt-3">
          <span className={cn(lightEditorialLineClasses, "font-light")}>
            Lean engineering for your product&apos;s
          </span>
          <span className={lightEditorialAccentLineClasses}>actual stage</span>
        </LightEditorialDisplay>
      </Reveal>

      <Reveal delay={100} className={LIGHT_RIGHT_COLUMN_CLASS}>
        <ApproachCalloutAccordion />

        <div className="mt-section overflow-hidden rounded-soft border border-border-muted">
          {toolStackGroups.map((group, groupIndex) => {
            const tools = toolsByGroup(group.id);
            if (tools.length === 0) return null;

            return (
              <div
                key={group.id}
                className={cn(
                  groupIndex > 0 && "border-t border-border-muted"
                )}
              >
                <p className="border-b border-border-muted bg-bg-surface px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-ink-muted">
                  {group.label}
                </p>
                <div
                  className={cn(
                    "grid divide-x divide-y divide-border-muted",
                    tools.length <= 2
                      ? "grid-cols-2"
                      : tools.length === 3
                        ? "grid-cols-3"
                        : tools.length === 4
                          ? "grid-cols-2 sm:grid-cols-4"
                          : "grid-cols-2 sm:grid-cols-3"
                  )}
                >
                  {tools.map((tool) => (
                    <ToolStackCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
