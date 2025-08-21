import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CartSlider from "@/components/cart/cart-slider";
import LoadingScreen from "@/components/loading-screen";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home";
import Catalog from "@/pages/catalog";
import ProductDetail from "@/pages/product-detail";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Community from "@/pages/community";
import Appointment from "@/pages/appointment";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-noir-900 text-white">
      <ScrollToTop />
      <Navbar />
      <div className="pt-16 md:pt-20 lg:pt-24"> {/* Responsive padding-top for floating navbar */}
        <Switch>
        <Route path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/community" component={Community} />
        <Route path="/appointment" component={Appointment} />
        <Route component={NotFound} />
        </Switch>
        <Footer />
        <CartSlider />
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          {!isLoading && <Router />}
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
