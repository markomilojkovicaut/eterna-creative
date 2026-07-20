export type ServiceHeadingLine = {
  text: string;
  variant?: "default" | "gradient";
};

export type ServiceStat = {
  num: string;
  label: string;
};

export type ServiceCardItem = {
  title: string;
  body: string;
  tags?: string[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
  outcome?: string;
};

export type ServicePackage = {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export type ServiceFaqItem = {
  q: string;
  a: string;
};

export type ServiceComparisonRow = {
  label: string;
  us: string;
  them: string;
};

export type ServiceDifferentiator = {
  title: string;
  body: string;
  items?: ServiceCardItem[];
  comparison?: ServiceComparisonRow[];
  comparisonLabels?: { us: string; them: string };
};

export interface ServicePageContent {
  slug: string;
  hero: {
    label: string;
    lines: ServiceHeadingLine[];
    subheading: string;
    stats?: ServiceStat[];
    secondaryCta?: { label: string; href: string };
  };
  problem: {
    title: string;
    body: string;
    cards?: ServiceCardItem[];
  };
  /** Card grid - preferred over flat deliverables. */
  included: {
    title: string;
    description?: string;
    items: ServiceCardItem[];
  };
  /** Optional middle act: stack, score, tools, etc. */
  differentiator?: ServiceDifferentiator;
  process: {
    title: string;
    description?: string;
    steps: ServiceProcessStep[];
  };
  packages?: {
    title: string;
    description?: string;
    tiers: ServicePackage[];
  };
  faq?: {
    title: string;
    items: ServiceFaqItem[];
  };
  finalCta: {
    title: string;
    body: string;
  };
  relatedEngineIds: string[];
  relatedLinks?: { label: string; href: string }[];
  /** @deprecated Prefer included.items - kept for migration. */
  deliverables?: string[];
}
