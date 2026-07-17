import { CornerPlusAccents } from "@/components/ui/CornerPlusAccents";
import { lightResourceGradientClasses } from "@/lib/surface-styles";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  suffix: React.ReactNode;
  label: string;
  variant?: "default" | "gradient";
  className?: string;
}

export function StatCard({
  value,
  suffix,
  label,
  variant = "default",
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative box-border flex h-full w-full min-w-0 flex-col gap-1 overflow-visible rounded-sharp border border-border-muted p-4 lg:max-w-[180px]",
        variant === "gradient"
          ? lightResourceGradientClasses
          : "bg-bg-muted",
        className
      )}
    >
      <CornerPlusAccents />
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading text-[1.75rem] font-extrabold leading-none tracking-tight text-text-ink sm:text-[2rem] lg:text-[2.5rem]">
          {value}
        </span>
        <span className="shrink-0 text-brand-purple-light">{suffix}</span>
      </div>
      <p className="text-body-sm text-text-ink-muted">{label}</p>
    </div>
  );
}

function StatStarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden
    >
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  );
}

function StatMobileAppIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export const statSuffixes = {
  plus: (
    <span className="font-heading text-[2rem] font-semibold leading-none">+</span>
  ),
  star: <StatStarIcon className="h-5 w-5" />,
  weeks: (
    <span className="font-heading text-[1.5rem] font-semibold lowercase leading-none tracking-tight">
      wk
    </span>
  ),
  mobileApp: <StatMobileAppIcon className="h-5 w-5" />,
};
