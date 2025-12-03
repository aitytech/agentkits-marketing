---
description: Generate customized sales pitch
argument-hint: [prospect-company] [use-case]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of sales pitch do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Core pitch with key talking points
- **Recommended** - Full pitch with objection handling
- **Complete** - Comprehensive with discovery guide
- **Custom** - I'll specify what I need

---

### Step 2: Ask Pitch Format

**Question:** "What format is this pitch for?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **Live Demo** - Interactive product walkthrough
- **Presentation** - Slide deck narrative
- **Phone Call** - Verbal pitch script
- **Video Call** - Virtual meeting format

---

### Step 3: Ask Audience

**Question:** "Who is the primary audience?"
**Header:** "Audience"
**MultiSelect:** false

**Options:**
- **Executive** - C-level, strategic focus
- **Manager** - Department head, practical focus
- **Technical** - IT/Dev, implementation focus
- **End User** - Day-to-day user, feature focus

---

### Step 4: Ask Pitch Length

**Question:** "What's the target pitch duration?"
**Header:** "Length"
**MultiSelect:** false

**Options:**
- **Elevator (2 min)** - Quick hook and value
- **Standard (10 min)** - Full pitch flow
- **Extended (30 min)** - Deep dive with Q&A
- **Workshop (60 min)** - Discovery and demo

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Sales Pitch Configuration

| Parameter | Value |
|-----------|-------|
| Prospect | [prospect company] |
| Format | [selected format] |
| Audience | [selected audience] |
| Length | [selected length] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this sales pitch?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create pitch** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Prospect Research**
   - Industry challenges
   - Company-specific pain points
   - Decision maker priorities
   - Budget indicators

2. **Pitch Structure**
   - Problem statement
   - Solution overview
   - Proof points
   - Differentiation
   - Call to action

3. **Content Polish**
   - Compelling narrative
   - Clear value proposition
   - Memorable hooks

4. **Enablement Materials**
   - Objection responses
   - Discovery questions
   - Follow-up templates

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Prospect research | `researcher` | Data gathering |
| Pitch creation | `sales-enabler` | Primary task |
| Copy polish | `copywriter` | Narrative refinement |

---

## Output Format

### Basic Scope

```markdown
## Sales Pitch: [Prospect]

### Opening Hook (30 sec)
[Attention-grabbing statement]

### Problem Statement (1 min)
[Pain point description]

### Solution Overview (2 min)
[How we solve this]

### Key Benefits
1. [Benefit + metric]
2. [Benefit + metric]

### Call to Action
[Clear next step]
```

### Recommended Scope

[Include Basic + Social proof + Full objection handling + Discovery questions + Follow-up template]

### Complete Scope

[Include all + Slide suggestions + Competitive positioning + ROI calculator + Implementation timeline + Reference customers]

---

## Output Location

Save pitch to: `./docs/sales/pitch-[prospect]-[YYYY-MM-DD].md`
