import type { Metadata } from "next";

import { FounderLedStudio } from "@/components/sections/FounderLedStudio";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About us | Eterna",
  description:
    "Meet the founder-led studio behind Eterna - senior engineers, direct access, and products we've built ourselves.",
};

export default function AboutPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <FounderLedStudio />
      <div className="bg-bg-base pb-section">
        <div className={LAYOUT_OUTER_CLASS}>
          <div
            className={cn(
              LAYOUT_INNER_CLASS,
              "flex flex-col items-start gap-4"
            )}
          >
            <p className="text-body-md text-text-sub">
              Want to talk through your product?
            </p>
            <CallToActionLink href="/book">Book a strategy call</CallToActionLink>
          </div>
        </div>
      </div>
    </main>
  );
}
