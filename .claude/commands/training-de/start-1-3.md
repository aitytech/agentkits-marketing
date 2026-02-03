# /training-de:start-1-3 - Erste Marketing-Aufgaben

## Sprach- und Qualitätsstandards

**KRITISCH**: Antworten Sie in derselben Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworten Sie auf Vietnamesisch. Wenn Spanisch, antworten Sie auf Spanisch.

---

## Anweisungen für Claude

Führen Sie die Studenten durch echte Marketing-Aufgaben: Mehrkanalige Texterstellung, Wettbewerbsanalyse und Inhaltsplanung unter Verwendung tatsächlicher Systembefehle.

### Lektionsübersicht

---

**Modul 1.3: Erste Marketing-Aufgaben**

Jetzt machen wir echte Marketing-Arbeit. Sie werden drei gängige Aufgaben erledigen, die jeder Marketer regelmäßig durchführt.

**Dauer:** ~30 Minuten

---

### Aufgabe 1: Mehrkanalige Texterstellung

Generieren Sie Texte für mehrere Kanäle mit Content-Befehlen:

**LinkedIn-Beitrag:**
```
/content:social "AgentKits launch announcement - team productivity coordination for remote teams" "linkedin"
```

**Blog-Beitrag:**
```
/content:blog "How Remote Teams Can Coordinate Focus Time Without Endless Meetings" "remote team coordination"
```

**E-Mail:**
```
/content:email "product announcement" "existing subscribers"
```

Überprüfen Sie die Ausgaben gemeinsam. Zeigen Sie Iteration:

```
Make the LinkedIn post more educational - focus on the problem of coordinating deep work time
```

### Aufgabe 2: Wettbewerbsanalyse

Verwenden Sie den Wettbewerbsanalyse-Befehl:

```
/competitor:deep "RescueTime - personal time tracking and productivity software"
```

Erklären Sie, was der `researcher`-Agent analysiert:
- Zielgruppe
- Hauptfunktionen und Positionierung
- Preismodell
- Stärken und Schwächen
- Marktchancen

Stellen Sie eine Folgefrage:
```
Based on this analysis, what's AgentKits's biggest competitive advantage?
```

### Aufgabe 3: Inhaltskalender

Verwenden Sie den Kampagnenkalender-Befehl:

```
/campaign:calendar "4 weeks - AgentKits product launch - focus on remote work productivity, team collaboration, deep work"
```

Überprüfen Sie den generierten Kalender:
- Blog-Beitragsthemen mit SEO-Keywords
- Social-Media-Themen nach Plattform
- E-Mail-Newsletter-Zeitplan
- Inhaltsziele für jedes Stück

### Schritt 4: Ein Stück erweitern

Nehmen Sie ein Thema und erweitern Sie es mit Content-Befehlen:

```
/content:blog "The Complete Guide to Team Focus Time: How Remote Teams Can Coordinate Deep Work" "team focus time"
```

### Schritt 5: SEO-Optimierung

Verwenden Sie SEO-Befehle zur Optimierung:

```
/seo:keywords "remote team productivity"
```

Dann:
```
/seo:optimize "the blog post we just created" "team focus time"
```

### Schritt 6: Überprüfung mit Spezialisten

Verwenden Sie Reviewer-Agenten (erklären Sie, dass diese später im Detail behandelt werden):

```
Review the blog post from three perspectives:
1. Brand Voice Guardian - does it match our voice?
2. SEO Specialist - is it optimized for search?
3. Conversion Optimizer - will it drive action?
```

### Feiern

Weisen Sie darauf hin, was sie gerade erreicht haben:
- Mehrkanalige Texterstellung mit `/content:*`-Befehlen
- Wettbewerbsanalyse mit `/competitor:deep`
- Inhaltskalender mit `/campaign:calendar`
- SEO-Keyword-Recherche mit `/seo:keywords`
- Vollständiger Blog-Beitrag mit SEO-Optimierung

### Was kommt als Nächstes

Sagen Sie ihnen:
- **Nächste:** `/training-de:start-1-4` - Agenten für Marketing nutzen
- Sie lernen die 18 spezialisierten Agenten kennen und wie man sie einsetzt

## Wichtige Lehrpunkte
- Echte Befehle bearbeiten echte Marketing-Aufgaben
- `/content:*`-Befehle erstellen plattformspezifische Inhalte
- `/competitor:deep` liefert Wettbewerbsinformationen
- `/campaign:calendar` erstellt Inhaltskalender
- `/seo:*`-Befehle kümmern sich um Suchoptimierung
- Stellen Sie immer Kontext bereit (Marke, Zielgruppe, Ziele)

---

KRITISCH OUTPUT RULES:
- Output ONLY the raw translated markdown content
- Do NOT wrap output in ```markdown code fences
- Do NOT add any preamble, explanation, or commentary
- Start directly with the translated content
- The output will be saved directly to a .md file