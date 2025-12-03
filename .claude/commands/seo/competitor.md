---
description: Analyze competitor SEO strategy
argument-hint: [competitor-url]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `seo-mastery`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Data Reliability (MANDATORY)

**CRITICAL**: Follow `./workflows/data-reliability-rules.md` strictly.

### Required MCP Sources
| Data | MCP Server | Required |
|------|------------|----------|
| Traffic estimates | `semrush` | Yes |
| Keyword rankings | `semrush`, `dataforseo` | Yes |
| Backlink profile | `semrush` | Yes |

### Rules
1. **NEVER fabricate** competitor traffic, DA, or rankings
2. **If no MCP**: Show "⚠️ SEO metrics require Semrush MCP"
3. **WebFetch OK**: For public site structure analysis

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of competitor SEO analysis do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick overview and gaps
- **Recommended** - Full analysis with opportunities
- **Complete** - Comprehensive with playbook
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Analysis Focus

**Question:** "Which aspects should we analyze?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Keywords** - Ranking keywords, gaps
- **Content** - Topics, formats, strategy
- **Backlinks** - Link profile, opportunities
- **Technical** - Site structure, speed

---

### Step 3: Ask Competitor Count

**Question:** "How many competitors are you analyzing?"
**Header:** "Count"
**MultiSelect:** false

**Options:**
- **Single** - One main competitor
- **Top 3** - Three key competitors
- **Full Market** - 5+ competitors
- **SERP-Based** - Analyze who ranks for my keywords

---

### Step 4: Ask Your Current State

**Question:** "How established is your SEO currently?"
**Header:** "State"
**MultiSelect:** false

**Options:**
- **New Site** - Just starting SEO
- **Growing** - Some rankings, building
- **Established** - Strong foundation
- **Dominant** - Market leader

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Competitor SEO Analysis Configuration

| Parameter | Value |
|-----------|-------|
| Competitor(s) | [competitor URL(s)] |
| Focus Areas | [selected areas] |
| Competitor Count | [selected count] |
| Your State | [selected state] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Analyze competitor SEO?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, analyze competitor** - Start analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Top Pages Analysis**
   - Identify highest-traffic pages
   - Analyze page types driving traffic
   - Review content formats

2. **Keyword Portfolio**
   - Extract ranking keywords
   - Identify keyword gaps
   - Analyze keyword distribution

3. **Content Strategy**
   - Content themes and topics
   - Publishing frequency
   - Content formats used
   - Content quality assessment

4. **Backlink Analysis**
   - Top linking domains
   - Link acquisition patterns
   - Anchor text distribution
   - Link building tactics

5. **Gap Identification**
   - Keywords they rank for that you don't
   - Content topics to target
   - Link opportunities

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| SEO research | `researcher` | Primary task |
| Keyword analysis | `attraction-specialist` | Gap identification |
| Content strategy | `planner` | Topic recommendations |

---

## Output Format

### Basic Scope

```markdown
## Competitor SEO Analysis: [Competitor]

### Key Metrics
| Metric | Value |
|--------|-------|
| Est. Traffic | [value or ⚠️ NOT AVAILABLE] |
| Ranking Keywords | [count] |
| Domain Authority | [value or ⚠️ NOT AVAILABLE] |

### Top Opportunities
1. [Keyword gap 1]
2. [Keyword gap 2]
3. [Content opportunity]
```

### Recommended Scope

[Include Basic + Top pages breakdown + Full keyword gap analysis + Content strategy comparison + Link opportunities]

### Complete Scope

[Include all + Actionable playbook + Priority matrix + Timeline recommendations + Tracking plan]

---

## Output Location

Save analysis to: `./docs/seo/competitor-[name]-[YYYY-MM-DD].md`
