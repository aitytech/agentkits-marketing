---
description: Deep competitor analysis with strategic insights
argument-hint: [competitor-name-or-url]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `marketing-fundamentals`, `seo-mastery` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Data | MCP Server | Fallback |
|------|------------|----------|
| Domain metrics | `semrush` | ⚠️ NOT AVAILABLE |
| Traffic estimates | `semrush` | ⚠️ NOT AVAILABLE |
| Keywords | `semrush`, `dataforseo` | ⚠️ NOT AVAILABLE |
| App data | `sensortower` | ⚠️ NOT AVAILABLE |

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of competitor analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Company overview and positioning
- **Recommended** - Full analysis with battlecard
- **Complete** - Comprehensive with strategy
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Analysis Focus

**Question:** "What aspects should the analysis prioritize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Marketing** - Channels, messaging, content
- **Product** - Features, pricing, positioning
- **SEO** - Keywords, backlinks, content
- **Sales** - Battlecard, objection handling

---

### Step 3: Ask Depth Level

**Question:** "How deep should the analysis go?"
**Header:** "Depth"
**MultiSelect:** false

**Options:**
- **Overview** - High-level summary
- **Standard** - Detailed analysis
- **Deep Dive** - Comprehensive research
- **Ongoing** - Monitoring framework

---

### Step 4: Ask Output Use

**Question:** "How will this analysis be used?"
**Header:** "Use Case"
**MultiSelect:** false

**Options:**
- **Strategy** - Strategic planning
- **Sales Enablement** - Win/loss preparation
- **Marketing** - Positioning and messaging
- **Product** - Feature comparison

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Competitor Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Competitor | [description] |
| Focus Areas | [selected focus] |
| Depth | [selected depth] |
| Use Case | [selected use] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Conduct this competitor analysis?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze** - Start analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Company Research**
   - Company overview and positioning
   - Product/service offerings
   - Target market and customers

2. **Marketing Analysis**
   - Channel presence and strength
   - Messaging themes
   - Content strategy

3. **SEO Analysis**
   - Domain metrics (via MCP)
   - Top keywords
   - Backlink profile

4. **Competitive Positioning**
   - Strengths and weaknesses
   - Differentiation opportunities
   - Battlecard creation

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Company research | `researcher` | Primary task |
| SEO analysis | `attraction-specialist` | Keyword gaps |
| Battlecard creation | `sales-enabler` | Sales enablement |

---

## Output Format

### Basic Scope

```markdown
## Competitor: [Name]

### Overview
- Positioning: [Description]
- Target Market: [Description]
- Key Differentiators: [List]

### Products/Services
| Offering | Price | Target |
|----------|-------|--------|

### Strengths & Weaknesses
**Strengths:** [List]
**Weaknesses:** [List]
```

### Recommended Scope

[Include Basic + Channel analysis + SEO metrics + Messaging themes + Battlecard + Opportunities]

### Complete Scope

[Include all + Full battlecard + Win/loss scenarios + Strategic recommendations + Monitoring plan]

---

## Output Location

Save analysis to: `./docs/competitors/deep-[competitor]-[YYYY-MM-DD].md`
