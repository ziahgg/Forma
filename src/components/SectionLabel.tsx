// Eyebrow label: blue dot + small caps-style text. `tone` follows the section background.
export function SectionLabel({ children, tone = 'dark' }: { children: string; tone?: 'dark' | 'light' }) {
  return (
    <p className={`t-label flex items-center gap-2.5 ${tone === 'dark' ? 'text-mauve' : 'text-stone'}`}>
      <span className="size-2 shrink-0 rounded-full bg-azure" aria-hidden="true" />
      {children}
    </p>
  )
}
