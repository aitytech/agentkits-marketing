---
description: Create or optimize popups, modals, overlays for conversion
argument-hint: [goal-or-current-popup]
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
