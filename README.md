# devfolio — Itamar Klein

Personal developer-portfolio landing page. Dark, type-led single page built from
a 3D-creator design template, re-skinned for a software engineer.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS 3.4 · Framer Motion 12 · Lucide React · Kanit (Google Fonts)

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Sections

`HeroSection → MarqueeSection → AboutSection → ServicesSection → ProjectsSection → footer`

## Editing your content

Most copy lives directly in the section components under `src/components/`:

- **Name / tagline / nav** — `src/components/HeroSection.tsx`
- **About paragraph** — `AboutSection.tsx` (`ABOUT_TEXT`)
- **Expertise items** — `ServicesSection.tsx` (`SERVICES`)
- **Projects** — `src/data/projects.ts` (names, categories, links, images) — currently
  **placeholder projects with sample images**; swap these for your real work.
- **Contact email** — `src/components/ui/ContactButton.tsx` (`CONTACT_EMAIL`)
- **Social links** — `src/App.tsx` (`GITHUB_URL`, `LINKEDIN_URL`)

Reusable bits live in `src/components/ui/`: `FadeIn`, `Magnet`, `AnimatedText`,
`ContactButton`, `ViewProjectButton`.

Placeholder portrait, decorative 3D objects, and marquee/project images are remote
URLs carried over from the template — replace with your own assets when ready.
