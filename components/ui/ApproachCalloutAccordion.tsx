import { AutoAccordion } from "@/components/ui/AutoAccordion";
import { approachCallouts } from "@/lib/approach-callouts";

/** Our Approach section — `AutoAccordion` with approach callout data. */
export function ApproachCalloutAccordion() {
  return <AutoAccordion items={approachCallouts} />;
}
