---
description: Analyze conversion funnel performance
argument-hint: [funnel-name-or-url]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution`, `crm-workflow.md` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

**Execute BEFORE asking any questions:**

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_MONTH_NAME=$(date +"%B %Y")

# Date ranges
DAYS_7_AGO=$(date -v-7d +%Y-%m-%d 2>/dev/null || date -d "-7 days" +%Y-%m-%d)
DAYS_30_AGO=$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d "-30 days" +%Y-%m-%d)
DAYS_90_AGO=$(date -v-90d +%Y-%m-%d 2>/dev/null || date -d "-90 days" +%Y-%m-%d)

echo "Analysis Date: $CURRENT_DATE"
```

---

### Step 1: Ask Analysis Scope

**Question:** "What level of funnel analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key conversion rates and drop-offs
- **Recommended** - Full analysis with optimization ideas
- **Complete** - Comprehensive with A/B test hypotheses
- **Custom** - I'll select specific analyses

---

### Step 2: Ask Time Range (DYNAMIC - use Step 0 values)

**Question:** "What time period should we analyze?"
**Header:** "Period"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Last 7 days** - [DAYS_7_AGO] to [CURRENT_DATE]
- **Last 30 days** (Recommended) - [DAYS_30_AGO] to [CURRENT_DATE]
- **Last 90 days** - [DAYS_90_AGO] to [CURRENT_DATE]
- **Custom range** - I'll specify dates

---

### Step 3: Ask Funnel Type

**Question:** "Which funnel type are you analyzing?"
**Header:** "Funnel"
**MultiSelect:** false

**Options:**
- **Marketing Funnel** - Visitor → Lead → MQL → SQL
- **Sales Funnel** - SQL → Opportunity → Customer
- **Product Funnel** - Signup → Activation → Retention
- **Custom Funnel** - I'll define the stages

---

### Step 4: Ask Analysis Focus

**Question:** "What should we focus on?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Drop-off Analysis** - Where users leave
- **Segment Comparison** - By source, device, etc.
- **Optimization Ideas** - Quick wins and improvements
- **Benchmark Comparison** - vs Industry standards

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Funnel Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Funnel | [funnel name or URL] |
| Type | [selected funnel type] |
| Period | [selected date range] |
| Focus | [selected focus areas] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Proceed with funnel analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze funnel** - Start analysis
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Data | MCP Server | Required |
|------|------------|----------|
| Traffic/sessions | `google-analytics` | Yes |
| Conversion events | `google-analytics` | Yes |
| Lead stages | `hubspot` | For CRM funnel |

### Rules
1. **NEVER fabricate** conversion rates or visitor counts
2. **Use MCP data** for all funnel metrics
3. **If unavailable**: Show "⚠️ Funnel data requires Google Analytics MCP"
4. **Benchmarks**: Only use industry benchmarks from cited sources

---

## Workflow

1. **Funnel Mapping**
   - Define funnel stages
   - Identify touchpoints
   - Map user journey
   - Document entry/exit points

2. **Stage Conversion Analysis**
   - Calculate stage-to-stage conversion
   - Identify drop-off points
   - Compare to benchmarks
   - Segment by source/device

3. **Behavior Analysis**
   - Time in funnel
   - Path analysis
   - Friction points
   - Engagement patterns

4. **Drop-off Investigation**
   - High-drop stages
   - User feedback
   - Technical issues
   - Content gaps

5. **Optimization Hypotheses**
   - Quick wins
   - Major improvements
   - Test ideas
   - Priority ranking

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Funnel analysis | `lead-qualifier` | Conversion analysis |
| Optimization ideas | `conversion-optimizer` | Drop-off investigation |
| Test hypotheses | `brainstormer` | A/B test planning |

---

## Output Format

### Basic Scope

```markdown
# Funnel Analysis: [Funnel Name]
**Period:** [Date Range]

## Conversion Overview
| Stage | Visitors | Conv Rate | Drop-off |
|-------|----------|-----------|----------|
| [Stage 1] | X | 100% | - |
| [Stage 2] | X | X% | X% |

## Top Drop-off Points
1. [Stage] - [X%] drop-off - [Likely cause]

## Quick Wins
- [Optimization 1]
- [Optimization 2]
```

### Recommended Scope

[Include Basic + Segment Analysis + Detailed Recommendations + Test Ideas]

### Complete Scope

[Include all + A/B Test Plan + Benchmark Comparison + Timeline]

---

## Output Location

Save analysis to: `./docs/analytics/funnel/[funnel-name]-[YYYY-MM-DD].md`
