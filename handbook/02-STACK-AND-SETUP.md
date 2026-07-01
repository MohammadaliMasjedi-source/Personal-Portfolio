# 02 · Stack & Setup — from zero, noobie-level

> Good news: there is **nothing to build and almost nothing to install**. This is the
> simplest project in Mo's world to run.

---

## L1 · ELI5
Double-click `index.html`. The website opens in your browser. Done.

## L2 · ELI15
To just *look* at it: open `index.html` in any browser.
To *edit* it safely: use a code editor (VS Code) and a tiny local web server, so links and the language switch behave exactly like they do live.

## L3 · Practitioner — what to install + how to run

### Install list (all optional except a browser)
| Tool | Why | Link |
|------|-----|------|
| A web browser | To view the site | already installed |
| **VS Code** | To edit HTML/CSS/JS | https://code.visualstudio.com/ |
| VS Code **Live Server** extension | One-click local server with auto-reload | Extensions panel → search "Live Server" (Ritwick Dey) |
| **Python 3** (optional) | Alternative local server, no extension needed | https://www.python.org/downloads/ |
| **Git** | Commit + push (triggers deploy) | https://git-scm.com/ |

No Node, no npm, no bundler, no SDK. There are **no secrets or environment variables** in this repo.

### Run it locally — three ways
**A. Simplest (view only):**
```
open index.html   # or just double-click it in the file explorer
```

**B. VS Code Live Server (recommended for editing):**
1. Open the folder `Personal-Portfolio` in VS Code.
2. Right-click `index.html` → **"Open with Live Server"**.
3. Browser opens at `http://127.0.0.1:5500/` and auto-reloads on save.

**C. Python static server (no extension):**
```bash
cd "internal-path Mo/Personal-Portfolio"
python -m http.server 8080
# then open http://localhost:8080
```

### What success looks like
- A **preloader** counts 0 → 100%, then the dark hero fades in.
- The background shows a slow **particle/energy field**; a **custom ring cursor** follows the mouse (desktop only).
- The nav has an **EN / فا / DE** switch — clicking `فا` reloads the page in Persian, **right-to-left**, in Vazirmatn font.
- Scrolling reveals sections; stat numbers **count up**; the scroll-progress bar fills at the top.
- Browser dev-tools **Console shows 0 errors**.

### Deploy (how "live" happens)
```bash
git add -A
git commit -m "…"
git push          # push to main → GitHub Actions redeploys to Pages automatically
```
Live URL: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`.
First-time Pages setup: **Settings → Pages → Source: GitHub Actions** (already configured). See [`PUBLISH.md`](../PUBLISH.md) and [`LAUNCH-CHECKLIST.md`](../LAUNCH-CHECKLIST.md).

## L4 · Architect — common errors + fixes
| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Language switch changes text but layout doesn't flip | opened via `file://`; some behaviour differs from a server | serve via Live Server / `python -m http.server` |
| CSS or JS changes don't show up | browser cached the old `?v=N` asset | bump the `?v=` number in `index.html` (or hard-reload Ctrl+F5) |
| A new sentence shows in English while page is FA/DE | missing `data-i18n` key in `js/i18n.js` | add the key under both `fa` and `de` dicts |
| No smooth scroll / no fancy cursor | Lenis CDN blocked, or a touch device, or reduced-motion on | expected — the site degrades gracefully by design |
| Fonts look wrong offline | Google Fonts unreachable | expected offline; ships fine online |
| Pushed but site didn't update | Pages Source not set to "GitHub Actions", or the Action failed | check the repo's **Actions** tab; set Source in Settings → Pages |
