"""Generate resized WebP copies of site images for responsive <img srcSet>.

Usage (from artifacts/proforma-site):
    python3 scripts/optimize-images.py

Each entry below maps a source image to an output base name and the widths
to produce. Outputs land in src/assets/optimized/<name>-<width>.webp.
Widths larger than the source are skipped (never upscale). Re-run after
replacing a source image, then commit the new .webp files.

An optional 4th element is a crop box (left, top, right, bottom) applied
before resizing — use it when the page only ever shows part of an image.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "src" / "assets"
ATTACHED = ROOT.parent.parent / "attached_assets"
OUT = ASSETS / "optimized"
QUALITY = 78

IMAGES = [
    # (source, output name, widths[, crop box])
    # Hero: the page only ever shows a ~1.8:1 window of this 2000x600 image
    # (object-cover at 75% horizontal), so ship just that part.
    (ATTACHED / "cover_1782665562519.png", "hero-swatches-crop", [640, 1100], (675, 0, 1775, 600)),
    # Tall portrait shown in a 3:2 card (object-cover, centered): ship only that band.
    (ASSETS / "company-stores.png", "company-stores-crop", [365], (0, 271, 365, 514)),
    (ASSETS / "promo-products.png", "promo-products", [480, 960]),
    (ASSETS / "apparel.png", "apparel", [480, 960]),
    (ASSETS / "tradeshows-events.png", "tradeshows-events", [480, 960]),
    (ASSETS / "print-signage.jpg", "print-signage", [480, 960]),
    (ASSETS / "recognition-incentives.png", "recognition-incentives", [480, 960]),
    (ASSETS / "our-advantage.jpg", "our-advantage", [640, 1080]),
    # Logos: 1x and 2x of their on-screen size (used with srcSet "1x, 2x").
    (ASSETS / "logo-horizontal.png", "logo-horizontal", [160, 320]),  # 32-48px tall
    (ASSETS / "logo-white.png", "logo-white", [90, 180, 480]),  # 40-56px tall; 480 for big placeholders
    (ASSETS / "logo.png", "logo", [80, 160]),  # 48px tall
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for src, name, widths, *crop in IMAGES:
        im = Image.open(src)
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        if crop:
            im = im.crop(crop[0])
        made = []
        for w in widths:
            w = min(w, im.width)
            if w in made:
                continue
            h = round(im.height * w / im.width)
            out = OUT / f"{name}-{w}.webp"
            im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=QUALITY, method=6, **({"lossless": True} if name.startswith("logo") else {}))
            made.append(w)
            print(f"{out.relative_to(ROOT)}  {w}x{h}  {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
