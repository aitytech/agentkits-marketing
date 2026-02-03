# /training-de:start-2-1 - Einen Kampagnen-Brief erstellen

## Sprach- und Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Beginne Modul 2 - Fortgeschrittene Anwendungen. Diese Lektion lehrt die umfassende Erstellung von Kampagnen-Briefs unter Verwendung der Kampagnenbefehle.

### Lektionsübersicht

---

**Modul 2.1: Einen Kampagnen-Brief erstellen**

Willkommen zu Modul 2! Jetzt wenden wir alles an, was Sie gelernt haben, auf echte Marketing-Workflows. Kampagnen-Briefs sind die Grundlage erfolgreicher Umsetzung.

**Dauer:** ~45 Minuten

---

### Schritt 1: Kollaborativen Ansatz erklären

> Claude ist Ihr strategischer Partner, nicht ein Ersatz für Ihre Marketing-Expertise. Sie bringen Einblicke, Marktkenntnisse und strategisches Denken ein. Claude hilft dabei, diese Ideen zu artikulieren und zu strukturieren.

### Schritt 2: Strategischen Input einholen

Fragen Sie den Teilnehmer nach seinem strategischen Denken:

```
Lassen Sie uns einen umfassenden Kampagnen-Brief für AgentKits's Q2-Wachstumskampagne erstellen.

Erzählen Sie mir zunächst Ihr strategisches Denken:
- Was ist das Hauptziel? (z.B. 2000 Test-Anmeldungen)
- Wie hoch ist das Budget?
- Was ist der Zeitrahmen?
- Gibt es bestimmte Kanäle, auf die man sich konzentrieren sollte?
- Was ist die zentrale Botschaft in diesem Quartal?
```

Warten Sie auf deren Eingabe und fahren Sie dann fort.

### Schritt 3: Kampagnenplanungs-Befehl verwenden

Verwenden Sie den Kampagnenplanungs-Befehl:

```
/campaign:plan "AgentKits Q2 Growth - Goal: 2000 trial signups, Budget: $75K, Timeframe: 8 weeks, Channels: LinkedIn Ads, Content Marketing, Email Nurture, Key message: Team-wide focus time coordination"
```

Überprüfen Sie den umfassenden Kampagnenplan, der vom `planner`-Agent generiert wurde.

### Schritt 4: Creative Brief generieren

Verwenden Sie nun den Creative-Brief-Befehl:

```
/campaign:brief "AgentKits Q2 Growth Campaign"
```

Erklären Sie, was der Creative Brief beinhaltet:
- Single-minded Proposition
- Zielgruppen-Insights
- Tonalität und Art
- Deliverables-Liste
- Creative Mandatories

### Schritt 5: Multi-Perspektiven-Feedback einholen

Verwenden Sie Reviewer-Agents:

```
Review the Q2 campaign plan from three perspectives:

1. `manager-maria` (Marketing Manager) - Is this executable by a marketing team?
2. `conversion-optimizer` - Will this campaign structure drive conversions?
3. `brand-voice-guardian` - Is the messaging on-brand?

Provide specific feedback and recommendations.
```

### Schritt 6: Content-Kalender erstellen

Verwenden Sie den Kalender-Befehl:

```
/campaign:calendar "8 weeks - AgentKits Q2 Growth - content marketing, social media, email nurture focused on team productivity"
```

### Schritt 7: Unterstützende Dokumente erstellen

Generieren Sie zusätzliche Kampagnen-Assets:

**Lead-Scoring-Modell:**
```
/leads:score "B2B SaaS - technology companies - team productivity"
```

**Willkommens-Sequenz:**
```
/sequence:welcome "AgentKits" "trial signups from Q2 campaign"
```

**Nurture-Sequenz:**
```
/sequence:nurture "AgentKits" "engaged leads who haven't converted"
```

### Schritt 8: Wettbewerbsvorbereitung

Bereiten Sie Wettbewerbsmaterialien vor:

```
/sales:battlecard "RescueTime - main competitor for productivity tools"
```

```
/competitor:deep "Freedom app - focus and productivity blocking"
```

### Schritt 9: Messplan erstellen

Richten Sie Analytics ein:

```
/analytics:funnel "trial signup funnel - awareness to trial to paid"
```

### Schritt 10: Als Vorlage speichern

Erklären Sie, dass dieser Workflow für jede Kampagne wiederholt werden kann:

```
Campaign Brief Workflow:
1. /campaign:plan - Strategic plan
2. /campaign:brief - Creative brief
3. /campaign:calendar - Content calendar
4. /leads:score - Lead qualification
5. /sequence:welcome - New lead nurture
6. /sequence:nurture - Ongoing nurture
7. /sales:battlecard - Competitive prep
8. /analytics:funnel - Measurement setup
```

### Was kommt als Nächstes

Teilen Sie ihnen mit:
- Sie haben in weniger als einer Stunde einen professionellen Kampagnen-Brief erstellt
- Normalerweise dauert dies Tage mit mehreren Meetings
- **Als Nächstes:** `/training-de:start-2-2` - Content-Strategie entwickeln
- Sie werden umfassende Content-Pläne erstellen

## Wichtige Lehrpunkte
- Kampagnen-Briefs sind kollaborativ
- Verwenden Sie `/campaign:plan` für strategische Planung
- Verwenden Sie `/campaign:brief` für kreative Ausrichtung
- Verwenden Sie `/campaign:calendar` für Content-Planung
- Verwenden Sie Reviewer-Agents für Feedback
- Erstellen Sie unterstützende Assets (Lead-Scoring, Sequenzen, Battlecards)

---

KRITISCHE OUTPUT-REGELN:
- Geben Sie NUR den rohen übersetzten Markdown-Inhalt aus
- Verwenden Sie KEINE ```markdown Code-Blöcke als Umschließung
- Fügen Sie KEINE Präambel, Erklärung oder Kommentare hinzu
- Beginnen Sie direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in einer .md-Datei gespeichert