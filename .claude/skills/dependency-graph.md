# Skill Dependency Graph

Visual representation of skill relationships, prerequisites, and learning paths.

---

## Overview

Skills are organized into tracks with explicit dependencies. Load prerequisite skills before dependent skills for optimal context.

---

## CRO Track (Conversion Rate Optimization)

```
page-cro (Foundation)
├── form-cro
│   └── signup-flow-cro
│       └── onboarding-cro
├── popup-cro
└── ab-test-setup ← (also requires: analytics-attribution)
    └── paywall-upgrade-cro ← (also requires: pricing-strategy)
```

**Learning Path:**
1. Start with `page-cro` (foundation for all CRO)
2. Specialize: `form-cro` → `signup-flow-cro` → `onboarding-cro`
3. Add testing: `ab-test-setup`
4. Monetization: `paywall-upgrade-cro`

---

## Content Track

```
copywriting (Foundation)
├── copy-editing
└── email-sequence ← (also requires: email-marketing)
```

**Learning Path:**
1. Start with `copywriting` (write first)
2. Polish with `copy-editing`
3. Automate with `email-sequence`

---

## SEO Track

```
seo-mastery (Foundation)
├── programmatic-seo
├── schema-markup
└── competitor-alternatives ← (also requires: copywriting)
```

**Learning Path:**
1. Start with `seo-mastery` (fundamentals)
2. Scale with `programmatic-seo`
3. Enhance with `schema-markup`
4. Compete with `competitor-alternatives`

---

## Growth Track

```
content-strategy
├── launch-strategy ← (also requires: social-media)
└── free-tool-strategy ← (also requires: seo-mastery)

marketing-fundamentals
├── referral-program
└── pricing-strategy
    └── paywall-upgrade-cro ← (also requires: page-cro)
```

**Learning Path:**
1. Start with `marketing-fundamentals` or `content-strategy`
2. Launch with `launch-strategy`
3. Grow with `referral-program` or `free-tool-strategy`
4. Monetize with `pricing-strategy`

---

## Core Marketing Track

```
marketing-fundamentals (Foundation)
├── marketing-psychology
├── content-strategy
├── brand-building
├── analytics-attribution
│   ├── ab-test-setup
│   └── paid-advertising
└── marketing-ideas
```

**Learning Path:**
1. Start with `marketing-fundamentals`
2. Deep dive: `marketing-psychology`
3. Plan: `content-strategy`
4. Measure: `analytics-attribution`
5. Scale: `paid-advertising`

---

## Email Track

```
copywriting
└── email-marketing
    └── email-sequence
```

**Learning Path:**
1. Start with `copywriting`
2. Channel expertise: `email-marketing`
3. Automate: `email-sequence`

---

## Social Track

```
content-strategy
└── social-media
    └── launch-strategy
```

---

## Document Track (Independent)

```
document-skills/docx (Independent)
document-skills/pdf (Independent)
document-skills/pptx (Independent)
document-skills/xlsx (Independent)
```

No dependencies - can be loaded as needed.

---

## Quick Reference: Dependencies

| Skill | Prerequisites |
|-------|---------------|
| `form-cro` | `page-cro` |
| `popup-cro` | `page-cro` |
| `signup-flow-cro` | `form-cro` |
| `onboarding-cro` | `signup-flow-cro` |
| `paywall-upgrade-cro` | `page-cro`, `pricing-strategy` |
| `ab-test-setup` | `page-cro`, `analytics-attribution` |
| `copy-editing` | `copywriting` |
| `email-sequence` | `email-marketing`, `copywriting` |
| `programmatic-seo` | `seo-mastery` |
| `schema-markup` | `seo-mastery` |
| `competitor-alternatives` | `seo-mastery`, `copywriting` |
| `launch-strategy` | `content-strategy`, `social-media` |
| `referral-program` | `marketing-fundamentals` |
| `free-tool-strategy` | `seo-mastery`, `content-strategy` |

---

## Foundation Skills (No Prerequisites)

These skills can be loaded independently:

- `marketing-fundamentals`
- `marketing-psychology`
- `marketing-ideas`
- `page-cro`
- `copywriting`
- `seo-mastery`
- `social-media`
- `email-marketing`
- `paid-advertising`
- `content-strategy`
- `analytics-attribution`
- `brand-building`
- `problem-solving`
- `pricing-strategy`
- All document skills

---

## Skill Selection Algorithm

When selecting skills for a task:

1. **Match triggers** - Find skills matching user intent
2. **Load prerequisites** - Recursively load all required skills
3. **Limit context** - Load max 3-5 skills to avoid context rot
4. **Prioritize** - Foundation → Specialized → Related

Example:
```
User: "Optimize our signup form"
├── Primary match: signup-flow-cro
├── Prerequisites: form-cro, page-cro
└── Related (optional): ab-test-setup

Skills loaded: page-cro → form-cro → signup-flow-cro
```

---

## Agent-Skill Mappings

| Agent | Primary Skills |
|-------|----------------|
| `conversion-optimizer` | page-cro, form-cro, popup-cro, signup-flow-cro, onboarding-cro, paywall-upgrade-cro, ab-test-setup |
| `attraction-specialist` | seo-mastery, programmatic-seo, schema-markup, content-strategy, paid-advertising, competitor-alternatives |
| `copywriter` | copywriting, copy-editing, email-sequence |
| `email-wizard` | email-marketing, email-sequence |
| `seo-specialist` | seo-mastery, programmatic-seo, schema-markup |
| `brand-voice-guardian` | brand-building, copywriting, copy-editing |
| `brainstormer` | marketing-ideas, marketing-psychology, problem-solving |
| `planner` | content-strategy, launch-strategy |
| `researcher` | marketing-fundamentals, analytics-attribution, pricing-strategy |
| `upsell-maximizer` | paywall-upgrade-cro, pricing-strategy, referral-program |
| `continuity-specialist` | onboarding-cro, email-sequence, referral-program |
