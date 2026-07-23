"use client";

import { useMemo, useState } from "react";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import {
  calculateProductCost,
  formatEuro,
  type AiFeatures,
  type AppScope,
  type AutomationScope,
  type Complexity,
  type ProductKind,
  type WebsiteKind,
} from "@/lib/app-calculator";
import { cn } from "@/lib/utils";

const productOptions: { id: ProductKind; label: string; hint: string }[] = [
  {
    id: "application",
    label: "Application",
    hint: "Custom product / MVP / platform",
  },
  {
    id: "automation",
    label: "Automation",
    hint: "n8n, AI agents, ops workflows",
  },
  {
    id: "website",
    label: "Website",
    hint: "Marketing or product site",
  },
];

const appScopeOptions: { id: AppScope; label: string }[] = [
  { id: "mvp", label: "MVP" },
  { id: "full", label: "Full product" },
  { id: "platform", label: "Platform / enterprise" },
];

const automationScopeOptions: { id: AutomationScope; label: string }[] = [
  { id: "single", label: "Single workflow" },
  { id: "ops", label: "Ops suite" },
  { id: "agentic", label: "Agentic system" },
];

const websiteKindOptions: { id: WebsiteKind; label: string }[] = [
  { id: "marketing", label: "Marketing" },
  { id: "product", label: "Product" },
  { id: "hybrid", label: "Hybrid" },
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

function RangeField({
  id,
  label,
  value,
  min,
  max,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-body-sm font-semibold text-text-heading">
        {label} ({value})
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-brand-purple"
      />
    </div>
  );
}

export function AppCostCalculator() {
  const [product, setProduct] = useState<ProductKind>("application");

  // Application
  const [appScope, setAppScope] = useState<AppScope>("mvp");
  const [userRoles, setUserRoles] = useState(1);

  // Automation
  const [automationScope, setAutomationScope] =
    useState<AutomationScope>("single");
  const [workflows, setWorkflows] = useState(1);
  const [systems, setSystems] = useState(2);

  // Website
  const [websiteKind, setWebsiteKind] = useState<WebsiteKind>("marketing");
  const [pages, setPages] = useState(6);
  const [cms, setCms] = useState(true);

  // Shared
  const [complexity, setComplexity] = useState<Complexity>("medium");
  const [aiFeatures, setAiFeatures] = useState<AiFeatures>("none");
  const [integrations, setIntegrations] = useState(2);

  const result = useMemo(() => {
    if (product === "application") {
      return calculateProductCost({
        product,
        scope: appScope,
        complexity,
        aiFeatures,
        integrations,
        userRoles,
      });
    }
    if (product === "automation") {
      return calculateProductCost({
        product,
        scope: automationScope,
        complexity,
        aiFeatures,
        workflows,
        systems,
      });
    }
    return calculateProductCost({
      product: "website",
      kind: websiteKind,
      complexity,
      pages,
      integrations,
      cms,
    });
  }, [
    product,
    appScope,
    automationScope,
    websiteKind,
    complexity,
    aiFeatures,
    integrations,
    userRoles,
    workflows,
    systems,
    pages,
    cms,
  ]);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-6 rounded-soft border border-border-dark bg-bg-card/30 p-6 sm:p-8">
        <div>
          <p className="text-body-sm font-semibold text-text-heading">
            What are you building?
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {productOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setProduct(option.id)}
                className={cn(
                  "rounded-soft border px-3 py-3 text-left transition-colors",
                  product === option.id
                    ? "border-border-strong bg-bg-card text-text-heading"
                    : "border-border-dark bg-bg-card/40 text-text-body hover:border-border-strong"
                )}
              >
                <span className="block text-body-sm font-semibold">
                  {option.label}
                </span>
                <span className="mt-1 block text-[12px] leading-snug text-text-muted">
                  {option.hint}
                </span>
              </button>
            ))}
          </div>
        </div>

        {product === "application" ? (
          <>
            <OptionGroup
              label="Scope"
              options={appScopeOptions}
              value={appScope}
              onChange={setAppScope}
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
            <RangeField
              id="integrations"
              label="Integrations"
              value={integrations}
              min={0}
              max={10}
              onChange={setIntegrations}
            />
            <RangeField
              id="userRoles"
              label="User roles"
              value={userRoles}
              min={1}
              max={6}
              onChange={setUserRoles}
            />
          </>
        ) : null}

        {product === "automation" ? (
          <>
            <OptionGroup
              label="Automation scope"
              options={automationScopeOptions}
              value={automationScope}
              onChange={setAutomationScope}
            />
            <OptionGroup
              label="Complexity"
              options={complexityOptions}
              value={complexity}
              onChange={setComplexity}
            />
            <OptionGroup
              label="AI / agents"
              options={aiOptions}
              value={aiFeatures}
              onChange={setAiFeatures}
            />
            <RangeField
              id="workflows"
              label="Workflows"
              value={workflows}
              min={1}
              max={12}
              onChange={setWorkflows}
            />
            <RangeField
              id="systems"
              label="Systems connected"
              value={systems}
              min={1}
              max={10}
              onChange={setSystems}
            />
          </>
        ) : null}

        {product === "website" ? (
          <>
            <OptionGroup
              label="Website type"
              options={websiteKindOptions}
              value={websiteKind}
              onChange={setWebsiteKind}
            />
            <OptionGroup
              label="Complexity"
              options={complexityOptions}
              value={complexity}
              onChange={setComplexity}
            />
            <RangeField
              id="pages"
              label="Pages"
              value={pages}
              min={1}
              max={30}
              onChange={setPages}
            />
            <RangeField
              id="site-integrations"
              label="Integrations"
              value={integrations}
              min={0}
              max={8}
              onChange={setIntegrations}
            />
            <div>
              <p className="text-body-sm font-semibold text-text-heading">CMS</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { id: true, label: "Yes" },
                  { id: false, label: "No" },
                ].map((option) => (
                  <button
                    key={String(option.id)}
                    type="button"
                    onClick={() => setCms(option.id)}
                    className={cn(
                      "rounded-soft border px-3 py-1.5 text-body-sm transition-colors",
                      cms === option.id
                        ? "border-border-strong bg-bg-card text-text-heading"
                        : "border-border-dark bg-bg-card/40 text-text-body hover:border-border-strong"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>

      <div className="flex flex-col justify-between rounded-soft border border-border-dark bg-bg-card/30 p-6 sm:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
            {result.productLabel} estimate
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
