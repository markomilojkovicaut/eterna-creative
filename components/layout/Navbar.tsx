'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resources', href: '#resources', hasDropdown: true },
  { label: 'Career', href: '#career' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/8' : ''
      }`}
      style={{ background: scrolled ? 'rgba(6,5,10,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/eterna-logo.png"
            alt="Eterna Creative"
            width={120}
            height={36}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1"
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-60">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-200"
          >
            Book a call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/8 px-6 py-6 flex flex-col gap-4"
          style={{ background: 'rgba(6,5,10,0.95)', backdropFilter: 'blur(16px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white text-lg font-medium py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 w-fit inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white border border-white/30"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  )
}
