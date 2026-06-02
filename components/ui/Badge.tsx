import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'primary'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClasses = {
    default: 'bg-white/5 border-white/10 text-white/70',
    accent: 'bg-accent/10 border-accent/20 text-accent',
    primary: 'bg-primary/10 border-primary/20 text-blue-300',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium backdrop-blur-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
