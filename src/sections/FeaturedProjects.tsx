import { ArrowButton } from '../components/ArrowButton'
import { SwipeHint } from '../components/SwipeHint'
import p1 from '../assets/img/project-1.jpg'
import p2 from '../assets/img/project-2.jpg'
import p3 from '../assets/img/project-3.jpg'
import inline1 from '../assets/img/inline-1.jpg'

const projects = [
  { image: p1, meta: 'Residential · [Location] · [Year]', featured: false },
  { image: p2, meta: 'Private Villa · [Location] · [Year]', featured: true },
  { image: p3, meta: 'Residential · [Location] · [Year]', featured: false },
]

function InlineImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="h-[38px] w-[84px] shrink-0 rounded-full border-2 border-white object-cover md:h-[50px] md:w-[120px]"
    />
  )
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-wine py-[72px] md:py-[120px]">
      <div className="container-page flex flex-col items-center gap-10 md:gap-[72px]">
        <div className="flex max-w-[682px] flex-col items-center gap-2.5 text-center">
          <h2 className="flex flex-col items-center gap-2.5 text-[30px] leading-[1.22] tracking-[-0.025em] md:text-[48px]">
            <span className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5">
              Selected work shaped by <InlineImage src={inline1} />
            </span>
            <span>site, light and the people</span>
            <span className="flex items-center justify-center gap-2.5 md:gap-3.5">
              <InlineImage src={p2} /> who live in them
            </span>
          </h2>
          <p className="t-body max-w-[560px] text-mauve">
            Featured projects — names, locations and years are placeholders. Replace reference imagery with the
            studio’s own photography.
          </p>
        </div>

        <div className="w-full">
          <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 md:scroll-px-10 items-center gap-3 overflow-x-auto px-5 md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-[380fr_400fr_380fr] lg:gap-5 lg:overflow-visible lg:px-0">
            {projects.map((p) => (
              <li
                key={p.meta + p.image}
                className={`relative flex shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[14px] p-3.5 ${
                  p.featured
                    ? 'order-first h-[400px] w-[290px] lg:order-none lg:aspect-[400/480] lg:h-auto lg:w-auto'
                    : 'h-[370px] w-[270px] lg:aspect-[380/400] lg:h-auto lg:w-auto'
                }`}
              >
                <img src={p.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div className="relative flex flex-col gap-1 rounded-[10px] bg-wine-deep px-4 py-3.5">
                  <h3 className="t-title">[Project Name]</h3>
                  <p className="t-body text-mauve">{p.meta}</p>
                </div>
              </li>
            ))}
          </ul>
          <SwipeHint className="mt-10 justify-center">Swipe to see more projects</SwipeHint>
        </div>

        <ArrowButton href="#projects">View All Projects</ArrowButton>
      </div>
    </section>
  )
}
