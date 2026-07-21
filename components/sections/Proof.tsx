import Image from "next/image";
import Link from "next/link";

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

function ProofVisual({
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
        "relative mt-auto aspect-video w-full overflow-hidden rounded-soft border border-border-dark",
        "bg-bg-card/50 transition-transform duration-300 group-hover:scale-[1.01] group-focus-within:scale-[1.01]"
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
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
                We build and run our own AI products - so when we put AI in
                yours, it has to hold up in production, not just in a demo.
              </>
            }
          />

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark">
              {proofProducts.map((product) => {
                const isAward = product.kind === "award";
                const linkProps = product.external
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};

                return (
                  <Link
                    key={product.id}
                    href={product.href}
                    {...linkProps}
                    className="group relative flex min-h-[320px] overflow-hidden p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[400px] lg:p-10"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                      aria-hidden
                    />

                    {isAward ? (
                      <div className="relative z-10 flex w-full flex-col gap-6">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                            Recognition
                          </p>
                          <h3 className="mt-3 font-heading text-heading-md font-bold text-text-heading">
                            {product.name}
                          </h3>
                          <p className="mt-3 max-w-[640px] text-body-md leading-relaxed text-text-body">
                            {product.description}
                          </p>
                        </div>
                        <span className="mt-auto inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold text-text-heading">
                          Read the story
                          <ArrowUpRight className="!h-4 !w-4 !text-brand-purple-light" />
                        </span>
                      </div>
                    ) : (
                      <div className="relative z-10 flex w-full flex-col gap-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
                            {product.name}
                          </h3>
                          <ArrowUpRight className="opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-within:translate-x-0.5 group-focus-within:opacity-100" />
                        </div>

                        <div className="relative min-h-[4.5rem]">
                          <p
                            className={cn(
                              "absolute inset-x-0 top-0 max-w-[640px] text-body-md leading-relaxed text-text-body",
                              "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
                              descHidden,
                              descShown,
                              "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
                            )}
                          >
                            {product.description}
                          </p>
                        </div>

                        <ProofVisual
                          src={product.screenshotSrc}
                          alt={
                            product.screenshotAlt ??
                            `${product.name} screenshot`
                          }
                          label={product.name}
                        />
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
