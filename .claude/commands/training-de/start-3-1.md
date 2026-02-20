---
description: /training-de:start-3-1 - CRO Grundlagen
argument-hint:
---

# Modul 3, Lektion 1: CRO Grundlagen

## Willkommen bei der Conversion Rate Optimization

In diesem Modul werden Sie die neuen CRO (Conversion Rate Optimization) Fähigkeiten meistern, die zu AgentKits Marketing hinzugefügt wurden. Diese Skills helfen Ihnen, Conversion-Raten über alle Marketing-Assets hinweg systematisch zu verbessern.

## Lernziele

Am Ende dieser Lektion werden Sie:
1. Die 6 CRO-Skill-Kategorien verstehen
2. Wissen, wann Sie jeden CRO-Befehl verwenden
3. Psychologische Prinzipien auf Conversions anwenden
4. Ihr erstes CRO-Audit erstellen

---

## Die CRO Skills Suite

AgentKits Marketing umfasst 7 spezialisierte CRO-Skills:

| Skill | Verwendung für | Befehl |
|-------|----------------|--------|
| `page-cro` | Landing Pages, Homepages, Preisseiten | `/cro:page` |
| `form-cro` | Lead-Erfassung, Kontakt-, Demo-Formulare | `/cro:form` |
| `popup-cro` | Modals, Overlays, Exit Intent | `/cro:popup` |
| `signup-flow-cro` | Registrierung, Trial-Anmeldungen | `/cro:signup` |
| `onboarding-cro` | Aktivierung nach der Anmeldung | `/cro:onboarding` |
| `paywall-upgrade-cro` | In-App-Paywalls, Upgrades | `/cro:paywall` |
| `ab-test-setup` | Experiment-Design | `/test:ab-setup` |

---

## CRO Framework

Jede CRO-Analyse folgt dieser Hierarchie:

### 1. Wertversprechen (Höchste Auswirkung)
- Können Besucher in 5 Sekunden verstehen, was Sie anbieten?
- Ist der Nutzen klar, nicht nur die Funktionen?

### 2. Headline-Effektivität
- Kommuniziert sie den Kernwert?
- Ist sie spezifisch und glaubwürdig?

### 3. CTA-Optimierung
- Eine klare primäre Aktion?
- Above the Fold, sichtbar, überzeugend?

### 4. Vertrauenssignale
- Social Proof in der Nähe von Entscheidungen?
- Sicherheitsabzeichen sichtbar?

### 5. Reibungsreduzierung
- Minimale Formularfelder?
- Klare nächste Schritte?

---

## Übung 1: Audit der AgentKits Landing Page

Wenden wir CRO-Prinzipien auf die Landing Page von AgentKits an.

### Aktueller Zustand (Hypothetisch)

**Headline:** "Team Productivity Software"
**CTA:** "Learn More"
**Formular:** 7 Felder

### Ihre Aufgabe

Erstellen Sie ein CRO-Audit mit dem `/cro:page` Befehl:

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### Erwartete Ausgabe

Das Audit sollte Folgendes identifizieren:
- Generische Headline (nicht spezifisch oder nutzenorientiert)
- Schwacher CTA ("Learn More" vs. handlungsorientiert)
- Hohe Reibung (7 Felder sind zu viele)

---

## Übung 2: Psychologie anwenden

Der `marketing-psychology` Skill umfasst über 70 mentale Modelle. Versuchen Sie:

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### Wichtige Modelle für CRO

| Modell | Anwendung |
|--------|-----------|
| Loss Aversion | "Verpassen Sie nicht"-Formulierung |
| Social Proof | "Schließen Sie sich 10.000+ Teams an" |
| Anchoring | Zeigen Sie zuerst den teuren Plan |
| Scarcity | Begrenzte Plätze oder Zeit |
| Reciprocity | Kostenloser Wert vor der Aufforderung |

---

## Praxisaufgabe

Erstellen Sie einen vollständigen CRO-Verbesserungsplan:

1. **Führen Sie ein Seiten-Audit durch:**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **Optimieren Sie das Formular:**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **Entwerfen Sie einen A/B-Test:**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

Speichern Sie Ihre Arbeit unter:
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## Checkpoint

Bevor Sie fortfahren, überprüfen Sie, ob Sie:
- [ ] Die 6 CRO-Skill-Kategorien identifizieren können
- [ ] Ein `/cro:page` Audit durchführen können
- [ ] Psychologische Prinzipien auf CRO anwenden können
- [ ] Eine A/B-Test-Hypothese erstellen können

---

## Nächste Lektion

Fahren Sie fort mit Modul 3, Lektion 2: Formular- & Anmelde-Optimierung

```bash
/training-de:start-3-2