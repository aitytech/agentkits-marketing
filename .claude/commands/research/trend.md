---
description: Analyze industry/market trends
argument-hint: [industry-or-topic]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md` and `./.claude/components/date-helpers.md`

---

## Interactive Parameter Collection

### Step 0: Get Current Date (MANDATORY)

**Execute BEFORE asking any questions:**

```bash
# Get current date info
CURRENT_DATE=$(date +%Y-%m-%d)
CURRENT_YEAR=$(date +%Y)
CURRENT_MONTH_NAME=$(date +"%B %Y")

# Date ranges for trend analysis
DAYS_30_AGO=$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d "-30 days" +%Y-%m-%d)
DAYS_90_AGO=$(date -v-90d +%Y-%m-%d 2>/dev/null || date -d "-90 days" +%Y-%m-%d)
PREV_YEAR=$(date -v-1y +%Y 2>/dev/null || date -d "-1 year" +%Y)

echo "Trend Analysis Date: $CURRENT_DATE"
```

---

### Step 1: Ask Analysis Scope

**Question:** "What level of trend analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Key trends and quick assessment
- **Recommended** - Full analysis with actionable insights
- **Complete** - Comprehensive with strategic roadmap
- **Custom** - I'll select specific analyses

---

### Step 2: Ask Time Horizon

**Question:** "What time horizon should we analyze?"
**Header:** "Horizon"
**MultiSelect:** false

**Options:**
- **Short-term** - Next 6 months, tactical trends
- **Medium-term** (Recommended) - 1-2 years, strategic planning
- **Long-term** - 3-5 years, visionary outlook
- **Custom period** - I'll specify timeframe

---

### Step 3: Ask Trend Focus

**Question:** "What aspects should we focus on?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Technology & Innovation** - Emerging tech, disruptions
- **Consumer Behavior** - Preferences, buying patterns
- **Market & Competition** - Industry shifts, new entrants
- **Regulatory & Economic** - Policy changes, macro trends

---

### Step 4: Ask Data Sources

**Question:** "Which data sources should we prioritize?"
**Header:** "Sources"
**MultiSelect:** false

**Options:**
- **All Sources** (Recommended) - Comprehensive research
- **Industry Reports** - Analyst reports, research firms
- **Social & Search** - Social listening, search trends
- **Expert Sources** - Thought leaders, publications

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Trend Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Topic | [industry or topic] |
| Time Horizon | [selected horizon] |
| Focus Areas | [selected focus] |
| Data Sources | [selected sources] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Proceed with trend analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze trends** - Start analysis
- **No, change settings** - Go back to modify

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Data Sources
- **WebSearch**: Primary source - cite all URLs
- **NEVER fabricate** trend statistics or adoption rates
- **All claims must have citations** with source URLs
- **Mark confidence level**: High (multiple sources) / Medium / Low

---

## Workflow

1. **Trend Sources**
   - Industry publications
   - Research reports
   - Social listening
   - Expert opinions
   - Patent/technology filings

2. **Data Collection**
   - Quantitative signals
   - Qualitative insights
   - Search trends
   - Social volume

3. **Pattern Analysis**
   - Trend trajectory
   - Adoption curve stage
   - Geographic variation
   - Segment differences

4. **Trajectory Prediction**
   - Short-term outlook
   - Long-term potential
   - Risk factors
   - Accelerators/inhibitors

5. **Implication Assessment**
   - Business impact
   - Opportunity size
   - Required actions
   - Timeline

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Primary research | `researcher` | Data collection |
| Strategic implications | `planner` | Impact assessment |
| Competitive context | `attraction-specialist` | Market positioning |

---

## Trend Framework

| Trend | Stage | Impact | Confidence | Action |
|-------|-------|--------|------------|--------|
| [Trend 1] | Early | High | Medium | Monitor |
| [Trend 2] | Growth | High | High | Invest |
| [Trend 3] | Mature | Medium | High | Optimize |

## Adoption Stages
- **Emerging**: <5% adoption, high uncertainty
- **Early**: 5-15% adoption, gaining traction
- **Growth**: 15-50% adoption, mainstream emerging
- **Mature**: >50% adoption, table stakes

---

## Output Format

### Basic Scope

```markdown
# Trend Analysis: [Topic/Industry]
**Date:** [CURRENT_DATE]
**Horizon:** [Time Period]

## Key Trends
| Trend | Stage | Impact | Confidence |
|-------|-------|--------|------------|
| [Trend 1] | [Stage] | [H/M/L] | [H/M/L] |

## Quick Take
- [Key insight 1]
- [Key insight 2]

## Sources
- [Citation 1]
```

### Recommended Scope

[Include Basic + Detailed Analysis + Strategic Implications + Action Items]

### Complete Scope

[Include all + Competitive Landscape + Strategic Roadmap + Scenario Planning]

---

## Output Location

Save analysis to: `./docs/research/trends/[topic]-trends-[YYYY-MM-DD].md`
