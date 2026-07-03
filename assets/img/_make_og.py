"""Render assets/img/og.png (1200x630) from the brand design in og.svg.
Pillow-only, no external SVG renderer. Fonts: Segoe UI (sans) + Georgia Italic
(serif) as local substitutes for Space Grotesk / Instrument Serif.
Run: python assets/img/_make_og.py
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (6, 6, 8)
img = Image.new("RGB", (W, H), BG)

# --- corner glows (purple top-right, cyan bottom-left) via stacked ellipses ---
def glow(center, color, radius, peak_alpha, steps=60):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = center
    for i in range(steps, 0, -1):
        r = radius * i / steps
        a = int(peak_alpha * (1 - i / steps) ** 2)
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color + (a,))
    img.alpha_composite(layer)

img = img.convert("RGBA")
glow((960, 10), (111, 92, 255), 760, 90)     # g1 purple
glow((60, 620), (31, 227, 255), 680, 60)     # g2 cyan
img = img.convert("RGB")
draw = ImageDraw.Draw(img)

# --- lightning bolt (og.svg path translated by (90,250)) ---
bolt = [(142, 250), (98, 328), (128, 328), (120, 382), (174, 296), (140, 296)]
draw.polygon(bolt, fill=(200, 250, 60))

FONTS = "C:/Windows/Fonts/"
f_eyebrow = ImageFont.truetype(FONTS + "segoeui.ttf", 26)
f_title   = ImageFont.truetype(FONTS + "segoeuib.ttf", 92)
f_serif   = ImageFont.truetype(FONTS + "georgiai.ttf", 56)
f_foot    = ImageFont.truetype(FONTS + "segoeui.ttf", 24)

def spaced(draw, xy, text, font, fill, spacing, anchor="ls"):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill, anchor=anchor)
        x += draw.textlength(ch, font=font) + spacing

# eyebrow (letter-spaced), big title, footer
spaced(draw, (92, 200), "MO · MASSJEDI", f_eyebrow, (167, 171, 182), 6)
draw.text((88, 430), "AI/ML Researcher", font=f_title, fill=(244, 245, 247), anchor="ls")
draw.text((92, 575), "TU Clausthal · Germany", font=f_foot, fill=(106, 111, 124), anchor="ls")

# --- gradient serif line (lime -> cyan) via a text mask ---
serif_txt = "battery intelligence & data science"
mask = Image.new("L", (W, H), 0)
ImageDraw.Draw(mask).text((92, 510), serif_txt, font=f_serif, fill=255, anchor="ls")
grad = Image.new("RGB", (W, H), (0, 0, 0))
gpx = grad.load()
c0, c1 = (200, 250, 60), (31, 227, 255)
x0, x1 = 92, 92 + int(draw.textlength(serif_txt, font=f_serif))
for x in range(W):
    t = min(1.0, max(0.0, (x - x0) / max(1, (x1 - x0))))
    col = tuple(int(c0[k] + (c1[k] - c0[k]) * t) for k in range(3))
    for y in range(460, 530):
        gpx[x, y] = col
img.paste(grad, (0, 0), mask)

import os
img.save(os.path.join(os.path.dirname(os.path.abspath(__file__)), "og.png"), "PNG")
print("wrote og.png", img.size)
