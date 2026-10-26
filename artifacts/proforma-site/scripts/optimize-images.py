"""Generate resized WebP copies of site images for responsive <img srcSet>.

Usage (from artifacts/proforma-site):
    python3 scripts/optimize-images.py

Each entry below maps a source image to an output base name and the widths
to produce. Outputs land in src/assets/optimized/<name>-<width>.webp.
Widths larger than the source are skipped (never upscale). Re-run after
replacing a source image, then commit the new .webp files.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "src" / "assets"
ATTACHED = ROOT.parent.parent / "attached_assets"
OUT = ASSETS / "optimized"
QUALITY = 78

IMAGES = [
    # (source, output name, widths)
    (ATTACHED / "cover_1782665562519.png", "hero-swatches", [2000]),
    (ASSETS / "company-stores.png", "company-stores", [480, 960]),
    (ASSETS / "promo-products.png", "promo-products", [480, 960]),
    (ASSETS / "apparel.png", "apparel", [480, 960]),
    (ASSETS / "tradeshows-events.png", "tradeshows-events", [480, 960]),
    (ASSETS / "print-signage.jpg", "print-signage", [480, 960]),
    (ASSETS / "recognition-incentives.png", "recognition-incentives", [480, 960]),
    (ASSETS / "our-advantage.jpg", "our-advantage", [640, 1080]),
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for src, name, widths in IMAGES:
        im = Image.open(src)
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        made = []
        for w in widths:
            w = min(w, im.width)
            if w in made:
                continue
            h = round(im.height * w / im.width)
            out = OUT / f"{name}-{w}.webp"
            im.resize((w, h), Image.LANCZOS).save(out, "WEBP", quality=QUALITY, method=6)
            made.append(w)
            print(f"{out.relative_to(ROOT)}  {w}x{h}  {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
