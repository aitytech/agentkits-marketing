---
description: Design lead nurture sequence
argument-hint: [segment-or-stage]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `email-marketing`, `email-sequence`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of nurture sequence design do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - 4-week sequence framework
- **Recommended** - 6-week with triggers and content
- **Complete** - Full sequence with automation logic
- **Custom** - I'll specify parameters

---

### Step 2: Ask Funnel Stage

**Question:** "What funnel stage is this nurture sequence for?"
**Header:** "Stage"
**MultiSelect:** false

**Options:**
- **TOFU** - Awareness stage, problem education
- **MOFU** - Consideration stage, solution evaluation
- **BOFU** - Decision stage, purchase ready
- **Full Funnel** - Complete journey coverage

---

### Step 3: Ask Content Mix

**Question:** "What content types should the sequence include?"
**Header:** "Content"
**MultiSelect:** true

**Options:**
- **Educational** - How-tos, guides, tips
- **Social Proof** - Case studies, testimonials
- **Product** - Features, demos, comparisons
- **Interactive** - Surveys, quizzes, assessments

---

### Step 4: Ask Trigger Type

**Question:** "What should trigger sequence entry?"
**Header:** "Trigger"
**MultiSelect:** false

**Options:**
- **Score-Based** - Lead score threshold
- **Behavior-Based** - Specific action taken
- **Time-Based** - Days since signup/action
- **Segment-Based** - Matching criteria

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Nurture Sequence Configuration

| Parameter | Value |
|-----------|-------|
| Segment/Stage | [description] |
| Funnel Stage | [selected stage] |
| Content Mix | [selected content] |
| Entry Trigger | [selected trigger] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Design this nurture sequence?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, design sequence** - Start design
- **No, change settings** - Go back to modify

---

## Nurture Philosophy

- Lead with value, not pitch
- Match content to buyer journey stage
- Use behavioral triggers, not just time
- Personalize based on engagement

---

## Workflow

1. **Journey Stage Mapping**
   - Identify current awareness level
   - Define desired next step
   - Map content needs
   - Understand objections

2. **Sequence Design**
   - Email cadence and timing
   - Content progression
   - CTA strategy
   - Branch logic

3. **Content Planning**
   - Subject line strategy
   - Email templates
   - Supporting assets

4. **Automation Setup**
   - Entry/exit conditions
   - Trigger definitions
   - Score updates

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Sequence design | `email-wizard` | Primary task |
| Entry criteria | `lead-qualifier` | Trigger definition |
| Content creation | `copywriter` | Email copy |

---

## Output Format

### Basic Scope

```markdown
## Nurture Sequence: [Segment]

### Overview
- Trigger: [Entry condition]
- Goal: Move leads to MQL
- Duration: 4 weeks

### Week 1: Problem Awareness
**Email 1.1 (Day 0)**
Subject: [Subject]
Content: [Content brief]

### Week 2: Solution Education
[Structure]

### Week 3: Social Proof
[Structure]

### Week 4: Decision
[Structure]
```

### Recommended Scope

[Include Basic + 6 weeks + Behavioral triggers + Exit conditions + Success metrics + A/B test ideas]

### Complete Scope

[Include all + Branching logic + Score updates + Sales handoff + Re-engagement paths + Full email copy]

---

## Output Location

Save sequence to: `./docs/sequences/nurture-[segment]-[YYYY-MM-DD].md`
