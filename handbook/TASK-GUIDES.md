# TASK-GUIDES — do each open task yourself

> One guide per real, still-open task from [`.mc/project.json`](../.mc/project.json).
> Done phases (p1, p4-demo-bundle) aren't repeated here. These bridge "LooLoo built it" →
> "Mo can do it himself." Keep in sync with `project.json` + `LAUNCH-CHECKLIST.md`.
> Setup basics live in [`02-STACK-AND-SETUP.md`](./02-STACK-AND-SETUP.md); protocols in
> [`04-MAINTENANCE-GUIDE.md`](./04-MAINTENANCE-GUIDE.md).

---

## TASK 1 · Add the real portrait  (p2)
**Goal:** replace the "Mo" monogram fallback with a real photo. Backs the Personalization phase.
**Before you start:** a photo of Mo, cropped roughly square, saved as JPG.
**Steps:**
1. Save the file as exactly `assets/img/portrait.jpg`.
2. Open the site locally (Live Server). The photo appears automatically; the monogram disappears.
3. No code change is required.
**How to test:** reload the page; the portrait shows and isn't stretched. Check a narrow width too.
**Debug top-3:** (a) still see the monogram → filename/path wrong (must be `assets/img/portrait.jpg`, lowercase). (b) blurry → export at ~800px+ on the short side. (c) wrong crop on mobile → adjust the crop in an image editor before saving (CSS crops to a square).
**Modify later:** swap the file anytime; keep the same name so no HTML edit is needed.

---

## TASK 2 · Replace `is-soon` placeholder social links  (p2)
**Goal:** turn YouTube / LinkedIn / Instagram / X placeholders into real links.
**Before you start:** the real profile URLs.
**Steps:**
1. In `index.html`, search for `is-soon` (in Channels, Contact, and Work areas).
2. For each real one: delete the `is-soon` class and set `href="https://…"`.
3. Save; reload.
**How to test:** click each link — it opens the right profile; console stays clean.
**Debug top-3:** (a) link does nothing → it still has `is-soon` or `href="#"` (main.js blocks `href="#"`). (b) opens same tab → add `target="_blank" rel="noopener"` if you want a new tab. (c) styled greyed-out → the `is-soon` class wasn't removed.
**Modify later:** to hide a channel again, re-add `is-soon` and set `href="#"`.

---

