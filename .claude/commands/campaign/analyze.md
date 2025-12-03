---
description: Analyze campaign performance and provide insights
argument-hint: [campaign-name-or-url]
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

# Date ranges
DAYS_7_AGO=$(date -v-7d +%Y-%m-%d 2>/dev/null || date -d "-7 days" +%Y-%m-%d)
DAYS_30_AGO=$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d "-30 days" +%Y-%m-%d)
DAYS_90_AGO=$(date -v-90d +%Y-%m-%d 2>/dev/null || date -d "-90 days" +%Y-%m-%d)

echo "Campaign Analysis Date: $CURRENT_DATE"
```

---

### Step 1: Ask Analysis Scope

**Question:** "What level of campaign analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key metrics and quick insights
- **Recommended** - Full analysis with optimizations
- **Complete** - Comprehensive with forecasting
- **Custom** - I'll select specific analyses

---

### Step 2: Ask Time Period (DYNAMIC - use Step 0 values)

**Question:** "What time period should we analyze?"
**Header:** "Period"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Last 7 days** - [DAYS_7_AGO] to [CURRENT_DATE]
- **Last 30 days** (Recommended) - [DAYS_30_AGO] to [CURRENT_DATE]
- **Last 90 days** - [DAYS_90_AGO] to [CURRENT_DATE]
- **Custom range** - I'll specify dates

---

### Step 3: Ask Campaign Type

**Question:** "What type of campaign are you analyzing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Paid Media** - PPC, display, social ads
- **Email Campaign** - Email sequences, newsletters
- **Content Campaign** - Blog, SEO, content marketing
- **Multi-Channel** - Combined channel analysis

---

### Step 4: Ask Analysis Focus

**Question:** "What metrics should we emphasize?"
**Header:** "Metrics"
**MultiSelect:** true

**Options:**
- **Performance** - CTR, conversions, engagement
- **Revenue & ROI** - ROAS, CPA, revenue attribution
- **Audience Insights** - Segments, demographics, behavior
- **Optimization** - A/B results, improvement opportunities

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Campaign Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Campaign | [campaign name or URL] |
| Type | [selected campaign type] |
| Period | [selected date range] |
| Metrics Focus | [selected metrics] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Proceed with campaign analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze campaign** - Start analysis
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Data | MCP Server | Required |
|------|------------|----------|
| Campaign metrics | `meta-ads` | For paid campaigns |
| Traffic/conversions | `google-analytics` | For attribution |
| Revenue | `hubspot` | For ROI calculation |

### Rules
1. **NEVER fabricate** campaign performance numbers
2. **Use MCP data** for all metrics
3. **If unavailable**: Show "⚠️ Campaign data requires [MCP] configuration"

---

## Workflow

1. **Data Gathering**
   - Collect performance metrics
   - Pull conversion data
   - Gather engagement statistics

2. **Benchmark Comparison**
   - Compare against industry benchmarks
   - Analyze vs historical performance
   - Evaluate against targets

3. **Performance Analysis**
   - Identify top-performing elements
   - Analyze underperforming areas
   - Segment performance by channel

4. **ROI Calculation**
   - Calculate cost per acquisition
   - Compute ROAS by channel
   - Assess lifetime value impact

5. **Optimization Recommendations**
   - Identify quick wins
   - Recommend budget reallocations
   - Suggest creative improvements

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Data compilation | `researcher` | Metrics gathering |
| ROI analysis | `upsell-maximizer` | Revenue attribution |
| Optimization ideas | `conversion-optimizer` | Performance gaps |
| Strategic planning | `planner` | Recommendations |

---

## Output Format

### Basic Scope

```markdown
# Campaign Analysis: [Campaign Name]
**Period:** [Date Range]

## Key Metrics
| Metric | Value | vs Target | Status |
|--------|-------|-----------|--------|
| Impressions | X | +X% | 🟢 |
| CTR | X% | +X% | 🟢 |
| Conversions | X | -X% | 🔴 |

## Top Insights
1. [Insight with data]
2. [Insight with data]

## Quick Wins
- [Optimization 1]
- [Optimization 2]
```

### Recommended Scope

[Include Basic + Channel Breakdown + Audience Analysis + Detailed Recommendations]

### Complete Scope

[Include all + Forecasting + Budget Reallocation + A/B Test Plan]

---

## Output Location

Save analysis to: `./docs/campaigns/analysis/[campaign-name]-[YYYY-MM-DD].md`
