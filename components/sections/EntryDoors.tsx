import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { entryDoors } from "@/lib/entry-doors";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function EntryDoors() {
  return (
    <section className="relative overflow-hidden bg-bg-base pt-section">
      <DarkSectionBackdrop objectPosition="right" gradient="section" />

      <div className={cn("relative z-10 pb-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <SectionHeading
            label="Start here"
            lines={[
              { text: "Start where", variant: "default" },
              { text: "you are", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[560px]"
          />

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {entryDoors.map((door) => (
                <Link
                  key={door.id}
                  href={door.href}
                  className="group relative flex h-full flex-col gap-5 p-6 sm:p-7 lg:gap-6 lg:p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />

                  <div className="relative z-10 flex h-full flex-col gap-5 lg:gap-6">
                    <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
                      {door.title}
                    </h3>

                    <p className="min-h-[5.5rem] flex-1 text-body-md leading-relaxed text-text-body">
                      {door.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-body-sm font-medium text-text-heading">
                      {door.ctaLabel}
                      <ArrowUpRight className="opacity-70 transition-opacity group-hover:opacity-100" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 h-1 w-full bg-hero-gradient" aria-hidden />
    </section>
  );
}
