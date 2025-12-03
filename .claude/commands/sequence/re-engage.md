---
description: Create re-engagement sequence for inactive contacts
argument-hint: [brand-or-product] [inactive-criteria]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `email-marketing`, `email-sequence` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of re-engagement sequence do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - 3-email win-back series
- **Recommended** - 5-email sequence with offer
- **Complete** - Full sequence with segmentation
- **Custom** - I'll specify parameters

---

### Step 2: Ask Inactivity Period

**Question:** "How long have contacts been inactive?"
**Header:** "Period"
**MultiSelect:** false

**Options:**
- **30-60 days** - Recently disengaged
- **60-90 days** - Moderately inactive
- **90+ days** - Long-term inactive
- **Mixed** - Various inactivity levels

---

### Step 3: Ask Win-Back Strategy

**Question:** "What approach should we use to win them back?"
**Header:** "Strategy"
**MultiSelect:** false

**Options:**
- **Value-First** - New content and updates
- **Incentive** - Discount or offer
- **Emotional** - Personal reconnection
- **Direct** - Simple confirmation ask

---

### Step 4: Ask Post-Sequence Action

**Question:** "What happens after the sequence?"
**Header:** "Action"
**MultiSelect:** false

**Options:**
- **Clean List** - Remove non-responders
- **Keep & Suppress** - Keep but exclude from campaigns
- **Move to Cold** - Reduce send frequency
- **Final Attempt** - One more try later

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Re-engagement Sequence Configuration

| Parameter | Value |
|-----------|-------|
| Brand/Product | [description] |
| Inactivity Period | [selected period] |
| Win-Back Strategy | [selected strategy] |
| Post-Sequence | [selected action] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this re-engagement sequence?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create sequence** - Start creation
- **No, change settings** - Go back to modify

---

## Re-engagement Philosophy

- Lead with value, not guilt
- Remind them why they subscribed
- Give easy way to re-engage or leave
- Clean list if no response (GDPR compliant)

---

## Workflow

1. **Segment Definition**
   - Define inactivity criteria
   - Segment by last engagement
   - Plan win-back strategy

2. **Sequence Design**
   - 21-day re-engagement cadence
   - Escalating urgency
   - Breakup email

3. **Content Creation**
   - Attention-grabbing subject lines
   - Emotional reconnection copy
   - Clear value proposition

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Inactivity criteria | `continuity-specialist` | Segment definition |
| Sequence design | `email-wizard` | Primary task |
| Win-back copy | `copywriter` | Emotional reconnection |

---

## Output Format

### Basic Scope

```markdown
## Re-engagement Sequence: [Brand]

### Overview
- Trigger: No engagement 30+ days
- Goal: Win back or clean list
- Duration: 21 days (3 emails)

### Email 1: We Miss You (Day 0)
**Subject:** [Subject]
**Body:** [Copy]

### Email 2: Special Offer (Day 7)
[Structure]

### Email 3: Breakup (Day 21)
[Structure]

### Post-Sequence
[Action for non-responders]
```

### Recommended Scope

[Include Basic + 5 emails + Offer strategy + Feedback request + Success metrics]

### Complete Scope

[Include all + Segment variations + A/B variants + Preference center + List hygiene automation + GDPR compliance]

---

## Output Location

Save sequence to: `./docs/sequences/re-engage-[brand]-[YYYY-MM-DD].md`