## TASK 3 · Export `og.svg` → 1200×630 PNG  (p2)
**Goal:** a raster social-share card (some platforms don't render SVG previews).
**Before you start:** `assets/img/og.svg` exists; helper `assets/img/_make_og.py`.
**Steps:**
1. Regenerate the PNG (via `assets/img/_make_og.py`, or export the SVG to a 1200×630 PNG in any editor) as `assets/img/og.png`.
2. Confirm `<meta property="og:image">` and `<meta name="twitter:image">` in `index.html` point at `assets/img/og.png` (they already do).
**How to test:** after deploy, paste the live URL into a link-preview debugger (e.g. a social platform's card validator) — the image shows.
**Debug top-3:** (a) old image cached → validators cache; re-scrape. (b) wrong size → must be 1200×630. (c) broken path → the `og:image` URL must be the absolute live URL.

---

## TASK 4 · Push to GitHub + confirm Pages source  (p3)
**Goal:** the deploy pipeline is armed and live renders.
**Steps:**
1. `git add -A && git commit -m "…" && git push`.
2. On GitHub: **Settings → Pages → Source: GitHub Actions** (one-time).
3. Watch the **Actions** tab until the run is green.
**How to test:** open `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/` — it loads (already verified HTTP 200 on 2026-06-27).
**Debug top-3:** (a) 404 → Pages Source not set / wrong branch. (b) old content → hard-reload; check `?v=` bumps. (c) Action failed → open the failed step in the Actions log.

---

## TASK 5 · Translate remaining copy / keep FA+DE parity  (p5)
**Goal:** every visible string resolves in EN + FA + DE (0 untranslated).
**Before you start:** know which section you added/changed and its `data-i18n` keys.
**Steps:**
1. In `index.html`, ensure each translatable element has `data-i18n="area.key"`.
2. In `js/i18n.js`, add that key under **both** `fa` and `de` dictionaries (English is the HTML source).
3. Bump `i18n.js?v=N` in `index.html`.
**How to test:** switch EN → فا → DE; no English leaks in FA/DE; FA is RTL; console = 0 errors.
**Debug top-3:** (a) English shows in FA → key missing/misspelled in `i18n.js`. (b) layout doesn't flip → viewing via `file://` (use a server) or `RTL` map missing the language. (c) change invisible → forgot the `?v=` bump.
**Modify later:** all copy is data-driven by keys; add a new key set for any new text.

---

## TASK 6 · Fill Daricheh (داریچه) + Shiraz House Archive with real cleared pieces  (p5)
**Goal:** replace the coming-soon stubs (`#daricheh`, `#arthive`) with real, freely-shareable content.
**Before you start:** original or licence-cleared translations / images (no copyrighted text or photos).
**Steps:**
1. Add the real pieces into the `#daricheh` / `#arthive` markup in `index.html`.
2. Give each new string a `data-i18n` key and add FA + DE in `js/i18n.js`.
3. Remove the "coming-soon" / striped-placeholder styling where content now exists.
4. Bump `style.css?v=N` / `i18n.js?v=N` as touched.
**How to test:** EN/FA/DE render, 0 untranslated keys, images load, console clean.
**Debug top-3:** (a) copyright risk → only original/cleared material (this repo's rule). (b) untranslated → missing FA/DE keys. (c) placeholder still striped → remove the placeholder class.
**Modify later:** the sections are designed to grow — add more entries the same way.

---

## TASK 7 · Add real facts + press/interview source links  (p5)
**Goal:** ground the public copy in verifiable sources before final publish.
**Before you start:** dated registry entries, press/interview links. Draft/private notes go in `_private/FILL-ME-facts.md` (gitignored — never publish).
**Steps:**
1. Collect sources privately in `_private/`.
2. Only add a claim to the public `index.html` once it has a real source.
3. Keep the under-claim rule: if unsure, leave it out.
**How to test:** every public claim traces to a source you can show a reviewer.
**Debug top-3:** (a) a claim can't be sourced → remove it (the "Kiarostami award" precedent). (b) a private note leaked → it must live under `_private/`, which is gitignored. (c) tone drifts promotional → keep it humane/universal.
**Modify later:** as sources appear, upgrade under-claimed lines; pursue Wikipedia only via Articles-for-Creation once independent sources exist.

---

## TASK 8 · Wire the CellSight demo into the page  (p4)
**Goal:** link the bundled `projects/cellsight/index.html` demo from the Engineer/Research section.
**Before you start:** confirm the demo runs (open `projects/cellsight/index.html`).
**Steps:**
1. In `index.html`, add a link/button in the Engineer or Research section pointing to `projects/cellsight/index.html`.
2. Give it a `data-i18n` label + FA/DE keys.
3. Bump the relevant `?v=N`.
**How to test:** click the link → the demo opens and runs; back-navigation returns to the site.
**Debug top-3:** (a) 404 → path must be relative `projects/cellsight/index.html`. (b) demo blank → open its own console. (c) label untranslated → add FA/DE keys.
**Modify later:** the same pattern links any future sub-page under `projects/`.

---

## TASK 9 · Accessibility & performance pass (Lighthouse)  (p4)
**Goal:** a clean a11y/perf audit.
**Steps:**
1. In Chrome dev-tools → **Lighthouse** → run on the local or live page.
2. Fix flagged items (contrast, alt text, heading order, image sizes).
3. Re-run until scores are green.
**How to test:** Lighthouse scores; manual keyboard-only nav; reduced-motion still works.
**Debug top-3:** (a) low perf from motion → already guarded by `prefers-reduced-motion`; check heavy images. (b) missing alt → add `alt=""` (decorative) or real text. (c) contrast → tune palette variables in `css/style.css`.
**Modify later:** re-run Lighthouse after any big visual change.
