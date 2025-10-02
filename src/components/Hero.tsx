import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  const [heroContent, setHeroContent] = useState({
    title: "Ihre Schönheit, unsere Leidenschaft",
    subtitle: "Professionelle Haarschnitte, Coloration & Styling im Herzen von Würzburg Heidingsfeld. Seit über 20 Jahren Ihr Partner für perfekte Looks.",
    cta_primary: "Jetzt Termin buchen",
    cta_secondary: "Unsere Leistungen"
  });

  useEffect(() => {
    const fetchHeroContent = async () => {
      const { data } = await supabase.from('hero_content').select('*').single();
      if (data) {
        setHeroContent({
          title: data.title,
          subtitle: data.subtitle,
          cta_primary: data.cta_primary,
          cta_secondary: data.cta_secondary,
        });
      }
    };
    fetchHeroContent();
  }, []);
  
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moderner Friseursalon mit eleganter Einrichtung"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 text-balance">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 text-balance">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              <Link to="/kontakt">
                {heroContent.cta_primary}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground text-lg px-8"
            >
              <Link to="/leistungen">{heroContent.cta_secondary}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronRight className="h-8 w-8 text-background rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
