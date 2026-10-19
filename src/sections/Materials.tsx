import { SectionLabel } from '../components/SectionLabel'
import materials from '../assets/img/materials.jpg'
import concrete from '../assets/img/texture-concrete.jpg'
import timber from '../assets/img/texture-timber.jpg'
import glass from '../assets/img/texture-glass.jpg'
import stone from '../assets/img/texture-stone.jpg'

const cards = [
  { texture: concrete, title: 'Concrete', label: 'Structure', text: 'Crisp edges and shadow lines that age with grace.' },
  { texture: timber, title: 'Timber', label: 'Warmth', text: 'Natural grain brings warmth and a human scale.' },
  { texture: glass, title: 'Glass', label: 'Light', text: 'Openings framed to capture daylight and views.' },
  { texture: stone, title: 'Stone', label: 'Texture', text: 'Durable, tactile surfaces grounded in place.' },
]

export function Materials() {
  return (
    <section className="bg-white py-[72px] text-ink md:py-[120px]">
      <div className="container-page flex flex-col gap-9 md:gap-14">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[620px] flex-col gap-3">
            <SectionLabel tone="light">Materials & Craftsmanship</SectionLabel>
            <h2 className="t-h40">Honest materials, careful detailing</h2>
          </div>
          <p className="t-body text-stone lg:w-[360px]">
            Texture, joints and the play of natural light are considered from the first sketch to the last detail on
            site.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
          <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[460px] lg:h-auto lg:min-h-[604px] lg:w-[49.7%] lg:shrink-0">
            <img src={materials} alt="Material detail" loading="lazy" className="absolute inset-0 size-full object-cover" />
          </div>
          <ul className="grid flex-1 grid-cols-2 gap-2.5 md:gap-5">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-[18px] bg-wine px-4 py-[18px] text-center text-white md:min-h-[292px] md:gap-3 md:p-7"
              >
                <img src={c.texture} alt="" loading="lazy" className="size-14 rounded-[22px] object-cover md:rounded-full" />
                <h3 className="text-[30px] leading-none tracking-[-0.0375em] md:text-[40px]">{c.title}</h3>
                <p className="t-label uppercase">{c.label}</p>
                <p className="t-body max-w-[216px] text-mauve">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
