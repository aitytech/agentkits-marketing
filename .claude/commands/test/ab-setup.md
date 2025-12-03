---
description: Plan and design A/B test or experiment
argument-hint: [hypothesis-or-element] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `ab-test-setup`, `marketing-psychology`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of A/B test planning do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick** - Simple test plan
- **Standard** - Full test design (Recommended)
- **Complete** - Comprehensive with analysis plan
- **Custom** - I'll specify requirements

---

### Step 2: Ask Test Type

**Question:** "What type of element are you testing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **CTA/Button** - Call-to-action copy or design
- **Headline** - Headlines, value props
- **Layout** - Page structure, flow
- **Form** - Fields, length, steps

---

### Step 3: Ask Test Goal

**Question:** "What's your primary goal?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Conversion** - Increase signups, purchases
- **Engagement** - CTR, time on page
- **Revenue** - ARPU, order value
- **Retention** - Return visits, churn

---

### Step 4: Ask Traffic Level

**Question:** "What's your current traffic level?"
**Header:** "Traffic"
**MultiSelect:** false

**Options:**
- **Low** - Under 1K visitors/week
- **Medium** - 1K-10K visitors/week
- **High** - 10K-100K visitors/week
- **Very High** - 100K+ visitors/week

---

### Step 5: Confirmation

**Display summary:**

```markdown
## A/B Test Configuration

| Parameter | Value |
|-----------|-------|
| Test Element | [selected type] |
| Goal | [selected goal] |
| Traffic Level | [selected traffic] |
| Scope | [Quick/Standard/Complete] |
```

**Question:** "Create this A/B test plan?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create plan** - Generate test design
- **No, change settings** - Go back to modify

---

## Workflow

1. **Hypothesis Formation**
   - Create if-then-because statement
   - Identify variable to test
   - Define expected outcome

2. **Test Design**
   - Define control (A) and variant (B)
   - Set primary and secondary metrics
   - Calculate sample size needed

3. **Implementation Plan**
   - Technical requirements
   - Tracking setup
   - QA checklist

4. **Analysis Framework**
   - Define success criteria
   - Plan for edge cases
   - Document next steps

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Test design | `conversion-optimizer` | Primary task |
| Psychology review | `brainstormer` | Behavioral insights |
| Technical setup | `researcher` | Implementation guidance |
| Analytics setup | `mcp-manager` | Tracking configuration |

---

## Hypothesis Framework

**Format**: "If we [change], then [metric] will [direction] because [reason]"

**Example**:
"If we change the CTA from 'Sign Up' to 'Start Free Trial', then signup rate will increase by 15% because it reduces perceived commitment."

---

## Sample Size Guidelines

| Baseline Rate | 10% Lift | 20% Lift | 30% Lift |
|---------------|----------|----------|----------|
| 2% | 19,000 | 4,800 | 2,200 |
| 5% | 7,700 | 1,900 | 900 |
| 10% | 3,900 | 1,000 | 450 |
| 20% | 2,000 | 500 | 230 |

*Per variation, 95% significance, 80% power*

---

## Output Format

### Quick Scope

```markdown
## A/B Test: [Element]

**Hypothesis**: [If-then-because statement]

| Element | Value |
|---------|-------|
| Control (A) | [Current version] |
| Variant (B) | [New version] |
| Metric | [Primary metric] |
| Duration | [Estimated days] |
```

### Standard Scope

```markdown
## A/B Test Plan: [Element]

**Hypothesis**: [Detailed if-then-because statement]

### Test Design
| Element | Value |
|---------|-------|
| Control (A) | [Description] |
| Variant (B) | [Description] |
| Primary Metric | [Metric name] |
| Secondary Metrics | [List] |
| Traffic Split | 50/50 |
| Sample Size | [Per variation] |
| Duration | [Estimated days] |

### Success Criteria
- Statistical significance: 95%
- Minimum detectable effect: [X%]

### Implementation Checklist
- [ ] Tracking setup
- [ ] QA verification
- [ ] Launch approval
```

### Complete Scope

[Include Standard + Full hypothesis analysis + Detailed sample size calculation + Segmentation plan + Analysis framework + Win/loss playbooks]

---

## What to Test (Priority)

### High Impact
- Headlines and value propositions
- CTA copy and placement
- Form length and fields
- Pricing presentation

### Medium Impact
- Image choices
- Button design
- Page layout
- Copy length

### Low Priority
- Minor copy tweaks
- Font changes
- Icon changes

---

## Output Location

Save test plan to: `./docs/tests/ab-test-[element]-[YYYY-MM-DD].md`
