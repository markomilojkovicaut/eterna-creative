import Link from "next/link";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { SectionPullQuote } from "@/components/ui/SectionPullQuote";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { quoteAfterWhatWeDo } from "@/lib/section-quotes";
import { whatWeDoPillars } from "@/lib/what-we-do";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg-base pt-section">
      <DarkSectionBackdrop
        flipVertical
        objectPosition="bottom-right"
        gradient="section"
      />

      <div className={cn("relative z-10 pb-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <SectionHeading
            split
            label="What we do"
            lines={[
              { text: "Ship what users", variant: "default" },
              { text: "pay for", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[560px]"
            subheading={
              <>
                Build the product, plan before you spend, and grow after launch
                - one studio from spark to scale.
              </>
            }
          />

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {whatWeDoPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="flex flex-col gap-8 p-6 sm:p-8 lg:min-h-[420px] lg:p-8 xl:p-10"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                      {pillar.number}
                    </p>
                    <h3 className="mt-3 font-heading text-heading-lg font-bold text-text-heading">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-body-md leading-relaxed text-text-body">
                      {pillar.description}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-col divide-y divide-border-dark border-t border-border-dark">
                    {pillar.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="group flex items-start justify-between gap-4 py-4 no-underline transition-colors hover:bg-white/[0.02]"
                        >
                          <span className="min-w-0">
                            <span
                              className={cn(
                                "font-heading font-bold text-text-heading transition-colors group-hover:text-brand-purple-light",
                                link.emphasize
                                  ? "text-[1.75rem] leading-snug"
                                  : "text-heading-md"
                              )}
                            >
                              {link.title}
                            </span>
                            {link.emphasize && link.description ? (
                              <span className="mt-1.5 block text-body-sm leading-relaxed text-text-sub">
                                {link.description}
                              </span>
                            ) : null}
                          </span>
                          <ArrowUpRight className="mt-1 shrink-0 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <SectionPullQuote
            quote={quoteAfterWhatWeDo}
            className="mt-10 lg:mt-14"
          />

          <div className="mt-10 flex w-full max-w-[400px] flex-col gap-4 lg:mt-14">
            <h3 className="font-heading text-heading-md font-bold text-text-heading">
              Not sure where to start?
            </h3>
            <p className="text-body-md leading-relaxed text-text-body">
              Book a strategy call - we map your vision, scope, and stack. You
              leave with a clear plan whether we work together or not.
            </p>
            <CallToActionLink href="/book" className="w-fit">
              Book a strategy call
            </CallToActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
