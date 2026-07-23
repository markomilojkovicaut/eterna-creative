import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { resolveTechnologyTools } from "@/lib/case-study-tech";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

function monogram(name: string) {
  const cleaned = name.replace(/\.js$/i, "").trim();
  const parts = cleaned.split(/[\s.-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase();
}

export function CaseStudyTechStack({
  technologies,
  className,
}: {
  technologies: string[];
  className?: string;
}) {
  const tools = resolveTechnologyTools(technologies);
  if (tools.length === 0) return null;

  return (
    <div className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
        Technologies
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {tools.map((tool) => (
          <li
            key={tool.id}
            className="flex flex-col items-center justify-center gap-2 rounded-soft border border-border-dark bg-bg-card/40 px-3 py-4"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-bg-base">
              {tool.logoSrc ? (
                <Image
                  src={tool.logoSrc}
                  alt=""
                  width={28}
                  height={28}
                  className="h-5 w-5 object-contain"
                />
              ) : (
                <span className="font-heading text-[10px] font-bold uppercase tracking-wide text-brand-purple-light">
                  {monogram(tool.name)}
                </span>
              )}
            </div>
            <p className="text-center text-[12px] font-medium text-text-heading">
              {tool.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CaseStudyRoles({
  weOwned,
  clientOwned,
}: {
  weOwned: string[];
  clientOwned: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-soft border border-border-dark bg-bg-card/35 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
          We owned
        </p>
        <ul className="mt-3 space-y-1.5">
          {weOwned.map((item) => (
            <li key={item} className="text-body-sm text-text-heading">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-soft border border-border-dark bg-bg-card/35 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
          Client owned
        </p>
        <ul className="mt-3 space-y-1.5">
          {clientOwned.map((item) => (
            <li key={item} className="text-body-sm text-text-body">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CaseStudyBeforeAfter({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  return (
    <section className="bg-bg-base py-12">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Before → after
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-soft border border-border-dark bg-bg-card/30 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Before
                </p>
                <p className="mt-3 text-body-md text-text-body">{before}</p>
              </div>
              <div className="rounded-soft border border-border-dark bg-bg-card/30 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  After
                </p>
                <p className="mt-3 text-body-md text-text-body">{after}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function toEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      const id =
        u.searchParams.get("v") ||
        u.pathname.split("/").filter(Boolean).pop() ||
        "";
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (u.hostname.includes("loom.com")) {
      return url.replace("/share/", "/embed/");
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function CaseStudyVideo({ url }: { url: string }) {
  const embed = toEmbedUrl(url);

  return (
    <section className="bg-bg-base py-12">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
              Product video
            </p>
            <div
              className={cn(
                "relative mt-5 aspect-video w-full overflow-hidden rounded-soft border border-border-dark bg-bg-card/40"
              )}
            >
              {embed ? (
                <iframe
                  src={embed}
                  title="Product video"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center text-body-md font-semibold text-brand-purple-light no-underline hover:text-text-heading"
                >
                  Watch product video
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
