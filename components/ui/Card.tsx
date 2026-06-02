import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: 'primary' | 'accent' | 'none'
}

export default function Card({ children, className = '', hover = true, glow = 'none' }: CardProps) {
  const glowClasses = {
    none: '',
    primary: 'hover:shadow-glow-primary',
    accent: 'hover:shadow-glow-accent',
  }

  return (
    <div
      className={`glass-card rounded-lg p-6 ${hover ? 'transition-all duration-300 hover:-translate-y-1' : ''} ${glowClasses[glow]} ${className}`}
    >
      {children}
    </div>
  )
}
