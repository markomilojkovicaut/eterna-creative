import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import type { SectionHeadingLine } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

/**
 * Shared content-hub shell with scroll Reveal so hub pages match homepage motion.
 * Prefer this (or Section + Reveal) on new pages so animation stays consistent.
 */
export function ContentHubShell({
  label,
  lines,
  subheading,
  children,
  className,
}: {
  label: string;
  lines: SectionHeadingLine[];
  subheading?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={cn(LAYOUT_INNER_CLASS, className)}>
            <Reveal>
              <SectionHeading
                label={label}
                lines={lines}
                subheading={subheading}
              />
            </Reveal>
            <Reveal delay={100} className="mt-12">
              {children}
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
