import type { ServiceIconId } from "@/lib/services";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIconId, React.ReactNode> = {
  research: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  application: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </>
  ),
  automation: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
    </>
  ),
  website: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  growth: (
    <>
      <path d="M3 3v18h18" />
      <path d="M18 17V9M13 17V5M8 17v-3" />
    </>
  ),
  "in-app": (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M9 6h6M9 10h6" />
    </>
  ),
  social: (
    <>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11 12 21 7" />
    </>
  ),
};

/** Default stroke: brand-purple-light. Pink only when highlight is true. */
export function ServiceIcon({
  icon,
  highlight = false,
  className,
}: {
  icon: ServiceIconId;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex size-10 items-center justify-center",
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
