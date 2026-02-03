# /training-de:start-2-4 - Kampagnendaten analysieren

## Sprach- & Qualitätsstandards

**KRITISCH**: Antworten Sie in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworten Sie auf Vietnamesisch. Wenn Spanisch, antworten Sie auf Spanisch.

---

## Anweisungen für Claude

Lehren Sie Datenanalyse, Erkenntnisgewinnung und Executive Reporting mithilfe von Analytics-Befehlen.

### Lektionsübersicht

---

**Modul 2.4: Kampagnendaten analysieren**

Datenanalyse ist oft zeitaufwändig. Lassen Sie uns meistern, wie man Daten in umsetzbare Erkenntnisse und überzeugende Berichte verwandelt.

**Dauer:** ~35 Minuten

---

### Schritt 1: ROI-Analyse

Verwenden Sie Analytics-Befehle:

```
/analytics:roi "Q1 campaign - $50K spend across LinkedIn, Google, Email"
```

Überprüfen Sie die ROI-Berechnung:
- Gesamtausgaben nach Kanal
- Zugeordneter Umsatz
- ROAS nach Kanal
- Kosten pro Akquisition

### Schritt 2: Trichteranalyse

Analysieren Sie den Conversion-Trichter:

```
/analytics:funnel "trial signup - visitor to trial to paid conversion"
```

Überprüfen Sie Trichter-Metriken:
- Traffic nach Quelle
- Conversion-Raten in jeder Phase
- Abbruchpunkte
- Optimierungsmöglichkeiten

### Schritt 3: Performance-Reporting

Erstellen Sie Performance-Berichte:

**Wochenbericht:**
```
/report:weekly "AgentKits" "current week"
```

**Monatsbericht:**
```
/report:monthly "AgentKits" "current month"
```

### Schritt 4: Kanal-Performance

Analysieren Sie nach Kanal:

```
/analytics:report "channel performance" "LinkedIn, Google, Email, Organic"
```

Erstellen Sie einen Kanalvergleich:
- Traffic-Beitrag
- Lead-Qualität
- Conversion-Raten
- Kosteneffizienz

### Schritt 5: Content-Performance

Analysieren Sie Content-Effektivität:

```
/analytics:report "content performance" "blog posts, landing pages, email sequences"
```

Wichtige Metriken:
- Traffic nach Content-Element
- Engagement (Zeit, Scroll, Shares)
- Conversion-Rate
- Lead-Qualität

### Schritt 6: Lead-Qualitätsanalyse

Verwenden Sie Lead-Scoring zur Analyse:

```
/crm:score "analyze lead quality by source and campaign"
```

Überprüfen Sie:
- MQL-Rate nach Quelle
- SQL-Conversion nach Kampagne
- Durchschnittliche Lead-Score-Trends

### Schritt 7: Executive Summary

Erstellen Sie eine executive-fertige Zusammenfassung:

```
Create an executive summary of Q1 marketing performance:

STRUCTURE:
1. Headline metrics (vs targets)
2. Top 3 wins with data
3. Top 3 challenges with impact
4. Channel performance snapshot (table)
5. Key learnings (3 insights)
6. Q2 recommendations (prioritized)
7. Budget request with justification

Keep it to ONE PAGE maximum.
```

### Schritt 8: Daten-zu-Aktion-Framework

Lehren Sie das Erkenntnisframework:

```
For each finding, document:

1. OBSERVATION: What does the data show?
2. INSIGHT: Why is this happening?
3. IMPLICATION: What does it mean?
4. RECOMMENDATION: What should we do?
5. EXPECTED IMPACT: What will change?
```

### Schritt 9: Operative Checklisten

Verwenden Sie Analytics-Checklisten:

```
/checklist:analytics-monthly "current month" "AgentKits"
```

Überprüfen Sie monatliche Analytics-Aufgaben:
- Datenqualitätsprüfungen
- Plattformverifizierung
- Reporting-Genauigkeit
- Attributionsvalidierung

### Schritt 10: Reporting-Vorlagen

Erklären Sie wiederverwendbares Reporting:

```
Weekly Report Workflow:
1. /analytics:roi "campaign" - Calculate ROI
2. /analytics:funnel "funnel" - Analyze funnel
3. /report:weekly "client" "week" - Generate report

Monthly Report Workflow:
1. /analytics:report "all channels" - Full analysis
2. /crm:score "lead quality" - Lead analysis
3. /report:monthly "client" "month" - Generate report
```

### Wie geht es weiter

Sagen Sie ihnen:
- Sie können jetzt Daten in Entscheidungen verwandeln
- Berichte, die Führungskräfte tatsächlich lesen
- **Nächstes:** `/training-de:start-2-5` - Wettbewerbsanalyse
- Wettbewerber recherchieren und Vorteile finden

## Wichtige Lehrpunkte
- `/analytics:*`-Befehle analysieren Performance
- `/report:*`-Befehle generieren Berichte
- ROI- und Trichteranalyse sind grundlegend
- Executive Summaries müssen prägnant sein
- Daten-zu-Aktion-Framework gewährleistet Verantwortlichkeit

---

KRITISCHE AUSGABE-REGELN:
- Geben Sie NUR den rohen übersetzten Markdown-Inhalt aus
- Umschließen Sie die Ausgabe NICHT mit ```markdown Code-Fences
- Fügen Sie KEINE Präambel, Erklärung oder Kommentar hinzu
- Beginnen Sie direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in eine .md-Datei gespeichert