# Sanity.io CMS Integration - Setup Anleitung

## 📋 Übersicht

Diese Website hat **Sanity.io** als Content Management System (CMS) **vollständig integriert**. Der Kunde kann alle Inhalte (Leistungen, Team, Galerie, Preise, etc.) selbstständig über ein modernes Admin-Interface unter `/admin` bearbeiten – ähnlich wie bei WordPress, aber viel benutzerfreundlicher.

**✅ Status: FERTIG INTEGRIERT**
- Project ID: `uhi2qq06`
- Admin-Interface: `/admin` Route
- Alle Schemas konfiguriert

## 🎯 Was kann der Kunde verwalten?

- ✅ **Leistungen**: Services hinzufügen/bearbeiten (Titel, Beschreibung, Bilder, Icons)
- ✅ **Team**: Mitarbeiter-Profile pflegen (Fotos, Bios, Spezialisierungen)
- ✅ **Galerie**: Bilder hochladen und kategorisieren
- ✅ **Preise**: Preislisten komplett selbst verwalten
- ✅ **Testimonials**: Kundenbewertungen hinzufügen/ändern
- ✅ **Website-Einstellungen**: Kontaktdaten, Öffnungszeiten, Hero-Texte
- ✅ **SEO-Einstellungen**: Meta-Daten pro Seite (falls erweitert)

## 🚀 Schnellstart (Nur noch 2 Schritte!)

### 1. ✅ Sanity-Account ist bereits erstellt
Du hast bereits ein Sanity-Projekt:
- **Project ID**: `uhi2qq06`
- **Dataset**: `production`

### 2. 🔐 Admin-Zugang einrichten

**Wichtig:** Beim ersten Aufruf von `/admin` wirst du aufgefordert, dich mit deinem Sanity-Account einzuloggen.

1. Gehe auf deine Website zu: **`/admin`**
2. Klicke auf **"Sign in"**
3. Logge dich mit deinem Sanity.io Account ein (den du gerade erstellt hast)
4. **Fertig!** 🎉

Das Sanity Studio läuft jetzt direkt auf deiner Website unter `/admin`!

### 3. 🎨 Domain zu Sanity hinzufügen (wichtig!)

Damit das Admin-Panel funktioniert, musst du deine Domain in Sanity freigeben:

1. Gehe zu [sanity.io/manage](https://sanity.io/manage)
2. Wähle dein Projekt **"uhi2qq06"**
3. Gehe zu **"API" → "CORS Origins"**
4. Klicke **"Add CORS origin"**
5. Trage ein:
   - Für Development: `http://localhost:8080`
   - Für Production: `https://deine-domain.lovable.app` (oder deine eigene Domain)
6. Aktiviere: **"Allow credentials"**
7. Speichern!

**Fertig!** Jetzt kannst du auf `/admin` zugreifen und Inhalte bearbeiten.

### 4. 📝 Initiale Inhalte eingeben

Gehe auf `/admin` und erstelle die ersten Inhalte:

1. **Website Einstellungen** ausfüllen (einmalig)
2. **Leistungen** hinzufügen (z.B. die 3 Services von der Startseite)
3. **Team-Mitglieder** anlegen
4. **Galerie-Bilder** hochladen
5. **Preiskategorien** erstellen
6. **Testimonials** eintragen

### 5. 🚀 Deployment

Das Admin-Panel wird automatisch mit deiner Website deployed:
- Deploye deine Lovable-Website wie gewohnt
- Das Admin-Panel unter `/admin` ist dann sofort verfügbar
- Keine zusätzlichen Schritte nötig!

## ✅ Website ist bereits auf Sanity umgestellt!

Die Website lädt **alle Daten dynamisch** von Sanity:
- ✅ Startseite (Services, Testimonials)
- ✅ Galerie (Bilder)
- ✅ Preise (Preiskategorien)
- ✅ Hero-Section (Texte)
- ✅ Footer (Kontaktdaten)

**Fallback-System:**
- Wenn Sanity noch keine Daten hat → statische Fallback-Daten
- Sobald du Inhalte im Admin hinzufügst → automatisch live auf der Website!

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

- [x] Sanity-Account erstellt (Project ID: uhi2qq06)
- [x] Sanity Studio in Website integriert (`/admin`)
- [x] Alle Schemas konfiguriert
- [x] Website-Komponenten auf Sanity-Daten umgestellt
- [ ] CORS Origin in Sanity hinzufügen (siehe oben)
- [ ] Auf `/admin` einloggen
- [ ] Initiale Inhalte eingeben
- [ ] Live-Test durchgeführen
- [ ] Weitere Nutzer einladen (optional)

---

## 🎉 Ready to go!

Das CMS ist **vollständig integriert und einsatzbereit**. Sobald du dich auf `/admin` einloggst und die CORS-Origin eingerichtet hast, kannst du sofort Inhalte bearbeiten! 🚀
