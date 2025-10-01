import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";
import serviceColoring from "@/assets/service-coloring.jpg";
import serviceCutting from "@/assets/service-cutting.jpg";
import serviceStyling from "@/assets/service-styling.jpg";

const Galerie = () => {
  // Gallery data
  const galleryItems = [
    { image: serviceColoring, title: "Coloration", category: "Farbe", alt: "Coloration" },
    { image: serviceCutting, title: "Haarschnitt", category: "Schnitt", alt: "Haarschnitt" },
    { image: serviceStyling, title: "Styling", category: "Styling", alt: "Styling" },
    { image: serviceColoring, title: "Highlights", category: "Farbe", alt: "Highlights" },
    { image: serviceCutting, title: "Kurzhaarschnitt", category: "Schnitt", alt: "Kurzhaarschnitt" },
    { image: serviceStyling, title: "Hochsteckfrisur", category: "Styling", alt: "Hochsteckfrisur" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Unsere Arbeiten</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lassen Sie sich von unseren Kreationen inspirieren. Hier finden Sie eine Auswahl
            unserer schönsten Arbeiten – von klassischen Schnitten bis zu modernen Color-Trends.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-border"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Camera className="h-12 w-12 mx-auto mb-6 text-accent" />
            <h2 className="font-serif text-3xl font-bold mb-4">Mehr Inspirationen auf Instagram</h2>
            <p className="text-muted-foreground mb-8">
              Folgen Sie uns auf Instagram für tägliche Updates, Behind-the-Scenes-Einblicke
              und aktuelle Trends aus der Friseurwelt.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Zu Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Lassen Sie sich inspirieren</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gemeinsam finden wir den perfekten Look für Sie. Vereinbaren Sie jetzt Ihren
            Beratungstermin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/kontakt">Termin buchen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/leistungen">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galerie;
