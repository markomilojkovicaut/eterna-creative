import type { FounderPrincipleId } from "@/lib/founder-studio";
import { cn } from "@/lib/utils";

const iconPaths: Record<FounderPrincipleId, React.ReactNode> = {
  "direct-access": (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <path d="M16 11h4M18 9v4" />
    </>
  ),
  "certified-engineers": (
    <>
      <path d="M8 6h8v12H8z" />
      <path d="M10 10h4M10 14h4" />
      <path d="M12 6V4" />
    </>
  ),
  "bad-idea": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  "own-products": (
    <>
      <path d="M7 12l3 3 7-7" />
      <path d="M5 12l3 3" />
    </>
  ),
  invest: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9.5 10.5c.5-1 2-1 2.5 0s2 1 2.5 0" />
    </>
  ),
};

export function FounderPrincipleIcon({
  id,
  className,
}: {
  id: FounderPrincipleId;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-soft border border-border-dark bg-bg-card/80 text-brand-purple-light",
        className
      )}
      aria-hidden
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[id]}
      </svg>
    </span>
  );
}
