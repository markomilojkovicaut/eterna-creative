import Link from "next/link";

import { cn } from "@/lib/utils";

/** Soft mid-article CTA — essay-style, not a hard sell banner. */
export function BlogSoftCta({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "my-10 rounded-soft border border-border-muted bg-bg-muted/70 px-5 py-5 sm:px-6",
        className
      )}
    >
      <p className="text-body-md leading-relaxed text-text-ink-sub">
        Building something and want a clear path?{" "}
        <Link
          href="/book"
          className="font-semibold text-brand-purple no-underline underline-offset-2 hover:underline"
        >
          Book a free strategy call
        </Link>{" "}
        — or start with the{" "}
        <Link
          href="/blueprint"
          className="font-semibold text-brand-purple no-underline underline-offset-2 hover:underline"
        >
          Launch Plan / Blueprint
        </Link>
        .
      </p>
    </aside>
  );
}
