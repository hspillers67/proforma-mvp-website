import { motion } from "framer-motion";
import { ArrowRight, MapPin, PenTool, Box, Printer } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import logoPath from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logoPath} alt="ProForma MVP Marketing" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-display font-medium text-muted-foreground hover:text-secondary transition-colors">Services</a>
            <a href="#process" className="text-sm font-display font-medium text-muted-foreground hover:text-secondary transition-colors">Process</a>
            <a href="#contact" className="text-sm font-display font-medium text-muted-foreground hover:text-secondary transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-secondary px-6 text-sm font-display font-medium text-white shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Start a Project
          </a>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-10" />
            <img src="/src/assets/hero.png" alt="Abstract modern architectural background" className="w-full h-full object-cover opacity-20" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-display font-semibold tracking-wider uppercase mb-6 border border-secondary/20">
                  Strategic Brand Partners
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
                  Branded merchandise <br />
                  <span className="text-secondary">done right.</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                  We are the go-to partner for mid-market marketers who need fast, professional promotional products without the usual headache.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex h-14 items-center justify-center rounded-md bg-secondary px-8 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Let's Talk Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-display font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Explore Capabilities
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 border-y border-border bg-white">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm font-display font-semibold text-muted-foreground uppercase tracking-widest mb-8">
              Trusted by marketing teams at growing companies
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40 grayscale">
              <div className="font-display font-bold text-2xl tracking-tighter">AcmeCorp</div>
              <div className="font-display font-black text-2xl tracking-widest uppercase">VERTEX</div>
              <div className="font-display font-medium text-2xl italic">Lumina</div>
              <div className="font-display font-bold text-2xl tracking-tight">ECHO<span className="font-light">systems</span></div>
              <div className="font-display font-bold text-2xl">NovaTech</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Capabilities</h2>
                <p className="text-lg text-muted-foreground">
                  From Fortune 500 swag drops to your startup's first major trade show, we handle the logistics, quality control, and execution.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src="/src/assets/apparel.png" alt="Premium Branded Apparel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Branded Apparel</h3>
                  <p className="text-muted-foreground">
                    High-end retail brands, custom cut-and-sew, and premium decoration techniques that your team will actually want to wear.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src="/src/assets/tradeshow.png" alt="Tradeshow Giveaways" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Tradeshow Experiences</h3>
                  <p className="text-muted-foreground">
                    From memorable booth giveaways to complete environmental design and display hardware. Stand out on the floor.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src="/src/assets/kits.png" alt="Kits and Packages" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Kitting & Fulfillment</h3>
                  <p className="text-muted-foreground">
                    New hire onboarding kits, VIP client gifts, and complex multi-touch direct mail campaigns assembled and shipped globally.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src="/src/assets/signage.png" alt="Signage and Print" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                    <Printer className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Print & Signage</h3>
                  <p className="text-muted-foreground">
                    Corporate collateral, large format graphics, packaging design, and high-volume commercial print execution.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Process Section */}
        <section id="process" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Not just another print shop.</h2>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                We operate as an extension of your marketing team. No more chasing down proofs, worrying about color matching, or stressing about delivery dates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <div className="text-secondary font-display font-bold text-6xl mb-4 opacity-60">01</div>
                <h4 className="text-xl font-bold mb-3">Strategic Sourcing</h4>
                <p className="text-primary-foreground/70">We don't just send you a catalog of 10,000 items. We curate specific, high-impact products that align with your brand strategy and budget.</p>
              </div>
              <div className="relative">
                <div className="text-secondary font-display font-bold text-6xl mb-4 opacity-60">02</div>
                <h4 className="text-xl font-bold mb-3">Flawless Execution</h4>
                <p className="text-primary-foreground/70">From vectorizing artwork to managing complex global shipping logistics, we handle the details so you can focus on your campaign.</p>
              </div>
              <div className="relative">
                <div className="text-secondary font-display font-bold text-6xl mb-4 opacity-60">03</div>
                <h4 className="text-xl font-bold mb-3">Predictable Delivery</h4>
                <p className="text-primary-foreground/70">We manage the timelines aggressively. If an event is on Thursday, your materials are there on Tuesday. No exceptions, no excuses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-5/12 bg-primary p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <img src={logoPath} alt="ProForma MVP Marketing" className="h-14 w-auto mb-8 brightness-0 invert" />
                  <h3 className="text-3xl font-bold text-white mb-4">Let's talk about your next project.</h3>
                  <p className="text-primary-foreground/70 mb-8">
                    Fill out the form with a few details, and our team will get back to you within 24 hours with strategic recommendations.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 text-primary-foreground/70">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="font-display font-medium text-white">Headquarters</p>
                        <p className="text-sm">1200 Innovation Drive<br />Suite 400<br />Chicago, IL 60601</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-7/12 p-10 md:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoPath} alt="ProForma MVP Marketing" className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} ProForma MVP Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
