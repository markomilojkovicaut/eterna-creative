import type { ServicePageContent } from "@/lib/service-page-types";
import { applicationPage } from "@/lib/service-pages/application";
import { automationPage } from "@/lib/service-pages/automation";
import {
  growthPage,
  inAppPage,
  productStrategyPage,
  socialPage,
} from "@/lib/service-pages/others";
import { researchPage } from "@/lib/service-pages/research";
import { websitePage } from "@/lib/service-pages/website";

export type { ServicePageContent } from "@/lib/service-page-types";

export const servicePageContent: Record<string, ServicePageContent> = {
  application: applicationPage,
  automation: automationPage,
  research: researchPage,
  "product-strategy": productStrategyPage,
  website: websitePage,
  growth: growthPage,
  "in-app": inAppPage,
  social: socialPage,
};

export function getServicePageContent(slug: string): ServicePageContent | null {
  return servicePageContent[slug] ?? null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicePageContent);
}

/** Map service card id to page path. */
export function getServiceSlug(serviceId: string): string | null {
  return servicePageContent[serviceId] ? `/services/${serviceId}` : null;
}
