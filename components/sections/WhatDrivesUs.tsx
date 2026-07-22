import { LabelPill } from "@/components/ui/LabelPill";
import { QuoteBar } from "@/components/ui/QuoteBar";
import { StatCard, statSuffixes } from "@/components/ui/StatCard";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";

const stats = [
  {
    value: "15",
    suffix: statSuffixes.plus,
    label: "products shipped",
  },
  {
    value: "5",
    suffix: statSuffixes.star,
    label: "Clutch & Upwork",
  },
  {
    value: "6",
    suffix: statSuffixes.weeks,
    label: "average MVP delivery",
  },
  {
    value: "5",
    suffix: statSuffixes.mobileApp,
    label: "co-funded apps",
  },
] as const;

export function WhatDrivesUs() {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
      <div className="flex w-full min-w-0 flex-col lg:max-w-[720px]">
        <LabelPill variant="light">Mission</LabelPill>

        <div className="mt-3 flex flex-col gap-8">
          <LightEditorialDisplay
            as="p"
            className="w-full text-[38px] leading-[1.12] tracking-[-1.5px] sm:text-[38px] lg:text-[38px]"
          >
            AI collapsed the build timeline so anyone can ship a demo. What
            still separates winners is judgment: strategy, smart architecture,
            design craft and a path to revenue. That is why we exist - an
            AI-native product studio that plans, builds, and grows digital
            products engineered to compound. Faster with AI. Stronger with
            craft.{" "}
            <span className="font-bold">So the advantage is on your side.</span>
          </LightEditorialDisplay>

          <QuoteBar>
            Speed is the strategy.{" "}
            <span className="font-bold">Systems are the weapon.</span>
          </QuoteBar>
        </div>
      </div>

      <div className="grid w-full grid-cols-4 gap-x-4 gap-y-3 overflow-visible px-1 py-1 max-lg:max-w-none lg:flex lg:max-w-[180px] lg:flex-col lg:gap-4 lg:px-0 lg:py-0 lg:justify-self-end">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            variant={stat.label === "products shipped" ? "gradient" : "default"}
          />
        ))}
      </div>
    </div>
  );
}
