import Image from "next/image";

import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { proofProducts } from "@/lib/proof-products";
import {
  investmentTopBandClass,
  investmentTopBandFadeClass,
  sectionBackdropPresets,
} from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

/** Proof section motion: scale-soft reveal (shared by every proof card). */
const descHidden = "scale-[0.96] opacity-0 motion-reduce:scale-100";
const descShown =
  "group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100";

function ProofScreenshot({
  src,
  alt,
  label,
}: {
  src?: string;
  alt: string;
  label: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full max-w-[200px] shrink-0 overflow-hidden rounded-soft border border-border-dark",
        "bg-bg-card/50 transition-transform duration-300 group-hover:scale-[1.02] group-focus-within:scale-[1.02]",
        "sm:ml-auto"
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="200px"
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-brand-purple-dark/80 via-bg-base to-bg-card">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
            Screenshot
          </span>
          <span className="px-2 text-center text-[11px] text-text-muted">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export function Proof() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-section">
      <div className={investmentTopBandClass} aria-hidden>
        <DarkSectionBackdrop {...sectionBackdropPresets.investment} />
        <div className={investmentTopBandFadeClass} />
      </div>

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
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
                  className="group relative flex h-full min-h-[240px] overflow-hidden p-6 sm:min-h-[260px] sm:p-7 lg:p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                    aria-hidden
                  />

                  <div className="relative z-10 flex w-full flex-col gap-5 sm:flex-row sm:items-stretch sm:gap-6">
                    {/* Left: heading, description, open affordance */}
                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
                          {product.name}
                        </h3>
                        <ArrowUpRight className="opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-within:translate-x-0.5 group-focus-within:opacity-100" />
                      </div>

                      <div className="relative min-h-[5.5rem] flex-1">
                        <p
                          className={cn(
                            "absolute inset-x-0 top-0 text-body-md leading-relaxed text-text-body",
                            "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
                            descHidden,
                            descShown,
                            "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
                          )}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: screenshot */}
                    <ProofScreenshot
                      src={product.screenshotSrc}
                      alt={
                        product.screenshotAlt ?? `${product.name} screenshot`
                      }
                      label={product.name}
                    />
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
