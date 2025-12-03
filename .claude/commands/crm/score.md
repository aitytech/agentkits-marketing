---
description: Calculate lead score with demographic and behavioral factors
argument-hint: [lead-data]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of lead scoring do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick score calculation
- **Recommended** - Full breakdown with actions
- **Complete** - Comprehensive with history
- **Custom** - I'll specify parameters

---

### Step 2: Ask Scoring Model

**Question:** "Which scoring model should we use?"
**Header:** "Model"
**MultiSelect:** false

**Options:**
- **Balanced** - 50% demographic, 50% behavioral
- **Behavior-Heavy** - 30% demographic, 70% behavioral
- **Fit-Heavy** - 70% demographic, 30% behavioral
- **Custom Weights** - I'll specify weights

---

### Step 3: Ask Data Available

**Question:** "What data do we have for this lead?"
**Header:** "Data"
**MultiSelect:** true

**Options:**
- **Demographics** - Title, company, industry
- **Engagement** - Email opens, clicks, visits
- **Content** - Downloads, form fills
- **Activity** - Recent actions, frequency

---

### Step 4: Ask Output Focus

**Question:** "What should the output emphasize?"
**Header:** "Focus"
**MultiSelect:** false

**Options:**
- **Score Only** - Just the number
- **Breakdown** - Score with factors
- **Actions** - Score with next steps
- **Full Analysis** - Complete lead profile

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Lead Scoring Configuration

| Parameter | Value |
|-----------|-------|
| Lead | [description] |
| Model | [selected model] |
| Data Available | [selected data] |
| Output Focus | [selected focus] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Calculate this lead score?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, calculate** - Start scoring
- **No, change settings** - Go back to modify

---

## Workflow

1. **Data Collection**
   - Demographic factors
   - Behavioral signals
   - Engagement history
   - Recent activity

2. **Score Calculation**
   - Apply weighting model
   - Calculate sub-scores
   - Determine total score

3. **Temperature Assignment**
   - 🔥 Hot (76-100)
   - 🌡️ Warm (51-75)
   - ❄️ Cool (26-50)
   - 🧊 Cold (0-25)

4. **Action Recommendation**
   - Next best action
   - Segment assignment
   - Nurture track

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Score calculation | `lead-qualifier` | Primary task |
| Behavioral analysis | `continuity-specialist` | Engagement data |
| Action planning | `sales-enabler` | Hot leads |

---

## Output Format

### Basic Scope

```markdown
## Lead Score: [Contact]

### Total: [X]/100
### Temperature: [🔥/🌡️/❄️/🧊]

### Quick Breakdown
- Demographic: [X]/50
- Behavioral: [X]/50

### Recommended Action
[Next step]
```

### Recommended Scope

[Include Basic + Full factor breakdown + Score history + Segment assignment + Nurture recommendation]

### Complete Scope

[Include all + Score trend + Conversion probability + Detailed activity log + Competitive comparison]

---

## Output Location

Save score to: `./docs/crm/score-[contact]-[YYYY-MM-DD].md`
