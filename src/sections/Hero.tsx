import { ArrowButton } from '../components/ArrowButton'
import hero from '../assets/img/hero.jpg'

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[780px] flex-col overflow-hidden bg-wine-deep md:min-h-[900px]">
      <img src={hero} alt="" fetchPriority="high" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-wine-deep/70 to-wine-deep/0 to-28%" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-wine-deep/0 from-50% to-wine-deep/92" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-8 md:px-10 md:pb-16 xl:px-20">
        <p
          aria-hidden="true"
          className="mt-24 text-center text-[min(25vw,345px)] leading-none font-medium tracking-[-0.029em] md:mt-[88px]"
        >
          FORMA
        </p>

        {/* At 1440 the Figma row (910 + 401) is wider than its 1280 frame, so the
            single-row layout only kicks in at full width; narrower screens stack. */}
        <div className="mt-auto flex flex-col gap-6 pt-16 min-[1440px]:flex-row min-[1440px]:gap-0 min-[1440px]:items-end min-[1440px]:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-10">
            <div className="flex max-w-[600px] flex-col gap-3.5 md:shrink-0 md:basis-[600px] md:gap-[18px] md:max-lg:shrink">
              <p className="t-body flex w-full items-center gap-2 rounded-full border border-white px-3 py-1.5 md:w-fit">
                <span className="size-[7px] shrink-0 rounded-full bg-azure" aria-hidden="true" />
                Featured · Private Residence · [Location]
              </p>
              <h1 className="text-[34px] leading-[1.18] tracking-[-0.023em] md:text-[52px]">
                Thoughtful architecture that shapes how you live
              </h1>
            </div>
            <p className="t-body md:w-[270px] md:shrink-0">
              We design contemporary homes and workplaces that balance light, material and context — from first
              sketch to completed building.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2.5 md:flex-row md:gap-3">
            <ArrowButton href="#projects" className="justify-between md:justify-start">
              Explore Our Work
            </ArrowButton>
            <ArrowButton href="#contact" variant="outline" className="justify-between md:justify-start">
              Discuss a Project
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  )
}
