# TASKS.md — Personal-Portfolio

Live backlog. This is the ONLY task source for external contributors (Codex, ChatGPT, humans) —
see `AGENTS.md` for how to work here. Claiming a task = opening a **draft PR** titled
`T-PP-xx: <title>`. One task per PR. Status: `OPEN` → `CLAIMED` (draft PR link) → `DONE` (merge).

⚠️ This is a LIVE PUBLIC site (GitHub Pages). Smallest-possible-diff rule on every task; the
owner reviews and merges every PR personally. No content rewrites, no design changes, no new
claims about the owner — ever — unless a task card explicitly says so.

---

### T-PP-01 · Add JSON-LD Person schema with alternateName [phase: seo · size: S · status: OPEN]
**Context:** the site is a trilingual (FA/EN/DE) personal site for Mohammadali Masjedi. Search
engines currently get no structured identity data. He is known under three name forms that
should resolve to one person: "Mohammadali Masjedi" (official), "Mo Masjedi" (brand),
"Mo Mass Jedi" (art alias).
**Do:** add ONE `<script type="application/ld+json">` block to the site's main entry page
`<head>` (find the canonical index page; if per-language pages exist, the main/landing one
only): `@type: Person`, `name: "Mohammadali Masjedi"`, `alternateName: ["Mo Masjedi",
"Mo Mass Jedi"]`, `url` = the site's own live URL as found in the repo config/README, and
`sameAs` ONLY for profile links that already appear on the site itself (copy them exactly —
add nothing that isn't already publicly linked there).
**DoD:** the JSON-LD parses as valid JSON and conforms to schema.org Person (validate with a
schema validator or a small Node snippet — paste the validation output in the PR body); the
diff touches only the `<head>` of that one file; the rendered page is visually unchanged.
**Don't:** touch visible content, styles, other pages, or add any biographical claims, awards,
or affiliations not already on the site. No external scripts.

---

### T-PP-02 · Internal link + hreflang integrity check [phase: seo · size: S · status: OPEN]
**Context:** the site has FA/EN/DE variants; language switching and internal links have grown
over several waves and nobody has run one full integrity pass.
**Do:** write a small throwaway checker (Node built-ins only, may live in the PR description
rather than the repo) that walks every `.html` file in the repo and verifies: (a) every
internal `href`/`src` resolves to a file that exists in the repo, (b) every page that declares
`hreflang` alternates points at pages that exist and back-reference correctly. Fix ONLY broken
internal links/hreflang targets (typo-level, smallest diff). Report everything else.
**DoD:** PR body contains the full result table (file · link · status), the list of fixes made,
and an explicit count of remaining issues that need an owner decision (0 is a valid count).
**Don't:** add redirects, restructure pages, rename files, or touch external links.
