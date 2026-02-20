---
description: Create or optimize popups, modals, overlays for conversion
version: "1.0.0"
brand: AgentKits Marketing by AityTech
argument-hint: [goal-or-current-popup]
---

## Prerequisites

Before running this command, ensure:
- [ ] Popup goal is clear (lead capture, promotion, etc.)
- [ ] Target audience identified
- [ ] Existing popup (if optimizing) accessible

---

## Context Loading (Execute First)

Load context in this order:
1. **Project**: Read `./README.md` for product context
2. **Brand**: Read `./docs/brand-guidelines.md` for voice
3. **Popup Skill**: Load `.claude/skills/popup-cro/SKILL.md`
4. **Popup Guide**: Load `.claude/skills/popup-cro/references/popup-best-practices.md`
5. **Psychology**: Load `.claude/skills/marketing-psychology/SKILL.md`
6. **Prior Work**: Check `./docs/cro/` for existing popup analyses

---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `popup-cro`, `marketing-psychology`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of popup optimization do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick audit or simple popup
- **Recommended** - Full optimization with copy
- **Complete** - Multiple variants with strategy
- **Custom** - I'll specify what I need

---

### Step 2: Ask Popup Type

**Question:** "What type of popup are you working with?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Exit Intent** - Triggered on leave
- **Time-Delayed** - Appears after X seconds
- **Scroll-Triggered** - At scroll depth
- **Click-Triggered** - On button/link click

---

### Step 3: Ask Popup Goal

**Question:** "What's the primary goal of this popup?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Lead Capture** - Email/newsletter signup
- **Promotion** - Discount, offer, sale
- **Announcement** - News, updates, events
- **Engagement** - Survey, feedback, content

---

### Step 4: Ask Target Audience

**Question:** "Who should see this popup?"
**Header:** "Target"
**MultiSelect:** false

**Options:**
- **All Visitors** - Site-wide display
- **New Visitors** - First-time only
- **Returning Visitors** - Repeat visitors
- **Specific Pages** - Page-specific targeting

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Popup CRO Configuration

| Parameter | Value |
|-----------|-------|
| Context | [popup description] |
| Type | [selected type] |
| Goal | [selected goal] |
| Target | [selected target] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create/optimize this popup?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, optimize popup** - Start popup work
- **No, change settings** - Go back to modify

---

## Popup Types Reference

| Type | Best For | Trigger |
|------|----------|---------|
| Exit Intent | Lead capture | Mouse leaves viewport |
| Time-Delayed | Engaged visitors | 30-60 seconds on page |
| Scroll-Triggered | Content engagement | 50-70% scroll depth |
| Click-Triggered | Specific CTAs | User action |
| Welcome Mat | High-value offers | Page load |
| Slide-In | Subtle promotion | Scroll/time |
| Top/Bottom Bar | Announcements | Always visible |

---

## Workflow

1. **Strategy Assessment**
   - Popup goal clarity
   - Target audience segment
   - Trigger appropriateness
   - Frequency rules

2. **Copy Optimization**
   - Headline clarity and urgency
   - Value proposition
   - CTA button copy
   - Form field count (minimum viable)

3. **Design Review**
   - Mobile experience
   - Close button visibility
   - Brand alignment
   - Distraction level

4. **Timing & Targeting**
   - Trigger timing
   - Page-specific vs site-wide
   - New vs returning visitor rules
   - Exit-intent sensitivity

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Popup analysis | `conversion-optimizer` | Primary task |
| Popup copy | `copywriter` | Headlines, CTAs |
| A/B variants | `brainstormer` | Test ideas |

---

## Output Format

### Basic Scope

```markdown
## Popup: [Goal/Name]

### Headline
[Attention-grabbing headline]

### Body Copy
[Brief value proposition]

### CTA
[Button text]

### Trigger Rules
- Trigger: [type]
- Delay: [timing]
- Frequency: [cap]
```

### Recommended Scope

[Include Basic + 3 headline variants + Design recommendations + Targeting rules + Form optimization]

### Complete Scope

[Include all + A/B test plan + Mobile variants + Success metrics + Sample size requirements + Implementation code]

---

## Output Location

Save popup to: `./docs/cro/popup-[goal]-[YYYY-MM-DD].md`

---

## Pre-Delivery Validation

Before delivering popup:

- [ ] **Headline Compelling**: Stops the scroll
- [ ] **Value Clear**: Offer is obvious
- [ ] **CTA Strong**: Action verb + benefit
- [ ] **Timing Appropriate**: Trigger makes sense
- [ ] **Frequency Set**: Not annoying visitors
- [ ] **Mobile Tested**: Works on small screens
- [ ] **Close Button Visible**: Easy to dismiss
- [ ] **Variants Provided**: 2-3 headline options

---

## Next Steps After Delivery

1. **Design**: Create popup visual
2. **Build**: Implement in popup tool
3. **Target**: Set audience and trigger rules
4. **Test**: A/B test headline variants
5. **Measure**: Track conversion rate
6. **Iterate**: Optimize based on data
