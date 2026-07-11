import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import ThankYou from "@/pages/ThankYou";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import TestimonialsPage from "@/pages/TestimonialsPage";
import FAQPage from "@/pages/FAQPage";
import PromotionalProducts from "@/pages/PromotionalProducts";
import CompanyStores from "@/pages/CompanyStores";
import BrandedApparel from "@/pages/BrandedApparel";
import TradeShowProducts from "@/pages/TradeShowProducts";
import PrintingPackaging from "@/pages/PrintingPackaging";
import AwardsRecognition from "@/pages/AwardsRecognition";
import Trending from "@/pages/Trending";
import TrendingPost from "@/pages/TrendingPost";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/promotional-products" component={PromotionalProducts} />
      <Route path="/company-stores" component={CompanyStores} />
      <Route path="/branded-apparel" component={BrandedApparel} />
      <Route path="/trade-show-products" component={TradeShowProducts} />
      <Route path="/printing-packaging" component={PrintingPackaging} />
      <Route path="/printing-signage">{() => { window.location.replace("/printing-packaging"); return null; }}</Route>
      <Route path="/awards-recognition" component={AwardsRecognition} />
      <Route path="/employee-gifts-recognition">{() => { window.location.replace("/awards-recognition"); return null; }}</Route>
      <Route path="/trending" component={Trending} />
      <Route path="/trending/:slug" component={TrendingPost} />
      <Route path="/admin" component={Admin} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
