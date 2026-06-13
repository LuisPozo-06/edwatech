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
        'relative rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 transition-all duration-300 overflow-hidden',
        hover && 'hover:border-edwar-blue/30 hover:shadow-xl hover:-translate-y-1',
        highlighted && 'border-l-4 border-l-edwar-blue',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
