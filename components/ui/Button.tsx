'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
}

const variants = {
  primary: 'gradient-primary text-white shadow-lg shadow-edwar-blue/25 hover:shadow-edwar-blue/40 hover:scale-[1.02]',
  secondary: 'bg-edwar-gray text-white hover:bg-edwar-silver/20 border border-edwar-silver/20',
  outline: 'border-2 border-edwar-blue text-edwar-blue hover:bg-edwar-blue hover:text-white',
  ghost: 'text-edwar-silver hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-edwar-blue/50 active:scale-95',
      variants[variant],
      sizes[size],
      className
    )

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
export type { ButtonProps }
