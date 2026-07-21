import type { ClientReview } from "@/lib/client-stories";
import { clientReviews } from "@/lib/client-stories";

/** Short interstitial quotes for breaking up plain card sections. */
export interface SectionQuote {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  reviewSource?: ClientReview["reviewSource"];
}

function fromReview(
  id: string,
  quote: string
): SectionQuote | undefined {
  const review = clientReviews.find((r) => r.id === id);
  if (!review) return undefined;
  return {
    id: review.id,
    quote,
    name: review.name,
    role: review.role,
    avatarSrc: review.avatarSrc,
    reviewSource: review.reviewSource,
  };
}

/** After What we do - delivery / partnership feel. */
export const quoteAfterWhatWeDo: SectionQuote =
  fromReview(
    "stefanie-herbert",
    "He went above and beyond to bring our vision to life - not only executing what we asked for, but offering suggestions that improved the design and functionality."
  ) ?? {
    id: "stefanie-herbert",
    quote:
      "He went above and beyond to bring our vision to life - not only executing what we asked for, but offering suggestions that improved the design and functionality.",
    name: "Stefanie Herbert",
    role: "Co-founder, Relative Innovations",
  };

/** Inside case studies - real outcomes between cards and CTA. */
export const quoteInCaseStudies: SectionQuote =
  fromReview(
    "vladimir-cvetkovic",
    "1000 users in first 3 months, 20% conversion rate, 2 official sponsors inside first 2 months. They have a great team."
  ) ?? {
    id: "vladimir-cvetkovic",
    quote:
      "1000 users in first 3 months, 20% conversion rate, 2 official sponsors inside first 2 months. They have a great team.",
    name: "Dr. Vladimir Cvetkovic",
    role: "Founder, ProSafeNet",
  };

/** After Proof - trust before Solutions. */
export const quoteAfterProof: SectionQuote =
  fromReview(
    "marko-savic",
    "They were amazing from day 1, and have been our partner not only in development but also helping us what to build next."
  ) ?? {
    id: "marko-savic",
    quote:
      "They were amazing from day 1, and have been our partner not only in development but also helping us what to build next.",
    name: "Marko Savic",
    role: "Founder, PetsPilots",
  };
