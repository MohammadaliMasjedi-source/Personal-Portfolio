# Findability — Google Search Console + backlinks

Goal: help Google find, verify, and rank this site for Mo's name (and its common
misspellings). Two parts: (1) tell Google the site exists and who owns it, (2) get a
few real, honest links pointing back at it. Nothing here needs new accounts or fake data.

Live site: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`

---

## Part 1 — Google Search Console, exact steps

The site is a GitHub Pages *subpath* (`github.io/Personal-Portfolio/`), not a domain
Mo owns the DNS for. That rules out the "Domain property" verification method (it
needs a DNS TXT record at the registrar). Use a **URL-prefix property** instead.

1. Go to <https://search.google.com/search-console> and sign in with
   `mohammadalimasjedi@gmail.com`.
2. Click **Add property** → choose **URL prefix** (the right-hand option, not
   "Domain").
3. Enter exactly: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`
   (must match the trailing slash used everywhere else in the site's own metadata).
4. Pick the **HTML tag** verification method (simplest for a site that's just static
   files in this repo — no file upload step, no DNS access needed).
   - Google gives a line like:
     `<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXX" />`
   - Paste that line into `index.html`'s `<head>`, near the other `<meta>` tags
     (anywhere before `</head>` works; keep it next to `<meta name="author" ...>`
     for tidiness).
   - Commit, push, wait for the GitHub Pages redeploy (~1–2 min), then click
     **Verify** in Search Console.
5. Once verified, left sidebar → **Sitemaps** → enter `sitemap.xml` → **Submit**.
   (Full URL resolves to
   `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/sitemap.xml`,
   which already exists at the repo root.)
6. Left sidebar → **URL Inspection** → paste the homepage URL → **Request indexing**.
   Repeat for `.../projects/cellsight/` (the other URL in `sitemap.xml`).
7. Optional but cheap: repeat the same URL-prefix + HTML-tag flow at
   [Bing Webmaster Tools](https://www.bing.com/webmasters) — it can import a
   verified Search Console property in one click, so step 2–4 take under a minute
   there.

**If/when a custom domain is bought later** (see
`WEBSITE-READINESS-AND-SEO-2026-07-19.md` for that plan): add it as a **new**
property using the **Domain** method (DNS TXT record at the registrar — covers
`http/https` and `www`/apex in one go), then repeat steps 5–6 for the new domain.
The old `github.io` property can stay verified; it'll just stop getting new traffic
once the redirect/move happens.

---

## Part 2 — top 3 honest backlink levers

"Backlink" here means: a real profile Mo already owns, on a site Google already
trusts, with this site's URL added to that profile's own "website" field. No new
accounts, no link farms, no reciprocal-link schemes — just closing the loop on
identity links that should already exist.

Ranked by authority-per-minute-of-effort:

1. **ORCID** — `https://orcid.org/0009-0000-0068-9651`
   Research-identity registries are exactly what Google's Knowledge Graph looks for
   to disambiguate a person, and it's already in this site's own `sameAs`. Open the
   ORCID profile → **Websites & Social Links** → add the site URL. Highest value for
   the "AI/ML researcher" side of the name.
2. **LinkedIn** — `https://www.linkedin.com/in/mo-masjedi-20317323b/`
   LinkedIn profiles rank extremely well in Google for name searches (often
   already on page 1). Profile → **Contact info** → **Website** → add the site URL
   with label "Portfolio" or "Personal website".
3. **GitHub** — `https://github.com/MohammadaliMasjedi-source`
   GitHub profiles are crawled fast and rank well for developer-adjacent name
   queries. Profile → **Edit profile** → **Website** field → add the site URL.
   Bonus: mention it once in the profile README too (a profile README is itself an
   indexed page).

Lower-effort extras once the top 3 are done (same idea, smaller expected lift):
YouTube channel **About → Links**, Hugging Face profile bio, Xing profile website
field — all real accounts already linked from this site's `#contact` section.

**Do not** add any profile to this list (or to the JSON-LD `sameAs` in
`index.html`) unless it is confirmed to actually belong to Mo. A wrong account
linked back to this site does more damage to search-identity than a missing one —
see the ownership note already in `index.html`'s JSON-LD comment (Kaggle currently
excluded for this reason).

---

*Companion doc: `WEBSITE-READINESS-AND-SEO-2026-07-19.md` (repo root) has the fuller
SEO plan — custom domain, hreflang `/fa/` `/de/` pages, timeline estimates. This file
only covers the two concrete, do-today actions: verify in Search Console, add the
site URL to three profiles Mo already owns.*
