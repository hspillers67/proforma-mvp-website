import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import SiteHeader from "@/components/SiteHeader";
import awardsHeroImg from "@/assets/awards-recognition-hero.jpg";

const whatWeSource = [
  {
    title: "Engraved glass & crystal awards",
    description: "Timeless pieces that look at home on any desk.",
  },
  {
    title: "Employee anniversary gifts",
    description: "Mark milestones in a way that feels personal, not obligatory.",
  },
  {
    title: "Premium corporate plaques",
    description: "Recognize achievement with something built to last.",
  },
  {
    title: "Luxury custom gifts",
    description: "For the moments that deserve something exceptional.",
  },
  {
    title: "Onboarding & welcome kits",
    description: "Start the relationship right with a curated first impression.",
  },
  {
    title: "Client appreciation gifts",
    description: "Strengthen relationships with something thoughtful and on-brand.",
  },
];

export default function AwardsRecognition() {
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
                  Employee Recognition &amp; Awards for Houston Area Businesses
                </h1>
                <div className="w-14 h-1 mt-5 mb-5" style={{ backgroundColor: "#9C0057" }} />
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#444444" }}>
                  Custom awards, engraved gifts, plaques, and recognition programs that make the moment land.
                </p>
              </div>
              <div className="lg:flex-1 max-w-xl w-full">
                <img
                  src={awardsHeroImg}
                  alt="Custom crystal award engraved for Master Machinery Inc. — employee recognition"
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
              People remember how you made them feel. A generic gift card says "we had to do something." A thoughtfully chosen, well-branded award says "we noticed."
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether you're marking a work anniversary, welcoming a new hire, closing a big deal, or saying thank you to a client — the right recognition makes the moment land.
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

        {/* Programs That Scale */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Programs That Scale</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recognition shouldn't fall through the cracks because HR is busy or a manager forgot. We can help you build a program — including a{" "}
              <a href="/company-stores" className="text-secondary font-semibold hover:underline">company store</a>{" "}
              — so the right gift goes to the right person at the right time, every time.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us the occasion, your budget, and who you're recognizing. We'll bring you curated options that fit the moment. For ongoing programs, we'll set up a system that runs without you having to think about it.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Recognition Mean Something?</h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              Let's talk about what a recognition program could look like for your team.
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
