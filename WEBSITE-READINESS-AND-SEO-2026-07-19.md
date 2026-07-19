# Website readiness + SEO plan — 2026-07-19

Repo: `Git Mo/Personal-Portfolio` (public: `MohammadaliMasjedi-source/Personal-Portfolio`)
Live: https://mohammadalimasjedi-source.github.io/Personal-Portfolio/ (checked today: **HTTP 200**)

---

## 1. Is it ready to go professional? Honest answer: NO — but close.

It is **not** "100% done, just buy a domain." It's roughly **~85%**. It is live, solid,
trilingual, honest, and already has good SEO plumbing. But a few real things stand between
it and a clean professional launch. The domain is **necessary but not sufficient**.

### What is genuinely DONE (credit where due)
- **Live + auto-deploy.** GitHub Actions → Pages, HTTP 200 verified today.
- **Trilingual EN / FA / DE**, RTL-safe, 0 missing i18n keys.
- **SEO head is already strong** (better than most personal sites): `<title>`, meta description,
  keywords, Open Graph + Twitter cards, `canonical`, **Person + WebSite JSON-LD** with
  `alternateName` (incl. `محمدعلی مسجدی` / `محمد مسجدی`), `sameAs`, `knowsAbout`, `alumniOf`.
- **robots.txt + sitemap.xml** present and correct.
- **Real portrait.jpg + og.png** share card exist.
- **Social channels wired** (not placeholders): YouTube, Instagram, LinkedIn, GitHub, Xing,
  Hugging Face, Kaggle, Email. (The old PROJECT.md "is-soon channels" note is **stale** — only
  the 3 *money* buttons are still placeholders.)
- **Honest content** — under-claim rule, sourced claims, founder/CEO wording already corrected.
- Clean semantic structure: exactly **one `<h1>`**, `<section id>` per area, ~19 images almost
  all with `alt`.

### What is genuinely LEFT (the real blockers, honest)
1. **URL is a project subpath, not a personal brand.**
   `…github.io/Personal-Portfolio/` reads as amateur and is weak for a *name* search. The
   professional move is a **custom root domain** (or, cheap fallback, rename the repo to
   `mohammadalimasjedi-source.github.io` for a clean root). This is #1 below.
2. **"Coming soon" stubs are still public.** Archive (`#arthive`), Daricheh (`#daricheh`), and
   3 sponsorship buttons (`is-soon`: GitHub Sponsors / Ko-fi / PayPal) all say "coming soon /
   set up soon." Honest, but the site's own SWOT says *"stale placeholders erode credibility."*
   Before a professional launch: **fill them or hide them** (comment the sections out until real).
3. **Identity-graph inconsistency (data bug).** The Person JSON-LD deliberately **omits LinkedIn
   and Kaggle** (code comment: "ownership unconfirmed / duplicate not resolved"), yet the visible
   channels grid **does link both** LinkedIn *and* `kaggle.com/mmasjedi` + `huggingface.co/mmasjedi`.
   Memory says the `mmasjedi` handle is **not Mo's** on GitHub. If those `mmasjedi` accounts aren't
   his, publicly linking them points searchers at the wrong person and poisons the identity graph.
   **Decision needed: confirm ownership or remove the links.** (Fix the inconsistency either way.)
4. **No Lighthouse / a11y / performance pass** (phase 4 open). Motion-heavy + CDN fonts + Lenis.
   Core Web Vitals are a ranking signal and a first-impression signal.
