---
description: Generate client-ready weekly marketing report
argument-hint: [client-or-project]
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
CURRENT_WEEK=$(date +%V)
CURRENT_YEAR=$(date +%Y)

# Calculate week boundaries (macOS/Linux compatible)
WEEK_START=$(date -v-$(($(date +%u)-1))d +%Y-%m-%d 2>/dev/null || date -d "last monday" +%Y-%m-%d)
WEEK_END=$(date -v-$(($(date +%u)-1))d -v+6d +%Y-%m-%d 2>/dev/null || date -d "next sunday" +%Y-%m-%d)

# Previous weeks
PREV_WEEK_1=$(date -v-7d +%V 2>/dev/null || date -d "-7 days" +%V)
PREV_WEEK_2=$(date -v-14d +%V 2>/dev/null || date -d "-14 days" +%V)

echo "Current Week: W$CURRENT_WEEK ($WEEK_START to $WEEK_END)"
```

---

### Step 1: Ask Report Scope

**Question:** "What level of detail do you need for this weekly report?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key metrics dashboard only (~2 pages)
- **Recommended** - Full report with insights (~4 pages)
- **Complete** - Comprehensive with raw data (~8+ pages)
- **Custom** - I'll select specific sections

---

### Step 2: Ask Week Period (DYNAMIC - use Step 0 values)

**Question:** "Which week should this report cover?"
**Header:** "Week"
**MultiSelect:** false

**Options (generated from Step 0):**
- **Current Week (W[CURRENT_WEEK])** - [WEEK_START] to [WEEK_END]
- **Last Week (W[PREV_WEEK_1])** - Complete data
- **2 Weeks Ago (W[PREV_WEEK_2])** - Historical comparison
- **Custom week** - Enter specific dates

---

### Step 3: Ask Report Focus

**Question:** "What should we focus on in this report?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Traffic & Acquisition** - Sessions, sources, landing pages
- **Lead Generation** - Leads, MQLs, funnel metrics
- **Campaign Performance** - Ads, email, content metrics
- **Social & Engagement** - Social media, engagement rates

---

### Step 4: Ask Client/Audience

**Question:** "Who is this report for?"
**Header:** "Audience"
**MultiSelect:** false

**Options:**
- **Internal team** - For marketing team review
- **Executive leadership** - C-suite presentation
- **Client report** - External client delivery
- **Stakeholder update** - Cross-functional teams

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Weekly Report Configuration

| Parameter | Value |
|-----------|-------|
| Client/Project | [input or selected] |
| Week | W[week] ([dates]) |
| Comparison | vs Previous Week |
| Focus Areas | [selected areas] |
| Audience | [selected audience] |
| Scope | [Basic/Recommended/Complete] |
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
| Traffic | `google-analytics` | ⚠️ NOT AVAILABLE |
| Search | `google-search-console` | ⚠️ NOT AVAILABLE |
| Campaigns | `meta-ads` | ⚠️ NOT AVAILABLE |
| Leads | `hubspot` | ⚠️ NOT AVAILABLE |
| Social | `twitter`, `tiktok` | ⚠️ NOT AVAILABLE |

### Rules
1. **NEVER fill placeholder X values** with fake numbers
2. **If MCP unavailable**: Replace row with "⚠️ Data requires [MCP] configuration"
3. **Mark all data sources**: Add ✅ or ⚠️ indicators
4. **Request missing data**: Ask user to provide if critical

---

## Workflow

1. Use `researcher` agent to compile metrics:
   - Traffic and acquisition data
   - Campaign performance
   - Lead generation stats
   - Engagement metrics

2. Use `lead-qualifier` agent to analyze:
   - Funnel performance vs CRM benchmarks
   - Lead quality and SLA compliance
   - Conversion trends

3. Use `copywriter` agent to:
   - Write executive summary
   - Highlight wins and insights
   - Frame challenges constructively

4. Format for client presentation

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Data compilation | `researcher` | Report generation |
| Funnel analysis | `lead-qualifier` | Lead metrics |
| Executive summary | `copywriter` | Report narrative |
| Recommendations | `planner` | Next steps |

---

## Output Format

### Basic Scope

```markdown
# Weekly Marketing Report
**Client:** [Client Name]
**Period:** W[X] ([Start Date] - [End Date])

## Key Metrics Dashboard
| Metric | This Week | Last Week | Change | Status |
|--------|-----------|-----------|--------|--------|
| Sessions | X | X | +X% | 🟢 |
| Leads | X | X | +X% | 🟢 |

## Top 3 Highlights
1. [Highlight with metric]
2. [Highlight with metric]
3. [Highlight with metric]

## Next Week Focus
1. [Priority 1]
2. [Priority 2]
```

### Recommended Scope

[Include Basic + Traffic Analysis + Campaign Performance + Lead Generation + Wins & Insights]

### Complete Scope

[Include all sections + Appendix with raw data + Definitions]

---

## Output Location

Save report to: `./docs/reports/[client]/weekly-W[XX]-[YYYY].md`
