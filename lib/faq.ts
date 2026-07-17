export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "nocode-vs-code",
    question:
      "How is no-code different from custom code? Is it less professional?",
    answer:
      "No-code is not less - it's stage-appropriate. Bubble.io is a production-grade platform running thousands of funded startups and products with millions of users. The difference is time and cost: we compress 12 months of traditional development into 6-12 weeks, at a fraction of the price. The architecture principles - data modelling, privacy rules, UX systems - are the same. When you hit 100K+ users and need custom infrastructure, we design your system so that transition is clean. You're not locked in. You're staged intelligently.",
  },
  {
    id: "blueprint",
    question: "What does the free App Launch Blueprint actually include?",
    answer:
      "The Blueprint is a full strategic and technical plan built specifically for your product. It includes: a strategic assessment of your market and idea, a technical architecture plan, feature scope with MoSCoW prioritization, a full investment breakdown by phase, a timeline plan with milestones, a hero screen design as a brand starting point, and a full app map in exploded whiteboard view. It's worth €800. We include it free because it ensures we're 100% aligned before any contract is signed - and it prevents the #1 cause of failed projects: unclear scope.",
  },
  {
    id: "timeline",
    question: "How long does a project take, really?",
    answer:
      "Our Scope 1 (core MVP) typically takes 4-6 weeks from kickoff to launch. Scope 2 (enhanced features) adds 3-4 weeks on top. Complex platforms run 12-20 weeks. These are realistic estimates built from actual delivery times, not optimistic pitches. We include buffer for feedback cycles and revisions in every proposal. The App Launch Blueprint phase (before kickoff) usually takes a week to collect info and produce. Discovery call to live product: typically 6-8 weeks for a standard MVP.",
  },
  {
    id: "equity",
    question: "Do you take equity or work on revenue share?",
    answer:
      "We never take equity. For select projects where we believe strongly in the product, we offer a co-investment model: we split the build cost 50/50 and take a revenue share % from the product's revenue. This is very selective - we only offer it when we're genuinely invested in the outcome, when founder has big social capital or idea is very well validated. Standard projects are project-based or retainer-based with no revenue share.",
  },
  {
    id: "webflow-automation",
    question:
      "What if I just need a Webflow site or an automation, not a full app?",
    answer:
      "Absolutely - we handle those independently. Webflow sites start from €800 for a landing page and €3,500+ for a full marketing website. Automations start from €600 per workflow. You don't need to buy a full product build to work with us. A 15-minute call is enough to scope a smaller project - no Blueprint needed for these.",
  },
  {
    id: "team",
    question: "Who actually works on my project?",
    answer:
      "Marko (studio founder) is the primary point of contact and involved in all key decisions. Every project is staffed with certified developers only - there are no juniors assigned to fill seats. The core team includes a senior Bubble engineer, a designer/architect, and a marketing specialist depending on scope. We don't take on more projects than we can resource properly. If we can't give your project the attention it needs, we'll tell you upfront.",
  },
  {
    id: "payment",
    question: "What are your payment terms?",
    answer:
      "We offer flexible payment terms depending on the project value: 50/50 (half at kickoff, half at launch), phased (pay per scope as each phase is completed and approved), which can be expanded into multiple months. For retainers, payment is monthly in advance. We don't ask for payment before a contract is signed and scope is agreed in the Blueprint.",
  },
  {
    id: "after-launch",
    question: "What happens after launch?",
    answer:
      "Launch is the start, not the end. We offer monthly retainer packages from €500/month that cover ongoing iterations, bug fixes, new features, and growth optimization. We also offer social marketing services and analytics optimization. And if you're at the stage of raising - we have relationships with investors and can make introductions when the time is right.",
  },
];
