import type { Metadata } from "next";
import Link from "next/link";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { ProductDevicePreview } from "@/components/ui/HeroPhones";
import { productOffers, type ProductId } from "@/lib/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Eterna",
  description:
    "Custom applications, websites, and AI automations - with modules from validation to growth.",
};

export default function ServicesHubPage() {
  return (
    <ContentHubShell
      label="Products"
      lines={[
        { text: "Ship products that", variant: "default" },
        { text: "earn their keep", variant: "gradient" },
      ]}
      subheading="Applications, automations, and websites built to launch, convert, and scale - with the strategy, craft, and AI muscle behind every release."
    >
      <div className="overflow-hidden rounded-soft border border-border-dark">
        <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {productOffers.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col gap-6 p-6 sm:p-8 lg:min-h-[420px]"
            >
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  {product.number}
                </p>
                <Link
                  href={product.href}
                  className="mt-3 inline-flex items-center gap-2 no-underline"
                >
                  <h2 className="font-heading text-[1.75rem] font-bold text-text-heading transition-colors group-hover:text-brand-purple-light">
                    {product.title}
                  </h2>
                  <ArrowUpRight className="opacity-50 group-hover:opacity-100" />
                </Link>
                <p className="mt-3 text-body-md leading-relaxed text-text-body">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto flex items-end justify-between gap-4">
                <ul className="flex min-w-0 flex-1 flex-col gap-2">
                  {product.modules.map((mod) => (
                    <li key={mod.id}>
                      <span className="inline-flex rounded-soft border border-border-dark bg-bg-card/40 px-2.5 py-1 text-[11px] font-medium text-text-sub">
                        {mod.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <ProductDevicePreview
                  variant={product.id as ProductId}
                  size="sm"
                  className={cn(
                    "pointer-events-none hidden shrink-0 self-end sm:block",
                    "opacity-0 translate-y-2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "group-hover:opacity-100 group-hover:translate-y-0",
                    "group-focus-within:opacity-100 group-focus-within:translate-y-0",
                    "motion-reduce:opacity-100 motion-reduce:translate-y-0"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex max-w-[420px] flex-col gap-4">
        <h3 className="font-heading text-heading-md font-bold text-text-heading">
          Not sure which product fits?
        </h3>
        <p className="text-body-md leading-relaxed text-text-body">
          Book a strategy call - we map your vision, scope, and stack.
        </p>
        <CallToActionLink href="/book" className="w-fit">
          Book a strategy call
        </CallToActionLink>
      </div>
    </ContentHubShell>
  );
}
