import { ArrowRight } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import SiteHeader from "@/components/SiteHeader";
import NotFound from "@/pages/not-found";
import { getIndustry, industries } from "@/data/industries";

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) return <NotFound />;

  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader currentPage="industries" />

      <main className="flex-grow pt-20 md:pt-28">
        {/* Page Header */}
        <section style={{ backgroundColor: "#F5F5F5" }} className="py-10 md:py-14">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-sm font-display font-semibold uppercase tracking-wider text-secondary mb-3">
              Industry focus · {industry.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">{industry.h1}</h1>
            <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#444444" }}>
              {industry.answer}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">{industry.intro}</p>
          </div>
        </section>

        {/* What we supply */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 max-w-4xl mx-auto">{industry.supplyHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {industry.supply.map((item) => (
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

        {/* Why it's different */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{industry.differentHeading}</h2>
            {industry.different.map((para) => (
              <p key={para} className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Programs that make it easier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.programs.map((p) => (
                <div key={p.title} className="border-l-4 border-secondary pl-5">
                  <h3 className="font-display font-semibold text-primary text-lg mb-1">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">
              Related:{" "}
              <a href="/company-stores" className="text-secondary font-semibold hover:underline">Company Stores</a>
              {" · "}
              <a href="/branded-apparel" className="text-secondary font-semibold hover:underline">Uniforms &amp; Branded Apparel</a>
              {" · "}
              <a href="/awards-recognition" className="text-secondary font-semibold hover:underline">Awards &amp; Recognition</a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Common questions</h2>
            <div className="space-y-6">
              {industry.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display font-semibold text-primary text-lg mb-1">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-muted-foreground">
              <a href="/industries" className="text-secondary font-semibold hover:underline">All industries we serve</a>
              {" · "}Other industry focus areas:{" "}
              {others.map((o, idx) => (
                <span key={o.slug}>
                  <a href={`/industries/${o.slug}`} className="text-secondary font-semibold hover:underline">{o.name}</a>
                  {idx < others.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{industry.ctaHeading}</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Tell us what you need and when. We'll take it from there.
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
