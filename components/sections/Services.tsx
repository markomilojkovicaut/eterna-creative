"use client";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ProductOffersGrid } from "@/components/ui/ProductOffersGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPullQuote } from "@/components/ui/SectionPullQuote";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { quoteAfterWhatWeDo } from "@/lib/section-quotes";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg-base pt-section">
      <DarkSectionBackdrop {...sectionBackdropPresets.services} />

      <div className={cn("relative z-10 pb-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <SectionHeading
              split
              label="Products"
              lines={[
                { text: "Ship products that", variant: "default" },
                { text: "earn their keep", variant: "gradient" },
              ]}
              titleMaxWidth="max-w-[560px]"
              subheading={
                <>
                  Applications, automations, and websites built to launch, convert,
                  and scale - with the strategy, craft, and AI muscle behind every
                  release.
                </>
              }
            />
          </Reveal>

          <Reveal delay={80} className="mt-14 lg:mt-16">
            <ProductOffersGrid />
          </Reveal>

          <Reveal delay={140}>
            <SectionPullQuote
              quote={quoteAfterWhatWeDo}
              className="mt-10 lg:mt-14"
            />
          </Reveal>

          <Reveal delay={180} className="mt-10 flex w-full max-w-[400px] flex-col gap-4 lg:mt-14">
            <h3 className="font-heading text-heading-md font-bold text-text-heading">
              Not sure which product fits?
            </h3>
            <p className="text-body-md leading-relaxed text-text-body">
              Book a strategy call - we map your vision, scope, and stack. You
              leave with a clear plan whether we work together or not.
            </p>
            <CallToActionLink href="/book" className="w-fit">
              Book a strategy call
            </CallToActionLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
