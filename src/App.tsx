
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Models from "./pages/Models";
import Workflow from "./pages/Workflow";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import Brochure from "./pages/Brochure";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEO /> {/* Default SEO for all pages */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/over-ons" element={<AboutUs />} />
            <Route path="/modellen" element={<Models />} />
            <Route path="/werkwijze" element={<Workflow />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
