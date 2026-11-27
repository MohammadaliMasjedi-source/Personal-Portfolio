"""Optional maintainer test. Run: pip install playwright; playwright install chromium;
python tests/navigation_browser.py. Set CHROMIUM_PATH to use a local browser.
Only local portfolio assets are loaded; CDN, analytics, fonts and media are stubbed.
"""
import functools
import os
import threading
from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


@contextmanager
def site():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    with ThreadingHTTPServer(("127.0.0.1", 0), handler) as server:
        worker = threading.Thread(target=server.serve_forever, daemon=True)
        worker.start()
        try:
            yield f"http://127.0.0.1:{server.server_port}"
        finally:
            server.shutdown()
            worker.join()


# Use the layout as the oracle: the rightmost crossing in document order,
# regardless of the order in which the navigation links were authored.
CHECK = """() => {
 const nav = document.querySelector('.nav__links');
 const ids = [...nav.querySelectorAll('a')].map(a=>a.hash.slice(1));
 const past = [...document.querySelectorAll('main section[id]')]
   .filter(el => ids.includes(el.id) && el.getBoundingClientRect().top <= innerHeight * .35);
 const expected = '#' + (past.length ? past.at(-1).id : ids[0]);
 const marks = [...nav.querySelectorAll('.is-current')].map(a=>a.hash);
 const aria = [...nav.querySelectorAll('[aria-current="location"]')].map(a=>a.hash);
 return {expected,marks,aria,old:nav.querySelectorAll('.is-active').length};
}"""


def check_context(browser, url, width, reduce):
    ctx = browser.new_context(viewport={"width": width, "height": 825}, reduced_motion=reduce)
    ctx.route("**/*", lambda r: r.continue_() if urlparse(r.request.url).hostname == "127.0.0.1"
              else r.fulfill(status=204))
    pg = ctx.new_page()
    errors = []
    pg.on("pageerror", lambda exc: errors.append(str(exc)))
    pg.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
    pg.goto(url)
    checks = 0
    for lang in ("en", "fa", "de"):
        if lang != "en":
            pg.locator(f'#langSwitch [lang="{lang}"]').click()
        pg.wait_for_function("(l) => document.documentElement.lang === l", arg=lang)
        assert pg.locator("html").get_attribute("dir") == ("rtl" if lang == "fa" else "ltr")
        ys = pg.evaluate("""() => [0, ...[...document.querySelectorAll('main section[id]')]
          .filter(el => el.offsetHeight > 0).flatMap(el => {
            const {top,height}=el.getBoundingClientRect();
            return [top + scrollY, top + scrollY + height/2];
          }),document.documentElement.scrollHeight]""")
        for y in [*ys, *reversed(ys)]:
            pg.evaluate("""async y => { window.scrollTo({top:y,behavior:'instant'});
                await new Promise(r => requestAnimationFrame(()=>requestAnimationFrame(r))); }""", y)
            s = pg.evaluate(CHECK)
            assert s["marks"] == s["aria"] == [s["expected"]] and not s["old"], (lang, width, y, s)
            checks += 1
        if width < 600:
            pg.locator("#burger").click()
            assert pg.locator("#menu").get_attribute("aria-hidden") == "false"
            pg.keyboard.press("Escape")
            assert pg.locator("#burger").get_attribute("aria-expanded") == "false"
        # Scroll events that do not change section should not flip aria-current off/on.
        mutations = pg.evaluate("""async () => {
         let n=0;const ob=new MutationObserver(ls=>n+=ls.length);
         ob.observe(document.querySelector('.nav__links'),{subtree:true,attributes:true,
          attributeFilter:['class','aria-current']});
         window.dispatchEvent(new Event('scroll'));await Promise.resolve();ob.disconnect();return n;
        }""")
        assert mutations == 0, mutations
    assert not errors, errors
    ctx.close()
    print(f"{width}px / {reduce}: {checks} rendered scroll positions; EN, FA and DE passed")


def main():
    # Short-lived instances also support CI Chromium builds with one browser process.
    args = ["--disable-dev-shm-usage", "--no-zygote", "--single-process"] if os.getenv("PORTFOLIO_CI_SINGLE_PROCESS") else []
    with site() as url, sync_playwright() as pw:
        b = pw.chromium.launch(executable_path=os.getenv("CHROMIUM_PATH"), args=args)
        check_context(b, url, 1280, "no-preference")
        b.close()
        b = pw.chromium.launch(executable_path=os.getenv("CHROMIUM_PATH"), args=args)
        check_context(b, url, 390, "reduce")
        b.close()
        b = pw.chromium.launch(executable_path=os.getenv("CHROMIUM_PATH"), args=args)
        ctx = b.new_context(java_script_enabled=False)
        ctx.route("**/*", lambda r: r.continue_() if urlparse(r.request.url).hostname == "127.0.0.1"
                  else r.fulfill(status=204))
        p = ctx.new_page()
        p.goto(url)
        hero = p.locator(".hero")
        assert hero.is_visible()
        assert p.locator("main [data-reveal]").first.evaluate("e => getComputedStyle(e).opacity") == "1"
        link=p.locator('.nav__links a[href="#research"]')
        link.click()
        assert p.url.endswith("#research")
        b.close()
        print("No JavaScript: visible content and native section link passed")


if __name__ == "__main__":
    main()
