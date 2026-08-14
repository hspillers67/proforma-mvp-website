import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import SiteHeader from "@/components/SiteHeader";
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
      <SiteHeader currentPage="capabilities" />

      <main className="flex-grow pt-20 md:pt-28">
        {/* Page Header */}
        <section style={{ backgroundColor: "#F5F5F5" }} className="py-10 md:py-14">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="max-w-[600px]">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
                  Promotional Products for Houston Area Businesses
                </h1>
                <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#444444" }}>
                  The right branded merchandise for every occasion — sourced, managed, and delivered by people who get marketing.
                </p>
              </div>
              <div className="lg:flex-1 max-w-xl w-full">
                <img
                  src={promoCollageImg}
                  alt="Promotional products — drinkware, bags, headwear, apparel and more"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro copy */}
        <section className="py-8 md:py-10 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
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
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl mx-auto">What We Help You With</h2>
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
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
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
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              You get a real person — someone with 15+ years of client-side marketing experience — who understands how branded products fit into a larger marketing strategy. We're not an online order form. We listen, we consult, and we make sure every product decision serves a purpose.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Backed by Proforma's $650M in buying power and deep supplier relationships, we can source virtually anything — and get it right the first time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Katy, Texas — serving Houston-area businesses and clients nationwide.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
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
