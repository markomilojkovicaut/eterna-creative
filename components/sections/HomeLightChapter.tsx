"use client";

import { Section } from "@/components/layout/Section";
import { Partners } from "@/components/sections/Partners";
import { WhatDrivesUs } from "@/components/sections/WhatDrivesUs";
import { Reveal } from "@/components/ui/Reveal";

export function HomeLightChapter() {
  return (
    <Section background="surface" className="text-text-ink-sub !pt-10">
      <Reveal>
        <Partners />
      </Reveal>
      <Reveal delay={120} className="mt-section">
        <WhatDrivesUs />
      </Reveal>
    </Section>
  );
}
