import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  // Site settings
  const siteName = "Birgit Hartbauer";
  const address = "Mergentheimer Str. 24\n97084 Würzburg";
  const phone = "0931 700 960 40";
  const email = "info@friseur-hartbauer.de";
  const openingHours = "Mo - Fr: 8:00 - 18:00\nSa: 8:00 - 14:00";
  const instagramUrl = "https://instagram.com";
  const facebookUrl = "https://facebook.com";

  const addressLines = address.split('\n');
  const openingHoursLines = openingHours.split('\n');

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">{siteName}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ihr exklusiver Friseursalon in Würzburg Heidingsfeld seit über 20 Jahren.
            </p>
            <div className="flex space-x-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/leistungen" className="text-muted-foreground hover:text-accent transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-muted-foreground hover:text-accent transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/preise" className="text-muted-foreground hover:text-accent transition-colors">
                  Preise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">
                  {addressLines.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={`tel:+49${phone.replace(/\s/g, '').replace(/^0/, '')}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>{email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold mb-4">Öffnungszeiten</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  {openingHoursLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                  <p className="text-xs mt-1">und nach Vereinbarung</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Friseursalon {siteName}. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-accent transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-accent transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
