---
description: Create automated email sequence
argument-hint: [sequence-type] [target-segment]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `email-marketing`, `email-sequence` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of email sequence do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Sequence structure and triggers
- **Recommended** - Full sequence with copy
- **Complete** - Comprehensive with A/B variants
- **Custom** - I'll specify parameters

---

### Step 2: Ask Sequence Type

**Question:** "What type of sequence is this?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Welcome** - New subscriber onboarding
- **Nurture** - Lead nurturing to MQL
- **Onboarding** - New customer success
- **Re-engage** - Win back inactive contacts

---

### Step 3: Ask Sequence Length

**Question:** "How many emails in the sequence?"
**Header:** "Length"
**MultiSelect:** false

**Options:**
- **Short (3-4)** - Quick engagement
- **Medium (5-7)** - Standard nurture
- **Long (8-10)** - Deep engagement
- **Custom** - I'll specify count

---

### Step 4: Ask Content Focus

**Question:** "What content approach should the sequence use?"
**Header:** "Content"
**MultiSelect:** false

**Options:**
- **Educational** - Value-first approach
- **Product-Led** - Feature highlights
- **Story-Driven** - Narrative arc
- **Mixed** - Balanced approach

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Sequence Configuration

| Parameter | Value |
|-----------|-------|
| Type | [selected type] |
| Target Segment | [description] |
| Length | [selected length] |
| Content Focus | [selected content] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this email sequence?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create sequence** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Sequence Design**
   - Trigger definition
   - Email timing
   - Content progression
   - CTA strategy

2. **Content Creation**
   - Subject lines (A/B)
   - Preview text
   - Body copy
   - CTAs

3. **Automation Setup**
   - Entry triggers
   - Exit conditions
   - Branch logic
   - Score updates

4. **Success Metrics**
   - Open rate targets
   - Click rate targets
   - Conversion goals

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Sequence design | `email-wizard` | Primary task |
| Copy creation | `copywriter` | Email content |
| Segment targeting | `lead-qualifier` | Entry criteria |

---

## Output Format

### Basic Scope

```markdown
## [Type] Sequence

### Overview
- Trigger: [Entry condition]
- Duration: [X emails over Y days]
- Goal: [Desired outcome]

### Sequence Flow
| Email | Day | Purpose | CTA |
|-------|-----|---------|-----|
| 1 | 0 | [Purpose] | [CTA] |
| 2 | X | [Purpose] | [CTA] |

### Exit Conditions
- [Condition 1]
- [Condition 2]
```

### Recommended Scope

[Include Basic + Full email copy + Subject A/B variants + Personalization tokens + Success metrics]

### Complete Scope

[Include all + Branch logic + Score updates + Segment variations + Analytics setup + Optimization plan]

---

## Output Location

Save sequence to: `./docs/sequences/[type]-[segment]-[YYYY-MM-DD].md`
