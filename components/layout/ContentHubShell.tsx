import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import type { SectionHeadingLine } from "@/components/ui/SectionHeading";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
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
        <div className="relative z-10 mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className={cn("mx-auto w-full max-w-content", className)}>
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
