import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import type { ResourceItem } from "@/lib/resources";
import { resourceTypeLabels } from "@/lib/resources";
import { lightResourceGradientClasses } from "@/lib/surface-styles";
import { cn } from "@/lib/utils";

const variantClasses: Record<
  NonNullable<ResourceItem["variant"]>,
  string
> = {
  default: "border-border-muted bg-bg-muted",
  gradient: lightResourceGradientClasses,
  "gradient-purple":
    "border-border-strong bg-gradient-to-br from-brand-purple/15 via-bg-muted to-brand-pink/15",
  dark: "border-border-dark bg-bg-base",
};

const openButtonClasses = cn(
  "inline-flex items-center gap-1.5 rounded-soft border border-border-muted",
  "bg-bg-surface px-4 py-2 text-body-sm font-medium text-text-ink",
  "transition-colors hover:border-border-strong hover:bg-bg-muted"
);

const openButtonDarkClasses = cn(
  "inline-flex items-center gap-1.5 rounded-soft border border-border-dark",
  "bg-bg-card/60 px-4 py-2 text-body-sm font-medium text-text-heading",
  "transition-colors hover:border-border-strong hover:bg-bg-card/80"
);

export function ResourceBentoCard({
  item,
  className,
}: {
  item: ResourceItem;
  className?: string;
}) {
  const variant = item.variant ?? "default";
  const isDark = variant === "dark";
  const isGradient = variant === "gradient" || variant === "gradient-purple";
  const isLarge =
    item.gridClass.includes("row-span-2") ||
    item.gridClass.includes("col-span-2") ||
    item.gridClass.includes("col-span-3");

  if (isDark) {
    return (
      <article
        className={cn(
          "group relative flex min-h-[168px] flex-col overflow-hidden rounded-soft border p-5 sm:p-6",
          item.gridClass,
          item.minHeightClass,
          variantClasses.dark,
          className
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-purple-dark via-bg-base to-bg-base"
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-1 flex-col justify-between lg:flex-row lg:gap-6">
          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                {resourceTypeLabels[item.type]}
              </p>
              <h3 className="mt-3 font-heading text-heading-lg font-bold text-text-heading sm:text-[1.375rem]">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-2 max-w-[320px] text-body-sm leading-relaxed text-text-sub">
                  {item.description}
                </p>
              )}
            </div>

            <Link
              href={item.href}
              className={cn(openButtonDarkClasses, "mt-6 w-fit")}
            >
              Open
              <ArrowUpRight className="!text-brand-purple-light" />
            </Link>
          </div>

          <div className="relative mt-6 min-h-[160px] w-full shrink-0 overflow-hidden rounded-soft border border-border-dark bg-bg-card/40 sm:min-h-[180px] lg:mt-0 lg:min-h-[200px] lg:w-[48%] lg:flex-1">
            {item.imageSrc && (
              <>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  fill
                  className="object-cover object-right opacity-90"
                  sizes="(max-width: 1024px) 100vw, 280px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-scanlines opacity-50"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-purple-dark via-bg-base/50 to-transparent"
                  aria-hidden
                />
              </>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group relative flex min-h-[168px] flex-col justify-between overflow-hidden rounded-soft border p-5 sm:p-6",
        item.gridClass,
        item.minHeightClass,
        variantClasses[variant],
        className
      )}
    >
      {isGradient && (
        <div
          className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-brand-purple/20 blur-2xl"
          aria-hidden
        />
      )}

      <div className="relative min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple">
          {resourceTypeLabels[item.type]}
        </p>
        <h3
          className={cn(
            "mt-3 font-heading font-bold text-text-ink",
            isLarge
              ? "text-heading-lg sm:text-[1.375rem]"
              : "text-body-md sm:text-heading-sm"
          )}
        >
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 max-w-[360px] text-body-sm leading-relaxed text-text-ink-muted">
            {item.description}
          </p>
        )}
      </div>

      <Link href={item.href} className={cn(openButtonClasses, "relative mt-6 w-fit")}>
        Open
        <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple" />
      </Link>
    </article>
  );
}
