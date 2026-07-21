import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import type { SectionHeadingLine } from "@/components/ui/SectionHeading";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

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
            <SectionHeading
              label={label}
              lines={lines}
              subheading={subheading}
            />
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
