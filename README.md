# FORMA — Architecture Studio

Responsive homepage for FORMA, built from the Figma design
(“Architecture Studio Homepage — Desktop / Mobile”).

Live site: https://ziahgg.github.io/Forma/

## Stack

Vite · React · TypeScript · Tailwind CSS v4

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run lint     # oxlint
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push
to `main`. The base path is taken from the repository name, so the site is
served from `/Forma/`. In the repository settings, set
**Settings → Pages → Source** to **GitHub Actions** once.

## Content placeholders

Copy in square brackets (`[Project Name]`, `[Location]`, `[00]+`, team profiles,
contact details, social links) comes from the design and should be replaced
with verified studio information. The project inquiry form validates the email
field but is not connected to a form service yet — see
`src/sections/InquiryCta.tsx`.
