# Google Search Console setup — do this yourself

This needs your Google login, so it has to be you, not an AI session. It takes about
10 minutes. Do it once, then check back every week or two.

Site: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`

---

## 1. Open Search Console

1. Go to **https://search.google.com/search-console**.
2. Sign in with your Google account (`mohammadalimasjedi@gmail.com`).
3. Click **Add property**.

## 2. Add the site as a "URL prefix" property

- Pick **URL prefix** (NOT "Domain" — Domain needs DNS access, and the site lives on a
  GitHub Pages subpath for now, not your own domain).
- Paste exactly: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`
  (keep the trailing slash).
- Click **Continue**.

## 3. Verify you own it

Google will offer a few methods. Easiest one for this site: **HTML tag**.

1. Choose the **HTML tag** method. Google shows you one line, like:
   ```html
   <meta name="google-site-verification" content="SOME_LONG_CODE" />
   ```
2. Copy that whole line.
3. Open `index.html` in this repo and paste the line inside `<head>…</head>`,
   near the other `<meta>` tags at the top (right after the `<title>` line is a good spot).
4. Save, commit, and push to `main`. Wait ~1 minute for GitHub Pages to redeploy
   (check the **Actions** tab turns green).
5. Back in Search Console, click **Verify**.

**Alternative method** (if the tag method acts up): Google also offers **HTML file**
upload — it gives you a file like `google1a2b3c4d5e.html`. Put that file directly in
the repo root (same folder as `index.html`), commit, push, then click Verify.

> Tip: next time you're in a Claude session, you can paste the verification line/file
> Google gives you and ask me to add it to the repo — I just can't fetch it myself
> since that step needs your Google login.

## 4. Submit the sitemap

1. In the left sidebar, click **Sitemaps**.
2. Under "Add a new sitemap," type: `sitemap.xml`
3. Click **Submit**.

This repo already has a `sitemap.xml` at the root listing the homepage and the
CellSight project page — Google will re-check it periodically on its own after this.

## 5. Request indexing for the main pages

1. In the top search bar (the "URL Inspection" bar), paste the homepage URL:
   `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`
2. Press Enter. Wait for the check to finish.
3. Click **Request indexing**. This asks Google to crawl it soon instead of whenever
   it gets around to it.
4. Repeat for: `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/projects/cellsight/`

## 6. What to check later (no fixed schedule — whenever you're curious)

- **Performance** report: which searches actually show your site, and how many clicks.
- **Pages** / **Indexing** report: flags any page Google couldn't index, and why.
- **Enhancements**: if it detects your Person/WebSite structured data, it'll show up here.

## 7. If you later buy a custom domain

Moving off `github.io/Personal-Portfolio/` to your own domain (see
`WEBSITE-READINESS-AND-SEO-2026-07-19.md` for that plan) means redoing steps 2–3 for
the new domain — Search Console properties are per-URL, they don't carry over
automatically. Everything else (sitemap, indexing requests) is quick to redo.
