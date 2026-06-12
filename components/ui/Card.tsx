'use client'

import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  highlighted?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, highlighted = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-2xl bg-edwar-gray/50 border border-white/5 p-6 transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-1 hover:border-edwar-blue/30',
        highlighted && 'border-b-2 border-b-edwar-blue',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
