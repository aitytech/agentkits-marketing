---
description: Analyze mobile game top charts with month-over-month comparison
argument-hint: [options] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `analytics-attribution` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./.claude/workflows/data-reliability-rules.md` strictly.

### Required MCP Source
| Data | MCP Server | Tools |
|------|------------|-------|
| Top Charts | `sensortower` | `get_top_apps` |
| App Details | `sensortower` | `get_app_metadata` |

### Rules
1. **NEVER fabricate** rankings or game data
2. **Use SensorTower MCP** for all chart data
3. **CSV fallback**: Accept user CSV exports if MCP unavailable
4. **Mark sources**: ✅ VERIFIED for MCP data

---

## Mission

Generate Top Chart Analysis Report comparing two consecutive months.

---

## Interactive Parameter Collection

**See:** `./topchart-interactive-questions.md` for complete question flow.

### Step 1: Ask Output Scope

**Question:** "What scope of analysis do you want?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick** - US iOS, 2 categories, fast insights
- **Standard** - US+Global iOS, 4 categories (Recommended)
- **Full** - US+Global, iOS+Android, 4 categories
- **Custom** - I'll choose each parameter

---

### Step 2: Ask Time Period

**Question:** "Which month do you want to analyze?"
**Header:** "Month"
**MultiSelect:** false

**Options:** (dynamically generated based on current date)
- **Latest** - [Current month] vs [Previous month]
- **Previous** - [Month-1] vs [Month-2]
- **Earlier** - [Month-2] vs [Month-3]
- **Custom** - Enter specific YYYY-MM

---

### Step 3: Ask Custom Parameters (if Custom scope selected)

**Question:** "Select your custom analysis parameters?"
**Header:** "Custom"
**MultiSelect:** false

**Options:**
- **Countries** - Select US, Global, JP, KR, etc.
- **Platforms** - Select iOS, Android, or both
- **Genres** - Select All Games, Puzzle, Strategy, etc.
- **All Above** - Configure all parameters

**See detailed questions:** `./topchart-interactive-questions.md`

---

### Step 4: Ask Chart Depth

**Question:** "How many games per chart?"
**Header:** "Depth"
**MultiSelect:** false

**Options:**
- **Top 10** - Focus on market leaders
- **Top 20** - Standard analysis (Recommended)
- **Top 50** - Comprehensive view
- **Top 100** - Full market landscape

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Top Chart Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Countries | [selected countries] |
| Platforms | [selected platforms] |
| Genres | [selected genres] |
| Period | [month] vs [previous month] |
| Depth | Top [X] games |
| Total Charts | [count] charts |
```

**Question:** "Confirm and proceed with analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, proceed** - Start data collection
- **No, change settings** - Go back to modify

---

## Workflow

1. **Parameter Collection**
   - Ask scope, period, custom options
   - Confirm configuration with user
   - Validate all selections

2. **Data Collection**
   - Pull rankings via SensorTower MCP
   - Fetch app metadata (batch 100)
   - Calculate position changes

3. **Analysis**
   - Identify new entries and big movers
   - Genre distribution analysis
   - Publisher portfolio analysis

4. **Report Generation**
   - Create full report with rankings
   - Generate executive summary
   - Save data files

**See:** `./topchart-workflow.md` for detailed process.

---

## ⚠️ EXECUTION FLOW (MANDATORY)

### STEP 1: Interactive Parameter Collection (REQUIRED)

**CRITICAL**: You MUST ask user for ALL parameters using AskUserQuestion tool.

❌ **NOT ALLOWED:**
- Using default values without user confirmation
- Skipping parameter collection
- Proceeding without user confirmation

✅ **REQUIRED:**
- Ask user for scope selection
- Ask user for time period
- If custom: ask for countries, platforms, genres
- Confirm configuration with user
- Wait for user approval before proceeding

**Detailed Questions:** See `./topchart-interactive-questions.md`

**Quick Reference:**
1. Ask: "What scope of analysis?" (Quick/Standard/Full/Custom)
2. If Custom: Ask countries, platforms, genres
3. Ask: "Which month to analyze?"
4. Show configuration summary
5. Ask: "Confirm and proceed?"
6. Only proceed after "Yes" confirmation

---

### STEP 2: Data Collection

