import type { ComponentType } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import { LayersIcon, LeafIcon, MapIcon, SunIcon, WindIcon, WindowIcon } from '../components/Icons'
import contextCard from '../assets/img/context-card.jpg'
import context from '../assets/img/context.jpg'

const considerations: { icon: ComponentType<{ size?: number }>; label: string }[] = [
  { icon: SunIcon, label: 'Climate & orientation' },
  { icon: MapIcon, label: 'Site conditions' },
  { icon: WindowIcon, label: 'Natural light' },
  { icon: LayersIcon, label: 'Material selection' },
  { icon: WindIcon, label: 'Energy efficiency' },
  { icon: LeafIcon, label: 'Long-term performance' },
]

export function Sustainability() {
  return (
    <section className="bg-wine py-[72px] md:py-[120px]">
      <div className="container-page grid gap-4 lg:grid-cols-[580fr_600fr] lg:gap-5">
        <div className="flex flex-col gap-5 overflow-hidden rounded-2xl bg-wine-card px-6 pt-9 md:px-12 md:pt-[52px]">
          <SectionLabel>Sustainability & Context</SectionLabel>
          <h2 className="t-h28 max-w-[484px]">Designed for climate, site and the long term</h2>
          <p className="t-body max-w-[484px] text-mauve">
            We respond to each site’s orientation, climate and landscape, favouring passive strategies and durable
            materials. Performance targets are set with each client and verified by specialists where required.
          </p>
          <ul className="flex max-w-[484px] flex-wrap gap-2.5">
            {considerations.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="t-body flex items-center gap-2 rounded-full border border-wine-line px-3.5 py-[9px]"
              >
                <Icon size={15} />
                {label}
              </li>
            ))}
          </ul>
          <img
            src={contextCard}
            alt=""
            loading="lazy"
            className="mt-auto h-[180px] w-full object-cover md:h-[220px]"
          />
        </div>
        <div className="relative h-[320px] overflow-hidden rounded-2xl md:h-[480px] lg:h-auto lg:min-h-[640px]">
          <img
            src={context}
            alt="Building set within its landscape"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
