# Mo · MassJedi — Personal Website

> Teaching machines to see a battery's future — from its very first cycles.

The personal site & portfolio of **Mohammadali (Mo) Masjedi** — AI/ML researcher,
battery-intelligence builder, lifelong learner. A dark, cinematic, motion-rich
single-page site with **no build step** — it deploys straight to GitHub Pages.

**Live:** https://mohammadalimasjedi-source.github.io/Personal-Portfolio/

---

## ✨ What's inside

- **Cinematic dark theme** with a live, interactive **energy-field canvas**, film grain & glow.
- **Custom cursor** (with contextual labels) + **magnetic** buttons and links.
- **Smooth scrolling** (Lenis) with a graceful fallback to native scroll.
- **Scroll-reveal** animations, **split-text** headlines, animated **count-up** stats.
- **Preloader** with a live counter, full-screen **mobile menu**, scroll progress bar.
- Sections: Hero · About/Journey · Research · Work · Toolkit · **Channels** · Now & Interests · Notes · Contact.
- **Fully responsive** and respects `prefers-reduced-motion` (accessibility-friendly).
- **Zero dependencies to install** — just static files. One optional CDN script (Lenis).

## 🧱 Tech

Plain **HTML + CSS + vanilla JavaScript**. No Node, no bundler, no framework.
Fonts via Google Fonts; smooth scroll via the Lenis CDN (optional — the site works without it).

## 📁 Structure

```
massjedi-website/
├── index.html              ← all content & sections (edit your copy here)
├── css/style.css           ← the full design system
├── js/main.js              ← all interactions / animations
├── assets/img/
│   ├── portrait.jpg         ← (add this) your photo — shows automatically if present
│   └── og.svg               ← social-share card
├── projects/cellsight/      ← the bundled CellSight live demo (synthetic data)
├── .github/workflows/       ← optional GitHub Pages auto-deploy
├── .nojekyll                ← serve folders as-is on Pages
└── README.md
```

## ▶️ Run it locally

Just open `index.html` in your browser. That's it.

*(Optional, for a local server with no Python either — use any static server, or VS Code "Live Server". With Python: `python -m http.server` then visit `http://localhost:8000`.)*

## 🚀 Deploy to GitHub Pages

**Option A — GitHub Actions (recommended, already set up):**
1. Push this repo to GitHub (see commands at the bottom).
2. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` redeploys automatically. Your URL appears in the Actions run.

**Option B — Deploy from a branch:**
1. Push to GitHub.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.

> Tip: rename the repo to `USERNAME.github.io` to serve it at `https://USERNAME.github.io/` (no subpath).

---

## ✍️ Make it yours — quick checklist

Everything below is plain text in `index.html`. Search for the placeholder and replace it.

- [ ] **Your photo** → drop a file at `assets/img/portrait.jpg`. It appears automatically;
      until then a stylish "Mo" monogram is shown.
- [x] **Your email** → pre-set to `mohammadalimasjedi@gmail.com` (Contact section + Email channel).
      Search that string to change or obfuscate it if you'd rather reduce spam.
- [ ] **Your channels** → find the `class="channel is-soon"` items in the **Channels** section.
      Remove `is-soon` and set the real `href`. The same goes for `is-soon` links in Contact/Work.
      Pre-filled (please verify they're yours): GitHub, Hugging Face, Kaggle → `@mmasjedi`.
      Add when ready: **YouTube, LinkedIn, Instagram, X**.
- [ ] **Social card** → after deploying, set `og:url` to your live URL in `<head>`.
      Optionally export `assets/img/og.svg` to a `1200×630` PNG and point the `og:image` tags at it
      (some platforms don't render SVG previews).
- [ ] **Copy** → tweak any text in About, Research, Now, Notes to your taste.

## 🔒 Privacy note

This site was built to be **public-safe** on purpose. It intentionally **excludes** anything
related to private employment/clients, finances, health, and personal documents. Thesis results
are kept high-level (pre-defense). Only your own public-facing work is featured.

## 📜 License

MIT © 2026 Mohammadali Masjedi. Built with intent — dark cinematic edition.
