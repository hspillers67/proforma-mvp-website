/**
 * Seasonal promo strip shown across the top of every page.
 *
 * To plan a new season, add an entry below. Each one turns on and off by
 * itself based on its dates (the visitor's local date, inclusive).
 * If two entries overlap, the first one in the list wins.
 * If no entry is active, the strip doesn't show at all.
 *
 *   start / end  — "YYYY-MM-DD"
 *   message      — full text shown on computers and tablets
 *   shortMessage — shorter text for phones (keep it under ~40 characters)
 *   linkText     — the clickable call to action at the end
 *   href         — where it goes (ESP collection, a page on the site, /#contact)
 *   background   — strip color (hex); accent — icon/link color (hex)
 */
export interface SeasonalBanner {
  start: string;
  end: string;
  message: string;
  shortMessage: string;
  linkText: string;
  href: string;
  background: string;
  accent: string;
}

export const seasonalBanners: SeasonalBanner[] = [
  {
    start: "2026-11-01",
    end: "2026-12-15",
    message: "Free shipping on nearly the entire line of our favorite holiday food gifts",
    shortMessage: "Free shipping on holiday food gifts",
    linkText: "Shop gourmet gifts",
    // Maple Ridge holiday food gifts collection (ESP / mypromooffice)
    href: "https://portal.mypromooffice.com/collections/3c4309c7-d27e-4611-bfbb-577b78b12379?accessCode=87864cf99de34d31b26edef22d67f0a3",
    background: "#0F4D32", // evergreen
    accent: "#F2C75C", // warm gold
  },
];

function todayLocal(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export function getActiveBanner(today: string = todayLocal()): SeasonalBanner | null {
  return seasonalBanners.find((b) => b.start <= today && today <= b.end) ?? null;
}
