import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Palette, Sparkles, Droplets, Wind, Gem } from "lucide-react";

const Leistungen = () => {
  const services = [
    {
      icon: Scissors,
      category: "Haarschnitte",
      items: [
        { name: "Damenhaarschnitt", description: "Präziser Schnitt mit individueller Beratung" },
        { name: "Herrenhaarschnitt", description: "Klassisch bis modern, perfekt auf Sie abgestimmt" },
        { name: "Kinderhaarschnitt", description: "Geduldig und kinderfreundlich" },
        { name: "Pony schneiden", description: "Perfekte Form für Ihren Look" },
      ],
    },
    {
      icon: Palette,
      category: "Coloration",
      items: [
        { name: "Komplettcoloration", description: "Vollständige Farbveränderung oder Auffrischung" },
        { name: "Strähnen & Highlights", description: "Natürliche Akzente und Dimension" },
        { name: "Balayage & Ombré", description: "Moderne Färbetechniken für fließende Übergänge" },
        { name: "Grauhaarabdeckung", description: "Natürlich wirkende Grauabdeckung" },
      ],
    },
    {
      icon: Sparkles,
      category: "Styling",
      items: [
        { name: "Föhnen & Styling", description: "Perfektes Finish für jeden Anlass" },
        { name: "Hochsteckfrisuren", description: "Elegant für Hochzeiten und Events" },
        { name: "Brautstyling", description: "Ihr perfekter Look am schönsten Tag" },
        { name: "Make-up", description: "Professionelles Make-up für besondere Anlässe" },
      ],
    },
    {
      icon: Droplets,
      category: "Pflege-Treatments",
      items: [
        { name: "Intensivpflege", description: "Tiefenwirksame Haarpflege" },
        { name: "Olaplex-Behandlung", description: "Strukturwiederherstellung und Reparatur" },
        { name: "Kopfhautbehandlung", description: "Gesunde Kopfhaut, gesundes Haar" },
        { name: "Glanz-Treatment", description: "Für strahlend schönes Haar" },
      ],
    },
    {
      icon: Wind,
      category: "Dauerwelle & Glätten",
      items: [
        { name: "Dauerwelle", description: "Natürliche Locken und Volumen" },
        { name: "Keratin-Glättung", description: "Seidig glattes Haar für Wochen" },
        { name: "Volumen-Dauerwelle", description: "Mehr Fülle am Ansatz" },
      ],
    },
    {
      icon: Gem,
      category: "Extras",
      items: [
        { name: "Augenbrauen färben", description: "Perfekt abgestimmte Augenbrauen" },
        { name: "Wimpern färben", description: "Ausdrucksstarker Blick" },
        { name: "Bartpflege", description: "Konturenschnitt und Styling" },
        { name: "Haarverlängerung", description: "Beratung zu Extensions" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an professionellen Friseurdienstleistungen.
            Von klassischen Schnitten bis zu innovativen Färbetechniken – wir sind Ihr Partner
            für perfekte Haare.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-border">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-serif text-3xl font-semibold">{service.category}</h2>
                </div>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Note */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">Individuelle Beratung inklusive</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Bei jedem Besuch nehmen wir uns Zeit für eine ausführliche Beratung. Wir analysieren
            Ihre Haarstruktur, besprechen Ihre Wünsche und finden gemeinsam den perfekten Look
            für Sie.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/kontakt">Jetzt Termin vereinbaren</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Haben Sie Fragen zu unseren Leistungen?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir beraten Sie gerne persönlich und erstellen ein individuelles Angebot für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leistungen;
