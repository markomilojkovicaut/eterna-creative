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

export type HeaderNavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown";
      id: "services" | "solutions" | "resources";
      label: string;
      href: string;
      items: HeaderDropdownItem[];
    };

/** Primary header structure (desktop dropdowns + mobile lists). */
export const headerNavItems: HeaderNavItem[] = [
  {
    type: "dropdown",
    id: "services",
    label: "Services",
    href: "/services",
    items: [
      {
        label: "Research & validation",
        href: "/services/research",
        serviceIcon: "research",
      },
      {
        label: "Product strategy",
        href: "/services/product-strategy",
        serviceIcon: "strategy",
      },
      {
        label: "Application",
        href: "/services/application",
        serviceIcon: "application",
      },
      {
        label: "Automation AI",
        href: "/services/automation",
        serviceIcon: "automation",
      },
      {
        label: "Website",
        href: "/services/website",
        serviceIcon: "website",
      },
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
  { type: "link", label: "Portfolio", href: "/portfolio" },
  {
    type: "dropdown",
    id: "solutions",
    label: "Solutions",
    href: "/#solutions",
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
    type: "dropdown",
    id: "resources",
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Resources hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Templates", href: "/templates" },
      {
        label: "App calculator",
        href: "/tools/app-cost-calculator",
      },
    ],
  },
  { type: "link", label: "About", href: "/#about" },
];

/** @deprecated Prefer headerNavItems — kept for simple flat consumers. */
export const headerNavLinks: NavLink[] = headerNavItems.map((item) =>
  item.type === "link"
    ? { label: item.label, href: item.href }
    : { label: item.label, href: item.href }
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
      { label: "About", href: "/#about" },
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
