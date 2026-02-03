# /training-de:start-1-2 - Arbeiten mit Marketing-Dateien

## Sprach- & Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Vermittle Dateiorganisation, Befehlsverwendung und Dokumentationsreferenz für Marketing-Projekte.

### Lektionsübersicht

---

**Modul 1.2: Arbeiten mit Marketing-Dateien**

Als Marketer arbeitest du mit vielen Asset-Typen: Kampagnen-Briefings, Content-Entwürfen, Recherche-Dokumenten, Analyse-Berichten. Lass uns meistern, wie man sie effizient organisiert und verwaltet.

**Dauer:** ~25 Minuten

---

### Schritt 1: Dokumentationsstruktur überprüfen

Zeige ihnen den docs-Ordner:

```
List all files in docs/
```

Erkläre jede Dokumentationsdatei:
- `brand-guidelines.md` - Markenstandards-Vorlage
- `content-style-guide.md` - Schreibstandards, CTAs, Formatierung
- `campaign-playbooks.md` - Bewährte Kampagnen-Vorlagen
- `channel-strategies.md` - Plattformspezifische Taktiken
- `analytics-setup.md` - Tracking und Attribution
- `usage-guide.md` - Vollständige Systemreferenz

### Schritt 2: Kampagnen-Playbooks erkunden

Lies die Kampagnen-Playbooks:

```
Read docs/campaign-playbooks.md
```

Erkläre die Playbook-Typen:
- Produkteinführungs-Playbook
- Lead-Generierungs-Playbook
- Markenbekanntheit-Playbook
- Kundenbindung-Playbook
- Event-Promotion-Playbook

### Schritt 3: Content-Befehle üben

Führe sie durch Content-Erstellungsbefehle:

**Blog-Post:**
```
/content:blog "5 Ways Remote Teams Can Improve Coordination" "remote team productivity"
```

**Social Content:**
```
/content:social "Team coordination tips for remote managers" "linkedin"
```

**E-Mail-Copy:**
```
/content:email "welcome" "trial users for AgentKits"
```

### Schritt 4: Suchbefehle üben

Vermittle Suchtechniken mit grep/find oder durch Fragen an Claude:

```
Find all files that mention "lead scoring"
```

```
Search for files containing "conversion rate"
```

### Schritt 5: Batch-Content-Erstellung

Demonstriere die Erstellung mehrerer Assets auf einmal:

```
Create multi-channel content for AgentKits launch:
1. LinkedIn announcement post
2. Twitter thread (5 tweets)
3. Email subject lines (5 A/B variations)
4. Google Ads headlines (5 variations, max 30 chars)
```

### Schritt 6: Querverweise mit Style Guide

Zeige, wie man den Content-Style-Guide verwendet:

```
Read docs/content-style-guide.md
```

Weise hin auf:
- Überschriften-Formeln (4-U Framework)
- CTA-Muster
- Lesbarkeitsstandards
- SEO-Schreibrichtlinien

### Schritt 7: Schnellreferenz-Befehle

Teile wesentliche Befehlsmuster:

**Kampagnen-Befehle:**
- `/campaign:plan` - Kampagnenplan erstellen
- `/campaign:brief` - Kreativ-Briefing generieren
- `/campaign:analyze` - Performance analysieren
- `/campaign:calendar` - Content-Kalender

**Content-Befehle:**
- `/content:blog` - SEO-Blog-Post
- `/content:social` - Plattformspezifisches Social Media
- `/content:email` - E-Mail-Copy
- `/content:landing` - Landing-Page-Copy
- `/content:ads` - Anzeigen-Copy

### Wie es weitergeht

Sage ihnen:
- Sie wissen jetzt, wie man in der Marketing-Kit-Dokumentation navigiert
- Befehle sind nach Marketing-Funktion organisiert
- **Als Nächstes:** `/training-de:start-1-3` - Erste Marketing-Aufgaben (Content-Generierung, Analyse)

## Zentrale Lehrpunkte
- Gute Dokumentationsorganisation macht alles schneller
- Sechs zentrale Docs decken Marke, Content, Kampagnen, Kanäle, Analytics, Verwendung ab
- Befehle sind nach Funktion organisiert (campaign, content, seo, etc.)
- Querverweise zu Docs für Konsistenz
- Batch-Operationen sparen enorm viel Zeit

---

CRITICAL OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file