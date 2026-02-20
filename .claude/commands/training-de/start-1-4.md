# /training-de:start-1-4 - Verwendung von Agenten für Marketing

## Sprach- und Qualitätsstandards

**KRITISCH**: Antworten Sie in der gleichen Sprache, die der Benutzer verwendet. Wenn Vietnamesisch, antworten Sie auf Vietnamesisch. Wenn Spanisch, antworten Sie auf Spanisch.

---

## Anweisungen für Claude

Vermitteln Sie das Konzept von Agenten - spezialisierte KI-Teammitglieder, die verschiedene Marketing-Funktionen übernehmen.

### Lektionsübersicht

---

**Modul 1.4: Verwendung von Agenten für Marketing**

Das Marketing-Kit verfügt über 18 spezialisierte Agenten. Betrachten Sie sie als KI-Teammitglieder, die mit Fachwissen an spezifischen Marketing-Aufgaben arbeiten können.

**Dauer:** ~35 Minuten

---

### Schritt 1: Das Agentensystem erklären

Das Marketing-Kit verfügt über nach Funktion organisierte Agenten:

**Kern-Marketing-Agenten (6):**
| Agent | Fokus | Anwendungsfälle |
|-------|-------|-----------------|
| `attraction-specialist` | TOFU, Lead-Generierung | SEO, Landing Pages, Wettbewerbs-Intelligence |
| `lead-qualifier` | Absichtserkennung | Lead-Scoring, Verhaltensanalyse |
| `email-wizard` | E-Mail-Marketing | Sequenzen, Automatisierung, Optimierung |
| `sales-enabler` | Vertriebsunterstützung | Pitches, Fallstudien, Battlecards |
| `continuity-specialist` | Kundenbindung | Abwanderungserkennung, Reaktivierung |
| `upsell-maximizer` | Umsatzausweitung | Cross-Selling, Upselling, Feature-Adoption |

**Unterstützende Agenten (6):**
| Agent | Fokus | Anwendungsfälle |
|-------|-------|-----------------|
| `researcher` | Markt-Intelligence | Recherche, Wettbewerbsanalyse |
| `brainstormer` | Kreative Ideenfindung | Kampagnenkonzepte, Messaging-Ansätze |
| `planner` | Strategische Planung | Kampagnenpläne, Redaktionspläne |
| `project-manager` | Koordination | Status-Tracking, Kampagnenüberwachung |
| `copywriter` | Content-Erstellung | Copy, Messaging, Kreatives |
| `docs-manager` | Dokumentation | Markenrichtlinien, Styleguides |

**Reviewer-Agenten (6):**
| Agent | Perspektive | Prüft auf |
|-------|-------------|-----------|
| `brand-voice-guardian` | Markenkonsistenz | Stimme, Tonalität, Messaging |
| `conversion-optimizer` | CRO-Experte | Conversion, Überzeugung |
| `seo-specialist` | Suchoptimierung | Keywords, technisches SEO |
| `manager-maria` | Marketing-Managerin (38 Jahre, B2B) | Strategie, Team-Fit |
| `solo-steve` | Solopreneur (32 Jahre) | Zeit, Budget, DIY |
| `startup-sam` | Startup-Gründer (28 Jahre) | Wachstum, Viralität, Geschwindigkeit |

### Schritt 2: Agentenübung - Multi-Perspektiven-Review

Erstellen Sie Inhalte und prüfen Sie diese aus mehreren Perspektiven:

```
Review the AgentKits campaign brief from three agent perspectives:

1. As the `brand-voice-guardian` - evaluate brand consistency and messaging
2. As the `conversion-optimizer` - assess CTAs, persuasion, and conversion potential
3. As `manager-maria` - would this work for a B2B marketing team to execute?

For each perspective, provide:
- What's working well
- Areas for improvement
- Specific recommendations
```

Erklären Sie, was gerade passiert ist - drei spezialisierte Reviews in einem Befehl.

### Schritt 3: Lead-Qualifizierung verwenden

Demonstrieren Sie den lead-qualifier Agent über Befehle:

```
/leads:score "B2B SaaS company - technology industry"
```

```
/leads:qualify "AgentKits productivity tool"
```

Zeigen Sie, wie lead-qualifier erstellt:
- Demografische Scoring-Kriterien
- Verhaltensbezogene Scoring-Signale
- MQL/SQL-Schwellenwerte

### Schritt 4: E-Mail Wizard verwenden

Demonstrieren Sie den email-wizard Agent:

```
/sequence:welcome "AgentKits" "trial users"
```

```
/sequence:nurture "AgentKits" "leads who downloaded our guide"
```

### Schritt 5: Sales Enabler verwenden

Demonstrieren Sie den sales-enabler Agent:

```
/sales:pitch "enterprise company considering AgentKits" "team coordination"
```

```
/sales:battlecard "RescueTime"
```

### Schritt 6: Real-World-Szenario - Schnelle Reaktion

```
SCENARIO: A competitor just announced a "team focus" feature. Use agents to respond:

1. Use `researcher` to analyze their announcement
2. Use `brainstormer` to develop counter-positioning
3. Use `copywriter` to create response content
4. Use `email-wizard` to draft customer communication
```

### Schritt 7: Best Practices für Agenten

Teilen Sie diese Tipps:
- Seien Sie spezifisch bei den Aufgabenzielen
- Verweisen Sie auf Markenrichtlinien und Personas
- Definieren Sie Outputs klar (Format, Länge)
- Nutzen Sie spezialisierte Agenten für spezialisierte Aufgaben
- Kombinieren Sie Agenten für komplexe Projekte

### Wie geht es weiter

Teilen Sie ihnen mit:
- Sie verstehen jetzt das 18-Agenten-System
- **Nächster Schritt:** `/training-de:start-1-5` - Benutzerdefinierte Marketing-Sub-Agenten
- Sie werden über Persona-Reviewer lernen und wie man gezieltes Feedback erhält

## Wichtige Lehrpunkte
- 18 Agenten organisiert: Kern (6), Unterstützend (6), Reviewer (6)
- Kern-Agenten sind Funnel-Phasen zugeordnet
- Reviewer-Agenten bieten Multi-Perspektiven-Feedback
- Befehle rufen spezifische Agenten-Fähigkeiten auf
- Kombinieren Sie Agenten für komplexe Projekte

---

KRITISCHE OUTPUT-REGELN:
- Geben Sie NUR den übersetzten Markdown-Inhalt im Rohformat aus
- Umschließen Sie die Ausgabe NICHT mit ```markdown Code-Fences
- Fügen Sie KEINE Einleitung, Erklärung oder Kommentar hinzu
- Beginnen Sie direkt mit dem übersetzten Inhalt
- Die Ausgabe wird direkt in einer .md-Datei gespeichert