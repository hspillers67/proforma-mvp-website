# Proforma MVP Marketing website

React + Vite site in `artifacts/proforma-site`, deployed to Netlify from `main`
(see `netlify.toml`). Work on a branch and open a pull request so Holly can check
the Netlify deploy preview before merging.

## Images: always optimize

The site was flagged by HubSpot Website Grader for page size (6.2 MB home page)
because photos were committed as multi-megabyte PNGs. Keep pages under ~3 MB.

When adding or replacing any image (home page, service pages, blog posts):

- Never reference a raw PNG/JPG straight from an AI tool, Canva, or a camera.
  Convert to WebP, sized for how large it actually displays.
- Add the image to the `IMAGES` list in
  `artifacts/proforma-site/scripts/optimize-images.py` (source path, output name,
  widths) and run `python3 scripts/optimize-images.py` from
  `artifacts/proforma-site`. Outputs go to `src/assets/optimized/`; commit them.
- Typical widths: card/thumbnail images `[480, 960]`; half-width photos
  `[640, 1080]`; full-width banners up to the source width (don't upscale).
- In the `<img>`, use `srcSet` + `sizes` for the generated widths, and add
  `loading="lazy" decoding="async"` to anything below the first screen. The
  page's main hero image instead gets `fetchPriority="high"` and no lazy-load.
- Keep the original file in place in case it is used elsewhere or needs
  re-exporting.
- After changes, check total page weight (e.g. headless browser) and mention the
  before/after numbers.

Blog banners (`src/data/posts.ts`, rendered full-width in `BlogPost.tsx` with
`bannerAspect`) look soft on high-resolution screens below ~3,000px wide. If
Holly supplies a new banner, check its width and tell her if a 4K export from AI
Studio would be sharper. Compress it (JPEG q≈85 or WebP) before committing.
