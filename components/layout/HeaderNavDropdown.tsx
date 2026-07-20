"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SolutionIcon } from "@/components/ui/SolutionIcon";
import type { HeaderDropdownItem, HeaderNavItem } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const triggerClass =
  "inline-flex items-center gap-1 text-[12px] text-text-body transition-colors hover:text-text-heading";

const panelWidthByCols: Record<1 | 2 | 3, string> = {
  1: "w-[min(100vw-2rem,240px)]",
  2: "w-[min(100vw-2rem,480px)]",
  3: "w-[min(100vw-2rem,640px)]",
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn(
        "transition-transform duration-200",
        open && "rotate-180"
      )}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function DropdownItemButton({
  item,
  onNavigate,
}: {
  item: HeaderDropdownItem;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-soft border border-transparent px-3 py-2.5 no-underline",
        "text-left transition-colors hover:border-border-dark hover:bg-bg-base/60"
      )}
    >
      {item.serviceIcon ? (
        <ServiceIcon icon={item.serviceIcon} className="!size-9 shrink-0" />
      ) : null}
      {item.solutionIcon ? (
        <SolutionIcon icon={item.solutionIcon} className="shrink-0" />
      ) : null}
      <span className="min-w-0">
        <span className="block text-[12px] font-semibold text-text-heading">
          {item.label}
        </span>
        {item.description ? (
          <span className="mt-0.5 block text-[11px] leading-snug text-text-muted">
            {item.description}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

function DropdownColumns({
  item,
  onNavigate,
}: {
  item: Extract<HeaderNavItem, { type: "dropdown" }>;
  onNavigate: () => void;
}) {
  const cols = item.panelCols ?? Math.min(item.columns.length, 3);
  const gridCols =
    cols === 3 ? "grid-cols-3" : cols === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className={cn("grid gap-3", gridCols)}>
      {item.columns.map((column, index) => (
        <div key={column.label ?? `col-${index}`} className="flex flex-col gap-1">
          {column.label ? (
            <p className="px-3 pb-1 pt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              {column.label}
            </p>
          ) : null}
          {column.items.map((entry) => (
            <DropdownItemButton
              key={entry.href + entry.label}
              item={entry}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function HeaderNavDropdown({
  item,
}: {
  item: Extract<HeaderNavItem, { type: "dropdown" }>;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const cols = (item.panelCols ?? Math.min(item.columns.length, 3)) as 1 | 2 | 3;

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Chevron open={open} />
      </button>

      {/* pt-3 keeps a hover bridge so the panel does not close between trigger and menu */}
      <div
        id={menuId}
        role="menu"
        hidden={!open}
        className={cn(
          "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3",
          !open && "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "rounded-soft border border-border-dark bg-bg-card/95 p-3 shadow-glow-purple backdrop-blur-md",
            panelWidthByCols[cols]
          )}
        >
          <DropdownColumns item={item} onNavigate={() => setOpen(false)} />

          {item.showViewAll && item.href ? (
            <div className="mt-2 border-t border-border-dark pt-2">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-purple-light no-underline hover:bg-bg-base/50"
              >
                View all {item.label.toLowerCase()}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function MobileNavSection({
  item,
  onNavigate,
}: {
  item: HeaderNavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (item.type === "link") {
    return (
      <Link href={item.href} className={triggerClass} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className={cn(triggerClass, "w-fit")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Chevron open={open} />
      </button>
      {open ? (
        <div className="flex flex-col gap-3 border-l border-border-dark pl-3">
          {item.columns.map((column, index) => (
            <div
              key={column.label ?? `col-${index}`}
              className="flex flex-col gap-1"
            >
              {column.label ? (
                <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                  {column.label}
                </p>
              ) : null}
              {column.items.map((entry) => (
                <DropdownItemButton
                  key={entry.href + entry.label}
                  item={entry}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          ))}
          {item.showViewAll && item.href ? (
            <Link
              href={item.href}
              onClick={onNavigate}
              className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-purple-light no-underline"
            >
              View all {item.label.toLowerCase()}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
