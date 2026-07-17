import { QuoteBar } from "@/components/ui/QuoteBar";
import type { ApproachCallout } from "@/lib/approach-callouts";

export function ApproachCalloutCard({ callout }: { callout: ApproachCallout }) {
  return (
    <QuoteBar accent={callout.accent} className="py-4">
      <span className="block font-bold">{callout.title}</span>
      <span className="mt-2 block text-body-md font-normal leading-relaxed text-text-ink-sub">
        {callout.description}
      </span>
    </QuoteBar>
  );
}
