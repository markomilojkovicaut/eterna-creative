import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout/Section";
import { blogPosts } from "@/lib/blog-posts";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";

export const metadata: Metadata = {
  title: "Blog | Eterna",
  description:
    "Practical insights for founders building and launching products - validation, custom code, and growth.",
};

export default function BlogPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <SectionHeading
          label="Blog"
          lines={[{ text: "Founder insights", variant: "default" }]}
          subheading="Articles on product development, launch strategy, and scaling what you own."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline">
              <Card hover className="h-full p-6">
                <Badge variant="muted">{post.category}</Badge>
                <h2 className="mt-4 font-heading text-heading-sm font-bold text-text-heading">
                  {post.title}
                </h2>
                <p className="mt-3 text-body-md text-text-body">{post.excerpt}</p>
                <p className="mt-4 text-body-sm text-text-muted">
                  {post.readTime} min read
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
