# Itamar Klein — Portfolio

A fast, single-page developer portfolio. Dark & light themes, a hidden terminal
mode, and an animated typing intro — built as a clean, dependency-light React app.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS · Inter / JetBrains Mono

## Features

- Light & dark themes (persisted to `localStorage`)
- Interactive terminal mode — type `help` to explore
- Typewriter hero intro
- Fully responsive, with a collapsible mobile nav
- No UI/animation dependencies — just React

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  App.tsx                     # layout, theme state, scroll-reveal
  index.css                   # design system — CSS variables & themes
  components/portfolio/
    Navbar.tsx                # nav links, theme toggle, terminal trigger
    Sections.tsx              # hero, about, skills, experience, contact, footer
    Terminal.tsx              # terminal mode and its commands
    Typewriter.tsx            # animated hero subtitle
    Background.tsx            # grid / glow backdrop
    icons.tsx                 # inline SVG icons
```

## Editing content

Everything lives in `src/components/portfolio/`:

- **Hero, About, Skills, Experience, Contact** — `Sections.tsx`
- **Projects** — the `PROJECTS` array in `Sections.tsx` (empty shows a "building" state; add entries to render project cards)
- **Terminal commands** — `Terminal.tsx`
- **Links & email** — constants at the top of `Sections.tsx`
- **Colors & themes** — CSS variables in `src/index.css`
