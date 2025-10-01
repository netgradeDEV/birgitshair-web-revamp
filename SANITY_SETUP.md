# Sanity.io CMS Integration - Setup Anleitung

## 📋 Übersicht

Diese Website ist vorbereitet für die Integration mit **Sanity.io** als Content Management System (CMS). Der Kunde kann damit alle Inhalte (Leistungen, Team, Galerie, Preise, etc.) selbstständig über ein modernes Admin-Interface bearbeiten – ähnlich wie bei WordPress, aber viel benutzerfreundlicher.

## 🎯 Was kann der Kunde verwalten?

- ✅ **Leistungen**: Services hinzufügen/bearbeiten (Titel, Beschreibung, Bilder, Icons)
- ✅ **Team**: Mitarbeiter-Profile pflegen (Fotos, Bios, Spezialisierungen)
- ✅ **Galerie**: Bilder hochladen und kategorisieren
- ✅ **Preise**: Preislisten komplett selbst verwalten
- ✅ **Testimonials**: Kundenbewertungen hinzufügen/ändern
- ✅ **Website-Einstellungen**: Kontaktdaten, Öffnungszeiten, Hero-Texte
- ✅ **SEO-Einstellungen**: Meta-Daten pro Seite (falls erweitert)

## 🚀 Setup-Schritte

### 1. Sanity-Projekt erstellen

1. Gehe zu [sanity.io](https://sanity.io) und erstelle einen kostenlosen Account
2. Klicke auf "Create new project"
3. Gib deinem Projekt einen Namen: z.B. "Friseursalon Hartbauer"
4. Wähle "Dataset": `production`
5. Notiere dir die **Project ID** (z.B. `abc123xy`)

### 2. Sanity Studio einrichten

#### Option A: Separates Studio (Empfohlen für Anfänger)

```bash
# In einem NEUEN Ordner (außerhalb des Website-Projekts):
npm create sanity@latest

# Folge den Prompts:
# - Login mit deinem Sanity-Account
# - Wähle dein Projekt aus
# - Dataset: production
# - Output path: sanity-studio (oder beliebig)
# - Template: Clean project
```

#### Option B: In bestehendes Projekt integriert

```bash
# Im Root-Verzeichnis dieses Projekts:
npm install -g @sanity/cli
sanity init

# Folge den Prompts wie oben
```

### 3. Schemas kopieren

Kopiere alle Schema-Dateien aus dem `sanity-schemas/` Ordner in dein Sanity Studio:

```
sanity-studio/
  schemas/
    service.ts          ← Kopiere aus sanity-schemas/
    teamMember.ts       ← Kopiere aus sanity-schemas/
    galleryItem.ts      ← Kopiere aus sanity-schemas/
    priceCategory.ts    ← Kopiere aus sanity-schemas/
    testimonial.ts      ← Kopiere aus sanity-schemas/
    siteSettings.ts     ← Kopiere aus sanity-schemas/
    index.ts            ← Kopiere aus sanity-schemas/
```

Dann in `sanity.config.ts` (oder `sanity.config.js`) die Schemas importieren:

```typescript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Friseursalon Hartbauer',
  projectId: 'your-project-id',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
```

### 4. Studio starten

```bash
cd sanity-studio
npm run dev
```

Das Sanity Studio läuft jetzt unter `http://localhost:3333`

### 5. Website konfigurieren

Erstelle eine `.env` Datei im Root der Website (basierend auf `.env.example`):

```env
VITE_SANITY_PROJECT_ID=abc123xy
VITE_SANITY_DATASET=production
```

### 6. Initiale Inhalte eingeben

Logge dich ins Sanity Studio ein und erstelle die ersten Inhalte:

1. **Website Einstellungen** ausfüllen (einmalig)
2. **Leistungen** hinzufügen (z.B. die 3 Services von der Startseite)
3. **Team-Mitglieder** anlegen
4. **Galerie-Bilder** hochladen
5. **Preiskategorien** erstellen
6. **Testimonials** eintragen

### 7. Studio deployen (Production)

```bash
cd sanity-studio
sanity deploy
```

Wähle eine Studio-URL (z.B. `hartbauer-salon.sanity.studio`)

Jetzt kann der Kunde von überall auf das Studio zugreifen!

## 🔄 Website auf Sanity umstellen

### Aktueller Stand

Die Website nutzt noch **statische Daten** (hardcoded). Alle Inhalte funktionieren normal.

### Migration zu Sanity (nächster Schritt)

Sobald das Sanity Studio läuft und Inhalte eingegeben sind, können wir die React-Komponenten anpassen, um Daten von Sanity zu laden:

**Beispiel für Services auf der Startseite:**

```typescript
// Vorher (statisch):
const services = [
  { title: "Haarschnitte", description: "...", ... }
];

// Nachher (dynamisch von Sanity):
import { sanityClient } from '@/lib/sanity';
import { Service } from '@/types/sanity';

const [services, setServices] = useState<Service[]>([]);

useEffect(() => {
  sanityClient
    .fetch('*[_type == "service"] | order(order asc)')
    .then(setServices);
}, []);
```

Das gleiche Prinzip gilt für alle anderen Content-Bereiche.

## 📦 Sanity Features

### Bilder-Optimierung

Sanity optimiert Bilder automatisch:

```typescript
import { urlFor } from '@/lib/sanity';

// Bild in verschiedenen Größen laden:
<img 
  src={urlFor(item.image).width(800).url()} 
  alt={item.image.alt}
/>
```

### Preview-Modus

Änderungen vor der Veröffentlichung ansehen (optional erweiterbar):

```typescript
// In sanity.ts:
useCdn: false, // Für Live-Preview
```

### Versionierung

Sanity speichert automatisch alle Änderungen – man kann jederzeit zu einer früheren Version zurückkehren.

## 💰 Kosten

- **Kostenlos** bis 10.000 API-Requests/Monat
- **Kostenlos** bis 5 GB Assets (Bilder/Videos)
- **Kostenlos** bis 3 Nutzer

Für einen Friseursalon: **komplett kostenlos!** 🎉

## 🔐 Benutzer-Verwaltung

Im Sanity Dashboard kannst du weitere Benutzer einladen:

1. Gehe zu [sanity.io/manage](https://sanity.io/manage)
2. Wähle dein Projekt
3. "Members" → "Invite members"
4. Vergib Rollen: Admin, Editor, oder Viewer

## 🆘 Support

- **Sanity Docs**: [sanity.io/docs](https://sanity.io/docs)
- **Sanity Help**: [sanity.io/help](https://sanity.io/help)
- **Community**: [slack.sanity.io](https://slack.sanity.io)

## ✅ Checkliste

- [ ] Sanity-Account erstellt
- [ ] Sanity Studio eingerichtet
- [ ] Schemas kopiert und importiert
- [ ] Studio lokal läuft (`npm run dev`)
- [ ] `.env` Datei mit Project ID konfiguriert
- [ ] Initiale Inhalte eingegeben
- [ ] Studio deployed (Production URL)
- [ ] Website-Komponenten auf Sanity-Daten umgestellt
- [ ] Live-Test durchgeführt
- [ ] Kunde ins Studio eingeladen

---

**Nächste Schritte nach Setup:**
Sobald das Studio läuft und Daten enthält, können wir die React-Komponenten Schritt für Schritt von statischen Daten auf Sanity-Queries umstellen. Der Kunde kann dann sofort mit der Content-Pflege starten! 🚀
