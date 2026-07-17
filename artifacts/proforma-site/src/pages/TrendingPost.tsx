import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, Tag } from "lucide-react";
import { getTrendingPost, TAG_COLORS } from "@/data/trending";
import { type ContentBlock } from "@/data/posts";
import logoWhitePath from "@/assets/logo-white.png";
import logoHorizontalPath from "@/assets/logo-horizontal.png";
import { ChevronDown } from "lucide-react";

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-foreground leading-relaxed text-base md:text-[17px]">{block.text}</p>;

    case "heading":
      if (block.level === 2) {
        return <h2 className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-2">{block.text}</h2>;
      }
      return <h3 className="text-xl font-bold text-primary mt-6 mb-1">{block.text}</h3>;

    case "list":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base md:text-[17px] text-foreground leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-xl px-6 py-5">
          <p className="text-xs font-display font-bold uppercase tracking-widest text-secondary mb-2">{block.label}</p>
          <p className="text-foreground leading-relaxed">{block.text}</p>
        </div>
      );

    case "divider":
      return <hr className="border-border" />;

    default:
      return null;
  }
}

export default function TrendingPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getTrendingPost(slug ?? "");

  useEffect(() => {
    if (post) {
      document.title = post.pageTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", post.metaDescription);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Post not found</h1>
          <Link href="/trending" className="text-secondary hover:underline font-display font-semibold">
            ← Back to Trending
          </Link>
        </div>
      </div>
    );
  }

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
                  <a href="/awards-recognition" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Awards &amp; Recognition</a>
                  <a href="/company-stores" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Company Stores</a>
                  <a href="/corporate-gifting" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Corporate Gifting</a>
                  <a href="/printing-packaging" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Print &amp; Packaging</a>
                  <a href="/promotional-products" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Promotional Products</a>
                  <a href="/trade-show-products" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Tradeshows &amp; Events</a>
                  <a href="/branded-apparel" className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">Uniforms &amp; Branded Apparel</a>
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
        {/* Article */}
        <div className="container mx-auto px-6 py-14 max-w-4xl">
          {/* Back */}
          <Link
            href="/trending"
            className="inline-flex items-center gap-2 text-sm font-display font-semibold text-muted-foreground hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Trending
          </Link>

          {/* Article body — image floats right so copy wraps naturally */}
          <div className="max-w-3xl">
            {/* Floating image */}
            <div className={`float-none w-full mb-8 md:float-right md:w-[360px] md:ml-10 md:mb-6 rounded-2xl overflow-hidden shadow-lg ${post.imageBgClass ?? "bg-primary/5"}`}>
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Tags + date */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {post.tags.map((tag) => {
                const colors = TAG_COLORS[tag] ?? "bg-muted text-muted-foreground border-border";
                return (
                  <Link key={tag} href="/trending">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1 rounded-full border cursor-pointer hover:opacity-80 transition-opacity ${colors}`}
                    >
                      <Tag className="w-3 h-3" /> {tag}
                    </span>
                  </Link>
                );
              })}
              <span className="text-xs text-muted-foreground ml-1">{post.date}</span>
            </div>

            {/* Headline + subhead */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
              {post.title}
            </h1>
            {post.subhead && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {post.subhead}
              </p>
            )}

            {/* Body */}
            <div className="space-y-5">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
            <div className="clear-both" />
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 md:p-10 bg-primary rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to order?</h3>
            <p className="text-white/70 mb-6">
              Contact us to check availability, get a quote, or start your order.
            </p>
            <a
              href={post.ctaUrl}
              className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
            >
              Get a Quote
            </a>
          </div>

          {/* Footnote */}
          {post.footnote && (
            <p className="mt-8 text-xs text-muted-foreground/70 leading-relaxed border-t border-border pt-6">
              {post.footnote}
            </p>
          )}
        </div>
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
