/* =====================================================================
   support.js — sponsorship / support links, ONE place to fill in.

   Mo: when an account exists, put its handle below and this file wires
   the real link + turns off the "set up soon" badge automatically.
   Leave a handle "" (empty string) and that button stays a harmless
   soon-badge pointing at #support — nothing broken ever ships live.

   No account creation, no payment info, no ToS happens here — this
   file only builds a URL out of a handle you already set up yourself.
   ===================================================================== */
(function () {
  "use strict";

  /* ---- fill in your handle for each service you've set up ---- */
  var SUPPORT = {
    githubSponsors: "",   // e.g. "mmasjedi"  -> github.com/sponsors/<handle>
    kofi:           "",   // e.g. "mmasjedi"  -> ko-fi.com/<handle>
    buyMeACoffee:   "",   // e.g. "mmasjedi"  -> buymeacoffee.com/<handle>
    paypalMe:       ""    // e.g. "mmasjedi"  -> paypal.me/<handle>
  };

  var BUILD = {
    githubSponsors: function (h) { return "https://github.com/sponsors/" + h; },
    kofi:           function (h) { return "https://ko-fi.com/" + h; },
    buyMeACoffee:   function (h) { return "https://www.buymeacoffee.com/" + h; },
    paypalMe:       function (h) { return "https://paypal.me/" + h; }
  };

  function wire() {
    var nodes = document.querySelectorAll("[data-support]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-support");
      var handle = SUPPORT[key];
      if (handle && BUILD[key]) {
        el.href = BUILD[key](handle);
        el.target = "_blank";
        el.classList.remove("is-soon");
        el.removeAttribute("aria-disabled");
      } else {
        el.href = "#support";
        el.removeAttribute("target");
        el.classList.add("is-soon");
        el.setAttribute("aria-disabled", "true");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
