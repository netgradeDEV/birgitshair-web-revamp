import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const Team = () => {
  const values = [
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Wir lieben, was wir tun und stecken Herzblut in jeden Schnitt",
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Meisterliche Handwerkskunst und kontinuierliche Weiterbildung",
    },
    {
      icon: Users,
      title: "Persönlichkeit",
      description: "Jeder Kunde ist einzigartig und verdient individuelle Aufmerksamkeit",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Wir kombinieren Tradition mit modernen Trends und Techniken",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Unser Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lernen Sie die Menschen kennen, die mit Leidenschaft und Expertise für Ihre
            Schönheit sorgen.
          </p>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    Inhaberin & Friseurmeisterin
                  </div>
                  <h2 className="font-serif text-4xl font-bold">Birgit Hartbauer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mit über 20 Jahren Erfahrung und der Leidenschaft für Friseurhandwerk führe
                    ich meinen Salon im Herzen von Heidingsfeld. Nach meiner Meisterprüfung und
                    zahlreichen Weiterbildungen in modernen Färbe- und Schnitttechniken ist es
                    mir wichtig, jeden Kunden individuell zu beraten und mit einem perfekten
                    Ergebnis glücklich zu machen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Meine Philosophie: Jeder Mensch ist einzigartig – und das sollte auch seine
                    Frisur widerspiegeln. Ich nehme mir Zeit, um Ihre Persönlichkeit, Ihren Stil
                    und Ihre Wünsche zu verstehen und setze diese mit Präzision und Kreativität um.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Users className="h-24 w-24 mx-auto mb-4 opacity-20" />
                      <p className="text-sm">Profilbild folgt</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten uns jeden Tag in unserer Arbeit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-border">
                <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Unsere Geschichte</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Seit über 20 Jahren ist der Friseursalon Birgit Hartbauer eine feste Größe in
                Würzburg Heidingsfeld. Was als kleiner Traum begann, hat sich zu einem beliebten
                Anlaufpunkt für anspruchsvolle Kunden entwickelt, die Wert auf Qualität,
                persönliche Beratung und entspannte Atmosphäre legen.
              </p>
              <p>
                Durch kontinuierliche Weiterbildung, den Einsatz hochwertiger Produkte und die
                Liebe zum Detail haben wir uns einen treuen Kundenstamm aufgebaut. Viele unserer
                Kunden begleiten wir schon seit Jahren – und das ist für uns die größte
                Auszeichnung.
              </p>
              <p className="font-semibold text-foreground">
                Tradition trifft Innovation – für Ihren perfekten Look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Lernen Sie uns persönlich kennen</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Besuchen Sie uns in unserem Salon und überzeugen Sie sich selbst von unserer
            Expertise und Gastfreundschaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/kontakt">Termin vereinbaren</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/galerie">Unsere Arbeiten ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
