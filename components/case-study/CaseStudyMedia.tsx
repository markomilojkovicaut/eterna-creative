import Image from "next/image";

import type { CaseStudyMedia } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudyMedia({
  media,
  className,
  aspectClass = "aspect-[16/10]",
  priority = false,
  browserFrame = false,
}: {
  media: CaseStudyMedia;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  /** Browser chrome for homepage shots */
  browserFrame?: boolean;
}) {
  const label = media.label ?? "Product UI";
  const hasSrc = Boolean(media.src);

  const frame = (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-soft border border-border-dark bg-bg-card/40",
        aspectClass,
        className
      )}
    >
      {hasSrc ? (
        <Image
          src={media.src!}
          alt={media.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card"
          aria-hidden
        >
          <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-40" />
          <span className="relative z-[1] rounded-soft border border-border-dark bg-bg-base/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
            {label}
          </span>
          <span className="relative z-[1] text-body-sm text-text-muted">
            Screenshot coming soon
          </span>
        </div>
      )}
    </div>
  );

  if (!browserFrame) return frame;

  return (
    <div className={cn("overflow-hidden rounded-soft border border-border-dark", className)}>
      <div className="flex items-center gap-1.5 border-b border-border-dark bg-bg-card/80 px-3 py-2">
        <span className="size-2 rounded-full bg-border-strong" aria-hidden />
        <span className="size-2 rounded-full bg-border-strong" aria-hidden />
        <span className="size-2 rounded-full bg-border-strong" aria-hidden />
        <span className="ml-2 truncate text-[10px] text-text-muted">
          {media.alt}
        </span>
      </div>
      <div className={cn("relative w-full", aspectClass)}>
        {hasSrc ? (
          <Image
            src={media.src!}
            alt={media.alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card">
            <span className="rounded-soft border border-border-dark bg-bg-base/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
              {label}
            </span>
            <span className="text-body-sm text-text-muted">
              Homepage screenshot coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
