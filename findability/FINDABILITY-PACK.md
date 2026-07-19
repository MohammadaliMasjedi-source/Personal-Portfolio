# FINDABILITY ACTION PACK — make your name Google-findable in one sitting

Prepared for Mo. **Everything here is your own hand.** I only wrote the content and the steps.
I did NOT create any account, publish anything, post anything, or make anything public. Nothing
here is live. You do each account step and each post yourself, by clicking.

راهنما: هر قدم را خودت با دست انجام می‌دهی. من فقط متن و راهنما را آماده کرده‌ام — هیچ‌چیز منتشر نشده است.

---

## 0. Your name — decide once, use everywhere

Using ONE primary name everywhere is the single biggest findability win. Pick it, then paste the
same spelling into every profile.

- **PRIMARY (use this as your author name, page title, and profile name):**
  **Mohammadali Masjedi**

- **Also known as** (paste this whole list into ORCID "Other names" and into profile bios so
  Google links all of them to one person):
  - Mohammad Ali Masjedi
  - Mohammad Masjedi
  - Mo Masjedi
  - Mo Mass Jedi  (art only)
  - MoMas
  - محمدعلی مسجدی
  - محمد مسجدی
  - مو مسجدی

Rule: the byline on papers and the name on every profile = **Mohammadali Masjedi** (one word
"Mohammadali"). The rest are only "also known as", never the main name.

---

## 1. The checklist (each step: platform · action · what to paste · time · safe-or-gated)

Legend:
- **DO-NOW-safe** = content is ready and honest, you can do it today. (The account/post click is still your hand.)
- **GATED** = wait for a gate: **[supervisor]** = thesis supervisor must OK the encoder note first;
  **[voice]** = the article needs your own voice pass first; **[thesis]** = do after exams + thesis, not now.

> Reminder for every "GATED [thesis]" row: **thesis + exams come first.** These are here so the
> plan is complete, not so you do them this week.

---

### Step 1 — ORCID (your researcher ID) · ~8 min · DO-NOW-safe
**Platform:** https://orcid.org/register
**Why:** a free, permanent ID that ties every paper and profile to the one real you. A different
"Mohammad (Moe) Masjedi" already exists on ORCID (0009-0000-0510-2821) — registering as
**Mohammadali Masjedi** secures your exact name.
**Action:** register (account creation = your hand). Then fill:
- **Published name:** `Mohammadali Masjedi`
- **Also known as / Other names:** paste the full "also known as" list from section 0.
- **Biography (paste):**
  `Classical guitarist, teacher and composer, and M.Sc. Informatics student at TU Clausthal (ISSE), working on machine-learning methods for battery health prediction. Software developer at SincoTec.`
- **Websites:** add `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`
- **Keywords:** machine learning; battery RUL; time series; classical guitar; software engineering
- Leave "Works" empty for now — you add the encoder note here **after** it is public (see Step 4).

---

### Step 2 — GitHub profile README · ~6 min · DO-NOW-safe (biggest quick win)
**Platform:** https://github.com/new
**Why:** gives your GitHub a real "face" that ranks for your name. Content is written and every
link in it was live-checked.
**Action:**
1. New repo, name **exactly** `MohammadaliMasjedi-source` (same as your username → GitHub shows
   "You found a secret!"). Public, add a README.
2. Open README.md → paste the full content of
   `D:/Mo.MassJedi/Git Mo/open-source-contributions/drafts/name-pack/PROFILE-README.md`
   (delete the HTML comment block at the top first). Commit.
3. Same page → "Edit profile":
   - **Website:** `https://mohammadalimasjedi-source.github.io/Personal-Portfolio/`
   - **Bio:** `Classical guitarist & composer · software developer at SincoTec · M.Sc. Informatics @ TU Clausthal (ML for battery health)`
4. "Customize your pins" → pin **Personal-Portfolio**, **Sahar**, **rpi-camera-af**.
**Full step-by-step already written:** `…/name-pack/APPLY-15MIN.md`.

