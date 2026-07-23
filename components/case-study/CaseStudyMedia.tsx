"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import type { CaseStudyMedia as Media } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

export function CaseStudyMedia({
  media,
  className,
  aspectClass = "aspect-[16/10]",
  priority = false,
  browserFrame = false,
  enableLightbox = true,
}: {
  media: Media;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  browserFrame?: boolean;
  enableLightbox?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const label = media.label ?? "Product UI";
  const hasSrc = Boolean(media.src);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const image = hasSrc ? (
    <Image
      src={media.src!}
      alt={media.alt}
      fill
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 960px"
      className={cn(
        "object-cover transition-transform duration-500 ease-out",
        "group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
        browserFrame && "object-top"
      )}
    />
  ) : (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card">
      <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-40" />
      <span className="relative z-[1] rounded-soft border border-border-dark bg-bg-base/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        {label}
      </span>
      <span className="relative z-[1] text-body-sm text-text-muted">
        Screenshot coming soon
      </span>
    </div>
  );

  const expandBadge = enableLightbox ? (
    <span
      className={cn(
        "pointer-events-none absolute bottom-3 right-3 z-[2] inline-flex size-9 items-center justify-center rounded-soft",
        "border border-border-dark bg-bg-base/85 text-text-heading opacity-0 shadow-sm backdrop-blur-sm",
        "transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100",
        "motion-reduce:opacity-100"
      )}
      aria-hidden
    >
      <ExpandIcon />
    </span>
  ) : null;

  const card = (
    <span
      className={cn(
        "group relative block w-full overflow-hidden rounded-soft border border-border-dark bg-bg-card/40 text-left",
        enableLightbox && "cursor-zoom-in",
        className
      )}
    >
      {browserFrame ? (
        <>
          <span className="flex items-center gap-1.5 border-b border-border-dark bg-bg-card/80 px-3 py-2">
            <span className="size-2 rounded-full bg-border-strong" aria-hidden />
            <span className="size-2 rounded-full bg-border-strong" aria-hidden />
            <span className="size-2 rounded-full bg-border-strong" aria-hidden />
            <span className="ml-2 truncate text-[10px] text-text-muted">
              {media.alt}
            </span>
          </span>
          <span className={cn("relative block w-full", aspectClass)}>
            {image}
            {expandBadge}
          </span>
        </>
      ) : (
        <span className={cn("relative block w-full", aspectClass)}>
          {image}
          {expandBadge}
        </span>
      )}
    </span>
  );

  return (
    <>
      {enableLightbox ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="block w-full border-0 bg-transparent p-0"
          aria-label={`View ${media.alt} fullscreen`}
        >
          {card}
        </button>
      ) : (
        card
      )}

      {mounted && open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-base/90 p-4 backdrop-blur-sm sm:p-8"
              onClick={() => setOpen(false)}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-[101] rounded-soft border border-border-dark bg-bg-card/90 px-3 py-1.5 text-[12px] font-semibold text-text-heading"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <div
                className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-soft border border-border-dark bg-bg-card"
                onClick={(e) => e.stopPropagation()}
              >
                <p id={titleId} className="sr-only">
                  {media.alt}
                </p>
                <div className="relative aspect-[16/10] w-full">
                  {media.src ? (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="100vw"
                      className="object-contain bg-bg-base"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                        {label}
                      </span>
                      <span className="text-body-sm text-text-muted">
                        Screenshot coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
