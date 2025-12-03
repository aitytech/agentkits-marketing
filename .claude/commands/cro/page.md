---
description: Optimize marketing page for conversions (homepage, landing, pricing, feature pages)
argument-hint: [url-or-description]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `page-cro`, `marketing-psychology`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Analysis Scope

**Question:** "What level of CRO analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick audit with top 5 issues (~10 min review)
- **Recommended** - Full CRO analysis with prioritized fixes
- **Complete** - Comprehensive audit with A/B test plan
- **Custom** - I'll select specific areas to analyze

---

### Step 2: Ask Page Type

**Question:** "What type of page are you optimizing?"
**Header:** "Page Type"
**MultiSelect:** false

**Options:**
- **Homepage** - Main website landing page
- **Landing Page** - Campaign or product-specific page
- **Pricing Page** - Plans, pricing, comparison
- **Feature/Other** - Product features or other page type

---

### Step 3: Ask Primary Conversion Goal

**Question:** "What is the main action you want visitors to take?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Signup/Trial** - Free trial or account creation
- **Demo/Sales** - Schedule demo or sales call
- **Purchase** - Direct purchase or checkout
- **Lead Capture** - Email subscribe, download, form fill

---

### Step 4: Ask Traffic Context

**Question:** "Where does most traffic to this page come from?"
**Header:** "Traffic"
**MultiSelect:** true

**Options:**
- **Organic Search** - SEO traffic from Google
- **Paid Ads** - PPC, display, social ads
- **Social & Email** - Social media, email campaigns
- **Direct/Referral** - Direct visits or partner links

---

### Step 5: Ask Current Conversion Rate (If Known)

**Question:** "Do you know your current conversion rate?"
**Header:** "Baseline"
**MultiSelect:** false

**Options:**
- **Yes, I have data** - I'll share current conversion metrics
- **No baseline data** - First optimization, no existing data
- **Use industry benchmark** - Compare against typical rates

---

### Step 6: Confirmation

**Display summary:**

```markdown
## CRO Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Page URL/Description | [input] |
| Page Type | [selected type] |
| Conversion Goal | [selected goal] |
| Traffic Sources | [selected sources] |
| Baseline | [known/unknown] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Proceed with this CRO analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze page** - Start CRO analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Initial Assessment**
   - Identify page type and conversion goal
   - Analyze traffic sources
   - Establish baseline metrics

2. **CRO Analysis**
   - Value proposition clarity check
   - Headline effectiveness review
   - CTA placement and copy audit
   - Trust signals assessment

3. **Issue Prioritization**
   - Score issues by impact
   - Identify quick wins
   - Plan high-impact changes

4. **Recommendations**
   - Generate copy alternatives
   - Create A/B test hypotheses
   - Prioritize implementation roadmap

---

## CRO Analysis Framework

### 1. Initial Assessment
- **Page Type**: Homepage | Landing Page | Pricing | Feature | Blog
- **Primary Conversion Goal**: Signup | Demo | Purchase | Subscribe | Download
- **Traffic Context**: Organic | Paid | Social | Email | Direct

### 2. CRO Analysis (Order of Impact)

1. **Value Proposition Clarity** (Highest Impact)
   - 5-second test: Can visitor understand what & why?
   - Benefit vs feature focus
   - Customer language vs company jargon

2. **Headline Effectiveness**
   - Core value communicated?
   - Specificity and credibility
   - Traffic source match

3. **CTA Placement & Copy**
   - One clear primary action?
   - Above fold visibility?
   - Value-driven button copy (not "Submit")

4. **Visual Hierarchy & Scannability**
   - Information hierarchy clear?
   - White space adequate?
   - Images support message?

5. **Trust Signals & Social Proof**
   - Customer logos, testimonials
   - Case studies with numbers
   - Security badges (where relevant)

6. **Objection Handling**
   - Price/value concerns addressed
   - FAQ section present?
   - Guarantees visible?

7. **Friction Points**
   - Form field count
   - Unclear next steps
   - Mobile experience

---

## Output Format

### Basic Scope

```markdown
# CRO Quick Audit: [Page Name]

## Top 5 Issues (Priority Order)
1. [Issue] - [Impact: High/Med/Low] - [Fix]
2. [Issue] - [Impact: High/Med/Low] - [Fix]
3. [Issue] - [Impact: High/Med/Low] - [Fix]
4. [Issue] - [Impact: High/Med/Low] - [Fix]
5. [Issue] - [Impact: High/Med/Low] - [Fix]

## Quick Wins
- [Easy fix 1]
- [Easy fix 2]

## Next Steps
1. [Action item]
```

### Recommended Scope

```markdown
# CRO Analysis: [Page Name]

## Executive Summary
[1-2 sentence overview of conversion issues]

## Conversion Scorecard
| Element | Score | Status |
|---------|-------|--------|
| Value Proposition | X/10 | 🔴/🟡/🟢 |
| Headline | X/10 | 🔴/🟡/🟢 |
| CTA | X/10 | 🔴/🟡/🟢 |
| Trust Signals | X/10 | 🔴/🟡/🟢 |
| Friction | X/10 | 🔴/🟡/🟢 |

## Quick Wins (Implement Now)
[Easy changes with immediate impact]

## High-Impact Changes (Prioritize)
[Bigger changes requiring more effort]

## Copy Alternatives
[2-3 versions for key elements with rationale]

## Test Ideas
[Hypotheses worth A/B testing]
```

### Complete Scope

[Include Recommended + Detailed A/B Test Plan + Competitor Comparison + Heatmap Recommendations]

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| CRO analysis | `conversion-optimizer` | Primary task |
| Copy alternatives | `copywriter` | Content optimization |
| Psychology review | `brainstormer` | Persuasion elements |

---

## Output Location

Save analysis to: `./docs/cro/[page-name]-analysis.md`
