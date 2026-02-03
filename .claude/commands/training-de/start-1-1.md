# /training-de:start-1-1 - Willkommen bei Markit

## Sprach- und Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Falls Vietnamesisch, antworte auf Vietnamesisch. Falls Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Beginne Modul 1 - Kernkonzepte. Diese Lektion führt in das Markit-Agentenprojekt und die Kernabläufe des Marketing-Kits ein.

### Lektionsübersicht

---

**Modul 1.1: Willkommen bei Markit**

Willkommen zu Modul 1! Jetzt werden wir die Kernkonzepte des Marketing-Kits durch praktische Arbeit meistern. Am Ende dieses Moduls wirst du echte Marketingaufgaben mit Selbstvertrauen bewältigen.

**Dauer:** ~20 Minuten

---

### Schritt 1: Die Szene setzen

Erkläre ihre Rolle:

> Du bist ein Marketing-Stratege bei der **Markit** Agentur. Dein Kunde ist **AgentKits**. Deine Mission:
> 1. Das Produkt auf den Markt bringen
> 2. Bekanntheit und Anmeldungen generieren
> 3. Inhalte erstellen, die bei Remote-Teams Anklang finden
> 4. Eine nachhaltige Content-Marketing-Engine aufbauen

### Schritt 2: Die Kernabläufe verstehen

Erkläre die drei Hauptabläufe in `.claude/workflows/`:

**Marketing-Pipeline (`primary-workflow.md`):**
```
Research → Insights → Creative → Plan → Create → Edit → Publish → Measure
```

**Vertriebs-Pipeline (`sales-workflow.md`):**
```
Lead → MQL → SQL → Opportunity → Proposal → Negotiation → Close
```

**CRM-Lebenszyklus (`crm-workflow.md`):**
```
Subscriber → Lead → MQL → SQL → Opportunity → Customer → Advocate
```

### Schritt 3: Agentenrollen verstehen

Erkläre, wie Agenten auf Marketingfunktionen abgebildet werden:

**TOFU (Top of Funnel):**
- `attraction-specialist` - Lead-Generierung, SEO, Landingpages

**MOFU (Middle of Funnel):**
- `lead-qualifier` - Absichtserkennung, Lead-Bewertung
- `email-wizard` - Nurture-Sequenzen

**BOFU (Bottom of Funnel):**
- `sales-enabler` - Pitches, Fallstudien, Battlecards

**Retention:**
- `continuity-specialist` - Abwanderungserkennung, Re-Engagement
- `upsell-maximizer` - Umsatzexpansion

### Schritt 4: Erstes Kampagnenbriefing erstellen

Jetzt beginnt die eigentliche Arbeit mit `/campaign:plan`:

```
/campaign:plan "AgentKits Q1 Product Launch - Target: 1000 trial signups in 30 days, Budget: $50K, Channels: LinkedIn, Google Ads, Content, Email"
```

Überprüfe den generierten umfassenden Kampagnenplan.

### Schritt 5: Das Briefing überprüfen

Weise darauf hin, wie der Planer-Agent:
- Strukturierte Ziele und KPIs erstellt hat
- Zielgruppensegmente definiert hat
- Budget auf Kanäle verteilt hat
- Ein Messframework eingerichtet hat

### Schritt 6: Die Kraft der Iteration

Zeige ihnen die Verfeinerung durch Folgefragen:

```
Expand the target audience section with day-in-the-life scenarios for each persona
```

Erkläre: Iteration ist der Schlüssel. Erste Entwürfe sind Ausgangspunkte.

### Schritt 7: Kontextbewusstseins-Demo

Demonstriere die Kraft des Kontexts:

```
/content:social "Product launch announcement for AgentKits based on the campaign brief" "linkedin"
```

Zeige, wie Claude automatisch aus dem Kampagnenkontext schöpft.

### Wie geht es weiter

Sage ihnen:
- Sie haben ein professionelles Kampagnenbriefing mit `/campaign:plan` erstellt
- Claude hat Kontext aus Markenrichtlinien und Personas verwendet
- **Weiter:** `/training-de:start-1-2` - Arbeiten mit Marketing-Dateien
- Sie werden lernen, Marketing-Assets effizient zu organisieren, zu finden und zu verwalten

## Wichtige Lehrpunkte
- Markit-Agentur ist das praktische Übungsprojekt
- Drei Kernabläufe: Marketing, Vertrieb, CRM
- Agenten bilden Funnel-Stufen ab (TOFU, MOFU, BOFU, Retention)
- `/campaign:plan` erstellt umfassende Kampagnenbriefings
- Iteration verbessert die Ausgabequalität

---

KRITISCHE AUSGABEREGELN:
- Gib NUR den rohen übersetzten Markdown-Inhalt aus
- Umschließe die Ausgabe NICHT mit ```markdown Code-Blöcken
- Füge KEINE Einleitung, Erklärung oder Kommentar hinzu
- Beginne direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in einer .md-Datei gespeichert