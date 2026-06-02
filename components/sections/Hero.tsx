export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">

      {/* CSS recreation of the purple gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at -5% 85%, #5B00CC 0%, #3D0099 25%, transparent 65%),
            radial-gradient(ellipse 70% 45% at 5% 40%, rgba(72, 0, 160, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 50% 30% at 30% 10%, rgba(55, 0, 130, 0.45) 0%, transparent 55%),
            #000000
          `,
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col pt-28 pb-0">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 flex-1">

          {/* LEFT — badge + headline + phones */}
          <div className="flex flex-col flex-1 max-w-2xl">

            {/* Badge */}
            <div className="mb-8">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/15"
                style={{ color: '#b8b8ff', background: 'rgba(184,184,255,0.06)' }}
              >
                Eterna Creative · Product Studio
              </span>
            </div>

            {/* Headline — all text big, "the whole journey" fully in gradient */}
            <h1 className="font-extrabold leading-[1.0] tracking-tight mb-8">
              <span className="block text-white" style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
                Idea to revenue
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(52px, 7vw, 88px)',
                  background: 'linear-gradient(135deg, #A855F7 0%, #C084FC 50%, #D8B4FE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                the whole journey
              </span>
            </h1>

            {/* Phone mockups — bottom of left col */}
            <div className="mt-auto pt-8 flex items-end">
              <div className="relative flex items-end" style={{ height: '340px', width: '380px' }}>
                {/* Back phone */}
                <div
                  className="absolute rounded-[28px] border border-white/10 overflow-hidden"
                  style={{
                    width: '180px',
                    height: '300px',
                    background: 'linear-gradient(160deg, #1a1a2e 0%, #0d0d1a 100%)',
                    left: '0px',
                    bottom: '0',
                    transform: 'rotate(-8deg)',
                    zIndex: 1,
                  }}
                >
                  <div className="w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(100,50,200,0.25) 0%, transparent 60%)' }} />
                </div>

                {/* Middle phone */}
                <div
                  className="absolute rounded-[28px] border border-white/15 overflow-hidden"
                  style={{
                    width: '190px',
                    height: '320px',
                    background: 'linear-gradient(160deg, #12121f 0%, #0a0a14 100%)',
                    left: '75px',
                    bottom: '0',
                    transform: 'rotate(-3deg)',
                    zIndex: 2,
                  }}
                >
                  <div className="w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(80,40,160,0.3) 0%, transparent 50%)' }} />
                </div>

                {/* Front phone */}
                <div
                  className="absolute rounded-[32px] border border-white/20 overflow-hidden shadow-2xl"
                  style={{
                    width: '200px',
                    height: '340px',
                    background: 'linear-gradient(160deg, #1c1c30 0%, #0f0f1f 100%)',
                    left: '155px',
                    bottom: '0',
                    zIndex: 3,
                  }}
                >
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                  <div className="absolute inset-0 p-4 pt-12 flex flex-col gap-3">
                    <div className="text-[9px] text-white/50 uppercase tracking-wider">Bubble Web &amp; Mobile Apps</div>
                    <div className="text-[14px] font-bold text-white leading-tight">
                      Your startup<br />
                      <span className="text-blue-400">journey starts here</span>
                    </div>
                    <div className="text-[9px] text-white/40 leading-relaxed">
                      No-code development for startups and businesses. From CRMs to mobile apps — fast, affordable, and scalable.
                    </div>
                    <div className="mt-auto">
                      <div
                        className="w-full py-2 rounded-full text-center text-[10px] font-bold text-white tracking-wider"
                        style={{ background: 'linear-gradient(90deg, #1a3a8f, #2563eb)' }}
                      >
                        START NOW
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — badges + description + CTA, text-right aligned */}
          <div className="flex flex-col justify-center lg:max-w-sm lg:pt-24 gap-6 lg:text-right">

            {/* Partnership badges */}
            <div className="flex items-center gap-4 text-sm lg:justify-end">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="font-bold text-white">·bubble</span>
                <span className="font-semibold" style={{ color: '#b8b8ff' }}>PARTNER</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5">
                <span className="tracking-tight" style={{ color: '#b8b8ff' }}>★★★★★</span>
                <span className="font-bold text-white">Clutch</span>
              </span>
            </div>

            {/* Description — right-aligned */}
            <p className="text-base leading-relaxed" style={{ color: '#CACADE' }}>
              We combine product strategy, lean engineering, and growth systems to take your applications, websites and automations from idea to revenue — and grow beyond. Your go-to digital product partner.
            </p>

            {/* CTA — square button, 8px radius, black text, purple icon */}
            <div className="lg:flex lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-white text-black font-semibold px-6 py-3 text-sm hover:bg-white/90 transition-colors"
                style={{ borderRadius: '8px' }}
              >
                Start with a call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9649cb" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
