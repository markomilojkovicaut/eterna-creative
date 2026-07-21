export interface ReviewSource {
  label: string;
  href: string;
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarSrc?: string;
  reviewSource?: ReviewSource;
  /** Light purple gradient card (Guide/Blog resource style). */
  gradientCard?: boolean;
}

export interface FeaturedClientReview {
  id: string;
  name: string;
  role: string;
  quoteLine1: string;
  quoteLine2: string;
  quoteLine3: string;
  avatarSrc?: string;
  companyLogoSrc?: string;
  companyName?: string;
  reviewSource: ReviewSource;
}

export const featuredClientReview: FeaturedClientReview = {
  id: "radu-antohe",
  name: "Radu Antohe",
  role: "Founder",
  quoteLine1: "Overall, the team has performed",
  quoteLine2: "better than any other project",
  quoteLine3: "I've worked on in the IT industry.",
  avatarSrc: "/images/reviews/radu-antohe.png",
  companyLogoSrc: "/images/reviews/publiclink-logo-white.png",
  companyName: "PublicLink",
  reviewSource: {
    label: "Clutch review",
    href: "https://clutch.co",
  },
};

export const clientReviews: ClientReview[] = [
  {
    id: "tania-espinoza",
    name: "Tania Espinoza",
    role: "Founder & CEO, Global 8 Connect",
    quote:
      "Despite a significant time zone difference, they were incredibly responsive - questions answered in less than 24 hours. Beyond the build, they gave strategic recommendations that streamlined our B2B marketplace for MVP launch. Strong ownership mindset and real product thinking.",
    avatarSrc: "/images/reviews/tania-global8connect.webp",
    gradientCard: true,
    reviewSource: {
      label: "Clutch review",
      href: "https://clutch.co/go-to-review/befb6945-69ab-4623-9b56-1aeb9e2912e1/473306",
    },
  },
  {
    id: "stefanie-herbert",
    name: "Stefanie Herbert",
    role: "Co-founder, Relative Innovations",
    quote:
      "Working with Marko has been an incredible experience from start to finish. He went above and beyond to bring our vision for our CRM platform to life not only executing what we asked for, but also offering valuable suggestions that improved the overall design and functionality.",
    avatarSrc: "/images/reviews/stefanie-herbert.png",
    gradientCard: true,
    reviewSource: { label: "Upwork review", href: "https://www.upwork.com" },
  },
  {
    id: "vladimir-cvetkovic",
    name: "Dr. Vladimir Cvetkovic",
    role: "Founder, ProSafeNet",
    quote:
      "1000 users in first 3 months, 20% conversion rate, 2 official sponsors inside first 2 months. They have a great team, and they were great!",
    avatarSrc: "/images/reviews/vladimir-cvetkovic.png",
    gradientCard: true,
    reviewSource: { label: "Clutch review", href: "https://clutch.co" },
  },
  {
    id: "stefan-petricevic",
    name: "Stefan Petricevic",
    role: "Founder, FacelessStar",
    quote:
      "Weekly Loom updates helped me to always know where things stood without chasing anyone, also with Notion portal was a game changer - all decisions, files, tasks in one place. These guys have good processes",
    avatarSrc: "/images/reviews/stefan-petricevic.png",
  },
  {
    id: "milos-djordjevic",
    name: "Miloš Djordjevic",
    role: "Founder & CEO, Stretch Well",
    quote:
      "This platform lets us help the thousands of followers who couldn't access our stretching services before - with our own app. The whole process was cool, and the team solved all the technical challenges we worried about, especially around video security.",
    avatarSrc: "/images/reviews/milos-djordjevic.png",
  },
  {
    id: "marko-savic",
    name: "Marko Savic",
    role: "Founder, PetsPilots",
    quote:
      "Eterna built our app for pet transport, and they were amazing from day 1, and have been our partner not only in development but also helping us what to build next. Highly recommend!",
    avatarSrc: "/images/reviews/marko-savic.png",
  },
  {
    id: "ksenija-jovanovic",
    name: "Ksenija Jovanovic",
    role: "Founder, Slikaj sa psima",
    quote:
      "I was losing track of bookings and constantly dealing with confusion about who was coming when. The new system handles everything automatically - so no more papers and chaos around me. Big thanks to Eterna team for being there the whole process.",
    avatarSrc: "/images/reviews/ksenija-jovanovic.png",
  },
  {
    id: "boban-miljkovic",
    name: "Boban Miljkovic",
    role: "CEO, Tap Group",
    quote:
      "I'm not into apps, but we needed solution as we were constantly dealing with missing inventory and couldn't track who sold or bought what. The TapAPP Marko made solved it easily and our inventory management is at least 50% faster now.",
    avatarSrc: "/images/reviews/boban-miljkovic.png",
  },
];

