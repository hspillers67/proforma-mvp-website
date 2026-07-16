import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import brandedApparelHeroImg from "@/assets/branded-apparel-hero.png";

const whatWeSource = [
  {
    title: "Corporate apparel",
    description: "Polos, button-downs, jackets, and outerwear for client-facing teams.",
  },
  {
    title: "Uniforms",
    description: "Consistent, on-brand workwear for frontline and operational staff.",
  },
  {
    title: "Safety & workwear",
    description: "Hi-vis, flame-resistant, and industry-specific gear with your logo.",
  },
  {
    title: "Trade show apparel",
    description: "Dress your team to stand out on the floor.",
  },
  {
    title: "Team & event apparel",
    description: "T-shirts, hoodies, and hats for company events, runs, and outings.",
  },
  {
    title: "Retail-inspired styles",
    description: "Premium brands your employees will wear off the clock too.",
  },
];

export default function BrandedApparel() {
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
                  <a href="/branded-apparel" className="block px-5 py-2.5 text-sm font-display font-semibold text-secondary hover:bg-muted/50 transition-colors">Uniforms &amp; Branded Apparel</a>
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
                  Branded Apparel &amp; Uniforms for Houston Area Businesses
                </h1>
                <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#444444" }}>
                  From corporate polos to job site gear — decorated and delivered for teams of every size.
                </p>
              </div>
              <div className="lg:flex-1 max-w-xl w-full">
                <img
                  src={brandedApparelHeroImg}
                  alt="Branded apparel — vests, hoodies, quarter-zips, polos, and hats with custom logos"
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
              What your team wears says something about your company before anyone opens their mouth. Whether it's a polo at a client meeting, a uniform on the job site, or a branded jacket at a trade show — the right apparel builds credibility and pulls a team together.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We source branded apparel and uniforms for businesses of every size, from single-location companies to multi-site operations. Whatever your team needs to look sharp and feel good wearing it, we can find it.
            </p>
          </div>
        </section>

        {/* What We Source */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl mx-auto">What We Source</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatWeSource.map((item) => (
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

        {/* Brand Consistency */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Brand Consistency Across Every Location</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you manage apparel for multiple locations or departments, we can set up a{" "}
              <a href="/company-stores" className="text-secondary font-semibold hover:underline">company store</a>{" "}
              so everyone orders from the same approved catalog — no rogue logos, no off-brand colors, no size chaos.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us who's wearing it, where they're wearing it, and what impression you want to make. We'll handle the rest — from decoration method to sizing to delivery.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Outfit Your Team?</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Let's talk about what branded apparel could look like for your business.
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
