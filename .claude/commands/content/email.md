---
description: Create email copy with sequences
argument-hint: [email-type] [objective]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `email-marketing`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of email content do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Single email with subject variations
- **Recommended** - Email with sequence context
- **Complete** - Full sequence with automation logic
- **Custom** - I'll select specific deliverables

---

### Step 2: Ask Email Type

**Question:** "What type of email are you creating?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Welcome/Onboarding** - New subscriber or customer
- **Nurture/Educational** - Build relationship, provide value
- **Promotional** - Offers, launches, sales
- **Re-engagement** - Win back inactive users

---

### Step 3: Ask Audience Segment

**Question:** "Who is the target audience?"
**Header:** "Audience"
**MultiSelect:** false

**Options:**
- **Cold Leads** - New to your brand
- **Warm Prospects** - Engaged but not converted
- **Customers** - Existing paying customers
- **Churned/Inactive** - Previously engaged, now quiet

---

### Step 4: Ask Tone & Style

**Question:** "What tone should the email have?"
**Header:** "Tone"
**MultiSelect:** false

**Options:**
- **Professional** - B2B, formal, authoritative
- **Conversational** - Friendly, approachable, casual
- **Urgent** - Time-sensitive, action-driven
- **Educational** - Informative, helpful, teaching

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Email Content Configuration

| Parameter | Value |
|-----------|-------|
| Email Type | [selected type] |
| Audience | [selected audience] |
| Tone | [selected tone] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create email content?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create email** - Start email creation
- **No, change settings** - Go back to modify

---

## Email Types Reference

| Type | Purpose | Key Elements |
|------|---------|--------------|
| Welcome | Onboard | Value prop, next steps |
| Nurture | Educate | Pain points, solutions |
| Promotional | Convert | Offer, urgency, CTA |
| Newsletter | Engage | Value, updates, CTAs |
| Transactional | Inform | Clear info, next steps |
| Re-engagement | Win back | New value, incentive |

---

## Workflow

1. **Context Analysis**
   - Email objective
   - Audience segment
   - Funnel stage
   - Prior engagement

2. **Subject Line Creation**
   - Multiple variations (5+)
   - Curiosity/benefit focus
   - Personalization tokens
   - A/B test options

3. **Email Body**
   - Compelling opener
   - Value delivery
   - Social proof
   - Clear CTA

4. **Sequence Design** (if applicable)
   - Email flow
   - Timing
   - Triggers
   - Exit conditions

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Email copy | `email-wizard` | Primary creation |
| Subject lines | `copywriter` | A/B variations |
| Sequence logic | `planner` | Automation design |

---

## Output Format

### Basic Scope

```markdown
## Email: [Name]

**Subject Options:**
1. [Subject line 1]
2. [Subject line 2]
3. [Subject line 3]

**Preview:** [Preview text]

---

[Personalized greeting],

[Hook - address pain/opportunity]

[Body - deliver value]

[CTA button text]

[Sign-off]

---

**Send timing:** [When]
**Segment:** [Who]
**Goal:** [What action]
```

### Recommended Scope

[Include Basic + Sequence context + Follow-up emails outline]

### Complete Scope

[Include all + Full sequence + Automation triggers + Segmentation rules]

---

## Output Location

Save email to: `./docs/content/email/[type]-[audience]-[YYYY-MM-DD].md`
