# 05 · History & Decisions (ADR-style)

> Source of truth for decisions = the `decisions` array in [`.mc/project.json`](../.mc/project.json)
> and the Decisions table in [`PROJECT.md`](../PROJECT.md). This file mirrors them in ADR form
> and adds the milestone timeline. When they disagree, `project.json` wins.

---

## Milestone timeline (from git log + project record)
| Date | What shipped |
|------|--------------|
| 2026-06-05 | v2 rebuild as a multi-hyphenate personal-brand site; plain HTML/CSS/JS, no build step; scaffold + core sections + design system + interactions. |
| 2026-06-06 | FA/EN/DE i18n engine + full art-life identity (Shiraz Art House, Cinema, Music, Collaborators, Press, Values); unverified/religious claims removed. |
| 2026-06 | Cinematic hero + interactive worlds; 8 real stage photos + lightbox; follow-the-journey / YouTube subscribe CTA + count-up stats; deactivated empty art gallery, promoted Research; Jupiter memorial ("in loving memory 2026"). |
| 2026-06 | Multi-lens polish pass (a11y, perf, mobile, interaction). |
| 2026-06-27 | GitHub Pages verified LIVE (HTTP 200). |
| 2026-06-30 | Standard project files (README/LICENSE/PROJECT/docs/CITATION/CONTRIBUTING) for internal health; registered dashboard in `project.json`; full FA/DE parity for Athlete/Manager/Poet/Personal + Engineer header; Daricheh (داریچه) translations stub; Shiraz House Archive coming-soon section (`#arthive`, 14 `arc.*` keys); LAUNCH-CHECKLIST; `learning/PROJECT-EXPLAINED.md`. |

## Current status
Deployed and rendering in EN/FA/DE, held **publish-ready pending Mo's content approvals + a one-time publish**. Current phase in `project.json` = **p5** (Trilingual + public-figure identity).

---

## ADR-1 · Plain HTML/CSS/vanilla JS, no build step
- **Date:** 2026-06-05
- **Decision:** Build the site as static files with no Node/bundler/framework.
- **Why:** Deploy straight to GitHub Pages with zero install/maintenance overhead.
- **Rejected:** Framework + bundler (React/Vite).
- **Trade-off:** Everything lives in a few large hand-edited files; no component reuse.

## ADR-2 · Rebuild as a multi-hyphenate personal-brand site (v2)
- **Date:** 2026-06-05
- **Decision:** Replace the single-focus v1 with a "one mind, many lives" site spanning research, music, film, management, culture.
- **Why:** Reflect the full range of Mo's work, not a single niche.
- **Rejected:** Keep the single-focus v1 site.

## ADR-3 · Add FA/EN/DE + full art-life identity; humane/universal tone; under-claim
- **Date:** 2026-06-06
- **Decision:** Add a trilingual engine and the art-life sections; keep the public tone humane/universal; remove unverified claims until sources exist; pursue Wikipedia only via Articles-for-Creation once independent sources exist.
- **Why:** Mo wants a clean multilingual presence across his many lives. A self-written Wikipedia page gets deleted; an unverified award claim on a live public page could harm him — under-claiming is safer.
- **Rejected:** A second separate website; a self-written Wikipedia page now; full open political voice on the public site; asserting the Kiarostami award without confirmation.
- **Note:** Auto-sync pushed content live *before* review, which is why unverified claims (and religious framing — Mo is an [personal-belief-statement-removed]) were stripped. Operating rule: **"under-claim until facts arrive."**

---

## Open decisions / questions
- Whether to rename the repo to `USERNAME.github.io` for a clean root URL (no `/Personal-Portfolio/` subpath).
- Final confirmation of facts + press/interview source links before publish (`_private/FILL-ME-facts.md`).
- Real portrait, real social links, and whether/when to wire the CellSight demo into the page.
