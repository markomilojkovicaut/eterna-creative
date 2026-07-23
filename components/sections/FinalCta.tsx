"use client";

import Link from "next/link";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { Reveal } from "@/components/ui/Reveal";
import { displayHeadingTypeClasses } from "@/lib/heading-styles";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="relative bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal className="relative overflow-hidden rounded-soft p-px">
            <div
              className="pointer-events-none absolute inset-[-40%] cta-comet-border"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-soft opacity-40"
              aria-hidden
              style={{
                background:
                  "linear-gradient(90deg, rgba(184,184,255,0.35), rgba(133,133,255,0.2), rgba(203,128,255,0.35))",
              }}
            />

            <div className="relative overflow-hidden rounded-[7px] border border-border-dark bg-bg-base">
              <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />

              <div className="relative z-10 flex flex-col items-center px-6 py-[160px] text-center sm:px-10">
                <h2
                  className={cn(
                    displayHeadingTypeClasses,
                    "text-display-lg font-bold text-text-heading sm:text-display-xl"
                  )}
                >
                  Ready to <span className="text-gradient-hero">start?</span>
                </h2>

                <p className="mt-5 max-w-[560px] text-body-md leading-relaxed text-text-sub sm:text-body-lg">
                  Start with a free 15-min strategy call. If there&apos;s a fit,
                  you get a Launch Plan before any build commitment - then we
                  ship with the Eterna Method.
                </p>

                <CallToActionLink href="/book" className="mt-8">
                  Book a strategy call
                </CallToActionLink>
                <p className="mt-4 text-body-sm text-text-muted">
                  Want the path first?{" "}
                  <Link
                    href="/book"
                    className="font-medium text-brand-purple-light no-underline transition-colors hover:text-text-heading"
                  >
                    Book a free call
                  </Link>
                  {" · "}
                  <Link
                    href="/blueprint"
                    className="font-medium text-brand-purple-light no-underline transition-colors hover:text-text-heading"
                  >
                    How the Launch Plan works
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
