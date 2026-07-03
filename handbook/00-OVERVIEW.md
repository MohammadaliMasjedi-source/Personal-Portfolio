# 00 · Overview — Mo · MassJedi Portfolio

> This handbook is the local maintenance manual for **one repo**: `Personal-Portfolio`
> (local name; GitHub repo also called `Personal-Portfolio`). It points at the real files —
> it does not duplicate them. For a plain-language explainer see
> [`learning/PROJECT-EXPLAINED.md`](../learning/PROJECT-EXPLAINED.md).
> Machine-readable truth = [`.mc/project.json`](../.mc/project.json). Human companion = [`PROJECT.md`](../PROJECT.md).

---

## L1 · ELI5 (a child)
This is Mo's own website — one page that tells the world who he is: his science, his music, his films, his cats. You can read it in **English, Persian, or German**.

## L2 · ELI15 (a smart teenager)
A personal homepage for **Mohammadali "Mo" Masjedi**. The idea is **"one mind, many lives"**: instead of pretending he is only one thing, the site shows all his sides — AI/ML researcher & battery-intelligence builder, classical guitarist/teacher, project manager, cultural activist, cat person. It is **one web page** with smooth animations and a dark "cinematic" look, and you can flip the whole thing between three languages. Everything is just plain files (no app to install), so it hosts for free on GitHub Pages. It is deliberately **public-safe**: anything private (job, clients, money, health) is kept out on purpose.

## L3 · Practitioner (technical)
A **static, zero-build single-page site**. No Node, no bundler, no framework, no server.

- **One page:** [`index.html`](../index.html) (~65 KB) holds *all* content and ~20 sections (Hero, Worlds, About, Engineer, Research, Artist, Shiraz Art House + Archive, Cinema, Music, Collaborators, Press, Values, Athlete, Leader, Poet, Personal, Daricheh translations, Channels, Contact).
- **Design system:** [`css/style.css`](../css/style.css) (~58 KB) — dark cinematic theme, warm espresso/cream/saffron palette, RTL styles, custom cursor, striped placeholder gallery.
- **Behaviour:** [`js/main.js`](../js/main.js) (~560 lines) — energy-field canvas, custom cursor, magnetic buttons, scroll-reveal, split-text, count-up stats, preloader, mobile menu, scroll progress, lightbox, YouTube-nocookie video, hero parallax, 3D tilt cards.
- **Trilingual engine:** [`js/i18n.js`](../js/i18n.js) (~46 KB) — EN is the source in the HTML; FA + DE live here keyed by `data-i18n`. Reload-based switch, RTL-safe.
- **Polish:** [`js/polish.js`](../js/polish.js) (~36 lines) — highlights the in-view nav link.
- **Bundled demo:** [`projects/cellsight/index.html`](../projects/cellsight/index.html) — a CellSight live demo (synthetic data), not yet linked into the Work/Engineer section.
- **Deploy:** [`.github/workflows/static.yml`](../.github/workflows/static.yml) + `.nojekyll` → GitHub Pages on every push to `main`.

**Dependencies:** Google Fonts (incl. Vazirmatn for Persian) + the Lenis smooth-scroll CDN — **both optional**; the site degrades gracefully and respects `prefers-reduced-motion`.

**Live:** https://mohammadalimasjedi-source.github.io/Personal-Portfolio/

## L4 · Architect (deepest)
The whole design is a bet on **simplicity over machinery**. A framework (React/Vite) was rejected on 2026-06-05 so the site could deploy straight to GitHub Pages with **zero install/maintenance overhead**. The trade-off is real: content, design, and behaviour each live in one big hand-edited file, so there is no component reuse and edits happen in large files. For a rarely-changing personal site, that trade is worth it.

The second load-bearing decision is **public-safe by design**. Private employment, clients, finances, health, and personal documents are excluded on purpose; thesis results stay high-level (pre-defense). Two folders — `_private/` and `content/` (private working notes and draft content) — are **gitignored and must never ship**. Because auto-sync once pushed content live *before* review, the operating rule is **"under-claim until facts arrive"**: any line that can't be backed by an independent source is removed until sources exist.

### History timeline
| Date | Milestone |
|------|-----------|
| 2026-06-05 | Rebuilt as multi-hyphenate personal-brand site (**v2**); chose plain HTML/CSS/JS, no build step. |
| 2026-06-06 | Added FA/EN/DE i18n + full art-life identity; stripped unverified/religious claims (under-claim rule). |
| 2026-06 | Cinematic hero, interactive worlds, stage gallery (8 real photos + lightbox), follow-the-journey / YouTube CTA, Jupiter memorial. |
| 2026-06-27 | GitHub Pages verified LIVE (HTTP 200) at the URL above (old "deploy fails" note was stale). |
| 2026-06-30 | Standard project files (README/LICENSE/PROJECT/docs/CITATION/CONTRIBUTING) + `learning/PROJECT-EXPLAINED.md`; Shiraz House Archive coming-soon section. |
| 2026-07-03 | Public-repo professional pass: docs made public-safe; FA/DE Shiraz Art House copy aligned with the sourced English framing. |

## Where it is now
Deployed and rendering in all three languages, but **held as "publish-ready pending Mo's content approvals + a one-time publish."** Open items: real social links (YouTube/LinkedIn/Instagram/X replacing `is-soon`), fill Daricheh + Shiraz Archive with cleared pieces, final fact-check. The remaining Mo-only steps live in a private checklist (gitignored).
