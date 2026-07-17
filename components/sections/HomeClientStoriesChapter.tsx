import { Section } from "@/components/layout/Section";
import { ClientStories } from "@/components/sections/ClientStories";

export function HomeClientStoriesChapter() {
  return (
    <Section background="surface" className="text-text-ink-sub">
      <ClientStories />
    </Section>
  );
}