After user confirmation, use `game-market-analyst` agent to pull data via SensorTower MCP.

**Workflow:** See `./topchart-workflow.md` for complete data collection process.

**Quick Summary:**
- Pull rankings for selected combinations (country × platform × genre × month)
- Fetch metadata for all unique app IDs (batch 100 per call)
- Calculate position changes between months
- Identify new entries, big movers, and dropped apps

---

### STEP 3: Analysis & Report Generation

**Workflow:** See `./topchart-workflow.md` for analysis methodology.

**Output Files:**
- `docs/topchart-analysis-[YYYY-MM]-vs-[YYYY-MM].md` - Full report
- `docs/topchart-analysis-[YYYY-MM]-executive-summary.md` - Executive brief
- `data/[YYYY-MM]-top[X]-rankings.md` - Raw rankings
- `data/[YYYY-MM]-app-metadata-lookup.json` - App metadata

---

## Validation Checklist

Before proceeding to data collection, verify:

- [ ] User has answered scope question
- [ ] User has answered time period question
- [ ] If custom: user has selected countries, platforms, genres
- [ ] User has confirmed configuration
- [ ] Configuration summary displayed to user
- [ ] User explicitly approved with "Yes, proceed"

**If ANY checkbox unchecked:** Go back to STEP 1.

---

## Output Format

### Basic Scope (Quick Analysis)

```markdown
# Top Chart Analysis: [Month]

## Summary
- Charts analyzed: [count]
- New entries: [count]
- Big movers: [count]

## Top Rankings
[Table with position changes]
```

### Recommended Scope (Standard Analysis)

[Include Basic + Category breakdowns + Genre analysis + Publisher insights]

### Complete Scope (Full Analysis)

[Include all + Cross-platform comparison + Regional insights + Recommendations + Appendix]

---

## Report Template

```markdown
# 📊 Top Chart Analysis Report
**Period:** [Month T] vs [Month T-1]
**Generated:** [Date]
**Data Source:** ✅ SensorTower MCP
**Configuration:** [user-selected parameters]

## Executive Summary
- Total games analyzed: X across Y charts
- New entries: X games (X% churn)
- Big movers: X games
- Revenue leaders: Top 5 with $XM combined

## Category-by-Category Analysis
[Full rankings with position changes]

## Key Findings
[Market trends, genre shifts, emerging games]

## Recommendations
[For publishers, investors, platform teams, UA teams]

## Appendix
[Data sources, methodology, limitations]
```

---

## Error Handling

**If SensorTower MCP unavailable:**
1. Inform user: "⚠️ SensorTower MCP required for real data"
2. Offer: "Please provide CSV export from SensorTower/AppMagic"
3. Process CSV if provided

**If user provides no parameters:**
1. Re-ask questions with more context
2. Suggest recommended preset (Standard Analysis)
3. NEVER proceed with default values

**If incomplete data:**
1. Mark missing data: "Data N/A"
2. Note limitations in report
3. Do NOT fabricate data

---

## Module References

**Interactive Questions:** `./topchart-interactive-questions.md`
- Complete question flow
- All options with descriptions
- Preset configurations
- Validation rules

**Workflow Details:** `./topchart-workflow.md`
- Data collection process
- Analysis methodology
- Report generation
- Agent delegation

**Skill Reference:** `.claude/skills/game-marketing/topchart-analyzer.md`
- Modular skill components
- Library functions
- MCP adapter usage

---

## Agent Delegation

| Task | Agent | Purpose |
|------|-------|---------|
| Data pull | `game-market-analyst` | SensorTower MCP queries |
| Analysis | `researcher` | Market trends & insights |
| Report polish | `copywriter` | Executive summary |

---

## Success Criteria

✅ Report is complete when:
- All user-selected parameters analyzed
- 100% data from MCP (not fabricated)
- >95% metadata coverage
- All insights data-supported
- Actionable recommendations included
- Sources clearly marked

---

## Output Location

Save reports to:
- Full report: `./docs/topchart-analysis-[YYYY-MM]-vs-[YYYY-MM].md`
- Executive summary: `./docs/topchart-analysis-[YYYY-MM]-executive-summary.md`
- Raw data: `./data/[YYYY-MM]-top[X]-rankings.md`
