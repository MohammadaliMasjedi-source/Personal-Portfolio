/* =====================================================================
   Mo · MassJedi — interactions
   Vanilla JS. No build step. Degrades gracefully.
   ===================================================================== */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

  /* ---------------- Footer year ---------------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Berlin clock (menu) ---------------- */
  const clockEl = $("#menuClock");
  function tickClock() {
    if (!clockEl) return;
    try {
      clockEl.textContent = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin"
      }) + " CET";
    } catch (e) { /* ignore */ }
  }
  tickClock(); setInterval(tickClock, 30000);

  /* ---------------- Smooth scroll (Lenis, optional) ---------------- */
  let lenis = null;
  if (window.Lenis && !prefersReduced) {
    lenis = new window.Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    document.documentElement.classList.add("lenis");
  }
  function scrollToTarget(target) {
    const el = typeof target === "string" ? $(target) : target;
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.2 });
    else el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  }

  /* ---------------- Anchor links ---------------- */
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) { e.preventDefault(); scrollToTarget("#top"); closeMenu(); return; }
      const el = $(id);
      if (el) { e.preventDefault(); scrollToTarget(el); closeMenu(); }
    });
  });

  /* ---------------- Custom cursor ---------------- */
  if (finePointer) {
    const cursor = $(".cursor");
    const dot = $(".cursor__dot");
    const ring = $(".cursor__ring");
    const label = $(".cursor__label");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const labels = { explore: "explore", open: "open", view: "view", mail: "email", down: "↓", up: "↑" };

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function ring_raf() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(ring_raf);
    })();

    $$("a, button, [data-magnetic], [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const key = el.getAttribute("data-cursor");
        if (key && labels[key]) { cursor.classList.add("is-label"); label.textContent = labels[key]; }
        else cursor.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-hover", "is-label"); label.textContent = "";
      });
    });
    window.addEventListener("mousedown", () => cursor.classList.add("is-down"));
    window.addEventListener("mouseup", () => cursor.classList.remove("is-down"));
    document.addEventListener("mouseleave", () => cursor.style.opacity = "0");
    document.addEventListener("mouseenter", () => cursor.style.opacity = "1");
  }

  /* ---------------- Magnetic elements ---------------- */
  if (finePointer && !prefersReduced) {
    $$("[data-magnetic]").forEach((el) => {
      const strength = 0.4;
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------------- Nav scrolled + scroll progress ---------------- */
  const nav = $("#nav");
  const progress = $(".scroll-progress span");
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("is-scrolled", y > 40);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Burger / menu ---------------- */
  const burger = $("#burger");
  const menu = $("#menu");
  function openMenu() {
    if (!menu) return;
    menu.classList.add("is-open"); menu.setAttribute("aria-hidden", "false");
    nav.classList.add("is-open"); burger.setAttribute("aria-expanded", "true");
    if (lenis) lenis.stop();
  }
  function closeMenu() {
    if (!menu || !menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open"); menu.setAttribute("aria-hidden", "true");
    nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false");
    if (lenis) lenis.start();
  }
  if (burger) burger.addEventListener("click", () =>
    menu.classList.contains("is-open") ? closeMenu() : openMenu());
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  /* ---------------- Split text ---------------- */
  function splitWords(node) {
    const frag = document.createDocumentFragment();
    node.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        const parts = child.textContent.split(/(\s+)/);
        parts.forEach((p) => {
          if (p === "") return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          const w = document.createElement("span"); w.className = "word";
          const inner = document.createElement("span"); inner.textContent = p;
          w.appendChild(inner); frag.appendChild(w);
        });
      } else if (child.nodeType === 1) {
        const clone = child.cloneNode(false);
        clone.appendChild(splitWords(child));
        frag.appendChild(clone);
      }
    });
    return frag;
  }
  $$("[data-split]").forEach((el) => {
    const frag = splitWords(el);
    el.innerHTML = "";
    el.appendChild(frag);
    $$(".word > span", el).forEach((s, i) => { s.style.transitionDelay = (i * 0.035) + "s"; });
  });

  /* ---------------- Reveal on scroll ----------------
     IntersectionObserver drives the smooth reveal; a scroll/resize scan and an
     initial pass act as robustness nets so content is never stuck hidden, even
     if IO is throttled (background tabs, some headless renderers). */
  function initReveal() {
    const items = $$("[data-reveal], [data-split]");
    const reveal = (el) => {
      if (el.classList.contains("is-in")) return;
      const d = el.getAttribute("data-reveal-delay");
      if (d) el.style.transitionDelay = d + "s";
      el.classList.add("is-in");
    };
    const scan = () => {
      const vh = window.innerHeight || 800;
      for (const el of items) {
        if (el.classList.contains("is-in")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) reveal(el);
      }
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) { reveal(entry.target); io.unobserve(entry.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      items.forEach((i) => io.observe(i));
    }
    scan(); // above-the-fold, immediately
    window.addEventListener("scroll", scan, { passive: true });
    window.addEventListener("resize", scan, { passive: true });
    setTimeout(scan, 400);
  }

  /* ---------------- Count-up stats ---------------- */
  function initCounters() {
    const nums = $$("[data-count]");
    if (!nums.length) return;
    const started = new WeakSet();
    const run = (el) => {
      if (started.has(el)) return; started.add(el);
      const target = parseInt(el.getAttribute("data-count"), 10);
      if (prefersReduced) { el.textContent = target; return; }
      const dur = 1400, start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step); else el.textContent = target;
      }
      requestAnimationFrame(step);
      // If rAF is throttled, guarantee the final value lands anyway.
      setTimeout(() => { if (parseInt(el.textContent, 10) !== target) el.textContent = target; }, dur + 700);
    };
    const scan = () => {
      const vh = window.innerHeight || 800;
      for (const el of nums) {
        if (started.has(el)) continue;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) run(el);
      }
    };
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) run(entry.target); });
      }, { threshold: 0.6 });
      nums.forEach((n) => io.observe(n));
    }
    window.addEventListener("scroll", scan, { passive: true });
    scan();
  }

  /* ---------------- Active nav link ---------------- */
  function initActiveNav() {
    const links = $$(".nav__links a");
    const map = {};
    links.forEach((l) => { const id = l.getAttribute("href").slice(1); if (id) map[id] = l; });
    const sections = Object.keys(map).map((id) => $("#" + id)).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const a = map[entry.target.id];
          if (a) a.classList.add("is-active");
        }
      });
    }, { threshold: 0.5 });
    sections.forEach((s) => io.observe(s));
  }

  /* ---------------- Decorative attention grid ---------------- */
  function initAttn() {
    const grid = $("#attnGrid");
    if (!grid) return;
    const cells = 24 * 4;
    for (let i = 0; i < cells; i++) {
      const c = document.createElement("i");
      // brighter toward the "early" (left) cycles, with noise
      const col = i % 24;
      const base = Math.max(0.05, (1 - col / 24) * 0.9);
      c.style.opacity = (base * (0.5 + Math.random() * 0.5)).toFixed(2);
      grid.appendChild(c);
    }
    if (prefersReduced) return;
    setInterval(() => {
      const kids = grid.children;
      for (let k = 0; k < 14; k++) {
        const c = kids[Math.floor(Math.random() * kids.length)];
        if (c) c.style.opacity = (0.08 + Math.random() * 0.85).toFixed(2);
      }
    }, 900);
  }

  /* ---------------- Background energy field ---------------- */
  function initField() {
    const canvas = $("#bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, particles = [], mouse = { x: -999, y: -999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 16000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25 * dpr, vy: (Math.random() - 0.5) * 0.25 * dpr,
          r: (Math.random() * 1.6 + 0.6) * dpr
        });
      }
    }
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; });
    window.addEventListener("mouseout", () => { mouse.x = -999; mouse.y = -999; });

    const linkDist = 130;
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        // gentle mouse pull
        const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 160 * dpr && md > 0) { p.x += (mdx / md) * 0.4; p.y += (mdy / md) * 0.4; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,250,60,0.55)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist * dpr) {
            const a = (1 - dist / (linkDist * dpr)) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(120,200,255," + a.toFixed(3) + ")";
            ctx.lineWidth = dpr * 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener("resize", resize);
    if (!prefersReduced) frame();
    else { // draw one static frame
      for (const p of particles) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,250,60,0.4)"; ctx.fill();
      }
    }
  }

  /* ---------------- Soon links: prevent dead navigation ---------------- */
  $$('a.is-soon, a[href="#"]').forEach((a) => {
    if (a.getAttribute("href") === "#") {
      a.addEventListener("click", (e) => { e.preventDefault(); });
    }
  });

  /* ---------------- Hero role cycler ---------------- */
  function initRoleCycle() {
    const el = $("#roleCycle");
    if (!el) return;
    const span = el.querySelector("span");
    if (!span || prefersReduced) return; // keep first role static
    const roles = ["an Engineer", "an Artist", "an Athlete", "a Manager", "a Poet", "a Builder", "a Cat-dad"];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % roles.length;
      el.classList.add("swapping");
      setTimeout(() => { span.textContent = roles[i]; el.classList.remove("swapping"); }, 460);
    }, 2300);
  }

  /* ---------------- Poem language toggle ---------------- */
  function initPoem() {
    const btns = $$(".poem-toggle__btn");
    if (!btns.length) return;
    btns.forEach((b) => b.addEventListener("click", () => {
      const lang = b.getAttribute("data-lang");
      btns.forEach((x) => x.classList.toggle("is-active", x === b));
      $$(".poem").forEach((p) => p.classList.toggle("is-active", p.classList.contains("poem--" + lang)));
    }));
  }

  /* ---------------- Gallery lightbox ---------------- */
  function initLightbox() {
    const lb = $("#lightbox");
    if (!lb) return;
    const img = lb.querySelector("img");
    const closeBtn = lb.querySelector(".lightbox__close");
    const open = (src, alt) => { img.src = src; img.alt = alt || ""; lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); if (lenis) lenis.stop(); };
    const hide = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); img.src = ""; if (lenis) lenis.start(); };
    $$(".art").forEach((a) => a.addEventListener("click", () => {
      const im = a.querySelector("img");
      if (im && !im.classList.contains("is-missing") && im.getAttribute("src")) open(im.src, im.alt);
    }));
    if (closeBtn) closeBtn.addEventListener("click", hide);
    lb.addEventListener("click", (e) => { if (e.target === lb) hide(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
  }

  /* ---------------- Preloader → boot ---------------- */
  function boot() {
    initReveal();
    initCounters();
    initActiveNav();
    initAttn();
    initField();
    initRoleCycle();
    initPoem();
    initLightbox();
  }

  function runPreloader() {
    const pre = $("#preloader");
    const count = $("#preCount");
    const bar = $(".preloader__bar span");
    if (!pre) { boot(); return; }

    const finish = () => {
      pre.classList.add("is-done");
      document.body.style.overflow = "";
      setTimeout(boot, 120);
    };

    if (prefersReduced) { if (count) count.textContent = "100"; if (bar) bar.style.width = "100%"; finish(); return; }

    document.body.style.overflow = "hidden";
    const dur = 1500; const start = performance.now();
    let done = false;
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      const val = Math.round(eased * 100);
      if (count) count.textContent = val;
      if (bar) bar.style.width = val + "%";
      if (p < 1) requestAnimationFrame(step);
      else if (!done) { done = true; setTimeout(finish, 250); }
    }
    requestAnimationFrame(step);
    // hard fallback
    setTimeout(() => { if (!done) { done = true; finish(); } }, 4000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runPreloader);
  } else {
    runPreloader();
  }
})();
