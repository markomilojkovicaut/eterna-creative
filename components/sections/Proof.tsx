import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { proofProducts } from "@/lib/proof-products";
import { cn } from "@/lib/utils";

export function Proof() {
  return (
    <section className="relative overflow-hidden bg-bg-base pt-section">
      <DarkSectionBackdrop
        flipVertical
        objectPosition="bottom-right"
        gradient="section"
      />

      <div className={cn("relative z-10 pb-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <SectionHeading
            label="Proof"
            lines={[
              { text: "AI that", variant: "default" },
              { text: "actually works", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[560px]"
            subheadingMaxWidth="max-w-[520px]"
            subheading={
              <>
                Every product ships with AI now - the hard part is making it
                reliable. We build and run our own AI products, so we know how
                to make yours behave in production, not just in a demo.
              </>
            }
          />

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {proofProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col gap-5 p-6 sm:p-7 lg:gap-6 lg:p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />

                  <div className="relative z-10 flex flex-col gap-5 lg:gap-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
                        {product.name}
                      </h3>
                      <ArrowUpRight className="opacity-70 transition-opacity group-hover:opacity-100" />
                    </div>

                    <p className="min-h-[5.5rem] text-body-md leading-relaxed text-text-body">
                      {product.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
