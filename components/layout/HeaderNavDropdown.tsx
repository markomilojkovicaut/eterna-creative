"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SolutionIcon } from "@/components/ui/SolutionIcon";
import { CalculatorPhonePreview } from "@/components/ui/CalculatorPhonePreview";
import type {
  HeaderDropdownItem,
  HeaderNavItem,
  ResourceNavIconId,
} from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const triggerClass =
  "inline-flex h-8 items-center gap-1 text-[12px] leading-none text-text-body transition-colors hover:text-text-heading";

const panelWidthByCols: Record<1 | 2 | 3, string> = {
  1: "w-[min(100vw-2rem,280px)]",
  2: "w-[min(100vw-2rem,480px)]",
  3: "w-[min(100vw-2rem,640px)]",
};

const resourceIcons: Record<ResourceNavIconId, React.ReactNode> = {
  guides: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />,
  blog: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </>
  ),
  templates: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
};

const companyIcons: Record<"about" | "careers", React.ReactNode> = {
  about: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </>
  ),
  careers: (
    <>
      <rect width="16" height="12" x="4" y="6" rx="2" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 12h16" />
    </>
  ),
};

/** Circle frame matching ServiceIcon / SolutionIcon. */
function NavCircleIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center",
        className
      )}
      aria-hidden
    >
      <span className="absolute inset-0 rounded-full border border-border-dark" />
      <span className="relative flex size-8 items-center justify-center rounded-full bg-bg-card">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand-purple-light"
        >
          {children}
        </svg>
      </span>
    </span>
  );
}

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
      {item.resourceIcon ? (
        <NavCircleIcon className="!size-9">
          {resourceIcons[item.resourceIcon]}
        </NavCircleIcon>
      ) : null}
      {item.companyIcon ? (
        <NavCircleIcon className="!size-9">
          {companyIcons[item.companyIcon]}
        </NavCircleIcon>
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

function ResourcesDropdownPanel({
  item,
  onNavigate,
}: {
  item: Extract<HeaderNavItem, { type: "dropdown" }>;
  onNavigate: () => void;
}) {
  const featured = item.columns[0]?.items[0];
  const links = item.columns[1]?.items ?? [];

  if (!featured) return null;

  return (
    <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-[1fr_1.05fr]">
      <Link
        href={featured.href}
        onClick={onNavigate}
        className={cn(
          "flex flex-col gap-2.5 rounded-soft border border-border-dark bg-bg-base/40 p-3 no-underline",
          "transition-colors hover:border-border-strong hover:bg-bg-base/70"
        )}
      >
        <CalculatorPhonePreview />
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-text-heading">
            {featured.label}
          </p>
          {featured.description ? (
            <p className="mt-1 text-[11px] leading-snug text-text-muted">
              {featured.description}
            </p>
          ) : null}
        </div>
        <span className="inline-flex w-fit items-center justify-center rounded-soft bg-white px-3 py-1.5 text-[11px] font-semibold text-bg-base transition-opacity hover:opacity-90">
          {featured.featuredCtaLabel ?? "Open calculator"}
        </span>
      </Link>

      <div className="flex flex-col gap-1">
        {links.map((entry) => (
          <Link
            key={entry.href + entry.label}
            href={entry.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-soft border border-transparent px-3 py-2.5 no-underline",
              "text-left transition-colors hover:border-border-dark hover:bg-bg-base/60"
            )}
          >
            {entry.resourceIcon ? (
              <NavCircleIcon className="!size-9">
                {resourceIcons[entry.resourceIcon]}
              </NavCircleIcon>
            ) : null}
            <span className="min-w-0">
              <span className="block text-[12px] font-semibold text-text-heading">
                {entry.label}
              </span>
              {entry.description ? (
                <span className="mt-0.5 block text-[11px] leading-snug text-text-muted">
                  {entry.description}
                </span>
              ) : null}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DropdownColumns({
  item,
  onNavigate,
}: {
  item: Extract<HeaderNavItem, { type: "dropdown" }>;
  onNavigate: () => void;
}) {
  if (item.id === "resources") {
    return <ResourcesDropdownPanel item={item} onNavigate={onNavigate} />;
  }

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
  const panelWidth =
    item.id === "resources"
      ? "w-[min(100vw-2rem,520px)]"
      : panelWidthByCols[cols];

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
            panelWidth
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
          {item.id === "resources" ? (
            <ResourcesDropdownPanel item={item} onNavigate={onNavigate} />
          ) : (
            item.columns.map((column, index) => (
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
            ))
          )}
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
