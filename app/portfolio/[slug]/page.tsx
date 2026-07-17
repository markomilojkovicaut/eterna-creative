import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";
import type { PortfolioItem } from "@/lib/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getPortfolioBySlug(slug: string): Promise<PortfolioItem | null> {
  void slug;
  return null;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);

  if (item) {
    return {
      title: `${item.title} | Eterna Portfolio`,
      description: item.description,
    };
  }

  return {
    title: "Case Study | Eterna Portfolio",
    description:
      "Bubble.io case studies from Eterna - MVPs built for startup founders.",
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getPortfolioBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <Link
          href="/portfolio"
          className="text-body-sm text-brand-purple-light transition-colors hover:text-text-heading"
        >
          ← Back to Portfolio
        </Link>
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="purple">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 font-heading text-display-md text-text-heading">
            {item.title}
          </h1>
          <p className="mt-2 text-body-md text-text-sub">{item.client}</p>
          <p className="mt-4 max-w-2xl text-body-md text-text-body">
            {item.description}
          </p>
          {item.liveUrl ? (
            <div className="mt-6">
              <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="sm" type="button">
                  View live product
                </Button>
              </a>
            </div>
          ) : null}
        </div>
        <div className="mt-12">
          <h2 className="font-heading text-heading-lg text-text-heading">
            Results
          </h2>
          <p className="mt-4 text-body-md text-text-body">{item.results}</p>
        </div>
      </Section>
    </main>
  );
}
