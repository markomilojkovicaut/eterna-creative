const footerLinks = {
  Services: [
    { label: 'Product Strategy', href: '#' },
    { label: 'MVP Development', href: '#' },
    { label: 'Growth Systems', href: '#' },
    { label: 'Design & UX', href: '#' },
    { label: 'AI Integration', href: '#' },
  ],
  Work: [
    { label: 'Case Studies', href: '#work' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Process', href: '#' },
    { label: 'Results', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
  ],
  Social: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter / X', href: 'https://twitter.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/8 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">eterna</span>
              <span className="text-2xl font-light text-white/40">creative</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Digital product studio helping startups go from validated idea to first revenue — and beyond.
            </p>

            {/* Clutch badge placeholder */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/5">
              <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <span className="text-white/60 text-xs">5.0 on Clutch</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Eterna Creative Agency. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Built with
            <span className="text-red-400 mx-1">♥</span>
            and lots of coffee in
            <span className="text-white/50 ml-1">Next.js + Sanity</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
