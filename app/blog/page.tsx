import type { Metadata } from "next";

import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { getBlogCategories, getBlogIndex } from "@/lib/blog";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Eterna",
  description:
    "News, insights and tips to help you with your product journey.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Eterna Blog",
    description:
      "News, insights and tips to help you with your product journey.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getBlogIndex();
  const categories = getBlogCategories();

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-14 pt-section sm:pb-16">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <SectionHeading
              label="Blog"
              lines={[
                { text: "Check latest articles", variant: "default" },
                { text: "on Eterna blog", variant: "gradient" },
              ]}
              subheading="News, insights and tips to help you with your product journey."
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-surface py-section text-text-ink-sub">
        <div className={LAYOUT_OUTER_CLASS}>
          <div className={LAYOUT_INNER_CLASS}>
            <BlogIndexClient posts={posts} categories={categories} />
          </div>
        </div>
      </section>
    </main>
  );
}
