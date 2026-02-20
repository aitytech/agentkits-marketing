# /training-de:persona-builder - Interaktiver Persona-Builder

## Sprach- und Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Führe nicht-technische Benutzer Schritt für Schritt durch die Erstellung einer Buyer-Persona unter Verwendung des **Interactive UX Pattern**. Stelle bei jedem Schritt Fragen mit 2-4 anklickbaren Optionen. Dies ist eine praxisnahe, anfängerfreundliche Schulungssitzung.

### Willkommensnachricht

---

**Interaktiver Persona-Builder**

Ich führe dich durch die Erstellung einer detaillierten Buyer-Persona für dein Produkt oder deine Dienstleistung. Keine Marketing-Erfahrung erforderlich - beantworte einfach ein paar Fragen, indem du aus den Optionen wählst, die ich bereitstelle.

**Was du erstellen wirst:**
- Ein vollständiges Buyer-Persona-Profil
- Wichtige Messaging-Punkte für diese Persona
- Kanal-Empfehlungen

**Dauer:** ~15 Minuten

Lass uns beginnen!

---

### Schritt 1: Geschäftstyp

**WICHTIG**: Verwende das AskUserQuestion-Tool, um zu fragen:

**Frage:** "Welche Art von Produkt oder Dienstleistung vermarktest du?"

**Optionen:**
1. **SaaS / Software** - Cloud-Software, Apps, digitale Tools
2. **E-Commerce** - Physische Produkte, Online-Shop
3. **Professionelle Dienstleistungen** - Beratung, Agentur, Coaching
4. **Andere** - Benutzer kann spezifizieren

---

### Schritt 2: Zielgruppe

**WICHTIG**: Verwende das AskUserQuestion-Tool, um zu fragen:

**Frage:** "Wer ist deine primäre Zielgruppe?"

**Optionen:**
1. **B2B-Entscheidungsträger** - Manager, Direktoren, Führungskräfte in Unternehmen (Empfohlen für SaaS)
2. **B2B-Endbenutzer** - Einzelne Mitarbeiter, Teammitglieder
3. **B2C-Konsumenten** - Einzelne Verbraucher für den persönlichen Gebrauch
4. **Andere** - Benutzer kann spezifizieren

---

### Schritt 3: Unternehmensgröße (falls B2B)

Falls B2B ausgewählt wurde, verwende das AskUserQuestion-Tool:

**Frage:** "Welche Unternehmensgröße sprichst du typischerweise an?"

**Optionen:**
1. **Startups** - 1-20 Mitarbeiter, Gründer/Frühes Team
2. **KMU** - 20-200 Mitarbeiter, wachsende Teams (Empfohlen)
3. **Mittelstand** - 200-2000 Mitarbeiter, Abteilungsleiter
4. **Enterprise** - 2000+ Mitarbeiter, Beschaffung involviert

---

### Schritt 4: Primärer Schmerzpunkt

**WICHTIG**: Verwende das AskUserQuestion-Tool:

**Frage:** "Was ist das Problem Nr. 1, das dein Produkt löst?"

**Optionen:**
1. **Zeit sparen** - Automatisierung, Effizienz, Produktivität
2. **Geld sparen** - Kostensenkung, besserer ROI
3. **Risiko reduzieren** - Compliance, Sicherheit, Zuverlässigkeit
4. **Umsatz steigern** - Mehr Verkäufe, Leads, Kunden

---

### Schritt 5: Entscheidungskriterien

**WICHTIG**: Verwende das AskUserQuestion-Tool:

**Frage:** "Was ist deinen Käufern am wichtigsten bei der Auswahl einer Lösung?"

**Optionen:**
1. **Preis / Wert** - Budgetbewusst, ROI-fokussiert
2. **Funktionen / Leistungsfähigkeit** - Power-User, spezifische Anforderungen (Empfohlen)
3. **Benutzerfreundlichkeit** - Nicht-technisch, schnelle Einführung
4. **Vertrauen / Marke** - Etablierte Anbieter, Referenzen

---

### Schritt 6: Persona-Vorlage

**WICHTIG**: Verwende das AskUserQuestion-Tool:

**Frage:** "Welcher Persona-Archetyp passt am besten zu deinem idealen Kunden?"

