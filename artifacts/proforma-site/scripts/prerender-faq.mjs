import { readFileSync, mkdirSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dir, "..", "dist", "public");

const faqs = [
  {
    question: "What types of products do you offer?",
    answer:
      "We provide promotional products, branded apparel, and printing solutions like banners, signage, and brochures. If it can carry your logo or your message, we'll find it—and make sure it looks good.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Our clients are usually marketing managers, HR teams, and purchasing departments in industries like manufacturing, oil & gas, engineering, construction, healthcare, and education. But honestly, any business that wants to strengthen connections with employees, customers, or prospects is a fit.",
  },
  {
    question: "What makes you different from other promotional product companies?",
    prefix: "We don't just sell swag—we help you create a strategy. That means:",
    bullets: [
      "Products that serve your actual goals (not just fill a swag drawer).",
      "A clear, consultative process that saves you time.",
      "Company stores that simplify ordering and eliminate errors.",
      "Decades of experience + Proforma's $650M buying power.",
    ],
  },
  {
    question: "Do you offer company stores for employees, clients, events, and retail?",
    answer:
      "Yes! Our ProStores™ make it easy to manage apparel, printed products, and branded merch for retail, employees, contractors, or events—all without the spreadsheet circus.",
  },
  {
    question: "Can you help with design?",
    answer:
      "Absolutely. Whether it's making your logo print-ready or brainstorming creative product ideas, our design team has you covered.",
  },
  {
    question: "What's your turnaround time?",
    answer:
      "It depends on the product, but most standard orders are delivered in 7–14 business days after artwork approval. Rush options are available.",
  },
  {
    question: "Is there a minimum order size?",
    answer:
      "Most products do have a minimum (usually 12–50 pieces), but it varies. We'll always let you know up front so there are no surprises.",
  },
  {
    question: "Do you offer eco-friendly or sustainable products?",
    answer:
      "Absolutely. From recycled and organic materials to reusable essentials, we've got plenty of ways to keep your brand green.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in Katy, Texas, serving greater Houston and beyond. But we work with clients nationwide.",
  },
  {
    question: "How do I get started?",
    answer:
      "Easy. Just contact us with your project details—budget, audience, event date. We'll create a tailored proposal with ideas that fit your goals. Email us at info.mvp@proforma.com or call 281.831.3527.",
  },
];

function escape(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function faqToHtml(faq) {
  const parts = [];
  if (faq.prefix) parts.push(`<p>${escape(faq.prefix)}</p>`);
  if (faq.bullets) {
    parts.push(
      "<ul>" + faq.bullets.map((b) => `<li>${escape(b)}</li>`).join("") + "</ul>"
    );
  }
  if (faq.answer) parts.push(`<p>${escape(faq.answer)}</p>`);
  return `<div><h2>${escape(faq.question)}</h2>${parts.join("")}</div>`;
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [faq.prefix, ...(faq.bullets ?? []), faq.answer]
        .filter(Boolean)
        .join(" "),
    },
  })),
};

const staticContent = `<div id="faq-prerender"><h1>Frequently Asked Questions</h1>${faqs.map(faqToHtml).join("")}</div>`;

const baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");

const faqHtml = baseHtml
  .replace(
    "</head>",
    `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n</head>`
  )
  .replace("<div id=\"root\"></div>", `<div id="root">${staticContent}</div>`);

mkdirSync(join(distDir, "faq"), { recursive: true });
writeFileSync(join(distDir, "faq", "index.html"), faqHtml);
console.log("Pre-rendered /faq → dist/public/faq/index.html");

// ── Trending post prerendering ────────────────────────────────────────────────
const BASE_URL = "https://www.proformamvpmarketing.com";

// Read Vite manifest to resolve hashed asset filenames for og:image.
// Manifest is only emitted when build.manifest=true in vite.config.ts.
let manifest = {};
try {
  manifest = JSON.parse(readFileSync(join(distDir, ".vite", "manifest.json"), "utf-8"));
  console.log(`Loaded Vite manifest (${Object.keys(manifest).length} entries)`);
} catch {
  console.warn("Vite manifest not found — will rely on asset-scan fallback for og:image");
}

// Pre-load the dist/public/assets directory listing for fallback resolution.
let distAssets = [];
try {
  distAssets = readdirSync(join(distDir, "assets"));
} catch {
  distAssets = [];
}

/**
 * Resolve a source-relative image path (e.g. "src/assets/trending/yeti.png")
 * to a fully-qualified production URL for og:image / twitter:image.
 *
 * Strategy (in order):
 *  1. Vite manifest lookup — key is the path relative to the Vite root.
 *  2. Asset-directory scan — find a file in dist/public/assets/ whose name
 *     starts with the original filename stem (Vite preserves the stem before
 *     the content-hash suffix, e.g. "yeti-pace-purple-royal-blue-BXk3aQ2T.png").
 *  3. Site-default og-image — logged as a warning so it's never silent.
 */
function resolveOgImage(srcPath) {
  // 1. Manifest lookup
  const entry = manifest[srcPath];
  if (entry) {
    console.log(`  [manifest] ${srcPath} → ${entry.file}`);
    return `${BASE_URL}/${entry.file}`;
  }

  // 2. Filename-stem scan of dist/public/assets/
  const filename = srcPath.split("/").pop();            // "yeti-pace-purple-royal-blue.png"
  const stem = filename.replace(/\.[^.]+$/, "");        // "yeti-pace-purple-royal-blue"
  const ext = filename.match(/\.[^.]+$/)?.[0] ?? "";   // ".png"
  const match = distAssets.find(
    (f) => f.startsWith(stem) && f.endsWith(ext)
  );
  if (match) {
    console.log(`  [asset-scan] ${srcPath} → assets/${match}`);
    return `${BASE_URL}/assets/${match}`;
  }

  // 3. Fallback — always log so this is never silently wrong
  console.warn(`  [WARN] Could not resolve og:image for "${srcPath}" — using site default`);
  return `${BASE_URL}/og-image.png`;
}

function escapeAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

const trendingMeta = [
  {
    slug: "yeti-pace-purple-royal-blue",
    pageTitle: "Limited Edition Seasonal Colors: YETI Pace Purple & Royal Blue | ProForma MVP Marketing",
    metaDescription: "YETI's limited edition Pace Purple and Royal Blue seasonal colors are available now for custom branding. See the full product lineup and contact ProForma MVP Marketing to order.",
    imageSrc: "src/assets/trending/yeti-pace-purple-royal-blue.png",
    imageAlt: "YETI Pace Purple and Royal Blue seasonal drinkware lineup including tumblers, water bottles, and can coolers with custom branding",
  },
  {
    slug: "squishy-dumpling-stress-toy",
    pageTitle: "Squishy Dumpling Stress Toy — Custom Branded Giveaway | ProForma MVP Marketing",
    metaDescription: "The Squishy Dumpling Stress Toy is a slow-rising TPE stress reliever packaged in a recycled ABS steamer basket. Available in 7 colors with custom logo imprint.",
    imageSrc: "src/assets/trending/squishy-dumpling-stress-toy.png",
    imageAlt: "Squishy Dumpling Stress Toy in steamer basket packaging, shown in multiple colors including cream, green, pink, blue, purple, and red",
  },
  {
    slug: "awesome-mixtape-wireless-speaker",
    pageTitle: "Custom Cassette Wireless Speaker | Retro Promotional Products | ProForma MVP Marketing",
    metaDescription: "Branded retro cassette speaker with full-color custom design. A trending promotional product for corporate gifting and event giveaways.",
    imageSrc: "src/assets/trending/awesome-mixtape-wireless-speaker-case.jpg",
    imageAlt: "Custom branded cassette case with full-color event artwork",
  },
];

for (const post of trendingMeta) {
  const canonical = `${BASE_URL}/trending/${post.slug}`;
  const ogImage = resolveOgImage(post.imageSrc);

  const headTags = `
    <title>${escapeAttr(post.pageTitle)}</title>
    <meta name="description" content="${escapeAttr(post.metaDescription)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeAttr(post.pageTitle)}" />
    <meta property="og:description" content="${escapeAttr(post.metaDescription)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="${escapeAttr(post.imageAlt)}" />
    <meta property="og:site_name" content="ProForma MVP Marketing" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(post.pageTitle)}" />
    <meta name="twitter:description" content="${escapeAttr(post.metaDescription)}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${escapeAttr(post.imageAlt)}" />`;

  // Replace homepage meta tags with post-specific ones
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(post.pageTitle)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeAttr(post.metaDescription)}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeAttr(post.pageTitle)}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeAttr(post.metaDescription)}" />`)
    .replace(/<meta property="og:url"[^>]*>[\n]?/, "") // remove if present
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${ogImage}" />`)
    .replace(/<meta property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${escapeAttr(post.imageAlt)}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="article" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeAttr(post.pageTitle)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeAttr(post.metaDescription)}" />`)
    .replace(/<meta name="twitter:image"[^>]*>(?!\:)/, `<meta name="twitter:image" content="${ogImage}" />`)
    .replace(/<meta name="twitter:image:alt"[^>]*>/, `<meta name="twitter:image:alt" content="${escapeAttr(post.imageAlt)}" />`);

  // Also inject a canonical og:url tag after og:type if not already present
  if (!html.includes('property="og:url"')) {
    html = html.replace(
      /<meta property="og:type"[^>]*>/,
      `<meta property="og:type" content="article" />\n    <meta property="og:url" content="${canonical}" />`
    );
  }

  mkdirSync(join(distDir, "trending", post.slug), { recursive: true });
  writeFileSync(join(distDir, "trending", post.slug, "index.html"), html);
  console.log(`Pre-rendered /trending/${post.slug} → dist/public/trending/${post.slug}/index.html`);
}

// ── Sitemap ──────────────────────────────────────────────────────────────────

const staticRoutes = [
  "/",
  "/blog",
  "/trending",
  "/testimonials",
  "/faq",
  "/company-stores",
  "/corporate-gifting",
  "/promotional-products",
  "/branded-apparel",
  "/trade-show-products",
  "/printing-packaging",
  "/awards-recognition",
];

const blogSlugs = [
  "smarter-promotional-products-houston",
  "branded-apparel-houston-teams-will-want-to-wear",
  "branded-apparel-vs-tech-gadgets",
  "real-cost-of-promotional-products",
  "make-onboarding-unforgettable",
  "planning-your-2026-promotional-marketing-spend",
];

const trendingSlugs = [
  "yeti-pace-purple-royal-blue",
  "squishy-dumpling-stress-toy",
  "awesome-mixtape-wireless-speaker",
];

const allUrls = [
  ...staticRoutes,
  ...blogSlugs.map((s) => `/blog/${s}`),
  ...trendingSlugs.map((s) => `/trending/${s}`),
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${url === "/" ? "1.0" : url.startsWith("/trending/") || url.startsWith("/blog/") ? "0.8" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync(join(distDir, "sitemap.xml"), sitemap);
console.log(`Sitemap → dist/public/sitemap.xml (${allUrls.length} URLs)`);
