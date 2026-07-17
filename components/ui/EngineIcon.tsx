import { cn } from "@/lib/utils";
import type { EternaEngine } from "@/lib/eterna-engines";

const icons: Record<EternaEngine["icon"], React.ReactNode> = {
  research: (
    <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  ),
  architecture: (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
    </>
  ),
  acquisition: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  activation: (
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
  ),
  retention: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  analytics: (
    <>
      <path d="M3 3v18h18" />
      <path d="M18 17V9M13 17V5M8 17v-3" />
    </>
  ),
};

/** Default stroke: brand-purple-light. Pink only when highlight is true. */
export function EngineIcon({
  icon,
  highlight = false,
  className,
}: {
  icon: EternaEngine["icon"];
  highlight?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex size-12 items-center justify-center",
        className
      )}
      aria-hidden
    >
      <span className="absolute inset-0 rounded-full border border-border-dark" />
      <span className="relative flex size-9 items-center justify-center rounded-full bg-bg-card">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            highlight ? "text-brand-pink" : "text-brand-purple-light"
          )}
        >
          {icons[icon]}
        </svg>
      </span>
    </span>
  );
}
