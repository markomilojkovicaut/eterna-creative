import Badge from '@/components/ui/Badge'

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Product Strategist',
    initials: 'AR',
    color: 'from-purple-600 to-blue-600',
    bio: 'Ex-Google PM. 10+ years shipping digital products.',
  },
  {
    name: 'Dana Kim',
    role: 'Lead Engineer',
    initials: 'DK',
    color: 'from-blue-600 to-cyan-600',
    bio: 'Full-stack engineer specializing in Next.js and AI integrations.',
  },
  {
    name: 'Mia Torres',
    role: 'Head of Design',
    initials: 'MT',
    color: 'from-pink-600 to-purple-600',
    bio: 'Design systems expert. Previously at Figma and Linear.',
  },
  {
    name: 'Omar Hassan',
    role: 'Growth Lead',
    initials: 'OH',
    color: 'from-indigo-600 to-purple-600',
    bio: 'Automation & growth hacker. Built pipelines for 30+ startups.',
  },
]

export default function Team() {
  return (
    <section id="about" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, rgba(123, 97, 255, 0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="primary" className="mb-4">The Team</Badge>
          <h2 className="section-heading text-white mb-4">
            People behind the work
          </h2>
          <p className="text-white/50 text-lg">
            A small, focused team of builders who have done this before.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card rounded-lg p-6 text-center hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white`}
                >
                  {member.initials}
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-white font-bold text-base mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-medium mb-3">{member.role}</p>
              <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
