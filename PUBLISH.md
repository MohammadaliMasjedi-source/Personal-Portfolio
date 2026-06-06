# How to put the site online (simple steps)

Your site is **already live** here:
**https://mohammadalimasjedi-source.github.io/Personal-Portfolio/**

---

## How an update goes live (automatic)

1. Change any file (text, a photo, anything).
2. Save it. The auto-sync commits and pushes to GitHub for you (or double-click `Sync.bat`).
3. GitHub deploys it on its own. About **1 minute** later, the live site shows the change.

You never run a build. Edit → save → wait one minute → done.

## How to check it worked

- Open the link above. Add `?v=2` to the end to skip the old cached page.
- Or look for the green check mark here:
  https://github.com/MohammadaliMasjedi-source/Personal-Portfolio/actions
  Green = live. Red = something failed (open it to see why).

## Change your photo later

- Put a **square** photo (same width and height) at `assets/img/portrait.jpg`.
- Save. It auto-deploys like any other change.

## If the site ever goes offline ("404" or "private")

GitHub Pages only works when the repo is **public**. Make it public again:

```
gh repo edit MohammadaliMasjedi-source/Personal-Portfolio --visibility public --accept-visibility-change-consequences
```

Or on the website: GitHub → your **Personal-Portfolio** repo → **Settings** →
scroll to **Danger Zone** → **Change visibility** → **Make public**.

That's the whole thing. 🌐
