# /training-de:start-2-2 - Content-Strategie entwickeln

## Sprach- & Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Lehre umfassende Content-Strategie-Entwicklung: Recherche, Planung, Kalender und Messung.

### Lektionsübersicht

---

**Modul 2.2: Content-Strategie entwickeln**

Eine Content-Strategie verwandelt zufällige Content-Erstellung in eine systematische Wachstumsmaschine. Lass uns eine für AgentKits aufbauen.

**Dauer:** ~40 Minuten

---

### Schritt 1: Recherche-Grundlage

Beginne mit Markt- und Zielgruppenrecherche:

```
/research:market "B2B team productivity software - remote work tools market"
```

```
/research:persona "Remote team managers at technology companies - 50-500 employees"
```

```
/research:trend "Remote work productivity - team coordination - async work"
```

### Schritt 2: SEO-Keyword-Recherche

Verwende SEO-Befehle für die Keyword-Grundlage:

```
/seo:keywords "remote team productivity"
```

```
/seo:keywords "team coordination software"
```

```
/seo:keywords "deep work for teams"
```

Gruppiere Keywords in Themen-Cluster:
- Cluster 1: Remote-Team-Produktivität
- Cluster 2: Team-Fokuszeit
- Cluster 3: Koordination ohne Meetings

### Schritt 3: Wettbewerbs-Content-Analyse

Analysiere Wettbewerber-Content:

```
/seo:competitor "rescuetime.com"
```

Identifiziere:
- Welche Themen sie abdecken
- Content-Lücken, die wir füllen können
- Keywords, für die sie ranken

### Schritt 4: Content-Kalender erstellen

Verwende den Kampagnenkalender für die Content-Planung:

```
/campaign:calendar "12 weeks - AgentKits content strategy - focus on SEO, thought leadership, lead generation - topics: remote productivity, team coordination, deep work, meeting reduction"
```

### Schritt 5: Content-Typen definieren

Plane Content nach Funnel-Phase:

**TOFU (Awareness):**
- Blog-Posts (SEO-fokussiert)
- Social-Media-Content
- Thought Leadership

**MOFU (Consideration):**
- Vergleichsleitfäden
- How-to-Content
- Fallstudien

**BOFU (Decision):**
- Produktdemos
- ROI-Rechner
- Kundenstimmen

### Schritt 6: Pillar-Content-Strategie erstellen

Plane eine Pillar-Page-Strategie:

```
/content:blog "The Complete Guide to Remote Team Productivity: How to Coordinate Focus Time Across Time Zones" "remote team productivity"
```

Cluster-Content (verlinke zum Pillar):
1. Wie man Team-Fokuszeit plant
2. Meetings reduzieren ohne Alignment zu verlieren
3. Best Practices für asynchrone Kommunikation
4. Deep Work in Remote-Teams
5. Produktivitätstracking für Teams

### Schritt 7: Content-Produktions-Workflow

Verwende die Content-Befehle für jedes Stück:

**Blog-Post-Produktion:**
```
1. /seo:keywords "topic" - Keywords recherchieren
2. /content:blog "title" "keyword" - Post erstellen
3. /seo:optimize "post" "keyword" - Optimieren
4. Review mit seo-specialist Agent
5. Review mit brand-voice-guardian Agent
```

**Social-Content-Produktion:**
```
1. /content:social "topic" "linkedin" - LinkedIn-Post
2. /content:social "topic" "twitter" - Twitter-Thread
3. Review mit conversion-optimizer Agent
```

### Schritt 8: E-Mail-Integration

Erstelle E-Mail-Sequenzen zur Pflege von Content-Konsumenten:

```
/sequence:nurture "AgentKits" "blog readers who downloaded guide"
```

### Schritt 9: Content-Distributions-Plan

Verwende Social-Befehle für die Distribution:

```
/social:schedule "linkedin,twitter" "4 weeks - AgentKits content distribution"
```

### Schritt 10: Mess-Framework

Richte Content-Analytics ein:

```
/analytics:report "content performance" "organic traffic, engagement, conversions"
```

Wichtige zu trackende Metriken:
- Organischer Traffic pro Content-Stück
- Verweildauer auf der Seite
- Conversion-Rate pro Content
- Lead-Qualität aus Content

### Wie geht es weiter

Sage ihnen:
- Sie haben eine vollständige Content-Strategie
- Von zufälligem Posten zu systematischem Wachstum
- **Weiter:** `/training-de:start-2-3` - Marketing-Copy generieren
- Copy-Produktion skalieren bei gleichbleibender Qualität

## Wichtige Lehrpunkte
- Strategie verwandelt Content von zufällig zu systematisch
- `/research:*`-Befehle bauen die Grundlage auf
- `/seo:keywords` identifiziert Chancen
- Pillar + Cluster = SEO-Kraftpaket
- Content-Produktion folgt wiederholbarem Workflow
- Messung gewährleistet Verantwortlichkeit

---

KRITISCHE OUTPUT-REGELN:
- Gib NUR den rohen übersetzten Markdown-Content aus
- Umschließe die Ausgabe NICHT mit ```markdown Code-Blöcken
- Füge KEINE Einleitung, Erklärung oder Kommentar hinzu
- Beginne direkt mit dem übersetzten Content
- Die Ausgabe wird direkt in eine .md-Datei gespeichert