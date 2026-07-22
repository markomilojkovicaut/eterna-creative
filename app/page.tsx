import { EternaSystem } from "@/components/sections/EternaSystem";
import { FounderJourney } from "@/components/sections/FounderJourney";
import { FounderLedStudio } from "@/components/sections/FounderLedStudio";
import { Hero } from "@/components/sections/Hero";
import { HomeLightChapter } from "@/components/sections/HomeLightChapter";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Proof } from "@/components/sections/Proof";
import { HomeApproachChapter } from "@/components/sections/HomeApproachChapter";
import { Services } from "@/components/sections/Services";
import { EntryDoors } from "@/components/sections/EntryDoors";
import { HomeClientStoriesChapter } from "@/components/sections/HomeClientStoriesChapter";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { HomeResourcesChapter } from "@/components/sections/HomeResourcesChapter";
import { Investment } from "@/components/sections/Investment";
import { Solutions } from "@/components/sections/Solutions";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage with Fab-style scroll reveals.
 * Sections that own internal Reveals are not double-wrapped.
 */
export default function HomePage() {
  return (
    <main className="relative">
      <Hero />

      <Reveal>
        <HomeLightChapter />
      </Reveal>

      <Services />
      <EntryDoors />
      <FounderJourney />

      <Reveal>
        <EternaSystem />
      </Reveal>

      <Reveal>
        <HomeApproachChapter />
      </Reveal>

      <CaseStudies />

      <Reveal>
        <Proof />
      </Reveal>

      <Solutions />

      <Reveal>
        <HomeClientStoriesChapter />
      </Reveal>

      <Reveal>
        <FounderLedStudio />
      </Reveal>

      <Reveal>
        <HomeResourcesChapter />
      </Reveal>

      <Reveal>
        <Investment />
      </Reveal>

      <Reveal>
        <Faq />
      </Reveal>

      <Reveal>
        <FinalCta />
      </Reveal>
    </main>
  );
}
