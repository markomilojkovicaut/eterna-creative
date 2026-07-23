export type ProductKind = "application" | "automation" | "website";

export type AppScope = "mvp" | "full" | "platform";
export type Complexity = "low" | "medium" | "high";
export type AiFeatures = "none" | "basic" | "advanced";
export type WebsiteKind = "marketing" | "product" | "hybrid";
export type AutomationScope = "single" | "ops" | "agentic";

export interface ApplicationInputs {
  product: "application";
  scope: AppScope;
  complexity: Complexity;
  aiFeatures: AiFeatures;
  integrations: number;
  userRoles: number;
}

export interface AutomationInputs {
  product: "automation";
  scope: AutomationScope;
  complexity: Complexity;
  aiFeatures: AiFeatures;
  workflows: number;
  systems: number;
}

export interface WebsiteInputs {
  product: "website";
  kind: WebsiteKind;
  complexity: Complexity;
  pages: number;
  integrations: number;
  cms: boolean;
}

export type CalculatorInputs =
  | ApplicationInputs
  | AutomationInputs
  | WebsiteInputs;

/** @deprecated Prefer ApplicationInputs.scope */
export type AppType = AppScope;

export interface CalculatorResult {
  minEstimate: number;
  maxEstimate: number;
  timelineWeeks: string;
  summary: string;
  productLabel: string;
}

const complexityMultiplier: Record<Complexity, number> = {
  low: 1,
  medium: 1.25,
  high: 1.5,
};

const aiAddon: Record<AiFeatures, number> = {
  none: 0,
  basic: 2000,
  advanced: 5000,
};

const applicationBase: Record<AppScope, [number, number]> = {
  mvp: [4000, 8000],
  full: [8000, 15000],
  platform: [15000, 35000],
};

const automationBase: Record<AutomationScope, [number, number]> = {
  single: [800, 2000],
  ops: [2500, 6000],
  agentic: [5000, 12000],
};

const websiteBase: Record<WebsiteKind, [number, number]> = {
  marketing: [2000, 5000],
  product: [4000, 9000],
  hybrid: [6000, 14000],
};

function roundTo500(n: number) {
  return Math.round(n / 500) * 500;
}

function calculateApplication(inputs: ApplicationInputs): CalculatorResult {
  const [baseMin, baseMax] = applicationBase[inputs.scope];
  const multiplier = complexityMultiplier[inputs.complexity];
  const integrationCost = inputs.integrations * 800;
  const roleCost = Math.max(0, inputs.userRoles - 1) * 1200;
  const ai = aiAddon[inputs.aiFeatures];

  const minEstimate = roundTo500(
    baseMin * multiplier + integrationCost + roleCost + ai
  );
  const maxEstimate = roundTo500(
    baseMax * multiplier + integrationCost * 1.2 + roleCost * 1.2 + ai * 1.3
  );

  const timelineWeeks =
    inputs.scope === "mvp"
      ? "4-8 weeks"
      : inputs.scope === "full"
        ? "8-14 weeks"
        : "12-20 weeks";

  const summary =
    inputs.scope === "mvp"
      ? "Application MVP - validate with real users before expanding."
      : inputs.scope === "full"
        ? "Full application - competitive feature set, ready to acquire users."
        : "Platform scope - multi-sided, enterprise, or AI-native complexity.";

  return {
    minEstimate,
    maxEstimate,
    timelineWeeks,
    summary,
    productLabel: "Application",
  };
}

function calculateAutomation(inputs: AutomationInputs): CalculatorResult {
  const [baseMin, baseMax] = automationBase[inputs.scope];
  const multiplier = complexityMultiplier[inputs.complexity];
  const workflowCost = Math.max(0, inputs.workflows - 1) * 450;
  const systemCost = Math.max(0, inputs.systems - 1) * 350;
  const ai = aiAddon[inputs.aiFeatures] * 0.6;

  const minEstimate = roundTo500(
    baseMin * multiplier + workflowCost + systemCost + ai
  );
  const maxEstimate = roundTo500(
    baseMax * multiplier + workflowCost * 1.25 + systemCost * 1.25 + ai * 1.3
  );

  const timelineWeeks =
    inputs.scope === "single"
      ? "1-3 weeks"
      : inputs.scope === "ops"
        ? "3-6 weeks"
        : "6-12 weeks";

  const summary =
    inputs.scope === "single"
      ? "Single automation - one high-leverage workflow live and monitored."
      : inputs.scope === "ops"
        ? "Ops automation suite - multi-step workflows across your stack."
        : "Agentic automation - AI agents + workflows for ongoing operations.";

  return {
    minEstimate,
    maxEstimate,
    timelineWeeks,
    summary,
    productLabel: "Automation",
  };
}

function calculateWebsite(inputs: WebsiteInputs): CalculatorResult {
  const [baseMin, baseMax] = websiteBase[inputs.kind];
  const multiplier = complexityMultiplier[inputs.complexity];
  const pageCost = Math.max(0, inputs.pages - 5) * 180;
  const integrationCost = inputs.integrations * 400;
  const cmsCost = inputs.cms ? 900 : 0;

  const minEstimate = roundTo500(
    baseMin * multiplier + pageCost + integrationCost + cmsCost
  );
  const maxEstimate = roundTo500(
    baseMax * multiplier + pageCost * 1.2 + integrationCost * 1.25 + cmsCost * 1.2
  );

  const timelineWeeks =
    inputs.kind === "marketing"
      ? "2-5 weeks"
      : inputs.kind === "product"
        ? "4-8 weeks"
        : "6-12 weeks";

  const summary =
    inputs.kind === "marketing"
      ? "Marketing site - clear story, conversion-focused pages, fast to ship."
      : inputs.kind === "product"
        ? "Product website - product narrative, waitlist/signup, and content system."
        : "Hybrid site - marketing + product surfaces with deeper integrations.";

  return {
    minEstimate,
    maxEstimate,
    timelineWeeks,
    summary,
    productLabel: "Website",
  };
}

export function calculateProductCost(inputs: CalculatorInputs): CalculatorResult {
  switch (inputs.product) {
    case "application":
      return calculateApplication(inputs);
    case "automation":
      return calculateAutomation(inputs);
    case "website":
      return calculateWebsite(inputs);
  }
}

/** @deprecated Use calculateProductCost */
export function calculateAppCost(
  inputs: Omit<ApplicationInputs, "product"> & { appType: AppScope }
): CalculatorResult {
  return calculateApplication({
    product: "application",
    scope: inputs.appType,
    complexity: inputs.complexity,
    aiFeatures: inputs.aiFeatures,
    integrations: inputs.integrations,
    userRoles: inputs.userRoles,
  });
}

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
