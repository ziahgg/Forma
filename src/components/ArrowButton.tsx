import type { ReactNode } from 'react'
import { ArrowUpRightIcon } from './Icons'

// "Button / …" component from the design: pill label with an arrow in a circle.
// primary = blue fill, outline = white hairline (on dark), dark = ink fill (on cream).
type Variant = 'primary' | 'outline' | 'dark'

const styles: Record<Variant, { button: string; circle: string }> = {
  primary: { button: 'bg-azure hover:bg-[#0052e0]', circle: 'bg-white text-azure' },
  outline: { button: 'border border-white hover:bg-white/10', circle: 'bg-white text-ink' },
  dark: { button: 'bg-ink hover:bg-[#2c0d12]', circle: 'bg-azure text-white' },
}

type Props = {
  children: ReactNode
  variant?: Variant
  href?: string
  type?: 'submit' | 'button'
  className?: string
}

export function ArrowButton({ children, variant = 'primary', href, type, className = '' }: Props) {
  const cls = `group inline-flex h-12 shrink-0 items-center gap-3.5 rounded-full pr-[7px] pl-[22px] text-sm leading-[1.2] font-medium whitespace-nowrap text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${styles[variant].button} ${className}`
  const inner = (
    <>
      {children}
      <span className={`grid size-[34px] shrink-0 place-items-center rounded-full ${styles[variant].circle}`}>
        <ArrowUpRightIcon className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
      </span>
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} className={cls}>
      {inner}
    </button>
  )
}
