import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";

const Preise = () => {
  const priceCategories = [
    {
      category: "Haarschnitte",
      items: [
        { service: "Damenhaarschnitt", price: "ab 38 €" },
        { service: "Herrenhaarschnitt", price: "ab 28 €" },
        { service: "Kinderhaarschnitt (bis 12 Jahre)", price: "ab 20 €" },
        { service: "Pony nachschneiden", price: "ab 10 €" },
      ],
    },
    {
      category: "Coloration",
      items: [
        { service: "Ansatzfarbe", price: "ab 45 €" },
        { service: "Komplettfarbe kurz", price: "ab 65 €" },
        { service: "Komplettfarbe lang", price: "ab 85 €" },
        { service: "Strähnen (Folie)", price: "ab 55 €" },
        { service: "Balayage / Ombré", price: "ab 85 €" },
        { service: "Toner / Glanzbehandlung", price: "ab 25 €" },
      ],
    },
    {
      category: "Styling & Finishing",
      items: [
        { service: "Waschen & Föhnen kurz", price: "ab 25 €" },
        { service: "Waschen & Föhnen lang", price: "ab 35 €" },
        { service: "Hochsteckfrisur", price: "ab 55 €" },
        { service: "Brautstyling", price: "auf Anfrage" },
        { service: "Make-up", price: "ab 45 €" },
      ],
    },
    {
      category: "Pflege & Behandlungen",
      items: [
        { service: "Intensivpflege", price: "ab 15 €" },
        { service: "Olaplex-Behandlung", price: "ab 25 €" },
        { service: "Kopfhautbehandlung", price: "ab 20 €" },
      ],
    },
    {
      category: "Dauerwelle & Glätten",
      items: [
        { service: "Dauerwelle", price: "ab 65 €" },
        { service: "Keratin-Glättung", price: "ab 120 €" },
      ],
    },
    {
      category: "Extras",
      items: [
        { service: "Augenbrauen färben", price: "ab 12 €" },
        { service: "Wimpern färben", price: "ab 15 €" },
        { service: "Bartpflege", price: "ab 18 €" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Preisliste</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparente Preise für erstklassige Leistungen. Alle Preise verstehen sich
            inklusive Beratung und Pflege.
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-6 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-3 max-w-4xl mx-auto">
            <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Wichtige Hinweise zu unseren Preisen:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Alle Preise sind Startpreise und können je nach Aufwand, Haarlänge und verwendeten Produkten variieren</li>
                <li>• Bei komplexen Leistungen erstellen wir Ihnen gerne ein individuelles Angebot</li>
                <li>• Die angegebenen Preise beinhalten eine professionelle Beratung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {priceCategories.map((category, index) => (
              <Card key={index} className="p-8 border-border">
                <h2 className="font-serif text-2xl font-bold mb-6 pb-4 border-b border-border">
                  {category.category}
                </h2>
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-start gap-4">
                      <span className="text-foreground">{item.service}</span>
                      <span className="font-semibold text-accent whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Info */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">Kombinationsangebote</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Kombinieren Sie mehrere Leistungen und profitieren Sie von attraktiven Paketpreisen.
            Sprechen Sie uns gerne darauf an!
          </p>
          <p className="text-sm text-muted-foreground italic">
            Beispiel: Haarschnitt + Farbe = günstiger Komplettpreis
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Haben Sie Fragen zu den Preisen?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein individuelles Angebot oder vereinbaren Sie einen
            kostenlosen Beratungstermin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/kontakt">Beratungstermin buchen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+4993170096040">0931 700 960 40</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preise;
