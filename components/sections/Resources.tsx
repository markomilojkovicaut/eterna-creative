"use client";

import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { LightCtaLink } from "@/components/ui/LightCtaLink";
import { ResourceBentoCard } from "@/components/ui/ResourceBentoCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { resourceItems } from "@/lib/resources";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";
import { cn } from "@/lib/utils";

export function Resources() {
  return (
    <div>
      <Reveal>
        <SectionLabel tone="light">Resources</SectionLabel>

        <LightEditorialDisplay className="mt-3 max-w-[520px]">
          <span className={lightEditorialLineClasses}>Free tools to</span>
          <span className={lightEditorialAccentLineClasses}>help you grow</span>
        </LightEditorialDisplay>

        <LightCtaLink href="/resources" className="mt-6">
          View all resources
        </LightCtaLink>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(168px,auto)] lg:gap-5">
        {resourceItems.map((item, index) => (
          <Reveal
            key={item.id}
            delay={60 + index * 55}
            className={cn(item.gridClass, item.minHeightClass)}
          >
            <ResourceBentoCard
              item={{
                ...item,
                gridClass: "h-full",
                minHeightClass: "min-h-full",
              }}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
