"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" },
];

const navLinkClass =
  "text-[12px] text-text-body transition-colors hover:text-text-heading";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border-default bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent backdrop-blur-none"
      )}
    >
      <div className={LAYOUT_OUTER_CLASS}>
        <div
          className={cn(
            LAYOUT_INNER_CLASS,
            "flex items-center justify-between py-2"
          )}
        >
          <Link href="/" className="inline-flex h-8 shrink-0 items-center">
            <Image
              src="/images/eterna-logo.png"
              alt="Eterna Creative"
              width={156}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <CallToActionLink href="/book" size="sm">
              Book a call
            </CallToActionLink>
          </div>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-soft text-text-sub md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={cn(
          "md:hidden",
          mobileOpen ? "block" : "hidden",
          scrolled
            ? "border-t border-border-default bg-black/95 backdrop-blur-md"
            : "border-t border-transparent bg-transparent backdrop-blur-none"
        )}
      >
        <div className={LAYOUT_OUTER_CLASS}>
          <div className={cn(LAYOUT_INNER_CLASS, "flex flex-col gap-4 py-4")}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <CallToActionLink href="/book" size="sm" className="w-fit">
              Book a call
            </CallToActionLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
