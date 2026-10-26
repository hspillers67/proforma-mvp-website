import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Printer, Monitor, Gift, Shirt, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import logoWhitePath from "@/assets/optimized/logo-white-90.webp";
import logoWhite2xPath from "@/assets/optimized/logo-white-180.webp";
import logoHorizontalPath from "@/assets/optimized/logo-horizontal-160.webp";
import logoHorizontal2xPath from "@/assets/optimized/logo-horizontal-320.webp";
import SiteHeader from "@/components/SiteHeader";
// Optimized WebP copies — regenerate with scripts/optimize-images.py
// Hero is cropped to the part of the photo the layout actually shows (see optimize-images.py)
import heroSwatches640 from "@/assets/optimized/hero-swatches-crop-640.webp";
import heroSwatches1100 from "@/assets/optimized/hero-swatches-crop-1100.webp";
import companyStoresImg from "@/assets/optimized/company-stores-crop-365.webp";
import promoProducts480 from "@/assets/optimized/promo-products-480.webp";
import promoProducts960 from "@/assets/optimized/promo-products-960.webp";
import apparel480 from "@/assets/optimized/apparel-480.webp";
import apparel640 from "@/assets/optimized/apparel-640.webp";
import tradeshows480 from "@/assets/optimized/tradeshows-events-480.webp";
import tradeshows960 from "@/assets/optimized/tradeshows-events-960.webp";
import printSignage480 from "@/assets/optimized/print-signage-480.webp";
import printSignage640 from "@/assets/optimized/print-signage-640.webp";
import recognition480 from "@/assets/optimized/recognition-incentives-480.webp";
import recognition640 from "@/assets/optimized/recognition-incentives-640.webp";
import ourAdvantage640 from "@/assets/optimized/our-advantage-640.webp";
import ourAdvantage1080 from "@/assets/optimized/our-advantage-1080.webp";

/** Capability cards: 1 col on mobile, 2 on tablet, 3 on desktop. */
const CARD_SIZES = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";

