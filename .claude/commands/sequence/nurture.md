---
description: Create lead nurturing sequence to convert leads to MQL/SQL
argument-hint: [product-or-service] [target-segment]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `email-marketing`, `email-sequence`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of nurture sequence do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - 4-week nurture with essentials
- **Recommended** - 6-week sequence with triggers
- **Complete** - Full sequence with branching
- **Custom** - I'll specify parameters

---

### Step 2: Ask Nurture Stage

**Question:** "What funnel stage is this sequence for?"
**Header:** "Stage"
**MultiSelect:** false

**Options:**
- **TOFU** - Awareness, problem education
- **MOFU** - Consideration, solution evaluation
- **BOFU** - Decision, purchase ready
- **Full Funnel** - Complete journey

---

### Step 3: Ask Content Focus

**Question:** "What content types should the sequence include?"
**Header:** "Content"
**MultiSelect:** true

**Options:**
- **Educational** - How-tos, guides, tips
- **Social Proof** - Case studies, testimonials
- **Product** - Features, demos, offers
- **Engagement** - Surveys, feedback, replies

---

### Step 4: Ask Trigger Type

**Question:** "What should trigger sequence entry?"
**Header:** "Trigger"
**MultiSelect:** false

**Options:**
- **Score-Based** - Lead score threshold
- **Behavior-Based** - Specific action taken
- **Time-Based** - Days since signup
- **Segment-Based** - Matching criteria

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Nurture Sequence Configuration

| Parameter | Value |
|-----------|-------|
| Product/Service | [description] |
| Funnel Stage | [selected stage] |
| Content Focus | [selected content] |
| Entry Trigger | [selected trigger] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this nurture sequence?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create sequence** - Start creation
- **No, change settings** - Go back to modify

---

## Nurture Philosophy

- Lead with value, not pitch
- Match content to buyer journey stage
- Use behavioral triggers, not just time
- Personalize based on engagement

---

## Workflow

1. **Entry Definition**
   - Entry criteria (lead score, behavior)
   - Stage progression triggers
   - Exit conditions

2. **Sequence Design**
   - 6-week nurture cadence
   - Content progression (TOFU → MOFU → BOFU)
   - Behavioral triggers

3. **Content Creation**
   - Educational content
   - Case study narratives
   - Conversion copy

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Entry criteria | `lead-qualifier` | Segment definition |
| Sequence design | `email-wizard` | Primary task |
| Educational content | `copywriter` | Content creation |

---

## Output Format

### Basic Scope

```markdown
## Nurture Sequence: [Product]

### Overview
- Trigger: [Entry condition]
- Goal: Move leads to MQL (50+)
- Duration: 4 weeks

### Week 1: Problem Awareness
**Email 1.1 (Day 0)**
Subject: [Subject]
Content: [Industry pain points]

### Week 2: Solution Education
[Structure]

### Week 3: Social Proof
[Structure]

### Week 4: Decision
[Structure]
```

### Recommended Scope

[Include Basic + 6 weeks + Behavioral triggers + Exit conditions + Success metrics]

### Complete Scope

[Include all + Branching logic + Score updates + Sales handoff + A/B testing + Re-engagement paths]

---

## Output Location

Save sequence to: `./docs/sequences/nurture-[segment]-[YYYY-MM-DD].md`
