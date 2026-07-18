"use client";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceFilterBar } from "@/components/ui/ServiceFilterBar";
import {
  isServiceHighlighted,
  services,
  type ServiceFilterId,
} from "@/lib/services";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Services() {
  const [filter, setFilter] = useState<ServiceFilterId>("all");

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
            split
            label="Services"
            lines={[
              { text: "Single studio -", variant: "default" },
              { text: "from spark to scale", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[520px]"
            subheading={
              <>
                Some clients come for the build, others for the strategy or
                growth. Most end up needing all and that&apos;s exactly what we
                cover in single studio. We stay with you until you succeed.
              </>
            }
          />

          <ServiceFilterBar
            active={filter}
            onChange={setFilter}
            className="mt-8 lg:mt-10"
          />

          <div className="mt-6 overflow-hidden rounded-soft border border-border-dark lg:mt-8">
            <div className="grid divide-x divide-y divide-border-dark sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  highlighted={isServiceHighlighted(service, filter)}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex w-full max-w-[400px] flex-col gap-4 lg:mt-14">
            <h3 className="font-heading text-heading-md font-bold text-text-heading">
              Not sure where to start?
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

      <div className="relative z-20 h-1 w-full bg-hero-gradient" aria-hidden />
    </section>
  );
}
