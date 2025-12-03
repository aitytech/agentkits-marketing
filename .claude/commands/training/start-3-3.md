---
description: /training:start-3-3 - Popup & Onboarding CRO
argument-hint:
---

# Module 3, Lesson 3: Popup & Onboarding CRO

## Converting Visitors and Activating Users

This lesson covers two critical conversion points: capturing visitors with popups and activating new signups through onboarding.

## Learning Objectives

By the end of this lesson, you will:
1. Design high-converting popups without annoying users
2. Optimize post-signup onboarding flows
3. Identify and accelerate the "Aha moment"
4. Create paywall and upgrade screens

---

## Popup CRO

### When Popups Work

| Type | Trigger | Best For |
|------|---------|----------|
| Exit Intent | Mouse leaves viewport | Lead capture, save abandoners |
| Time-Delayed | 30-60 seconds on page | Engaged visitors |
| Scroll-Triggered | 50-70% scroll depth | Content engagement |
| Click-Triggered | User action | Specific CTAs |

### When Popups Fail

- Appearing immediately on page load
- No clear value proposition
- Difficult to close
- Same popup on every visit

---

## Popup Design Exercise

Use `/cro:popup` to design effective popups:

```bash
/cro:popup "Design exit-intent popup for AgentKits blog. Goal: capture emails for 'Remote Team Productivity Guide' lead magnet."
```

### Good Popup Elements

1. **Clear value:** What they get
2. **Minimal fields:** Email only
3. **Easy dismiss:** Visible X
4. **Mobile-friendly:** Thumb-reachable CTA
5. **Frequency cap:** Once per session

---

## Onboarding CRO

### The Activation Equation

**Aha Moment** = First time user experiences core value

For AgentKits: "When a team member sees their team's focus schedule and blocks distraction-free time"

### Onboarding Patterns

| Pattern | Best For |
|---------|----------|
| Setup Wizard | Complex products needing config |
| Checklist | Feature-rich apps |
| Interactive Tour | UI-heavy products |
| Template Gallery | Creative tools |
| Sample Project | Project-based tools |

---

## Onboarding Exercise

Use `/cro:onboarding` to optimize AgentKits's activation:

```bash
/cro:onboarding "Design onboarding for AgentKits. Aha moment: seeing team focus schedule. Current activation: 15% of trials. Goal: 40%."
```

### Key Questions

1. What's the minimum setup for value?
2. Can you show value before setup?
3. What's the #1 action that predicts conversion?
4. How fast can users reach Aha moment?

---

## Paywall & Upgrade CRO

For freemium and trial products, upgrade screens are critical.

### Paywall Triggers

| Trigger | Context |
|---------|---------|
| Feature gate | User tries premium feature |
| Usage limit | Reached free tier limit |
| Trial expiry | Time-based trial ending |
| Upgrade prompt | After value moment |

### Paywall Exercise

```bash
/cro:paywall "Design upgrade screen for AgentKits. Trigger: user hits 5-user limit on free tier. Goal: convert to Team plan ($12/user)."
```

---

## Practice Assignment

Complete these exercises for AgentKits:

### 1. Exit Intent Popup
```bash
/cro:popup "Exit intent for AgentKits pricing page - capture leads who leave without trial"
```
Save to: `training/exercises/markit/cro/exit-popup.md`

### 2. Onboarding Flow
```bash
/cro:onboarding "5-step onboarding to reach Aha moment in under 3 minutes"
```
Save to: `training/exercises/markit/cro/onboarding-flow.md`

### 3. Upgrade Screen
```bash
/cro:paywall "Upgrade screen when free user invites 6th team member"
```
Save to: `training/exercises/markit/cro/upgrade-screen.md`

---

## Full CRO Funnel

Now you can optimize the complete conversion funnel:

```
Visitor → Page CRO → Form CRO → Signup CRO
     ↓
  Popup CRO (capture abandoners)
     ↓
New User → Onboarding CRO → Activation
     ↓
Free User → Paywall CRO → Paid Customer
```

Each skill handles a specific stage.

---

## Checkpoint

Before completing Module 3, verify you can:
- [ ] Design effective popups with proper triggers
- [ ] Create onboarding flows that accelerate Aha moment
- [ ] Build upgrade screens for freemium conversion
- [ ] Map the full CRO funnel

---

## Module 3 Complete!

You've mastered CRO skills. Your deliverables:

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

## Next: Advanced Skills

Continue to Module 4: Growth & Launch Strategies

```bash
/training:start-4-1
```

Or explore other new skills:
- `/marketing:psychology` - 70+ mental models
- `/marketing:ideas` - 140 marketing ideas
- `/growth:launch` - Launch strategy
- `/pricing:strategy` - Pricing design
