---
description: /training-de:start-3-3 - Popup & Onboarding CRO
argument-hint:
---

# Modul 3, Lektion 3: Popup & Onboarding CRO

## Besucher konvertieren und Benutzer aktivieren

Diese Lektion behandelt zwei kritische Konversionspunkte: Besucher mit Popups erfassen und neue Registrierungen durch Onboarding aktivieren.

## Lernziele

Am Ende dieser Lektion werden Sie:
1. Hochkonvertierende Popups entwerfen, ohne Benutzer zu verärgern
2. Post-Signup-Onboarding-Flows optimieren
3. Den "Aha-Moment" identifizieren und beschleunigen
4. Paywall- und Upgrade-Bildschirme erstellen

---

## Popup CRO

### Wann Popups funktionieren

| Typ | Auslöser | Am besten für |
|------|---------|----------|
| Exit Intent | Maus verlässt Viewport | Lead-Erfassung, Abbrecher retten |
| Zeitverzögert | 30-60 Sekunden auf Seite | Engagierte Besucher |
| Scroll-ausgelöst | 50-70% Scroll-Tiefe | Content-Engagement |
| Klick-ausgelöst | Benutzeraktion | Spezifische CTAs |

### Wann Popups scheitern

- Sofortiges Erscheinen beim Laden der Seite
- Kein klares Wertversprechen
- Schwierig zu schließen
- Gleiches Popup bei jedem Besuch

---

## Popup-Design-Übung

Verwenden Sie `/cro:popup`, um effektive Popups zu entwerfen:

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### Gute Popup-Elemente

1. **Klarer Wert:** Was sie bekommen
2. **Minimale Felder:** Nur E-Mail
3. **Einfaches Schließen:** Sichtbares X
4. **Mobilfreundlich:** Mit Daumen erreichbarer CTA
5. **Frequenzbegrenzung:** Einmal pro Sitzung

---

## Onboarding CRO

### Die Aktivierungsgleichung

**Aha-Moment** = Erstes Mal, wenn Benutzer den Kernwert erlebt

Für AgentKits: "Wenn ein Teammitglied den Fokus-Zeitplan seines Teams sieht und ablenkungsfreie Zeit blockiert"

### Onboarding-Muster

| Muster | Am besten für |
|---------|----------|
| Setup-Assistent | Komplexe Produkte, die Konfiguration benötigen |
| Checkliste | Feature-reiche Apps |
| Interaktive Tour | UI-lastige Produkte |
| Vorlagengalerie | Kreative Tools |
| Beispielprojekt | Projektbasierte Tools |

---

## Onboarding-Übung

Verwenden Sie `/cro:onboarding`, um die Aktivierung von AgentKits zu optimieren:

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### Schlüsselfragen

1. Was ist das minimale Setup für Wert?
2. Können Sie Wert vor dem Setup zeigen?
3. Was ist die #1-Aktion, die Konversion vorhersagt?
4. Wie schnell können Benutzer den Aha-Moment erreichen?

---

## Paywall & Upgrade CRO

Für Freemium- und Testprodukte sind Upgrade-Bildschirme kritisch.

### Paywall-Auslöser

| Auslöser | Kontext |
|---------|---------|
| Feature-Sperre | Benutzer versucht Premium-Feature |
| Nutzungslimit | Limit der kostenlosen Stufe erreicht |
| Testablauf | Zeitbasierter Test läuft ab |
| Upgrade-Aufforderung | Nach Wertmoment |

### Paywall-Übung

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## Praxisaufgabe

Absolvieren Sie diese Übungen für AgentKits:

### 1. Exit Intent Popup
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
Speichern unter: `training/exercises/markit/cro/exit-popup.md`

### 2. Onboarding-Flow
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
Speichern unter: `training/exercises/markit/cro/onboarding-flow.md`

### 3. Upgrade-Bildschirm
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
Speichern unter: `training/exercises/markit/cro/upgrade-screen.md`

---

## Vollständiger CRO-Funnel

Jetzt können Sie den kompletten Conversion-Funnel optimieren:

```
Besucher → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (Abbrecher erfassen)
     ↓
Neuer Benutzer → Onboarding CRO → Aktivierung
     ↓
Kostenloser Benutzer → Paywall CRO → Zahlender Kunde
```

Jede Fähigkeit behandelt eine bestimmte Phase.

---

## Checkpoint

Bevor Sie Modul 3 abschließen, überprüfen Sie, ob Sie:
- [ ] Effektive Popups mit geeigneten Auslösern entwerfen können
- [ ] Onboarding-Flows erstellen können, die den Aha-Moment beschleunigen
- [ ] Upgrade-Bildschirme für Freemium-Konversion erstellen können
- [ ] Den vollständigen CRO-Funnel abbilden können

---

## Modul 3 abgeschlossen!

Sie haben CRO-Fähigkeiten gemeistert. Ihre Ergebnisse:

```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-audit.md
├── optimized-form.md
├── form-ab-test.md
├── exit-popup.md
├── onboarding-flow.md
└── upgrade-screen.md
```

---

## Weiter: Fortgeschrittene Fähigkeiten

Weiter zu Modul 4: Wachstums- & Launch-Strategien

```bash
/training-de:start-4-1
```

Oder erkunden Sie andere neue Fähigkeiten:
- `/marketing:psychology` - 70+ mentale Modelle
- `/marketing:ideas` - 140 Marketing-Ideen
- `/growth:launch` - Launch-Strategie
- `/pricing:strategy` - Preisgestaltung