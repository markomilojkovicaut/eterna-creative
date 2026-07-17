import Image from "next/image";

import { cn } from "@/lib/utils";

function initialsFromName(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ReviewAvatar({
  name,
  src,
  size = "md",
  className,
}: {
  name: string;
  src?: string;
  size?: "sm" | "md" | "featured" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "size-9 text-[10px]",
    md: "size-10 text-[11px]",
    featured: "size-12 text-xs",
    lg: "size-14 text-sm",
  } as const;

  const imageSizes = { sm: 36, md: 40, featured: 48, lg: 56 } as const;
  const avatarFrameClasses =
    "shadow-[0_0_0_8px_rgba(255,255,255,0.04)]";

  if (src) {
    return (
      <Image
        src={src}
        alt=""
        width={imageSizes[size]}
        height={imageSizes[size]}
        className={cn(
          "shrink-0 rounded-soft object-cover",
          avatarFrameClasses,
          sizeClasses[size],
          className
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-soft bg-bg-muted font-semibold text-text-ink-muted",
        avatarFrameClasses,
        sizeClasses[size],
        className
      )}
      aria-hidden
    >
      {initialsFromName(name)}
    </span>
  );
}
