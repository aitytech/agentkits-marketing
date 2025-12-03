---
description: Optimize post-signup onboarding, activation, and first-run experience
argument-hint: [product-or-flow-description]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `onboarding-cro`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of onboarding optimization do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick audit with key fixes
- **Recommended** - Full analysis with redesign
- **Complete** - Comprehensive with metrics framework
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Product Type

**Question:** "What type of product are you optimizing?"
**Header:** "Product"
**MultiSelect:** false

**Options:**
- **SaaS Platform** - Complex, feature-rich
- **Mobile App** - Touch-first experience
- **Simple Tool** - Single-purpose utility
- **Marketplace** - Two-sided platform

---

### Step 3: Ask Activation Metric

**Question:** "What defines an 'activated' user for you?"
**Header:** "Metric"
**MultiSelect:** false

**Options:**
- **Key Action** - Completed core feature use
- **Setup Complete** - Finished configuration
- **Time-Based** - Active after X days
- **Unknown** - Need help defining

---

### Step 4: Ask Current State

**Question:** "What's your current activation rate?"
**Header:** "Rate"
**MultiSelect:** false

**Options:**
- **Unknown** - Not tracking activation
- **Low (<20%)** - Significant drop-off
- **Medium (20-40%)** - Room for improvement
- **High (>40%)** - Fine-tuning needed

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Onboarding CRO Configuration

| Parameter | Value |
|-----------|-------|
| Product | [product description] |
| Type | [selected type] |
| Activation Metric | [selected metric] |
| Current Rate | [selected rate] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Optimize onboarding?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, optimize onboarding** - Start analysis
- **No, change settings** - Go back to modify

---

## Scope Boundaries

**This skill covers:**
- Post-signup onboarding flows
- User activation sequences
- First-run experience (FRE)
- Empty states
- Onboarding checklists
- Aha moment optimization

**For signup/registration flows:** Use `/cro:signup`
**For email sequences:** Use `/sequence:welcome`

---

## Onboarding Patterns

| Pattern | Best For | Key Element |
|---------|----------|-------------|
| Setup wizard | Complex products | Guided configuration |
| Checklist | Feature-rich apps | Progressive revelation |
| Interactive tour | UI-heavy products | Contextual learning |
| Template gallery | Creative tools | Instant value |
| Sample project | Project tools | Immediate familiarity |

---

## Workflow

1. **Activation Definition**
   - Define "Aha moment"
   - Key actions for activation
   - Time-to-value metrics
   - Drop-off points

2. **Onboarding Structure**
   - Welcome experience quality
   - Progressive disclosure
   - Task completion flow
   - Skip/defer options

3. **Empty State Design**
   - Value demonstration
   - Quick-start templates
   - Sample data options
   - Next step clarity

4. **Engagement Mechanisms**
   - Progress indicators
   - Checklists effectiveness
   - Tooltips/tours
   - Gamification elements

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Onboarding analysis | `conversion-optimizer` | Primary task |
| Email sequences | `email-wizard` | Onboarding emails |
| UX copy | `copywriter` | Microcopy, tooltips |

---

## Output Format

### Basic Scope

```markdown
## Onboarding Audit: [Product Name]

### Activation Definition
- Aha moment: [definition]
- Key actions: [actions]

### Quick Wins
- [Issue 1]: [Fix]
- [Issue 2]: [Fix]

### Flow Recommendations
- Step 1: [recommendation]
- Step 2: [recommendation]
```

### Recommended Scope

[Include Basic + Flow redesign + Empty state designs + Progress mechanics + Success metrics]

### Complete Scope

[Include all + Email sequence + Re-engagement triggers + Celebration moments + A/B test plan + Implementation roadmap]

---

## Output Location

Save onboarding audit to: `./docs/cro/onboarding-[product]-[YYYY-MM-DD].md`
