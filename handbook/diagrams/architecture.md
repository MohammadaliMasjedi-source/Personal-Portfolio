# Architecture diagrams

Real diagrams of the `Personal-Portfolio` repo. Mermaid renders on GitHub and is plain text
(version-controlled + easy to edit).

---

## 1 · Component / load map
How the static files connect and what loads at runtime. Reflects the real `<head>` links and
the script order (`i18n.js` → `main.js` → `polish.js`) in `index.html`.

```mermaid
flowchart TD
  subgraph Repo["Repo (static files — no build)"]
    HTML["index.html<br/>all content + ~20 sections"]
    CSS["css/style.css<br/>design system + RTL"]
    I18N["js/i18n.js<br/>FA + DE dictionaries<br/>(loads FIRST)"]
    MAIN["js/main.js<br/>canvas · cursor · reveal ·<br/>counters · preloader · lightbox"]
    POLISH["js/polish.js<br/>in-view nav highlight"]
    IMG["assets/img/<br/>portrait · og · gallery · worlds"]
    CELL["projects/cellsight/index.html<br/>(bundled demo, not linked yet)"]
  end

  subgraph CDN["External (all optional)"]
    FONTS["Google Fonts<br/>Space Grotesk · Inter · Instrument Serif · Vazirmatn"]
    LENIS["Lenis smooth-scroll CDN"]
    YT["youtube-nocookie.com<br/>(only after a click)"]
  end

  HTML --> CSS
  HTML --> IMG
  HTML -->|1st| I18N
  HTML -->|2nd| MAIN
  HTML -->|3rd| POLISH
  HTML -.-> FONTS
  HTML -.-> LENIS
  MAIN -.->|on video click| YT
  I18N -->|swaps data-i18n text<br/>+ dir=rtl for fa| HTML
  MAIN -->|reads translated DOM,<br/>splits + reveals| HTML
```

---

## 2 · Runtime boot sequence
Step-by-step of what happens when the page opens — including the reduced-motion branch.
Mirrors `runPreloader()` → `boot()` and the `prefersReduced` guards in `js/main.js`.

```mermaid
sequenceDiagram
  participant B as Browser
  participant I as i18n.js
  participant M as main.js
  participant P as polish.js

  B->>I: load (first script)
  I->>I: read localStorage["mam-lang"]
  alt lang != en
    I->>B: swap every data-i18n text
    I->>B: set dir=rtl + Vazirmatn (fa)
  end
  B->>M: load (second script)
  M->>M: runPreloader() count 0→100%
  alt prefers-reduced-motion
    M->>B: snap preloader to 100%, static field
  else full motion
    M->>B: animate preloader, then boot()
  end
  M->>B: boot(): field · cursor · reveal · counters ·<br/>menu · lightbox · role-cycle · tilt
  B->>P: load (third script)
  P->>B: on scroll, mark current nav link
```

---

## 3 · Deploy flow
From an edit to a live page. Mirrors `.github/workflows/static.yml`.

```mermaid
flowchart LR
  EDIT["Edit index.html / css / js<br/>(bump ?v=N)"] --> COMMIT["git commit"]
  COMMIT --> PUSH["git push → main"]
  PUSH --> GHA["GitHub Actions<br/>static.yml"]
  GHA --> ART["upload-pages-artifact<br/>(whole repo root)"]
  ART --> PAGES[("GitHub Pages")]
  PAGES --> LIVE["mohammadalimasjedi-source.github.io/<br/>Personal-Portfolio/"]
  NJK[".nojekyll<br/>(serve folders as-is)"] -.-> PAGES
```
