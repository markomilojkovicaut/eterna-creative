import type { Metadata } from "next";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { ProductOffersGrid } from "@/components/ui/ProductOffersGrid";

export const metadata: Metadata = {
  title: "Products | Eterna",
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
      <ProductOffersGrid cardMinHeightClass="lg:min-h-[420px]" />

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
