import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

const testimonials = [
  {
    quote:
      'Eterna took our vague product idea and turned it into a functioning MVP in under 8 weeks. The strategy work upfront saved us months of wasted development.',
    authorName: 'Sarah Chen',
    authorRole: 'Co-Founder & CEO',
    authorCompany: 'Launchpad AI',
    initials: 'SC',
    color: 'bg-purple-500',
  },
  {
    quote:
      'Their AI integration work completely transformed our outbound process. We went from 50 to 200+ qualified leads per month with the same team size.',
    authorName: 'Marcus Webb',
    authorRole: 'Head of Growth',
    authorCompany: 'ScaleForce',
    initials: 'MW',
    color: 'bg-blue-500',
  },
  {
    quote:
      'I was skeptical about working with an agency again after bad experiences. Eterna is different — they think like founders, not vendors.',
    authorName: 'Priya Nair',
    authorRole: 'Founder',
    authorCompany: 'ClearPath',
    initials: 'PN',
    color: 'bg-pink-500',
  },
  {
    quote:
      'From design to deployment, everything was handled with incredible attention to detail. The product looks and performs exactly as we envisioned — actually better.',
    authorName: 'James Holloway',
    authorRole: 'CTO',
    authorCompany: 'Nexus Labs',
    initials: 'JH',
    color: 'bg-indigo-500',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 70%, rgba(2, 5, 211, 0.08) 0%, transparent 55%),
                       radial-gradient(ellipse at 80% 20%, rgba(123, 97, 255, 0.08) 0%, transparent 55%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Testimonials</Badge>
          <h2 className="section-heading text-white mb-4">
            What our clients say
          </h2>
          <p className="text-white/50 text-lg">
            Don&apos;t take our word for it — hear from the founders and teams we&apos;ve worked with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <Card key={t.authorName} hover glow="none" className="flex flex-col gap-6">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 text-base leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.authorName}</p>
                  <p className="text-white/40 text-xs">
                    {t.authorRole} @ {t.authorCompany}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