5. **Trilingual content is NOT separately indexable.** Language switch is JS reload at the *same*
   URL — Google mostly indexes the English DOM. There are **no `/fa/` `/de/` URLs and no
   `hreflang`**. This directly blocks ranking the Persian name (see SEO #3).
6. **Not verified in Google Search Console** (no verification signal on the page). Nothing is
   telling Google to index it fast or letting Mo see which queries surface him.
7. **Mo's final content approval + one-time publish call** still open (his call, per phases).

**Verdict:** professional-*looking* and live, but "buy a domain and done" is not accurate.
Minimum to call it professional-ready: (a) custom domain wired through all metadata,
(b) resolve the LinkedIn/Kaggle/HF account-ownership inconsistency, (c) fill-or-hide the
coming-soon stubs. Everything else is polish that can follow the launch.

---

## 2. Plan: rank "Mohammad Masjedi" / "محمدعلی مسجدی" on Google (EN + FA)

### The blunt reality first — the common-name collision
"**Mohammad Masjedi**" is a common name; many people share it. Ranking #1 for the *bare* common
name is hard and slow, and partly out of your control. So the strategy is a **ladder**:
- **Win the distinctive variants first** — "Mohammadali Masjedi", "Mo Masjedi", "Mo MassJedi",
  "محمدعلی مسجدی". These are winnable in weeks–months because few others use them.
- **Win name + qualifier next** — "Mohammad Masjedi guitar", "… battery / RUL", "… Clausthal".
- **The bare "Mohammad Masjedi" is the long game** — 6–12+ months, gated on authority + backlinks
  + ideally a Wikidata/Knowledge-Panel entry. Not a switch you flip.

### Top-5 SEO actions (highest leverage first)

**1. Buy + wire a custom root domain.**
   e.g. `momasjedi.com` / `momasjedi.de` (he's in Germany) / `masjedi.dev`. Add a `CNAME` file,
   set DNS (A/AAAA to GitHub Pages + `www` CNAME), enable "Enforce HTTPS." Then update **every**
   absolute URL to the new domain: `canonical`, `og:url`, `twitter:image`/`og:image`, JSON-LD
   `@id` + `url` + `image`, `sitemap.xml` `<loc>`, and the `robots.txt` Sitemap line. A clean root
   domain beats a `github.io/Personal-Portfolio` subpath massively for a *name* query. **Single
   biggest lever.**

**2. Make FA + DE separately indexable, with `hreflang`.**
   This is the key to the Persian query. Because the language switch is client-side JS at one URL,
   Google barely sees the Persian page today. Create real static pages `/fa/` and `/de/` (Pages is
   static, so separate HTML is cleanest), each with its own `<html lang="fa" dir="rtl">`, its own
   `<title>`/meta *in that language* (title containing `محمدعلی مسجدی`), and reciprocal
   `<link rel="alternate" hreflang="en|fa|de|x-default">` on all three. Add them to `sitemap.xml`.
   Without this, "محمدعلی مسجدی" will barely rank no matter what else you do.

**3. Verify in Google Search Console (+ Bing Webmaster), submit sitemap, request indexing.**
   This is what turns "indexed in months" into "indexed in days," and it's the only way to *see*
   which queries surface him and iterate. Verify the new domain, submit `sitemap.xml`, hit
   "Request indexing" on the home + `/fa/` + `/de/` URLs. (Optional privacy-light analytics:
   Plausible / GoatCounter — but GSC is the must-have.)

**4. Complete + reciprocate the identity graph (`sameAs`, both directions).**
   `sameAs` is how Google's Knowledge Graph reconciles one person across the web — but only if the
   links are **bidirectional** and **verified his**. (a) First resolve the LinkedIn duplicate and
   confirm/deny the `mmasjedi` Kaggle/HF accounts — a wrong account hurts more than a missing one.
   (b) Add the verified LinkedIn + YouTube + GitHub to JSON-LD `sameAs`. (c) On each profile, put
   the new domain in the "Website"/bio field (LinkedIn website, GitHub profile README + bio,
   YouTube channel Links, Instagram bio). (d) Longer-term: create a **Wikidata** person item with
   the name variants + `sameAs` — the strongest single signal toward a Knowledge Panel (this is the
   private `wikipedia-presence` repo's job).

**5. Earn authoritative backlinks + target name+qualifier queries (the authority long-game).**
   For a common name, on-page keywords are not enough — Google ranks by authority. Concrete:
   put the full name + role in the `<h1>` first paragraph and portrait `alt`
   ("Mohammadali Masjedi — classical guitarist & AI researcher"); add a couple of unique,
   linkable subpages (`/about` or `/cv`, the CellSight writeup, a music page) for more indexable
   surface; then earn links that name him and point to the domain from domains that **already
   rank** — TU Clausthal profile/thesis page, **ORCID**, **Google Scholar**, ResearchGate,
   YouTube video descriptions, GitHub profile, a Medium/dev post. Each such link lifts authority
   and pulls the bare-name ranking up over time.

### Honest timeline
- **Domain live + indexed + name-qualifier queries ranking:** ~2–6 weeks.
- **Top results for the distinctive variants** ("Mohammadali Masjedi", "Mo MassJedi",
  "محمدعلی مسجدی"): ~**1–3 months**, mostly gated on the FA/DE pages + first backlinks.
- **Page 1 for the bare common "Mohammad Masjedi":** **6–12+ months**, and not guaranteed —
  depends on link authority vs. the other people with that name, and likely a Wikidata /
  Knowledge-Panel entry. This is a marathon, not a switch.

---

*Notes: this file is an audit; nothing was committed. Live status checked 2026-07-19 (HTTP 200).
The `mmasjedi` account-ownership question and the LinkedIn duplicate should be settled before the
domain launch, since fixing them afterwards means re-editing every profile again.*
