import { getServiceSlug } from "@/lib/service-pages";
import { services, type Service } from "@/lib/services";

export type WhatWeDoPillarId = "build" | "plan" | "grow";

export interface WhatWeDoLink {
  id: string;
  title: string;
  href: string;
  description?: string;
  /** Larger type for primary sell products (Build). */
  emphasize?: boolean;
}

export interface WhatWeDoPillar {
  id: WhatWeDoPillarId;
  number: string;
  title: string;
  description: string;
  links: WhatWeDoLink[];
}

const buildOrder = ["application", "website", "automation"] as const;
const planOrder = ["research", "product-strategy"] as const;
const growOrder = ["growth", "in-app", "social"] as const;

const productTitles: Record<(typeof buildOrder)[number], string> = {
  application: "Application",
  website: "Website",
  automation: "Automation",
};

function toLink(
  service: Service,
  opts?: { emphasize?: boolean; title?: string }
): WhatWeDoLink {
  return {
    id: service.id,
    title: opts?.title ?? service.title,
    href: getServiceSlug(service.id) ?? `/services/${service.id}`,
    description: service.description,
    emphasize: opts?.emphasize,
  };
}

function linksFor(
  ids: readonly string[],
  opts?: { emphasize?: boolean; titles?: Record<string, string> }
): WhatWeDoLink[] {
  return ids
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is Service => Boolean(s))
    .map((s) =>
      toLink(s, {
        emphasize: opts?.emphasize,
        title: opts?.titles?.[s.id],
      })
    );
}

/** Utility-style What we do: Build / Plan / Grow with buyer-language links. */
export const whatWeDoPillars: WhatWeDoPillar[] = [
  {
    id: "build",
    number: "01",
    title: "Build",
    description:
      "Ship the product users pay for - applications, websites, and AI automations with flat scope and a senior team on the work.",
    links: linksFor(buildOrder, {
      emphasize: true,
      titles: productTitles,
    }),
  },
  {
    id: "plan",
    number: "02",
    title: "Plan",
    description:
      "Validate the idea and lock strategy before you spend on build - so the product has a path to revenue, not just a feature list.",
    links: linksFor(planOrder),
  },
  {
    id: "grow",
    number: "03",
    title: "Grow",
    description:
      "Iterate from real usage - retention loops, lifecycle marketing, and the next release cycle after launch.",
    links: linksFor(growOrder),
  },
];
