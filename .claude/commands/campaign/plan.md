---
description: Create comprehensive marketing campaign plan
argument-hint: [campaign-name]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `content-strategy`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

```bash
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_MONTH=$(date +"%B %Y")
NEXT_MONTH=$(date -v+1m +"%B %Y" 2>/dev/null || date -d "+1 month" +"%B %Y")
NEXT_QUARTER_START=$(date -v+1m +%Y-%m-01 2>/dev/null || date -d "+1 month" +%Y-%m-01)
```

---

### Step 1: Ask Campaign Scope

**Question:** "What level of campaign planning do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick campaign outline, key elements only
- **Recommended** - Full campaign plan with timeline and budget
- **Complete** - Comprehensive plan with all assets and contingencies
- **Custom** - I'll select specific sections

---

### Step 2: Ask Campaign Goal

**Question:** "What is the primary goal of this campaign?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Lead Generation** - Capture new leads and grow pipeline
- **Brand Awareness** - Increase visibility and recognition
- **Product Launch** - Introduce new product or feature
- **Revenue/Retention** - Drive conversions or retain customers

---

### Step 3: Ask Target Audience

**Question:** "Who is the primary target audience?"
**Header:** "Audience"
**MultiSelect:** false

**Options:**
- **New Prospects** - People unfamiliar with our brand
- **Warm Leads** - People who've shown interest
- **Existing Customers** - Current customer base
- **Specific Segment** - I'll define a specific segment

---

### Step 4: Ask Budget Range

**Question:** "What is the approximate budget for this campaign?"
**Header:** "Budget"
**MultiSelect:** false

**Options:**
- **Lean ($0-1K)** - Organic and low-cost tactics only
- **Moderate ($1K-10K)** - Mix of organic and paid
- **Growth ($10K-50K)** - Significant paid investment
- **Enterprise ($50K+)** - Full-scale multi-channel campaign

---

### Step 5: Ask Timeline

**Question:** "What is the campaign timeline?"
**Header:** "Timeline"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Sprint (1-2 weeks)** - Quick tactical campaign
- **Standard (1 month)** - Starting [NEXT_MONTH]
- **Quarter (3 months)** - Starting [NEXT_QUARTER_START]
- **Custom dates** - I'll specify start and end dates

---

### Step 6: Ask Channels (Multi-select)

**Question:** "Which channels should we include?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **Email & Automation** - Email marketing, drip sequences
- **Paid Media** - PPC, display, social ads
- **Organic & Content** - SEO, blog posts, social media
- **Events & PR** - Webinars, partnerships, media outreach

---

### Step 7: Confirmation

**Display summary:**

```markdown
## Campaign Configuration

| Parameter | Value |
|-----------|-------|
| Campaign Name | [name] |
| Goal | [selected goal] |
| Target Audience | [selected audience] |
| Budget | [selected range] |
| Timeline | [selected timeline] |
| Channels | [selected channels] |

**Scope:** [Basic/Recommended/Complete]
```

**Question:** "Proceed with this campaign plan?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create plan** - Generate campaign plan
- **No, change settings** - Go back to modify

---

## Workflow

1. **Analyze Objective**
   - Understand campaign goals and desired outcomes
   - Identify target audience and segments
   - Define success metrics and KPIs

2. **Research Phase**
   - Delegate to `researcher` agent for competitive analysis
   - Analyze market trends and opportunities
   - Review past campaign performance

3. **Strategy Development**
   - Define funnel stages and touchpoints
   - Determine channel mix and allocation
   - Create messaging framework

4. **Content Requirements**
   - List all content assets needed
   - Define content formats and specifications
   - Create content briefs

5. **Timeline & Budget**
   - Create milestone-based timeline
   - Allocate budget across channels
   - Identify dependencies and risks

---

## Output Format

### Basic Scope

```markdown
# Campaign Plan: [Name]

## Overview
| Element | Detail |
|---------|--------|
| Goal | [Goal] |
| Audience | [Audience] |
| Budget | [Budget] |
| Timeline | [Start] - [End] |

## Key Messages
1. [Message 1]
2. [Message 2]
3. [Message 3]

## Channel Strategy
| Channel | Tactic | Budget % |
|---------|--------|----------|
| [Channel] | [Tactic] | X% |

## Success Metrics
| Metric | Target |
|--------|--------|
| [Metric] | [Target] |

## Next Steps
1. [Action item]
2. [Action item]
```

### Recommended Scope

[Include Basic + Content Calendar + Detailed Tactics + Risk Mitigation]

### Complete Scope

[Include all + Asset Specifications + Contingency Plans + Approval Workflow]

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Competitive research | `researcher` | Market analysis |
| Content planning | `copywriter` | Asset creation |
| Timeline creation | `planner` | Schedule development |
| Channel strategy | `attraction-specialist` | Distribution planning |

---

## Output Location

Save plan to: `./plans/campaigns/[campaign-name]/campaign-plan.md`
