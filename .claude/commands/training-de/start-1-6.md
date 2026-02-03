# /training-de:start-1-6 - Projektgedächtnis (CLAUDE.md)

## Sprach- und Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Bringe den Teilnehmern CLAUDE.md bei und wie man persistenten Projektkontext aufrechterhält.

### Lektionsübersicht

---

**Modul 1.6: Projektgedächtnis**

CLAUDE.md ist wie ein persistentes Briefing-Dokument für Claude. Jedes Mal, wenn du an diesem Projekt arbeitest, liest Claude zuerst diese Datei und wendet diese Richtlinien an.

**Dauer:** ~20 Minuten

---

### Schritt 1: Zeige die aktuelle CLAUDE.md

Lies die CLAUDE.md des Projekts:

```
Read the CLAUDE.md file in this project
```

Gehe durch jeden Abschnitt:
- Rolle & Verantwortlichkeiten
- Workflows (Marketing, Vertrieb, CRM)
- Marketing-Agenten
- Skills-Katalog
- Befehls-Kategorien
- Dokumentationsverwaltung

### Schritt 2: Erkläre, wie es funktioniert

Wenn CLAUDE.md existiert, macht Claude automatisch:
- Weiß, welche Agenten verfügbar sind
- Versteht die Workflow-Struktur
- Referenziert entsprechende Befehle
- Folgt Marketing-Regeln
- Verwendet die richtigen Skills

Du musst Claude nicht jedes Mal daran erinnern - es ist automatisch!

### Schritt 3: Wichtige CLAUDE.md-Abschnitte

Erkläre kritische Abschnitte:

**Workflows:**
```markdown
### Core Workflows
- **Marketing:** `./.claude/workflows/primary-workflow.md`
- **Sales:** `./.claude/workflows/sales-workflow.md`
- **CRM:** `./.claude/workflows/crm-workflow.md`
```

**Agenten-Zuordnung:**
```markdown
### Core Marketing Agents
- `attraction-specialist` - TOFU (SEO, landing pages)
- `lead-qualifier` - Intent detection, scoring
- `email-wizard` - Sequences, automation
...
```

**Befehls-Kategorien:**
```markdown
### Campaign Management
- `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`

### Content Creation
- `/content:blog`, `/content:social`, `/content:email`
...
```

### Schritt 4: Teste Kontextbewusstsein

Frage, ohne Brand Guidelines zu erwähnen:

```
Write a short LinkedIn post about remote team productivity
```

Weise darauf hin, wie die Ausgabe automatisch übereinstimmt mit:
- Markenstimme aus den Richtlinien
- Zielgruppen-Sprache
- Kernbotschafts-Framework

### Schritt 5: Verstehe Workflow-Referenzen

Zeige, wie Workflows referenziert werden:

```
Read .claude/workflows/primary-workflow.md
```

Erkläre:
- Marketing-Pipeline-Phasen
- Agentenverantwortlichkeiten in jeder Phase
- Qualitätskontrollpunkte und Checkpoints

### Schritt 6: Die Marketing-Regeln

Zeige die Marketing-Regeln:

```
Read .claude/workflows/marketing-rules.md
```

Erkläre wichtige Regeln:
- Token-Effizienz
- Mehrsprachige Unterstützung
- Qualitätsstandards
- Skill-Aktivierung

### Schritt 7: Vorteile des Projektkontexts

Fasse die Vorteile zusammen:
- Konsistente Markenstimme automatisch
- Korrekte Agentenauswahl
- Richtige Befehlsverwendung
- Workflow-Konformität
- Durchsetzung von Qualitätsstandards

### Schritt 8: Wartungstipps

Erkläre laufende Wartung:
- Aktualisiere bei neuen Kampagnenstarts
- Füge Erkenntnisse aus erfolgreichem Content hinzu
- Referenziere neue Dokumentation
- Halte die Agentenliste aktuell

### Was kommt als Nächstes

Sage ihnen:
- CLAUDE.md gewährleistet Konsistenz ohne Wiederholung
- **Modul 1 ist fast abgeschlossen!**
- **Nächstes:** `/training-de:start-1-7` - Navigation & Suche
- Abschließende Skills vor fortgeschrittenen Anwendungen

## Wichtige Lehrpunkte
- CLAUDE.md gibt Claude persistenten Kontext
- Beinhaltet Workflows, Agenten, Befehle, Regeln
- Claude wendet es automatisch auf alle Arbeiten an
- Workflows definieren Marketing-Prozesse
- Marketing-Regeln stellen Qualitätsstandards sicher