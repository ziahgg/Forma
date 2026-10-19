import { ArrowButton } from '../components/ArrowButton'
import { SwipeHint } from '../components/SwipeHint'

const stages = [
  { title: 'Discovery & Briefing', text: 'We learn about your goals, site, budget and timeline.' },
  { title: 'Concept Development', text: 'Initial ideas, massing and options explored together.' },
  { title: 'Design Development', text: 'The chosen concept refined in plan, section and material.' },
  { title: 'Documentation & Coordination', text: 'Drawings and specifications coordinated with consultants.' },
  { title: 'Construction Support', text: 'Site visits and guidance as the building takes shape.' },
]

export function Process() {
  return (
    <section id="process" className="bg-cream pt-12 pb-[72px] text-ink md:pt-20 md:pb-[120px]">
      <div className="container-page flex flex-col gap-9 md:gap-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[560px] flex-col gap-3">
            <p className="t-body text-stone">From first brief to finished building</p>
            <h2 className="t-h40">Our design process, clear at every stage</h2>
          </div>
          <div className="flex flex-col items-start gap-[18px] lg:w-[300px]">
            <p className="t-body text-stone">
              Five stages keep decisions clear, budgets visible and the design moving forward. Timelines depend on
              each project.
            </p>
            <ArrowButton href="#contact" variant="dark">
              Discuss a Project
            </ArrowButton>
          </div>
        </div>

        <div>
          <ol className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 md:scroll-px-10 gap-2.5 overflow-x-auto px-5 md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
            {stages.map((s, i) => (
              <li
                key={s.title}
                className="flex min-h-[240px] w-[220px] shrink-0 snap-start flex-col gap-3 rounded-[14px] bg-wine px-[22px] pt-[22px] pb-6 text-white lg:min-h-[250px] lg:w-auto"
              >
                <span className="t-title">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1" aria-hidden="true" />
                <h3 className="t-title">{s.title}</h3>
                <p className="t-body text-mauve">{s.text}</p>
              </li>
            ))}
          </ol>
          <SwipeHint tone="light" className="mt-9">
            Swipe through all five stages
          </SwipeHint>
        </div>
      </div>
    </section>
  )
}
