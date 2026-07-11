# Sponsorship & Support — Setup Guide

Everything code-side is already built (see "What's already built" below). What's
left is a short list of clicks that only Mo can do — account creation, payment
details, and accepting each service's terms. Nobody else may create accounts,
enter payment info, or accept ToS on your behalf, so this guide is written so
you can do each step yourself in a few minutes, in order.

**Pick one handle and use it everywhere** (recommended, for a consistent
look across all your support links):
- **Option A:** your existing handle, `mmasjedi` (matches your GitHub/YouTube-adjacent identity)
- **Option B:** a project-style handle, `roshanalabs` (keeps "supporting Mo's work incl. Sahar" framed as a project, not a personal tip jar)

Either works technically — it's entirely your call. Whichever you pick, use
the same one on Ko-fi, Buy Me a Coffee, PayPal.me and GitHub Sponsors so
supporters recognize it across platforms.

---

## What's already built (nothing left to code)

- **Website:** a "Support the work" section on the live site design (`index.html`,
  `#support`), styled to match the rest of the page. Every button starts in a
  harmless "set up soon" state — nothing broken ships until you fill in a handle.
- **One-place config:** `js/support.js` — the moment you put a handle into one
  of the four fields there, that button goes live automatically (real link,
  badge disappears). Empty field = button stays a harmless soon-badge.
- **FUNDING.yml, staged (not committed):** ready-to-copy files for every
  currently-public repo, in `sponsorship-kit/funding/<repo>/FUNDING.yml`, each
  with exact copy-paste instructions in its header comment. These are not yet
  in the real repos on purpose — an empty/placeholder FUNDING.yml would show a
  "Sponsor" button on GitHub that leads nowhere.

---

## (a) Ko-fi — ~10 minutes — recommended first

Why first: free 0% platform-fee tier (Ko-fi takes nothing; only your payment
processor's normal fee applies), PayPal-linked, instant, no approval wait.

1. Go to **https://ko-fi.com/** and click **Sign Up**.
2. Sign up with email (fewer permissions granted than "Continue with Google/GitHub").
3. Choose your page name/handle when asked (see the handle note above).
4. Go to **Settings → Payments** and connect your PayPal (or Stripe) account —
   you enter your own payment details directly with Ko-fi; nobody else sees them.
5. Confirm you're on the **free 0%-fee** plan (this is the default; the paid
   "Gold" tier is optional and not needed to start).
6. Copy your handle into `js/support.js` → `SUPPORT.kofi = "your-handle"`,
   commit + push. The button goes live within about a minute (same as any
   other site edit).

**Fee:** 0% Ko-fi fee. Your processor (PayPal/Stripe) still takes its normal
cut (roughly 2–3%).

---

## (b) Buy Me a Coffee — ~10 minutes, 5% fee

1. Go to **https://www.buymeacoffee.com/** and click **Start my page**.
2. Sign up, pick your page name/handle.
3. Go to **Settings → Payments** and connect Stripe or PayPal.
4. Copy your handle into `js/support.js` → `SUPPORT.buyMeACoffee = "your-handle"`,
   commit + push.

**Fee:** 5% platform fee + your processor's normal cut.

---

## (c) PayPal.me — ~5 minutes, only if you already have a PayPal account

1. Go to **https://www.paypal.me/** and follow the prompt to claim your link
   (this uses your *existing* PayPal login — it does not create a new PayPal
   account for you).
2. Pick your PayPal.me handle.
3. Copy it into `js/support.js` → `SUPPORT.paypalMe = "your-handle"`,
   commit + push.

If you don't already have a personal/business PayPal account, skip this one —
opening a brand-new PayPal account is a bigger step (bank linking, ID
verification) and isn't covered by this guide; it's the same "you do it
yourself" rule as everything else here.

**Fee:** standard PayPal receiving fee (varies by country/currency).

---

## (d) GitHub Sponsors — ~20–30 minutes hands-on, plus a review wait

1. Go to **https://github.com/sponsors** and click **Set up GitHub Sponsors**
   (also reachable from your profile page → the "Sponsor" area, or
   **Settings → Sponsors**).
2. Fill in your sponsors profile: short bio, what support goes toward (you
   can honestly mention Sahar here too — GitHub's sponsor profile explicitly
   supports "what your sponsorship funds" text).
3. Connect payouts via **Stripe Connect**: bank account + tax residency info.
   Germany is a supported payout country. This is the step where GitHub asks
   tax-residency questions — see the legal note below, this is exactly the
   income-classification trigger.
