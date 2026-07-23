# AGENTS.md — Personal-Portfolio

Read this first if you are an AI coding agent (Claude Code, OpenAI Codex, or any other) or a
human landing on this repo. Fleet-wide protocol + classification rules:
`Pantheon/docs/AGENTS-FLEET-PROTOCOL.md`, `Pantheon/docs/ROUTING-POLICY.md`.

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
1. `.mc/project.json` — canon: phase (currently p5), priority, `nextAction`.
2. `.mc/INBOX.md` — task queue; an unchecked item is an order for this session.
3. `handbook/04-MAINTENANCE-GUIDE.md` — the full step-by-step editing protocol; read this before
   touching `index.html`, `css/style.css`, or `js/i18n.js`.
4. `README.md` — structure, how to run locally, how to deploy.

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
- [ ] `.mc/project.json`'s `nextAction` updated; tick the `.mc/INBOX.md` item; real commit message;
  `git pull --rebase --autostash` before push; no `--no-verify`; no force-push to `main`. Pushing
  to `main` auto-deploys via GitHub Actions — treat every push as a live-site change.

## If blocked
Leave a note under `## Blocked` in `.mc/INBOX.md` instead of guessing — especially anything that
would add an unverified biographical claim or a real, uncleared image to the public site.
