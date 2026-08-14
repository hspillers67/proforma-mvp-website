import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import SiteHeader from "@/components/SiteHeader";
import printHeroImg from "@/assets/print-packaging-hero.png";

const whatWeProduce = [
  {
    title: "Business cards & stationery",
    description: "First impressions start here. Make them count.",
  },
  {
    title: "Marketing brochures & flyers",
    description: "Leave-behinds that actually get kept.",
  },
  {
    title: "Large-format window graphics",
    description: "Turn your space into a brand statement.",
  },
  {
    title: "Outdoor & indoor event signs",
    description: "Directional, promotional, and everything in between.",
  },
  {
    title: "Custom packaging",
    description: "Boxes, bags, and wrapping that make your product feel premium.",
  },
  {
    title: "Banners & displays",
    description: "Portable, professional, and built for repeat use.",
  },
];

export default function PrintingPackaging() {
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
                  Print, Signage &amp; Packaging for Houston Area Businesses
                </h1>
                <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#444444" }}>
                  Every printed piece should look like you mean business — from the card you hand to a new contact to the backdrop at your booth.
                </p>
              </div>
              <div className="lg:flex-1 max-w-xl w-full">
                <img
                  src={printHeroImg}
                  alt="Custom business cards and print materials for Houston area businesses"
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
              Print isn't dead. It's just easier to do wrong. A flimsy brochure, a pixelated banner, a business card that feels cheap — these things leave an impression, just not the right one.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We help Houston-area businesses get print right. From the business card you hand to a new contact to the backdrop behind your{" "}
              <a href="/trade-show-products" className="text-secondary font-semibold hover:underline">trade show booth</a>,
              {" "}every printed piece should look like you mean business.
            </p>
          </div>
        </section>

        {/* What We Produce */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl mx-auto">What We Produce</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatWeProduce.map((item) => (
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

        {/* Cohesive Across Every Touchpoint */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Cohesive Across Every Touchpoint</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The best print programs tie everything together — your colors, your fonts, your message — so every piece looks like it belongs to the same brand. We help you build that consistency, whether you need one item or a full suite of materials.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Share your artwork, your deadline, and your distribution plan. We'll handle production and delivery. If you need design help getting files print-ready, we can handle that too.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Print Work Harder for Your Brand?</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Let's talk about what you need.
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
