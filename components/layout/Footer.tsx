import Image from "next/image";
import Link from "next/link";

import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import {
  footerCopyright,
  footerLinkGroups,
  footerTagline,
} from "@/lib/footer";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

function ContactLinkIcon({ icon }: { icon: "calendar" | "mail" | "linkedin" }) {
  if (icon === "calendar") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="shrink-0 text-brand-purple-light"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }

  if (icon === "mail") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="shrink-0 text-brand-purple-light"
        aria-hidden
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 text-brand-purple-light"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-bg-base pb-[clamp(3rem,12vw,8rem)]">
      <div className={cn("relative z-10 py-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
            <div className="flex flex-col">
              <Link href="/" className="inline-flex h-8 w-fit items-center">
                <Image
                  src="/images/eterna-logo.png"
                  alt="Eterna Creative"
                  width={1024}
                  height={159}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="mt-5 max-w-[400px] text-body-sm leading-relaxed text-text-body sm:text-body-md">
                {footerTagline}
              </p>
              <p className="mt-auto pt-10 text-body-sm text-text-muted">
                {footerCopyright}
              </p>
            </div>

            <div className="flex min-h-0 flex-col gap-8">
              <NewsletterSignup className="min-h-[200px] flex-1 lg:min-h-0" />

              <div className="grid w-full grid-cols-3 gap-x-6 gap-y-6 sm:gap-x-8">
                {footerLinkGroups.map((group) => (
                  <div key={group.id}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
                      {group.label}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((link) => {
                        const isContact = "icon" in link;

                        return (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="inline-flex items-center gap-2 text-body-sm text-text-heading transition-opacity hover:opacity-80"
                              {...("external" in link && link.external
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }
                                : {})}
                            >
                              {isContact && <ContactLinkIcon icon={link.icon} />}
                              {link.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-brand-purple-dark to-bg-base" />
        <p
          className={cn(
            "relative translate-y-[40%] text-center font-heading text-[clamp(4rem,18vw,12rem)] font-black leading-none tracking-[-0.04em] text-text-heading/[0.06]",
            "[clip-path:inset(0_0_40%_0)]"
          )}
        >
          ETERNA
        </p>
      </div>
    </footer>
  );
}