const advantagePoints = [
  {
    title: "The Power of Proforma",
    text: "You get one responsive local contact backed by the buying power and supplier network of Proforma.",
  },
  {
    title: "Built on Real Experience",
    text: "As a former marketing director, our founder understands deadlines, brand standards, and the pressure to make the right choice the first time. We are proudly based in Katy and serve clients all across the Greater Houston area, Texas, and beyond.",
  },
  {
    title: "Strategic Sourcing",
    text: "We don't just send you a catalog of 10,000 items. We curate specific, high-impact products that align with your brand strategy and budget.",
  },
  {
    title: "Flawless Execution",
    text: "From vectorizing artwork to managing complex global shipping logistics, we handle the details so you can focus on your campaign.",
  },
  {
    title: "Proactive Timeline Management",
    text: "We plan ahead, track every milestone, and keep you informed from order to delivery. If a deadline isn't realistic, we'll tell you upfront and help determine the best path forward.",
  },
];

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
      <SiteHeader currentPage="home" />

      <main className="flex-grow pt-20 md:pt-28">
        {/* Hero Section — Split layout: navy copy panel + full-contrast image */}
        <section className="relative overflow-hidden bg-primary">
          <div className="flex flex-col lg:flex-row lg:min-h-[50vh]">
            {/* Copy panel */}
            <div className="w-full min-w-0 lg:w-1/2 bg-primary flex items-center">
              <motion.div
                className="w-full min-w-0 max-w-2xl mx-auto px-8 py-16 md:py-20 md:px-12 lg:px-16 text-center"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-base md:text-lg font-display font-semibold text-white/70 tracking-wide mb-4">
                  PROMOTIONAL PRODUCTS • BRANDED APPAREL
                  <br />
                  CORPORATE GIFTING • COMPANY STORES
                </h2>
                <h1 className="text-3xl sm:text-6xl lg:text-[40px] xl:text-[54px] 2xl:text-[60px] font-extrabold leading-[1.05] tracking-tight mb-8 font-display uppercase text-white break-words">
                  <span className="whitespace-nowrap">YOUR <span className="text-secondary">BRAND</span>.</span>
                  <br />
                  EVERYWHERE.
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                  Based in Greater Houston, serving clients nationwide. As your strategic partner, we handle every detail from idea through delivery.
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
                    className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white bg-transparent px-8 text-base font-display font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Explore Capabilities
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Hero photograph — normal contrast, no overlay */}
            <div className="relative w-full min-w-0 h-72 sm:h-96 md:h-[420px] lg:h-auto lg:w-1/2">
              <img
                src={heroSwatches1100}
                srcSet={`${heroSwatches640} 640w, ${heroSwatches1100} 1100w`}
                // Below lg the box is height-bound (h-72/96/420px) and the 1.83:1 image
                // covers it, so its rendered width is ~1.83x the box height.
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 770px, (min-width: 640px) 705px, 530px"
                alt=""
                aria-hidden="true"
                width={1100}
                height={600}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
              />
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/30">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Capabilities.</h2>
                <p className="text-xl text-muted-foreground">
                  We help busy marketing, sales, and HR teams manage every detail—from product recommendations and artwork to production, delivery and multi-location ordering.
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
                  srcSet: `${companyStoresImg} 365w`, // pre-cropped to the card's 3:2
                  description: "",
                  bullets: ["Custom company web stores", "Multi-location ordering", "Uniform program management", "On-demand fulfillment"],
                },
                {
                  icon: <Gift className="w-5 h-5" />,
                  title: "Promotional Products",
                  href: "/promotional-products",
                  image: promoProducts480,
                  srcSet: `${promoProducts480} 480w, ${promoProducts960} 960w`,
                  description: "",
                  bullets: ["Giveaways that get noticed", "Event swag that stands out", "Eco-friendly & Made in USA options", "Employee & client gifts that connect"],
                },
                {
                  icon: <Shirt className="w-5 h-5" />,
                  title: "Uniforms & Branded Apparel",
                  href: "/branded-apparel",
                  image: apparel480,
                  srcSet: `${apparel480} 480w, ${apparel640} 640w`,
                  description: "",
                  bullets: ["Corporate polos & button-downs", "Branded hoodies & jackets", "Custom headwear & caps", "High-quality safety apparel"],
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Tradeshows & Events",
                  href: "/trade-show-products",
                  image: tradeshows480,
                  srcSet: `${tradeshows480} 480w, ${tradeshows960} 960w`,
                  description: "",
                  bullets: ["Retractable banner stands", "Custom table throws", "Event booth backdrops", "Popular attendee giveaways"],
                },
                {
                  icon: <Printer className="w-5 h-5" />,
                  title: "Print & Packaging",
                  href: "/printing-packaging",
                  image: printSignage480,
                  srcSet: `${printSignage480} 480w, ${printSignage640} 640w`,
                  description: "",
                  bullets: ["Business cards & stationery", "Marketing brochures & flyers", "Large-format window graphics", "Outdoor & indoor event signs"],
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  title: "Awards & Recognition",
                  href: "/awards-recognition",
                  image: recognition480,
                  srcSet: `${recognition480} 480w, ${recognition640} 640w`,
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
                      srcSet={service.srcSet}
                      sizes={CARD_SIZES}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
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


        {/* Why Work With Us — merged "Not just another vendor" + "Our Advantage" */}
        <section id="process" className="py-24 md:py-32 bg-background">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xs font-display font-semibold tracking-widest uppercase text-secondary mb-4">Not just another vendor</div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Why Houston-area businesses work with us.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  We operate as an extension of your marketing team. No more chasing down proofs, worrying about color matching, or stressing about delivery dates.
                </p>
                <div className="space-y-6">
                  {advantagePoints.map((point, i) => (
                    <div key={point.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-secondary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-1">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{point.text}</p>
                      </div>
                    </div>
                  ))}
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
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={ourAdvantage640}
                    srcSet={`${ourAdvantage640} 640w, ${ourAdvantage1080} 1080w`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="Proforma branded promotional products on the beach"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials limit={3} showAllLink />

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-background relative">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-5/12 bg-primary p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <img src={logoWhitePath} srcSet={`${logoWhitePath} 1x, ${logoWhite2xPath} 2x`} alt="ProForma MVP Marketing" loading="lazy" decoding="async" className="h-14 w-auto mb-8" />
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
                        <a href="mailto:info@proformamvpmarketing.com" className="text-sm hover:text-white transition-colors">info@proformamvpmarketing.com</a>
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
            <img src={logoHorizontalPath} srcSet={`${logoHorizontalPath} 1x, ${logoHorizontal2xPath} 2x`} alt="ProForma MVP Marketing" loading="lazy" decoding="async" className="h-8 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} ProForma MVP Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
