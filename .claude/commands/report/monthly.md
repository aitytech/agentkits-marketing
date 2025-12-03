---
description: Generate client-ready monthly marketing report
argument-hint: [client-or-project]
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

# Previous months (macOS/Linux compatible)
PREV_MONTH_1_NAME=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")
PREV_MONTH_2_NAME=$(date -v-2m +"%B %Y" 2>/dev/null || date -d "-2 months" +"%B %Y")
PREV_MONTH_3_NAME=$(date -v-3m +"%B %Y" 2>/dev/null || date -d "-3 months" +"%B %Y")

# For comparison descriptions
PREV_FOR_CURRENT=$(date -v-1m +"%B %Y" 2>/dev/null || date -d "-1 month" +"%B %Y")
PREV_FOR_MONTH_1=$(date -v-2m +"%B %Y" 2>/dev/null || date -d "-2 months" +"%B %Y")
PREV_FOR_MONTH_2=$(date -v-3m +"%B %Y" 2>/dev/null || date -d "-3 months" +"%B %Y")

echo "Date context loaded: Current=$CURRENT_MONTH_NAME"
```

---

### Step 1: Ask Report Scope

**Question:** "What level of detail do you need for this report?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Executive summary, key metrics only (~2 pages)
- **Recommended** - Full report with channel breakdown (~5 pages)
- **Complete** - Comprehensive with appendix and raw data (~10+ pages)
- **Custom** - I'll select specific sections

---

### Step 2: Ask Time Period (DYNAMIC - use Step 0 values)

**Question:** "Which month should this report cover?"
**Header:** "Month"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Latest ([CURRENT_MONTH_NAME])** - [CURRENT_MONTH_NAME] vs [PREV_FOR_CURRENT]
- **[PREV_MONTH_1_NAME]** - [PREV_MONTH_1_NAME] vs [PREV_FOR_MONTH_1]
- **[PREV_MONTH_2_NAME]** - [PREV_MONTH_2_NAME] vs [PREV_FOR_MONTH_2]
- **Custom month** - Enter specific YYYY-MM

---

### Step 3: Ask Comparison Type

**Question:** "What comparison would you like to include?"
**Header:** "Compare"
**MultiSelect:** true

**Options:**
- **Month-over-Month (MoM)** (Recommended) - Compare to previous month
- **Year-over-Year (YoY)** - Compare to same month last year
- **vs Target** - Compare to set goals/KPIs
- **vs Benchmark** - Compare to industry benchmarks

---

### Step 4: If Custom Scope - Ask Section Focus

**Question:** "Which areas should we focus on?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Performance** - Metrics, funnel, channel breakdown
- **Business Impact** - Revenue, ROI, budget analysis
- **Content & Competitive** - Content performance, market position
- **Strategy** - Recommendations, next month priorities

---

### Step 5: Ask Client/Project (If not provided)

**Question:** "Who is this report for?"
**Header:** "Client"
**MultiSelect:** false

**Options:**
- **Internal team** - For our marketing team review
- **Executive leadership** - Board/C-suite presentation
- **Client report** - External client delivery
- **Stakeholder update** - Cross-functional teams

---

### Step 6: Confirmation

**Display summary:**

```markdown
## Report Configuration

| Parameter | Value |
|-----------|-------|
| Client/Project | [selected] |
| Reporting Period | [selected month] |
| Comparison | [MoM/YoY/Target/Benchmark] |
| Scope | [Basic/Recommended/Complete] |
| Sections | [list if custom] |

**Estimated output:** [X] pages
```

**Question:** "Proceed with this report configuration?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate report** - Start report generation
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Section | MCP Server | Fallback |
|---------|------------|----------|
| Traffic/Funnel | `google-analytics` | ⚠️ NOT AVAILABLE |
| Revenue/Deals | `hubspot` | ⚠️ NOT AVAILABLE |
| Paid Campaigns | `meta-ads` | ⚠️ NOT AVAILABLE |
| SEO/Search | `google-search-console` | ⚠️ NOT AVAILABLE |
| Social | `twitter`, `tiktok` | ⚠️ NOT AVAILABLE |

### Rules
1. **NEVER fill $X or X% placeholders** with fake numbers
2. **Use MCP data only** - if unavailable, show "⚠️ Requires [MCP] configuration"
3. **Mark all sources**: Add ✅ VERIFIED or ⚠️ indicators to each section
4. **Competitive data**: Requires `semrush` MCP or show as unavailable

---

## Workflow

1. Use `researcher` agent to compile:
   - Full month metrics with MoM/YoY
   - Campaign ROI analysis
   - Competitive landscape

2. Use `lead-qualifier` agent to analyze:
   - Funnel performance vs CRM benchmarks
   - Lead quality and velocity
   - Attribution data
   - SLA compliance review

3. Use `copywriter` agent to:
   - Craft executive narrative
   - Present insights clearly
   - Frame strategic recommendations

4. Use `planner` agent for:
   - Next month recommendations
   - Budget optimization suggestions

## Agent Delegation
| Task | Agent | Trigger |
|------|-------|---------|
| Data compilation | `researcher` | Report generation |
| Funnel analysis | `lead-qualifier` | Performance review |
| Competitive intel | `researcher` | Market analysis |
| Executive narrative | `copywriter` | Report writing |
| Strategy recommendations | `planner` | Next month planning |
| Retention metrics | `continuity-specialist` | Customer analysis |

---

## Output Format

### Basic Scope
```markdown
# Monthly Marketing Report
**Client:** [Client Name]
**Period:** [Month Year]
**Date:** [Report Date]

---

## Executive Summary

### The Bottom Line
[1-2 sentences on revenue impact]

### Month Highlights
- [Highlight 1 with metric]
- [Highlight 2 with metric]
- [Highlight 3 with metric]

---

## Key Metrics

| Metric | This Month | vs Last Month | Status |
|--------|------------|---------------|--------|
| Revenue | $X | +X% | 🟢 |
| Leads | X | +X% | 🟢 |
| Customers | X | +X% | 🟡 |

---

## Next Month Focus
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

### Recommended Scope
[Include Basic + Channel Deep Dive + Funnel Performance + Recommendations]

### Complete Scope
[Include all sections + Appendix with raw data + Methodology notes]

---

## Output Location

Save report to: `./docs/reports/[client]/monthly-[YYYY-MM].md`
