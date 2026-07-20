import type { Metadata } from "next";
import Link from "next/link";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getServiceSlug } from "@/lib/service-pages";
import { servicePhaseLabels, services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Eterna",
  description:
    "Strategy, build, and growth under one roof - from research and product engineering to automation, websites, and acquisition.",
};

export default function ServicesHubPage() {
  return (
    <ContentHubShell
      label="Services"
      lines={[
        { text: "Single studio -", variant: "default" },
        { text: "from spark to scale", variant: "gradient" },
      ]}
      subheading="Plan, build, and grow with one team. Pick a service to see how we work - or book a strategy call and we will map the right starting point."
    >
      <div className="overflow-hidden rounded-soft border border-border-dark">
        <ul className="grid divide-y divide-border-dark sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {services.map((service, index) => {
            const href = getServiceSlug(service.id) ?? `/services/${service.id}`;
            const highlight = service.iconHighlight ?? false;
            const rowBreak = index >= 4;

            return (
              <li
                key={service.id}
                className={cn(
                  rowBreak && "lg:border-t lg:border-border-dark"
                )}
              >
                <Link
                  href={href}
                  className="group flex h-full min-h-[220px] flex-col gap-4 p-5 no-underline transition-colors hover:bg-bg-card/40 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.12em]",
                        highlight
                          ? "text-brand-pink"
                          : "text-brand-purple-light"
                      )}
                    >
                      {servicePhaseLabels[service.phase]}
                    </p>
                    <ServiceIcon icon={service.icon} highlight={highlight} />
                  </div>
                  <h2
                    className={cn(
                      "font-heading text-heading-md font-bold",
                      highlight ? "text-brand-pink" : "text-text-heading"
                    )}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-auto text-body-sm leading-relaxed text-text-body">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-soft border border-border-dark bg-bg-card/40 px-2 py-0.5 text-[10px] font-medium tracking-wide text-text-sub"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 flex max-w-[420px] flex-col gap-4">
        <h3 className="font-heading text-heading-md font-bold text-text-heading">
          Not sure where to start?
        </h3>
        <p className="text-body-md leading-relaxed text-text-body">
          Book a strategy call - we map fit, scope, and next steps whether we
          work together or not.
        </p>
        <CallToActionLink href="/book" className="w-fit">
          Book a strategy call
        </CallToActionLink>
      </div>
    </ContentHubShell>
  );
}
