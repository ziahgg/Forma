import { ArrowButton } from '../components/ArrowButton'
import { CheckIcon } from '../components/Icons'
import { SectionLabel } from '../components/SectionLabel'
import philosophy from '../assets/img/philosophy.jpg'

const principles = [
  {
    title: 'Space & natural light',
    text: 'Proportion, orientation and openings are composed to bring daylight deep into every room.',
  },
  {
    title: 'Materiality & surroundings',
    text: 'Materials are chosen for durability and character, and to sit quietly within the landscape.',
  },
  {
    title: 'Long-term thinking',
    text: 'Flexible plans and passive strategies help buildings perform well over time.',
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-wine pt-6 pb-[72px] md:pt-10 md:pb-[120px]">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
        <div className="order-2 flex flex-1 flex-col items-start gap-7 lg:order-1">
          <SectionLabel>Design Philosophy</SectionLabel>
          <h2 className="t-h40 max-w-[540px]">Architecture guided by light, material and place</h2>
          <p className="t-lead max-w-[540px] text-mauve">
            We believe good buildings feel inevitable — rooted in their surroundings, generous with daylight, and
            honest in the way they are made.
          </p>
          <ul className="flex flex-col gap-7">
            {principles.map((p) => (
              <li key={p.title} className="flex gap-3.5">
                <span className="grid size-[22px] shrink-0 place-items-center rounded-full border border-white">
                  <CheckIcon />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="t-title">{p.title}</h3>
                  <p className="t-body text-mauve">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <ArrowButton href="#process">Discover Our Approach</ArrowButton>
        </div>
        <img
          src={philosophy}
          alt="Residence exterior in daylight"
          loading="lazy"
          className="order-1 h-[360px] w-full rounded-2xl object-cover md:h-[480px] lg:order-2 lg:h-[660px] lg:w-[48.3%] lg:shrink-0"
        />
      </div>
    </section>
  )
}
