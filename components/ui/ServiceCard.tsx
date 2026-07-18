"use client";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import {
  servicePhaseLabels,
  type Service,
  type ServiceLayout,
  type ServiceReveal,
} from "@/lib/services";
import { cn } from "@/lib/utils";

const revealHidden: Record<ServiceReveal, string> = {
  rise: "translate-y-3 opacity-0",
  "fade-blur": "opacity-0 blur-sm",
  "clip-up": "opacity-0 [clip-path:inset(100%_0_0_0)]",
  "slide-left": "translate-x-4 opacity-0",
  "scale-soft": "scale-[0.96] opacity-0",
};

const revealShown: Record<ServiceReveal, string> = {
  rise: "group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100",
  "fade-blur":
    "group-hover:opacity-100 group-hover:blur-none group-focus-within:opacity-100 group-focus-within:blur-none",
  "clip-up":
    "group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0_0)] group-focus-within:opacity-100 group-focus-within:[clip-path:inset(0_0_0_0)]",
  "slide-left":
    "group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100",
  "scale-soft":
    "group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100",
};

const iconMotion: Record<ServiceLayout, string> = {
  "stack-top":
    "transition-transform duration-300 group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5",
  "icon-end":
    "transition-transform duration-500 group-hover:rotate-6 group-focus-within:rotate-6",
  "phase-bottom":
    "transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110",
  "tags-rail":
    "transition-transform duration-300 group-hover:translate-x-0.5 group-focus-within:translate-x-0.5",
  centered:
    "transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 group-focus-within:-rotate-3 group-focus-within:scale-105",
  "dense-corner":
    "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-within:translate-x-1 group-focus-within:-translate-y-1",
};

function PhaseLabel({
  phase,
  highlight,
  className,
}: {
  phase: Service["phase"];
  highlight: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.12em]",
        highlight ? "text-brand-pink" : "text-brand-purple-light",
        className
      )}
    >
      {servicePhaseLabels[phase]}
    </p>
  );
}

function Title({
  service,
  highlight,
  className,
}: {
  service: Service;
  highlight: boolean;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-heading text-heading-md font-bold transition-[letter-spacing] duration-300",
        highlight ? "text-brand-pink" : "text-text-heading",
        "group-hover:tracking-wide group-focus-within:tracking-wide",
        className
      )}
    >
      {service.title}
    </h3>
  );
}

function Tags({
  tags,
  className,
  itemClassName,
}: {
  tags: string[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className={cn(
            "rounded-soft border border-border-dark bg-bg-card/40 px-2 py-0.5 text-[10px] font-medium tracking-wide text-text-sub",
            itemClassName
          )}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Description({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-body-sm leading-relaxed text-text-body transition-[opacity,transform,filter,clip-path] duration-300 ease-out motion-reduce:transition-none motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:blur-none motion-reduce:[clip-path:none]",
        revealHidden[service.reveal],
        revealShown[service.reveal],
        "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100",
        className
      )}
    >
      {service.description}
    </p>
  );
}

function LayoutBody({
  service,
  highlight,
}: {
  service: Service;
  highlight: boolean;
}) {
  const iconClass = iconMotion[service.layout];

  switch (service.layout) {
    case "icon-end":
      return (
        <>
          <PhaseLabel phase={service.phase} highlight={highlight} />
          <div className="flex items-start justify-between gap-3">
            <Title service={service} highlight={highlight} className="min-w-0 flex-1" />
            <div className={cn("shrink-0", iconClass)}>
              <ServiceIcon icon={service.icon} highlight={highlight} />
            </div>
          </div>
        </>
      );

    case "centered":
      return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <PhaseLabel phase={service.phase} highlight={highlight} />
          <div className={iconClass}>
            <ServiceIcon icon={service.icon} highlight={highlight} />
          </div>
          <Title service={service} highlight={highlight} />
        </div>
      );

    case "phase-bottom":
      return (
        <>
          <Title service={service} highlight={highlight} />
          <div className={cn("mt-3", iconClass)}>
            <ServiceIcon icon={service.icon} highlight={highlight} />
          </div>
          <PhaseLabel
            phase={service.phase}
            highlight={highlight}
            className="mt-6"
          />
        </>
      );

    case "tags-rail":
      return (
        <div className="flex flex-1 gap-4">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <PhaseLabel phase={service.phase} highlight={highlight} />
            <div className={iconClass}>
              <ServiceIcon icon={service.icon} highlight={highlight} />
            </div>
            <Title service={service} highlight={highlight} />
          </div>
          <Tags
            tags={service.tags}
            className="hidden w-16 shrink-0 flex-col content-start gap-1.5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 sm:flex"
            itemClassName="w-full text-center"
          />
        </div>
      );

    case "dense-corner":
      return (
        <>
          <div className="flex items-center gap-3">
            <div className={iconClass}>
              <ServiceIcon icon={service.icon} highlight={highlight} />
            </div>
            <PhaseLabel phase={service.phase} highlight={highlight} />
          </div>
          <Title service={service} highlight={highlight} className="mt-6" />
        </>
      );

    case "stack-top":
    default:
      return (
        <>
          <PhaseLabel phase={service.phase} highlight={highlight} />
          <div className={cn("mt-1", iconClass)}>
            <ServiceIcon icon={service.icon} highlight={highlight} />
          </div>
          <Title service={service} highlight={highlight} className="mt-1" />
        </>
      );
  }
}

export function ServiceCard({
  service,
  highlighted,
  className,
}: {
  service: Service;
  highlighted: boolean;
  className?: string;
}) {
  const highlight = service.iconHighlight ?? false;
  const showInlineTags = service.layout !== "tags-rail";

  return (
    <article
      tabIndex={0}
      className={cn(
        "group relative flex min-h-[240px] flex-col overflow-hidden p-4 outline-none transition-opacity duration-300 sm:min-h-[260px] sm:p-5 lg:min-h-[280px] lg:p-6",
        "focus-visible:ring-2 focus-visible:ring-brand-purple-light/50",
        highlighted ? "opacity-100" : "opacity-[0.35]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        <LayoutBody service={service} highlight={highlight} />

        <div className="relative mt-auto min-h-[4.5rem] pt-4">
          {showInlineTags && (
            <Tags
              tags={service.tags}
              className="absolute inset-x-0 bottom-0 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-0 group-focus-within:translate-y-1 group-focus-within:opacity-0 motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-within:translate-y-0"
            />
          )}
          {!showInlineTags && (
            <Tags
              tags={service.tags}
              className="absolute inset-x-0 bottom-0 flex sm:hidden transition-all duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
            />
          )}
          <Description
            service={service}
            className="absolute inset-x-0 bottom-0"
          />
        </div>
      </div>
    </article>
  );
}
