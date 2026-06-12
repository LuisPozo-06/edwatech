import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-edwar-blue text-white',
    success: 'bg-green-500/20 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
