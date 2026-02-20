# /training-de:start-0-1 - Installation & Einrichtung

## Sprach- & Qualitätsstandards

**KRITISCH**: Antworte in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworte auf Vietnamesisch. Wenn Spanisch, antworte auf Spanisch.

---

## Anweisungen für Claude

Führe den Teilnehmer durch die Überprüfung ihrer Claude Code-Installation und der Marketing-Kit-Einrichtung.

### Lektionsübersicht

Sage etwas wie:

---

**Modul 0.1: Installation & Einrichtung**

Bevor wir in die Marketing-Workflows eintauchen, stellen wir sicher, dass alles korrekt eingerichtet ist.

---

### Schritt 1: Claude Code überprüfen

Bitte sie zu bestätigen:
- Sie führen dies innerhalb von Claude Code aus (nicht im Web-Chat)
- Sie haben ein Claude Pro- oder Max-Abonnement

Falls sie unsicher sind, erkläre:
- Claude Code ist die Terminal-/CLI-Version
- Es kann Dateien direkt lesen, schreiben und bearbeiten
- Es unterscheidet sich vom claude.ai Web-Chat

### Schritt 2: Marketing-Kit-Dateien überprüfen

Führe diese Prüfungen MIT dem Teilnehmer durch (führe sie tatsächlich aus):

```
Show me the contents of this directory
```

Sie sollten sehen:
- `.claude/`-Ordner mit Agenten, Befehlen, Skills, Workflows
- `docs/`-Ordner mit Dokumentation
- `CLAUDE.md`-Datei (das Projekt-Gedächtnis)
- `README.md`-Datei

### Schritt 3: Systemstruktur erkunden

Zeige ihnen die Struktur des Marketing-Kits:

```
List all folders in .claude/
```

Erkläre jede Komponente:
- `agents/` - 18 spezialisierte Marketing-Agenten
- `commands/` - 76 Slash-Befehle, nach Funktion organisiert
- `skills/` - Marketing-Domänenwissen
- `workflows/` - Kern-Marketing-, Vertriebs- und CRM-Workflows

### Schritt 4: Verfügbare Befehle erkunden

Zeige ihnen die Befehlskategorien:

```
List all folders in .claude/commands/
```

Erkläre wichtige Befehlsgruppen:
- `campaign/` - `/campaign:plan`, `/campaign:brief`, `/campaign:analyze`
- `content/` - `/content:blog`, `/content:social`, `/content:email`, `/content:landing`
- `seo/` - `/seo:keywords`, `/seo:audit`, `/seo:optimize`
- `analytics/` - `/analytics:roi`, `/analytics:funnel`, `/analytics:report`
- `sales/` - `/sales:pitch`, `/sales:outreach`, `/sales:battlecard`

### Schritt 5: Deinen ersten Befehl testen

Lass sie einen echten Befehl ausprobieren:

```
/brainstorm "What are the best marketing channels for a B2B SaaS product?"
```

Feiere ihre erste Befehlsausführung!

### Schritt 6: Dokumentation durchsehen

Zeige ihnen wichtige Dokumente:

```
Read docs/usage-guide.md (first 50 lines)
```

Erkläre:
- `docs/usage-guide.md` - Vollständige Systemreferenz
- `docs/brand-guidelines.md` - Markenstandard-Vorlage
- `docs/content-style-guide.md` - Schreibstandards
- `docs/campaign-playbooks.md` - Kampagnen-Vorlagen
- `docs/channel-strategies.md` - Plattform-Taktiken
- `docs/analytics-setup.md` - Tracking-Konfiguration

### Was kommt als Nächstes

Sage ihnen:
- **Nächste Lektion:** `/training-de:start-0-2` - Deine erste Marketing-Aufgabe
- Sie haben gerade ihre Einrichtung überprüft und ihren ersten Befehl ausgeführt!
- So funktioniert der Rest des Kurses genau

## Wichtige Lehrinhalte
- Claude Code arbeitet direkt mit Dateien
- Das Marketing-Kit hat 18 Agenten, 76 Befehle und umfassende Dokumentation
- Jede Lektion beinhaltet praktische Befehlsausführung
- Überprüfe, dass die Dinge tatsächlich funktioniert haben (Dateien zurücklesen)

---

KRITISCHE AUSGABEREGELN:
- Gib NUR den übersetzten Markdown-Inhalt aus
- Umschließe die Ausgabe NICHT mit ```markdown Code-Zäunen
- Füge KEINE Einleitung, Erklärung oder Kommentar hinzu
- Beginne direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in eine .md-Datei gespeichert