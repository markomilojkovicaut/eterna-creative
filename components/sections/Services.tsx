"use client";

import Link from "next/link";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, type Service } from "@/lib/services";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

/** Primary sell: the three Build products (modules live on detail pages). */
const productIds = ["application", "website", "automation"] as const;

const productDisplay: Record<
  (typeof productIds)[number],
  { title: string; tags: string[] }
> = {
  application: {
    title: "Application",
    tags: ["Strategy", "UI/UX", "Development"],
  },
  website: {
    title: "Website",
    tags: ["UI/UX", "Build", "Copy"],
  },
  automation: {
    title: "Automation",
    tags: ["Workflows", "Process", "AI agents"],
  },
};

function toProductCard(service: Service): Service {
  const display = productDisplay[service.id as (typeof productIds)[number]];
  if (!display) return service;
  return {
    ...service,
    title: display.title,
    tags: display.tags,
  };
}

export function Services() {
  const products = services
    .filter((s) => productIds.includes(s.id as (typeof productIds)[number]))
    .map(toProductCard);

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
            label="Products we make"
            lines={[
              { text: "Ship the product", variant: "default" },
              { text: "users pay for", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[560px]"
            subheading={
              <>
                Applications, websites, and AI automations - built to launch,
                convert, and scale. Spec first, flat scope, senior team on the
                work.
              </>
            }
          />

          <div className="mt-8 overflow-hidden rounded-soft border border-border-dark lg:mt-10">
            <div className="grid divide-x divide-y divide-border-dark sm:grid-cols-3">
              {products.map((product) => (
                <ServiceCard
                  key={product.id}
                  service={product}
                  highlighted
                  eyebrow=""
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex w-full max-w-[400px] flex-col gap-4 lg:mt-14">
            <h3 className="font-heading text-heading-md font-bold text-text-heading">
              Need validation or growth too?
            </h3>
            <p className="text-body-md leading-relaxed text-text-body">
              Book a strategy call - we map your vision, scope, and stack. You
              leave with a clear plan whether we work together or not.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CallToActionLink href="/book" className="w-fit">
                Book a strategy call
              </CallToActionLink>
              <Link
                href="/services"
                className="text-body-sm font-semibold text-brand-purple-light no-underline hover:text-text-heading"
              >
                See Plan & Grow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
