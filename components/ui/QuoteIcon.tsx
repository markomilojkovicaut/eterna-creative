import { cn } from "@/lib/utils";

export function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden
      className={cn("h-6 w-8 text-brand-purple-light/70", className)}
    >
      <path
        d="M0 24V14.4C0 9.06667 1.06667 5.06667 3.2 2.4C5.33333 -0.266667 8.4 -1.2 12.4 -0.4L11.2 4.8C8.8 4.26667 7 4.8 5.8 6.4C4.6 8 4 10.1333 4 12.8H12.8V24H0ZM19.2 24V14.4C19.2 9.06667 20.2667 5.06667 22.4 2.4C24.5333 -0.266667 27.6 -1.2 31.6 -0.4L30.4 4.8C28 4.26667 26.2 4.8 25 6.4C23.8 8 23.2 10.1333 23.2 12.8H32V24H19.2Z"
        fill="currentColor"
      />
    </svg>
  );
}
