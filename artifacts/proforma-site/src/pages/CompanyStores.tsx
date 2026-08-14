import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import SiteHeader from "@/components/SiteHeader";
import companyStoresImg from "@/assets/company-stores-hero.png";

const useCases = [
  {
    title: "Employee apparel programs",
    description: "New hires order their own gear. No more size spreadsheets.",
  },
  {
    title: "Recognition & rewards",
    description: "Give employees points or allowances to redeem for branded gifts.",
  },
  {
    title: "Uniform management",
    description: "One place for all locations to order approved, on-brand uniforms.",
  },
  {
    title: "Holiday gifting",
    description: "Let employees choose their own gift from a curated selection.",
  },
  {
    title: "Event & seasonal stores",
    description: "Open a store for a specific campaign, then close it when it's done.",
  },
  {
    title: "Client & partner stores",
    description: "Give your clients or dealers access to co-branded merchandise.",
  },
];

export default function CompanyStores() {
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
                  Company Stores That Run Themselves
                </h1>
                <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#444444" }}>
                  Custom online merch programs for Houston-area businesses — so your team can order what they need, when they need it.
                </p>
              </div>
              <div className="lg:flex-1 max-w-xl w-full">
                <img
                  src={companyStoresImg}
                  alt="Company stores — custom online branded merchandise programs"
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
              If you've ever managed branded apparel or merchandise for a team, you know the drill. Emails back and forth. Size confusion. Orders placed too late. Products that don't match. It's a lot of work for something that should be simple.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-semibold text-primary">
              A company store fixes that.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We build custom online stores — powered by Proforma's ProStores™ platform — where your employees, clients, or team members can order{" "}
              <a href="/promotional-products" className="text-secondary font-semibold hover:underline">promotional products</a>{" "}
              and branded merchandise on their own, on their schedule. You set the rules. We handle the rest.
            </p>
          </div>
        </section>

        {/* Who Uses Company Stores */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl mx-auto">Who Uses Company Stores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((item) => (
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

        {/* How It Works */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We set up your store, load your approved products, and configure it to match your brand. Your team gets a link. They order what they need. You get reporting, not chaos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stores can be open 24/7 or run as a limited-time pop-up. We handle fulfillment, inventory, and customer support so you don't have to.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Merch Program?</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Let's talk about what a company store could look like for your business.
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
