import Link from "next/link";
import type { Metadata } from "next";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ResourceBentoCard } from "@/components/ui/ResourceBentoCard";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { blogPosts } from "@/lib/blog-posts";
import { guides } from "@/lib/guides-content";
import { templates } from "@/lib/templates-content";
import { resourceItems } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources | Eterna",
  description:
    "Free tools, guides, templates, and articles to help founders validate, build, and grow products.",
};

export default function ResourcesPage() {
  return (
    <ContentHubShell
      label="Resources"
      lines={[
        { text: "Free tools to", variant: "default" },
        { text: "help you grow", variant: "gradient" },
      ]}
      subheading="Tools, guides, templates, and blog posts - curated for founders and builders."
    >
      <div>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-heading-md font-bold text-text-heading">
            Tools
          </h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {resourceItems
            .filter((item) => item.type === "tool")
            .map((item) => (
              <ResourceBentoCard
                key={item.id}
                item={{ ...item, variant: item.variant ?? "dark", gridClass: "" }}
              />
            ))}
        </div>
      </div>

      <div className="mt-section">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-heading-md font-bold text-text-heading">
            Guides
          </h2>
          <SecondaryCtaLink href="/guides">All guides</SecondaryCtaLink>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="no-underline">
              <Card hover className="h-full p-6">
                <Badge variant="purple">{guide.difficulty}</Badge>
                <h3 className="mt-4 font-heading text-heading-sm font-bold text-text-heading">
                  {guide.title}
                </h3>
                <p className="mt-2 text-body-md text-text-body">{guide.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-section">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-heading-md font-bold text-text-heading">
            Blog
          </h2>
          <SecondaryCtaLink href="/blog">All posts</SecondaryCtaLink>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline">
              <Card hover className="h-full p-6">
                <Badge variant="muted">{post.category}</Badge>
                <h3 className="mt-4 font-heading text-heading-sm font-bold text-text-heading">
                  {post.title}
                </h3>
                <p className="mt-2 text-body-md text-text-body">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-section">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-heading-md font-bold text-text-heading">
            Templates
          </h2>
          <SecondaryCtaLink href="/templates">All templates</SecondaryCtaLink>
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
                <h3 className="mt-4 font-heading text-heading-sm font-bold text-text-heading">
                  {template.title}
                </h3>
                <p className="mt-2 text-body-md text-text-body">
                  {template.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ContentHubShell>
  );
}
