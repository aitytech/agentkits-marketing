---
description: /training-de:start-3-2 - Formular- & Anmeldeoptimierung
argument-hint:
---

# Modul 3, Lektion 2: Formular- & Anmeldeoptimierung

## Formular- und Registrierungs-CRO meistern

Formulare sind Conversion-Gatekeeper. Jedes unnötige Feld kostet Sie Leads. Diese Lektion lehrt Sie, Lead-Capture-Formulare und Anmeldeabläufe zu optimieren.

## Lernziele

Am Ende dieser Lektion werden Sie:
1. Die 5-Felder-Maximum-Regel anwenden
2. Anmeldeabläufe für Conversion optimieren
3. Formular-Reibung systematisch reduzieren
4. Mehrstufige progressive Formulare gestalten

---

## Formular-CRO-Prinzipien

### Die 5-Felder-Regel

Jedes Feld über 5 hinaus reduziert die Conversion um ~10%.

**Nur essenzielle Felder:**
1. E-Mail (immer erforderlich)
2. Name (manchmal)
3. Unternehmen (nur B2B)
4. Passwort (nur Anmeldung)
5. Ein Qualifier bei Bedarf

**Verschieben Sie alles andere** auf nach der Anmeldung.

### Zu eliminierende Reibungspunkte

| Reibung | Lösung |
|---------|--------|
| Zu viele Felder | Entfernen oder verschieben |
| Passwortanforderungen | Inline anzeigen, nicht nach Fehler |
| Pflicht-Telefonnummer | Optional machen oder entfernen |
| CAPTCHA | Unsichtbare Alternativen verwenden |
| Kein Social Login | Google/SSO-Optionen hinzufügen |

---

## Formular-CRO-Befehl

Verwenden Sie `/cro:form` für Lead-Capture-Formulare:

```bash
/cro:form "Optimize AgentKits's demo request form: Name, Email, Company, Phone, Title, Team Size, Message"
```

### Erwartete Empfehlungen

1. **Entfernen:** Message (im Follow-up fragen)
2. **Entfernen:** Phone (kann später erfasst werden)
3. **Optional machen:** Title
4. **Behalten:** Name, Email, Company, Team Size

Reduziert von 7 → 4 Felder = geschätzt +30% Conversions

---

## Anmeldeablauf-Optimierung

Für Account-Registrierung verwenden Sie `/cro:signup`:

```bash
/cro:signup "Analyze AgentKits's trial signup: Email → Password → Company → Team Size → Use Case → Payment"
```

### Anmeldeablauf-Muster

| Muster | Am besten für | Conversion |
|--------|---------------|------------|
| Nur-E-Mail-Start | Höchste Conversion | Mit E-Mail beginnen, progressive Profilerstellung |
| Social-First | Consumer-Apps | Google/SSO prominent |
| Einseitig minimal | B2C, einfache Produkte | Alle Felder sichtbar |
| Mehrstufig mit Fortschritt | B2B, komplex | Geführt, zeigt Fortschritt |

---

## Übung 1: Formular-Audit

Auditieren Sie das aktuelle Demo-Anforderungsformular von AgentKits:

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

Erstellen Sie Empfehlungen in:
```
training/exercises/markit/cro/form-audit.md
```

### Ihre Ausgabe sollte enthalten

1. Zu entfernende Felder
2. Optional zu machende Felder
3. Progressive Profiling-Strategie
4. Copy-Verbesserungen (Button-Text, Labels)

---

## Übung 2: Anmeldeablauf-Neugestaltung

Gestalten Sie einen optimierten Anmeldeablauf für AgentKits:

```bash
/cro:signup "Design optimal trial signup for AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

Berücksichtigen Sie:
- Nur-E-Mail-Erfassung initial
- OAuth-Optionen (Google Workspace für B2B)
- Wann Unternehmensinformationen erfasst werden
- Trennung von Onboarding und Anmeldung

---

## Übung 3: Mehrstufiges Formular-Design

Für komplexe B2B-Anmeldungen gestalten Sie einen mehrstufigen Ansatz:

**Schritt 1:** Nur E-Mail
**Schritt 2:** Unternehmen + Teamgröße (mit Fortschrittsbalken)
**Schritt 3:** Optionale Use-Case-Auswahl

Verwenden Sie das form-cro skill zur Validierung:

```bash
/cro:form "Design 3-step progressive form for AgentKits enterprise demo"
```

---

## Praxisaufgabe

Absolvieren Sie diese Aufgaben:

1. **Aktuelles Formular auditieren:**
   Speichern in `training/exercises/markit/cro/current-form-audit.md`

2. **Optimiertes Formular gestalten:**
   Speichern in `training/exercises/markit/cro/optimized-form.md`

3. **A/B-Test erstellen:**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form for AgentKits demos"
   ```
   Speichern in `training/exercises/markit/cro/form-ab-test.md`

---

## Checkpoint

Bevor Sie fortfahren, überprüfen Sie, ob Sie:
- [ ] Die 5-Felder-Maximum-Regel anwenden können
- [ ] Reibung in Anmeldeabläufen identifizieren können
- [ ] Eine Progressive-Profiling-Strategie gestalten können
- [ ] Formular-A/B-Test-Hypothesen erstellen können

---

## Nächste Lektion

Weiter zu Modul 3, Lektion 3: Popup & Onboarding CRO

```bash
/training-de:start-3-3