---

### Step 3 — Zenodo account (get a DOI ready) · ~5 min to sign in · DO-NOW-safe (upload itself is GATED, Step 4)
**Platform:** https://zenodo.org  → "Log in" with GitHub.
**Why:** Zenodo gives your note a permanent **DOI** so it is citable and findable even before/without arXiv.
**Action now (safe):** sign in with your GitHub account and connect it. **Do not upload yet** — the
upload is the gated Step 4.

---

### Step 4 — Zenodo: publish the encoder note · ~15 min · **GATED [supervisor]**
**Platform:** https://zenodo.org/uploads/new
**Gate:** the note reuses your **thesis MIX-100 protocol**, so your thesis supervisor must say OK
before it goes public. Until then, do NOT upload. (Same gate applies to arXiv.)
**When the gate is open, paste this ready metadata:**

```
Upload type:      Publication  →  Preprint   (or "Report / Technical note")
Title:            Cheap Adaptation Does Not Rescue a Time-Series Foundation Model for
                  Early-Cycle Battery RUL: A From-Scratch Transformer Wins on Accuracy
                  and ~100x on Cost
Authors:          Masjedi, Mohammadali
Affiliation:      TU Clausthal (ISSE)     ⚠ see note below
Language:         English
License:          Creative Commons Attribution 4.0 International (CC-BY-4.0)
Keywords:         battery remaining useful life; RUL; early-cycle prediction; lithium-ion;
                  time-series foundation model; MOMENT; LoRA; low-rank adaptation; transformer;
                  negative result; MIX-100; BatteryML
Related/identifiers:
   isSupplementedBy  https://github.com/MohammadaliMasjedi-source/battery-foundation-encoder  (URL / GitHub)
   (after arXiv:)    add the arXiv ID as "isIdenticalTo" or "isVersionOf"
```

**Description (paste into the Zenodo description box):**
> We ask whether cheap low-rank adaptation (LoRA) of a pre-trained time-series foundation model
> (MOMENT-1) can beat a small from-scratch transformer for early-cycle battery remaining-useful-life
> (RUL) prediction on a small, multi-chemistry dataset (MIX-100: 205 train / 137 test cells, six
> sources). Under one identical protocol, the LoRA-adapted foundation model is less accurate than
> the from-scratch transformer at every input length, and even worse than its own frozen probe —
> with this little labelled data it overfits rather than adapts. The compact transformer
> (~0.52 M parameters) wins on accuracy and on every cost axis (~68x fewer parameters, ~70x smaller
> on disk, ~100x faster per cell). This is a clean, honest negative result against a
> "foundation-models-everywhere" expectation, and it reinforces the case for a task-specific model.

**Files to upload** (from `battery-foundation-encoder/paper/`): `main.pdf` (the 6-page note).
Optionally also attach `main.tex` + `references.bib` + `main.bbl` + `figures/`.

**⚠ One thing to fix before you upload — affiliation:** the paper's LaTeX (`paper/main.tex`)
currently prints **"Technische Universität Chemnitz"**, but your thesis and every profile say
**TU Clausthal (ISSE)**. These disagree. Decide the correct one and make the paper + Zenodo
match before publishing. (I did not change the paper.)

**License note:** the repo is dual-licensed — code = MIT, the manuscript = CC BY 4.0. For the
Zenodo record (the note itself), choose **CC-BY-4.0**, which matches the manuscript license.

---

### Step 5 — arXiv: the same note · ~1 hour · **GATED [supervisor]**
**Platform:** https://arxiv.org/user/
**Gate:** same supervisor OK as Step 4. Also, a first `cs.LG` submission needs an **endorsement**
(ask supervisor or A. Hebenbrock, or register with your TU Chemnitz email which can auto-endorse).
**Action (when gate open):** New submission → License **CC BY 4.0** (to match the repo) →
Category `cs.LG` (optional cross-list `eess.SY` / `stat.ML`) → upload `main.tex`, `references.bib`,
`main.bbl`, `figures/fm_lora_3way_MIX.pdf` → title + abstract from `main.tex` → author
**Mohammadali Masjedi**.
**Full exact steps already written:** `battery-foundation-encoder/SUBMIT.md`.
> Note: Zenodo (Step 4) and arXiv are both fine; arXiv gives the community stamp, Zenodo gives a
> DOI. You can do Zenodo first (faster, no endorsement) and arXiv after.

