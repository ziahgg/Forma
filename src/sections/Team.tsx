import { ArrowButton } from '../components/ArrowButton'
import { SectionLabel } from '../components/SectionLabel'
import t1 from '../assets/img/team-1.jpg'
import t2 from '../assets/img/team-2.jpg'
import t3 from '../assets/img/team-3.jpg'
import t4 from '../assets/img/team-4.jpg'

const people = [
  { image: t1, role: '[Founding Architect] · [Registration, if verified]' },
  { image: t2, role: '[Design Director] · [Registration, if verified]' },
  { image: t3, role: '[Project Architect] · [Registration, if verified]' },
  { image: t4, role: '[Interior Architect] · [Registration, if verified]' },
]

export function Team() {
  return (
    <section id="team" className="bg-wine pt-6 pb-[72px] md:pt-10 md:pb-[120px]">
      <div className="container-page flex flex-col gap-9 md:gap-12">
        <div className="flex flex-col gap-[18px] lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[620px] flex-col gap-3.5">
            <SectionLabel>Studio & Team</SectionLabel>
            <h2 className="t-h40">The people behind the studio</h2>
          </div>
          <div className="flex flex-col items-start gap-[18px] lg:w-[340px]">
            <p className="t-body text-mauve">
              Profiles are placeholders — add verified names, roles, registrations and short biographies supplied by
              the studio.
            </p>
            <ArrowButton href="#team" variant="outline">
              Meet the Team
            </ArrowButton>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-2.5 gap-y-6 md:gap-x-5 lg:grid-cols-4 lg:gap-[13px]">
          {people.map((p) => (
            <li key={p.role} className="flex flex-col gap-4">
              <div className="relative h-[360px] overflow-hidden rounded-[14px]">
                <img src={p.image} alt="" loading="lazy" className="size-full object-cover" />
                <span className="t-body absolute top-3 left-3 rounded-full bg-white px-2.5 py-[5px] text-ink">
                  Portrait placeholder
                </span>
              </div>
              <h3 className="t-title">[Architect Name]</h3>
              <p className="t-body text-mauve">{p.role}</p>
              <p className="t-body text-mauve">[Short biography supplied by the studio.]</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
