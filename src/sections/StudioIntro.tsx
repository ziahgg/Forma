import { ArrowButton } from '../components/ArrowButton'
import studio from '../assets/img/studio.jpg'
import approach from '../assets/img/approach.jpg'
import p1 from '../assets/img/project-1.jpg'
import p2 from '../assets/img/project-2.jpg'
import p3 from '../assets/img/project-3.jpg'

export function StudioIntro() {
  return (
    <section id="studio" className="bg-wine py-[72px] md:py-[110px]">
      <div className="container-page flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-10">
          <div className="lg:w-[324px] lg:shrink-0">
            <p className="text-[84px] leading-none font-light tracking-[-0.03em] italic md:text-[132px]">[00]+</p>
            <p className="t-body mt-2 text-mauve">Projects completed — add verified figure</p>
          </div>

          <div className="lg:max-w-[720px] lg:flex-1">
            <h2 className="text-[30px] leading-[1.22] tracking-[-0.02em] md:text-[40px]">
              <span className="block">We design thoughtful spaces blending</span>
              <span className="block text-mauve">light, material and lasting context.</span>
            </h2>
            <a href="#team" className="group flex items-center gap-3.5 pt-7">
              <span className="flex -space-x-2.5">
                {[p1, p2, p3].map((src) => (
                  <img key={src} src={src} alt="" className="size-10 rounded-full border-2 border-wine object-cover" />
                ))}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[19px] leading-[1.35] font-medium tracking-[-0.2px] group-hover:underline">
                  Learn about the studio
                </span>
                <span className="t-body text-mauve">Our philosophy, approach and people</span>
              </span>
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[600fr_580fr] lg:gap-5">
          <img
            src={studio}
            alt="Studio interior"
            loading="lazy"
            className="h-[300px] w-full rounded-2xl object-cover md:h-[460px] lg:aspect-square lg:h-auto"
          />
          <div className="flex flex-col items-center gap-[18px] overflow-hidden rounded-2xl bg-wine-card px-6 pt-10 text-center lg:px-12 lg:pt-14">
            <h3 className="t-h28 max-w-[420px]">An approach rooted in place and purpose</h3>
            <p className="t-body max-w-[400px] text-mauve">
              Every project begins with listening — to the people who will use it and the site it belongs to. We
              translate that understanding into calm, enduring architecture.
            </p>
            <ArrowButton href="#philosophy">Discover the Studio</ArrowButton>
            <div className="relative h-[200px] w-full md:h-[310px] lg:h-auto lg:min-h-[240px] lg:flex-1">
              <img src={approach} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
