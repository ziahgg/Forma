import { SectionLabel } from '../components/SectionLabel'
import spotlight from '../assets/img/spotlight.jpg'

const facts = [
  { label: 'Type', value: 'Residential' },
  { label: 'Location', value: '[Location]' },
  { label: 'Year', value: '[Year]' },
  { label: 'Status', value: '[Completed / In progress]' },
]

const notes = [
  { title: 'Design challenge', text: '[Placeholder] e.g. a steep site, strong western sun and the need for privacy.' },
  {
    title: 'Architectural response',
    text: '[Placeholder] e.g. stepped volumes, deep overhangs and a courtyard that frames the view.',
  },
  { title: 'Outcome', text: '[Placeholder] Describe the result qualitatively — no unverified figures.' },
]

export function Spotlight() {
  return (
    <section className="bg-cream pt-[72px] pb-20 text-ink md:pt-[120px]">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
        <img
          src={spotlight}
          alt="Hillside residence"
          loading="lazy"
          className="h-[340px] w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(26,5,8,0.18)] md:h-[480px] lg:h-[560px] lg:w-[46.7%] lg:shrink-0"
        />
        <div className="flex flex-1 flex-col gap-[22px]">
          <SectionLabel tone="light">Project Spotlight</SectionLabel>
          <h2 className="t-h28">[Project Name] — a hillside residence opened to light and landscape</h2>
          <dl className="flex flex-wrap gap-x-6 gap-y-3 border-y border-cream-line py-4 md:gap-x-8">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1">
                <dt className="t-label text-stone">{f.label}</dt>
                <dd className="t-lead">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="t-body text-stone">
            Overview — [Placeholder] A brief description of the project, its brief and the client’s goals.
          </p>
          <ul className="flex flex-col gap-[22px]">
            {notes.map((n) => (
              <li key={n.title} className="flex gap-3">
                <span className="size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <h3 className="t-title">{n.title}</h3>
                  <p className="t-body text-stone">{n.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
