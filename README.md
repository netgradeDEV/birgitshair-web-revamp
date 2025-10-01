# Friseursalon Birgit Hartbauer - Website

Moderne, responsive Website für den Friseursalon Birgit Hartbauer in Würzburg Heidingsfeld.

## 🎯 Projektziel

Erstellung einer modernen, schnellen und vollständig responsiven Website für einen etablierten Friseursalon mit über 20 Jahren Erfahrung. Die Website soll:
- Vertrauen und Professionalität ausstrahlen
- Klare Terminvereinbarungs-CTAs bieten
- SEO-optimiert sein
- Barrierefreiheit (WCAG 2.2 AA) gewährleisten
- Optimale Performance auf allen Geräten bieten

## 🏗️ Tech Stack

- **Framework**: React 18 mit Vite
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS mit custom Design System
- **UI-Komponenten**: shadcn/ui (angepasst)
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Formulare**: React Hook Form + Zod (vorbereitet)

## 🎨 Design System

### Farben (HSL)
- **Primary**: `30° 35% 70%` - Warmes Champagner-Beige
- **Primary Dark**: `35° 30% 40%` - Tiefer Bronze-Ton
- **Accent**: `38° 45% 55%` - Elegantes Gold
- **Background**: `35° 30% 96%` - Helles Cremeweiß
- **Foreground**: `20° 15% 15%` - Dunkles Braun

### Typografie
- **Headlines**: Playfair Display (Serif, elegant)
- **Body Text**: Inter (Sans-Serif, moderne Lesbarkeit)

### Design-Prinzipien
- Luftig und modern
- Hochwertige Bildsprache
- Klare Hierarchien
- Starke, eindeutige CTAs
- Responsive-First Ansatz

## 📁 Projektstruktur

```
src/
├── assets/              # Bilder und Medien
├── components/          
│   ├── ui/             # shadcn UI-Komponenten
│   ├── Navigation.tsx  # Hauptnavigation
│   ├── Footer.tsx      # Footer-Komponente
│   ├── Hero.tsx        # Hero-Section
│   └── ServiceCard.tsx # Service-Karten
├── pages/
│   ├── Home.tsx        # Startseite
│   ├── Leistungen.tsx  # Leistungsübersicht
│   ├── Team.tsx        # Team & Über uns
│   ├── Galerie.tsx     # Portfolio
│   ├── Preise.tsx      # Preisliste
│   ├── Kontakt.tsx     # Kontaktformular & Info
│   ├── Impressum.tsx   # Impressum
│   ├── Datenschutz.tsx # Datenschutzerklärung
│   └── NotFound.tsx    # 404-Seite
├── lib/                # Utilities
└── index.css           # Globale Styles & Design Tokens
```

## 🚀 Installation & Entwicklung

### Voraussetzungen
- Node.js 18+ und npm

### Setup
```bash
# Repository klonen
git clone <YOUR_GIT_URL>

# In Projektverzeichnis wechseln
cd <YOUR_PROJECT_NAME>

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:8080` erreichbar.

### Build für Produktion
```bash
npm run build
```

## 🗺️ Sitemap

1. **Home** (`/`) - Hero, Services-Übersicht, Testimonials, CTAs
2. **Leistungen** (`/leistungen`) - Detaillierte Service-Beschreibungen
3. **Team** (`/team`) - Über uns, Philosophie, Werte
4. **Galerie** (`/galerie`) - Portfolio unserer Arbeiten
5. **Preise** (`/preise`) - Transparente Preisübersicht
6. **Kontakt** (`/kontakt`) - Kontaktformular, Öffnungszeiten, Anfahrt
7. **Impressum** (`/impressum`) - Rechtliche Angaben
8. **Datenschutz** (`/datenschutz`) - Datenschutzerklärung

## ✅ SEO-Checkliste

### On-Page SEO
- ✅ Semantisches HTML5 (header, main, section, article, nav, footer)
- ✅ Meta Title & Description auf allen Seiten
- ✅ H1-H6 Hierarchie korrekt implementiert
- ✅ Alt-Texte für alle Bilder
- ✅ Open Graph Tags
- ✅ Mobile-optimiert (responsive Design)
- ✅ Schnelle Ladezeiten (Vite Build-Optimierung)
- 🔲 Strukturierte Daten (JSON-LD) - TODO: Organisation Schema hinzufügen
- 🔲 Sitemap.xml - TODO: Generieren
- 🔲 robots.txt - Bereits vorhanden, ggf. anpassen

### Keywords & Content
**Haupt-Keywords:**
- Friseur Würzburg
- Friseursalon Heidingsfeld
- Haarschnitt Würzburg
- Friseur Birgit Hartbauer

**Long-Tail Keywords:**
- Damenfriseur Würzburg Heidingsfeld
- Herrenfriseur Würzburg
- Coloration Würzburg
- Brautstyling Würzburg

