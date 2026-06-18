# devfolio — design record (2026-06-17)

## Goal

A developer-portfolio landing page for **Itamar Klein**, Senior Software Engineer
(6+ yrs, Tel Aviv, currently at FINQ). Built from a supplied "3D Creator" template
spec, with the **visuals kept exactly** and **all copy rewritten for software
engineering**.

## Decisions

1. **Theme** — keep the template's visual design verbatim (dark `#0C0C0C`, Kanit
   300–900, gradient `.hero-heading`, magnetic portrait, scroll marquee, sticky
   stacking project cards); rewrite every word for a software engineer.
2. **Content** — drafted realistic placeholders for Expertise + Projects; user
   edits later. No fabricated metrics tied to a real employer.
3. **Location** — standalone project at `~/ik-os/devfolio` (outside the 2nd-brain
   vault), named `devfolio`.

## Copy adaptation (vs template)

- Title: `Itamar Klein — Software Engineer` (was "Jack — 3D Creator").
- Nav: `About · Stack · Work · Contact` (replaces "Price" with engineering-fit labels).
- Hero heading: `Hi, i'm itamar`. Heading sizes scaled down from the template's
  `14–17.5vw` to `11.5–13.5vw` because "itamar" is longer than "jack" and overflowed.
- Hero tagline: from the GitHub bio — "a software engineer turning hard problems
  into scalable, production-ready systems".
- About: rewritten six-years bio via the character-reveal `AnimatedText`.
- Services → **Expertise**: Backend Engineering, API Design, Cloud & DevOps,
  System Architecture, Full-Stack Delivery.
- Projects → **Work**: placeholder cards (Realtime API Gateway, Distributed Data
  Pipeline, Internal Dev Platform); "Live Project" button → "View Project".
- Added a `#contact` footer with the gradient CTA + GitHub / LinkedIn links
  (the template had no contact section).

## Structure

`src/components/` — five section components.
`src/components/ui/` — `FadeIn`, `Magnet`, `AnimatedText`, `ContactButton`, `ViewProjectButton`.
`src/data/projects.ts` — project data.

## Verification

`npm run build` passes (tsc + Vite). Rendered in a headless browser across all
sections with zero console errors/warnings.

## Known follow-ups (for the user)

- Replace placeholder portrait, decorative 3D objects, marquee GIFs, and project
  images (all remote template URLs) with real assets.
- Replace placeholder project names/links and confirm the contact email
  (`itamar.klein@finqai.com`) is the address you want public.
