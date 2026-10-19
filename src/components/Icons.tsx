import type { SVGProps } from 'react'

// Stroke icons exported from the Figma file. They use currentColor so the
// colour is set by the parent, as in the design's component instances.
type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Icon({ size = 16, viewBox, strokeWidth, children, ...rest }: IconProps & { viewBox: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const LogoIcon = (p: IconProps) => (
  <Icon size={24} viewBox="0 0 24 24" strokeWidth={1.6} {...p}>
    <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19M12 3V7M12 17V21M3 12H7M17 12H21" />
  </Icon>
)

export const SearchIcon = (p: IconProps) => (
  <Icon size={18} viewBox="0 0 18 18" strokeWidth={1.2} {...p}>
    <path d="M13.5 8.25C13.5 11.1495 11.1495 13.5 8.25 13.5C5.35051 13.5 3 11.1495 3 8.25C3 5.35051 5.35051 3 8.25 3C11.1495 3 13.5 5.35051 13.5 8.25Z" />
    <path d="M15 15L12.375 12.375" />
  </Icon>
)

export const ArrowUpRightIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M4.66675 11.3333L11.3334 4.66667M11.3334 10.6667V4.66667H5.33341" />
  </Icon>
)

export const ArrowRightIcon = (p: IconProps) => (
  <Icon size={14} viewBox="0 0 14 14" strokeWidth={0.933333} {...p}>
    <path d="M2.91675 7H11.0834M7.58342 10.5L11.0834 7L7.58342 3.5" />
  </Icon>
)

export const MenuIcon = (p: IconProps) => (
  <Icon size={20} viewBox="0 0 20 20" strokeWidth={1.33333} {...p}>
    <path d="M3.3335 6.66667H16.6668M3.3335 13.3333H16.6668" />
  </Icon>
)

// Not in the design file: close state for the mobile menu button, drawn to
// match the menu icon's stroke.
export const CloseIcon = (p: IconProps) => (
  <Icon size={20} viewBox="0 0 20 20" strokeWidth={1.33333} {...p}>
    <path d="M5 5L15 15M15 5L5 15" />
  </Icon>
)

export const HomeIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M2 7.33333L8 2L14 7.33333M3.33333 6.33333V13.3333H12.6667V6.33333" />
    <path d="M6.66675 13.3333V9.33325H9.33341V13.3333" />
  </Icon>
)

export const BuildingIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M2.66659 13.9999V3.33325L7.99992 1.33325V5.99992M2.66659 13.9999H1.33325M2.66659 13.9999H7.99992M7.99992 5.99992V13.9999M7.99992 5.99992L13.3333 7.99992V13.9999M7.99992 13.9999H13.3333M13.3333 13.9999H14.6666M4.66659 5.33325H5.99992M4.66659 7.99992H5.99992M4.66659 10.6666H5.99992M9.99992 9.33325H11.3333M9.99992 11.9999H11.3333" />
  </Icon>
)

export const WindowIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M3.33341 2H12.6667C13.0349 2 13.3334 2.29848 13.3334 2.66667V13.3333C13.3334 13.7015 13.0349 14 12.6667 14H3.33341C2.96522 14 2.66675 13.7015 2.66675 13.3333V2.66667C2.66675 2.29848 2.96522 2 3.33341 2Z" />
    <path d="M8.00008 2V8M8.00008 8V14M8.00008 8H2.66675M8.00008 8H13.3334" />
  </Icon>
)

export const HammerIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M9.33333 3.99992L12 6.66659M2 13.9999L8 7.99992M7.33333 2.66659L9.33333 1.33325L13.3333 5.33325L12 7.33325L10 6.66659L8.66667 7.99992L6 5.33325L7.33333 3.99992V2.66659Z" />
  </Icon>
)

export const RulerIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M2 11.3333L11.3333 2L14 4.66667L4.66667 14L2 11.3333Z" />
    <path d="M4.66675 8.66675L6.00008 10.0001M6.66675 6.66675L8.00008 8.00008M8.66675 4.66675L10.0001 6.00008" />
  </Icon>
)

export const MessageIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M14.0001 8.00002C13.9951 8.90803 13.7583 9.79972 13.3122 10.5906C12.8662 11.3815 12.2255 12.0454 11.4511 12.5195C10.6766 12.9935 9.79392 13.2619 8.88667 13.2994C7.97942 13.3368 7.07763 13.142 6.26675 12.7334L2.66675 13.3334L3.33341 10.2667C3.03284 8.8522 3.30647 7.37624 4.09412 6.1635C4.88178 4.95077 6.11893 4.10059 7.53341 3.80002C8.9479 3.49944 10.4239 3.77307 11.6366 4.56073C12.8493 5.34838 13.6995 6.58553 14.0001 8.00002Z" />
  </Icon>
)

export const CheckIcon = (p: IconProps) => (
  <Icon size={12} viewBox="0 0 12 12" strokeWidth={0.8} {...p}>
    <path d="M2.5 6L4.5 8L9.5 3" />
  </Icon>
)

