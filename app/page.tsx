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

/**
 * Homepage rhythm:
 * Intro → WHAT (products, start here) → HOW (challenges, engines, then white
 * approach/process) → WHAT again (cases, proof, solutions) → trust & close.
 */
export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <HomeLightChapter />

      {/* WHAT — offer first */}
      <Services />
      <EntryDoors />

      {/* HOW — problem + methodology, then white approach/process */}
      <FounderJourney />
      <EternaSystem />
      <HomeApproachChapter />

      {/* WHAT again — proof of work + who it's for */}
      <CaseStudies />
      <Proof />
      <Solutions />

      <HomeClientStoriesChapter />
      <FounderLedStudio />
      <HomeResourcesChapter />
      <Investment />
      <Faq />
      <FinalCta />
    </main>
  );
}
