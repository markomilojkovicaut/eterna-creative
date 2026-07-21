import Image from "next/image";

import { CornerPlusAccents } from "@/components/ui/CornerPlusAccents";
import type { ToolStackItem } from "@/lib/tool-stack";
import { cn } from "@/lib/utils";

function monogram(name: string) {
  const cleaned = name.replace(/\.js$/i, "").replace(/\s+/g, " ").trim();
  if (cleaned.toLowerCase() === "next.js" || cleaned.toLowerCase() === "next") {
    return "Nx";
  }
  if (cleaned.toLowerCase().startsWith("tailwind")) {
    return "Tw";
  }
  const parts = cleaned.split(/[\s.-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase();
}

export function ToolStackCard({
  tool,
  className,
}: {
  tool: ToolStackItem;
  className?: string;
}) {
  const hasLogo = Boolean(tool.logoSrc);

  return (
    <div
      className={cn(
        "relative flex min-h-[100px] flex-col items-center justify-center gap-2.5 bg-bg-muted p-4 sm:min-h-[112px]",
        className
      )}
    >
      <CornerPlusAccents />
      <div className="flex size-9 items-center justify-center rounded-full bg-text-ink sm:size-10">
        {hasLogo ? (
          <Image
            src={tool.logoSrc!}
            alt=""
            width={28}
            height={28}
            className="h-5 w-5 object-contain sm:h-6 sm:w-6"
          />
        ) : (
          <span
            className="font-heading text-[10px] font-bold uppercase tracking-wide text-bg-surface sm:text-[11px]"
            title={`${tool.name} logo coming soon`}
          >
            {monogram(tool.name)}
          </span>
        )}
      </div>
      <p className="text-center text-[12px] font-medium text-text-ink">
        {tool.name}
      </p>
    </div>
  );
}
