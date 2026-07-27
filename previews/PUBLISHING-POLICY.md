# Publishing policy for `previews/` — PUBLIC + OWNER APPROVED only

This directory is served by GitHub Pages at
`https://mohammadalimasjedi-source.github.io/Personal-Portfolio/previews/`.
**Everything committed here is public on the internet the moment the Pages workflow finishes.**
The workflow uploads `path: '.'`, so there is no staging area and no private subfolder.

Written 2026-07-27 under Mo's Governance Hold, after content was published here that he had not
approved. Two items (`sula-identity`, `sula-board` — internal brand working documents from a
private repo) were withdrawn the same day. Nothing sensitive was exposed, but the rule was
missing, which is the actual defect.

---

## The rule

**Only content that is BOTH explicitly public in nature AND approved by Mo for this URL.**

Approval means Mo asked for a public link to that specific item. It is not implied by:
- the item being finished, or good, or useful;
- Mo asking to *see* it;
- Mo asking for a link to *one* item ("and these too" is not approval for the rest);
- the item already existing in a repo, public or private;
- it being convenient to add while publishing something else.

When in doubt the answer is no. Ask, or hand over the file directly instead.

## Never publish here

| Category | Examples |
|---|---|
| Health / medical | anything from `_intake-private/`, lab results, referrals, insurance, diagnoses |
| Identity documents | passport, residence permit, Fiktionsbescheinigung, AZR number, ID numbers |
| Credentials | `.env`, tokens, API keys, passwords, connection strings, session ids |
| Employer / SincoTec | internal code, test-bench data, pipelines, internal reports, employee names |
| MIOS content | records, decision queue, briefs, audit logs, `mios-content` branch |
| Third-party private data | client intake forms, planning notes, anything from a private repo without that person's consent |
| Legal / financial | contracts, tax, banking, immigration correspondence |

A third party's own website draft is **their** data. Publishing it needs Mo's approval *and* is
their content to consent to — a draft of someone's professional site under their real name must
carry `noindex` at minimum, and ideally should not be public before they have seen it.

## What `noindex` is and is not

`<meta name="robots" content="noindex">` **asks** well-behaved crawlers not to list the page.

It is **not access control.** The URL is public, guessable-adjacent, forwardable, and a crawler
is free to ignore the tag. Never treat `noindex` as a reason it is safe to publish something.
Use it as courtesy on drafts, never as a control.

## What `curl` proves and does not prove

`curl` returning `200` proves the URL is reachable right now and returns bytes. That is all.

It does **not** prove: that publishing was authorised, that the content is non-confidential,
that the content owner consented, that the page renders correctly in a browser, that internal
links work, or that nothing sensitive is embedded further down the file.

Verify availability with `curl`. Verify *permission* by asking Mo. They are different questions
and conflating them is how the 2026-07-27 mistake happened.

## Before publishing anything here

1. Name the item and confirm Mo asked for a public link to **it**, specifically.
2. Grep the exact bytes for the categories above — not the source file, the file being committed.
3. Check the source repo's visibility. Private source ⇒ stop and ask.
4. Add `noindex` to drafts (courtesy, not protection).
5. `curl` each URL after the build and record code, size and title.
6. Report what went public, from which deployment SHA, and at what time.

## Withdrawing something

`git rm` it from the tree and push — Pages stops serving it on the next build. **Do not rewrite
history or delete the repo**: that destroys the evidence of what was exposed and when. Record the
URL, the deployment SHA that served it, and the window it was reachable.
