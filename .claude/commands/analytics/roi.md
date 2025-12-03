---
description: Calculate campaign/channel ROI
argument-hint: [campaign-or-channel]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution`, `paid-advertising` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

**Execute BEFORE asking any questions:**

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_MONTH_NAME=$(date +"%B %Y")
CURRENT_QUARTER=$(( ($(date +%m) - 1) / 3 + 1 ))

# Date ranges
DAYS_30_AGO=$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d "-30 days" +%Y-%m-%d)
DAYS_90_AGO=$(date -v-90d +%Y-%m-%d 2>/dev/null || date -d "-90 days" +%Y-%m-%d)
PREV_MONTH=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")

echo "ROI Analysis Date: $CURRENT_DATE"
```

---

### Step 1: Ask Analysis Scope

**Question:** "What level of ROI analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - ROAS and CAC calculation
- **Recommended** - Full ROI with LTV analysis
- **Complete** - Comprehensive with projections
- **Custom** - I'll select specific metrics

---

### Step 2: Ask Analysis Type

**Question:** "What do you want to analyze?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Campaign ROI** - Specific campaign performance
- **Channel ROI** - Marketing channel comparison
- **Overall Marketing ROI** - Total marketing investment
- **Product/Segment ROI** - By product or customer segment

---

### Step 3: Ask Time Period (DYNAMIC - use Step 0 values)

**Question:** "What time period should we analyze?"
**Header:** "Period"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Last 30 days** - [DAYS_30_AGO] to [CURRENT_DATE]
- **Last Quarter (Q[CURRENT_QUARTER])** - [DAYS_90_AGO] to [CURRENT_DATE]
- **Last Month ([PREV_MONTH])** - Full previous month
- **Custom range** - I'll specify dates

---

### Step 4: Ask Metrics Focus

**Question:** "Which metrics should we emphasize?"
**Header:** "Metrics"
**MultiSelect:** true

**Options:**
- **ROAS** - Return on Ad Spend
- **CAC/LTV** - Customer Acquisition Cost & Lifetime Value
- **Payback Period** - Time to recover investment
- **Contribution Margin** - Profit contribution analysis

---

### Step 5: Confirmation

**Display summary:**

```markdown
## ROI Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Subject | [campaign/channel name] |
| Analysis Type | [selected type] |
| Period | [selected dates] |
| Metrics | [selected metrics] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Proceed with ROI analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, calculate ROI** - Start analysis
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required Data Sources
| Data | MCP Server | Required |
|------|------------|----------|
| Ad spend | `meta-ads` | Yes - for paid ROI |
| Revenue | `hubspot` or user input | Yes |
| Traffic | `google-analytics` | For attribution |

### Rules
1. **NEVER fabricate** ROI numbers, ROAS, CAC, or LTV
2. **Require user input** for costs not in MCP (labor, overhead)
3. **If data missing**: List "Required data for calculation: [list]"
4. **Show formulas**: Display calculations transparently

---

## Workflow

1. **Cost Data Compilation**
   - Ad spend
   - Content creation costs
   - Tool/platform costs
   - Labor costs
   - Overhead allocation

2. **Revenue Attribution**
   - Direct revenue
   - Assisted conversions
   - Pipeline value
   - Customer lifetime value

3. **ROAS Calculation**
   - Revenue / Ad Spend
   - By campaign
   - By channel
   - By audience segment

4. **CAC/LTV Analysis**
   - Customer acquisition cost
   - Lifetime value
   - CAC:LTV ratio
   - Payback period

5. **Scenario Modeling**
   - Break-even analysis
   - Scale projections
   - Budget optimization
   - What-if scenarios

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| ROI analysis | `upsell-maximizer` | Revenue calculation |
| Data compilation | `researcher` | Cost gathering |
| Projections | `planner` | Scenario modeling |

---

## Key Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| ROAS | Revenue / Ad Spend | >3x |
| CAC | Total Cost / New Customers | <1/3 LTV |
| LTV | Avg Revenue × Lifetime | >3x CAC |
| Payback | CAC / Monthly Revenue | <12 months |

---

## Output Format

### Basic Scope

```markdown
# ROI Analysis: [Campaign/Channel]
**Period:** [Date Range]

## Key Metrics
| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| ROAS | X | 3x | 🟢/🔴 |
| CAC | $X | $X | 🟢/🔴 |

## Calculation
- Total Spend: $X
- Total Revenue: $X
- ROI: X%
```

### Recommended Scope

[Include Basic + LTV Analysis + Channel Comparison + Optimization Recommendations]

### Complete Scope

[Include all + Projections + Scenario Modeling + Budget Reallocation Plan]

---

## Output Location

Save analysis to: `./docs/analytics/roi/[subject]-roi-[YYYY-MM-DD].md`
