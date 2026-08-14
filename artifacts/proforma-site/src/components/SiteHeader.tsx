import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import logoHorizontalPath from "@/assets/logo-horizontal.png";

type Page =
  | "home"
  | "blog"
  | "trending"
  | "capabilities"
  | "testimonials"
  | "faq"
  | "other";

interface SiteHeaderProps {
  currentPage?: Page;
}

const capabilities = [
  { href: "/awards-recognition", label: "Awards & Recognition" },
  { href: "/company-stores", label: "Company Stores" },
  { href: "/corporate-gifting", label: "Corporate Gifting" },
  { href: "/printing-packaging", label: "Print & Packaging" },
  { href: "/promotional-products", label: "Promotional Products" },
  { href: "/trade-show-products", label: "Tradeshows & Events" },
  { href: "/branded-apparel", label: "Uniforms & Branded Apparel" },
];

export default function SiteHeader({ currentPage = "other" }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [capOpen, setCapOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setCapOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => { setIsOpen(false); setCapOpen(false); };

  const activeCls = "text-white border-b border-secondary pb-0.5";
  const defaultCls = "text-white/75 hover:text-white transition-colors";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/10">
        <div className="mx-auto px-6 md:px-8 h-20 md:h-28 flex items-center justify-between max-w-screen-2xl">

          {/* Logo */}
          <Link href="/" onClick={close}>
            <img
              src={logoHorizontalPath}
              alt="ProForma MVP Marketing"
              className="h-9 md:h-12 w-auto cursor-pointer"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className={`text-base font-display font-medium ${currentPage === "home" ? activeCls : defaultCls}`}>Home</Link>

            {/* Capabilities dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-base font-display font-medium ${currentPage === "capabilities" ? activeCls : defaultCls}`}>
                Capabilities <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-border py-1.5 min-w-[230px]">
                  {capabilities.map((c) => (
                    <a key={c.href} href={c.href} className="block px-5 py-2.5 text-sm font-display font-medium text-primary hover:bg-muted/50 transition-colors">{c.label}</a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/#process" className={`text-base font-display font-medium ${defaultCls}`}>Process</a>
            <Link href="/blog" className={`text-base font-display font-medium ${currentPage === "blog" ? activeCls : defaultCls}`}>Blog</Link>
            <Link href="/trending" className={`text-base font-display font-medium ${currentPage === "trending" ? activeCls : defaultCls}`}>Trending</Link>
            <Link href="/testimonials" className={`text-base font-display font-medium ${currentPage === "testimonials" ? activeCls : defaultCls}`}>Testimonials</Link>
            <Link href="/faq" className={`text-base font-display font-medium ${currentPage === "faq" ? activeCls : defaultCls}`}>FAQ</Link>
            <a href="https://proformamvpmarketing.espwebsites.com/" target="_blank" rel="noopener noreferrer" className={`text-base font-display font-medium ${defaultCls}`}>Browse Products</a>
            <a href="/#contact" className={`text-base font-display font-medium ${defaultCls}`}>Contact</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="/#contact"
            className="hidden md:inline-flex h-11 items-center justify-center rounded-md bg-secondary px-7 text-sm font-display font-semibold text-white shadow transition-colors hover:bg-secondary/90"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 md:hidden bg-primary border-b border-white/10 overflow-y-auto transition-all duration-300 ${
          isOpen ? "max-h-[calc(100dvh-5rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">

          {/* Home */}
          <a href="/" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Home
          </a>

          {/* Capabilities accordion */}
          <button
            onClick={() => setCapOpen((v) => !v)}
            className="flex items-center justify-between h-12 w-full text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10"
          >
            Capabilities
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${capOpen ? "rotate-180" : ""}`} />
          </button>
          {capOpen && (
            <div className="flex flex-col pl-4 gap-0.5 pb-2 border-b border-white/10">
              {capabilities.map((c) => (
                <a key={c.href} href={c.href} onClick={close} className="flex items-center h-10 text-sm font-display font-medium text-white/75 hover:text-white transition-colors">
                  {c.label}
                </a>
              ))}
            </div>
          )}

          <a href="/#process" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Process
          </a>
          <a href="/blog" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Blog
          </a>
          <a href="/trending" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Trending
          </a>
          <a href="/testimonials" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Testimonials
          </a>
          <a href="/faq" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            FAQ
          </a>
          <a href="https://proformamvpmarketing.espwebsites.com/" target="_blank" rel="noopener noreferrer" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Browse Products
          </a>
          <a href="/#contact" onClick={close} className="flex items-center h-12 text-base font-display font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10">
            Contact
          </a>

          {/* CTA */}
          <a
            href="/#contact"
            onClick={close}
            className="mt-4 flex h-12 items-center justify-center rounded-md bg-secondary px-7 text-sm font-display font-semibold text-white shadow transition-colors hover:bg-secondary/90"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </>
  );
}
