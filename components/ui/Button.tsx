'use client'

import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  // Primary: white bg, black text, square with 8px radius — purple arrow icon handled by caller
  primary:
    'bg-white text-black hover:bg-white/90 active:scale-95',
  secondary:
    'bg-transparent text-white border border-white/30 hover:bg-white/5 hover:border-white/50 rounded-full',
  ghost:
    'bg-transparent text-white/80 hover:text-white hover:bg-white/5 rounded-full',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const radiusClass = variant === 'primary' ? 'rounded-[8px]' : ''
  const baseClasses =
    `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer select-none ${radiusClass}`
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
