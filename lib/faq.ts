export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "how-to-start",
    question: "How do we start if we're not ready for a full build?",
    answer:
      "Start small. Book a free 15-minute strategy call. If there's a fit, we run a Scope Session and deliver a free Blueprint - app map, hero preview, flat price, and timeline - before any build commitment. Need deeper validation first? We offer a paid Validation Sprint or Product Spec. Websites and automations can often skip the full Blueprint and scope on the call alone.",
  },
  {
    id: "nocode-vs-code",
    question:
      "How is custom code different from no-code? Which should I choose?",
    answer:
      "We default to AI-assisted custom code you own - reliable, scalable, and not locked to a platform. No-code (Bubble) is still a strong lane when stage, speed, or an existing Bubble app makes it the smarter call. The craft is the same either way: product thinking, design, and engineering to the level your stage demands. Starting fresh? We usually build custom. Already on Bubble and hitting limits? We migrate you cleanly.",
  },
  {
    id: "ownership",
    question: "Who owns the code and IP when we're done?",
    answer:
      "You do. On delivery and final payment, you own the product, codebase, designs, and documentation we produced for the engagement. We don't lock you into our tools or license. Handoff includes repo access, hosting setup, and enough docs for your team - or another partner - to keep shipping.",
  },
  {
    id: "blueprint",
    question: "What does the free Blueprint include?",
    answer:
      "After a short strategy call and a Scope Session, you get a clear plan before any build commitment: app/page map, hero screen preview, flat investment options, and timeline. No ambiguity on what you're buying. For deeper strategy work - full validation, architecture, and an investor-ready document - we offer a paid Validation Sprint or Product Spec when the project needs it.",
  },
  {
    id: "timeline",
    question: "How long does a project take, really?",
    answer:
      "Our Scope 1 (core MVP) typically takes 4-6 weeks from kickoff to launch. Scope 2 (enhanced features) adds 3-4 weeks on top. Complex platforms run 12-20 weeks. These are realistic estimates built from actual delivery times, not optimistic pitches. We include buffer for feedback cycles and revisions in every proposal. The Blueprint phase (before kickoff) usually takes a week to collect info and produce. Discovery call to live product: typically 6-8 weeks for a standard MVP.",
  },
  {
    id: "equity",
    question: "Do you take equity or work on revenue share?",
    answer:
      "We never take equity by default. For select projects where we believe strongly in the product - especially creators and experts with real distribution - we offer a co-investment model: we split the build cost 50/50 and take a revenue share % from the product's revenue. This is very selective. Standard projects are flat project fees or retainers with no revenue share.",
  },
  {
    id: "website-automation",
    question:
      "What if I just need a website or an automation, not a full app?",
    answer:
      "Absolutely - we handle those independently. Marketing and product websites are scoped on their own. Automation (n8n, AI agents, workflows) starts from a single workflow up. You don't need to buy a full product build to work with us. A 15-minute strategy call is enough to scope a smaller project - no full Blueprint needed for these.",
  },
  {
    id: "team",
    question: "Who actually works on my project?",
    answer:
      "The people you meet are the people doing the work. Marko (studio founder) is your primary contact and involved in key decisions. Every project is staffed with senior people only - no juniors filling seats. Core team typically includes a senior engineer and a designer/architect, plus marketing when the scope needs it. We don't take on more projects than we can resource properly. If we can't give your project the attention it needs, we'll tell you upfront.",
  },
  {
    id: "payment",
    question: "What are your payment terms?",
    answer:
      "We offer flexible payment terms depending on the project value: 50/50 (half at kickoff, half at launch), or phased (pay per scope as each phase is completed and approved), which can be expanded into multiple months. For retainers, payment is monthly in advance. We don't ask for payment before a contract is signed and scope is agreed in the Blueprint.",
  },
  {
    id: "after-launch",
    question: "What happens after launch?",
    answer:
      "Launch is the start, not the end. We offer monthly Care, Growth, and Scale retainers that cover ongoing iterations, bug fixes, new features, and growth optimization - scoped by outcomes, not hours. We also support in-app marketing and analytics when you need it.",
  },
];
