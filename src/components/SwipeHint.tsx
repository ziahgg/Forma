import { ArrowRightIcon } from './Icons'

// Mobile-only hint under horizontally scrolling rows.
type Props = { children: string; tone?: 'dark' | 'light'; className?: string }

export function SwipeHint({ children, tone = 'dark', className = '' }: Props) {
  return (
    <p className={`t-body flex items-center gap-2 lg:hidden ${tone === 'dark' ? 'text-mauve' : 'text-stone'} ${className}`}>
      {children}
      <ArrowRightIcon />
    </p>
  )
}