4. Submit. GitHub reviews new sponsored-account applications before the
   button goes live — this can take a few days and is out of your control
   once submitted.
5. Once approved, the button appears automatically wherever `FUNDING.yml`
   references `github: [your-handle]`, and on your GitHub profile.

**Fee:** GitHub charges 0% platform fee for individual sponsors (Stripe's
normal processing fee still applies).

---

## (e) YouTube — the honest reality

Channel confirmed from the site: **@Mohammad_masjedi**.

**What needs the YouTube Partner Program (YPP) — not available today unless
you already meet the bar:** channel memberships and Super Thanks both require
YPP, which needs **1,000 subscribers + 4,000 public watch hours in the last
12 months** (or **10M Shorts views in 90 days**), plus an AdSense account and
policy compliance. There's no shortcut here — be upfront with yourself about
this gate rather than half-setting-up something that won't activate.

**What you CAN do today, no gate at all:**
1. **Video descriptions** — add your support link (once Ko-fi/BMC is live) to
   the description of any video, e.g. "Support: ko-fi.com/your-handle".
2. **Channel banner / About links** — YouTube Studio → **Customization →
   Basic info → Links** — add your support link here (up to 5 external links
   show under your banner).
3. **Pinned comment** — pin a short comment on a video with a template like
   the one below.

**Pinned-comment template (draft — translate to fa/de if your audience there
would appreciate it):**

> If you enjoyed this and would like to support more of it, there's a small
> tip jar here: [your Ko-fi/BMC link] — completely optional, just here if
> you'd like to. Thanks for watching!

---

## (f) Patreon — ~30 minutes, optional, heavier — consider later

1. Go to **https://www.patreon.com/signup**, create a creator account.
2. Set up at least one membership tier — this needs more thought than the
   others (a recurring content promise, e.g. "early access to X"), so it's
   worth waiting until there's a steady cadence of things to offer.
3. Connect Stripe/PayPal for payout.

**Fee:** roughly 8–12% platform fee depending on plan, plus processor fee.
**Recommendation:** skip for now; revisit once (a)–(d) are running and there's
a natural recurring-content rhythm to build tiers around.

---

## Legal honesty box — read this before turning anything on

In Germany, income from sponsorships or donations — even small, recurring
ones — counts as taxable income, and if it becomes systematic/regular it can
be classified as self-employment activity (freiberuflich/gewerblich). That
triggers the **same Blue Card Zusatzblatt gate** already flagged in the
finance plan: a side activity (Nebentätigkeit) needs approval *before* it
starts, not after the fact. One-off, irregular small gifts are lower-risk but
still technically declarable. **Recommendation:** set the accounts up now —
creating them costs nothing and, with zero income flowing yet, carries no
classification risk — then flip the "receiving" switch on (i.e., actually
put your handle into `support.js` / `FUNDING.yml`) only once the Zusatzblatt
gate clears. That way the rails are ready the day it becomes legal, not
before. One relevant relief once you're past that gate: the
**Kleinunternehmerregelung (§19 UStG)** — if total relevant revenue stays
under the current annual threshold, you're exempt from charging/reporting
VAT (simpler bookkeeping); income tax still applies regardless. This is not
tax advice — confirm your specific situation with a Steuerberater before
real money starts moving.

---

## What was NOT done (by design — hard rails)

- No account was created, no payment or bank detail was entered, no ToS was
  accepted, nothing was posted publicly.
- No `FUNDING.yml` was committed into any real public repo — the handles
  don't exist yet, and a live "Sponsor" button that leads nowhere would look
  broken. They're staged in `sponsorship-kit/funding/<repo>/` instead, ready
  to copy in the moment a handle exists.
- GitHub Pages for Personal-Portfolio was not touched — it's still off,
  and turning it on is a separate Mo-only settings click already tracked in
  your decision queue.

## One thing found during this build, worth knowing

`Personal-Portfolio`'s local checkout and `origin/main` have diverged with
**unrelated histories** (`git merge-base` finds no common ancestor) — most
likely from an earlier history-rewrite/scrub pass on one machine. Rather than
force-merge or rewrite history as part of this sponsorship task, this kit's
commits live on a new branch, `sponsorship-rails`, pushed to origin — content-safe,
nothing destructive, ready to merge once someone reconciles `main` (a
separate repo-hygiene job, not a sponsorship one).
