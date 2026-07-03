# 🌐 Mo · MassJedi — Portfolio
> Personal brand site (one mind, many lives).

**Status:** active · **Priority:** med · **Progress:** computed from phases · **Private:** no
**Links:** [GitHub](https://github.com/MohammadaliMasjedi-source/Personal-Portfolio) · [Live site](https://mohammadalimasjedi-source.github.io/Personal-Portfolio/) · [Docs](PROJECT.md)

> This file is the human-readable companion to `.mc/project.json` (the machine-readable
> source of truth for this project's tooling). Keep the two roughly in sync.

## Vision
The personal site and portfolio of Mohammadali (Mo) Masjedi — AI/ML researcher, battery-intelligence
builder, and multi-hyphenate maker. A dark, cinematic, motion-rich single-page site with no build step
that deploys straight to GitHub Pages. It is built to be public-safe on purpose: it showcases public-facing
work while deliberately excluding anything private (employment, clients, finances, health, documents).

## Phases
### Phase 1 — Foundation & content  ✅ 100%
- [x] Single-page site scaffold (HTML/CSS/JS, no build step)
- [x] Core sections written (Hero, About, Research, Work, Toolkit, Channels, Contact)
- [x] Design system in `css/style.css` (dark cinematic theme)
- [x] Interactions in `js/main.js` (canvas field, cursor, scroll-reveal)
- [x] README + LICENSE + .gitignore present

### Phase 2 — Personalization & assets  🔵 active
- [x] Email wired in Contact + Email channel
- [x] Drop-in folders for art / cats / portrait images
- [x] Add real `portrait.jpg` (real photo, loads on the live site)
- [ ] Replace `is-soon` placeholder channels with real links (YouTube, LinkedIn, Instagram, X)
- [x] Export `og.svg` to 1200×630 PNG for share previews

### Phase 3 — Deploy & live  🔵 active
- [x] GitHub Pages workflow (`.github/workflows/static.yml`) + `.nojekyll`
- [x] Push to GitHub and enable Pages source (live, HTTP 200 verified 2026-06-27)
- [x] Set live URL + `og:url` to deployed address
- [ ] Verify live render on desktop + mobile

### Phase 4 — Demos & polish  🔵 active
- [x] CellSight demo bundled under `projects/cellsight`
- [x] Wire CellSight demo into the Work section (live-demo link in the Work card)
- [ ] Accessibility & performance pass (Lighthouse)
- [ ] Final copy review across all sections

### Phase 5 — Trilingual + public-figure identity  🔵 active  ← current
- [x] FA/EN/DE i18n engine (reload-based switch, RTL-safe)
- [x] Art-life sections (Shiraz Art House, Cinema, Music, Collaborators, Press, Values)
- [x] Full FA/DE parity — 0 untranslated keys, verified in all three languages
- [x] Daricheh (داریچه) translations stub + Shiraz House Archive coming-soon section
- [ ] Fill Daricheh + Archive with real, freely-shareable pieces and cleared images
- [ ] Add press/interview source links once confirmed
- [ ] Mo's final content approval + one-time publish call

*(Mark phases ✅ when 100%, 🔵 when active, ⚪ when not started.)*

## Approach
Plain HTML + CSS + vanilla JavaScript — no Node, no bundler, no framework. The full design system lives
in `css/style.css`; all interactions/animations in `js/main.js`. Fonts come from Google Fonts and smooth
scrolling from the Lenis CDN (optional — the site degrades gracefully without it). Respects
`prefers-reduced-motion`. Deploys via GitHub Actions to GitHub Pages with `.nojekyll`.

## Decisions (log)
| Date | Decision | Why | Rejected alternatives |
|------|----------|-----|-----------------------|
| 2026-06-06 | FA/EN/DE + full art-life identity; humane/universal tone; under-claim rule (unverified claims removed until sourced) | Clean multilingual presence; unverified claims on a live page could harm | A second separate website; asserting unverified biographical claims |
| 2026-06-05 | Rebuild as a multi-hyphenate personal-brand site (v2) | One mind, many lives — reflect the full range of work, not a single niche | Keep the single-focus v1 site |
| 2026-06-05 | Plain HTML/CSS/vanilla JS, no build step | Deploy straight to GitHub Pages, zero install/maintenance overhead | Framework + bundler (React/Vite) |

## SWOT
- **Strengths** — Zero-build static site that deploys straight to GitHub Pages; distinct dark cinematic design with rich motion; public-safe by design (no private/sensitive content).
- **Weaknesses** — Several social channels are still `is-soon` placeholders; Archive + Daricheh sections are coming-soon stubs; no tests/automated checks.
- **Opportunities** — Strong personal brand for research/career visibility; bundled CellSight demo can showcase real work; rename to `USERNAME.github.io` for a clean root URL.
- **Threats** — Stale placeholders erode credibility if left public; motion-heavy UX may hurt perf/accessibility on low-end devices; CDN dependency (Lenis/fonts) for the full experience.

## Stats
Live on GitHub Pages · last touched 2026-07-03 · static site (index.html + css/ + js/ + projects/cellsight) · trilingual EN/FA/DE · GitHub Pages workflow present.
