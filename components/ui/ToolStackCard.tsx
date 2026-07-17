import Image from "next/image";

import { CornerPlusAccents } from "@/components/ui/CornerPlusAccents";
import type { ToolStackItem } from "@/lib/tool-stack";
import { cn } from "@/lib/utils";

export function ToolStackCard({
  tool,
  className,
}: {
  tool: ToolStackItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[100px] flex-col items-center justify-center gap-2.5 bg-bg-muted p-4 sm:min-h-[112px]",
        className
      )}
    >
      <CornerPlusAccents />
      <div className="flex size-9 items-center justify-center rounded-full bg-text-ink sm:size-10">
        {tool.logoSrc ? (
          <Image
            src={tool.logoSrc}
            alt=""
            width={28}
            height={28}
            className="h-5 w-5 object-contain sm:h-6 sm:w-6"
          />
        ) : (
          <span className="font-heading text-[11px] font-bold uppercase tracking-wide text-bg-surface">
            {tool.name.slice(0, 2)}
          </span>
        )}
      </div>
      <p className="text-center text-[12px] font-medium text-text-ink">
        {tool.name}
      </p>
    </div>
  );
}
