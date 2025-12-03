---
description: A/B testing framework for marketing optimization
argument-hint: [test-type] [element-to-test]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `analytics-attribution`, `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of A/B testing plan do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Single test plan with checklist
- **Recommended** - Full plan with variants
- **Complete** - Framework with test library
- **Custom** - I'll specify what I need

---

### Step 2: Ask Test Channel

**Question:** "What channel are you testing?"
**Header:** "Channel"
**MultiSelect:** false

**Options:**
- **Email** - Subject lines, content, CTAs
- **Landing Page** - Headlines, forms, layout
- **Ads** - Creative, copy, targeting
- **Website** - UI elements, flows

---

### Step 3: Ask Test Element

**Question:** "What element will you test?"
**Header:** "Element"
**MultiSelect:** false

**Options:**
- **Headlines/Copy** - Text variations
- **CTA** - Buttons, placement, text
- **Visual** - Images, videos, layout
- **Form/Flow** - Fields, steps, length

---

### Step 4: Ask Statistical Rigor

**Question:** "What level of statistical rigor?"
**Header:** "Rigor"
**MultiSelect:** false

**Options:**
- **Quick** - Directional insights (80% confidence)
- **Standard** - Statistical significance (95%)
- **Rigorous** - High confidence (99%)
- **Enterprise** - Full sample size calculation

---

### Step 5: Confirmation

**Display summary:**

```markdown
## A/B Test Configuration

| Parameter | Value |
|-----------|-------|
| Test Type | [description] |
| Channel | [selected channel] |
| Element | [selected element] |
| Rigor | [selected rigor] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this A/B test plan?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create plan** - Start planning
- **No, change settings** - Go back to modify

---

## Workflow

1. **Hypothesis Development**
   - Define problem statement
   - Create hypothesis
   - Set expected outcomes

2. **Test Design**
   - Create control and variant
   - Calculate sample size
   - Set test duration

3. **Execution Setup**
   - Configure tracking
   - Set up traffic split
   - QA both variants

4. **Analysis & Implementation**
   - Verify statistical significance
   - Document learnings
   - Implement winner

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Hypothesis creation | `brainstormer` | Test ideation |
| Copy variants | `copywriter` | Content testing |
| Analysis | `researcher` | Results review |
| Recommendations | `planner` | Next steps |

---

## Output Format

### Basic Scope

```markdown
## A/B Test Plan: [Test Name]

### Hypothesis
"If we [change X], then [metric Y] will [increase/decrease] because [reason Z]."

### Test Design
| Variant | Description |
|---------|-------------|
| A (Control) | [Current] |
| B (Test) | [Change] |

### Pre-Test Checklist
- [ ] Hypothesis documented
- [ ] Variants created
- [ ] Tracking verified
- [ ] Sample size calculated
```

### Recommended Scope

[Include Basic + Full execution checklists + Results template + Common tests by channel + ICE prioritization]

### Complete Scope

[Include all + Testing rules + Test log template + Learnings library + Sample size calculator + Duration guidelines]

---

## Common Tests by Channel

### Email Tests
| Element | Test Ideas |
|---------|------------|
| Subject line | Length, personalization, emoji, urgency |
| Preview text | Different hooks, CTAs |
| Sender name | Company vs person name |
| Send time | Day of week, time of day |
| CTA button | Color, text, placement |

### Landing Page Tests
| Element | Test Ideas |
|---------|------------|
| Headline | Benefit vs feature, question vs statement |
| Hero image | People vs product, video vs image |
| CTA button | Color, size, text, placement |
| Form length | Fields required, single vs multi-step |
| Social proof | Testimonials, logos, numbers |

### Ad Tests
| Element | Test Ideas |
|---------|------------|
| Headline | Different value props |
| Description | Features vs benefits |
| Image/video | Different visuals |
| CTA | Different action words |

---

## Testing Prioritization (ICE Framework)

| Test Idea | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score |
|-----------|---------------|-------------------|-------------|-----------|
| | | | | |

**ICE Score = (Impact + Confidence + Ease) / 3**

---

## Testing Rules

### Do's
- Test one variable at a time
- Run until statistical significance
- Document everything
- Have clear hypothesis
- Define metrics upfront

### Don'ts
- Don't stop tests early
- Don't peek and decide
- Don't test too many things
- Don't ignore segment data
- Don't forget to implement winners

### Minimum Test Duration
- Email: 24-48 hours (full send)
- Landing page: 2-4 weeks
- Ads: 1-2 weeks minimum
- Website: 2+ weeks

---

## Output Location

Save test plan to: `./docs/testing/ab-[test-name]-[YYYY-MM-DD].md`
