import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui";
import { LightCtaLink } from "@/components/ui/LightCtaLink";
import { ResourceBentoCard } from "@/components/ui/ResourceBentoCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { blogPosts } from "@/lib/blog-posts";
import { guides } from "@/lib/guides-content";
import { templates } from "@/lib/templates-content";
import { resourceItems } from "@/lib/resources";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Eterna",
  description:
    "Free tools, guides, templates, and articles to help founders validate, build, and grow products.",
};

export default function ResourcesPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section background="surface" className="text-text-ink-sub">
        <SectionHeading
          label="Resources"
          labelVariant="light"
          lines={[
            { text: "Free tools to", variant: "default" },
            { text: "help you grow", variant: "gradient" },
          ]}
          subheading="Tools, guides, templates, and blog posts - curated for founders and builders."
        />

        <div className="mt-14">
          <h2 className="font-heading text-heading-md font-bold text-text-ink">
            Tools
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {resourceItems
              .filter((item) => item.type === "tool")
              .map((item) => (
                <ResourceBentoCard key={item.id} item={item} />
              ))}
          </div>
        </div>

        <div className="mt-section">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-heading-md font-bold text-text-ink">
              Guides
            </h2>
            <LightCtaLink href="/guides">All guides</LightCtaLink>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="no-underline">
                <Card hover className="h-full p-6">
                  <Badge variant="purple">{guide.difficulty}</Badge>
                  <h3 className="mt-4 font-heading text-heading-sm font-bold text-text-ink">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-body-md">{guide.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-section">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-heading-md font-bold text-text-ink">
              Blog
            </h2>
            <LightCtaLink href="/blog">All posts</LightCtaLink>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline">
                <Card hover className="h-full p-6">
                  <Badge variant="muted">{post.category}</Badge>
                  <h3 className="mt-4 font-heading text-heading-sm font-bold text-text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-body-md">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-section">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-heading-md font-bold text-text-ink">
              Templates
            </h2>
            <LightCtaLink href="/templates">All templates</LightCtaLink>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Link
                key={template.slug}
                href={`/templates/${template.slug}`}
                className="no-underline"
              >
                <Card hover glow="pink" className="h-full p-6">
                  <Badge variant="pink">{template.isPaid ? "Paid" : "Free"}</Badge>
                  <h3 className="mt-4 font-heading text-heading-sm font-bold text-text-ink">
                    {template.title}
                  </h3>
                  <p className="mt-2 text-body-md">{template.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
