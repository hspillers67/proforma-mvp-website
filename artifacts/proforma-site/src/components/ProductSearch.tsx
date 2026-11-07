import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

const ESP_SEARCH_URL = "https://proformamvpmarketing.espwebsites.com/products";

interface ProductSearchProps {
  autoFocus?: boolean;
  className?: string;
  onSearch?: () => void;
}

/**
 * Search box that sends visitors to the ESP Website product results
 * (same tab), e.g. /products?q=coffee%20mugs
 */
export default function ProductSearch({ autoFocus, className = "", onSearch }: ProductSearchProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    onSearch?.();
    window.location.href = q
      ? `${ESP_SEARCH_URL}?q=${encodeURIComponent(q)}`
      : ESP_SEARCH_URL;
  };

  return (
    <form
      role="search"
      action={ESP_SEARCH_URL}
      method="get"
      onSubmit={handleSubmit}
      className={`flex items-center border-b-2 border-white/80 focus-within:border-white ${className}`}
    >
      <label htmlFor="product-search" className="sr-only">Search for products</label>
      <input
        id="product-search"
        name="q"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for Products"
        autoFocus={autoFocus}
        autoComplete="off"
        className="flex-1 min-w-0 bg-transparent py-2 text-base font-display text-white placeholder:text-white/60 outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      <button type="submit" aria-label="Search products" className="p-2 text-white hover:text-secondary transition-colors">
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
