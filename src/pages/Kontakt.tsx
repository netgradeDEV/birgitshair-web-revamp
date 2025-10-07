import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";

// Validation schema with security measures
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name ist erforderlich" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" })
    .regex(/^[a-zA-ZäöüÄÖÜß\s\-']+$/, { message: "Name enthält ungültige Zeichen" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "E-Mail ist erforderlich" })
    .email({ message: "Ungültige E-Mail-Adresse" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Telefonnummer darf maximal 30 Zeichen lang sein" })
    .regex(/^[0-9\s\+\-\(\)\/]*$/, { message: "Telefonnummer enthält ungültige Zeichen" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, { message: "Nachricht ist erforderlich" })
    .max(1000, { message: "Nachricht darf maximal 1000 Zeichen lang sein" }),
});

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate input with Zod
      const validatedData = contactSchema.parse(formData);

      // Create WhatsApp message with proper encoding
      const whatsappNumber = "499316606888";
      const message = `Neue Kontaktanfrage:\n\nName: ${validatedData.name}\nE-Mail: ${validatedData.email}\nTelefon: ${validatedData.phone || "Nicht angegeben"}\n\nNachricht:\n${validatedData.message}`;
      
      // Properly encode for URL to prevent XSS
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new window
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      toast({
        title: "Nachricht vorbereitet!",
        description: "WhatsApp wird geöffnet. Bitte senden Sie die Nachricht dort ab.",
      });

      // Reset form after successful validation
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Map validation errors to form fields
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);

        toast({
          title: "Validierungsfehler",
          description: "Bitte überprüfen Sie Ihre Eingaben.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
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
                  unserem Salon in Würzburg - Rottenbauer.
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
                        Wolfskeelstraße 23<br />
                        Würzburg - Rottenbauer
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
                        href="tel:+499316606888"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        0931/6606888
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
                        <p>Dienstag & Mittwoch: 9:00 - 18:00 Uhr</p>
                        <p>Donnerstag: 9:00 - 16:00 Uhr</p>
                        <p>Freitag: 9:00 - 19:00 Uhr</p>
                        <p>Samstag: 8:00 - 13:00 Uhr</p>
                        <p className="text-xs mt-2 italic">Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map with Privacy-Compliant Loading */}
              <Card className="overflow-hidden border-border">
                {!showMap ? (
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-6">
                    <div className="text-center space-y-4 max-w-md">
                      <MapPin className="h-16 w-16 mx-auto text-accent/60" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Standort auf Google Maps</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Durch das Laden der Karte werden Daten an Google übertragen. 
                          Mit Klick auf "Karte laden" stimmen Sie der Datenübertragung zu.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => setShowMap(true)}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          Karte laden
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                        >
                          <a
                            href="https://maps.app.goo.gl/your-google-business-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Direkt in Google Maps öffnen
                          </a>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Mehr Informationen in unserer{" "}
                        <a href="/datenschutz" className="text-accent hover:underline">
                          Datenschutzerklärung
                        </a>
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.8!2d9.971!3d49.769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ2JzA4LjQiTiA5wrA1OCcxNS42IkU!5e0!3m2!1sde!2sde!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Standort Friseursalon Birgit Hartbauer"
                  />
                )}
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
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
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
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
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
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
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
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
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
                    {isSubmitting ? "Wird gesendet..." : "Via WhatsApp senden"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Beim Absenden wird WhatsApp mit Ihrer Nachricht geöffnet
                  </p>
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
            <a href="tel:+499316606888">0931/6606888</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
