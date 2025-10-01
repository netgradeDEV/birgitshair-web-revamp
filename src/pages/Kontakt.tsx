import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Nachricht. Vereinbaren Sie einen Termin oder stellen Sie uns
            Ihre Fragen – wir sind gerne für Sie da!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Kontaktinformationen</h2>
                <p className="text-muted-foreground mb-8">
                  Erreichen Sie uns telefonisch, per E-Mail oder besuchen Sie uns direkt in
                  unserem Salon in Würzburg Heidingsfeld.
                </p>
              </div>

              <Card className="p-6 border-border">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-sm text-muted-foreground">
                        Mergentheimer Straße 24<br />
                        97084 Würzburg-Heidingsfeld
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a
                        href="tel:+4993170096040"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        0931 700 960 40
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a
                        href="mailto:info@friseur-hartbauer.de"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@friseur-hartbauer.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Öffnungszeiten</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Montag - Freitag: 8:00 - 18:00 Uhr</p>
                        <p>Samstag: 8:00 - 14:00 Uhr</p>
                        <p className="text-xs mt-2 italic">Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden border-border">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">
                      <a
                        href="https://maps.google.com/?q=Mergentheimer+Str.+24+97084+Würzburg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Route in Google Maps öffnen
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 border-border">
                <h2 className="font-serif text-3xl font-bold mb-6">Nachricht senden</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ihre Telefonnummer (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Ihr Anliegen oder Terminwunsch..."
                      rows={6}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Mit dem Absenden des Formulars stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4 text-primary-foreground">
            Lieber direkt anrufen?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Rufen Sie uns an und vereinbaren Sie direkt Ihren Wunschtermin
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="tel:+4993170096040">0931 700 960 40</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
