export const footerTagline =
  "AI-native product studio helping you validate, build, and grow products you own - from idea to revenue.";

export const footerCopyright = "© 2026 Eterna Creative. All rights reserved.";

export const newsletterCopy = {
  title: "Subscribe to our PreTRACTION newsletter",
  placeholder: "Type your email...",
  subline: "Monthly insights on building better products.",
};

export const footerLinkGroups = [
  {
    id: "pages",
    label: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Case studies", href: "/portfolio" },
      { label: "Career", href: "/jobs" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "Blog", href: "/blog" },
      { label: "Templates", href: "/templates" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    links: [
      { label: "Book a call", href: "/book", icon: "calendar" as const },
      { label: "Send email", href: "mailto:hello@eterna.dev", icon: "mail" as const },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: "linkedin" as const,
        external: true,
      },
    ],
  },
] as const;
