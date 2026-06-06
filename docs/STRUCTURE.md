# Site structure

A dependency-free, single-page site that deploys straight to GitHub Pages (no build step).

## Layout

```
massjedi-website/
├─ index.html        # the entire single-page site
├─ css/              # styles
├─ js/               # interactions / motion
├─ assets/           # images, icons, OG image
│  └─ img/
│     ├─ art/        # drop-in folder (self-documenting README.txt)
│     └─ cats/       # drop-in folder (self-documenting README.txt)
├─ projects/         # standalone project sub-pages (e.g. CellSight)
├─ .nojekyll         # tells GitHub Pages to serve files as-is
└─ .github/          # Pages deploy workflow
```

## Deploy
Pushing to `main` publishes via GitHub Pages. There is no compile/bundle step — what's in the repo is
what ships. Keep `.nojekyll` in place so Pages doesn't run Jekyll over the assets.

## Local preview
```bash
python -m http.server 8080   # then open http://localhost:8080
```

## Design principles
- **No build step, no framework lock-in** — plain HTML/CSS/JS.
- **Dark, cinematic, motion-rich** aesthetic.
- **Mobile-first**: verify both desktop and narrow widths.
