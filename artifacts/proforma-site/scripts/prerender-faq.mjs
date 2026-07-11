import { readFileSync, mkdirSync, writeFileSync } from "fs";
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

// ── Sitemap ──────────────────────────────────────────────────────────────────
const BASE_URL = "https://www.proformamvpmarketing.com";

const staticRoutes = [
  "/",
  "/blog",
  "/trending",
  "/testimonials",
  "/faq",
  "/company-stores",
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
