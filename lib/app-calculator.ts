export type AppType = "mvp" | "full" | "platform";
export type Complexity = "low" | "medium" | "high";
export type AiFeatures = "none" | "basic" | "advanced";

export interface CalculatorInputs {
  appType: AppType;
  complexity: Complexity;
  aiFeatures: AiFeatures;
  integrations: number;
  userRoles: number;
}

export interface CalculatorResult {
  minEstimate: number;
  maxEstimate: number;
  timelineWeeks: string;
  summary: string;
}

const basePrices: Record<AppType, [number, number]> = {
  mvp: [4000, 8000],
  full: [8000, 15000],
  platform: [15000, 35000],
};

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

export function calculateAppCost(inputs: CalculatorInputs): CalculatorResult {
  const [baseMin, baseMax] = basePrices[inputs.appType];
  const multiplier = complexityMultiplier[inputs.complexity];
  const integrationCost = inputs.integrations * 800;
  const roleCost = Math.max(0, inputs.userRoles - 1) * 1200;
  const ai = aiAddon[inputs.aiFeatures];

  const minEstimate = Math.round(
    (baseMin * multiplier + integrationCost + roleCost + ai) / 500
  ) * 500;
  const maxEstimate = Math.round(
    (baseMax * multiplier + integrationCost * 1.2 + roleCost * 1.2 + ai * 1.3) / 500
  ) * 500;

  const timelineWeeks =
    inputs.appType === "mvp"
      ? "4-8 weeks"
      : inputs.appType === "full"
        ? "8-14 weeks"
        : "12-20 weeks";

  const summary =
    inputs.appType === "mvp"
      ? "Core MVP scope - validate with real users before expanding."
      : inputs.appType === "full"
        ? "Full product scope - competitive feature set, ready to acquire users."
        : "Platform scope - multi-sided, enterprise, or AI-native complexity.";

  return { minEstimate, maxEstimate, timelineWeeks, summary };
}

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
