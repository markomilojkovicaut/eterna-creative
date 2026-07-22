import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import {
  ProductDevicePreview,
  productDeviceHoverClassName,
} from "@/components/ui/HeroPhones";
import { productOffers, type ProductId } from "@/lib/products";
import { cn } from "@/lib/utils";

export function DividedCardGrid({
  children,
  className,
  columns = 3,
}: {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-soft border border-border-dark",
        className
      )}
    >
      <div
        className={cn(
          "grid divide-y divide-border-dark",
          columns === 3
            ? "lg:grid-cols-3 lg:divide-x lg:divide-y-0"
            : "md:grid-cols-2 md:divide-x md:divide-y-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Shared Application / Automation / Website offer grid (homepage + /services hub). */
export function ProductOffersGrid({
  className,
  cardMinHeightClass = "lg:min-h-[480px]",
}: {
  className?: string;
  cardMinHeightClass?: string;
}) {
  return (
    <DividedCardGrid className={className}>
      {productOffers.map((product) => (
        <div
          key={product.id}
          className={cn(
            "group relative flex flex-col gap-6 p-6 sm:p-8 lg:p-8 xl:p-10",
            cardMinHeightClass
          )}
        >
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
              {product.number}
            </p>
            <Link
              href={product.href}
              className="mt-3 inline-flex items-center gap-2 no-underline"
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

          <div className="mt-auto flex items-end justify-between gap-4">
            <ul className="flex min-w-0 flex-1 flex-col gap-2">
              {product.modules.map((mod) => (
                <li key={mod.id}>
                  <span className="inline-flex rounded-soft border border-border-dark bg-bg-card/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-text-sub">
                    {mod.label}
                  </span>
                </li>
              ))}
            </ul>
            <ProductDevicePreview
              variant={product.id as ProductId}
              size="sm"
              className={productDeviceHoverClassName}
            />
          </div>
        </div>
      ))}
    </DividedCardGrid>
  );
}
