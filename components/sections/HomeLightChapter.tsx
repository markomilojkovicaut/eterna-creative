import { Section } from "@/components/layout/Section";
import { Partners } from "@/components/sections/Partners";
import { WhatDrivesUs } from "@/components/sections/WhatDrivesUs";

export function HomeLightChapter() {
  return (
    <Section background="surface" className="text-text-ink-sub !pt-10">
      <Partners />
      <div className="mt-section">
        <WhatDrivesUs />
      </div>
    </Section>
  );
}
