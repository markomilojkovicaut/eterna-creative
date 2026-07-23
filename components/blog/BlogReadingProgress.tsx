"use client";

import { useEffect, useState } from "react";

/** Thin on-brand progress line flush under the fixed header (0px gap). */
export function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");

    const measureHeader = () => {
      if (!header) {
        setHeaderHeight(0);
        document.documentElement.style.setProperty("--blog-header-offset", "48px");
        return;
      }
      // Round up so the bar never sits a hair below the header edge (subpixel gap).
      const h = Math.ceil(header.getBoundingClientRect().height);
      setHeaderHeight(h);
      document.documentElement.style.setProperty(
        "--blog-header-offset",
        `${h}px`
      );
    };

    measureHeader();

    const onScroll = () => {
      measureHeader();
      const article = document.getElementById("blog-article");
      if (!article) {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0);
        return;
      }

      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const start = articleTop - 100;
      const end = articleTop + article.offsetHeight - window.innerHeight * 0.35;
      const raw = (window.scrollY - start) / Math.max(1, end - start);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const ro =
      typeof ResizeObserver !== "undefined" && header
        ? new ResizeObserver(measureHeader)
        : null;
    if (header && ro) ro.observe(header);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro?.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 z-[55] h-[3px]"
      style={{
        // Overlap 1px into the header so no page gap shows under the bar.
        top: Math.max(0, headerHeight - 1),
        marginTop: 0,
      }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-border-dark/25" />
      <div
        className="absolute inset-y-0 left-0 bg-hero-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
