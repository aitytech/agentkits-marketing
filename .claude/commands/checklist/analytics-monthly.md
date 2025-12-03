---
description: Monthly analytics review and insights template
argument-hint: [month-year] [client-or-brand]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `analytics-attribution`, `marketing-fundamentals` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of analytics review do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key metrics summary
- **Recommended** - Full analysis with insights
- **Complete** - Comprehensive with action plan
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Review Focus

**Question:** "Which areas should the review prioritize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Traffic & Acquisition** - Sources, channels
- **Conversion & Funnel** - Leads, sales
- **Content & Engagement** - Performance, time
- **Campaigns & Spend** - ROI, efficiency

---

### Step 3: Ask Comparison Period

**Question:** "What comparison period?"
**Header:** "Compare"
**MultiSelect:** false

**Options:**
- **MoM** - Month over month
- **YoY** - Year over year
- **QoQ** - Quarter over quarter
- **Custom** - Specific date range

---

### Step 4: Ask Output Format

**Question:** "How should insights be presented?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **Executive** - High-level summary
- **Detailed** - Full data with analysis
- **Actionable** - Focus on next steps
- **Report** - Client-ready document

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Analytics Review Configuration

| Parameter | Value |
|-----------|-------|
| Month/Period | [description] |
| Focus Areas | [selected focus] |
| Comparison | [selected comparison] |
| Format | [selected format] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Generate this analytics review?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, generate review** - Start analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Data Collection**
   - Export analytics data
   - Pull channel metrics
   - Gather conversion data
   - Compile campaign results

2. **Analysis Framework**
   - Traffic analysis
   - Engagement metrics
   - Conversion funnel
   - Channel performance

3. **Insight Generation**
   - Identify wins and challenges
   - Document learnings
   - Set priorities

4. **Action Planning**
   - Next month priorities
   - Optimization recommendations
   - Resource needs

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Data compilation | `researcher` | Monthly review |
| Funnel analysis | `lead-qualifier` | Conversion review |
| Insights narrative | `copywriter` | Report writing |
| Recommendations | `planner` | Strategy planning |

---

## Output Format

### Basic Scope

```markdown
## Monthly Analytics: [Month Year]

### Traffic Summary
| Source | Sessions | MoM |
|--------|----------|-----|
| Organic | | |
| Paid | | |
| Social | | |

### Conversion Summary
| Metric | Value | Target |
|--------|-------|--------|
| Leads | | |
| Conv Rate | | |

### Top 3 Insights
1. [Insight]
2. [Insight]
3. [Insight]
```

### Recommended Scope

[Include Basic + Full channel breakdown + Content performance + Campaign analysis + Scorecard]

### Complete Scope

[Include all + Detailed metrics tables + Year-over-year + Segment analysis + Action plan + Resource needs]

---

## Analysis Framework

### Traffic Analysis
| Source | Sessions | % Total | MoM | YoY |
|--------|----------|---------|-----|-----|
| Organic Search | | | | |
| Direct | | | | |
| Paid Search | | | | |
| Social | | | | |
| Email | | | | |
| **Total** | | | | |

### Conversion Analysis
| Stage | Volume | Rate | MoM | Benchmark |
|-------|--------|------|-----|-----------|
| Visitors | | - | | |
| Leads | | % | | 3% |
| MQLs | | % | | 20% |
| SQLs | | % | | 30% |
| Customers | | % | | 25% |

### Scorecard
| KPI | Target | Actual | Status | Trend |
|-----|--------|--------|--------|-------|
| Traffic | | | 🟢/🟡/🔴 | ↑/↓/→ |
| Leads | | | 🟢/🟡/🔴 | ↑/↓/→ |
| Revenue | | | 🟢/🟡/🔴 | ↑/↓/→ |

---

## Output Location

Save review to: `./docs/analytics/monthly-[month-year]-[YYYY-MM-DD].md`
