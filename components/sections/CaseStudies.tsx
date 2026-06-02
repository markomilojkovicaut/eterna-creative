import Badge from '@/components/ui/Badge'

const caseStudies = [
  {
    client: 'FinTech Startup',
    title: 'Eterna Platform',
    tags: ['Product Strategy', 'MVP'],
    description: 'Took a raw idea for a B2B SaaS tool from whiteboard to revenue-generating MVP in 10 weeks.',
    metric: '10 weeks to launch',
    gradientFrom: 'rgba(2, 5, 211, 0.3)',
    gradientTo: 'rgba(123, 97, 255, 0.2)',
  },
  {
    client: 'Growth Agency',
    title: 'AI Growth Stack',
    tags: ['AI Integration', 'Automation'],
    description: 'Built an end-to-end AI-powered outbound system using n8n, Claude, and Brevo — 4x pipeline growth.',
    metric: '4× pipeline increase',
    gradientFrom: 'rgba(123, 97, 255, 0.3)',
    gradientTo: 'rgba(58, 228, 255, 0.2)',
  },
  {
    client: 'SaaS Company',
    title: 'SaaS Launch',
    tags: ['Full-stack', 'Design'],
    description: 'Complete product build from zero — design system, front-end, backend, CMS, and launch strategy.',
    metric: '$50k ARR in 90 days',
    gradientFrom: 'rgba(58, 228, 255, 0.2)',
    gradientTo: 'rgba(2, 5, 211, 0.25)',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, rgba(123, 97, 255, 0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Badge variant="primary" className="mb-4">Case Studies</Badge>
            <h2 className="section-heading text-white mb-4">
              Results we&apos;re proud of
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Real products. Real clients. Real outcomes.
            </p>
          </div>
          <a
            href="#contact"
            className="text-accent text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            View all case studies →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="glass-card rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Cover - mesh gradient placeholder */}
              <div
                className="h-48 relative overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at 30% 60%, ${study.gradientFrom} 0%, transparent 60%),
                               radial-gradient(ellipse at 80% 20%, ${study.gradientTo} 0%, transparent 60%),
                               #0a0a14`,
                }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
                {/* Metric overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 text-xs font-bold bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                    {study.metric}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white/40 text-xs">{study.client}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{study.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{study.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
