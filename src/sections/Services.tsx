import type { ComponentType } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import { BuildingIcon, HammerIcon, HomeIcon, MessageIcon, RulerIcon, WindowIcon } from '../components/Icons'
import services from '../assets/img/services.jpg'

const items: { icon: ComponentType; title: string; text: string }[] = [
  { icon: HomeIcon, title: 'Residential Architecture', text: 'Private homes shaped around how you live.' },
  { icon: BuildingIcon, title: 'Commercial Architecture', text: 'Workplaces, hospitality and retail with clarity and character.' },
  { icon: WindowIcon, title: 'Interior Architecture', text: 'Interiors that continue the logic of the building.' },
  { icon: HammerIcon, title: 'Renovation & Adaptive Reuse', text: 'Giving existing structures a considered new life.' },
  { icon: RulerIcon, title: 'Concept Design & Feasibility', text: 'Testing ideas, sites and budgets before commitment.' },
  { icon: MessageIcon, title: 'Architectural Consultation', text: 'Independent advice at any stage of a project.' },
]

export function Services() {
  return (
    <section id="services" className="bg-wine pt-6 pb-[72px] md:pt-10 md:pb-[120px]">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
        <img
          src={services}
          alt="Building facade"
          loading="lazy"
          className="h-[280px] w-full rounded-2xl object-cover md:h-[420px] lg:h-[640px] lg:w-[48.3%] lg:shrink-0"
        />
        <div className="flex-1">
          <div className="pb-3">
            <SectionLabel>Architectural Services</SectionLabel>
          </div>
          <ul>
            {items.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex items-center gap-[18px] border-b border-wine-line py-[22px]">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-wine-card">
                  <Icon />
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="t-title">{title}</h3>
                  <p className="t-body text-mauve">{text}</p>
                </div>
                <span className="t-lead text-mauve">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
