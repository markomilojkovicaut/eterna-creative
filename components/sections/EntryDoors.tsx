"use client";

import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { Reveal } from "@/components/ui/Reveal";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { entryDoors } from "@/lib/entry-doors";
import { cn } from "@/lib/utils";
import Link from "next/link";

/** Entry doors motion: clip-up reveal (shared by every door card). */
const descHidden =
  "opacity-0 [clip-path:inset(100%_0_0_0)] motion-reduce:[clip-path:none]";
const descShown =
  "group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0_0)] group-focus-within:opacity-100 group-focus-within:[clip-path:inset(0_0_0_0)]";

export function EntryDoors() {
  return (
    <section className="relative overflow-hidden bg-bg-base pt-section">
      <DarkSectionBackdrop objectPosition="right" gradient="section" />

      <div className={cn("relative z-10 pb-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <SectionHeading
              label="Start here"
              lines={[
                { text: "Start where", variant: "default" },
                { text: "you are", variant: "gradient" },
              ]}
              titleMaxWidth="max-w-[560px]"
            />
          </Reveal>

          <Reveal
            delay={90}
            className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16"
          >
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {entryDoors.map((door) => (
                <Link
                  key={door.id}
                  href={door.href}
                  className="group relative flex h-full min-h-[240px] flex-col overflow-hidden p-6 sm:min-h-[260px] sm:p-7 lg:p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                    aria-hidden
                  />

                  <div className="relative z-10 flex h-full flex-col gap-5 lg:gap-6">
                    <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
                      {door.title}
                    </h3>

                    <div className="relative min-h-[5.5rem] flex-1">
                      <p
                        className={cn(
                          "absolute inset-x-0 top-0 text-body-md leading-relaxed text-text-body",
                          "transition-[opacity,clip-path] duration-300 ease-out motion-reduce:transition-none",
                          descHidden,
                          descShown,
                          "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
                        )}
                      >
                        {door.description}
                      </p>
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 text-body-sm font-medium text-text-heading transition-transform duration-300 group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:group-hover:translate-x-0">
                      {door.ctaLabel}
                      <ArrowUpRight className="opacity-70 transition-opacity group-hover:opacity-100" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-20 h-1 w-full bg-hero-gradient" aria-hidden />
    </section>
  );
}
