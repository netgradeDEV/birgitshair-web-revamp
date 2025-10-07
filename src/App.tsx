import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Leistungen from "./pages/Leistungen";
import Team from "./pages/Team";
import Galerie from "./pages/Galerie";
import Preise from "./pages/Preise";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const isGithubPages = typeof window !== "undefined" && window.location.hostname.endsWith("github.io");
  const basename = isGithubPages ? "/birgitshair-web-revamp" : "";
  
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/leistungen" element={<Leistungen />} />
              <Route path="/team" element={<Team />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/preise" element={<Preise />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
