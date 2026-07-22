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
  icon?: "calendar" | "mail" | "linkedin";
};

export type ResourceNavIconId = "guides" | "blog" | "templates";
export type CompanyNavIconId = "about" | "careers";

export type HeaderDropdownItem = {
  label: string;
  href: string;
  description?: string;
  serviceIcon?: ServiceIconId;
  solutionIcon?: SolutionIconId;
  resourceIcon?: ResourceNavIconId;
  companyIcon?: CompanyNavIconId;
  featuredImageSrc?: string;
  featuredCtaLabel?: string;
};

export type HeaderDropdownColumn = {
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
      href?: string;
      showViewAll?: boolean;
      columns: HeaderDropdownColumn[];
      panelCols?: 1 | 2 | 3;
    };

/** Primary header: 3 products + solutions + resources + company. */
export const headerNavItems: HeaderNavItem[] = [
  {
    type: "dropdown",
    id: "services",
    label: "Services",
    href: "/#services",
    showViewAll: false,
    panelCols: 1,
    columns: [
      {
        label: "Products",
        items: [
          {
            label: "Application",
            href: "/services/application",
            description: "Digital products that scale",
            serviceIcon: "application",
          },
          {
            label: "Automations",
            href: "/services/automation",
            description: "AI workflows and agents",
            serviceIcon: "automation",
          },
          {
            label: "Website",
            href: "/services/website",
            description: "Sites that convert",
            serviceIcon: "website",
          },
        ],
      },
    ],
  },
  { type: "link", label: "Portfolio", href: "/portfolio" },
  {
    type: "dropdown",
    id: "solutions",
    label: "For",
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
            label: "Businesses & SMBs",
            href: "/solutions/businesses",
            solutionIcon: "hexagon",
          },
          {
            label: "Creators & Experts",
            href: "/solutions/creators",
            solutionIcon: "sparkles",
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
            label: "Rescue no-code / vibecode",
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
            label: "App cost calculator",
            href: "/tools/app-cost-calculator",
            description:
              "Get accurate development and timeline estimate in 3 minutes - no sales calls & 100% free.",
            featuredImageSrc: "/images/resources/app-calculator-thumb.png",
            featuredCtaLabel: "Open calculator",
          },
        ],
      },
      {
        items: [
          {
            label: "Guides",
            href: "/guides",
            description: "Free tools for founders",
            resourceIcon: "guides",
          },
          {
            label: "Blog",
            href: "/blog",
            description: "Expert tips and stories",
            resourceIcon: "blog",
          },
          {
            label: "Templates",
            href: "/templates",
            description: "Ready to use templates",
            resourceIcon: "templates",
          },
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
          { label: "About us", href: "/about", companyIcon: "about" },
          { label: "Careers", href: "/careers", companyIcon: "careers" },
        ],
      },
    ],
  },
];

export function flattenDropdownItems(
  item: Extract<HeaderNavItem, { type: "dropdown" }>
): HeaderDropdownItem[] {
  return item.columns.flatMap((col) => col.items);
}

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
      { label: "Services", href: "/#services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Who we serve", href: "/#who-we-serve" },
    ] as const satisfies readonly NavLink[],
  },
  {
    id: "resources",
    label: "Resources",
    links: [
      { label: "App calculator", href: "/tools/app-cost-calculator" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Templates", href: "/templates" },
    ] as const satisfies readonly NavLink[],
  },
  {
    id: "contact",
    label: "Contact",
    links: [
      { label: "Book a strategy call", href: "/book" },
      { label: "Send email", href: "mailto:hello@eterna.dev" },
    ] as const satisfies readonly FooterContactLink[],
  },
  {
    id: "company",
    label: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/eterna-creative",
        icon: "linkedin" as const,
        external: true,
      },
    ] as const satisfies readonly FooterContactLink[],
  },
] as const;
