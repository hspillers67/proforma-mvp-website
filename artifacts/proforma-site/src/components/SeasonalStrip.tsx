import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getActiveBanner } from "@/data/seasonalBanners";

/**
 * Slim seasonal promo strip at the very top of the fixed header.
 * Content and dates live in src/data/seasonalBanners.ts.
 * Sets --strip-h so page content and the mobile menu clear the taller header.
 */
export default function SeasonalStrip() {
  const [banner, setBanner] = useState(() => getActiveBanner());

  // Re-check on the visitor's own date (pre-rendered HTML uses the build date)
  useEffect(() => {
    setBanner(getActiveBanner());
  }, []);

  if (!banner) return <style>{`:root{--strip-h:0px}`}</style>;

  const isExternal = /^https?:\/\//.test(banner.href);

  return (
    <>
      <style>{`:root{--strip-h:2.25rem}`}</style>
      <a
        href={banner.href}
        {...(isExternal ? { rel: "noopener" } : {})}
        className="group flex h-9 items-center justify-center gap-2 bg-secondary px-4 text-white text-xs sm:text-sm font-display font-medium hover:bg-secondary/90 transition-colors"
      >
        <span className="truncate">
          <span className="hidden sm:inline">{banner.message}</span>
          <span className="sm:hidden">{banner.shortMessage}</span>
          <span className="hidden sm:inline"> — </span>
          <span className="hidden sm:inline font-semibold underline underline-offset-2">{banner.linkText}</span>
        </span>
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </a>
    </>
  );
}
