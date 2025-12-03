---
description: /training:start-3-2 - Form & Signup Optimization
argument-hint:
---

# Module 3, Lesson 2: Form & Signup Optimization

## Mastering Form and Registration CRO

Forms are conversion gatekeepers. Every unnecessary field costs you leads. This lesson teaches you to optimize lead capture forms and signup flows.

## Learning Objectives

By the end of this lesson, you will:
1. Apply the 5-field maximum rule
2. Optimize signup flows for conversion
3. Reduce form friction systematically
4. Design multi-step progressive forms

---

## Form CRO Principles

### The 5-Field Rule

Every field beyond 5 reduces conversion by ~10%.

**Essential fields only:**
1. Email (always required)
2. Name (sometimes)
3. Company (B2B only)
4. Password (signup only)
5. One qualifier if needed

**Defer everything else** to post-signup.

### Friction Points to Eliminate

| Friction | Fix |
|----------|-----|
| Too many fields | Remove or defer |
| Password requirements | Show inline, not after error |
| Required phone | Make optional or remove |
| CAPTCHA | Use invisible alternatives |
| No social login | Add Google/SSO options |

---

## Form CRO Command

Use `/cro:form` for lead capture forms:

```bash
/cro:form "Optimize AgentKits's demo request form: Name, Email, Company, Phone, Title, Team Size, Message"
```

### Expected Recommendations

1. **Remove:** Message (ask in follow-up)
2. **Remove:** Phone (can capture later)
3. **Make optional:** Title
4. **Keep:** Name, Email, Company, Team Size

Reduced from 7 → 4 fields = estimated +30% conversions

---

## Signup Flow Optimization

For account registration, use `/cro:signup`:

```bash
/cro:signup "Analyze AgentKits's trial signup: Email → Password → Company → Team Size → Use Case → Payment"
```

### Signup Flow Patterns

| Pattern | Best For | Conversion |
|---------|----------|------------|
| Email-only start | Highest conversion | Start with email, progressive profiling |
| Social-first | Consumer apps | Google/SSO prominent |
| Single-page minimal | B2C, simple products | All fields visible |
| Multi-step with progress | B2B, complex | Guided, shows progress |

---

## Exercise 1: Form Audit

Audit AgentKits's current demo request form:

```bash
/cro:form "7-field form: Name, Email, Company, Phone, Job Title, Team Size, Message. Goal: schedule demo calls."
```

Create recommendations in:
```
training/exercises/markit/cro/form-audit.md
```

### Your Output Should Include

1. Fields to remove
2. Fields to make optional
3. Progressive profiling strategy
4. Copy improvements (button text, labels)

---

## Exercise 2: Signup Flow Redesign

Design an optimized signup flow for AgentKits:

```bash
/cro:signup "Design optimal trial signup for AgentKits. Current: 5-step process. Goal: maximize trial starts."
```

Consider:
- Email-only initial capture
- OAuth options (Google Workspace for B2B)
- When to collect company info
- Onboarding vs signup separation

---

## Exercise 3: Multi-Step Form Design

For complex B2B signups, design a multi-step approach:

**Step 1:** Email only
**Step 2:** Company + team size (with progress bar)
**Step 3:** Optional use case selection

Use the form-cro skill to validate:

```bash
/cro:form "Design 3-step progressive form for AgentKits enterprise demo"
```

---

## Practice Assignment

Complete these tasks:

1. **Audit current form:**
   Save to `training/exercises/markit/cro/current-form-audit.md`

2. **Design optimized form:**
   Save to `training/exercises/markit/cro/optimized-form.md`

3. **Create A/B test:**
   ```bash
   /test:ab-setup "Test 7-field vs 4-field form for AgentKits demos"
   ```
   Save to `training/exercises/markit/cro/form-ab-test.md`

---

## Checkpoint

Before moving on, verify you can:
- [ ] Apply the 5-field maximum rule
- [ ] Identify friction in signup flows
- [ ] Design progressive profiling strategy
- [ ] Create form A/B test hypotheses

---

## Next Lesson

Continue to Module 3, Lesson 3: Popup & Onboarding CRO

```bash
/training:start-3-3
```
