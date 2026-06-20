import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import logoWhitePath from "@/assets/logo-white.png";
import logoHorizontalPath from "@/assets/logo-horizontal.png";

const categoryColors: Record<string, string> = {
  "Giveaway Strategy": "bg-secondary/10 text-secondary",
  "Budget & ROI": "bg-primary/10 text-primary",
  "Employee Experience": "bg-emerald-50 text-emerald-700",
  "Planning": "bg-amber-50 text-amber-700",
};

function PostCard({ post }: { post: (typeof posts)[number] }) {
  const colorClass = categoryColors[post.category] ?? "bg-muted text-muted-foreground";
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
        {/* Image area */}
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center overflow-hidden">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <img src={logoWhitePath} alt="ProForma MVP Marketing" className="w-2/5 opacity-40" />
          )}
        </div>
        {/* Content */}
        <div className="flex flex-col flex-grow p-7">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-display font-semibold px-3 py-1 rounded-full ${colorClass}`}>
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
          </div>
          <h2 className="font-bold text-primary text-lg leading-snug mb-3 group-hover:text-secondary transition-colors line-clamp-3">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-border/60">
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="inline-flex items-center gap-1 text-sm font-display font-semibold text-secondary group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
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
            <a href="/#services" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Services</a>
            <a href="/#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-base font-display font-medium text-white hover:text-white transition-colors border-b border-secondary pb-0.5">Blog</Link>
            <Link href="/testimonials" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Testimonials</Link>
            <Link href="/faq" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">FAQ</Link>
            <a href="https://proformamvpmarketing.espwebsites.com/" target="_blank" rel="noopener noreferrer" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Browse Products</a>
            <a href="/#contact" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="/#contact" className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-secondary px-7 text-sm font-display font-semibold text-white shadow transition-colors hover:bg-secondary/90">
            Start a Project
          </a>
        </div>
      </header>

      <main className="flex-grow pt-28">
        {/* Hero */}
        <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-secondary mb-4 bg-secondary/10 px-3 py-1 rounded-full">
                Resources
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
                Blog & Insights
              </h1>
              <p className="text-lg text-white/70">
                Practical guides, industry trends, and strategies to help your brand stand out — from the team at Proforma MVP Marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/40 border-t border-border py-20">
          <div className="container mx-auto px-6 text-center max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to put these ideas into action?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team can help you design a promotional campaign tailored to your brand, budget, and goals.
            </p>
            <a
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
            >
              Let's Talk
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoWhitePath} alt="ProForma MVP Marketing" className="h-10 w-auto" />
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} ProForma MVP Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
