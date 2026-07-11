import { type ContentBlock } from "@/data/posts";
import imgYeti from "@/assets/trending/yeti-pace-purple-royal-blue.png";

export interface TrendingPost {
  slug: string;
  title: string;
  subhead: string;
  excerpt: string;
  tags: string[];
  date: string;
  image: string;
  imageAlt: string;
  pageTitle: string;
  metaDescription: string;
  footnote?: string;
  ctaUrl: string;
  content: ContentBlock[];
}

export const PRODUCT_TAGS = ["Limited Edition", "Seasonal", "New Arrivals"] as const;

export const TAG_COLORS: Record<string, string> = {
  "Limited Edition": "bg-secondary/10 text-secondary border-secondary/20",
  "Seasonal": "bg-amber-50 text-amber-700 border-amber-200",
  "New Arrivals": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export const trendingPosts: TrendingPost[] = [
  {
    slug: "yeti-pace-purple-royal-blue",
    title: "Limited Edition Seasonal Colors: YETI Pace Purple & Royal Blue",
    subhead: "Two bold new colorways — now available for custom branding",
    excerpt: "YETI's Pace Purple and Royal Blue seasonal colors are here. Bold, limited, and built for the brands that don't settle for generic.",
    tags: ["Limited Edition", "Seasonal"],
    date: "July 11, 2026",
    image: imgYeti,
    imageAlt: "YETI Pace Purple and Royal Blue seasonal drinkware lineup including tumblers, water bottles, and can coolers with custom branding",
    pageTitle: "Limited Edition Seasonal Colors: YETI Pace Purple & Royal Blue | ProForma MVP Marketing",
    metaDescription: "YETI's limited edition Pace Purple and Royal Blue seasonal colors are available now for custom branding. See the full product lineup and contact ProForma MVP Marketing to order.",
    footnote: "YETI® is limited to US customers only. YETI products purchased must be resold only with embellishment.",
    ctaUrl: "https://www.proformamvpmarketing.com/#contact",
    content: [
      { type: "paragraph", text: "Every time YETI drops a seasonal color, people pay attention. And these two? They're going to disappear fast." },
      { type: "paragraph", text: "Pace Purple and Royal Blue are now available for custom laser engraving, making them an easy upgrade for companies that want branded drinkware people will keep." },
      { type: "paragraph", text: "Here's the catch: they're limited edition. Once these seasonal colors sell out, that's it. No restocks. No \"maybe next month.\"" },
      { type: "paragraph", text: "Both colors are available across multiple YETI styles and sizes, whether you're putting together client gifts, employee appreciation kits, event giveaways, or stocking a company store." },
      { type: "heading", level: 2, text: "Pace Purple" },
      { type: "paragraph", text: "Pace Purple is confident without trying too hard. It's bold enough to stand out but polished enough that it still feels right in a boardroom, on a job site, or anywhere in between." },
      { type: "paragraph", text: "Available Pace Purple styles:" },
      { type: "list", items: [
        "18 oz Water Bottle",
        "20 oz Tumbler",
        "30 oz Tumbler",
        "20 oz Stackable Pint",
      ]},
      { type: "heading", level: 2, text: "Royal Blue" },
      { type: "paragraph", text: "Royal Blue is one of those colors that just works. It's clean, vibrant, easy to pair with almost any brand color, and looks great in photos — which matters more than most people think." },
      { type: "paragraph", text: "It's also a crowd-pleaser, whether you're ordering for employees, customers, or event attendees." },
      { type: "paragraph", text: "Available Royal Blue styles:" },
      { type: "list", items: [
        "Can Coolers",
        "20 oz Stackable Pint",
        "20 oz Tumbler",
        "Straw Mugs",
        "18 oz Water Bottle",
        "Chug-Cap Water Bottles",
      ]},
      { type: "heading", level: 2, text: "Why YETI Works for Corporate Gifting" },
      { type: "paragraph", text: "People recognize the brand immediately. They use it every day. And instead of ending up in the junk drawer, it ends up in the truck, on the job site, at the gym, or sitting on someone's desk for years." },
      { type: "paragraph", text: "That's exactly why YETI drinkware continues to be one of the smartest choices for corporate gifting, especially for Houston businesses in oil and gas, manufacturing, construction, healthcare, and professional services." },
      { type: "paragraph", text: "Add custom laser engraving, and you get a permanent, premium finish that looks intentional — not like someone slapped a logo on a giveaway. No peeling. No fading. No cheap promo-product vibes." },
      { type: "heading", level: 2, text: "Limited Availability" },
      { type: "paragraph", text: "Seasonal YETI colors have one thing in common: they don't stick around." },
      { type: "paragraph", text: "If Pace Purple or Royal Blue fits an upcoming event, holiday gifting program, employee recognition initiative, or company store, now's the time to grab them before they're gone." },
      { type: "paragraph", text: "Need help choosing the right style, quantity, or engraving option? We'll make the process easy and help you find the best fit for your audience and your budget." },
    ],
  },
];

export function getTrendingPost(slug: string): TrendingPost | undefined {
  return trendingPosts.find((p) => p.slug === slug);
}
