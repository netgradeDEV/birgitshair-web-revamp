import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Palette, Sparkles, Heart, Award, Clock } from "lucide-react";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceCutting from "@/assets/service-cutting.jpg";
import serviceStyling from "@/assets/service-styling.jpg";

const Home = () => {
  // Service data
  const services = [
    {
      icon: Scissors,
      title: "Haarschnitte",
      description: "Präzise Schnitte für Damen und Herren, abgestimmt auf Ihren Typ und Stil.",
      image: serviceCutting,
    },
    {
      icon: Palette,
      title: "Coloration",
      description: "Professionelle Färbetechniken für natürliche bis expressive Looks.",
      image: serviceColoring,
    },
    {
      icon: Sparkles,
      title: "Styling & Treatments",
      description: "Hochzeits-Styling, Pflege-Treatments und individuelle Beratung.",
      image: serviceStyling,
    },
  ];

  const testimonials = [
    {
      name: "Anna M.",
      text: "Ich bin seit Jahren Stammkundin und immer begeistert. Birgit versteht genau, was zu mir passt!",
    },
    {
      name: "Thomas K.",
      text: "Professionelle Beratung, entspannte Atmosphäre und top Ergebnisse. Sehr empfehlenswert!",
    },
    {
      name: "Lisa S.",
      text: "Das beste Farbergebnis, das ich je hatte. Meine Haare sehen gesund und strahlend aus!",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "20+ Jahre Erfahrung",
      description: "Meisterliche Kompetenz und Tradition",
    },
    {
      icon: Heart,
      title: "Individuelle Beratung",
      description: "Persönlich auf Sie abgestimmt",
    },
    {
      icon: Clock,
      title: "Flexible Termine",
      description: "Auch außerhalb der Öffnungszeiten",
    },
  ];

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von klassischen Schnitten bis zu modernen Trends – wir bieten Ihnen das komplette Spektrum
              professioneller Friseurkunst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/leistungen">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Warum zu uns?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Das sagen unsere Kunden
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Bereit für Ihren neuen Look?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt Ihren Termin und erleben Sie professionelle Friseurkunst
            in entspannter Atmosphäre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/kontakt">Termin buchen</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+4993170096040">0931 700 960 40</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
