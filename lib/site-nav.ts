/**
 * Site navigation — header (primary + dropdowns) and footer (full sitemap).
 * Keep these in sync with live routes under `app/`.
 */

import type { ServiceIconId } from "@/lib/services";
import type { SolutionIconId } from "@/lib/solutions";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterContactLink = NavLink & {
  icon: "calendar" | "mail" | "linkedin";
};

export type HeaderDropdownItem = {
  label: string;
  href: string;
  description?: string;
  serviceIcon?: ServiceIconId;
  solutionIcon?: SolutionIconId;
};

export type HeaderDropdownColumn = {
  /** Optional section heading (e.g. Build, Stage). */
  label?: string;
  items: HeaderDropdownItem[];
};

export type HeaderDropdownId =
  | "services"
  | "solutions"
  | "resources"
  | "company";

export type HeaderNavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown";
      id: HeaderDropdownId;
      label: string;
      /** Hub route for optional “View all” footer. */
      href?: string;
      showViewAll?: boolean;
      columns: HeaderDropdownColumn[];
      /** Desktop panel column count (defaults to columns.length). */
      panelCols?: 1 | 2 | 3;
    };

/** Primary header structure (desktop dropdowns + mobile lists). */
export const headerNavItems: HeaderNavItem[] = [
  {
    type: "dropdown",
    id: "services",
    label: "Services",
    href: "/services",
    showViewAll: true,
    panelCols: 3,
    columns: [
      {
        label: "Build",
        items: [
          {
            label: "Applications",
            href: "/services/application",
            serviceIcon: "application",
          },
          {
            label: "Websites",
            href: "/services/website",
            serviceIcon: "website",
          },
          {
            label: "Automations",
            href: "/services/automation",
            serviceIcon: "automation",
          },
        ],
      },
      {
        label: "Plan",
        items: [
          {
            label: "Validation",
            href: "/services/research",
            serviceIcon: "research",
          },
          {
            label: "Strategy",
            href: "/services/product-strategy",
            serviceIcon: "strategy",
          },
        ],
      },
      {
        label: "Grow",
        items: [
          {
            label: "Growth & optimisations",
            href: "/services/growth",
            serviceIcon: "growth",
          },
          {
            label: "In-app marketing",
            href: "/services/in-app",
            serviceIcon: "in-app",
          },
          {
            label: "Social marketing",
            href: "/services/social",
            serviceIcon: "social",
          },
        ],
      },
    ],
  },
  { type: "link", label: "Portfolio", href: "/portfolio" },
  {
    type: "dropdown",
    id: "solutions",
    label: "Solutions",
    showViewAll: false,
    panelCols: 2,
    columns: [
      {
        label: "For",
        items: [
          {
            label: "Founders & Startups",
            href: "/solutions/founders",
            solutionIcon: "rocket",
          },
          {
            label: "Creators & Experts",
            href: "/solutions/creators",
            solutionIcon: "sparkles",
          },
          {
            label: "Businesses & SMBs",
            href: "/solutions/businesses",
            solutionIcon: "hexagon",
          },
        ],
      },
      {
        label: "Stage",
        items: [
          {
            label: "I have an idea",
            href: "/blueprint",
          },
          {
            label: "Migrating from no-code",
            href: "/migration",
          },
          {
            label: "Business automation",
            href: "/services/automation",
          },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    id: "resources",
    label: "Resources",
    showViewAll: false,
    panelCols: 2,
    columns: [
      {
        items: [
          {
            label: "App calculator",
            href: "/tools/app-cost-calculator",
          },
        ],
      },
      {
        items: [
          { label: "Blog", href: "/blog" },
          { label: "Guides", href: "/guides" },
          { label: "Templates", href: "/templates" },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    id: "company",
    label: "Company",
    showViewAll: false,
    panelCols: 1,
    columns: [
      {
        items: [
          { label: "About us", href: "/about" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
  },
];

/** Flat list of all dropdown links (mobile helpers, tests). */
export function flattenDropdownItems(
  item: Extract<HeaderNavItem, { type: "dropdown" }>
): HeaderDropdownItem[] {
  return item.columns.flatMap((col) => col.items);
}

/** @deprecated Prefer headerNavItems — kept for simple flat consumers. */
export const headerNavLinks: NavLink[] = headerNavItems.map((item) =>
  item.type === "link"
    ? { label: item.label, href: item.href }
    : {
        label: item.label,
        href: item.href ?? item.columns[0]?.items[0]?.href ?? "/",
      }
);

export const footerLinkGroups = [
  {
    id: "pages",
    label: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/#solutions" },
      { label: "Blueprint", href: "/blueprint" },
      { label: "Migration", href: "/migration" },
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
    ] as const satisfies readonly NavLink[],
  },
  {
    id: "resources",
    label: "Resources",
    links: [
      { label: "Resources hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Templates", href: "/templates" },
      { label: "App calculator", href: "/tools/app-cost-calculator" },
    ] as const satisfies readonly NavLink[],
  },
  {
    id: "contact",
    label: "Contact",
    links: [
      {
        label: "Book a strategy call",
        href: "/book",
        icon: "calendar" as const,
      },
      {
        label: "Send email",
        href: "mailto:hello@eterna.dev",
        icon: "mail" as const,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/eterna-creative",
        icon: "linkedin" as const,
        external: true,
      },
    ] as const satisfies readonly FooterContactLink[],
  },
] as const;
