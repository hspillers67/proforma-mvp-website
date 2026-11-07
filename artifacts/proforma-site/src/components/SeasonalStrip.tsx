import { useEffect, useState } from "react";
import { ArrowRight, Gift } from "lucide-react";
import { getActiveBanner } from "@/data/seasonalBanners";

/**
 * Seasonal promo strip at the very top of the fixed header.
 * Content, colors and dates live in src/data/seasonalBanners.ts.
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
      <style>{`:root{--strip-h:3rem}`}</style>
      <a
        href={banner.href}
        {...(isExternal ? { rel: "noopener" } : {})}
        style={{ backgroundColor: banner.background, borderBottom: `2px solid ${banner.accent}` }}
        className="group flex h-12 items-center justify-center gap-2.5 px-4 text-white text-sm md:text-base font-display font-semibold transition-[filter] hover:brightness-110"
      >
        <Gift className="w-5 h-5 shrink-0" style={{ color: banner.accent }} aria-hidden="true" />
        <span className="truncate">
          <span className="hidden sm:inline">{banner.message}</span>
          <span className="sm:hidden">{banner.shortMessage}</span>
          <span className="hidden sm:inline"> — </span>
          <span className="hidden sm:inline underline underline-offset-4" style={{ color: banner.accent }}>{banner.linkText}</span>
        </span>
        <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" style={{ color: banner.accent }} aria-hidden="true" />
      </a>
    </>
  );
}
