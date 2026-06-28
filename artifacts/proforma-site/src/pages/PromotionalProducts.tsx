import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import promoCollageImg from "@/assets/promo-products-collage.png";

const useCases = [
  {
    title: "Trade show giveaways",
    href: "/trade-show-products",
    description: "Products people actually keep, not toss in a hotel trash can.",
  },
  {
    title: "Client gifts",
    href: null,
    description: "Thoughtful, on-brand items that strengthen relationships.",
  },
  {
    title: "Employee recognition",
    href: null,
    description: "From service awards to milestone gifts, we make it easy.",
  },
  {
    title: "Onboarding kits",
    href: null,
    description: "Give new hires something that makes them proud to be on the team.",
  },
  {
    title: "Event merchandise",
    href: null,
    description: "Branded items that extend the life of your event beyond the day itself.",
  },
  {
    title: "Company stores",
    href: "/company-stores",
    description: "Simplify ordering for teams, locations, and ongoing programs.",
  },
];

export default function PromotionalProducts() {
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
                  <a href="/promotional-products" className="block px-5 py-2.5 text-sm font-display font-medium text-secondary font-semibold hover:bg-muted/50 transition-colors">Promotional Products</a>
                  <a href="/branded-apparel" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Uniforms &amp; Branded Apparel</a>
                  <a href="/trade-show-products" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Tradeshows &amp; Events</a>
                  <a href="/printing-signage" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Print &amp; Signage</a>
                  <a href="/employee-gifts-recognition" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Recognition &amp; Incentives</a>
                </div>
              </div>
            </div>
            <a href="/#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Blog</Link>
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
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Promotional Products for Houston Area Businesses
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
                The right branded merchandise for every occasion — sourced, managed, and delivered by people who get marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Collage image */}
        <section className="bg-white">
          <div className="container mx-auto px-6 max-w-5xl py-12">
            <img
              src={promoCollageImg}
              alt="Promotional products — drinkware, bags, headwear, apparel and more"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Intro copy */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              You already know branded merchandise works. The question is whether you're getting products that actually fit your goals — or just filling a swag drawer.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Proforma MVP Marketing, we help Houston-area businesses find the right products for the right moment.{" "}
              <a href="/trade-show-products" className="text-secondary font-semibold hover:underline">Trade show giveaways</a>.
              {" "}Client gifts. Employee appreciation. Onboarding kits. New location openings. Whatever the occasion, we make sure your brand shows up looking sharp.
            </p>
          </div>
        </section>

        {/* What We Help You With */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 max-w-3xl mx-auto">What We Help You With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="bg-muted/30 border border-border rounded-xl px-7 py-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-display font-semibold text-primary text-lg mb-2">
                    {item.href ? (
                      <a href={item.href} className="hover:text-secondary transition-colors">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              You don't need to spend hours browsing a catalog. Tell us your budget, your audience, and your timeline — we'll bring you curated options that make sense. We handle everything from artwork approval through delivery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most standard orders ship in 7–14 business days. Rush options are available. Minimums vary by product, typically 12–50 pieces. We'll always tell you upfront.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You get a real person — someone with 15+ years of client-side marketing experience — who understands how branded products fit into a larger marketing strategy. Backed by Proforma's $650M in buying power, we can source virtually anything at competitive pricing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Tell us about your project and we'll put together a tailored recommendation — no obligation.
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
