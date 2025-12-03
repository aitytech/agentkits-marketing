---
description: Monthly marketing performance review and strategy adjustment
argument-hint: [month-year] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution`, `sales-workflow.md`, `crm-workflow.md` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

**Execute BEFORE asking any questions:**

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_MONTH_NAME=$(date +"%B %Y")
CURRENT_MONTH_NUM=$(date +%Y-%m)

# Previous months (macOS/Linux compatible)
PREV_MONTH_1_NAME=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")
PREV_MONTH_2_NAME=$(date -v-2m +"%B %Y" 2>/dev/null || date -d "-2 months" +"%B %Y")

echo "Current Month: $CURRENT_MONTH_NAME"
```

---

### Step 1: Ask Output Scope

**Question:** "What level of monthly review do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key metrics and quick strategy check
- **Recommended** - Full review with next month planning
- **Complete** - Comprehensive with budget analysis
- **Custom** - I'll select specific sections

---

### Step 2: Ask Month Period (DYNAMIC - use Step 0 values)

**Question:** "Which month are you reviewing?"
**Header:** "Month"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Current ([CURRENT_MONTH_NAME])** - Month in progress
- **[PREV_MONTH_1_NAME]** - Last completed month
- **[PREV_MONTH_2_NAME]** - Two months ago
- **Custom month** - Enter specific YYYY-MM

---

### Step 3: Ask Review Focus

**Question:** "What areas should we emphasize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Revenue & ROI** - Marketing-attributed revenue, CAC, LTV
- **Funnel Performance** - Conversion rates by stage
- **Channel Analysis** - Performance by marketing channel
- **Strategy Planning** - Next month goals and campaigns

---

### Step 4: Ask Comparison Preference

**Question:** "What comparisons do you want?"
**Header:** "Compare"
**MultiSelect:** true

**Options:**
- **MoM** - Month over month comparison
- **YoY** - Year over year comparison
- **Targets** - Actual vs target goals
- **Benchmark** - Industry benchmarks

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Monthly Review Configuration

| Parameter | Value |
|-----------|-------|
| Month | [selected month] |
| Comparisons | [selected comparisons] |
| Scope | [Basic/Recommended/Complete] |
| Focus Areas | [selected areas] |
```

**Question:** "Proceed with monthly review?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate review** - Start monthly review
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### MCP Sources
Use MCP for all metrics; if unavailable show "⚠️ NOT AVAILABLE":
- `google-analytics` - Traffic, funnel, conversions
- `hubspot` - Leads, revenue, CRM data
- `meta-ads` - Ad performance, ROAS
- `google-search-console` - SEO rankings
- `semrush` - Competitive data

---

## Workflow

1. **Metrics Compilation**
   - Full month metrics
   - YoY and MoM comparisons
   - Industry benchmarks

2. **Funnel Analysis**
   - Funnel performance (per CRM workflow benchmarks)
   - Lead quality trends
   - Conversion patterns
   - SLA compliance metrics

3. **Strategy Planning**
   - Next month strategy
   - Budget allocation
   - Campaign planning

4. **Customer Review**
   - Retention metrics
   - Churn analysis
   - Customer health review

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Metrics compilation | `researcher` | Monthly review |
| Funnel analysis | `lead-qualifier` | Performance review |
| Strategy planning | `planner` | Next month prep |
| Retention analysis | `continuity-specialist` | Customer review |
| Upsell opportunities | `upsell-maximizer` | Revenue expansion |

---

## Output Format

### Basic Scope

```markdown
# Monthly Review: [Month Year]

## Key Results
| Metric | Actual | Target | MoM | Status |
|--------|--------|--------|-----|--------|
| Revenue | $X | $X | +X% | 🟢 |
| New Customers | X | X | +X% | 🟢 |

## Top 3 Wins
1. [Win with impact]

## Next Month Goals
1. [SMART Goal 1]
2. [SMART Goal 2]
```

### Recommended Scope

[Include Basic + Funnel Analysis + Channel Performance + Campaign Analysis + Strategy]

### Complete Scope

[Include all + Budget Analysis + Competitive Intel + Detailed Recommendations + YoY comparison]

---

## Output Location

Save review to: `./docs/ops/monthly/[YYYY-MM].md`
