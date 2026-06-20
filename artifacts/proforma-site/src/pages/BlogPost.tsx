import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getPost, type ContentBlock } from "@/data/posts";
import logoWhitePath from "@/assets/logo-white.png";
import logoHorizontalPath from "@/assets/logo-horizontal.png";

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

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-display font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-primary" : "text-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

const categoryColors: Record<string, string> = {
  "Giveaway Strategy": "bg-secondary/10 text-secondary",
  "Budget & ROI": "bg-primary/10 text-primary",
  "Employee Experience": "bg-emerald-50 text-emerald-700",
  "Planning": "bg-amber-50 text-amber-700",
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug ?? "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Post not found</h1>
          <Link href="/blog" className="text-secondary hover:underline font-display font-semibold">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const colorClass = categoryColors[post.category] ?? "bg-muted text-muted-foreground";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10">
        <div className="mx-auto px-8 h-24 flex items-center justify-between max-w-screen-2xl">
          <Link href="/">
            <img src={logoHorizontalPath} alt="ProForma MVP Marketing" className="h-12 w-auto cursor-pointer" style={{ filter: "brightness(0) invert(1)" }} />
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-sm font-display font-medium text-white/75 hover:text-white transition-colors">Home</Link>
            <a href="/#services" className="text-sm font-display font-medium text-white/75 hover:text-white transition-colors">Services</a>
            <a href="/#process" className="text-sm font-display font-medium text-white/75 hover:text-white transition-colors">Process</a>
            <Link href="/blog" className="text-sm font-display font-medium text-white hover:text-white transition-colors border-b border-secondary pb-0.5">Blog</Link>
            <Link href="/testimonials" className="text-sm font-display font-medium text-white/75 hover:text-white transition-colors">Testimonials</Link>
            <a href="https://proformamvpmarketing.espwebsites.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-display font-medium text-white/75 hover:text-white transition-colors">Browse Products</a>
            <a href="/#contact" className="text-sm font-display font-medium text-white/75 hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="/#contact" className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-secondary px-7 text-sm font-display font-semibold text-white shadow transition-colors hover:bg-secondary/90">
            Start a Project
          </a>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {/* Hero */}
        <div className="w-full aspect-[21/6] md:aspect-[21/5] bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center overflow-hidden">
          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <img src={logoWhitePath} alt="ProForma MVP Marketing" className="h-24 opacity-30" />
          )}
        </div>

        {/* Article */}
        <div className="container mx-auto px-6 py-14 max-w-3xl">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-display font-semibold text-muted-foreground hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1 rounded-full ${colorClass}`}>
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-10">
            {post.title}
          </h1>

          {/* Content */}
          <div className="space-y-5">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 bg-primary rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-white/70 mb-6">
              At Proforma MVP Marketing, we help companies across the Greater Houston area design promotional campaigns that make your brand impossible to ignore.
            </p>
            <a
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-base font-display font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary/90"
            >
              Contact Us Today
            </a>
          </div>
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
