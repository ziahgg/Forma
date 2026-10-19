import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { StudioIntro } from './sections/StudioIntro'
import { FeaturedProjects } from './sections/FeaturedProjects'
import { Services } from './sections/Services'
import { Philosophy } from './sections/Philosophy'
import { Spotlight } from './sections/Spotlight'
import { Process } from './sections/Process'
import { Materials } from './sections/Materials'
import { Sustainability } from './sections/Sustainability'
import { Team } from './sections/Team'
import { InquiryCta } from './sections/InquiryCta'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StudioIntro />
        <FeaturedProjects />
        <Services />
        <Philosophy />
        <Spotlight />
        <Process />
        <Materials />
        <Sustainability />
        <Team />
        <InquiryCta />
      </main>
      <Footer />
    </>
  )
}
