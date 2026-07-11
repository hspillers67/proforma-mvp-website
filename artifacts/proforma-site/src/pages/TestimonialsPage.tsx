import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import logoWhitePath from "@/assets/logo-white.png";
import logoHorizontalPath from "@/assets/logo-horizontal.png";

const testimonials = [
  {
    name: "Arin Ennis",
    quote:
      "Just placed my second bulk order with Proforma for my small business. Holly has been so lovely and so helpful to work with. I've been incredibly pleased with the customer service, prompt response time, and level of care during the ordering process. The products have been exactly as pictured and I look forward to more orders in the future!",
  },
  {
    name: "Mariya Richardson",
    quote:
      "Holly at Proforma MVP Marketing was fantastic to work with. I ordered logo'd bags for a trade show, and they were a huge hit with everyone who stopped by our booth. Holly was communicative, professional, and made the entire process easy from start to finish.",
  },
  {
    name: "Denise Copeland",
    quote:
      "Holly/Proforma MVP Marketing are incredible! I placed a last-minute order of monogrammed golf gloves, and they were able to process and get the gloves to me way ahead of schedule. They never cease to amaze me, and the quality is always first class!",
  },
  {
    name: "Lexi Terrault",
    quote:
      "I can't say enough great things about this team! They're an absolute pleasure to work with — professional, responsive, and always deliver top-quality products. Even with rush jobs and tight deadlines, they consistently come through.",
  },
  {
    name: "Julio Fuentes",
    quote:
      "Holly and her team are fantastic to work with. They are prompt, fast at communicating with you, and have a staff that works hard to make your vision become a reality.",
  },
  {
    name: "Donna Struchen",
    quote:
      "I have been dealing with Proforma MVP Marketing for 3 years and have found their service and cooperation above and beyond my expectations. Their service representative is more than willing to go the extra mile to satisfy the customer.",
  },
  {
    name: "Amanda Garza",
    quote:
      "Highly efficient group of people. This company is very reliable and all of their employees are super friendly as well. Above all, great prices! Highly recommend to everyone!",
  },
  {
    name: "Marie Pham",
    quote:
      "I have been doing business with this company for a few years now. They are professional, punctual and have exactly what we are looking for, for our company uniforms. Thank you for the excellent service!",
  },
  {
    name: "David Hoke",
    quote:
      "Proforma's customer service is second to none!! Their account managers are very knowledgeable, and they deliver a great product at a fair price. I would highly recommend contacting Proforma for any of your marketing needs.",
  },
  {
    name: "Holly Buckels",
    quote:
      "Proforma always offers creative options. I love working with them. All of our orders have been fulfilled and delivered exactly as planned.",
  },
  {
    name: "John & Susan Leonard",
    quote:
      "I've used them personally and for business. They are great for anything from promotional items for work, chocolates for holidays for clients, to wedding giveaways, etc. They are easy to work with, ship quickly and always have wonderful customer service. I will always use Proforma for all of my marketing and gift needs!",
  },
  {
    name: "Roland",
    quote:
      "Always enjoy working with Keith Leonard and everyone at Proforma. They have a huge selection of promotional products with great prices and very fast delivery.",
  },
  {
    name: "Cathy Rath",
    quote:
      "The service I received was excellent, and the product I ordered — blue pens — with my business information were high quality and a very good price. I recommend Proforma MVP Marketing to any business owner who wants to get noticed.",
  },
  {
    name: "ARP Materials",
    quote:
      "We've been working with Proforma for about a year. Great products and wonderful customer service. Very thorough! Thank you for the service.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-secondary text-secondary" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10">
        <div className="mx-auto px-8 h-28 flex items-center justify-between max-w-screen-2xl">
          <Link href="/">
            <img src={logoHorizontalPath} alt="ProForma MVP Marketing" className="h-12 w-auto cursor-pointer" style={{ filter: "brightness(0) invert(1)" }} />
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Home</Link>
            <a href="/#services" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Capabilities</a>
            <a href="/#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Blog</Link>
            <Link href="/trending" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Trending</Link>
            <Link href="/testimonials" className="text-base font-display font-medium text-white hover:text-white transition-colors border-b border-secondary pb-0.5">Testimonials</Link>
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
        <section className="bg-primary text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z" />
                </svg>
                <span className="text-sm font-display font-semibold text-primary-foreground/60 uppercase tracking-wider">Google Reviews</span>
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What our clients say
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Marketers and business owners across the Greater Houston area trust us to deliver. Here's what they say after working with us.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={item}
                  className="bg-background border border-border rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <StarRating />
                  <p className="text-foreground leading-relaxed flex-grow">
                    "{t.quote}"
                  </p>
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <p className="font-display font-semibold text-primary text-sm">{t.name}</p>
                    </div>
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-label="Google">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6 text-lg">Ready to experience the difference?</p>
              <a
                href="/#contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-secondary px-10 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
