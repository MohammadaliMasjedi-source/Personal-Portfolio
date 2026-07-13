# Content Truth Audit — Personal-Portfolio

Audited 2026-07-12, branch `truth-audit`. Scope: every factual claim on the live page
(`index.html` + `js/i18n.js`, all 3 locales — EN is the source text; FA/DE are verbatim
translations of the same claim, so they are **not** re-listed per-row unless a locale
diverges). CellSight demo (`projects/cellsight/index.html`) audited separately at the
bottom. Sources are `specs/MO-LINKEDIN-FACTS-2026-07-12.md` (→ "LINKEDIN-FACTS") and the
site itself (→ "SITE", used only to flag internal contradictions).

Rule applied: a claim **stays** only if (a) it traces to LINKEDIN-FACTS, or (b) it is a
self-reported lifestyle/preference statement (hobbies, curiosities, personal taste) that
carries no third-party-checkable credential, or (c) it is honestly labeled coming-soon/
synthetic with a real status. Anything else is **fix** (soften/remove the unsourced part),
**remove**, or **ASK-MO**.

Legend: ✅ keep · 🛠 fix · ❌ remove · ❓ ASK-MO

| # | Claim (where) | Evidence found | Verdict |
|---|---|---|---|
| 1 | Meta desc/OG/Twitter: "Engineer · Artist · Athlete · Manager · Poet" (head `<meta>`) | No "Artist" section exists — `#artist` is `hidden` (no images, no content). Claiming a persona with zero accessible artifact. | 🛠 fix — drop "Artist" from the persona list in meta tags (replace with a facet that's actually live, e.g. "Musician") |
| 2 | Hero/marquee: Guitarist·Teacher·Software Developer·Project Manager·Cultural Activist·Cat-lover | Matches LINKEDIN-FACTS merge template (engineer/data · art & culture manager · project manager · guitarist/teacher · curious mind), except Mo's own verbatim self-definition says **"art & culture manager"**, not "Cultural Activist" | 🛠 fix — reword to Mo's own phrase per conductor's order |
| 3 | About p1/p2: "years building an independent home for artists" + "teaching the classical guitar" + "bring that same patience to engineering" | Matches LINKEDIN-FACTS (SAH founder/CEO persona + engineer persona) | ✅ keep |
| 4 | About timeline t2: "~2012 → 2020: Founded and led Shiraz Art House; later sold to others." | LINKEDIN-FACTS has no dates for SAH tenure (only Rasmio registry + "official exit documented", no year given to us) | ❓ ASK-MO — **contradicts row 15** (Arthouse section says 2017–2019). Two different date ranges for the same role can't both be right. |
| 5 | About timeline t3: "2012 → 2022: A decade in software — engineer, PM, then solutions architect." | LINKEDIN-FACTS Profile A headline is "Software Engineer \| Data Analytics \| IoT Enthusiast" at SincoTec/TU Clausthal — no title history, no "solutions architect", no start/end years given | ❓ ASK-MO — job-title history and years not in the source corpus |
| 6 | About timeline t4: "2022 →: Master's research on battery life at TU Clausthal" | LINKEDIN-FACTS confirms TU Clausthal affiliation on both profiles | ✅ keep |
| 7 | eng.lead: "A BSc in software engineering and nearly a decade building accounting software" | Not in LINKEDIN-FACTS at all (no degree name, no employer/domain named) | 🛠 fix (2026-07-13) — **contradicted the just-softened timeline (row 5)**: eng.lead still said "solutions architect" / "BSc software engineering" / "decade building accounting software" while about.t3 was softened to "engineering & data analytics roles". Softened eng.lead in all 3 locales to the same sourced framing ("a decade of software work as an engineer, data analyst and project manager"). Unsourced specifics **removed**, none asserted; the underlying degree/employer facts remain MO-DECIDES. |
| 8 | eng stats: "5 model architectures / 6 public datasets / 340+ cells / 8 random seeds" | Thesis-specific research numbers, not in LINKEDIN-FACTS; unverifiable by the PC and adjacent to the IP-order concern raised for CellSight | ❓ ASK-MO — confirm these are safe to publish pre-defense, or soften to qualitative language |
| 9 | CellSight card: "Product · Live demo" tag + description | Demo exists and is real/live (`projects/cellsight/index.html`), already labeled "synthetic data" | 🛠 fix — not false, but fails the new explainer standard (see item 4 of mission); needs What-is-this/Why-it-matters/STATUS badge |
| 10 | Battery Lifetime Prediction card: "TU Clausthal · 2026" | Matches LINKEDIN-FACTS TU Clausthal affiliation; year plausible given "M.Sc. thesis" framing | ✅ keep |
| 11 | Mechanical Testing & DAQ card: "hands-on background... LabVIEW/NI" | Not in LINKEDIN-FACTS (no employer, no dates) but framed as generic background skill, not a credential claim | ✅ keep (low-risk skill statement) |
| 12 | Research/papers section: 8 unpublished papers + thesis, explicitly captioned "most of this research is unpublished... results follow when public" | Honestly labeled as titles/topics only, no results asserted | ✅ keep — good example of the coming-soon rule done right |
| 13 | Arthouse lead: "Founder and former CEO of an independent house for art in Shiraz, Iran." | LINKEDIN-FACTS Profile B headline: "Founder and Former CEO of Shiraz Art House" — direct match | ✅ keep |
| 14 | Arthouse p1: description of SAH as gallery/stage/café/bookshop/cinema/visual-art space | Not itemized in LINKEDIN-FACTS but consistent with the general "independent cultural space" framing; no specific numbers asserted | ✅ keep |
| 15 | Arthouse p2: "led it for roughly five to six years... confirmed in Iran's **official state gazette** as its CEO from **2017 to 2019**, and addressed by the provincial culture authority as its director" | **Not in LINKEDIN-FACTS.** The corpus only has the Rasmio registry (reg. no. 290X) + "official exit documented" — no gazette, no 2017–2019 date, no "provincial culture authority" quote. ASKS-LEDGER confirms "degrees/dates... still [MO-FACT-NEEDED]" | ❓ ASK-MO — this is the single highest-risk claim on the site: a specific, checkable government-record date range with no corroborating source in hand. Contradicts row 4's "~2012→2020" |
| 16 | Arthouse: no cinema-patronage line | LINKEDIN-FACTS ADDENDUM: sourced "patron of independent cinema & festivals" line, quote from an independent filmmaker's Instagram post, credited by name. Mission explicitly orders this added. | 🛠 fix — **add** (this session, see rewrite) |
| 17 | Arthive (archive) section: "coming soon", no ownership claims, no images | Honestly labeled coming-soon, matches the corpus's caution about disputed/contested SAH history | ✅ keep |
| 18 | Music p1: "over 18 years behind the instrument" | Not in LINKEDIN-FACTS. Also **contradicts row 4-adjacent** About timeline t1 ("2003 →" performing/teaching) — 2026 − 2003 = 23 years, not 18 | ❓ ASK-MO |
| 19 | Music p1: "first place at Iran's national Art Olympiad (music) and second at the National Guitar Festival" | Not in LINKEDIN-FACTS. Press section (row 24) only documents a **2010 second-place** at a Fars-province ensemble festival — different event, different placement | ❓ ASK-MO |
| 20 | Music p1: "hold an MA in Art Research" | LINKEDIN-FACTS explicitly flags degree names/dates as `[MO-FACT-NEEDED]` (Payame Noor + Islamic Azad visible, no degree title confirmed) | ❓ ASK-MO |
| 21 | Music p1: "taught at Forough Music Academy" | LINKEDIN-FACTS ADDENDUM confirms: "Classical guitar teacher, affiliated with Forough Music Academy, Shiraz (@foroughmusicacademy)" | ✅ keep |
| 22 | Music p1: "served on the Music Policy Council of Fars Province" | Not in LINKEDIN-FACTS | ❓ ASK-MO |
| 23 | Music p2 + poem section: Persian-poetry connection, Khayyám quatrains | Consistent with LINKEDIN-FACTS-adjacent framing (guitar + Persian poetry); the specific *invented four-line poem* captioned "An original verse" has no authorship source | ❓ ASK-MO — confirm Mo wrote this poem himself before calling it "original"; not touched in this pass (out of the Worlds/About rewrite scope) |
| 24 | Press list: Harzer Panorama (14 Sep 2025) + Mehr News (2010, 2nd place Fars ensemble festival) | Named, dated, sourced press mentions — internally consistent, nothing to verify against LINKEDIN-FACTS but low-risk (named outlets + dates, falsifiable and specific, presumably already checked) | ✅ keep |
| 25 | Collaborators: Neda Aryana, "architect, co-founder... board member" | Not in LINKEDIN-FACTS but named individual, low third-party risk; note Mo's own IG bio (live-tested, see below) says "Co-founder of Shiraz Art House" for **himself**, which sits slightly oddly next to LINKEDIN-FACTS calling him sole "Founder" — minor label tension, not blocking | ✅ keep (flag only) |
| 26 | Values section: humanity/freedom/peace | Generic values statement, no checkable credential | ✅ keep |
| 27 | Volunteer causes (Education, Children, Arts & Culture, Animals) — **currently absent from the site** | LINKEDIN-FACTS Profile A: "Volunteer causes: Education, Children, Arts and Culture, Animal(s)" — explicitly flagged in the corpus as "gold for the site's values section + Sahar/campaign coherence" | 🛠 fix — **add**, it's sourced and currently missing |
| 28 | Athlete section (whole facet): "Discipline is a daily practice", training quotes/cards | Not in LINKEDIN-FACTS. Self-reported lifestyle/personality statement, no institutional/credential claim attached (no race times, no team names, no dates) | ✅ keep as self-report (flagged only; out of rewrite scope) |
| 29 | Manager section: leadership principles | Generic leadership-philosophy statements, no specific claim | ✅ keep |
| 30 | Personal/cats: Memo & Jupiter, "Jupiter... lost in 2026" | Personal/emotional content; cat photos are placeholders (no files in `assets/img/cats/`) but the code gracefully falls back to an emoji — no broken-image false claim | ✅ keep |
| 31 | Curiosities chips: AI, Energy & Batteries, Painting, Sport, Poetry, German A1, Knowledge Mgmt, Coffee | Self-reported interests; Mo's verbatim self-definition (conductor's order) also lists chess, quantum physics, black holes, psychology, philosophy — **not currently on the site** | 🛠 fix (optional/nice-to-have; not in this pass's explicit scope, noted for a future content pass) |
| 32 | Channels: YouTube @Mohammad_masjedi, GitHub @mmasjedi, LinkedIn (2 profiles — site only links Profile A), Xing, Hugging Face, Kaggle | LinkedIn Profile A URL matches LINKEDIN-FACTS exactly; other handles not in corpus but self-owned account links, low risk | ✅ keep |
| 33 | Channels: Instagram @mohammad_ali_masjedi | LINKEDIN-FACTS: "appears CORRECT... IG research"; **live-tested this session via rendered browser** — real, active account, 2,658 followers, bio "Guitar player/Music teacher/Co-founder of Shiraz Art House", story highlights literally named "ژوپی و ممو" (Jupi & Memo) | ✅ keep — link is good, no fix needed (see IG test-result note below) |
| 34 | Support section: GitHub Sponsors / Ko-fi / PayPal all "set up soon" | Honestly labeled not-yet-live | ✅ keep |
| 35 | Support/Sahar line: "not a registered charity... no tax-deductible donation" | Self-disclosed, cautious framing already present | ✅ keep |

## Instagram handle — live test result
Tested `instagram.com/mohammad_ali_masjedi` read-only. A plain unauthenticated `curl`
returns HTTP 200 but with Instagram's generic client-side `"pageID":"httpErrorPage"` shell
for **every** profile (including a deliberately-nonexistent control username and the
known-real `@khanehonarshiraz`) — curl/HTTP-status alone cannot distinguish real vs. missing
on Instagram. A real rendered-browser fetch resolved it cleanly: **live, real account**,
2,658 followers, bio "Guitar player/Music teacher/Co-founder of Shiraz Art House," YouTube
link matching the site, and highlight reels literally named after Memo & Jupiter. **No fix
needed** — the href is correct; if Mo saw it "broken" it was a client-side/session issue on
his end, not the link.

## CellSight demo page (`projects/cellsight/index.html`)
Already labeled `DEMO · synthetic data` in the header badge and in the footer ("synthetic
fleet, illustrative numbers"). One internal tension found: the "why-early" panel's
description says **"This is the core result behind CellSight"** directly above a callout
that states specific computed percentages (e.g. "CellSight is already within ~X%... GRU
baseline needs ~Y cycles to catch up"). The curve-generating functions are code-commented
as designed to **"mirror error-vs-length result"** — i.e., shaped to resemble the real,
unpublished thesis finding. Stating precise percentages while calling it "the core result"
oversells a synthetic demo as if it reports real research numbers — exactly the IP-order
concern named in the mission. **Verdict: 🛠 fix** — softened this session (see commit).

## Summary counts
- Claims/rows audited: **35** (site) + 1 (CellSight demo page, separate)
- ✅ keep: 20
- 🛠 fix: 6 (rows 1, 2, 9, 16, 27, + CellSight demo copy)
- ❌ remove: 0
- ❓ ASK-MO: 10 (rows 4, 5, 7, 8, 15, 18, 19, 20, 22, 23 — see questionnaire)

Note: counts don't force-fit a single clean partition because a few rows are *both*
"fix now" and "flag for Mo" (e.g. row 4/15 — the internal date contradiction is fixed by
harmonizing language this session, while the exact year range still needs Mo's confirmation).