### Performance
- ✅ Bilder optimiert (moderne Formate)
- ✅ Lazy Loading
- ✅ Code Splitting (React Router)
- 🔲 Lighthouse Score > 90 - TODO: Messen nach Deployment

## ♿ Accessibility (WCAG 2.2 AA)

### Implementiert
- ✅ Semantisches HTML
- ✅ Tastaturnavigation
- ✅ Fokus-States sichtbar
- ✅ Ausreichende Farbkontraste (geprüft für Design System)
- ✅ ARIA-Labels wo nötig
- ✅ Formulare mit Labels und Fehlermeldungen
- ✅ Alt-Texte für alle Bilder
- ✅ Responsive Font-Größen

### Zu testen
- 🔲 Screen Reader Tests
- 🔲 Keyboard-only Navigation komplett durchgehen
- 🔲 Kontrast-Check für alle Farbkombinationen

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Large Desktop**: ≥ 1280px

Alle Komponenten sind mobile-first entwickelt.

## 🔐 Rechtliches & DSGVO

### Implementiert
- ✅ Impressum mit vollständigen Angaben
- ✅ Datenschutzerklärung
- ✅ Kontaktformular mit Datenschutz-Hinweis
- 🔲 Cookie-Consent Banner - TODO: Implementieren falls Tracking gewünscht

### Zu beachten
- Kontaktformular sendet aktuell nur Frontend-Feedback (Toast)
- Backend-Integration für E-Mail-Versand erforderlich
- Bei Integration von Analytics: Cookie-Consent erforderlich

## 🚧 Offene TODOs

### Funktional
1. **Backend-Integration**
   - Kontaktformular mit E-Mail-Versand verbinden
   - ggf. Terminbuchungs-System integrieren

2. **Content**
   - Team-Fotos einfügen
   - Galerie mit echten Salon-Fotos füllen
   - Testimonials mit echten Kundenstimmen

3. **SEO**
   - Sitemap.xml generieren
   - Strukturierte Daten (Organization, LocalBusiness) hinzufügen
   - Google Search Console einrichten
   - Google Business Profil optimieren

4. **Performance**
   - Lighthouse Audit durchführen
   - Core Web Vitals optimieren
   - Image Optimization prüfen

5. **Optional**
   - Blog/News-Sektion für SEO
   - Online-Terminbuchung
   - Instagram-Feed Integration
   - Newsletter-Anmeldung

## 📞 Kontaktinformationen (im Code verwendet)

- **Adresse**: Mergentheimer Str. 24, 97084 Würzburg
- **Telefon**: 0931 700 960 40
- **E-Mail**: info@friseur-hartbauer.de
- **Öffnungszeiten**: Mo-Fr 8-18 Uhr, Sa 8-14 Uhr

## 📊 Analytics & Tracking

Aktuell **kein** Tracking implementiert. Bei Bedarf:
- Google Analytics 4 mit Consent Mode v2
- Cookie-Consent Banner erforderlich
- Datenschutzerklärung anpassen

## 🔄 Deployment

### Via Lovable
1. In Lovable öffnen
2. "Share" → "Publish" klicken
3. Domain verbinden (optional)

### Manuelle Deployment-Optionen
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Build-Output in `gh-pages` Branch

## 📝 Content-Management

Aktuell sind alle Inhalte direkt im Code (statisch). Für einfachere Content-Pflege:

**Option 1**: Markdown-Files in `src/content/`
**Option 2**: Headless CMS (z.B. Strapi, Contentful)
**Option 3**: Wordpress als Backend

Code ist vorbereitet für spätere CMS-Integration durch modulare Komponentenstruktur.

## 🎯 Conversion-Optimierung

### Primäres Ziel: Terminvereinbarung

**CTAs implementiert:**
- Hero: "Jetzt Termin buchen"
- Navigation: "Termin buchen" (sticky)
- Footer: Telefonnummer prominent
- Alle Service-Seiten: CTAs zum Kontakt
- Preise-Seite: Direkt zu Buchung

### Tracking-Empfehlung
- Telefon-Klicks tracken
- Formular-Submissions tracken
- Button-Klicks zu /kontakt tracken

## 👥 Zielgruppe

**Primär:**
- Lokale Kundschaft in Würzburg & Heidingsfeld
- Altersgruppe: 25-65 Jahre
- Qualitätsbewusst, Wert auf persönliche Betreuung
- Desktop & Mobile Nutzer (ca. 60/40)

**Ansprache:**
- Professionell aber persönlich
- Deutsch, formell (Sie)
- Fokus auf Qualität & Erfahrung

## 📈 Success Metrics

**KPIs zu messen:**
- Telefon-Anrufe
- Kontaktformular-Submissions
- Verweildauer
- Bounce Rate
- Mobile vs. Desktop Traffic
- Lokale Suchanfragen-Rankings

---

**Stand**: Januar 2025
**Version**: 1.0.0
**Erstellt mit**: Lovable.dev