export const SunIcon = (p: IconProps) => (
  <Icon size={15} viewBox="0 0 15 15" strokeWidth={1} {...p}>
    <path d="M10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5C8.88071 5 10 6.11929 10 7.5Z" />
    <path d="M7.5 1.25V2.5M7.5 12.5V13.75M1.25 7.5H2.5M12.5 7.5H13.75M3.125 3.125L4.0625 4.0625M10.9375 10.9375L11.875 11.875M3.125 11.875L4.0625 10.9375M10.9375 4.0625L11.875 3.125" />
  </Icon>
)

export const MapIcon = (p: IconProps) => (
  <Icon size={15} viewBox="0 0 15 15" strokeWidth={1} {...p}>
    <path d="M5.625 2.5L1.875 3.75V12.5L5.625 11.25L9.375 12.5L13.125 11.25V2.5L9.375 3.75L5.625 2.5Z" />
    <path d="M5.625 2.5V11.25M9.375 3.75V12.5" />
  </Icon>
)

export const LayersIcon = (p: IconProps) => (
  <Icon size={15} viewBox="0 0 15 15" strokeWidth={1} {...p}>
    <path d="M7.5 1.875L13.125 5L7.5 8.125L1.875 5L7.5 1.875Z" />
    <path d="M1.875 8.125L7.5 11.25L13.125 8.125" />
  </Icon>
)

export const WindIcon = (p: IconProps) => (
  <Icon size={15} viewBox="0 0 15 15" strokeWidth={1} {...p}>
    <path d="M1.875 5H8.75C9.12084 5 9.48335 4.89003 9.79169 4.68401C10.1 4.47798 10.3404 4.18514 10.4823 3.84253C10.6242 3.49992 10.6613 3.12292 10.589 2.75921C10.5166 2.39549 10.338 2.0614 10.0758 1.79918C9.8136 1.53695 9.47951 1.35838 9.11579 1.28603C8.75208 1.21368 8.37508 1.25081 8.03247 1.39273C7.68986 1.53464 7.39702 1.77496 7.19099 2.08331C6.98497 2.39165 6.875 2.75416 6.875 3.125M1.875 7.5H11.875C12.2458 7.5 12.6084 7.60997 12.9167 7.816C13.225 8.02202 13.4654 8.31486 13.6073 8.65747C13.7492 9.00008 13.7863 9.37708 13.714 9.7408C13.6416 10.1045 13.463 10.4386 13.2008 10.7008C12.9386 10.963 12.6045 11.1416 12.2408 11.214C11.8771 11.2863 11.5001 11.2492 11.1575 11.1073C10.8149 10.9654 10.522 10.725 10.316 10.4167C10.11 10.1084 10 9.74584 10 9.375M1.875 10H6.875" />
  </Icon>
)

export const LeafIcon = (p: IconProps) => (
  <Icon size={15} viewBox="0 0 15 15" strokeWidth={1} {...p}>
    <path d="M3.125 11.875C3.125 6.25 6.875 2.5 12.5 2.5C12.5 8.125 8.75 11.875 3.125 11.875Z" />
    <path d="M3.125 11.875L8.125 6.875" />
  </Icon>
)

export const InstagramIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M5.33333 2H10.6667C12.5076 2 14 3.49238 14 5.33333V10.6667C14 12.5076 12.5076 14 10.6667 14H5.33333C3.49238 14 2 12.5076 2 10.6667V5.33333C2 3.49238 3.49238 2 5.33333 2Z" />
    <path d="M10.6666 7.99967C10.6666 9.47243 9.47268 10.6663 7.99992 10.6663C6.52716 10.6663 5.33325 9.47243 5.33325 7.99967C5.33325 6.52692 6.52716 5.33301 7.99992 5.33301C9.47268 5.33301 10.6666 6.52692 10.6666 7.99967Z" />
    <path d="M11.6667 4.33301V4.33967" />
  </Icon>
)

export const LinkedinIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2Z" />
    <path d="M5.33325 6.66699V11.3337M5.33325 4.66699V4.67366M7.99992 11.3337V8.66699M7.99992 8.66699C7.99992 8.31337 8.14039 7.97423 8.39044 7.72418C8.64049 7.47413 8.97963 7.33366 9.33325 7.33366C9.68687 7.33366 10.026 7.47413 10.2761 7.72418C10.5261 7.97423 10.6666 8.31337 10.6666 8.66699V11.3337M7.99992 8.66699V6.66699" />
  </Icon>
)

export const FacebookIcon = (p: IconProps) => (
  <Icon viewBox="0 0 16 16" strokeWidth={1.06667} {...p}>
    <path d="M10.0001 2H8.66675C7.9595 2 7.28123 2.28095 6.78113 2.78105C6.28103 3.28115 6.00008 3.95942 6.00008 4.66667V6.66667H4.66675V9.33333H6.00008V14H8.66675V9.33333H10.3334L10.6667 6.66667H8.66675V5C8.66675 4.82319 8.73699 4.65362 8.86201 4.5286C8.98703 4.40357 9.1566 4.33333 9.33341 4.33333H10.6667L10.0001 2Z" />
  </Icon>
)
