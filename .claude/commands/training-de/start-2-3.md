# /training-de:start-2-3 - Marketing-Texte generieren

## Sprach- & Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Vermittle die Erstellung von Texten in hohem Volumen über alle Kanäle hinweg bei gleichbleibender Qualität.

### Lektionsübersicht

---

**Modul 2.3: Marketing-Texte generieren**

Lerne, professionelle Marketing-Texte in großem Umfang zu erstellen: E-Mails, Anzeigen, Social Media, Landing Pages. Qualität + Geschwindigkeit.

**Dauer:** ~35 Minuten

---

### Schritt 1: E-Mail-Willkommenssequenz

Verwende den Sequenz-Befehl:

```
/sequence:welcome "AgentKits" "trial users - remote team managers"
```

Überprüfe die generierte Sequenz:
- E-Mail 1 (Tag 0): Willkommen + Schnellstart
- E-Mail 2 (Tag 2): Feature-Highlight
- E-Mail 3 (Tag 5): Social Proof + Tipps
- E-Mail 4 (Tag 9): Wertverstärkung
- E-Mail 5 (Tag 13): Testphase endet + Upgrade

Jede E-Mail enthält:
- Betreffzeilen-Varianten für A/B-Tests
- Vorschautext
- Textkörper
- Klaren CTA

### Schritt 2: Social-Media-Inhalte

Verwende Content-Befehle für Social Media:

**LinkedIn:**
```
/content:social "Team coordination tips for remote managers - AgentKits launch" "linkedin"
```

**Twitter:**
```
/content:social "5 ways remote teams waste time coordinating - thread" "twitter"
```

### Schritt 3: Blog-Inhalte

Verwende den Blog-Befehl mit SEO-Fokus:

```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team focus time"
```

Dann optimieren:
```
/seo:optimize "the blog post" "remote team focus time"
```

### Schritt 4: Paid-Ad-Texte

Verwende Anzeigentext-Befehle:

**Google Ads:**
```
/content:ads "google" "team productivity software - drive signups"
```

**Meta Ads:**
```
/content:ads "meta" "remote team coordination - awareness campaign"
```

**LinkedIn Ads:**
```
/content:ads "linkedin" "B2B productivity tool - lead generation"
```

### Schritt 5: Landing-Page-Texte

Verwende den Landing-Page-Befehl:

```
/content:landing "14-day free trial of AgentKits" "remote team managers at tech companies"
```

Dies generiert:
- Hero-Bereich (Überschrift, Unterüberschrift, CTA)
- Problem-Bereich
- Lösungs-Bereich
- Features mit Vorteilen
- Social-Proof-Bereich
- Preisübersicht
- FAQ-Bereich
- Abschließender CTA

### Schritt 6: Schneller vs. guter Content

Erkläre die zwei Content-Modi:

**Schneller Content (`/content:fast`):**
- Schnelle Bearbeitung
- Gut für Ideenfindung
- Erste Entwürfe
- Bedarf an hohem Volumen

```
/content:fast "Quick LinkedIn post about team focus time benefits"
```

**Guter Content (`/content:good`):**
- Gründliche Recherche
- Mehrere Varianten
- Publikationsreif
- Strategische Inhalte

```
/content:good "Detailed blog post about the science of team focus time with research citations"
```

### Schritt 7: Content-Verbesserung

Verwende Verbesserungs-Befehle:

```
/content:enhance "make the copy more conversational and add urgency"
```

```
/content:cro "optimize for higher conversion rate"
```

### Schritt 8: A/B-Test-Varianten

Erstelle Test-Varianten:

```
Create A/B test variations for the landing page:

Headlines (5 angles):
1. Outcome-focused
2. Problem-focused
3. Question
4. How-to
5. Social proof

CTAs (3 variations):
1. Start Free Trial
2. Try It Free
3. Get Started Now
```

### Schritt 9: Personalisierung nach Persona

Erstelle personaspezifische Varianten:

**Für Solo Sam:**
```
/content:email "product announcement" "technical team managers - efficiency focus"
```

**Für Startup Sam:**
```
/content:email "product announcement" "startup founders - growth and scale focus"
```

### Schritt 10: Qualitätsprüfung

Überprüfe alle Inhalte mit Spezialisten:

```
Review all content we created with:
1. brand-voice-guardian - brand consistency
2. conversion-optimizer - conversion potential
3. seo-specialist - SEO optimization

Score each piece and identify top improvements needed.
```

### Wie geht es weiter

Sage ihnen:
- Sie haben eine vollständige Text-Bibliothek in einer Sitzung generiert
- Normalerweise wochenlange Arbeit
- **Nächstes:** `/training-de:start-2-4` - Kampagnendaten analysieren
- Daten in umsetzbare Erkenntnisse verwandeln

## Wichtige Lehrpunkte
- `/content:*`-Befehle verarbeiten alle Content-Typen
- `/sequence:*` erstellt E-Mail-Automatisierung
- Verwende Fast-Modus für Entwürfe, Good-Modus für finale Version
- `/content:cro` optimiert für Conversion
- Personalisiere nach Persona für höhere Relevanz
- Überprüfe immer mit Spezialisten-Agenten

---

KRITISCHE OUTPUT-REGELN:
- Gib NUR den übersetzten Markdown-Rohinhalt aus
- Umschließe die Ausgabe NICHT mit ```markdown Code-Blöcken
- Füge KEINE Einleitung, Erklärung oder Kommentar hinzu
- Beginne direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in eine .md-Datei gespeichert