import { ArrowRight } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import SiteHeader from "@/components/SiteHeader";
import { industries, industriesHub, otherIndustries } from "@/data/industries";

export default function IndustriesHub() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader currentPage="industries" />

      <main className="flex-grow pt-20 md:pt-28">
        {/* Focus industries (page headline) */}
        <section style={{ backgroundColor: "#F5F5F5" }} className="py-10 md:py-14">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-sm font-display font-semibold uppercase tracking-wider text-secondary mb-3">
              Industries we serve
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">{industriesHub.h1}</h1>
            <div className="w-14 h-1 mt-5 mb-8" style={{ backgroundColor: "#9C0057" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((i) => (
                <a
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="group block bg-white border border-border rounded-xl px-7 py-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="font-display font-semibold text-primary text-xl mb-2 flex items-center gap-2">
                    {i.name}
                    <ArrowRight className="w-4 h-4 text-secondary transition-transform group-hover:translate-x-1" />
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {i.supply.slice(0, 3).map((s) => s.title).join(" · ")}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Beyond Our Focus Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {otherIndustries.map((o) => (
                <div key={o.name} className="border-l-4 border-secondary pl-5">
                  <h3 className="font-display font-semibold text-primary text-lg">{o.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{o.examples}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Don't see your industry? The approach is the same: who's receiving it, where it'll be used, and what impression you want to make.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's talk about your business</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Tell us what you need and when. We'll take it from there.
            </p>
            <a
              href="/#contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-secondary px-10 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
            >
              Let's Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
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
