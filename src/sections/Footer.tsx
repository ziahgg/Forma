import { ArrowButton } from '../components/ArrowButton'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../components/Icons'
import building from '../assets/img/footer.jpg'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#studio' },
  { label: 'Insights', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

const contact = [
  'Studio: [Address line, City]',
  'Phone: [Phone number]',
  'Email: [studio@email.com]',
  'Hours: [Mon–Fri, 00:00–00:00]',
]

// Profile URLs are not in the design; replace '#' with the studio's accounts.
const socials = [
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'LinkedIn', icon: LinkedinIcon },
  { label: 'Facebook', icon: FacebookIcon },
]

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-wine-deep pt-16 pb-10 md:pt-24">
      <img
        src={building}
        alt=""
        loading="lazy"
        className="absolute inset-x-0 top-[540px] -z-10 h-[420px] w-full object-cover opacity-35 lg:top-[52px] lg:right-0 lg:left-auto lg:h-[700px] lg:w-[52.8%]"
      />

      <div className="container-page flex flex-col gap-9 md:gap-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-start gap-4 lg:w-[360px]">
            <h2 className="t-h28">Stay connected with us</h2>
            <p className="t-body text-mauve">Reach out to talk through your plans or to follow the studio’s work.</p>
            <ArrowButton href="#contact">Get in Touch</ArrowButton>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-12 xl:gap-20">
            <div className="flex flex-col gap-3 md:w-[220px]">
              <h3 className="t-title">About the studio</h3>
              <p className="t-body text-mauve">
                FORMA is a contemporary architecture studio. Replace with the studio’s own description.
              </p>
            </div>
            <nav aria-label="Footer" className="order-3 flex flex-col gap-3 md:order-2 md:w-[140px]">
              <h3 className="t-title">Quick links</h3>
              <ul className="t-body flex flex-col gap-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-mauve transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="order-2 flex flex-col gap-3 md:order-3 md:w-[220px]">
              <h3 className="t-title">Get in touch</h3>
              <ul className="flex flex-col gap-3">
                {contact.map((c) => (
                  <li key={c} className="t-body text-mauve">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="bg-linear-to-b from-white/95 to-white/8 bg-clip-text text-center text-[min(25vw,340px)] leading-none font-medium tracking-[-0.029em] text-transparent"
        >
          FORMA
        </p>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="t-body text-mauve">© [Year] FORMA Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="t-body text-mauve">Privacy Policy | Terms</p>
            {socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full bg-white text-ink transition-opacity hover:opacity-85"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
