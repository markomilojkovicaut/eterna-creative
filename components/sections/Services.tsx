import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const services = [
  {
    icon: '🎯',
    title: 'Product Strategy',
    description: 'From zero to a validated concept. We help you define the right product, for the right audience, at the right time.',
    tags: ['Discovery', 'Roadmapping', 'Validation'],
    glow: 'accent' as const,
  },
  {
    icon: '⚡',
    title: 'MVP Development',
    description: 'Build fast, learn faster. We ship working products in weeks, not months — optimized for learning and iteration.',
    tags: ['Next.js', 'Bubble', 'Rapid Build'],
    glow: 'primary' as const,
  },
  {
    icon: '📈',
    title: 'Growth Systems',
    description: 'Automation-first growth infrastructure. From lead capture to conversion, we build systems that scale without headcount.',
    tags: ['n8n', 'Brevo', 'Automation'],
    glow: 'accent' as const,
  },
  {
    icon: '✦',
    title: 'Design & UX',
    description: 'Interfaces that convert. We design with purpose — every pixel mapped to user behavior and business outcomes.',
    tags: ['Figma', 'Interaction Design', 'CRO'],
    glow: 'primary' as const,
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Claude, GPT, and custom LLM pipelines integrated into your product — from content generation to intelligent automation.',
    tags: ['Claude API', 'GPT-4', 'LLM Pipelines'],
    glow: 'accent' as const,
  },
  {
    icon: '📝',
    title: 'CMS & Content',
    description: 'Headless CMS architecture that gives your team full control without touching code. Sanity, Contentful, and more.',
    tags: ['Sanity', 'Contentful', 'Headless'],
    glow: 'primary' as const,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      {/* Background mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 10% 50%, rgba(2, 5, 211, 0.07) 0%, transparent 60%),
                       radial-gradient(ellipse at 90% 30%, rgba(123, 97, 255, 0.07) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <Badge variant="accent" className="mb-4">What we do</Badge>
          <h2 className="section-heading text-white mb-4">
            End-to-end product services
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From the first spark of an idea to a product generating revenue — we cover every stage of the journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              glow={service.glow}
              className="group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-2 group-hover:gradient-text-accent transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/30 bg-white/5 border border-white/8 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">
                →
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
