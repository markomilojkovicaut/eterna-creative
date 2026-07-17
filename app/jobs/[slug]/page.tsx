import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";
import type { Job } from "@/lib/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getJobBySlug(slug: string): Promise<Job | null> {
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
  const job = await getJobBySlug(slug);

  if (job) {
    return {
      title: `${job.title} | Eterna Careers`,
      description: job.description,
    };
  }

  return {
    title: "Role | Eterna Careers",
    description:
      "Open positions at Eterna - no-code app development for startups.",
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <Link
          href="/jobs"
          className="text-body-sm text-brand-purple-light transition-colors hover:text-text-heading"
        >
          ← Back to Careers
        </Link>
        <div className="mt-8">
          <Badge variant="purple">{job.type}</Badge>
          <h1 className="mt-4 font-heading text-display-md text-text-heading">
            {job.title}
          </h1>
          <p className="mt-4 text-body-md text-text-muted">
            Posted {job.postedAt}
          </p>
        </div>
        <div className="mt-12">
          <h2 className="font-heading text-heading-lg text-text-heading">
            About the role
          </h2>
          <p className="mt-4 text-body-md text-text-body">{job.description}</p>
        </div>
        <div className="mt-12">
          <h2 className="font-heading text-heading-lg text-text-heading">
            Requirements
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-body-md text-text-body">
            {job.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <Button variant="primary" size="md">
            Apply for this role
          </Button>
        </div>
      </Section>
    </main>
  );
}
