import type { PricingIconId } from "@/lib/investment";
import { cn } from "@/lib/utils";

const icons: Record<PricingIconId, React.ReactNode> = {
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.964 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </>
  ),
  zap: (
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  ),
};

export function PricingIcon({
  icon,
  className,
}: {
  icon: PricingIconId;
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
          {icons[icon]}
        </svg>
      </span>
    </span>
  );
}