**Optionen:**
1. **Manager Maria** - B2B-Manager, Teamleiter, ergebnisorientiert (Empfohlen für B2B)
2. **Startup Sam** - Gründer, trägt viele Hüte, wachstumsorientiert
3. **Solo Steve** - Solopreneur, budgetbewusst, DIY
4. **Individuell** - Von Grund auf neu basierend auf vorherigen Antworten erstellen

---

### Persona generieren

Basierend auf allen Antworten, generiere eine vollständige Persona mit diesem Format:

```markdown
## [Persona-Name]
**Rolle:** [Berufsbezeichnung basierend auf Antworten]
**Unternehmen:** [Typ/Größe basierend auf Antworten]

### Demografische Daten
- Alter: [Passende Spanne]
- Bildung: [Passendes Level]
- Erfahrung: [Jahre in der Rolle]
- Berichtet an: [An wen sie berichten]

### Ziele
1. [Primäres Ziel abgestimmt mit Schmerzpunkt]
2. [Sekundäres Ziel abgestimmt mit Entscheidungskriterien]
3. [Karriere-/persönliches Ziel]

### Herausforderungen
1. [Hauptschmerzpunkt aus Schritt 4]
2. [Verwandte Herausforderung]
3. [Hindernis beim Erreichen der Ziele]

### Wie [Produkt] hilft
- Löst [Schmerzpunkt 1] durch [spezifische Lösung]
- Ermöglicht [Ziel] durch [Feature]
- Reduziert [Herausforderung] mit [Vorteil]

### Einwände & Antworten
- "[Budget-Bedenken]" → [Wert-fokussierte Antwort]
- "[Implementierungszeit]" → [Antwort zur Einführungsfreundlichkeit]
- "[Risiko der Veränderung]" → [Vertrauensbildende Antwort]

### Bevorzugte Kanäle
- **Entdeckung:** [Wo sie recherchieren]
- **Content:** [Was sie konsumieren]
- **Social:** [Wo sie sich vernetzen]

### Resonantes Messaging
- Führe mit: [Primärer Vorteil]
- Betone: [Wichtigstes Unterscheidungsmerkmal]
- Beweise mit: [Art des Nachweises]

### Charakteristisches Zitat
"[Aussage, die ihre Denkweise einfängt]"
```

---

### Bestätigen & Speichern

Nach der Generierung, frage:

**Frage:** "Möchtest du diese Persona speichern?"

**Optionen:**
1. **In docs/ speichern** - Als `docs/personas/[name].md` speichern
2. **Weiter verfeinern** - Spezifische Abschnitte anpassen
3. **Weitere Persona erstellen** - Für anderes Segment von vorne beginnen
4. **Fertig** - Training abschließen

---

### Würdigung & Nächste Schritte

Gratuliere ihnen:

**Du hast deine erste Buyer-Persona erstellt!**

Diese Persona wird dir helfen:
- Zielgerichtete Marketing-Texte zu schreiben
- Die richtigen Kanäle zu wählen
- Einwände im Vertrieb zu behandeln

**Was kommt als Nächstes:**
- `/content:blog` - Content für diese Persona erstellen
- `/campaign:brief` - Eine Kampagne für diese Zielgruppe planen
- `/research:persona` - Zusätzliche Personas erstellen
- `/training-de:help` - Alle verfügbaren Trainings anzeigen

---

## Wichtige Lehrpunkte

1. **Interactive UX Pattern**: Verwende immer AskUserQuestion mit 2-4 Optionen
2. **Vorlagen helfen Anfängern**: Biete empfohlene Optionen mit (Empfohlen)-Label an
3. **Progressiv aufbauen**: Jede Antwort informiert die nächste Frage
4. **Vor Aktion bestätigen**: Frage vor dem Speichern oder wichtigen Aktionen
5. **Erfolg würdigen**: Anerkenne ihre Leistung
6. **Nächste Schritte bereitstellen**: Leite sie zu verwandten Befehlen

---

KRITISCHE AUSGABEREGELN:
- Gib NUR den reinen übersetzten Markdown-Inhalt aus
- Umschließe die Ausgabe NICHT mit ```markdown Code-Blöcken
- Füge KEINE Einleitung, Erklärung oder Kommentar hinzu
- Beginne direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in einer .md-Datei gespeichert