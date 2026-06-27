import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";

const faqs = [
  {
    question: "What types of products do you offer?",
    answer:
      "We provide promotional products, branded apparel, and printing solutions like banners, signage, and brochures. If it can carry your logo or your message, we'll find it—and make sure it looks good.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "Our clients are usually marketing managers, HR teams, and purchasing departments in industries like manufacturing, oil & gas, engineering, construction, healthcare, and education. But honestly, any business that wants to strengthen connections with employees, customers, or prospects is a fit.",
  },
  {
    question: "What makes you different from other promotional product companies?",
    prefix: "We don't just sell swag—we help you create a strategy. That means:",
    bullets: [
      "Products that serve your actual goals (not just fill a swag drawer).",
      "A clear, consultative process that saves you time.",
      "Company stores that simplify ordering and eliminate errors.",
      "Decades of experience + Proforma's $650M buying power.",
    ],
  },
  {
    question: "Do you offer company stores for employees, clients, events, and retail?",
    answer:
      "Yes! Our ProStores™ make it easy to manage apparel, printed products, and branded merch for retail, employees, contractors, or events—all without the spreadsheet circus.",
  },
  {
    question: "Can you help with design?",
    answer:
      "Absolutely. Whether it's making your logo print-ready or brainstorming creative product ideas, our design team has you covered.",
  },
  {
    question: "What's your turnaround time?",
    answer:
      "It depends on the product, but most standard orders are delivered in 7–14 business days after artwork approval. Rush options are available.",
  },
  {
    question: "Is there a minimum order size?",
    answer:
      "Most products do have a minimum (usually 12–50 pieces), but it varies. We'll always let you know up front so there are no surprises.",
  },
  {
    question: "Do you offer eco-friendly or sustainable products?",
    answer:
      "Absolutely. From recycled and organic materials to reusable essentials, we've got plenty of ways to keep your brand green.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in Katy, Texas, serving greater Houston and beyond. But we work with clients nationwide.",
  },
  {
    question: "How do I get started?",
    answer:
      "Easy. Just contact us with your project details—budget, audience, event date. We'll create a tailored proposal with ideas that fit your goals. Email us at info.mvp@proforma.com or call 281.849.1508.",
  },
];

export default function FAQPage() {
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
            <a href="/#services" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Capabilities</a>
            <a href="/#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Blog</Link>
            <Link href="/testimonials" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Testimonials</Link>
            <Link href="/faq" className="text-base font-display font-medium text-white hover:text-white transition-colors border-b border-secondary pb-0.5">FAQ</Link>
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
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
                Everything you need to know about working with Proforma MVP Marketing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="space-y-10">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white border border-border rounded-xl px-8 py-7"
                >
                  <h2 className="font-display font-semibold text-primary text-lg leading-snug mb-3">
                    {faq.question}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    {faq.prefix && <p>{faq.prefix}</p>}
                    {faq.bullets && (
                      <ul className="space-y-2 pl-1">
                        {faq.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {faq.answer && <p>{faq.answer}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6 text-lg">Still have questions? We're happy to help.</p>
              <a
                href="/#contact"
                className="inline-flex h-14 items-center justify-center rounded-md bg-secondary px-10 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
              >
                Get in Touch
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
