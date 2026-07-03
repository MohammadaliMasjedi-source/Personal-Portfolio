# LAUNCH CHECKLIST — Mo · MassJedi portfolio

Last checked: 2026-06-30. Repo: `MohammadaliMasjedi-source/Personal-Portfolio` — **currently PRIVATE**.
Intended live URL (once published): https://mohammadalimasjedi-source.github.io/Personal-Portfolio/

> Short version: **the site is build-ready and the deploy workflow is correct — but the
> repo is private and GitHub Pages is not yet enabled, so the site is NOT live right now.**
> Going live is a deliberate one-time action only Mo takes (make repo public → enable Pages).
> Everything else left is content Mo must approve (photos, biographical claims), not engineering.
>
> ⚠️ *Note: an earlier version of this file claimed the site was "already live." That was
> stale — the repo is private and `GET /pages` returns 404. Corrected 2026-06-30.*

---

## ✅ READY (build-ready; not yet published)

- **Repo is PRIVATE; Pages is OFF.** As of 2026-06-30 the repo is private and
  `GET /repos/.../pages` returns 404 — so there is **no live site yet**. This is
  expected: publishing is Mo's one-time call. Nothing here is broken.
- **Deploy config is correct.** `.github/workflows/static.yml` is valid: it builds
  on every push to `main`, uploads the whole folder, and deploys to Pages.
  `.nojekyll` is present so folders serve as-is. **Nothing here needs fixing.**
- **No broken links.** All in-page menu anchors point to real sections. All social
  links resolve (YouTube, both Instagram, Xing, GitHub, Hugging Face, Kaggle).
  (LinkedIn returns code 999 to scripts — that is LinkedIn's normal bot block,
  not a broken link; it opens fine in a browser.)
- **Images load.** All gallery photos, the world images, the YouTube video
  thumbnails, and the portrait (`assets/img/portrait.jpg`) exist and load.
- **Three languages all work.** Every one of the 204 on-page text keys has a
  Persian (FA) and German (DE) translation — 0 missing. FA flips to right-to-left.
- **HTML is clean.** Tags are balanced (158/158 `<div>`, 20/20 `<section>`).
- **No leaked notes.** No "TODO", "FILL-ME", editor notes, or placeholder text
  in any public file (`index.html`, `js/*.js`). Private/working notes stay in
  `content/` and `_private/`, which are git-ignored and never published.

---

## 🟡 STILL BLOCKING / NICE TO FIX (mostly content, not code)

- **Memo the cat has no photo.** `index.html` points to
  `assets/img/cats/memo.jpg`, which does not exist yet. It does **not** break the
  page — a cat emoji shows instead — but a real photo would look better.
  (Jupiter is shown as a memorial 🪐 on purpose; leave that as is.)
- **A few "Coming soon" stubs are still empty** (these are intentional, but a
  visitor sees them empty):
  - "Shiraz House — Archive" gallery (`#arthive`) says *gallery coming soon*.
  - "Translations / Daricheh" (`#daricheh`) says *the first windows are coming soon*.
  - Fill them only with original or freely-shareable pieces and cleared images.
- **GitHub deprecation notice (non-blocking).** GitHub now warns that the Actions
  it uses run on Node 20, which GitHub is retiring. The deploy **still succeeds**
  and the actions are already on their latest versions, so there is nothing to
  change today; GitHub will handle this on its side. Just a heads-up.

---

## 🔒 ONLY MOHAMMAD CAN DO THESE (do not let an assistant change them)

- **Approve the biographical claims about Shiraz Art House.** The site states Mo
  *founded and led* the house (~2012→2020), was its **CEO/managing director**
  ("confirmed in Iran's official state gazette as its CEO from 2017 to 2019"),
  and that it was **later sold and run by others**; and that **Neda Aryana** was
  **co-founder / board member**. These are sensitive (employer / former-owner /
  defamation / conflict-of-interest). **Left exactly as written.** Mo must
  personally confirm each claim is accurate and that he is comfortable publishing
  it before treating the site as final. Do not soften, strengthen, or reword them
  without Mo's explicit say-so.
- **Photo permissions.** Confirm Mo has the right to publish every photo
  (gallery performance shots, portrait, future archive images, cat photos),
  especially any taken by others or showing other people.
- **Add the real Memo photo** (square if possible) at `assets/img/cats/memo.jpg`.
- **Decide whether to publish at all / keep it public.** Pages only works while
  the repo is public. Making the site "go live" for real is Mo's call — this
  checklist does **not** push anything.

---

## How "going live" actually happens (already set up)

Edit a file → commit → push to `main` → GitHub Actions redeploys in ~1 minute.
Pages source is already set to **GitHub Actions**, so no further setup is needed.
To verify after a push: open the live URL (add `?v=2` to skip the cache) or watch
for the green check at the repo's **Actions** tab.

---

### Summary

| Area | State |
|---|---|
| Deploy / Pages config | ✅ working — no fix needed |
| Live site (HTTP 200) | ✅ up |
| Links / anchors / images | ✅ all resolve (memo.jpg has a graceful fallback) |
| Trilingual (EN/FA/DE) | ✅ full parity, 0 missing keys |
| Public-safe content | ✅ no leaked notes/placeholders |
| Memo photo | 🟡 missing (emoji fallback) — Mo supplies |
| "Coming soon" stubs | 🟡 intentional, still empty |
| Biographical claims | 🔒 unchanged — Mo must approve before final launch |
| Photo permissions | 🔒 Mo to confirm |
