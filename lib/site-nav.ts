/**
 * Site navigation — header (primary) and footer (full sitemap).
 * Keep these in sync with live routes under `app/`.
 */

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterContactLink = NavLink & {
  icon: "calendar" | "mail" | "linkedin";
};

/** Primary header links (desktop + mobile). CTA is separate. */
export const headerNavLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/#about" },
];

export const footerLinkGroups = [
  {
    id: "pages",
    label: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/#services" },
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
