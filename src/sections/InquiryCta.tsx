import type { FormEvent } from 'react'
import { ArrowButton } from '../components/ArrowButton'

const types = ['Residential', 'Commercial', 'Renovation']

export function InquiryCta() {
  // Static site: there is no endpoint yet. Wire this to the studio's form
  // service (or a mailto) once one is chosen; until then submit only validates.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

  return (
    <section id="contact" className="border-y border-wine-line bg-wine-deep py-14 md:py-[72px]">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3.5 lg:w-[560px]">
          <h2 className="t-h28">Start a project with us</h2>
          <p className="t-body text-mauve">
            Planning a new home, a workplace or a renovation? Tell us a little about it. The initial consultation is
            an informal conversation about your goals, site and budget — fees and next steps are explained before
            any work begins.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 lg:w-[460px]">
          <h3 className="t-title">Tell us about your project</h3>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 rounded-[20px] border border-wine-line bg-wine p-4 md:h-[62px] md:flex-row md:items-center md:gap-2 md:rounded-full md:py-1.5 md:pr-1.5 md:pl-[22px]"
          >
            <label htmlFor="inquiry-email" className="sr-only">
              Your email address
            </label>
            <input
              id="inquiry-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email address"
              className="t-body min-w-0 flex-1 bg-transparent px-1 text-white outline-none placeholder:text-mauve md:px-0"
            />
            <ArrowButton type="submit" className="justify-between md:justify-start">
              Start a Project
            </ArrowButton>
          </form>
          <ul className="flex flex-wrap gap-2">
            {types.map((t) => (
              <li key={t} className="t-body rounded-full border border-wine-line px-3 py-1.5 text-mauve">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
