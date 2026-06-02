import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const avatarColors = ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-indigo-500', 'bg-cyan-500']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(123, 97, 255, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 20%, rgba(2, 5, 211, 0.15) 0%, transparent 55%),
              radial-gradient(ellipse at 60% 85%, rgba(58, 228, 255, 0.10) 0%, transparent 55%),
              radial-gradient(ellipse at 40% 10%, rgba(123, 97, 255, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Pre-headline badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="accent" className="text-sm px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
            Digital Product Studio
          </Badge>
        </div>

        {/* Main headline */}
        <h1 className="hero-heading text-white mb-6 max-w-4xl mx-auto">
          <span className="block">Idea to revenue.</span>
          <span className="block gradient-text-accent">The whole journey.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          We combine product strategy, lean engineering, and growth systems to take products
          from validated idea to first revenue — and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href="#contact">
            Start with a free call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="#work">
            See our work
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4">
          {/* Avatar stack */}
          <div className="flex -space-x-3">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full border-2 border-background ${color} flex items-center justify-center text-xs text-white font-semibold`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-white/80 text-sm font-semibold">Trusted by 50+ startups</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
              <span className="text-white/40 text-xs ml-1">5.0 avg rating</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#logos"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
