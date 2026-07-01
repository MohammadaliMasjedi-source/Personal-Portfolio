# 01 · Architecture — approach + WHY

> Repo has no separate `ARCHITECTURE.md`; this file is the architecture reference.
> See also [`docs/STRUCTURE.md`](../docs/STRUCTURE.md) (short layout note).

---

## L1 · ELI5
The website is like a **poster**, not a machine. The poster is one big picture (`index.html`). One file says how it looks (`style.css`). A few files make it move (`main.js`, `i18n.js`, `polish.js`). No engine to start — you just open the poster.

## L2 · ELI15
Three kinds of file do three jobs:
- **HTML** = the *words and boxes* (what's on the page).
- **CSS** = the *look* (colors, fonts, spacing, the dark cinematic style).
- **JavaScript** = the *movement* (animations, the language switch, the menu).

There is **no build step**: the files you see in the repo are exactly the files that go live. The browser reads them directly.

## L3 · Practitioner — which language for which part, and WHY

| Part | Tech | Why this choice |
|------|------|-----------------|
| Content + structure | **HTML** (`index.html`, one file) | Static content, deploys as-is to Pages. One file = simplest possible hosting. English text here IS the i18n source. |
| Design / look | **CSS** (`css/style.css`) | A hand-authored design system (CSS custom properties for the palette, RTL rules, cursor, grain, gallery). No preprocessor — keeps the zero-build promise. |
| Interactions | **Vanilla JS** (`js/main.js`) | Canvas field, cursor, reveal, counters, preloader, lightbox, tilt. No framework so there's nothing to install or bundle. Wrapped in IIFEs, `"use strict"`. |
| Translations | **Vanilla JS** (`js/i18n.js`) | Custom `data-i18n` dictionary for FA + DE. Runs **before** `main.js` so the split-text/reveal animations apply to already-translated text. |
| Nav highlight | **Vanilla JS** (`js/polish.js`) | Tiny separate file for one late-stage concern (in-view nav link), kept out of `main.js`. |
| Deploy | **GitHub Actions** (`.github/workflows/static.yml`) + `.nojekyll` | Upload-pages-artifact of the whole repo root; no compile. `.nojekyll` stops Pages running Jekyll over the assets. |

**Why no React/Vite (rejected 2026-06-05):** a zero-build static site hosts free on Pages with no install/maintenance overhead. Cost accepted: big hand-edited files, no component reuse.

### How the pieces connect (load + run order)
1. Browser loads `index.html`.
2. `<head>` pulls **Google Fonts** (Space Grotesk, Inter, Instrument Serif, Vazirmatn) and `css/style.css?v=N`.
3. Before `</body>`: scripts load in order — **`i18n.js` → `main.js` → `polish.js`** (each with a `?v=N` cache-buster).
4. `i18n.js` reads the stored language (`localStorage["mam-lang"]`), and if not English, swaps every `data-i18n` element's text and flips `dir="rtl"` for Persian.
5. `main.js` runs the preloader, then `boot()` wires up all interactions on the (now translated) DOM.
6. `polish.js` tracks scroll to mark the current nav link.

### Data flow — there is (almost) none
This is a **read-only presentation site**. No backend, no database, no API, no user accounts, no forms that submit anywhere. The only "state" is:
- **Chosen language** → `localStorage["mam-lang"]` → page reload re-applies it.
- **Runtime UI state** (menu open, cursor position, scroll progress) → lives in memory only.
- **External fetches** at runtime: Google Fonts CSS, the optional Lenis CDN script, and — only after a click — a `youtube-nocookie.com` iframe for recital videos.

## L4 · Architect — the important seams
- **i18n must run first.** `i18n.js` swaps text *before* `main.js` splits it into `.word` spans; reversing the order would animate the English then flip to Persian mid-reveal. This ordering is the single most fragile contract in the codebase.
- **Persian is a first-class RTL citizen.** `RTL = { fa: true }` in `i18n.js`; CSS has dedicated RTL rules and Vazirmatn type. Any new copy that isn't given a `data-i18n` key in **all three** languages will show untranslated in FA/DE.
- **Cache-busting is manual.** Every edit to `style.css` / `i18n.js` / `main.js` bumps the `?v=N` query string in `index.html`. Miss it and returning visitors see stale assets.
- **Graceful degradation is a feature, not a bug.** Lenis absent → native smooth scroll. `prefers-reduced-motion` → canvas draws one static frame, counters snap to final, role-cycler stays static, preloader jumps to 100%. Coarse pointer (touch) → no custom cursor / magnetic / tilt.
- **Privacy boundary is structural.** `_private/` and `content/` are gitignored (see [`.gitignore`](../.gitignore)); the deploy uploads the repo root, so anything committed ships. The safety rule lives in git, not in code.

See the visual map in [`diagrams/architecture.md`](./diagrams/architecture.md).