---

### Step 6 — Google Scholar profile · ~10 min · half-now / half-GATED
**Platform:** https://scholar.google.com  → sign in → "My profile".
**Why:** the #1 place people look for a researcher; a Scholar profile ranks fast for your name.
**Action:**
- **DO-NOW-safe:** create the profile now. Name `Mohammadali Masjedi`; affiliation `TU Clausthal (ISSE)`;
  verify with your **TU Chemnitz email**; add interests: `battery health`, `remaining useful life`,
  `time series`, `machine learning`.
- **GATED [supervisor]:** the encoder note only appears as a "work" here **after** it is on
  arXiv/Zenodo (Step 4/5). Add it then.
- Set the profile to **Public**.

---

### Step 7 — ResearchGate + Academia.edu · ~10 min · half-now / half-GATED
**Platform:** https://www.researchgate.net  and  https://www.academia.edu
**Why:** two more high-ranking profile pages for your name; both let you list the note later.
**Action:**
- **DO-NOW-safe:** create each profile as **Mohammadali Masjedi**, TU Clausthal (ISSE). Bio =
  the ORCID biography from Step 1. Add your website link.
- **GATED [supervisor]:** upload the encoder note only after Step 4/5 (or link the DOI). Do NOT
  upload the PDF before the supervisor OK.
- Pick ONE as primary (ResearchGate ranks a bit better for STEM) so you keep it updated.

---

### Step 8 — LinkedIn article · ~20 min · **GATED [voice]**
**Platform:** LinkedIn → "Write article".
**Why:** LinkedIn articles rank well and reach people; good for a plain-language write-up of the
negative result once the note is public.
**Gate:** this is an **article**, so it needs **your own voice pass first** — the honest,
say-what-seems-true framing in your words. Also don't post the science write-up until the note is
public (supervisor gate). So: **[voice] + [supervisor]**.
**Meanwhile (DO-NOW-safe):** update your LinkedIn **profile** — name `Mohammadali Masjedi`,
headline `Classical guitarist & composer · Software developer at SincoTec · M.Sc. Informatics @ TU Clausthal`,
and put your website in the "Website" field. That profile edit needs no gate.

---

### Step 9 — Medium · ~15 min · **GATED [voice]**
**Platform:** https://medium.com
**Why:** English long-form that ranks and can carry a "what I learned" post pointing back to your site.
**Gate:** article = **[voice]** pass first (your framing, honest, cited). If the topic is the
encoder note, also **[supervisor]**.
**DO-NOW-safe part:** create the account and set the profile bio + website link now; write/post later.

---

### Step 10 — Virgool (Persian) · ~15 min · **GATED [voice]**
**Platform:** https://virgool.io
**Why:** the Persian-language surface — this is how "محمدعلی مسجدی" starts to rank in Persian.
**Gate:** article = **[voice]** pass first, in Persian, your own words.
**DO-NOW-safe part:** create the account, set display name `محمدعلی مسجدی` and bio + website link now.
> Tip: a short Persian post about your guitar/music is a **safe, non-gated** topic (no supervisor
> gate, still needs your voice) and it directly feeds the Persian-name ranking.

---

