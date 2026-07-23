import { type ContentBlock } from "@/data/posts";
import imgYeti from "@/assets/trending/yeti-pace-purple-royal-blue.png";
import imgDumpling from "@/assets/trending/squishy-dumpling-stress-toy.png";
import imgMixtape from "@/assets/trending/awesome-mixtape-wireless-speaker.png";
import imgMixtapeDock from "@/assets/trending/awesome-mixtape-wireless-speaker-dock.jpg";
import imgMixtapeCase from "@/assets/trending/awesome-mixtape-wireless-speaker-case.jpg";

export interface TrendingPost {
  slug: string;
  title: string;
  subhead: string;
  excerpt: string;
  tags: string[];
  date: string;
  image: string;
  imageAlt: string;
  imageBgClass?: string;
  pageTitle: string;
  metaDescription: string;
  footnote?: string;
  ctaUrl: string;
  content: ContentBlock[];
}

export const PRODUCT_TAGS = ["Limited Edition", "Seasonal", "New Arrivals", "Editor's Pick"] as const;

export const TAG_COLORS: Record<string, string> = {
  "Limited Edition": "bg-secondary/10 text-secondary border-secondary/20",
  "Seasonal": "bg-amber-50 text-amber-700 border-amber-200",
  "New Arrivals": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Editor's Pick": "bg-violet-50 text-violet-700 border-violet-200",
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
  {
    slug: "squishy-dumpling-stress-toy",
    title: "Squishy Dumpling Stress Toy",
    subhead: "The branded giveaway people can't resist picking up.",
    excerpt: "Some promotional products get a quick glance. The Squishy Dumpling Stress Toy gets picked up, squeezed, passed around, and somehow always ends up in someone's desk drawer.",
    tags: ["New Arrivals"],
    date: "July 11, 2026",
    image: imgDumpling,
    imageAlt: "Squishy Dumpling Stress Toy in steamer basket packaging, shown in multiple colors including cream, green, pink, blue, purple, and red",
    imageBgClass: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50",
    pageTitle: "Squishy Dumpling Stress Toy — Custom Branded Giveaway | ProForma MVP Marketing",
    metaDescription: "The Squishy Dumpling Stress Toy is a slow-rising TPE stress reliever packaged in a recycled ABS steamer basket. Available in 7 colors with custom logo imprint — perfect for trade shows, recruiting events, and employee wellness programs.",
    ctaUrl: "https://www.proformamvpmarketing.com/#contact",
    content: [
      { type: "paragraph", text: "Some promotional products get a quick glance." },
      { type: "paragraph", text: "The Squishy Dumpling Stress Toy gets picked up, squeezed, passed around the office, and somehow always disappears into someone's desk drawer. (In other words, people keep it.)" },
      { type: "paragraph", text: "Made from soft, flexible, stretchy TPE, this slow-rising stress toy bounces back to its original shape after every squeeze. It's oddly satisfying, encourages focus, and offers a calming sensory experience that's perfect for busy workdays." },
      { type: "paragraph", text: "Even better? It's available with your custom logo, making it a memorable branded giveaway for trade shows, recruiting events, employee wellness programs, healthcare organizations, schools, and company swag kits." },
      { type: "heading", level: 2, text: "Why people love it" },
      { type: "list", items: [
        "Soft, slow-rising texture that's hard to put down",
        "Stretch, squeeze, and knead away everyday stress",
        "Encourages focus and provides a calming sensory experience",
        "Returns to its original shape after squeezing",
        "Packaged in a recycled ABS steamer basket for an extra dose of personality",
        "Fun for all ages 3+",
      ]},
      { type: "heading", level: 2, text: "Available Colors" },
      { type: "paragraph", text: "Choose from:" },
      { type: "list", items: [
        "Blue",
        "Cream",
        "Light Blue",
        "Lime Green",
        "Pink",
        "Purple",
        "Red",
      ]},
      { type: "paragraph", text: "Each color comes with a natural-colored steamer basket that makes the whole thing even more fun to hand out." },
      { type: "heading", level: 2, text: "A promotional product people remember" },
      { type: "paragraph", text: "The best branded merchandise creates a moment." },
      { type: "paragraph", text: "It usually starts with, \"Wait...is that a dumpling?\"" },
      { type: "paragraph", text: "It's unexpected, interactive, and surprisingly difficult to put down — which means your brand stays on someone's desk instead of disappearing into a drawer after the event." },
      { type: "paragraph", text: "Whether you're putting together trade show giveaways, employee gifts, recruiting swag, or company store merchandise, the Squishy Dumpling Stress Toy is one of those new arrivals people won't forget." },
    ],
  },
  {
    slug: "awesome-mixtape-wireless-speaker",
    title: "Awesome Mixtape Wireless Speaker",
    subhead: "The retro giveaway everyone will want to get their hands on.",
    excerpt: "Some promotional products are useful. Others are memorable. The Awesome Mixtape Wireless Speaker manages to be both.",
    tags: ["Editor's Pick"],
    date: "July 23, 2026",
    image: imgMixtape,
    imageAlt: "Custom branded cassette-shaped wireless speaker with full-color logo printing on sides A and B",
    imageBgClass: "bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50",
    pageTitle: "Custom Cassette Wireless Speaker | Retro Promotional Products | ProForma MVP Marketing",
    metaDescription: "Branded retro cassette speaker with full-color custom design. A trending promotional product for corporate gifting and event giveaways.",
    ctaUrl: "https://www.proformamvpmarketing.com/#contact",
    content: [
      { type: "paragraph", text: "Some promotional products are useful. Others are memorable. The Awesome Mixtape Wireless Speaker manages to be both." },
      { type: "paragraph", text: "Designed to look like an old-school cassette tape, this pocket-sized wireless speaker brings a little nostalgia to a product people can actually use — at their desk, at home, while traveling, or anywhere they want to take their music." },
      { type: "paragraph", text: "The cassette's label can be completely customized with a full-color design, giving you far more creative freedom than simply placing a logo on the front." },
      { type: "list", items: [
        "Create a custom album cover",
        "Add a campaign message",
        "Print a playlist on the packaging",
        "Include a QR code that leads to a branded Spotify playlist",
      ]},
      { type: "paragraph", text: "This is where branded promotional products get fun." },
      { type: "heading", level: 2, text: "Why Retro Promotional Products Are Trending Right Now" },
      { type: "paragraph", text: "Searches for retro-themed corporate gifts and 90s-nostalgia branded merchandise have been climbing, but nostalgia alone isn't what makes a giveaway successful." },
      { type: "paragraph", text: "This product works because it pairs a familiar, feel-good design with technology people already use every day. It feels unexpected when someone receives it, but it keeps a practical purpose long after the initial novelty wears off — which is exactly what separates a trending promotional product from a forgettable one." },
      { type: "paragraph", text: "It's also built for sharing. People show it to coworkers, snap a photo, and ask where it came from — giving your brand more organic attention than a standard wireless speaker would ever get on its own." },
      { type: "heading", level: 2, text: "Made for Creative Branded Campaigns" },
      { type: "paragraph", text: "The custom cassette speaker gives you several areas to customize, including both sides of the cassette and the case insert. That opens the door to campaign ideas such as:" },
      { type: "list", items: [
        "A custom company mixtape",
        "A QR code linked to a branded Spotify playlist",
        "Employee appreciation gifts",
        "Client thank-you campaigns",
        "Conference and event giveaways",
        "Product launches",
        "Recruiting gifts",
        "Anniversary or milestone celebrations",
        "Music-themed direct mailers",
        "Throwback or retro event themes",
      ]},
      { type: "paragraph", text: "You're not limited to putting your logo on it. The entire design can support the story behind your campaign." },
      { type: "heading", level: 2, text: "Small Enough to Go Anywhere" },
      { type: "paragraph", text: "At approximately 4 inches wide, the speaker is compact enough to fit in a pocket, bag, or desk drawer. Use it for workouts, travel, relaxing at home, or adding a little music to the workday." },
      { type: "heading", level: 2, text: "Product Details" },
      { type: "list", items: [
        "Wireless speaker with retro cassette-tape styling",
        "Full-color customization on sides A and B",
        "Customizable case insert",
        "Compact, portable design",
        "Available in black",
        "Approximately 4\" × 2.52\" × 0.48\"",
        "Minimum quantity: 50",
        "Standard production time: approximately 5–7 working days after artwork approval",
      ]},
      { type: "images", items: [
        { src: imgMixtapeCase, alt: "Custom branded cassette case with full-color event artwork — Las Vegas Summit 2023 example" },
        { src: imgMixtapeDock, alt: "Awesome Mixtape Wireless Speaker shown in its cassette case with USB charging cable" },
      ]},
      { type: "heading", level: 2, text: "Frequently Asked Questions" },
      { type: "paragraph", text: "Can I customize both sides of the cassette speaker? Yes. Both the front and back of the cassette design can be fully customized in full color, along with the case insert — giving you room for a logo, campaign message, custom album art, or a playlist printout." },
      { type: "paragraph", text: "What's the minimum order for a custom cassette speaker? The minimum order quantity is 50 units, with standard production of approximately 5–7 working days after artwork approval." },
      { type: "paragraph", text: "Can I add a QR code to a cassette speaker giveaway? Yes. A QR code can be added to the design or packaging, linking recipients to a branded Spotify playlist, a campaign landing page, or any digital experience you want to pair with the physical gift." },
      { type: "heading", level: 2, text: "Put Your Own Spin on It" },
      { type: "paragraph", text: "This product becomes much more effective when the speaker, artwork, packaging, and digital experience all work together." },
      { type: "paragraph", text: "We can help you develop the theme, create the artwork, add a playlist or QR code, and turn it into a complete branded campaign — instead of another logoed giveaway." },
      { type: "paragraph", text: "Interested in creating your own company mixtape? Contact us for ideas, pricing, and availability." },
    ],
  },
];

export function getTrendingPost(slug: string): TrendingPost | undefined {
  return trendingPosts.find((p) => p.slug === slug);
}
