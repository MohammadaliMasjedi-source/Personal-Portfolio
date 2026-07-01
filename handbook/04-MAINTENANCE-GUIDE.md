# 04 · Maintenance Guide — step-by-step protocols

> Deterministic steps a person (or the local AI) can follow. Everything happens in
> `index.html`, `css/style.css`, and `js/*.js`. There is no build — save, reload, done.

---

## L1 · ELI5
To change the site: find the sentence in `index.html` and change it. To change a color: change it in `style.css`. Save. Reload the browser. To make it live: `git push`.

## L2 · ELI15
Edit the plain files, preview locally with Live Server, then commit and push. Pushing to `main` auto-deploys. The one thing to always remember: **new text needs a translation in all three languages**, and **bump the `?v=` number** so people see your change.

---

## L3 · Protocols

### A · Add / edit a section or copy (text)
1. Open `index.html`. Find the section by its `id` (e.g. `<section ... id="music">`).
2. Edit the English text directly (English is the i18n source).
3. If the text has (or needs) a `data-i18n="area.key"` attribute, note the key.
4. Open `js/i18n.js` and add/update that key under **both** `fa` and `de` dictionaries.
5. Bump `i18n.js?v=N` in `index.html` if you changed `i18n.js`.
6. Test: see "How to test" below in all three languages.

### B · Add a brand-new section
1. Copy the markup of an existing `<section class="section facet-sec …" id="…">` block in `index.html` as a template.
2. Give it a new unique `id`; add `data-reveal` / `data-split` hooks as the others use.
3. Add a nav + mobile-menu link pointing to `#newid` (both `.nav__links` and the `#menu` list) with a `data-i18n="nav.newid"` / `menu.newid` key.
4. Add all its `data-i18n` keys to `fa` + `de` in `js/i18n.js`.
5. Add any needed CSS to `css/style.css`; bump `style.css?v=N`.
6. Test in EN/FA/DE.

### C · Change a color / spacing / style
1. Open `css/style.css`. The palette is defined as CSS custom properties near the top (`:root`). Prefer editing a variable over a hard-coded value.
2. Save; bump `style.css?v=N` in `index.html`.
3. Reload and check desktop + a narrow (mobile) width.

### D · Change / add an interaction (JS)
1. Behaviour lives in `js/main.js` inside named `initX()` functions, all called from `boot()`. Find the relevant one (e.g. `initField`, `initLightbox`, `initRoleCycle`).
2. Edit; keep the `prefersReduced` / `finePointer` guards so reduced-motion + touch still degrade gracefully.
3. Bump `main.js?v=N`.
4. Test with dev-tools console open (0 errors) and with reduced-motion emulated.

### E · Add a real social link (replace a placeholder)
1. In `index.html` find the item with class `is-soon` (Channels / Contact / Work).
2. Remove `is-soon` and set the real `href`.
3. Test the link opens; re-check console.
(Tracked in `LAUNCH-CHECKLIST.md` / `.mc/project.json` p2.)

### F · Add the real portrait
1. Save the photo as `assets/img/portrait.jpg`.
2. It appears automatically; the "Mo" monogram fallback disappears. No code change needed.

### G · Update the social-share (OG) card
1. Edit `assets/img/og.svg`, then regenerate the PNG (helper: `assets/img/_make_og.py`).
2. Confirm `og:image` / `twitter:image` in `index.html <head>` point at `assets/img/og.png`.

### H · Cut a "release" (publish)
1. Run through `LAUNCH-CHECKLIST.md` (Mo-only content approvals).
2. `git add -A && git commit -m "…" && git push`.
3. Watch the repo **Actions** tab; when green, verify the live URL in EN/FA/DE on desktop + mobile.

---

## How to test a change
- Serve locally (Live Server or `python -m http.server`), open the page.
- Click **EN → فا → DE**; each reloads. Confirm: text translates, **FA flips to RTL**, no English leaks in FA/DE.
- Open dev-tools **Console → 0 errors**.
- Toggle reduced-motion (dev-tools → Rendering → "Emulate prefers-reduced-motion") and confirm the site still works (static field, snapped counters).
- Check a narrow width (responsive mode).

## How to roll back
- It's git. `git log --oneline` to find the last good commit, then `git revert <sha>` (safe) and push. Avoid `reset --hard` on shared history.

## L4 · Where the risky parts are (touch with care)
- **Script order in `index.html`** (`i18n.js` → `main.js` → `polish.js`). Never reorder — i18n must swap text before main.js splits it.
- **`data-i18n` coverage.** Any new visible copy without keys in all three languages breaks trilingual parity.
- **`?v=` cache-busters.** Forgetting to bump them ships invisible-to-users changes.
- **`_private/` and `content/`.** Never `git add` them; the deploy uploads the whole repo root.
- **Unverified claims.** Do not add awards/facts to the public page without a source (under-claim rule).
