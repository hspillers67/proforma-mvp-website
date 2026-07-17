import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import giftingHeroImg from "@/assets/corporate-gifting-hero.jpg";

const whatWeBuildFor = [
  {
    title: "Prospecting Gifts",
    description: "Stand out with curated gifts that start conversations and open doors.",
  },
  {
    title: "Thank-You & Closed-Deal Gifts",
    description: "Celebrate a new partnership with a gift that keeps the relationship moving forward.",
  },
  {
    title: "Event Invitations & Follow-Ups",
    description: "Keep your brand top of mind before and after trade shows, conferences, and client events.",
  },
  {
    title: "Year-End & Holiday Client Gifts",
    description: "Close out the year with gifts clients look forward to opening.",
  },
  {
    title: "Internal & Team Recognition",
    description: "Celebrate milestones, welcome new hires, recognize achievements, and thank your team with gifts that reflect your culture.",
  },
  {
    title: "Curated, Not One-Size-Fits-All",
    description: "We don't believe in one-size-fits-all gifting. Every gift is curated around the recipient's role, industry, or occasion, so it feels relevant from the moment it's opened.",
  },
];

export default function CorporateGifting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10">
        <div className="mx-auto px-8 h-28 flex items-center justify-between max-w-screen-2xl">
          <Link href="/">
            <img
              src={logoHorizontalPath}
              alt="ProForma MVP Marketing"
              className="h-12 w-auto cursor-pointer"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Home</Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-base font-display font-medium text-white hover:text-white transition-colors border-b border-secondary pb-0.5">
                Capabilities <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-border py-1.5 min-w-[230px]">
                  <a href="/company-stores" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Company Stores</a>
                  <a href="/promotional-products" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Promotional Products</a>
                  <a href="/branded-apparel" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Uniforms &amp; Branded Apparel</a>
                  <a href="/trade-show-products" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Tradeshows &amp; Events</a>
                  <a href="/printing-packaging" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Print &amp; Packaging</a>
                  <a href="/awards-recognition" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Awards &amp; Recognition</a>
                  <a href="/corporate-gifting" className="block px-5 py-2.5 text-sm font-display font-semibold text-secondary hover:bg-muted/50 transition-colors">Corporate Gifting</a>
                </div>
              </div>
            </div>
            <a href="/#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Blog</Link>
            <Link href="/trending" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Trending</Link>
            <Link href="/testimonials" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Testimonials</Link>
            <Link href="/faq" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">FAQ</Link>
            <a href="https://proformamvpmarketing.espwebsites.com/" target="_blank" rel="noopener noreferrer" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Browse Products</a>
            <a href="/#contact" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href="/#contact"
            className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-secondary px-7 text-sm font-display font-semibold text-white shadow transition-colors hover:bg-secondary/90"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="flex-grow pt-28">
        {/* Page Header */}
        <section style={{ backgroundColor: "#F5F5F5" }} className="py-10 md:py-14">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="max-w-[600px]">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
                  Corporate Gifting That Gets a Response, Not Just a Thank-You
                </h1>
                <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
                <p className="text-xl md:text-2xl font-semibold leading-snug mb-4" style={{ color: "#222222" }}>
                  Generic gifts blend in. Relevant gifts get remembered.
                </p>
                <p className="text-lg leading-relaxed mb-3" style={{ color: "#444444" }}>
                  The best corporate gifts aren't the most expensive. They're the most relevant.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "#444444" }}>
                  From real estate closings and client appreciation to executive prospecting and employee recognition, we curate gift bundles that fit the audience and the occasion. Then we handle the sourcing, branding, packaging, and fulfillment, so you get memorable gifts without adding another task to your team's to-do list.
                </p>
              </div>
              <div className="lg:flex-1 max-w-xl w-full">
                <img
                  src={giftingHeroImg}
                  alt="Personalized corporate gift box, curated and branded for a client campaign"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Build Gifts For */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl mx-auto">When to Send a Gift</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatWeBuildFor.map((item) => (
                <div
                  key={item.title}
                  className="bg-muted/30 border border-border rounded-xl px-7 py-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-display font-semibold text-primary text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Do the Math */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Do the Math</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every hour your sales team spends shopping, packing, and shipping gifts is an hour they're not building relationships or closing business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We take care of the sourcing, branding, packaging, and fulfillment so your team can stay focused on what they do best. Once you factor in payroll and lost selling time, outsourcing your gifting often costs less than doing it yourself.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Whether you need one gift or one hundred, we'll help you find the right fit for your audience and your budget.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us who you're gifting, your budget, and the occasion. We'll recommend curated options, handle the sourcing, branding, packaging, and shipping, and deliver gifts that are ready to impress.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Send Gifting That Gets a Response?</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Let's talk about what a gifting campaign could look like for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-secondary px-10 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://proformamvpmarketing.espwebsites.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white/70 bg-white/10 backdrop-blur-sm px-10 text-base font-display font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-primary"
              >
                Browse Products
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img
              src={logoHorizontalPath}
              alt="ProForma MVP Marketing"
              className="h-8 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} ProForma MVP Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
