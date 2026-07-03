# Mo · MassJedi — Portfolio — Explained

> **One-liner:** Mohammadali (Mo) Masjedi's public personal-brand website — a dark, cinematic, trilingual (EN/FA/DE) single-page site that deploys straight to GitHub Pages with no build step.
> **Status:** building (deployed but pending Mo's content approvals before final publish) · **Area:** personal / public presence · **Last updated:** 2026-07-03

*Standard file: `learning/PROJECT-EXPLAINED.md` — a plain-language explainer kept in every one of Mo's projects, so anyone can understand the project from one place. Accurate, no invented facts. Update the Changelog on every change.*

## 🟢 ELI5 (a child)
This is Mo's own website — the page that tells the world who he is. It shows the different things he does (science, music, films, managing projects) on one nice-looking page that you can read in English, Persian, or German.

## 🟡 ELI15 (a smart teenager)
It's a personal homepage for Mo Masjedi. The idea is "one mind, many lives": instead of pretending he's only one thing, the site shows all his sides — AI/ML researcher and battery-intelligence builder, guitarist/musician, project manager, and someone active in arts and culture. It's built as a single web page with smooth animations and a dark "cinematic" look, and you can flip the whole thing between three languages. The whole site is just plain files (no app to install), so it can be hosted for free on GitHub Pages. It's deliberately built to be *public-safe*: anything private (job, clients, money, health) is kept out on purpose.

## 🔵 Practitioner / College (technical)
A static, zero-build single-page site. No Node, no bundler, no framework.

**Files / structure:**
- `index.html` (~868 lines) — all content and sections in one file (Hero, About/Journey, Research, Work, Toolkit, Channels, Now & Interests, Notes, Contact, plus art-life sections like Shiraz House Archive and the Daricheh/داریچه translations stub).
- `css/style.css` (~776 lines, ~58 KB) — the full design system: dark cinematic theme, warm espresso/cream/saffron palette, RTL styles, the striped placeholder gallery.
- `js/main.js` (~562 lines) — interactions: live energy-field canvas, custom cursor with contextual labels, magnetic buttons, scroll-reveal, split-text headlines, count-up stats, preloader, mobile menu, scroll progress.
- `js/i18n.js` (~454 lines, ~46 KB) — the EN/FA/DE translation engine. Reload-based language switch, RTL-safe, with per-character split handling for Persian. All translatable copy is keyed via `data-i18n` attributes.
- `js/polish.js` (~36 lines) — small late-stage polish fixes.
- `projects/cellsight/index.html` — a bundled CellSight live demo (synthetic data) intended to be wired into the Work section (not yet linked in).
- `assets/img/` — portrait + og card live here (`portrait.jpg` not yet added; a "Mo" monogram is the fallback).
- `.github/workflows/` + `.nojekyll` — GitHub Pages auto-deploy on push to `main`.
- `.mc/project.json` + `PROJECT.md` — the project record (machine + human readable).

**Dependencies:** Google Fonts (incl. Vazirmatn for Persian) and the Lenis smooth-scroll CDN — both optional; the site degrades gracefully and respects `prefers-reduced-motion`.

**Done vs not:** Scaffold, design system, interactions, trilingual i18n with verified EN/FA/DE parity (0 untranslated keys, RTL verified, 0 console errors), and the Pages workflow are all done. Still open: a real `portrait.jpg`, replacing `is-soon` placeholder social links (YouTube/LinkedIn/Instagram/X) with real ones, exporting `og.svg` to a 1200×630 PNG, filling the Daricheh translations and Shiraz House archive with real freely-shareable pieces, and Mo's final content approval before the one-time publish.

## 🔴 Architect / Deepest
**Key decisions (from the decision log):**
- **Plain HTML/CSS/vanilla JS, no build step (2026-06-05).** Why: deploy straight to GitHub Pages with zero install/maintenance overhead. Rejected: a framework + bundler (React/Vite). Trade-off: everything lives in a few large hand-edited files (`index.html`, `style.css`, `main.js`, `i18n.js`) — simple to host, but no component reuse and the files are big.
- **Rebuild as a multi-hyphenate personal-brand site (v2) (2026-06-05).** Why: "one mind, many lives" — reflect the full range of work, not a single niche. Rejected: keep the single-focus v1.
- **Add FA/EN/DE + full art-life identity; keep the public tone humane/universal (2026-06-06).** Why: Mo wants a clean multilingual presence across his many lives. The operating rule is **under-claim**: any line that can't be backed by an independent source is removed until sources exist.

**Gotchas:**
- Auto-sync once pushed content live *before* review, which is exactly why unverified claims were stripped — the operating rule here is "under-claim until facts arrive."
- The i18n engine is reload-based and does per-character splitting for Persian, so any new copy must be added as a `data-i18n` key in all three languages or it shows as an untranslated string. Cache-busting `?v=` query params on `style.css`/`i18n.js` are bumped manually on each change.
- Two directories are gitignored and must never be published: `_private/` and `content/` (both hold private working notes and draft content).

**Open questions:** the real portrait and verified social links; whether to rename the repo to `USERNAME.github.io` for a clean root URL (no `/Personal-Portfolio/` subpath); and Mo's confirmation of facts/press links before the final publish.

## ❓ Likely questions + answers
*(anticipating what a reviewer, recruiter, or colleague would actually ask)*
- **Q:** Is the site live? **A:** It is deployed to GitHub Pages (`https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`) and verified rendering in all three languages, but it is being held as "publish-ready pending Mo's content approvals + a one-time publish" — final social links, portrait, and fact-checking come first.
- **Q:** What stack is it? **A:** Plain HTML + CSS + vanilla JavaScript, no build step, no framework. The only external dependencies are Google Fonts and the Lenis smooth-scroll CDN, both optional.
- **Q:** How does the trilingual switching work? **A:** A custom engine in `js/i18n.js` swaps every `data-i18n`-keyed string between EN/FA/DE on a reload-based switch, flips layout to RTL for Persian, and uses Vazirmatn for Persian type. Parity is verified — 0 untranslated keys across the three languages.
- **Q:** Why no React/Vite? **A:** Deliberate. A zero-build static site hosts free on GitHub Pages with no install or maintenance overhead. The cost is large hand-edited files and no component reuse.
- **Q:** Is anything private leaking onto a public site? **A:** No, by design. Private employment, clients, finances, health, and personal documents are excluded; thesis results are kept high-level (pre-defense). The `_private/` and `content/` folders are gitignored and never published.
- **Q:** How are biographical claims handled? **A:** Under-claim by default: anything that can't be backed by an independent source is left off the public page until sources exist. Documented facts (e.g. the state-gazette CEO record, dated press items) are stated; everything else is framed as Mo's own account or removed.
- **Q:** Is the CellSight demo wired in? **A:** Not yet. The demo (synthetic data) is bundled at `projects/cellsight/` but is not yet linked into the Work section — that's an open Phase-4 item.
- **Q:** Are there tests? **A:** No automated tests. Verification has been manual/preview-based (render check, i18n key resolution, console-error check, RTL check) per the project's SWOT.

## 🔧 How to run / where things live
- **Run locally:** open `index.html` in a browser — that's the whole thing. Optionally serve via any static server (e.g. `python -m http.server`, then `http://localhost:8000`) or VS Code Live Server.
- **Edit content:** all copy is in `index.html`; design in `css/style.css`; behavior in `js/main.js`; translations in `js/i18n.js` (add new strings as `data-i18n` keys in EN/FA/DE).
- **Deploy:** push to `main` → GitHub Actions (`.github/workflows/`) auto-redeploys to GitHub Pages; `.nojekyll` serves folders as-is. Live URL: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`.
- **Never publish:** `_private/` and `content/` (gitignored).
- **Project record:** `.mc/project.json` (source of truth) and `PROJECT.md` (human companion); the remaining Mo-only publish steps are tracked in a private checklist.
- **Dependencies / keys:** no secrets or env keys in this repo. External: Google Fonts + Lenis CDN (both optional).

## 📅 Changelog
- 2026-07-03 — Public-repo professional pass: internal working notes moved out of the public repo, docs made public-safe, FA/DE Shiraz Art House copy aligned with the sourced English framing.
- 2026-06-30 — Created this explainer from the real repo (README, PROJECT.md, `.mc/project.json`, git log, file structure). Reflects current state: trilingual site deployed to GitHub Pages but held pending Mo's content approvals; open items = real portrait, real social links, og PNG, Daricheh/archive fill, and final publish.
