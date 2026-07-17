import { PricingIcon } from "@/components/ui/PricingIcon";
import type { PricingTier } from "@/lib/investment";
import { cn } from "@/lib/utils";

export function PricingCard({
  tier,
  className,
}: {
  tier: PricingTier;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-5 p-6 sm:p-7 lg:gap-6 lg:p-8",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col gap-5 lg:gap-6">
        <div className="flex items-start justify-between gap-4">
          <PricingIcon icon={tier.icon} />
          {tier.popular && (
            <span className="rounded-soft border border-border-strong bg-brand-purple/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-purple-light">
              Popular
            </span>
          )}
        </div>

        <h3 className="font-heading text-heading-lg font-bold text-text-heading sm:text-[1.375rem]">
          {tier.title}
        </h3>

        <p className="min-h-[8.5rem] flex-1 text-body-md leading-relaxed text-text-body">
          {tier.description}
        </p>

        <div className="mt-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-text-muted">
            Starting from
          </p>
          <p
            className={cn(
              "mt-1 font-heading text-[1.75rem] font-bold leading-none sm:text-[2rem]",
              tier.popular ? "text-brand-purple-light" : "text-text-heading"
            )}
          >
            {tier.price}
          </p>
        </div>
      </div>
    </article>
  );
}
