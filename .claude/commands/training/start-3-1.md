---
description: /training:start-3-1 - CRO Fundamentals
argument-hint:
---

# Module 3, Lesson 1: CRO Fundamentals

## Welcome to Conversion Rate Optimization

In this module, you'll master the new CRO (Conversion Rate Optimization) skills added to AgentKits Marketing. These skills help you systematically improve conversion rates across all marketing assets.

## Learning Objectives

By the end of this lesson, you will:
1. Understand the 6 CRO skill categories
2. Know when to use each CRO command
3. Apply psychological principles to conversions
4. Create your first CRO audit

---

## The CRO Skills Suite

AgentKits Marketing includes 7 specialized CRO skills:

| Skill | Use For | Command |
|-------|---------|---------|
| `page-cro` | Landing pages, homepages, pricing | `/cro:page` |
| `form-cro` | Lead capture, contact, demo forms | `/cro:form` |
| `popup-cro` | Modals, overlays, exit intent | `/cro:popup` |
| `signup-flow-cro` | Registration, trial signups | `/cro:signup` |
| `onboarding-cro` | Post-signup activation | `/cro:onboarding` |
| `paywall-upgrade-cro` | In-app paywalls, upgrades | `/cro:paywall` |
| `ab-test-setup` | Experiment design | `/test:ab-setup` |

---

## CRO Framework

Every CRO analysis follows this hierarchy:

### 1. Value Proposition (Highest Impact)
- Can visitors understand what you offer in 5 seconds?
- Is the benefit clear, not just features?

### 2. Headline Effectiveness
- Does it communicate core value?
- Is it specific and credible?

### 3. CTA Optimization
- One clear primary action?
- Above fold, visible, compelling?

### 4. Trust Signals
- Social proof near decisions?
- Security badges visible?

### 5. Friction Reduction
- Minimal form fields?
- Clear next steps?

---

## Exercise 1: Audit AgentKits's Landing Page

Let's apply CRO principles to AgentKits's landing page.

### Current State (Hypothetical)

**Headline:** "Team Productivity Software"
**CTA:** "Learn More"
**Form:** 7 fields

### Your Task

Create a CRO audit using the `/cro:page` command:

```bash
/cro:page "Analyze AgentKits's landing page: Headline 'Team Productivity Software', CTA 'Learn More', 7-field form. Target: remote team managers."
```

### Expected Output

The audit should identify:
- Generic headline (not specific or benefit-focused)
- Weak CTA ("Learn More" vs action-oriented)
- High friction (7 fields is too many)

---

## Exercise 2: Apply Psychology

The `marketing-psychology` skill includes 70+ mental models. Try:

```bash
/marketing:psychology "How can we use loss aversion and social proof to improve AgentKits's trial signup rate?"
```

### Key Models for CRO

| Model | Application |
|-------|-------------|
| Loss Aversion | "Don't miss out" framing |
| Social Proof | "Join 10,000+ teams" |
| Anchoring | Show expensive plan first |
| Scarcity | Limited spots or time |
| Reciprocity | Free value before ask |

---

## Practice Assignment

Create a complete CRO improvement plan:

1. **Run page audit:**
   ```bash
   /cro:page "AgentKits homepage audit"
   ```

2. **Optimize the form:**
   ```bash
   /cro:form "Reduce AgentKits's 7-field trial signup form"
   ```

3. **Design A/B test:**
   ```bash
   /test:ab-setup "Test new headline vs current for AgentKits"
   ```

Save your work to:
```
training/exercises/markit/cro/
├── landing-page-audit.md
├── form-optimization.md
└── ab-test-plan.md
```

---

## Checkpoint

Before moving on, verify you can:
- [ ] Identify the 6 CRO skill categories
- [ ] Run a `/cro:page` audit
- [ ] Apply psychology principles to CRO
- [ ] Create an A/B test hypothesis

---

## Next Lesson

Continue to Module 3, Lesson 2: Form & Signup Optimization

```bash
/training:start-3-2
```
