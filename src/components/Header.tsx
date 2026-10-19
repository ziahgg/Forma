import { useEffect, useState } from 'react'
import { ArrowButton } from './ArrowButton'
import { CloseIcon, LogoIcon, MenuIcon, SearchIcon } from './Icons'

// The design has no Insights section on the homepage; it points at Design
// Philosophy, the closest editorial content, until an Insights page exists.
const links = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#studio' },
  { label: 'Insights', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

// Sections that light up a nav link while in view.
const spy: Record<string, string> = {
  top: '#top',
  studio: '#studio',
  projects: '#projects',
  services: '#services',
  philosophy: '#philosophy',
  team: '#studio',
  contact: '#contact',
}

function useActiveLink() {
  const [active, setActive] = useState('#top')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(spy[entry.target.id])
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of Object.keys(spy)) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])
  return active
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="FORMA home">
      <LogoIcon />
      <span className="text-[19px] leading-[1.35] font-medium tracking-[1.5px]">FORMA</span>
    </a>
  )
}

export function Header() {
  const active = useActiveLink()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 pt-5 pb-7 md:px-10 lg:py-7 xl:px-20">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-wine p-[5px]">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? 'true' : undefined}
                  className={`block rounded-full px-[18px] py-[9px] text-sm leading-[1.2] transition-colors ${
                    active === l.href ? 'bg-azure' : 'hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="grid size-10 place-items-center rounded-full border border-white transition-colors hover:bg-white/10"
          >
            <SearchIcon />
          </button>
          <ArrowButton href="#contact">Contact Us</ArrowButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href="#contact" className="flex h-11 items-center rounded-full bg-azure px-4 text-sm leading-[1.2] font-medium">
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full bg-white text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="px-5 md:px-10 lg:hidden">
          <ul className="flex flex-col gap-1 rounded-3xl bg-wine p-[5px]">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? 'true' : undefined}
                  className={`block rounded-full px-[18px] py-3 text-sm leading-[1.2] ${
                    active === l.href ? 'bg-azure' : 'hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
