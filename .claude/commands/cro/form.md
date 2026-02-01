---
description: Optimize lead capture, contact, demo request, or any non-signup form
argument-hint: [url-or-form-description]
---

## Prerequisites

Before running this command, ensure:
- [ ] Form URL or description provided
- [ ] Form type identified (lead, contact, demo, etc.)
- [ ] Current conversion rate known (if available)

---

## Context Loading (Execute First)

Load context in this order:
1. **Project**: Read `./README.md` for product context
2. **Brand**: Read `./docs/brand-guidelines.md` for voice
3. **Form CRO Skill**: Load `.claude/skills/form-cro/SKILL.md`
4. **Form Guide**: Load `.claude/skills/form-cro/references/form-optimization-guide.md`
5. **Benchmarks**: Load `.claude/skills/common/data/benchmark-metrics.yaml`
6. **Prior Analyses**: Check `./docs/cro/` for related work

---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `form-cro`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of form optimization do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick audit with key fixes
- **Recommended** - Full analysis with copy
- **Complete** - Comprehensive with A/B variants
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Form Type

**Question:** "What type of form are you optimizing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Lead Capture** - Email/newsletter signup
- **Contact Form** - Inquiries, messages
- **Demo Request** - Product demos, calls
- **Application** - Jobs, programs, checkout

---

### Step 3: Ask Current Performance

**Question:** "What's your current form conversion rate?"
**Header:** "Rate"
**MultiSelect:** false

**Options:**
- **Unknown** - No tracking in place
- **Low (<10%)** - Needs significant improvement
- **Medium (10-25%)** - Room for optimization
- **High (>25%)** - Fine-tuning for gains

---

### Step 4: Ask Focus Areas

**Question:** "Which areas should we prioritize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Field Reduction** - Remove unnecessary fields
- **Copy Improvement** - Labels, CTAs, microcopy
- **Trust Signals** - Privacy, security messaging
- **UX/Layout** - Design and mobile optimization

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Form CRO Configuration

| Parameter | Value |
|-----------|-------|
| Form | [form description] |
| Type | [selected type] |
| Current Rate | [selected rate] |
| Focus Areas | [selected areas] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Optimize this form?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, optimize form** - Start form optimization
- **No, change settings** - Go back to modify

---

## Scope Boundaries

**This skill covers:**
- Lead capture forms
- Contact forms
- Demo request forms
- Application forms
- Survey forms
- Checkout forms

**For signup/registration forms:** Use `/cro:signup`

---

## Workflow

1. **Form Type Assessment**
   - Form purpose
   - Expected conversion benchmarks
   - Value exchange offered

2. **Field Analysis**
   - Total field count (5-field max rule)
   - Required vs optional
   - Field types and labels
   - Placeholder usage

3. **Friction Audit**
   - Unnecessary fields to remove
   - Multi-step opportunity
   - Auto-fill options
   - Mobile-friendliness

4. **CTA Optimization**
   - Button copy (value-focused)
   - Button visibility
   - Above-fold placement

5. **Trust & Motivation**
   - Privacy messaging
   - Social proof near form
   - Value proposition reminder

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Form analysis | `conversion-optimizer` | Primary task |
| Copy improvements | `copywriter` | Field labels, CTAs |
| Psychology review | `brand-voice-guardian` | Trust messaging |

---

## Output Format

### Basic Scope

```markdown
## Form Audit: [Form Name]

### Quick Wins
- [Issue 1]: [Fix]
- [Issue 2]: [Fix]

### Field Recommendations
- Remove: [fields]
- Keep: [fields]
- Modify: [fields]

### CTA Improvement
Before: [current CTA]
After: [optimized CTA]
```

### Recommended Scope

[Include Basic + Field-by-field analysis + Copy recommendations + Trust elements + Before/after mockup description]

### Complete Scope

[Include all + A/B test variants + Multi-step redesign + Mobile-specific recommendations + Implementation checklist]

---

## Output Location

Save form audit to: `./docs/cro/form-[name]-[YYYY-MM-DD].md`

---

## Pre-Delivery Validation

Before delivering form optimization:

- [ ] **Fields Minimized**: Only essential fields remain
- [ ] **Labels Clear**: No jargon, scannable
- [ ] **CTA Improved**: Value-focused button text
- [ ] **Trust Added**: Privacy messaging included
- [ ] **Mobile Checked**: Works on small screens
- [ ] **Benchmarks Referenced**: Industry standards cited
- [ ] **Fixes Prioritized**: Quick wins identified
- [ ] **A/B Ideas**: Test recommendations provided

---

## Next Steps After Delivery

1. **Prioritize**: Implement quick wins first
2. **Implement**: Make field and copy changes
3. **Test**: Run `/test:ab-setup` for variants
4. **Measure**: Track conversion rate changes
5. **Iterate**: Re-run audit after changes