### Step 11 — Fix Kaggle / Hugging Face handles · ~10 min · DO-NOW-safe (a decision, not a post)
**Platform:** https://kaggle.com  and  https://huggingface.co
**Why:** your site currently links `kaggle.com/mmasjedi` and `huggingface.co/mmasjedi`, but memory
says the `mmasjedi` handle may **not** be yours. Linking the wrong account points searchers at the
wrong person and hurts your identity graph.
**Action (decide, your hand):**
- If those `mmasjedi` accounts **are** yours → keep, and add them to your site's JSON-LD `sameAs`.
- If they are **not** yours → create clean accounts under a handle close to your name (e.g.
  `mohammadalimasjedi`), and remove the wrong links from the site.
Either way: make the site links and the JSON-LD agree. (Also note: your YouTube handle
`@Mohammad_masjedi` drops the "ali" — known, low priority, changing handles is disruptive.)

---

### Step 12 — Wikidata anchor · already in progress · DO-NOW-safe (your publish click)
**Platform:** https://www.wikidata.org
**Why:** a Wikidata item with your name variants + `sameAs` is the strongest single signal toward a
Google Knowledge Panel.
**Status:** the **SAH (House of Art Shiraz)** Wikidata item is already drafted and ready in
`wikipedia-presence/wiki-sah/` (`WIKIDATA-ITEM-READY.md`, `WIKIDATA-PUBLISH-GUIDE.md`,
`WIKIDATA-QUICKSTATEMENTS.md`). Follow that guide to publish it (your hand).
**Person item (later):** a Wikidata item for *you as a person* is the long game and usually needs
some independent coverage first — keep it for after the profiles + note are live. When ready, its
name variants = the section 0 list, and `sameAs` = ORCID + Scholar + GitHub + website.

---

## 2. The second paper (know it exists, it is not ready)

The **H2H paper** — *"When the Ruler Picks the Winner: A Convention-Controlled Head-to-Head of Deep
Ensembles and a Diffusion Baseline for Early-Cycle Battery RUL"* — is a **second Zenodo/arXiv
candidate**. It is **not ready**: it is still a Markdown draft (v0.2) and is **GATED on**:
1. **Your 4 voice lines** — the `[MO-VOICE]` spots where your framing is needed
   (`Battery-Thesis/experiments/h2h_diffbatt/paper/DRAFT-pioneer-h2h.md`, lines ~34, ~101, ~161, ~187).
2. **LaTeX conversion** — it must be turned into a LaTeX paper like the encoder note before upload.
Citations are already verified. Do this one **after** the encoder note is out and after exams.

---

## 3. Recommended order + one-sitting plan

**One sitting (~45–60 min), all DO-NOW-safe, no gates:**
1. **GitHub profile README + pins + fields** (Step 2) — biggest quick win, ~6 min.
2. **ORCID** register + name variants (Step 1) — ~8 min.
3. **Google Scholar** profile, public (Step 6, the create part) — ~10 min.
4. **ResearchGate** profile (Step 7, the create part) — ~8 min.
5. **LinkedIn profile** name + headline + website (Step 8, profile part) — ~5 min.
6. **Kaggle / HF** ownership decision + fix links (Step 11) — ~10 min.
7. **Zenodo** sign in with GitHub, connect (Step 3) — ~3 min.

That alone puts 5–6 strong, consistent "Mohammadali Masjedi" pages on the web, all linking to your
site. That is what makes the name findable.

**Waiting on the supervisor OK (do the moment they say yes):**
- Zenodo upload of the encoder note (Step 4) → then arXiv (Step 5) → then add it to ORCID +
  Scholar + ResearchGate (Steps 1/6/7).

**Needs your voice pass (write when you have an hour):**
- LinkedIn article (Step 8), Medium (Step 9), Virgool (Step 10). A **Persian music post on Virgool**
  is the easiest safe first article and it feeds the Persian-name ranking.

**Long game (after exams + thesis):**
- H2H paper (section 2), Wikidata **person** item (Step 12), the bare "Mohammad Masjedi" ranking.

---

*Everything in this pack is your own hand. I prepared the content and the steps only — I created no
account, published nothing, posted nothing, and made nothing public. Thesis + exams come first;
the encoder note waits for your supervisor; the articles wait for your voice.*
