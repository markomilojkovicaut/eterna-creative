"use client";

import { useMemo, useState } from "react";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import {
  calculateAppCost,
  formatEuro,
  type AiFeatures,
  type AppType,
  type Complexity,
} from "@/lib/app-calculator";
import { cn } from "@/lib/utils";

const appTypeOptions: { id: AppType; label: string }[] = [
  { id: "mvp", label: "MVP" },
  { id: "full", label: "Full product" },
  { id: "platform", label: "Platform / enterprise" },
];

const complexityOptions: { id: Complexity; label: string }[] = [
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];

const aiOptions: { id: AiFeatures; label: string }[] = [
  { id: "none", label: "None" },
  { id: "basic", label: "Basic AI" },
  { id: "advanced", label: "Advanced AI" },
];

function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <p className="text-body-sm font-semibold text-text-heading">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              "rounded-soft border px-3 py-1.5 text-body-sm transition-colors",
              value === option.id
                ? "border-border-strong bg-bg-card text-text-heading"
                : "border-border-dark bg-bg-card/40 text-text-body hover:border-border-strong"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AppCostCalculator() {
  const [appType, setAppType] = useState<AppType>("mvp");
  const [complexity, setComplexity] = useState<Complexity>("medium");
  const [aiFeatures, setAiFeatures] = useState<AiFeatures>("none");
  const [integrations, setIntegrations] = useState(2);
  const [userRoles, setUserRoles] = useState(1);

  const result = useMemo(
    () =>
      calculateAppCost({
        appType,
        complexity,
        aiFeatures,
        integrations,
        userRoles,
      }),
    [appType, complexity, aiFeatures, integrations, userRoles]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-6 rounded-soft border border-border-dark bg-bg-card/30 p-6 sm:p-8">
        <OptionGroup
          label="Product type"
          options={appTypeOptions}
          value={appType}
          onChange={setAppType}
        />
        <OptionGroup
          label="Complexity"
          options={complexityOptions}
          value={complexity}
          onChange={setComplexity}
        />
        <OptionGroup
          label="AI features"
          options={aiOptions}
          value={aiFeatures}
          onChange={setAiFeatures}
        />
        <div>
          <label htmlFor="integrations" className="text-body-sm font-semibold text-text-heading">
            Integrations ({integrations})
          </label>
          <input
            id="integrations"
            type="range"
            min={0}
            max={10}
            value={integrations}
            onChange={(e) => setIntegrations(Number(e.target.value))}
            className="mt-2 w-full accent-brand-purple"
          />
        </div>
        <div>
          <label htmlFor="userRoles" className="text-body-sm font-semibold text-text-heading">
            User roles ({userRoles})
          </label>
          <input
            id="userRoles"
            type="range"
            min={1}
            max={6}
            value={userRoles}
            onChange={(e) => setUserRoles(Number(e.target.value))}
            className="mt-2 w-full accent-brand-purple"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-soft border border-border-dark bg-bg-card/30 p-6 sm:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
            Estimate
          </p>
          <p className="mt-3 font-heading text-display-md font-bold text-text-heading">
            {formatEuro(result.minEstimate)} – {formatEuro(result.maxEstimate)}
          </p>
          <p className="mt-2 text-body-sm text-text-sub">
            Timeline: {result.timelineWeeks}
          </p>
          <p className="mt-4 text-body-md leading-relaxed text-text-body">
            {result.summary}
          </p>
          <p className="mt-4 text-body-sm text-text-muted">
            Indicative only. Your free Launch Plan gives a firm flat price for
            your actual scope.
          </p>
        </div>
        <CallToActionLink href="/book" className="mt-8 w-fit">
          Book a strategy call
        </CallToActionLink>
      </div>
    </div>
  );
}
