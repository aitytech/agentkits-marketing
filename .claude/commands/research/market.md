---
description: Conduct market research analysis
argument-hint: [market-or-industry]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Data Sources
- **WebSearch**: Primary source - cite all URLs
- **MCP**: `semrush` for competitor data, `sensortower` for app markets
- **NEVER fabricate** market sizes, growth rates, or statistics
- **All data must have citations** with source URLs

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of market research do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Market overview with key stats
- **Recommended** - Full analysis with trends
- **Complete** - Comprehensive with recommendations
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Research Focus

**Question:** "What's the primary focus of this research?"
**Header:** "Focus"
**MultiSelect:** false

**Options:**
- **Market Size** - TAM/SAM/SOM analysis
- **Competitive** - Competitor landscape mapping
- **Trends** - Industry and consumer trends
- **Opportunities** - Gaps and whitespace analysis

---

### Step 3: Ask Data Requirements

**Question:** "What data types do you need?"
**Header:** "Data"
**MultiSelect:** true

**Options:**
- **Quantitative** - Market size, growth rates, share
- **Qualitative** - Trends, insights, expert opinions
- **Competitive** - Player analysis, positioning
- **Customer** - Behavior, preferences, segments

---

### Step 4: Ask Output Format

**Question:** "How should the research be formatted?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **Report** - Full written analysis
- **Summary** - Executive summary with key findings
- **Matrix** - Tables and comparison frameworks
- **Presentation** - Slide-ready format

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Market Research Configuration

| Parameter | Value |
|-----------|-------|
| Market/Industry | [description] |
| Focus | [selected focus] |
| Data Types | [selected data] |
| Format | [selected format] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Start this market research?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, start research** - Begin analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Scope Definition**
   - Market boundaries
   - Research questions
   - Data requirements
   - Timeline

2. **Data Gathering**
   - Industry reports (with citations)
   - Market statistics (verified sources)
   - Competitor landscape
   - Customer insights

3. **Analysis**
   - Trend identification
   - Growth drivers
   - Risk factors
   - Competitive dynamics

4. **Synthesis**
   - Key findings
   - Opportunity mapping
   - Strategic recommendations

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Data gathering | `researcher` | Primary task |
| Competitor analysis | `attraction-specialist` | Competitive focus |
| Trend synthesis | `brainstormer` | Opportunity identification |

---

## Output Format

### Basic Scope

```markdown
## Market Research: [Market]

### Market Overview
- Size: $[X]B (Source: [Citation])
- Growth: [X]% CAGR
- Key Drivers: [List]

### Competitive Landscape
| Player | Est. Share | Positioning |
|--------|------------|-------------|

### Key Findings
1. [Finding 1]
2. [Finding 2]
```

### Recommended Scope

[Include Basic + Trend analysis + Growth projections + Risk factors + Segment breakdown + 5-year outlook]

### Complete Scope

[Include all + TAM/SAM/SOM + Entry barriers + Strategic recommendations + Investment thesis + Scenario planning]

---

## Output Location

Save research to: `./docs/research/market-[industry]-[YYYY-MM-DD].md`
