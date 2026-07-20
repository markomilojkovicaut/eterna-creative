import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import { LightCtaLink } from "@/components/ui/LightCtaLink";
import { ResourceBentoCard } from "@/components/ui/ResourceBentoCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { resourceItems } from "@/lib/resources";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";

export function Resources() {
  return (
    <div>
      <SectionLabel tone="light">Resources</SectionLabel>

      <LightEditorialDisplay className="mt-3 max-w-[520px]">
        <span className={lightEditorialLineClasses}>Free tools to</span>
        <span className={lightEditorialAccentLineClasses}>help you grow</span>
      </LightEditorialDisplay>

      <LightCtaLink href="/resources" className="mt-6">
        View all resources
      </LightCtaLink>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(168px,auto)] lg:gap-5">
        {resourceItems.map((item) => (
          <ResourceBentoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
