/* =====================================================================
   i18n.js — Persian / English / Deutsch for the site.
   English is the source text already in the HTML. This file holds the
   Persian (fa) and German (de) translations, keyed by data-i18n="key".

   How it works (and why it won't break the animations):
   - This script runs BEFORE main.js. It swaps the text first, THEN main.js
     splits/reveals it. So animations apply to the translated text.
   - Switching language stores the choice and reloads the page once — clean,
     no half-animated state.
   To translate more of the site: give an element  data-i18n="some.key"
   and add that key below under fa and de.
   ===================================================================== */
(function () {
  "use strict";

  var STORE = "mam-lang";
  var RTL = { fa: true };
  var LABEL = { en: "EN", fa: "فا", de: "DE" };
  var ORDER = ["en", "fa", "de"];

  /* ---- translations (en is the HTML source, so only fa + de here) ---- */
  var DICT = {
    fa: {
      /* nav + menu */
      "nav.worlds": "جهان‌ها", "nav.engineer": "مهندس", "nav.artist": "هنرمند",
      "nav.poet": "شاعر", "nav.about": "درباره", "nav.arthouse": "خانهٔ هنر", "nav.cta": "تماس",
      "menu.worlds": "جهان‌ها", "menu.engineer": "مهندس", "menu.artist": "هنرمند",
      "menu.athlete": "ورزشکار", "menu.arthouse": "خانهٔ هنر", "menu.cinema": "سینما",
      "menu.music": "موسیقی", "menu.poet": "شاعر", "menu.contact": "تماس",
      "menu.loc": "کلاوستال‑سلرفلد، آلمان",

      /* hero */
      "hero.eyebrow": "محمدعلی مسجدی — کلاوستال، آلمان",
      "hero.title": "یک ذهن، زندگی‌های بسیار.",
      "hero.sub": "مهندس به تربیت، هنرمند به انگیزه، ورزشکار به انضباط و شاعر در دل — و خدمتگزارِ دو گربه. حاضر نیستم در یک جعبه زندگی کنم.",
      "hero.cta1": "جهان‌هایم را ببین", "hero.cta2": "تماس", "hero.scroll": "پایین",

      /* worlds */
      "worlds.kicker": "(۰۰) — جهان‌های محمدعلی",
      "worlds.title": "چند رو، یک انسان.",
      "worlds.lead": "یک کارگاه، یک آزمایشگاه، یک پیست، یک صحنه، یک صفحه — دری را برگزین.",
      "worlds.engineer.h": "مهندس", "worlds.engineer.p": "هوش مصنوعی و هوشمندیِ باتری. پژوهشی که به کار می‌آید.",
      "worlds.artist.h": "هنرمند", "worlds.artist.p": "آنجا که منطق کراواتش را شل می‌کند. میدانِ بازیِ تصویر.",
      "worlds.arthouse.h": "خانهٔ هنر شیراز", "worlds.arthouse.p": "خانه‌ای مستقل برای هنر در شیراز.",
      "worlds.cinema.h": "سینما", "worlds.cinema.p": "تصویر، راهی برای اندیشیدن دربارهٔ انسان.",
      "worlds.music.h": "موسیقی و آواز", "worlds.music.p": "از گیتار کلاسیک تا تلاوتِ آوازی.",
      "worlds.human.h": "انسان", "worlds.human.p": "دو گربه، کنجکاویِ بزرگ و زندگی بیرون از ساعت.",

      /* about */
      "about.kicker": "— درباره",
      "about.title": "حاضر نیستم در یک جعبه بگنجم.",
      "about.lead": "من محمدعلی «مو» مسجدی‌ام — از ایران، اکنون در کوهستانِ هارتسِ آلمان.",
      "about.p1": "روزها مدل‌های یادگیری ماشین می‌سازم که آیندهٔ باتری‌ها را می‌خوانند. اما انسان بیش از یک عنوانِ شغلی است. نقاشی و آفرینش می‌کنم، تمرین و رقابت می‌کنم، رهبری و سازمان‌دهی می‌کنم، و وقتی معادله‌ها خاموش می‌شوند، شعر می‌نویسم.",
      "about.p2": "رشتهٔ پیونددهندهٔ همه‌چیز یکی است: کنجکاوی، پیشه‌وری و این باورِ سرسخت که چیزهای جالب آنجا رخ می‌دهند که رشته‌ها به هم می‌رسند.",

      /* === NEW cultural sections === */
      "ah.kicker": "خانهٔ هنر شیراز",
      "ah.title": "خانه‌ای برای هنر.",
      "ah.lead": "هم‌بنیان‌گذاری و گردانندگیِ صحنه‌ای برای هنر و فیلمِ مستقل در شیراز.",
      "ah.p1": "خانهٔ هنر شیراز فضایی فرهنگیِ مستقل است — گالری، صحنه‌ای برای موسیقی و تئاتر، کافه و کتاب‌فروشی زیر یک سقف. این مکان پدید آمد تا به هنرمندانِ جوان جایی برای نمایشِ کارشان بدهد و مردم را گردِ فرهنگ کنار هم آورد.",
      "ah.p2": "به‌عنوان هم‌بنیان‌گذارِ خانهٔ هنر شیراز — و حدودِ شش سال مدیرعاملِ آن (۱۳۹۰–۱۳۹۹) — در برپاییِ بسترِ فرهنگی و هنری سهیم بودم؛ امکانِ ساخت و پخشِ فیلم‌های کوتاه و برنامه‌های مستقلِ هنری را برای هنرمندان فراهم آوردم. برای من این هرگز فقط یک ساختمان نبود؛ صحنه‌ای بود برای هنرمندانِ جوان.",
      "ah.c1.h": "گالری", "ah.c1.p": "نمایشگاه برای هنرمندانِ شناخته‌شده و نوظهور.",
      "ah.c2.h": "صحنه", "ah.c2.p": "موسیقیِ زنده، تئاتر و اجرا.",
      "ah.c3.h": "کافه و کتاب", "ah.c3.p": "جایی برای دیدار، خواندن و گفت‌وگو.",

      "cin.kicker": "سینما و فیلم",
      "cin.title": "تصویر، راهی برای اندیشیدن.",
      "cin.lead": "در سنتِ سینمای ایران — صبور، انسانی و نگران به زندگیِ روزمره.",
      "cin.p1": "سینما به قلبِ کارِ من نزدیک است. به تصاویری دل‌بسته‌ام که به‌جای پاسخ‌های آسان، پرسش می‌آفرینند؛ تصویرهایی که با توجه و سادگی به انسان می‌نگرند.",
      "cin.p2": "در روحِ سینمای عباس کیارستمی کار می‌کنم — فیلم‌هایی صبور که از نزدیک به زندگیِ روزمره می‌نگرند و در کوچک‌ترین لحظه‌های انسانی معنا می‌جویند.",

      "mus.kicker": "موسیقی و آواز",
      "mus.title": "از سیم تا کلام.",
      "mus.lead": "از گیتار کلاسیک تا کلامِ آوازی.",
      "mus.p1": "نوازنده و آموزگارِ گیتار کلاسیک‌ام با بیش از هجده سال تجربه. نوازندگی‌ام مقامِ نخستِ المپیادِ هنریِ کشور (موسیقی) و مقامِ دومِ جشنوارهٔ ملیِ گیتار را برایم به ارمغان آورد، و کارشناسیِ ارشدِ پژوهشِ هنر دارم. در آموزشگاهِ موسیقیِ فروغ تدریس کرده‌ام و عضوِ شورای سیاست‌گذاریِ موسیقیِ استانِ فارس بوده‌ام.",
      "mus.p2": "همچنین در تلاوتِ قرآن با سبکی آوازی شناخته می‌شوم — به‌کارگیریِ صدا و نفَس برای حملِ متن با احساس. این بخشی از همان عشق به صدا و معناست.",

      "col.kicker": "آدم‌ها و هم‌کاران",
      "col.title": "کارِ خوب هرگز تنها ساخته نمی‌شود.",
      "col.lead": "بخشِ بزرگی از این کار مشترک است.",
      "col.p1": "ندا آریانا هم‌کارِ نزدیک در فعالیت‌های فرهنگیِ پیرامونِ خانهٔ هنر شیراز است — با هم به هنری باور داریم که ذهن‌ها را می‌گشاید و مردم را گرد هم می‌آورد.",

      "press.kicker": "گفت‌وگوها و رسانه",
      "press.title": "گفت‌وگوها و حضور در رسانه.",
      "press.lead": "گفت‌وگوها، گزارش‌ها و اشاره‌ها.",
      "press.p1": "سیاهه‌ای روبه‌رشد از گفت‌وگوها و پوشش رسانه‌ای — هم گفت‌وگوهایی که داشته‌ام و هم گفت‌وگوهایی که خود با هنرمندانِ دیگر پیش برده‌ام.",

      "val.kicker": "ارزش‌ها",
      "val.title": "بر چه می‌ایستد.",
      "val.lead": "انسانیت، آزادیِ بیان و صلح.",
      "val.p1": "در سراسرِ هنر و مهندسی، همان ارزش‌ها برقرارند: احترام به کرامتِ انسان، آزادیِ آفریدن و گفتن، و این باور که فرهنگ می‌تواند آنجا که سیاست دیوار می‌سازد، پل بسازد.",

      /* contact + footer */
      "contact.kicker": "— تماس",
      "contact.title": "بیا چیزی بسازیم، آن‌سوی مرزها.",
      "contact.sub": "پژوهش، هنر، یک پروژه، یا فقط یک گفت‌وگوی خوب — صندوقِ پیامم باز است.",
      "footer.tagline": "یک ذهن، زندگی‌های بسیار · ساخته‌شده با قصد"
    },

    de: {
      "nav.worlds": "Welten", "nav.engineer": "Ingenieur", "nav.artist": "Künstler",
      "nav.poet": "Dichter", "nav.about": "Über mich", "nav.arthouse": "Art House", "nav.cta": "Kontakt",
      "menu.worlds": "Welten", "menu.engineer": "Ingenieur", "menu.artist": "Künstler",
      "menu.athlete": "Sportler", "menu.arthouse": "Art House", "menu.cinema": "Kino",
      "menu.music": "Musik", "menu.poet": "Dichter", "menu.contact": "Kontakt",
      "menu.loc": "Clausthal-Zellerfeld, DE",

      "hero.eyebrow": "Mohammad Ali Masjedi — Clausthal, Deutschland",
      "hero.title": "Ein Geist, viele Leben.",
      "hero.sub": "Ingenieur aus Ausbildung, Künstler aus Impuls, Sportler aus Disziplin, Dichter im Herzen — und treuer Diener zweier Katzen. Ich weigere mich, in einer einzigen Schublade zu leben.",
      "hero.cta1": "Meine Welten entdecken", "hero.cta2": "Kontakt", "hero.scroll": "Scrollen",

      "worlds.kicker": "(00) — Die Welten von Mo",
      "worlds.title": "Viele Seiten, ein Mensch.",
      "worlds.lead": "Ein Atelier, ein Labor, eine Bahn, eine Bühne, eine Seite — wähle eine Tür.",
      "worlds.engineer.h": "Ingenieur", "worlds.engineer.p": "KI/ML und Batterie-Intelligenz. Forschung, die ankommt.",
      "worlds.artist.h": "Künstler", "worlds.artist.p": "Wo die Logik die Krawatte lockert. Ein visueller Spielplatz.",
      "worlds.arthouse.h": "Shiraz Art House", "worlds.arthouse.p": "Ein unabhängiges Zuhause für die Kunst in Schiras.",
      "worlds.cinema.h": "Kino", "worlds.cinema.p": "Bilder als eine Art, über Menschen nachzudenken.",
      "worlds.music.h": "Musik & Stimme", "worlds.music.p": "Von klassischer Gitarre bis melodischer Rezitation.",
      "worlds.human.h": "Der Mensch", "worlds.human.p": "Zwei Katzen, große Neugier und das Leben jenseits der Uhr.",

      "about.kicker": "— Über mich",
      "about.title": "Ich passe in keine Schublade.",
      "about.lead": "Ich bin Mohammad Ali „Mo“ Masjedi — aus dem Iran, jetzt im Harz in Deutschland.",
      "about.p1": "Tagsüber baue ich Machine-Learning-Modelle, die die Zukunft von Batterien lesen. Aber ein Mensch ist mehr als ein Titel. Ich male und gestalte, ich trainiere und trete an, ich führe und organisiere, und ich schreibe Gedichte, wenn die Gleichungen verstummen.",
      "about.p2": "Der rote Faden ist überall derselbe: Neugier, Handwerk und der hartnäckige Glaube, dass das Interessante dort geschieht, wo Disziplinen aufeinandertreffen.",

      "ah.kicker": "Shiraz Art House",
      "ah.title": "Ein Zuhause für die Kunst.",
      "ah.lead": "Mitbegründung und Leitung einer Bühne für unabhängige Kunst und Film in Schiras.",
      "ah.p1": "Das Shiraz Art House ist ein unabhängiger Kulturraum — Galerie, Bühne für Musik und Theater, Café und Buchladen unter einem Dach. Es entstand, um jungen Künstlern einen Ort zu geben und Menschen rund um die Kultur zusammenzubringen.",
      "ah.p2": "Als Mitbegründer des Shiraz Art House und rund sechs Jahre lang dessen Geschäftsführer (CEO) (2012–2020) half ich, die kulturelle und künstlerische Plattform aufzubauen — ich machte es Künstlern möglich, Kurzfilme zu produzieren und zu zeigen und unabhängige Kunstprogramme zu gestalten. Für mich war es nie nur ein Gebäude, sondern eine Bühne für junge Künstler.",
      "ah.c1.h": "Galerie", "ah.c1.p": "Ausstellungen für etablierte und junge Künstler.",
      "ah.c2.h": "Bühne", "ah.c2.p": "Livemusik, Theater und Performance.",
      "ah.c3.h": "Café & Bücher", "ah.c3.p": "Ein Ort zum Treffen, Lesen und Reden.",

      "cin.kicker": "Kino & Film",
      "cin.title": "Bilder als Denken.",
      "cin.lead": "In der Tradition des iranischen Films — geduldig, menschlich, dem Alltag zugewandt.",
      "cin.p1": "Das Kino liegt im Zentrum meiner Arbeit. Es zieht mich zu Bildern, die Fragen stellen statt einfache Antworten zu geben — Bilder, die den Menschen mit Aufmerksamkeit und Einfachheit ansehen.",
      "cin.p2": "Ich arbeite im Geist von Abbas Kiarostamis Kino — geduldige Filme, die das Alltägliche aus der Nähe betrachten und im kleinsten menschlichen Moment Bedeutung finden.",

      "mus.kicker": "Musik & Stimme",
      "mus.title": "Von der Saite zum Wort.",
      "mus.lead": "Von klassischer Gitarre bis zum rezitierten Wort.",
      "mus.p1": "Ich bin klassischer Gitarrist und Lehrer mit über 18 Jahren Erfahrung. Mein Spiel brachte mir den ersten Platz bei Irans nationaler Kunst-Olympiade (Musik) und den zweiten Platz beim Nationalen Gitarrenfestival ein; ich habe einen Master in Kunstforschung. Ich unterrichtete an der Forough-Musikakademie und war Mitglied im Musikrat der Provinz Fars.",
      "mus.p2": "Bekannt bin ich auch für melodische Koranrezitation — Stimme und Atem tragen einen Text mit Gefühl. Es ist Teil derselben Liebe zu Klang und Bedeutung.",

      "col.kicker": "Menschen & Mitwirkende",
      "col.title": "Gute Arbeit entsteht nie allein.",
      "col.lead": "Vieles davon ist gemeinsam entstanden.",
      "col.p1": "Neda Aryana ist eine enge Mitstreiterin in der Kulturarbeit rund um das Shiraz Art House — zusammen glauben wir an Kunst, die den Geist öffnet und Menschen verbindet.",

      "press.kicker": "Interviews & Presse",
      "press.title": "Gespräche und Medien.",
      "press.lead": "Gespräche, Berichte und Erwähnungen.",
      "press.p1": "Eine wachsende Sammlung von Interviews und Berichten — sowohl Interviews, die ich gegeben habe, als auch Gespräche, die ich mit anderen Künstlern geführt habe.",

      "val.kicker": "Werte",
      "val.title": "Wofür es steht.",
      "val.lead": "Menschlichkeit, freie Meinungsäußerung und Frieden.",
      "val.p1": "In Kunst wie Technik gelten dieselben Werte: Achtung der Menschenwürde, die Freiheit zu schaffen und zu sprechen, und der Glaube, dass Kultur Brücken baut, wo Politik Mauern errichtet.",

      "contact.kicker": "— Kontakt",
      "contact.title": "Lass uns etwas schaffen, über die Grenzen hinweg.",
      "contact.sub": "Forschung, Kunst, ein Projekt oder einfach ein gutes Gespräch — mein Postfach ist offen.",
      "footer.tagline": "Ein Geist, viele Leben · mit Absicht gebaut"
    }
  };

  /* ---- apply ---- */
  function stored() {
    var l; try { l = localStorage.getItem(STORE); } catch (e) {}
    return (l && ORDER.indexOf(l) !== -1) ? l : "en";
  }
  function apply(lang) {
    var html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", RTL[lang] ? "rtl" : "ltr");
    if (RTL[lang]) {
      /* Persian letters must stay joined — remove per-character splitting
         so main.js doesn't shatter the script into disconnected glyphs. */
      var sp = document.querySelectorAll("[data-split]");
      for (var s = 0; s < sp.length; s++) sp[s].removeAttribute("data-split");
    }
    if (lang !== "en" && DICT[lang]) {
      var d = DICT[lang];
      var nodes = document.querySelectorAll("[data-i18n]");
      for (var i = 0; i < nodes.length; i++) {
        var k = nodes[i].getAttribute("data-i18n");
        if (d[k] != null) nodes[i].textContent = d[k];
      }
    }
  }

  /* ---- build the EN/FA/DE switch into the nav ---- */
  function buildSwitch() {
    var mount = document.getElementById("langSwitch");
    if (!mount) return;
    var cur = stored();
    ORDER.forEach(function (L) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lang-btn" + (L === cur ? " is-active" : "");
      b.setAttribute("lang", L);
      b.textContent = LABEL[L];
      b.addEventListener("click", function () {
        try { localStorage.setItem(STORE, L); } catch (e) {}
        location.reload();
      });
      mount.appendChild(b);
    });
  }

  apply(stored());
  if (document.readyState !== "loading") buildSwitch();
  else document.addEventListener("DOMContentLoaded", buildSwitch);
})();
