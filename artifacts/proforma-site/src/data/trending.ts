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

export const PRODUCT_TAGS = ["Limited Edition", "Seasonal", "New Arrival"] as const;
export const INDUSTRY_TAGS = ["Oil & Gas", "Manufacturing", "Education"] as const;

export const TAG_COLORS: Record<string, string> = {
  "Limited Edition": "bg-secondary/10 text-secondary border-secondary/20",
  "Seasonal": "bg-amber-50 text-amber-700 border-amber-200",
  "New Arrival": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Oil & Gas": "bg-blue-50 text-blue-700 border-blue-200",
  "Manufacturing": "bg-slate-100 text-slate-700 border-slate-200",
  "Education": "bg-violet-50 text-violet-700 border-violet-200",
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
      { type: "paragraph", text: "YETI's seasonal color releases are some of the most anticipated moments in the branded drinkware calendar — and Pace Purple and Royal Blue are no exception." },
      { type: "paragraph", text: "These two limited-edition colorways are available now for custom laser engraving. Because they're seasonal, they won't be around forever. When the run sells out, it's gone." },
      { type: "paragraph", text: "Both colors are available across multiple YETI vessel sizes and styles, giving you a full lineup to choose from for client gifts, employee recognition, event giveaways, or company stores." },
      { type: "heading", level: 2, text: "Pace Purple" },
      { type: "paragraph", text: "Pace Purple is a rich, confident color — bold enough to stand out but refined enough to work across professional settings. It's a strong choice for brands that want something memorable without going overly casual." },
      { type: "paragraph", text: "Available Pace Purple styles:" },
      { type: "list", items: [
        "18 oz Water Bottle",
        "20 oz Tumbler",
        "30 oz Tumbler",
        "20 oz Stackable Pint",
      ]},
      { type: "heading", level: 2, text: "Royal Blue" },
      { type: "paragraph", text: "Royal Blue is energetic, clean, and immediately recognizable. It photographs well, pairs with a wide range of brand color palettes, and has broad appeal across industries and age groups." },
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
      { type: "paragraph", text: "YETI has earned a level of brand equity that most promotional product manufacturers don't reach. Recipients recognize it. They keep it. They use it daily." },
      { type: "paragraph", text: "For Houston-area businesses in oil and gas, manufacturing, construction, healthcare, and professional services, YETI drinkware is one of the most reliable ways to give a premium gift that actually gets used — whether it's going on a job site, into a truck, or onto a conference room table." },
      { type: "paragraph", text: "Custom laser engraving gives the vessel a clean, permanent mark that looks intentional and high-end. No ink, no peeling, no looking like a standard promo item." },
      { type: "heading", level: 2, text: "Limited Availability — Order Early" },
      { type: "paragraph", text: "Seasonal YETI colorways sell through quickly. Once inventory is gone, it doesn't come back. If Pace Purple or Royal Blue fits an upcoming event, gift program, or company store, the best time to move on it is now." },
      { type: "paragraph", text: "We'll help you figure out the right style, quantity, and engraving approach for your audience and budget." },
    ],
  },
];

export function getTrendingPost(slug: string): TrendingPost | undefined {
  return trendingPosts.find((p) => p.slug === slug);
}
