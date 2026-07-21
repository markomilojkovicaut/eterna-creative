import { ApproachCalloutAccordion } from "@/components/ui/ApproachCalloutAccordion";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToolStackCard } from "@/components/ui/ToolStackCard";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";
import { toolStackGroups, toolsByGroup } from "@/lib/tool-stack";
import { cn } from "@/lib/utils";

const stickyAsideClass =
  "lg:sticky lg:top-6 lg:w-full lg:max-w-[400px] lg:shrink-0 lg:self-start";

const spreadLayoutClass =
  "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16";

const rightColumnClass =
  "flex w-full min-w-0 max-w-[480px] flex-col lg:shrink-0";

export function OurApproach() {
  return (
    <div className={spreadLayoutClass}>
      <aside className={stickyAsideClass}>
        <SectionLabel tone="light">Our approach</SectionLabel>

        <LightEditorialDisplay className="mt-3">
          <span className={cn(lightEditorialLineClasses, "font-light")}>
            Lean engineering for your product&apos;s
          </span>
          <span className={lightEditorialAccentLineClasses}>actual stage</span>
        </LightEditorialDisplay>
      </aside>

      <div className={rightColumnClass}>
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
                    tools.length === 2
                      ? "grid-cols-2"
                      : tools.length === 4
                        ? "grid-cols-2 sm:grid-cols-4"
                        : "grid-cols-3"
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
      </div>
    </div>
  );
}
