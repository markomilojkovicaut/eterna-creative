import type { Metadata } from "next";
import Link from "next/link";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { productOffers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Services | Eterna",
  description:
    "Custom applications, websites, and AI automations - with modules from validation to growth.",
};

export default function ServicesHubPage() {
  return (
    <ContentHubShell
      label="Services"
      lines={[
        { text: "Custom products", variant: "default" },
        { text: "& solutions", variant: "gradient" },
      ]}
      subheading="Three offers. Modules inside each - from validation and UI/UX to AI agents and growth. Pick a product or book a strategy call."
    >
      <div className="overflow-hidden rounded-soft border border-border-dark">
        <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {productOffers.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-6 p-6 sm:p-8 lg:min-h-[420px]"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  {product.number}
                </p>
                <Link
                  href={product.href}
                  className="group mt-3 inline-flex items-center gap-2 no-underline"
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
              <ul className="mt-auto flex flex-col gap-2">
                {product.modules.map((mod) => (
                  <li key={mod.id}>
                    <span className="inline-flex rounded-soft border border-border-dark bg-bg-card/40 px-2.5 py-1 text-[11px] font-medium text-text-sub">
                      {mod.label}
                    </span>
                  </li>
                ))}
              </ul>
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
