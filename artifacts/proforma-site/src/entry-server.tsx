// Build-time server renderer used by scripts/prerender.mjs.
//
// It renders the same routes as App.tsx to static HTML so that crawlers that
// don't run JavaScript (ChatGPT, Claude, Perplexity, etc.) can read the actual
// page content. In the browser, main.tsx sees the pre-rendered markup and
// hydrates it instead of rendering from scratch.
import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Routes } from "./App";

export function render(url: string): string {
  const queryClient = new QueryClient();
  const helmetContext = {};
  return renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter ssrPath={url}>
            <Routes />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );
}

// Industry page copy, used by scripts/prerender.mjs for titles and schema.
export { industries, industriesHub } from "./data/industries";

// Blog posts, used by scripts/prerender.mjs for sitemap dates.
export { posts } from "./data/posts";
