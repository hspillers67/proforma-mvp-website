// Content for the industry pages (/industries/:slug).
// Rendered by src/pages/IndustryPage.tsx and mirrored into the pre-rendered
// HTML + schema by scripts/prerender.mjs (which imports this file through the
// SSR bundle), so this is the single place to edit industry copy.

export interface IndustryItem {
  title: string;
  description: string;
}

export interface IndustryFaq {
  q: string;
  a: string;
}

export interface Industry {
  slug: string;
  name: string; // short name for nav and breadcrumbs
  pageTitle: string; // <title>
  metaDescription: string;
  h1: string;
  answer: string; // first paragraph: answers "who supplies X for Y in Houston?"
  intro: string;
  supplyHeading: string;
  supply: IndustryItem[];
  differentHeading: string;
  different: string[];
  programs: IndustryItem[];
  faqs: IndustryFaq[];
  ctaHeading: string;
}

export const industries: Industry[] = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    pageTitle: "Promotional Products & FR Apparel for Houston Oil & Gas | ProForma MVP Marketing",
    metaDescription:
      "Branded FR and hi-vis apparel, safety program awards, and trade show giveaways for Houston-area oil and gas companies. One local contact, from sourcing to delivery.",
    h1: "Promotional Products & Branded Apparel for Houston Oil & Gas Companies",
    answer:
      "ProForma MVP Marketing supplies branded FR-rated apparel, hi-vis workwear, safety program awards, and trade show merchandise to oil and gas companies across Greater Houston. We're based in Katy and handle everything from sourcing to delivery.",
    intro:
      "Oil and gas teams don't need more stuff with a logo on it. They need gear that meets site requirements, holds up in Texas heat, and gets to the right location on time. That's the job.",
    supplyHeading: "What we supply for oil & gas",
    supply: [
      { title: "FR-rated apparel", description: "Flame-resistant shirts, coveralls, and outerwear decorated with your logo, matched to your site's requirements." },
      { title: "Hi-vis workwear", description: "ANSI-compliant high-visibility vests, shirts, and jackets for field and plant crews." },
      { title: "Safety program awards", description: "Milestone gifts and recognition items for incident-free days, safety stand-downs, and training completions." },
      { title: "Corporate & office apparel", description: "Polos, quarter-zips, and outerwear for office teams, engineers, and client meetings." },
      { title: "Trade show & conference merch", description: "Booth giveaways and team apparel for events like OTC and industry conferences." },
      { title: "Onboarding kits", description: "Welcome kits for new hires and contractors, built and shipped to each location." },
    ],
    differentHeading: "Why it's different in oil & gas",
    different: [
      "PPE requirements vary by facility, and sometimes by department. FR apparel has to be FR all the way through, including the decoration. Tell us your site's specific requirements and we'll match compliant options rather than guessing.",
      "Crews are spread across offices, plants, and field sites. Getting the right sizes to the right place matters as much as the product itself.",
    ],
    programs: [
      { title: "Company stores", description: "An online store where crews order approved FR and hi-vis gear, so every location gets the same compliant items." },
      { title: "Safety recognition", description: "A planned calendar of safety milestone gifts so recognition happens on time, not as an afterthought." },
    ],
    faqs: [
      { q: "Do you supply FR-rated apparel with company logos?", a: "Yes. We source flame-resistant apparel and decorate it with your logo using methods appropriate for FR garments. Share your site's PPE requirements and we'll match compliant options." },
      { q: "Can you ship to multiple field sites?", a: "Yes. We can split orders by location and ship directly to offices, plants, or field sites, or set up a company store so each site orders its own." },
      { q: "Do you handle trade show merchandise for oil and gas events?", a: "Yes. We supply booth giveaways, team apparel, and displays for industry conferences and trade shows, including Houston events like OTC." },
      { q: "Where are you located?", a: "We're based in Katy, Texas, and serve oil and gas companies across Greater Houston, including the Energy Corridor, Pasadena, Baytown, and the Gulf Coast." },
    ],
    ctaHeading: "Need gear that meets site requirements?",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    pageTitle: "Promotional Products & Uniforms for Houston Manufacturers | ProForma MVP Marketing",
    metaDescription:
      "Uniforms, safety workwear, employee recognition, and recruiting merchandise for Houston-area manufacturers. Sourced, decorated, and delivered from Katy, TX.",
    h1: "Promotional Products & Uniforms for Houston Manufacturers",
    answer:
      "ProForma MVP Marketing supplies uniforms, safety workwear, employee recognition items, and recruiting merchandise to manufacturers across Greater Houston. We're based in Katy and manage everything from product selection to delivery.",
    intro:
      "On a plant floor, branded gear has to work. It needs to survive daily wear, meet safety requirements, and still be something your people are proud to put on. We keep both in mind.",
    supplyHeading: "What we supply for manufacturing",
    supply: [
      { title: "Uniforms & workwear", description: "Durable shirts, pants, and outerwear that hold up to daily plant use and repeated washing." },
      { title: "Safety apparel", description: "Hi-vis and flame-resistant options for areas that require them, matched to your requirements." },
      { title: "Safety program items", description: "Practical, useful items that reinforce safety messages and reward milestones." },
      { title: "Employee recognition", description: "Service anniversary awards, appreciation gifts, and team celebration items." },
      { title: "Recruiting & job fair merch", description: "Giveaways and apparel that help your booth stand out when you're competing for skilled workers." },
      { title: "Plant signage & print", description: "Safety signage, banners, and printed materials for the floor and the front office." },
    ],
    differentHeading: "Why it's different in manufacturing",
    different: [
      "A uniform program for multiple shifts and sizes gets messy fast. Missing sizes, mismatched colors, and reorders nobody tracked are the usual headaches.",
      "Recruiting matters too. When you're competing for skilled workers, the apparel and swag your team shows up with says something about what it's like to work there.",
    ],
    programs: [
      { title: "Company stores", description: "Employees order approved uniforms and gear themselves, with allowances you control. No more spreadsheet circus." },
      { title: "Recognition programs", description: "Anniversary and milestone gifts planned ahead so they arrive on the right day." },
    ],
    faqs: [
      { q: "Can you manage a uniform program for multiple shifts?", a: "Yes. A company store lets employees order their own sizes from an approved catalog, with spending limits you set, so you're not collecting sizes by hand." },
      { q: "Do you offer safety apparel for manufacturing plants?", a: "Yes. We source hi-vis and flame-resistant apparel for areas that need it. Tell us your plant's requirements and we'll match compliant options." },
      { q: "What's the minimum order?", a: "Most products have a minimum, usually 12 to 50 pieces, but it varies. We'll always tell you up front." },
      { q: "Where do you serve?", a: "We're based in Katy, Texas, and work with manufacturers across Greater Houston, including Katy, Brookshire, Cypress, Pasadena, and the Ship Channel area." },
    ],
    ctaHeading: "Ready to simplify your uniform program?",
  },
  {
    slug: "education",
    name: "Education",
    pageTitle: "Promotional Products & Spirit Wear for Houston Schools | ProForma MVP Marketing",
    metaDescription:
      "Staff apparel, spirit wear, event giveaways, and recognition items for Houston-area schools, districts, and colleges. One local contact in Katy, TX.",
    h1: "Promotional Products & Spirit Wear for Houston-Area Schools",
    answer:
      "ProForma MVP Marketing supplies staff apparel, spirit wear, event giveaways, and recognition items to schools, school districts, and colleges across Greater Houston. We're based in Katy and handle sourcing, decoration, and delivery.",
    intro:
      "Schools need products that fit tight budgets and still feel current to students and staff. Whether it's a campus event, staff appreciation week, or a new spirit wear line, we help you get it right the first time.",
    supplyHeading: "What we supply for education",
    supply: [
      { title: "Staff apparel", description: "Polos, tees, and outerwear for teachers, administrators, and support staff." },
      { title: "Spirit wear", description: "Shirts, hoodies, and hats for students, families, and booster clubs." },
      { title: "Event giveaways", description: "Items for open houses, college fairs, orientation, and community events." },
      { title: "Staff appreciation & recognition", description: "Teacher appreciation gifts, years-of-service awards, and end-of-year recognition." },
      { title: "Recruiting & enrollment", description: "Branded items for hiring fairs and enrollment events." },
      { title: "Print & signage", description: "Banners, signs, and printed materials for campuses and events." },
    ],
    differentHeading: "Why it's different in education",
    different: [
      "Budgets are tight and timelines often follow the school calendar. Back-to-school, homecoming, and staff appreciation week don't move, so planning ahead makes all the difference.",
      "Products also need to feel useful and current to students. An item that ends up in the trash isn't a savings, even if it was cheap.",
    ],
    programs: [
      { title: "Online spirit stores", description: "A store where families and staff order spirit wear directly, so your office isn't collecting cash and sizes." },
      { title: "Annual planning", description: "A calendar of the year's events and orders, so nothing gets rushed." },
    ],
    faqs: [
      { q: "Do you work with school districts and colleges?", a: "Yes. We work with schools, districts, and community colleges on staff apparel, spirit wear, event giveaways, and recognition items." },
      { q: "Can families order spirit wear online?", a: "Yes. We can set up an online store so families and staff order and pay directly, and orders ship or deliver to campus." },
      { q: "What's your turnaround time?", a: "Most standard orders arrive in 7 to 14 business days after artwork approval. For back-to-school and homecoming, we recommend ordering early. Rush options are available." },
      { q: "Where do you serve?", a: "We're based in Katy, Texas, and serve schools and colleges across Greater Houston, including Katy, Cypress, Fulshear, Sugar Land, and Houston." },
    ],
    ctaHeading: "Planning your next school event?",
  },
  {
    slug: "construction",
    name: "Construction",
    pageTitle: "Branded Hi-Vis Apparel & Promo Products for Houston Construction | ProForma MVP Marketing",
    metaDescription:
      "Hi-vis workwear, branded crew apparel, hard hat stickers, and safety recognition for Houston-area construction companies. Sourced and delivered from Katy, TX.",
    h1: "Branded Apparel & Promotional Products for Houston Construction Companies",
    answer:
      "ProForma MVP Marketing supplies hi-vis workwear, branded crew apparel, safety recognition items, and jobsite signage to construction companies across Greater Houston. We're based in Katy and handle sourcing through delivery.",
    intro:
      "On a jobsite, your logo is on every crew member, every truck, and every sign. Branded gear that holds up in Houston heat keeps your crews safe, visible, and easy to recognize.",
    supplyHeading: "What we supply for construction",
    supply: [
      { title: "Hi-vis workwear", description: "ANSI-compliant high-visibility shirts, vests, and jackets with your logo." },
      { title: "Crew apparel", description: "Durable, breathable shirts and outerwear built for long days outside." },
      { title: "Hard hat stickers & decals", description: "Logo stickers and decals for hard hats, equipment, and vehicles." },
      { title: "Safety recognition", description: "Rewards for safety milestones, toolbox talks, and training completions." },
      { title: "Jobsite signage", description: "Banners, fence wraps, and signs that mark your projects and your brand." },
      { title: "Client & subcontractor gifts", description: "Project completion and appreciation gifts for clients and trade partners." },
    ],
    differentHeading: "Why it's different in construction",
    different: [
      "A crew working alongside traffic doesn't have the same needs as one working inside a building. Hi-vis requirements depend on the job, so tell us where your crews work and we'll match the right gear.",
      "Houston heat is its own requirement. Lightweight, moisture-wicking fabrics make the difference between gear crews wear and gear that stays in the truck.",
    ],
    programs: [
      { title: "Company stores", description: "Crews and foremen order approved gear themselves, so every jobsite looks consistent." },
      { title: "Safety recognition", description: "A planned approach to rewarding safe work, with items crews actually use." },
    ],
    faqs: [
      { q: "Do you supply ANSI-compliant hi-vis apparel with company logos?", a: "Yes. We source ANSI-compliant high-visibility vests, shirts, and jackets and decorate them with your logo. Tell us where your crews work and we'll match the right class of gear." },
      { q: "Can you make hard hat stickers and jobsite signage?", a: "Yes. We supply hard hat stickers, equipment decals, banners, fence wraps, and other jobsite signage." },
      { q: "What apparel works best in Houston heat?", a: "Lightweight, moisture-wicking performance fabrics work best for long days outside. We'll recommend options your crews will actually wear." },
      { q: "Where do you serve?", a: "We're based in Katy, Texas, and work with construction companies across Greater Houston, including Katy, Houston, Sugar Land, The Woodlands, and Pearland." },
    ],
    ctaHeading: "Ready to outfit your crews?",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
