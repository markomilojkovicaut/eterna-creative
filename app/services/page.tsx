import type { Metadata } from "next";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/services";

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
        <div className="grid divide-x divide-y divide-border-dark sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              highlighted
            />
          ))}
        </div>
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
