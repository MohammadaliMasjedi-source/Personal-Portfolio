# 03 · Naming & Standards

> See also [`CONTRIBUTING.md`](../CONTRIBUTING.md) and [`docs/STRUCTURE.md`](../docs/STRUCTURE.md).

---

## L1 · ELI5
There is a place for everything: words in one file, look in another, movement in another, pictures in a folder. Keep them where they belong.

## L2 · ELI15
The repo is organized by *job*, not by feature. All the content is in one HTML file; all the style is in one CSS file; behaviour is split into a few small JS files. Images live under `assets/img/` in named folders.

## L3 · Practitioner — folder & file layout

```
Personal-Portfolio/
├─ index.html              # the ENTIRE page + all content (edit copy here)
├─ css/
│  └─ style.css            # the whole design system
├─ js/
│  ├─ i18n.js              # FA + DE translations (loads FIRST)
│  ├─ main.js              # all interactions / animations
│  └─ polish.js            # in-view nav highlight (tiny, separate)
├─ assets/
│  └─ img/
│     ├─ portrait.jpg      # Mo's photo (monogram fallback if absent)
│     ├─ og.svg / og.png   # social-share card
│     ├─ _make_og.py       # helper to render the OG PNG
│     ├─ gallery/          # 8 real stage-performance photos
│     ├─ worlds/           # music-world thumbnails
│     ├─ art/  README.txt  # drop-in folder (self-documenting)
│     └─ cats/ README.txt  # drop-in folder (self-documenting)
├─ projects/
│  └─ cellsight/index.html # bundled live demo (synthetic data)
├─ docs/STRUCTURE.md       # short layout note
├─ learning/PROJECT-EXPLAINED.md  # 4-layer plain explainer (standard file)
├─ handbook/               # THIS folder — maintenance manual
├─ .github/workflows/static.yml   # Pages deploy
├─ .nojekyll               # serve folders as-is on Pages
├─ .mc/project.json        # machine-readable project record (source of truth)
├─ PROJECT.md              # human companion to project.json
├─ README.md · tooling · LICENSE · CITATION.cff · CONTRIBUTING.md · PUBLISH.md
└─ _private/ · content/    # GITIGNORED — never ship
```

### Naming conventions (observed in the real code)
- **CSS classes:** BEM-ish. Block `.nav`, element `.nav__logo`, modifier/state `.is-open`, `.is-scrolled`, `.is-soon`, `.is-in`, `.is-active`. Data hooks: `data-magnetic`, `data-cursor`, `data-split`, `data-reveal`, `data-count`, `data-to`, `data-yt`.
- **Section ids:** short, lowercase, one word — `#hero`, `#worlds`, `#about`, `#engineer`, `#research`, `#artist`, `#arthouse`, `#arthive`, `#cinema`, `#music`, `#collaborators`, `#press`, `#values`, `#athlete`, `#leader`, `#poet`, `#personal`, `#daricheh`, `#channels`, `#contact`.
- **i18n keys:** `area.key`, e.g. `hero.title`, `worlds.engineer.h`, `ah.p1`, `arc.*`, `menu.arthive`, `cats.jupi.mem`. Group prefixes: `nav.` `menu.` `hero.` `worlds.` `about.` `ah.` (art house) `cin.` (cinema) `mus.` (music) `arc.` (archive) `cats.` `follow.` `stat.`.
- **Image files:** descriptive, hyphenated — `perform-milonga-guitar-01.jpg`, `music-hall.jpg`.
- **Asset versioning:** manual `?v=N` query string on `style.css` / `i18n.js` / `main.js` / `polish.js` in `index.html`.
- **Placeholder links:** class `is-soon` marks a not-yet-real link; `main.js` prevents dead navigation on `a[href="#"]`.

### Commit convention (from the real git log)
Conventional-commit-ish prefixes: `docs:`, `chore:`, `i18n:`, `polish:`, `feat`-style descriptions ("cinematic hero + interactive worlds"). Short, present-tense subject. Examples in `git log --oneline`.

## L4 · Architect — the honesty & safety bar
- **Truth only.** No invented facts, awards, or claims on a public page. Under-claim until independent sources exist (an unverified award line was removed for exactly this reason).
- **Public-safe boundary.** Nothing about private employment, clients, finances, health, or documents. Thesis stays high-level. `_private/` and `content/` are gitignored and must never be committed/published.
- **Trilingual parity is the quality gate.** A change isn't "done" until every new `data-i18n` key resolves in EN + FA + DE (0 untranslated), RTL still flips in FA, and the console shows 0 errors.
- **No automated tests.** Verification is manual/preview-based (render check, i18n key resolution, console-error check, RTL check) — state this honestly; don't imply CI coverage that doesn't exist.
