---
description: Generate marketing performance report
argument-hint: [timeframe]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution` skills.

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
PREV_MONTH=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")

echo "Report Date: $CURRENT_DATE"
```

---

### Step 1: Ask Report Scope

**Question:** "What level of performance report do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key metrics dashboard only
- **Recommended** - Full report with insights
- **Complete** - Comprehensive with raw data
- **Custom** - I'll select specific sections

---

### Step 2: Ask Time Period (DYNAMIC - use Step 0 values)

**Question:** "What time period should this report cover?"
**Header:** "Period"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Last 7 days** - [DAYS_7_AGO] to [CURRENT_DATE]
- **Last 30 days** (Recommended) - [DAYS_30_AGO] to [CURRENT_DATE]
- **Last month ([PREV_MONTH])** - Full previous month
- **Custom range** - I'll specify dates

---

### Step 3: Ask Channels to Include

**Question:** "Which channels should we include?"
**Header:** "Channels"
**MultiSelect:** true

**Options:**
- **All Channels** - Complete marketing overview
- **Paid Media** - PPC, display, social ads
- **Organic & SEO** - Search, content marketing
- **Email & Social** - Email campaigns, social media

---

### Step 4: Ask Comparison Type

**Question:** "What comparison would you like?"
**Header:** "Compare"
**MultiSelect:** false

**Options:**
- **vs Previous Period** (Recommended) - Compare to prior timeframe
- **vs Same Period Last Year** - Year-over-year comparison
- **vs Targets** - Compare to set goals
- **No comparison** - Current period only

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Performance Report Configuration

| Parameter | Value |
|-----------|-------|
| Period | [selected dates] |
| Channels | [selected channels] |
| Comparison | [selected comparison] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Generate performance report?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate report** - Start report generation
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Metric | MCP Server | Fallback |
|--------|------------|----------|
| Traffic | `google-analytics` | ⚠️ NOT AVAILABLE |
| Search | `google-search-console` | ⚠️ NOT AVAILABLE |
| Ads | `meta-ads` | ⚠️ NOT AVAILABLE |
| CRM | `hubspot` | ⚠️ NOT AVAILABLE |

### Rules
1. **NEVER fabricate** metrics - use MCP data only
2. **If MCP unavailable**: Show "⚠️ DATA NOT AVAILABLE" with setup instructions
3. **Cite sources**: Mark all data with ✅ VERIFIED or source indicator
4. **Partial data OK**: Report what's available, clearly mark gaps

---

## Workflow

1. **Data Collection**
   - Traffic metrics
   - Conversion data
   - Engagement metrics
   - Revenue attribution

2. **KPI Calculation**
   - Visitor metrics
   - Lead generation
   - Conversion rates
   - Cost metrics
   - Revenue metrics

3. **Benchmark Comparison**
   - vs Previous period
   - vs Same period last year
   - vs Industry benchmarks
   - vs Targets

4. **Trend Analysis**
   - Growth trends
   - Seasonal patterns
   - Channel performance trends
   - Content performance trends

5. **Executive Summary**
   - Key wins
   - Areas of concern
   - Recommendations
   - Next steps

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Data compilation | `researcher` | Report generation |
| Analysis | `lead-qualifier` | Performance review |
| Insights | `planner` | Recommendations |

---

## Output Format

### Basic Scope

```markdown
# Marketing Performance Report
**Period:** [Date Range]

## Key Metrics
| Metric | Value | vs Prior | Status |
|--------|-------|----------|--------|
| Sessions | X | +X% | 🟢 |
| Leads | X | +X% | 🟢 |
| Conversions | X | +X% | 🟡 |

## Highlights
- [Key insight 1]
- [Key insight 2]
```

### Recommended Scope

[Include Basic + Channel Breakdown + Trend Analysis + Recommendations]

### Complete Scope

[Include all + Raw Data + Visualizations + Detailed Methodology]

---

## Output Location

Save report to: `./docs/analytics/reports/performance-[YYYY-MM-DD].md`
