import { cn } from "@/lib/utils";

const cornerPositions = {
  border: [
    "-left-px -top-px -translate-x-1/2 -translate-y-1/2",
    "-right-px -top-px translate-x-1/2 -translate-y-1/2",
    "-bottom-px -left-px -translate-x-1/2 translate-y-1/2",
    "-bottom-px -right-px translate-x-1/2 translate-y-1/2",
  ],
  flush: [
    "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
    "right-0 top-0 translate-x-1/2 -translate-y-1/2",
    "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  ],
} as const;

export function CornerPlusAccents({
  className,
  variant = "border",
}: {
  className?: string;
  variant?: keyof typeof cornerPositions;
}) {
  return (
    <>
      {cornerPositions[variant].map((position) => (
        <span
          key={position}
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-10 grid min-h-[10px] min-w-[10px] place-items-center",
            "font-body text-[10px] font-semibold leading-none text-brand-purple-light",
            position,
            className
          )}
        >
          +
        </span>
      ))}
    </>
  );
}
