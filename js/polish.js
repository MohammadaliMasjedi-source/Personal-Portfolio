/* polish.js — small professional touches that stay out of main.js.
   Highlights the in-view section in the primary nav. Reads element positions
   on scroll (robust with the smooth-scroll library). Dependency-free, silent. */
(function () {
  "use strict";
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );
  if (!links.length) return;

  var targets = links
    .map(function (a) {
      return { a: a, el: document.getElementById((a.getAttribute("href") || "").slice(1)) };
    })
    .filter(function (t) { return t.el; });
  if (!targets.length) return;

  function update() {
    var line = window.innerHeight * 0.35;   // "current" once a section's top passes 35% down
    var current = null, best = -Infinity;
    for (var i = 0; i < targets.length; i++) {
      var top = targets[i].el.getBoundingClientRect().top;
      // the section you're in = the one whose top is above the line and closest to it
      // (order-independent: nav order need not match DOM order)
      if (top <= line && top > best) { best = top; current = targets[i]; }
    }
    for (var j = 0; j < links.length; j++) links[j].classList.remove("is-current");
    if (current) current.a.classList.add("is-current");
  }

  // Direct (un-throttled) — the work is 5 rect reads, negligible per frame.
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  document.addEventListener("DOMContentLoaded", update);
  update();
})();
