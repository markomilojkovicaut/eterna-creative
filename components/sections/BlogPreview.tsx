import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const posts = [
  {
    category: 'Product Strategy',
    title: 'How to validate your SaaS idea in 2 weeks without writing code',
    excerpt:
      'The frameworks we use to help founders move from a vague hypothesis to a validated product direction — fast.',
    date: 'Jan 14, 2025',
    readTime: '6 min read',
    gradient: ['rgba(123, 97, 255, 0.25)', 'rgba(2, 5, 211, 0.15)'],
  },
  {
    category: 'AI Integration',
    title: 'Building an AI outbound engine with Claude, n8n, and Brevo',
    excerpt:
      'A step-by-step look at the automation stack we built that generated 4× more qualified leads for one of our clients.',
    date: 'Dec 28, 2024',
    readTime: '9 min read',
    gradient: ['rgba(2, 5, 211, 0.25)', 'rgba(58, 228, 255, 0.15)'],
  },
  {
    category: 'Growth Systems',
    title: 'The no-code growth stack every early-stage startup should know about',
    excerpt:
      'From data capture to automated nurture to sales handoff — the tools and workflows that scale without hiring.',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    gradient: ['rgba(58, 228, 255, 0.2)', 'rgba(123, 97, 255, 0.2)'],
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 60%, rgba(2, 5, 211, 0.06) 0%, transparent 55%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <Badge variant="accent" className="mb-4">From the blog</Badge>
            <h2 className="section-heading text-white mb-4">
              Insights from the team
            </h2>
            <p className="text-white/50 text-lg max-w-md">
              Practical guides on product, growth, and AI — from founders who ship things.
            </p>
          </div>
          <Button variant="secondary" size="sm" href="#blog" className="flex-shrink-0">
            View all posts →
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="glass-card rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Cover */}
              <div
                className="h-40 relative"
                style={{
                  background: `radial-gradient(ellipse at 30% 50%, ${post.gradient[0]} 0%, transparent 60%),
                               radial-gradient(ellipse at 80% 30%, ${post.gradient[1]} 0%, transparent 60%),
                               #0a0a14`,
                }}
              >
                <div className="absolute top-4 left-4">
                  <Badge variant="accent">{post.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/30 text-xs">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
