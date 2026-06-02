const logos = [
  { name: 'Bubble', icon: '◉' },
  { name: 'PostHog', icon: '🦔' },
  { name: 'Webflow', icon: '◈' },
  { name: 'n8n', icon: '⬡' },
  { name: 'Brevo', icon: '◆' },
  { name: 'Claude', icon: '◎' },
  { name: 'Figma', icon: '❑' },
  { name: 'Notion', icon: '◻' },
  { name: 'LinkedIn', icon: '▣' },
]

export default function LogoStrip() {
  // Duplicate logos for seamless marquee
  const allLogos = [...logos, ...logos]

  return (
    <section id="logos" className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-white/30 text-sm font-medium tracking-widest uppercase">
          Trusted by teams using
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-white/30 hover:text-white/60 transition-colors duration-300 flex-shrink-0"
              >
                <span className="text-lg">{logo.icon}</span>
                <span className="text-sm font-semibold tracking-wide">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
