---
description: Generate personalized outreach sequence
argument-hint: [prospect-info] [sequence-type]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `email-marketing`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of outreach sequence do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - 3-touch sequence with templates
- **Recommended** - Full sequence with personalization
- **Complete** - Multi-channel with A/B variants
- **Custom** - I'll specify parameters

---

### Step 2: Ask Sequence Type

**Question:** "What's the prospect's current engagement level?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Cold** - No prior engagement (7 touches)
- **Warm** - Some engagement (5 touches)
- **Hot** - High intent shown (3 touches)
- **Re-engage** - Gone quiet after interest

---

### Step 3: Ask Channels

**Question:** "Which outreach channels should we use?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **Email** - Primary email outreach
- **LinkedIn** - Connection and messages
- **Phone** - Call scripts
- **Video** - Personalized video messages

---

### Step 4: Ask Personalization Level

**Question:** "How personalized should the outreach be?"
**Header:** "Personal"
**MultiSelect:** false

**Options:**
- **Template** - Standard templates with merge fields
- **Semi-Personal** - Industry/role customization
- **Highly Personal** - Individual research-based
- **Account-Based** - Full ABM approach

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Outreach Sequence Configuration

| Parameter | Value |
|-----------|-------|
| Prospect | [prospect info] |
| Sequence Type | [selected type] |
| Channels | [selected channels] |
| Personalization | [selected level] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this outreach sequence?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create sequence** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Prospect Research**
   - Recent company news
   - LinkedIn activity
   - Pain points in their industry
   - Mutual connections

2. **Sequence Design**
   - Touch cadence and timing
   - Channel mix strategy
   - Escalation points

3. **Content Creation**
   - Personalized subject lines
   - Value-focused copy
   - Strategic follow-ups
   - Breakup message

4. **Optimization**
   - Hook refinement
   - CTA clarity
   - Personalization tokens

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Prospect research | `researcher` | Data gathering |
| Sequence creation | `sales-enabler` | Primary task |
| Copy optimization | `copywriter` | Email refinement |

---

## Output Format

### Basic Scope

```markdown
## Outreach Sequence: [Prospect]

### Sequence Type: [Cold/Warm/Hot]

### Day 1: Initial Email
**Subject:** [Subject line]
**Body:** [Email copy]

### Day 3: Follow-up
**Subject:** [Subject line]
**Body:** [Email copy]

### Day 7: Breakup
**Subject:** [Subject line]
**Body:** [Email copy]
```

### Recommended Scope

[Include Basic + Full prospect research + All touchpoints + LinkedIn scripts + Personalization hooks]

### Complete Scope

[Include all + A/B subject lines + Phone scripts + Video scripts + Objection handling + CRM automation notes]

---

## Output Location

Save outreach to: `./docs/sales/outreach-[prospect]-[YYYY-MM-DD].md`
