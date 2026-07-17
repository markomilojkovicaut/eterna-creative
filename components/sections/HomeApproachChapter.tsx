import { Section } from "@/components/layout/Section";
import { OurApproach } from "@/components/sections/OurApproach";
import { TheProcess } from "@/components/sections/TheProcess";

export function HomeApproachChapter() {
  return (
    <Section background="surface" className="text-text-ink-sub">
      <OurApproach />
      <div className="mt-section">
        <TheProcess />
      </div>
    </Section>
  );
}
