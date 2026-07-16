import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Printer, Monitor, Gift, Shirt, Award, ChevronDown } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { posts } from "@/data/posts";
import logoPath from "@/assets/logo.png";
import logoWhitePath from "@/assets/logo-white.png";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import companyStoresImg from "@/assets/company-stores.png";
import recognitionImg from "@/assets/recognition-incentives.png";
import apparelImg from "@/assets/apparel.png";
import promoProductsImg from "@/assets/promo-products.png";
import printSignageImg from "@/assets/print-signage.jpg";
import tradeshowsImg from "@/assets/tradeshows-events.png";
import heroSwatchesImg from "@assets/cover_1782665562519.png";
import ourAdvantageImg from "@/assets/our-advantage.jpg";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      const observer = new MutationObserver(() => {
        const target = document.querySelector(hash);
        if (target) {
          observer.disconnect();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => observer.disconnect(), 3000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10">
        <div className="mx-auto px-8 h-28 flex items-center justify-between max-w-screen-2xl">
          <a href="#" className="flex items-center">
            <img src={logoHorizontalPath} alt="ProForma MVP Marketing" className="h-12 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            <a href="/" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-base font-display font-medium text-white/75 hover:text-white transition-colors">
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
            <a href="#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <a href="/blog" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Blog</a>
            <a href="/trending" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Trending</a>
            <a href="/testimonials" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Testimonials</a>
            <a href="/faq" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">FAQ</a>
            <a href="https://proformamvpmarketing.espwebsites.com/" target="_blank" rel="noopener noreferrer" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Browse Products</a>
            <a href="#contact" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-secondary px-7 text-sm font-display font-semibold text-white shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="flex-grow pt-28">
        {/* Hero Section — Full-bleed overlay */}
        <section className="relative overflow-hidden min-h-[68vh] flex items-center">
          {/* Background image */}
          <img
            src={heroSwatchesImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Light overlay — keeps text readable while letting image brightness through */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10 pointer-events-none" />

          {/* Copy — centered over image */}
          <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 flex justify-center">
            <motion.div
              className="max-w-3xl text-center"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-display font-semibold tracking-widest uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                Strategic Brand Partners
              </span>
              <h1 className="text-base md:text-lg font-display font-semibold text-primary/60 tracking-wide mb-4">
                Promotional Products, Branded Apparel &amp; Printing for Houston Area Businesses
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 font-display uppercase text-primary">
                YOUR <span className="text-secondary">BRAND</span>.
                <br />
                EVERYWHERE.
              </h2>
              <p className="text-lg md:text-xl text-primary/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                From branded merch and apparel to print and signage, we make it easy to get your brand out there—and handle every detail as if it were our own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-secondary px-8 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Let's Talk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex h-14 items-center justify-center rounded-md border-2 border-primary/50 bg-white/60 backdrop-blur-sm px-8 text-base font-display font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Explore Capabilities
                </a>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="pt-20 pb-32 md:pt-24 md:pb-40 bg-muted/30">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Capabilities</h2>
                <p className="text-xl text-muted-foreground">
                  From company-wide swag drops to your first trade show, we manage every detail from start to finish.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Monitor className="w-5 h-5" />,
                  title: "Company Stores",
                  href: "/company-stores",
                  image: companyStoresImg,
                  description: "",
                  bullets: ["Custom company web stores", "Multi-location ordering", "Uniform program management", "On-demand fulfillment"],
                },
                {
                  icon: <Gift className="w-5 h-5" />,
                  title: "Promotional Products",
                  href: "/promotional-products",
                  image: promoProductsImg,
                  description: "",
                  bullets: ["Giveaways that get noticed", "Event swag that stands out", "Eco-friendly & Made in USA options", "Employee & client gifts that connect"],
                },
                {
                  icon: <Shirt className="w-5 h-5" />,
                  title: "Uniforms & Branded Apparel",
                  href: "/branded-apparel",
                  image: apparelImg,
                  description: "",
                  bullets: ["Corporate polos & button-downs", "Branded hoodies & jackets", "Custom headwear & caps", "High-quality safety apparel"],
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Tradeshows & Events",
                  href: "/trade-show-products",
                  image: tradeshowsImg,
                  description: "",
                  bullets: ["Retractable banner stands", "Custom table throws", "Event booth backdrops", "Popular attendee giveaways"],
                },
                {
                  icon: <Printer className="w-5 h-5" />,
                  title: "Print & Packaging",
                  href: "/printing-packaging",
                  image: printSignageImg,
                  description: "",
                  bullets: ["Business cards & stationery", "Marketing brochures & flyers", "Large-format window graphics", "Outdoor & indoor event signs"],
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  title: "Awards & Recognition",
                  href: "/awards-recognition",
                  image: recognitionImg,
                  description: "",
                  bullets: ["Engraved glass & crystal awards", "Employee anniversary gifts", "Premium corporate plaques", "Luxury custom gifts"],
                },
              ].map((service) => (
                <motion.a
                  key={service.title}
                  href={service.href}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Image + overlays */}
                  <div className="relative w-full aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Permanent bottom text — always visible, fades out on hover (desktop) */}
                    <div
                      className="absolute inset-x-0 bottom-0 px-6 py-5 transition-opacity duration-300 md:group-hover:opacity-0"
                      style={{ background: "linear-gradient(to top, rgba(0,20,40,0.92) 60%, transparent)" }}
                    >
                      <h3 className="text-white font-bold text-lg leading-snug mb-1">{service.title}</h3>
                      {service.description && <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>}
                    </div>
                    {/* Desktop hover overlay — bullets */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center px-6 py-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(0,20,40,0.88)" }}
                    >
                      <h3 className="text-white font-bold mb-5 text-3xl">{service.title}</h3>
                      <ul className="space-y-4">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-white text-xl font-medium">
                            <span className="text-secondary font-bold mt-0.5">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Mobile bullets — always visible below image */}
                  <div className="md:hidden px-6 py-4" style={{ background: "rgba(0,20,40,0.95)" }}>
                    <ul className="space-y-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                          <span className="text-secondary font-bold mt-0.5">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>


        {/* Blog Preview Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <div className="text-xs font-display font-semibold tracking-widest uppercase text-secondary mb-3">Resources</div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary">Latest from the blog</h2>
              </div>
              <a href="/blog" className="inline-flex items-center gap-2 text-sm font-display font-semibold text-secondary hover:gap-3 transition-all shrink-0">
                View all posts <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {posts.slice(0, 2).map((post) => (
                <motion.a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-full aspect-[16/9] overflow-hidden bg-primary/10">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                        <img src={logoWhitePath} alt="" className="w-1/3 opacity-30" />
                      </div>
                    )}
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-display font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-primary text-lg leading-snug mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-grow mb-5">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-secondary group-hover:gap-2.5 transition-all">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Not just another vendor.</h2>
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
                <h4 className="text-xl font-bold mb-3">Proactive Timeline Management</h4>
                <p className="text-primary-foreground/70">We plan ahead, track every milestone, and keep you informed from order to delivery. If a deadline isn't realistic, we'll tell you upfront and help determine the best path forward.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xs font-display font-semibold tracking-widest uppercase text-secondary mb-4">Our Advantage</div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                  Why Houston-Area Businesses Work With Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-secondary font-bold text-sm">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">The Power of Proforma</h4>
                      <p className="text-muted-foreground leading-relaxed">You get one responsive local contact backed by the buying power and supplier network of Proforma.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-secondary font-bold text-sm">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Built on Real Experience</h4>
                      <p className="text-muted-foreground leading-relaxed">As a former marketing director, our founder understands deadlines, brand standards, and the pressure to make the right choice the first time. We are proudly based in Katy and serve clients all across the Greater Houston area, Texas, and beyond.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-sm font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
                  >
                    Let's Talk
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden ring-2 ring-secondary/30 shadow-[0_0_0_6px_rgba(156,0,87,0.08),0_12px_40px_rgba(156,0,87,0.30),0_24px_64px_rgba(156,0,87,0.18)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={ourAdvantageImg}
                    alt="Proforma branded promotional products on the beach"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-background relative">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-5/12 bg-primary p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <img src={logoWhitePath} alt="ProForma MVP Marketing" className="h-14 w-auto mb-8" />
                  <h3 className="text-3xl font-bold text-white mb-4">Let's talk about your next project.</h3>
                  <p className="text-primary-foreground/70 mb-8">
                    Fill out the form with a few details, and our team will get back to you within 24 hours with strategic recommendations.
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 text-primary-foreground/70">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="font-display font-medium text-white">Address</p>
                        <p className="text-sm leading-relaxed">Proforma MVP Marketing<br />22136 Westheimer Parkway #856<br />Katy, TX 77450</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-primary-foreground/70">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-display font-medium text-white">Email</p>
                        <a href="mailto:info.mvp@proforma.com" className="text-sm hover:text-white transition-colors">info.mvp@proforma.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-primary-foreground/70">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-display font-medium text-white">Phone</p>
                        <a href="tel:2818313527" className="text-sm hover:text-white transition-colors">281.831.3527</a>
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
            <img src={logoHorizontalPath} alt="ProForma MVP Marketing" className="h-8 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} ProForma MVP Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
