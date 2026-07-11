import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trendingPosts, PRODUCT_TAGS, INDUSTRY_TAGS, TAG_COLORS } from "@/data/trending";
import logoWhitePath from "@/assets/logo-white.png";
import logoHorizontalPath from "@/assets/logo-horizontal.png";

const ALL_TAGS = [...PRODUCT_TAGS, ...INDUSTRY_TAGS];

function TagPill({
  tag,
  active,
  onClick,
}: {
  tag: string;
  active: boolean;
  onClick: () => void;
}) {
  const colors = TAG_COLORS[tag] ?? "bg-muted text-muted-foreground border-border";
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-display font-semibold border transition-all ${
        active
          ? "ring-2 ring-offset-1 ring-secondary shadow-sm scale-[1.03]"
          : "hover:shadow-sm hover:scale-[1.02]"
      } ${colors}`}
    >
      {tag}
    </button>
  );
}

function PostCard({ post }: { post: (typeof trendingPosts)[number] }) {
  return (
    <Link href={`/trending/${post.slug}`}>
      <article className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
        <div className="w-full aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col flex-grow p-7">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => {
              const colors = TAG_COLORS[tag] ?? "bg-muted text-muted-foreground border-border";
              return (
                <span
                  key={tag}
                  className={`text-xs font-display font-semibold px-3 py-1 rounded-full border ${colors}`}
                >
                  {tag}
                </span>
              );
            })}
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
              See more <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Trending() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Trending Products | ProForma MVP Marketing";
  }, []);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered =
    activeTags.length === 0
      ? trendingPosts
      : trendingPosts.filter((p) => activeTags.some((t) => p.tags.includes(t)));

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
                </div>
              </div>
            </div>
            <a href="/#process" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-base font-display font-medium text-white/75 hover:text-white transition-colors">Blog</Link>
            <Link href="/trending" className="text-base font-display font-medium text-white hover:text-white transition-colors border-b border-secondary pb-0.5">Trending</Link>
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
        {/* Hero */}
        <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-secondary mb-4 bg-secondary/10 px-3 py-1 rounded-full">
                What's New
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
                Trending Now
              </h1>
              <p className="text-lg text-white/70">
                Limited editions, seasonal drops, new arrivals, and industry picks — curated for Greater Houston businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="border-b border-border bg-white sticky top-28 z-40 py-4 shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-display font-semibold text-muted-foreground mr-1 shrink-0">
                Filter:
              </span>
              {ALL_TAGS.map((tag) => (
                <TagPill
                  key={tag}
                  tag={tag}
                  active={activeTags.includes(tag)}
                  onClick={() => toggleTag(tag)}
                />
              ))}
              {activeTags.length > 0 && (
                <button
                  onClick={() => setActiveTags([])}
                  className="text-sm text-muted-foreground hover:text-secondary underline ml-2 transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No posts match the selected filters.</p>
                <button
                  onClick={() => setActiveTags([])}
                  className="mt-4 text-secondary font-display font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filtered.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/40 border-t border-border py-20">
          <div className="container mx-auto px-6 text-center max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              See something you like?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us for availability, pricing, and custom branding options.
            </p>
            <a
              href="https://www.proformamvpmarketing.com/#contact"
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
