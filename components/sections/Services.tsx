import Link from "next/link";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { SectionPullQuote } from "@/components/ui/SectionPullQuote";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { productOffers } from "@/lib/products";
import { quoteAfterWhatWeDo } from "@/lib/section-quotes";
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

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {productOffers.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-6 p-6 sm:p-8 lg:min-h-[480px] lg:p-8 xl:p-10"
                >
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                      {product.number}
                    </p>
                    <Link
                      href={product.href}
                      className="group mt-3 inline-flex items-center gap-2 no-underline"
                    >
                      <h3 className="font-heading text-[1.75rem] font-bold leading-snug text-text-heading transition-colors group-hover:text-brand-purple-light">
                        {product.title}
                      </h3>
                      <ArrowUpRight className="opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                    <p className="mt-3 text-body-md leading-relaxed text-text-body">
                      {product.description}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-col gap-2">
                    {product.modules.map((mod) => (
                      <li key={mod.id}>
                        <span className="inline-flex rounded-soft border border-border-dark bg-bg-card/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-text-sub">
                          {mod.label}
                        </span>
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
              Not sure which product fits?
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
