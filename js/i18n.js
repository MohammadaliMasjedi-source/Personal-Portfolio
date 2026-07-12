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

  /* hero role cycler lines, per language (read by main.js) */
  var ROLES = {
    en: ["a Guitarist & Teacher", "a Software Developer", "a Project Manager", "a Cultural Activist", "a Cat-lover"],
    fa: ["نوازنده و مدرسِ گیتار کلاسیکم", "توسعه‌دهندهٔ نرم‌افزارم", "مدیرِ پروژه‌ام", "کنشگرِ فرهنگی‌ام", "عاشقِ گربه‌هام"],
    de: ["Gitarrist & Lehrer", "Softwareentwickler", "Projektmanager", "Kulturaktivist", "Katzenliebhaber"]
  };

  /* ---- translations (en is the HTML source, so only fa + de here) ---- */
  var DICT = {
    fa: {
      /* nav + menu */
      "nav.worlds": "جهان‌ها", "nav.engineer": "مهندس", "nav.artist": "هنرمند",
      "nav.poet": "شاعر", "nav.about": "درباره", "nav.arthouse": "خانهٔ هنر", "nav.cta": "تماس",
      "menu.worlds": "جهان‌ها", "menu.engineer": "مهندس", "menu.artist": "هنرمند",
      "menu.athlete": "ورزشکار", "menu.arthouse": "خانهٔ هنر",
      "menu.music": "موسیقی", "menu.poet": "شاعر", "menu.contact": "تماس",
      "menu.daricheh": "ترجمه‌ها · داریچه",
      "menu.loc": "کلاوستال‑سلرفلد، آلمان",

      /* hero */
      "hero.eyebrow": "محمدعلی مسجدی — کلاوستال، آلمان",
      "hero.title": "یک ذهن، زندگی‌های بسیار.",
      "hero.sub": "نوازنده و مدرس گیتار کلاسیک، توسعه‌دهندهٔ نرم‌افزار، مدیر پروژه و کنشگر فرهنگی — و خدمتگزارِ دو گربه. یک ذهن، زندگی‌های بسیار.",
      "hero.cta1": "جهان‌هایم را ببین", "hero.cta2": "تماس", "hero.scroll": "پایین",
      "hero.iam": "من",
      "hero.role1": "نوازنده و مدرسِ گیتار کلاسیکم",

      /* cats */
      "cats.h": "ممو و ژوپیتر 🐾",
      "cats.lead": "ممو تیمِ همیشگیِ تضمینِ کیفیتِ من است — چرت‌ها و لبهٔ آفتاب‌گیرِ پنجره را تأیید می‌کند، و هیچ‌کدام از ضرب‌الاجل‌هایم را. و ژوپیتر — «ژوپی»ِ من — که در ۲۰۲۶ از دستش دادم و هر روز دلم برایش تنگ می‌شود.",
      "cats.jupi": "ژوپیتر — «ژوپی»",
      "cats.jupi.mem": "به یادِ همیشگی · ۲۰۲۶",
      "cats.jupi.bio": "جاذبه‌دار. گرم‌ترین آغوشِ اتاق از آنِ او بود و از بلندترین قفسه بر همه‌جا نظارت می‌کرد. برای همیشه سیّارهٔ کوچکِ من.",
      "cats.memo": "ممو",
      "cats.memo.bio": "هر خط کد را با نشستن روی کیبورد بازبینی می‌کند — و روز را تنها وقتی چراغ‌ها کم‌نور شد، تمام‌شده اعلام می‌کند.",

      /* worlds */
      "worlds.kicker": "(۰۰) — جهان‌های محمدعلی",
      "worlds.title": "چند رو، یک انسان.",
      "worlds.lead": "یک کارگاه، یک آزمایشگاه، یک پیست، یک صحنه، یک صفحه — دری را برگزین.",
      "worlds.engineer.h": "مهندس", "worlds.engineer.p": "هوش مصنوعی و هوشمندیِ باتری. پژوهشی که به کار می‌آید.",
      "nav.research": "پژوهش", "menu.research": "پژوهش", "worlds.research.h": "پژوهش", "worlds.research.p": "هوشمندیِ باتری، پیش‌آگاهی و علمِ یادگیری.",
      "follow.kicker": "— همراهِ مسیر", "follow.title": "با من همراه شو", "follow.lead": "موسیقی، پژوهش و ساختن را همان‌طور که رخ می‌دهد به اشتراک می‌گذارم — بیشترش در یوتیوب. سابسکرایب کن و مسیر را دنبال کن.", "follow.sub": "سابسکرایب در یوتیوب",
      "support.kicker": "— حمایت از کار", "support.title": "اگر دوست داشتی، کمک کن", "support.lead": "موسیقی، پژوهش و ساختن بیشتر در وقت شخصی‌ام اتفاق می‌افتد. اگر برایت ارزشی دارد، یک کمک کوچک به ادامه‌اش کمک می‌کند — بدون هیچ فشاری.", "support.sahar": "بخشی از این حمایت صرف کارِ من روی <strong>سحر</strong> (<bdi>Sahar</bdi>) می‌شود — آموزش رایگان برای کودکان بازمانده از تحصیل. من یک نهاد خیریهٔ ثبت‌شده نیستم، پس این کمک، معافیت مالیاتی ندارد — فقط حمایت از وقتی است که برای ساختنش می‌گذارم.", "support.setup": "به‌زودی راه‌اندازی می‌شود",
      "stat.lang": "زبان · فارسی · انگلیسی · آلمانی", "stat.lives": "زندگی، یک ذهن", "stat.arthouse": "ساختنِ خانهٔ هنر", "stat.arthouse.sfx": "+ سال", "stat.papers": "مقالهٔ پژوهشی",
      "worlds.artist.h": "هنرمند", "worlds.artist.p": "آنجا که منطق کراواتش را شل می‌کند. میدانِ بازیِ تصویر.",
      "worlds.arthouse.h": "خانهٔ هنر شیراز", "worlds.arthouse.p": "خانه‌ای مستقل برای هنر در شیراز.",
      "worlds.music.h": "موسیقی و شعر", "worlds.music.p": "از گیتار کلاسیک تا شعرِ فارسی.",
      "worlds.human.h": "انسان", "worlds.human.p": "گربه‌ها، کنجکاویِ بزرگ و زندگی بیرون از ساعت.",
      "worlds.athlete.h": "ورزشکار", "worlds.athlete.p": "نظم همچون تمرینی روزانه. تن و اراده.",
      "worlds.manager.h": "مدیر", "worlds.manager.p": "بدل‌کردنِ تلاشِ پراکنده به حرکتی مشترک.",
      "worlds.poet.h": "شاعر", "worlds.poet.p": "اتاقی آرام، آنجا که واژه‌ها زنده می‌شوند.",
      "worlds.enter": "ورود ←",

      /* about */
      "about.kicker": "— درباره",
      "about.title": "حاضر نیستم در یک جعبه بگنجم.",
      "about.lead": "من <strong>محمدعلی «مو» مسجدی‌</strong>ام — از شیراز، اکنون در کوهستانِ هارتسِ آلمان.",
      "about.p1": "جایی کار می‌کنم که فرهنگ و فناوری به هم می‌رسند، چون برای من دو زبان‌اند برای پرسش‌هایی یکسان — دربارهٔ زیبایی، آزادی و خوب زیستن در کنار هم. سال‌ها در شیراز <strong>خانه‌ای مستقل برای هنرمندان</strong> ساختم و <strong>گیتار کلاسیک درس دادم</strong> — در پیِ روشنیِ یک جملهٔ خوب‌نواخته یا یک رباعیِ خیام.",
      "about.p2": "حالا همان حوصله را به <strong>مهندسی</strong> آورده‌ام: کارِ آرام و صادقانهٔ واداشتنِ یک مدلِ باتری به راست‌گفتن. رشتهٔ پیونددهندهٔ همه‌چیز یکی است — کنجکاوی، پیشه‌وری و ساختنِ چیزهایی که مردم را کنار هم می‌آورند. <em>بیاموز تا زندگی کنی، زندگی کن تا بیاموزی.</em>",
      "about.t1.k": "از ۲۰۰۳", "about.t1.d": "اجرا و تدریسِ گیتار کلاسیک در شیراز.",
      "about.t2.k": "حدود ۲۰۱۲ تا ۲۰۲۰", "about.t2.d": "بنیان‌گذاری و رهبریِ خانهٔ هنر شیراز؛ بعدها به دیگران واگذار شد.",
      "about.t3.k": "۲۰۱۲ تا ۲۰۲۲", "about.t3.d": "یک دهه در نرم‌افزار — مهندس، مدیرِ پروژه، سپس معمارِ راهکار.",
      "about.t4.k": "از ۲۰۲۲", "about.t4.d": "پژوهشِ کارشناسیِ ارشد دربارهٔ عمرِ باتری در دانشگاه فنی کلاوستالِ آلمان.",
      "about.t5.k": "همیشه", "about.t5.d": "گیتار، شعر، تمرین و گربه‌ها.",

      /* === NEW cultural sections === */
      "ah.kicker": "خانهٔ هنر شیراز",
      "ah.title": "خانه‌ای برای هنر.",
      "ah.lead": "بنیان‌گذار و مدیرعاملِ پیشینِ خانه‌ای مستقل برای هنر در شیراز، ایران.",
      "ah.p1": "خانهٔ هنر شیراز فضایی فرهنگیِ مستقل در شیراز بود — گالری، صحنه‌ای برای موسیقی و تئاتر، کافه و کتاب‌فروشی زیر یک سقف، با جایی برای سینما و هنرهای تجسمی. برپا شد تا به هنرمندانِ مستقل و نوظهور جایی برای ساختن و نمایشِ کارشان بدهد و مردم را گردِ فرهنگ کنار هم بیاورد.",
      "ah.p2": "خانه را من بنیان گذاشتم و ساختم و حدودِ پنج تا شش سال به‌عنوان مدیر و مدیرعاملِ آن اداره‌اش کردم — در روزنامهٔ رسمیِ ایران از ۲۰۱۷ تا ۲۰۱۹ به‌عنوان مدیرعاملِ آن ثبت شده‌ام و ادارهٔ فرهنگِ استان نیز مرا مدیرِ آن خطاب کرده است. برنامه‌ای پیوسته در موسیقی، تئاتر، سینما و هنرهای تجسمی برگزار کردیم، با همکارانِ فراوان و پروژه‌های مستمر. برای من هرگز فقط یک ساختمان نبود؛ خانه‌ای باز برای هنرمندانِ مستقل بود. بعدها فروخته شد و دیگران اداره‌اش کردند.",
      "ah.c1.h": "گالری", "ah.c1.p": "نمایشگاه برای هنرمندانِ شناخته‌شده و نوظهور.",
      "ah.c2.h": "صحنه", "ah.c2.p": "موسیقیِ زنده، تئاتر و اجرا.",
      "ah.c3.h": "کافه و کتاب", "ah.c3.p": "جایی برای دیدار، خواندن و گفت‌وگو.",

      "mus.kicker": "موسیقی و آواز",
      "mus.title": "از سیم تا کلام.",
      "mus.lead": "از گیتار کلاسیک تا کلامِ آوازی.",
      "mus.p1": "نوازنده و آموزگارِ گیتار کلاسیک‌ام با بیش از هجده سال تجربه. نوازندگی‌ام مقامِ نخستِ المپیادِ هنریِ کشور (موسیقی) و مقامِ دومِ جشنوارهٔ ملیِ گیتار را برایم به ارمغان آورد، و کارشناسیِ ارشدِ پژوهشِ هنر دارم. در آموزشگاهِ موسیقیِ فروغ تدریس کرده‌ام و عضوِ شورای سیاست‌گذاریِ موسیقیِ استانِ فارس بوده‌ام.",
      "mus.p2": "بخشِ زیادی از آنچه می‌نوازم با شعرِ فارسی پیوند دارد — رباعیاتِ خیّام و دیگران — جایی که گیتار و کلام به هم می‌رسند. همان عشق به صدا و معنا در هر چه می‌سازم جاری‌ست.",
      "mus.watch": "تماشا — گیتار کلاسیک، از کانالِ من <bdi>«MoMas Music»</bdi>:",
      "mus.allvideos": "همهٔ ویدیوها",

      "col.kicker": "آدم‌ها و هم‌کاران",
      "col.title": "کارِ خوب هرگز تنها ساخته نمی‌شود.",
      "col.lead": "بخشِ بزرگی از این کار مشترک است.",
      "col.p1": "ندا آریانا — معمار، هم‌بنیان‌گذارِ خانهٔ هنر شیراز و عضوِ هیئت‌مدیرهٔ آن — از گردانندگانِ اصلیِ آن بود. ما با هم سکویی برای هنرمندانِ جوان ساختیم؛ به هنری باور داریم که ذهن‌ها را می‌گشاید و مردم را گرد هم می‌آورد.",

      "press.kicker": "گفت‌وگوها و رسانه",
      "press.title": "گفت‌وگوها و حضور در رسانه.",
      "press.lead": "گفت‌وگوها، گزارش‌ها و اشاره‌ها.",
      "press.p1": "سیاهه‌ای روبه‌رشد از گفت‌وگوها و پوشش رسانه‌ای — هم گفت‌وگوهایی که داشته‌ام و هم گفت‌وگوهایی که خود با هنرمندانِ دیگر پیش برده‌ام.",
      "press.harzer": "هارتسر پانوراما (یکشنبه) — ۱۴ سپتامبر ۲۰۲۵: به‌عنوان نوازندهٔ گیتار با اجرای قطعاتِ خودم در ژرفای معدنِ روزِنهوفر کِررادشتوبه، کلاوستال‑تسلرفلد، معرفی شدم.",
      "press.mehr": "خبرگزاری مهر — ۲۰۱۰: مقام دومِ بخش کلاسیکِ جشنوارهٔ گروه‌نوازیِ استان فارس با دوئتِ گیتار کلاسیک شیراز.",

      "val.kicker": "ارزش‌ها",
      "val.title": "بر چه می‌ایستد.",
      "val.lead": "انسانیت، آزادیِ بیان و صلح.",
      "val.p1": "در سراسرِ هنر و مهندسی، همان ارزش‌ها برقرارند: احترام به کرامتِ انسان، آزادیِ آفریدن و گفتن، و این باور که فرهنگ می‌تواند آنجا که سیاست دیوار می‌سازد، پل بسازد.",

      /* engineer + research + music caption */
      "eng.lead": "از راهِ دور به پژوهش رسیدم. کارشناسیِ مهندسیِ نرم‌افزار و نزدیک به یک دهه ساختِ نرم‌افزارِ حسابداری — مهندس، مدیر پروژه و سپس معمارِ راهکار — به من آموخت که چگونه محصول را به سرانجام برسانم. اکنون به‌عنوان پژوهشگرِ کارشناسیِ ارشد در دانشگاهِ کلاوستال، به ترنسفورمرها می‌آموزم که عمرِ یک باتریِ لیتیوم‑یونی را تنها از نخستین چرخه‌هایش پیش‌بینی کنند — و یک سالِ آزمایش را به تصمیمی در چند هفته بدل کنند. پژوهشی را دوست دارم که از آزمایشگاه بیرون بیاید و به ابزار بدل شود.",

      "res.kicker": "پژوهش و مقالات",
      "res.title": "آموختنِ خواندنِ زمان به ماشین‌ها.",
      "res.lead": "یک پایان‌نامهٔ کارشناسیِ ارشد و مجموعه‌ای کوچک از مقالات، همه گردِ یک پرسش: چه‌قدر زود می‌توان دریافت که یک سامانه چه خواهد شد؟ بیشترشان دربارهٔ پیش‌آگاهیِ باتری است؛ چند تایی به سویِ چگونگیِ یادگیریِ انسان می‌روند.",
      "res.g1": "پایان‌نامهٔ ارشد · دانشگاهِ کلاوستال",
      "res.thesis.t": "پیش‌بینیِ عمرِ باتری از چرخه‌های نخستین",
      "res.thesis.d": "ترنسفورمرهایی با طولِ متغیر که عمرِ باقی‌ماندهٔ یک سلولِ لیتیوم‑یونی را تنها از نخستین چرخه‌هایش تخمین می‌زنند — سنجیده در برابرِ مدل‌های بازگشتی و کانولوشنی، با خط‌لوله‌ای بازتولیدپذیر و چند-بذری.",
      "res.thesis.m": "پایان‌نامهٔ ارشد · عمرِ باقی‌ماندهٔ باتری · یادگیریِ ماشینِ سری‌زمانی",
      "res.g2": "پیش‌آگاهیِ باتری و سری‌زمانی",
      "res.p1.t": "نشانه‌های زودهنگام، سرنوشت‌های دور",
      "res.p1.d": "یک مدل که عمرِ باقی‌مانده را زود پیش‌بینی می‌کند — و در حوزه‌های گوناگون، از باتری تا توربوفنِ موتورِ جت، تعمیم می‌یابد.",
      "res.p2.t": "مدلِ بنیادین در برابرِ از-صفر",
      "res.p2.d": "پژوهشی صادقانه: برای عمرِ باتری، یک مدلِ بزرگِ از‑پیش‑آموزش‌دیده از یک مدلِ کوچکِ ویژه‌ساز بهتر نیست — و اجرای آن بسیار پرهزینه‌تر است.",
      "res.p3.t": "انتقال میانِ شیمی‌ها",
      "res.p3.d": "واداشتنِ یک مدلِ باتری به کارکردن روی شیمی‌هایی که هرگز در آموزش ندیده، تنها با چند نمونه برای سازگاری.",
      "res.p4.t": "کالبدشکافیِ خلافِ‌واقعِ سلول",
      "res.p4.d": "«چرا این سلول مُرد؟» — کوچک‌ترین تغییرِ چرخه‌های نخستین که عمرِ پیش‌بینی‌شده‌اش را وارونه می‌کرد.",
      "res.p5.t": "پیش‌آموزشِ زمان‑وارون",
      "res.p5.d": "خواندنِ تاریخِ یک باتری به‌صورتِ وارونه، همچون خود-نظارتی، برای آموختنِ اثرِ انگشتِ نیرومندترِ عمرِ نخستین.",
      "res.p6.t": "نوری و الکتریکی، با هم",
      "res.p6.d": "آیا افزودنِ دادهٔ حسگرِ فیبرِ نوری (<bdi>FBG</bdi>) پیش‌بینیِ زودهنگامِ عمرِ باتری را فراتر از سیگنال‌های الکتریکیِ تنها بهبود می‌بخشد؟",
      "res.g3": "یادگیری و فهم",
      "res.p7.t": "تفکرِ نقّادانه با هوشِ مصنوعی",
      "res.p7.d": "چارچوبی سنجش‌پذیر برای «اصطکاکِ شناختیِ» سالم — تا مردم در کنارِ هوشِ مصنوعی همچنان خودشان بیندیشند.",
      "res.p8.t": "از مستنداتِ فنی تا یادگیری",
      "res.p8.d": "بدل‌کردنِ مستنداتِ فنیِ سنگین به آموزشی که زمانِ رسیدن به مهارت و بارِ ذهنیِ تازه‌واردان را کم می‌کند.",
      "res.note": "کاری در حالِ پیشرفت — بیشترِ این پژوهش هنوز منتشر نشده است. عنوان‌ها و موضوع‌ها اینجا به اشتراک گذاشته می‌شوند؛ نتایج وقتی می‌آیند که هر مقاله عمومی شود.",

      "mus.cap": "زنده در کنسرت — رومانس، میلونگا و مِی برای گیتار کلاسیک · کلاوستال‑تسلرفلد، نوامبر ۲۰۲۳. هر عکس را برای بزرگ‌نمایی لمس کنید.",

      /* engineer header */
      "eng.kicker": "مهندس",
      "eng.title": "هوش، به کار بسته.",

      /* engineer stats + project cards */
      "eng.s1": "معماریِ مدلِ محک‌خورده",
      "eng.s2": "مجموعه‌دادهٔ عمومیِ یکپارچه‌شده",
      "eng.s3": "سلولِ لیتیوم‑یونیِ تحلیل‌شده",
      "eng.s4": "بذرِ تصادفی برای استواریِ علمی",
      "eng.cs.tag": "محصول · دموی زنده",
      "eng.cs.d": "داشبوردِ سلامتِ باتری و عمرِ باقی‌مانده در آغازِ عمر — پیش‌بینی‌های مدل را در یک صفحهٔ خودکفا به تصمیم‌های ناوگانی بدل می‌کند. <em>دمو با دادهٔ مصنوعی اجرا می‌شود.</em>",
      "eng.cs.link": "بازکردنِ دموی زنده",
      "eng.p2.tag": "پژوهش · پایان‌نامهٔ ارشد",
      "eng.p2.t": "پیش‌بینیِ عمرِ باتری",
      "eng.p2.d": "ترنسفورمرهای طول‑متغیر برای پیش‌بینیِ عمرِ باقی‌مانده از چرخه‌های نخستین، سنجیده در برابرِ مدل‌های بازگشتی و کانولوشنی روی شش مجموعه‌داده. ساخته‌شده با <bdi>PyTorch</bdi> و خط‌لوله‌ای بازتولیدپذیر و چندبذری.",
      "eng.p2.m": "دانشگاه فنی کلاوستال · ۲۰۲۶",
      "eng.p3.tag": "مهندسی · ابزارِ دقیق",
      "eng.p3.t": "آزمونِ مکانیکی و داده‌برداری",
      "eng.p3.d": "پیشینه‌ای عملی در آزمونِ مکانیکی، اندازه‌گیری و ابزارِ دقیق — آزمایش‌های گشتاورِ اصطکاک و ترکیدگی، و خودکارسازیِ داده‌برداری با <bdi>LabVIEW / NI</bdi>.",
      "eng.p3.m": "پیشینه",

      /* athlete */
      "ath.kicker": "ورزشکار",
      "ath.title": "نظم، تمرینی روزانه است.",
      "ath.lead": "تمرین جایی‌ست که ذهن را با فشار آوردن بر تن تیز می‌کنم. پیوستگی مهم‌تر از شدت است، هر هفته.",
      "ath.c1.k": "نظم", "ath.c1.v": "حاضر شدن", "ath.c1.s": "تمرینی که انجام می‌دهی، از تمرینِ بی‌نقصی که از آن می‌گذری بهتر است.",
      "ath.c2.k": "آهنگ", "ath.c2.v": "هر هفته", "ath.c2.s": "پیوستگی به‌جای شدت — عادتی پایدار و تکرارپذیر.",
      "ath.c3.k": "توازن", "ath.c3.v": "ذهن و تن", "ath.c3.s": "ذهنِ روشن را به همان شیوهٔ تنِ نیرومند می‌پرورند.",
      "ath.quote": "«تن به آنچه ذهن باور دارد دست می‌یابد.»",

      /* manager */
      "mgr.kicker": "مدیر",
      "mgr.title": "از تلاشِ پراکنده تا حرکتِ مشترک.",
      "mgr.lead": "رهبری پیشه‌ای از آنِ خود است — شفافیت، اعتماد، و بدل‌کردنِ گروهی از آدم‌ها به تیمی با یک جهت. چند اصلی که با آن‌ها رهبری می‌کنم:",
      "mgr.c1.h": "نخست شفافیت", "mgr.c1.p": "آدم‌ها وقتی دقیق بدانند «تمام» کجاست، تند پیش می‌روند.",
      "mgr.c2.h": "اعتماد به‌صورتِ پیش‌فرض", "mgr.c2.p": "آدم‌های باهوش را به کار بگیر، به آن‌ها فضا بده و موانعشان را بردار.",
      "mgr.c3.h": "تصمیم بگیر، سپس بیاموز", "mgr.c3.p": "یک تصمیمِ خوبِ امروز از تصمیمی بی‌نقص که دیر برسد بهتر است.",
      "mgr.c4.h": "اعتبار بیرون، سرزنش درون", "mgr.c4.p": "بردها از آنِ تیم‌اند؛ شکست‌ها بر دوشِ رهبر.",

      /* poet */
      "poet.kicker": "شاعر",
      "poet.title": "اتاقی آرام برای واژه‌ها.",
      "poet.lead": "میانِ معادله و آتش، اتاقی کوچک برای واژه‌ها نگه می‌دارم — چند سطر از خودم، به دو زبان.",
      "poet.cap": "سروده‌ای از خودم — شعرهای دیگرم کم‌کم به آن می‌پیوندند.",

      /* personal / human */
      "human.kicker": "انسان",
      "human.title": "زندگی، بیرون از ساعت.",
      "human.curios": "کنجکاوی‌ها",
      "chip.ai": "هوش مصنوعی", "chip.energy": "انرژی و باتری", "chip.paint": "نقاشی و ساختن",
      "chip.sport": "تمرین و ورزش", "chip.poetry": "شعر و زبان", "chip.german": "آلمانی (<bdi>A1</bdi>، در حالِ پیشرفت)",
      "chip.km": "مدیریتِ دانش", "chip.coffee": "قهوه و گفت‌وگو",
      "now.h": "اکنون · ژوئنِ ۲۰۲۶",
      "now.l1": "در حالِ پایان‌دادنِ پایان‌نامهٔ ارشدم در دانشگاهِ کلاوستال.",
      "now.l2": "ساختن و پرداختِ <bdi>CellSight</bdi>.",
      "now.l3": "یادگیریِ آلمانی — در پیِ <bdi>A1</bdi> در این پاییز.",
      "now.l4": "نقاشیِ بیشتر، نوشتنِ بیشتر، تمرینِ بیشتر.",

      /* daricheh — translations stub */
      "dar.kicker": "ترجمه‌ها · داریچه",
      "dar.title": "داریچه‌ای میانِ زبان‌ها.",
      "dar.lead": "بردنِ شعر و اندیشه میانِ فارسی، انگلیسی و آلمانی — تمرینی کوچک و باحوصله.",
      "dar.p1": "داریچه («پنجرهٔ کوچک») کارِ ترجمهٔ من را گرد می‌آورد: بردنِ شعرِ فارسی به‌سویِ انگلیسی و آلمانی، و اندیشه‌ها در جهتِ وارون. هر قطعه سرچشمه و مترجمِ خود را روشن نام می‌برد، و تنها متن‌های اصیل یا آزاد برای هم‌رسانی اینجا جای می‌گیرند.",
      "dar.w1.h": "فارسی ← انگلیسی", "dar.w1.p": "رباعی‌ها و شعرهای کوتاه، سطر به سطر به انگلیسی برده می‌شوند، با متنِ اصلی در کنارشان.",
      "dar.w2.h": "فارسی ← آلمانی", "dar.w2.p": "پلی آهسته‌تر به‌سویِ آلمانی — زبانی که هنوز در حالِ آموختنش‌ام، هر بار یک بیتِ باحوصله.",
      "dar.w3.h": "یادداشت‌هایی بر ترجمه", "dar.w3.p": "یادداشت‌هایی کوتاه دربارهٔ گزینش‌های پشتِ هر قطعه — اینکه یک واژه چه با خود دارد و چه از دست می‌رود.",
      "dar.soon": "به‌زودی — نخستین داریچه‌ها در حالِ آماده‌شدن‌اند.",

      /* shiraz house — archive (cultural history, coming soon) */
      "menu.arthive": "خانهٔ هنر — بایگانی",
      "arc.kicker": "خانهٔ هنر شیراز — بایگانی",
      "arc.title": "تاریخی فرهنگی، با حوصله نگه‌داشته.",
      "arc.lead": "بایگانی‌ای محترمانه از زندگیِ فرهنگیِ پیرامونِ خانهٔ هنر — شب‌های سینما، هنر و موسیقی — همچون خاطره‌ای از گذشته.",
      "arc.p1": "این بایگانی، تاریخِ فرهنگیِ مستندِ مرکزِ هنریِ خانهٔ هنر در شیراز را گرد می‌آورد: جایی که سال‌ها مردم برای شب‌های سینما، نمایشگاه‌ها و موسیقیِ زنده گرد هم می‌آمدند. اینجا همچون حافظه‌ای فرهنگی پیش‌کش می‌شود — سیاهه‌ای از برنامه‌ها و شب‌هایی که جامعه‌ای را گردِ هنر کنار هم آورد.",
      "arc.p2": "هدف ساده و آرام است: یادآوریِ خودِ رویدادها — فیلم‌هایی که نمایش داده شد، آثاری که به نمایش درآمد، موسیقی‌ای که نواخته شد — و روحِ یک فضای مستقل برای هنر. هیچ‌چیز اینجا ادعایی دربارهٔ مالکیت یا هر موضوعِ مورد مناقشه نیست؛ تنها سیاهه‌ای از کنشِ فرهنگی است، با حوصله نگه‌داشته.",
      "arc.c1.h": "شب‌های سینما", "arc.c1.p": "شب‌هایی از فیلم و گفت‌وگو — نمایش‌هایی که مردم را گردِ تصویرِ متحرک می‌آورد.",
      "arc.c2.h": "هنر و نمایشگاه", "arc.c2.p": "نمایش‌هایی از نقاشی و هنرهای تجسمی — دیوار و اتاقی برای هنرمندانِ نوظهور و شناخته‌شده.",
      "arc.c3.h": "شب‌های موسیقی", "arc.c3.p": "موسیقیِ زنده زیرِ یک سقف — کنسرت‌های آرام و اجراهای مشترک میانِ دوست‌دارانِ هنر.",
      "arc.gallery": "گالری به‌زودی — عکس‌ها تنها زمانی افزوده می‌شوند که اصیل یا برای هم‌رسانی آزاد باشند.",
      "arc.soon": "به‌زودی — این بایگانی با حوصله در حالِ آماده‌شدن است.",

      /* videos + channels */
      "vid.mey": "بر پایهٔ رباعیاتِ خیام · اجرای زنده",
      "vid.amelia": "ترانهٔ محلیِ کاتالان",
      "chan.connect": "در ارتباط باشیم",
      "chan.profile": "نمایه",
      "chan.email": "ایمیل",
      "chan.hello": "سلامی بده",

      /* contact + footer */
      "contact.kicker": "— تماس",
      "contact.title": "بیا چیزی بسازیم، آن‌سوی مرزها.",
      "contact.sub": "پژوهش، هنر، یک پروژه، یا فقط یک گفت‌وگوی خوب — صندوقِ پیامم باز است.",
      "footer.top": "بازگشت به بالا ↑",
      "footer.copy": "<bdi>© <span id=\"year\">2026</span></bdi> محمدعلی مسجدی — کلاوستال، آلمان",
      "footer.tagline": "یک ذهن، زندگی‌های بسیار · ساخته‌شده با قصد"
    },

    de: {
      "nav.worlds": "Welten", "nav.engineer": "Ingenieur", "nav.artist": "Künstler",
      "nav.poet": "Dichter", "nav.about": "Über mich", "nav.arthouse": "Art House", "nav.cta": "Kontakt",
      "menu.worlds": "Welten", "menu.engineer": "Ingenieur", "menu.artist": "Künstler",
      "menu.athlete": "Sportler", "menu.arthouse": "Art House",
      "menu.music": "Musik", "menu.poet": "Dichter", "menu.contact": "Kontakt",
      "menu.daricheh": "Übersetzungen · Daricheh",
      "menu.loc": "Clausthal-Zellerfeld, DE",

      "hero.eyebrow": "Mohammad Ali Masjedi — Clausthal, Deutschland",
      "hero.title": "Ein Geist, viele Leben.",
      "hero.sub": "Klassischer Gitarrist und Lehrer, Softwareentwickler, Projektmanager und Kulturaktivist — und treuer Diener zweier Katzen. Ein Geist, viele Leben.",
      "hero.cta1": "Meine Welten entdecken", "hero.cta2": "Kontakt", "hero.scroll": "Scrollen",
      "hero.iam": "Ich bin",
      "hero.role1": "Gitarrist & Lehrer",

      /* cats */
      "cats.h": "Memo & Jupiter 🐾",
      "cats.lead": "Memo ist mein treues Qualitätssicherungs-Team — billigt Nickerchen und sonnige Fensterbänke, aber keine einzige meiner Deadlines. Und Jupiter — mein Jupi — den ich 2026 verloren habe und jeden Tag vermisse.",
      "cats.jupi": "Jupiter — „Jupi“",
      "cats.jupi.mem": "In liebevoller Erinnerung · 2026",
      "cats.jupi.bio": "Gravitativ. Er beherrschte den wärmsten Schoß im Raum und wachte vom höchsten Regal über das ganze Zuhause. Für immer mein kleiner Planet.",
      "cats.memo": "Memo",
      "cats.memo.bio": "Prüft jede Codezeile, indem er sich auf die Tastatur setzt — und gibt den Tag erst frei, wenn das Licht gedämpft ist.",

      "worlds.kicker": "(00) — Die Welten von Mo",
      "worlds.title": "Viele Seiten, ein Mensch.",
      "worlds.lead": "Ein Atelier, ein Labor, eine Bahn, eine Bühne, eine Seite — wähle eine Tür.",
      "worlds.engineer.h": "Ingenieur", "worlds.engineer.p": "KI/ML und Batterie-Intelligenz. Forschung, die ankommt.",
      "nav.research": "Forschung", "menu.research": "Forschung", "worlds.research.h": "Forschung", "worlds.research.p": "Batterie-Intelligenz, Prognostik & Lernwissenschaft.",
      "follow.kicker": "— Die Reise verfolgen", "follow.title": "Komm mit auf die Reise", "follow.lead": "Ich teile Musik, Forschung und das Machen, während es entsteht — das meiste auf YouTube. Abonniere und folge der Reise.", "follow.sub": "Auf YouTube abonnieren",
      "support.kicker": "— Die Arbeit unterstützen", "support.title": "Ein kleiner Beitrag, wenn du magst", "support.lead": "Musik, Forschung und Projekte entstehen meist in meiner Freizeit. Wenn dir das etwas bedeutet, hilft ein kleiner Beitrag, es am Laufen zu halten — ganz ohne Druck.", "support.sahar": "Ein Teil davon unterstützt meine Arbeit an Sahar — kostenlose Bildung für Kinder ohne Schulzugang. Ich bin keine eingetragene gemeinnützige Organisation, daher ist dies keine steuerlich absetzbare Spende — es unterstützt einfach die Zeit, die ich in den Aufbau stecke.", "support.setup": "bald verfügbar",
      "stat.lang": "Sprachen · FA · EN · DE", "stat.lives": "Leben, ein Geist", "stat.arthouse": "Kunsthaus aufgebaut", "stat.arthouse.sfx": "+ Jahre", "stat.papers": "Forschungsarbeiten",
      "worlds.artist.h": "Künstler", "worlds.artist.p": "Wo die Logik die Krawatte lockert. Ein visueller Spielplatz.",
      "worlds.arthouse.h": "Shiraz Art House", "worlds.arthouse.p": "Ein unabhängiges Zuhause für die Kunst in Schiras.",
      "worlds.music.h": "Musik & Poesie", "worlds.music.p": "Von klassischer Gitarre bis zur persischen Poesie.",
      "worlds.human.h": "Der Mensch", "worlds.human.p": "Katzen, große Neugier und das Leben jenseits der Uhr.",
      "worlds.athlete.h": "Sportler", "worlds.athlete.p": "Disziplin als tägliche Praxis. Körper & Wille.",
      "worlds.manager.h": "Manager", "worlds.manager.p": "Verstreute Mühe in gemeinsamen Schwung verwandeln.",
      "worlds.poet.h": "Dichter", "worlds.poet.p": "Der stille Raum, in dem Worte lebendig werden.",
      "worlds.enter": "Eintreten →",

      "about.kicker": "— Über mich",
      "about.title": "Ich passe in keine Schublade.",
      "about.lead": "Ich bin <strong>Mohammad Ali „Mo“ Masjedi</strong> — aus Schiras, jetzt im Harz in Deutschland.",
      "about.p1": "Ich arbeite dort, wo Kultur und Technik sich begegnen — für mich sind es zwei Sprachen für dieselben Fragen: nach Schönheit, Freiheit und einem guten Miteinander. Jahrelang habe ich in Schiras ein <strong>unabhängiges Zuhause für Künstler</strong> aufgebaut und <strong>klassische Gitarre unterrichtet</strong> — auf der Suche nach der Klarheit einer einzigen gut gespielten Phrase oder eines Vierzeilers von Khayyām.",
      "about.p2": "Heute bringe ich dieselbe Geduld ins <strong>Ingenieurwesen</strong>: die langsame, ehrliche Arbeit, ein Batteriemodell zur Wahrheit zu bringen. Der rote Faden ist überall derselbe — Neugier, Handwerk und Dinge bauen, die Menschen zusammenbringen. <em>Lerne zu leben, lebe um zu lernen.</em>",
      "about.t1.k": "2003 →", "about.t1.d": "Klassische Gitarre in Schiras — Auftritte und Unterricht.",
      "about.t2.k": "~2012 → 2020", "about.t2.d": "Gründung und Leitung des Shiraz Art House; später an andere verkauft.",
      "about.t3.k": "2012 → 2022", "about.t3.d": "Ein Jahrzehnt Software — Ingenieur, Projektmanager, dann Solutions Architect.",
      "about.t4.k": "2022 →", "about.t4.d": "Masterforschung zur Batterielebensdauer an der TU Clausthal.",
      "about.t5.k": "Immer", "about.t5.d": "Gitarre, Poesie, Training und die Katzen.",

      "ah.kicker": "Shiraz Art House",
      "ah.title": "Ein Zuhause für die Kunst.",
      "ah.lead": "Gründer und ehemaliger Geschäftsführer eines unabhängigen Hauses für Kunst in Schiras, Iran.",
      "ah.p1": "Das Shiraz Art House war ein unabhängiger Kulturraum in Schiras, Iran — Galerie, Bühne für Musik und Theater, Café und Buchladen unter einem Dach, mit Raum für Kino und bildende Kunst. Es bestand, um unabhängigen und jungen Künstlern einen Ort zum Schaffen und Zeigen ihrer Arbeit zu geben und Menschen rund um die Kultur zusammenzubringen.",
      "ah.p2": "Ich habe das Haus gegründet und aufgebaut und es rund fünf bis sechs Jahre als Geschäftsführer (CEO) geleitet — im offiziellen iranischen Staatsanzeiger von 2017 bis 2019 als dessen Geschäftsführer bestätigt und von der Kulturbehörde der Provinz als dessen Leiter angesprochen. Wir führten ein kontinuierliches Programm aus Musik, Theater, Kino und bildender Kunst, mit vielen Partnern und wiederkehrenden Projekten. Für mich war es nie nur ein Gebäude; es war ein offenes Haus für unabhängige Künstler. Später wurde es verkauft und von anderen betrieben.",
      "ah.c1.h": "Galerie", "ah.c1.p": "Ausstellungen für etablierte und junge Künstler.",
      "ah.c2.h": "Bühne", "ah.c2.p": "Livemusik, Theater und Performance.",
      "ah.c3.h": "Café & Bücher", "ah.c3.p": "Ein Ort zum Treffen, Lesen und Reden.",

      "mus.kicker": "Musik & Stimme",
      "mus.title": "Von der Saite zum Wort.",
      "mus.lead": "Von klassischer Gitarre bis zum rezitierten Wort.",
      "mus.p1": "Ich bin klassischer Gitarrist und Lehrer mit über 18 Jahren Erfahrung. Mein Spiel brachte mir den ersten Platz bei Irans nationaler Kunst-Olympiade (Musik) und den zweiten Platz beim Nationalen Gitarrenfestival ein; ich habe einen Master in Kunstforschung. Ich unterrichtete an der Forough-Musikakademie und war Mitglied im Musikrat der Provinz Fars.",
      "mus.p2": "Vieles, was ich spiele, ist mit persischer Poesie verbunden — den Versen von Omar Khayyām und anderen —, wo Gitarre und Wort sich begegnen. Dieselbe Liebe zu Klang und Bedeutung durchzieht alles, was ich mache.",
      "mus.watch": "Ansehen — klassische Gitarre, von meinem Kanal «MoMas Music»:",
      "mus.allvideos": "Alle Videos",

      "col.kicker": "Menschen & Mitwirkende",
      "col.title": "Gute Arbeit entsteht nie allein.",
      "col.lead": "Vieles davon ist gemeinsam entstanden.",
      "col.p1": "Neda Aryana — Architektin, Mitbegründerin des Shiraz Art House und Mitglied seines Vorstands — war eine seiner treibenden Organisatorinnen. Gemeinsam haben wir eine Plattform für junge Künstler aufgebaut; wir glauben an Kunst, die den Geist öffnet und Menschen verbindet.",

      "press.kicker": "Interviews & Presse",
      "press.title": "Gespräche und Medien.",
      "press.lead": "Gespräche, Berichte und Erwähnungen.",
      "press.p1": "Eine wachsende Sammlung von Interviews und Berichten — sowohl Interviews, die ich gegeben habe, als auch Gespräche, die ich mit anderen Künstlern geführt habe.",
      "press.harzer": "Harzer Panorama am Sonntag — 14. September 2025: als Gitarrist mit eigenen Kompositionen unter Tage in der Rosenhöfer Kehrradstube, Clausthal-Zellerfeld, vorgestellt.",
      "press.mehr": "Mehr News — 2010: zweiter Platz (Klassik) beim Ensemble-Musikfestival der Provinz Fars mit dem Shiraz Classical Guitar Duet.",

      "val.kicker": "Werte",
      "val.title": "Wofür es steht.",
      "val.lead": "Menschlichkeit, freie Meinungsäußerung und Frieden.",
      "val.p1": "In Kunst wie Technik gelten dieselben Werte: Achtung der Menschenwürde, die Freiheit zu schaffen und zu sprechen, und der Glaube, dass Kultur Brücken baut, wo Politik Mauern errichtet.",

      /* engineer + research + music caption */
      "eng.lead": "Ich kam auf Umwegen zur Forschung. Ein BSc in Softwaretechnik und fast ein Jahrzehnt im Bau von Buchhaltungssoftware — Ingenieur, Projektmanager, dann Solutions Architect — lehrten mich, Dinge fertigzustellen. Heute bringe ich als Masterforscher an der TU Clausthal Transformern bei, die Lebensdauer einer Lithium-Ionen-Batterie allein aus ihren ersten Zyklen vorherzusagen — und so ein Jahr Tests in wenigen Wochen zur Entscheidung zu machen. Ich mag Forschung, die das Labor verlässt und zum Werkzeug wird.",

      "res.kicker": "Forschung & Arbeiten",
      "res.title": "Maschinen lehren, die Zeit zu lesen.",
      "res.lead": "Eine Masterarbeit und ein kleines Portfolio von Arbeiten, alle um eine Frage: Wie früh lässt sich erkennen, was ein System werden wird? Das meiste ist Batterie-Prognostik; einiges reicht hin zur Frage, wie Menschen lernen.",
      "res.g1": "Masterarbeit · TU Clausthal",
      "res.thesis.t": "Frühzyklus-Vorhersage der Batterielebensdauer",
      "res.thesis.d": "Transformer mit variabler Länge, die die Restlebensdauer einer Lithium-Ionen-Zelle allein aus ihren ersten Zyklen schätzen — verglichen mit rekurrenten und Faltungs-Baselines, mit reproduzierbarer Mehr-Seed-Pipeline.",
      "res.thesis.m": "M.Sc.-Arbeit · Batterie-Restlebensdauer · Zeitreihen-ML",
      "res.g2": "Batterie- & Zeitreihen-Prognostik",
      "res.p1.t": "Frühe Signale, ferne Folgen",
      "res.p1.d": "Ein Modell, das die Restlebensdauer früh vorhersagt — und über Domänen hinweg generalisiert, von Batterien bis zu Flugzeug-Turbofans.",
      "res.p2.t": "Foundation-Modell vs. von Grund auf",
      "res.p2.d": "Eine ehrliche Studie: Für die Batterie-Restlebensdauer schlägt ein großes vortrainiertes Modell ein kleines zweckgebautes nicht — und kostet weit mehr im Betrieb.",
      "res.p3.t": "Transfer über Chemien hinweg",
      "res.p3.d": "Ein Batteriemodell auch auf Chemien zum Laufen bringen, die es im Training nie gesehen hat — mit nur wenigen Beispielen zur Anpassung.",
      "res.p4.t": "Kontrafaktische Zell-Obduktionen",
      "res.p4.d": "„Warum starb diese Zelle?“ — die kleinste Frühzyklus-Änderung, die ihre vorhergesagte Lebensdauer gekippt hätte.",
      "res.p5.t": "Rückwärts-Zeit-Vortraining",
      "res.p5.d": "Die Geschichte einer Batterie rückwärts lesen, als Selbstüberwachung, um einen stärkeren Frühlebens-Fingerabdruck zu lernen.",
      "res.p6.t": "Optisch & elektrisch, zusammen",
      "res.p6.d": "Verbessern faseroptische (FBG) Sensordaten die frühe Batterielebensdauer-Vorhersage über elektrische Signale allein hinaus?",
      "res.g3": "Lernen & Verstehen",
      "res.p7.t": "Kritisches Denken mit KI",
      "res.p7.d": "Ein messbarer Rahmen für gesunde „epistemische Reibung“ — damit Menschen weiter selbst denken, während sie mit KI lernen.",
      "res.p8.t": "Von technischer Doku zum Lernen",
      "res.p8.d": "Dichte technische Dokumentation in ein Onboarding verwandeln, das die Zeit bis zur Kompetenz und die mentale Last für Neueinsteiger senkt.",
      "res.note": "Eine laufende Arbeit — das meiste davon ist unveröffentlicht. Titel und Themen werden hier geteilt; die Ergebnisse folgen, sobald jede Arbeit öffentlich ist.",

      "mus.cap": "Live im Konzert — Romance, Milonga & Mey für klassische Gitarre · Clausthal-Zellerfeld, November 2023. Tippe auf ein Foto zum Vergrößern.",

      /* engineer header */
      "eng.kicker": "Der Ingenieur",
      "eng.title": "Intelligenz, angewandt.",

      /* engineer stats + project cards */
      "eng.s1": "Modellarchitekturen im Benchmark",
      "eng.s2": "öffentliche Datensätze vereinheitlicht",
      "eng.s3": "Lithium-Ionen-Zellen analysiert",
      "eng.s4": "Zufalls-Seeds für Verlässlichkeit",
      "eng.cs.tag": "Produkt · Live-Demo",
      "eng.cs.d": "Ein Dashboard für frühen Batteriezustand und Restlebensdauer — es macht Modellvorhersagen auf einer einzigen, in sich geschlossenen Seite zu Flottenentscheidungen. <em>Die Demo läuft mit synthetischen Daten.</em>",
      "eng.cs.link": "Live-Demo öffnen",
      "eng.p2.tag": "Forschung · Masterarbeit",
      "eng.p2.t": "Batterielebensdauer-Vorhersage",
      "eng.p2.d": "Transformer variabler Länge für frühe Restlebensdauer-Vorhersage, verglichen mit rekurrenten und Faltungs-Baselines über sechs Datensätze. Gebaut auf PyTorch, mit reproduzierbarer Mehr-Seed-Pipeline.",
      "eng.p2.m": "TU Clausthal · 2026",
      "eng.p3.tag": "Engineering · Messtechnik",
      "eng.p3.t": "Mechanische Prüfung & Messdatenerfassung",
      "eng.p3.d": "Praktischer Hintergrund in mechanischer Prüfung, Messung und Instrumentierung — Reibmoment- und Berstversuche sowie LabVIEW-/NI-Messdaten-Automatisierung.",
      "eng.p3.m": "Hintergrund",

      /* athlete */
      "ath.kicker": "Der Sportler",
      "ath.title": "Disziplin ist eine tägliche Praxis.",
      "ath.lead": "Im Training schärfe ich den Geist, indem ich den Körper fordere. Beständigkeit vor Intensität, jede Woche.",
      "ath.c1.k": "Disziplin", "ath.c1.v": "Auftauchen", "ath.c1.s": "Die Einheit, die du machst, schlägt die perfekte, die du auslässt.",
      "ath.c2.k": "Rhythmus", "ath.c2.v": "Jede Woche", "ath.c2.s": "Beständigkeit vor Intensität — eine stetige, wiederholbare Gewohnheit.",
      "ath.c3.k": "Balance", "ath.c3.v": "Geist & Körper", "ath.c3.s": "Ein klarer Kopf wird wie ein starker Körper trainiert.",
      "ath.quote": "„Der Körper erreicht, woran der Geist glaubt.“",

      /* manager */
      "mgr.kicker": "Der Manager",
      "mgr.title": "Verstreute Mühe in gemeinsamen Schwung.",
      "mgr.lead": "Führen ist ein eigenes Handwerk — Klarheit, Vertrauen und eine Gruppe von Menschen zu einem Team mit Richtung machen. Ein paar Prinzipien, nach denen ich führe:",
      "mgr.c1.h": "Klarheit zuerst", "mgr.c1.p": "Menschen kommen schnell voran, wenn sie genau wissen, wo „fertig“ ist.",
      "mgr.c2.h": "Vertrauen als Standard", "mgr.c2.p": "Stelle kluge Leute ein, gib ihnen Raum und räume ihre Hindernisse aus dem Weg.",
      "mgr.c3.h": "Entscheiden, dann lernen", "mgr.c3.p": "Eine gute Entscheidung heute schlägt eine perfekte, die zu spät kommt.",
      "mgr.c4.h": "Lob nach außen, Tadel nach innen", "mgr.c4.p": "Siege gehören dem Team; die Fehlschläge trägt die Führung.",

      /* poet */
      "poet.kicker": "Der Dichter",
      "poet.title": "Ein stiller Raum für Worte.",
      "poet.lead": "Zwischen der Gleichung und der Glut halte ich einen kleinen Raum für Worte — ein paar eigene Zeilen, in zwei Sprachen.",
      "poet.cap": "Ein eigener Vers — weitere meiner Gedichte gesellen sich nach und nach dazu.",

      /* personal / human */
      "human.kicker": "Der Mensch",
      "human.title": "Leben jenseits der Uhr.",
      "human.curios": "Neugierden",
      "chip.ai": "Künstliche Intelligenz", "chip.energy": "Energie & Batterien", "chip.paint": "Malen & Gestalten",
      "chip.sport": "Training & Sport", "chip.poetry": "Poesie & Sprache", "chip.german": "Deutsch (A1, in Arbeit)",
      "chip.km": "Wissensmanagement", "chip.coffee": "Kaffee & Gespräch",
      "now.h": "Jetzt · Juni 2026",
      "now.l1": "Ich schließe meine M.Sc.-Arbeit an der TU Clausthal ab.",
      "now.l2": "Bauen & Verfeinern von CellSight.",
      "now.l3": "Deutsch lernen — auf dem Weg zu A1 in diesem Herbst.",
      "now.l4": "Mehr malen, mehr schreiben, mehr trainieren.",

      /* daricheh — translations stub */
      "dar.kicker": "Übersetzungen · داریچه (Daricheh)",
      "dar.title": "Ein kleines Fenster zwischen Sprachen.",
      "dar.lead": "Gedichte und Gedanken zwischen Persisch, Englisch und Deutsch tragen — eine kleine, sorgfältige Praxis.",
      "dar.p1": "Daricheh (داریچه — „ein kleines Fenster“) versammelt meine eigene Übersetzungsarbeit: persische Poesie hin zum Englischen und Deutschen zu bringen — und Gedanken in die andere Richtung. Jedes Stück nennt Quelle und Übersetzer klar, und nur eigene oder frei teilbare Texte finden hier ihren Platz.",
      "dar.w1.h": "Persisch → Englisch", "dar.w1.p": "Vierzeiler und kurze Gedichte, Zeile für Zeile ins Englische getragen, mit dem Original daneben.",
      "dar.w2.h": "Persisch → Deutsch", "dar.w2.p": "Eine langsamere Brücke ins Deutsche — eine Sprache, die ich noch lerne, Vers für Vers, sorgfältig.",
      "dar.w3.h": "Notizen zur Übersetzung", "dar.w3.p": "Kurze Notizen zu den Entscheidungen hinter jedem Stück — was ein Wort trägt und was verloren geht.",
      "dar.soon": "Bald — die ersten Fenster werden vorbereitet.",

      /* shiraz house — archive (cultural history, coming soon) */
      "menu.arthive": "Shiraz House — Archiv",
      "arc.kicker": "Shiraz House · خانهٔ هنر — Archiv",
      "arc.title": "Eine Kulturgeschichte, sorgsam bewahrt.",
      "arc.lead": "Ein respektvolles Archiv des kulturellen Lebens rund um das Khaneh Honar — seine Kinoabende, Kunst und Musik — als bewahrte Erinnerung.",
      "arc.p1": "Dieses Archiv sammelt die dokumentierte Kulturgeschichte des Kunstzentrums Khaneh Honar in Schiras: ein Ort, an dem über viele Jahre Menschen zu Kinoabenden, Ausstellungen und Livemusik zusammenkamen. Es wird hier als kulturelle Erinnerung angeboten — eine Aufzeichnung von Programmen und Abenden, die eine Gemeinschaft rund um die Kunst versammelten.",
      "arc.p2": "Das Ziel ist schlicht und behutsam: an die Ereignisse selbst zu erinnern — die gezeigten Filme, die ausgestellten Werke, die gespielte Musik — und an den Geist eines unabhängigen Raums für die Kunst. Nichts hier ist eine Behauptung über Eigentum oder eine strittige Frage; es ist allein eine Aufzeichnung kultureller Aktivität, sorgsam bewahrt.",
      "arc.c1.h": "Kinoabende", "arc.c1.p": "Abende voller Film und Gespräch — Vorführungen, die Menschen rund um das bewegte Bild versammelten.",
      "arc.c2.h": "Kunst & Ausstellungen", "arc.c2.p": "Schauen für Malerei und bildende Kunst — eine Wand und ein Raum für junge wie etablierte Künstler.",
      "arc.c3.h": "Musikabende", "arc.c3.p": "Livemusik unter einem Dach — stille Konzerte und gemeinsame Auftritte unter Freunden der Kunst.",
      "arc.gallery": "Galerie folgt bald — Bilder werden nur hinzugefügt, wenn sie eigen oder frei teilbar sind.",
      "arc.soon": "Bald — dieses Archiv wird mit Sorgfalt vorbereitet.",

      /* videos + channels */
      "vid.mey": "nach Omar Khayyām · live",
      "vid.amelia": "katalanisches Volkslied",
      "chan.connect": "vernetzen",
      "chan.profile": "Profil",
      "chan.email": "E-Mail",
      "chan.hello": "sag Hallo",

      "contact.kicker": "— Kontakt",
      "contact.title": "Lass uns etwas schaffen, über die Grenzen hinweg.",
      "contact.sub": "Forschung, Kunst, ein Projekt oder einfach ein gutes Gespräch — mein Postfach ist offen.",
      "footer.top": "Nach oben ↑",
      "footer.copy": "© <span id=\"year\">2026</span> Mohammadali Masjedi — Clausthal, Deutschland",
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
    var isRTL = !!RTL[lang];
    html.setAttribute("lang", lang);
    html.setAttribute("dir", isRTL ? "rtl" : "ltr");
    if (isRTL) {
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
        if (d[k] != null) {
          /* values are authored in THIS file only (never user input), so
             innerHTML is safe — it lets translations carry <bdi>/<em>. */
          nodes[i].innerHTML = d[k];
        } else if (isRTL) {
          /* fallback rule: an untranslated string renders as English inside
             <bdi>, so a stray LTR run can never scramble the RTL flow. */
          nodes[i].innerHTML = "<bdi>" + nodes[i].innerHTML + "</bdi>";
        }
      }
      /* attribute-based strings (e.g. the count-up "+ yrs" suffix):
         data-i18n-suffix="key" localizes the data-suffix attribute that
         main.js appends verbatim. Bidi safety in FA comes from the CSS rule
         html[dir="rtl"] .fstat__num { direction:ltr; unicode-bidi:isolate }. */
      var sfx = document.querySelectorAll("[data-i18n-suffix]");
      for (var a = 0; a < sfx.length; a++) {
        var sk = sfx[a].getAttribute("data-i18n-suffix");
        if (d[sk] != null) sfx[a].setAttribute("data-suffix", d[sk]);
      }
    }
    /* expose lang + hero roles for main.js's role cycler */
    window.MAM_I18N = { lang: lang, rtl: isRTL, roles: ROLES[lang] || ROLES.en };
    /* in Persian mode the poem section opens on the Persian poem */
    if (isRTL) {
      var pe = document.querySelector(".poem--en"), pf = document.querySelector(".poem--fa");
      if (pe && pf) { pe.classList.remove("is-active"); pf.classList.add("is-active"); }
      var pb = document.querySelectorAll(".poem-toggle__btn");
      for (var b = 0; b < pb.length; b++) {
        pb[b].classList.toggle("is-active", pb[b].getAttribute("data-lang") === "fa");
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
      b.setAttribute("aria-pressed", L === cur ? "true" : "false");
      b.setAttribute("aria-label", LABEL[L] + (L === cur ? " (current language)" : ""));
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
