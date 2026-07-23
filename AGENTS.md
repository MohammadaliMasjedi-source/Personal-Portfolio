# AGENTS.md — Personal-Portfolio

Read this first if you are an AI coding agent (Claude Code, OpenAI Codex, or any other) or a
human landing on this repo. (Fleet-internal note: the cross-repo protocol docs live in the
Pantheon repo — not visible from this repo, and not needed to work here.)

**External contributors (cloud Codex / ChatGPT / GitHub-only humans): your ONLY task source is
`TASKS.md`.** Claim a task by opening a draft PR titled `T-PP-xx: <title>`; one task per PR;
never push to `main` (every push to `main` auto-deploys the LIVE public site); never self-merge
— the owner merges personally.

## What this project is
Mo's personal brand site — a dark, cinematic, motion-rich single-page site in three languages
(EN/FA/DE), zero build step, deployed live to GitHub Pages:
https://mohammadalimasjedi-source.github.io/Personal-Portfolio/

## Classification
**PUBLIC — open license, real external human contributors welcome via normal PR (still subject to
the AI-verification rule in ROUTING-POLICY.md Iron Rule 1).** `.mc/project.json` has
`"private": false` and `LICENSE` is MIT. Built to be public-safe by design: it deliberately
excludes private employment/client, finance, health, and personal-document content, and thesis
results stay high-level pre-defense (see README.md "Privacy note").

## Where the real state lives
1. `TASKS.md` — the task backlog for anyone GitHub-only (the `.mc/` folder is deliberately NOT
   on GitHub in this repo — it's the owner's local project-state; never look for it here).
2. `handbook/04-MAINTENANCE-GUIDE.md` — the full step-by-step editing protocol; read this before
   touching `index.html`, `css/style.css`, or `js/i18n.js`.
3. `README.md` — structure, how to run locally, how to deploy.

## Definition of Done
- [ ] Every new/changed visible string gets a `data-i18n` key in `index.html` **and** its Persian +
  German translation added to `js/i18n.js` — no English-only text ships.
- [ ] After editing `css/style.css` or any `js/*.js`, bump its `?v=N` cache-buster in `index.html`.
- [ ] Manual smoke check: serve locally (`python -m http.server 8000`) and confirm in-browser —
  language switch cycles EN/FA/DE, Persian flips to RTL with no mixed-language line, no console
  errors.
- [ ] Nothing violates the public-safe rule: no private employment/client detail, no finance/health
  content, no unverified biographical claim (the "under-claim rule" — see `.mc/project.json`
  decisions).
- [ ] No secrets committed; long-form drafts / unconfirmed source notes stay in the private,
  gitignored folder, never in tracked files.
- [ ] Real commit message; `git pull --rebase --autostash` before push; no `--no-verify`; no
  force-push to `main`. Pushing to `main` auto-deploys via GitHub Actions — treat every push as
  a live-site change (externals never push `main` at all — PR only).

## If blocked
Say so in your PR description (or update your task's card in `TASKS.md` inside the same PR)
instead of guessing — especially anything that would add an unverified biographical claim or a
real, uncleared image to the public site.
