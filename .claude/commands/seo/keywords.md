---
description: Conduct keyword research for topic/niche
argument-hint: [topic-or-seed-keyword]
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
| Data | MCP Server | Priority |
|------|------------|----------|
| Keyword volume | `semrush` | Primary |
| SERP data | `dataforseo` | Secondary |
| Current rankings | `google-search-console` | For gaps |

### Rules
1. **NEVER fabricate** search volumes, difficulty scores, or rankings
2. **If no MCP**: State "⚠️ Keyword metrics require Semrush or DataForSEO MCP"
3. **Web research OK** for keyword ideas, but NOT for volume/difficulty
4. **User keywords**: Can analyze user-provided keyword lists

---

## Interactive Parameter Collection

### Step 1: Ask Research Scope

**Question:** "What level of keyword research do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick keyword list, top opportunities (~20 keywords)
- **Recommended** - Full research with clustering (~50-100 keywords)
- **Complete** - Comprehensive strategy with content roadmap (~200+ keywords)
- **Custom** - I'll specify exact requirements

---

### Step 2: Ask Research Goal

**Question:** "What is the primary goal of this keyword research?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Content Strategy** - Find topics for blog posts and guides
- **Product/Landing Pages** - Keywords for commercial pages
- **Competitive Gap** - Find keywords competitors rank for
- **Quick Wins** - Low-difficulty keywords to rank fast

---

### Step 3: Ask Intent Focus

**Question:** "Which search intent should we prioritize?"
**Header:** "Intent"
**MultiSelect:** true

**Options:**
- **Informational** - "how to", "what is" queries
- **Commercial** - "best", "top", "reviews" queries
- **Transactional** - "buy", "pricing", "free trial" queries
- **All intents** - Comprehensive coverage

---

### Step 4: Ask Target Market

**Question:** "What is your target geographic market?"
**Header:** "Market"
**MultiSelect:** false

**Options:**
- **United States** - US search volume and SERPs
- **Global/English** - English-speaking markets worldwide
- **Specific country** - I'll specify the country
- **Multiple markets** - Multi-region research

---

### Step 5: Ask Output Format

**Question:** "How would you like the keyword data delivered?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **Markdown report** (Recommended) - Formatted analysis with recommendations
- **CSV spreadsheet** - Raw data for further analysis
- **Topic clusters** - Visual grouping with pillar structure
- **Content calendar** - Keywords mapped to publishing schedule

---

### Step 6: Confirmation

**Display summary:**

```markdown
## Keyword Research Configuration

| Parameter | Value |
|-----------|-------|
| Seed Topic/Keyword | [input] |
| Goal | [selected goal] |
| Intent Focus | [selected intents] |
| Target Market | [selected market] |
| Output Format | [selected format] |
| Scope | [Basic/Recommended/Complete] |

**Estimated keywords:** [X based on scope]
```

**Question:** "Proceed with this keyword research?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, start research** - Begin keyword analysis
- **No, change settings** - Go back to modify

---

## Workflow

1. **Keyword Expansion**
   - Generate related keywords
   - Identify long-tail variations
   - Explore question keywords
   - Find semantic variations

2. **Intent Analysis**
   - Classify search intent (informational, navigational, commercial, transactional)
   - Map intent to funnel stage
   - Prioritize by buyer readiness

3. **Difficulty Assessment**
   - Analyze competition level
   - Assess ranking difficulty
   - Evaluate authority requirements

4. **Content Gap Analysis**
   - Compare to existing content
   - Identify untapped opportunities
   - Find quick win keywords

5. **Topic Clustering**
   - Group by semantic relevance
   - Create pillar/cluster structure
   - Map internal linking opportunities

6. **Prioritization**
   - Score by opportunity value
   - Balance difficulty vs potential
   - Create implementation roadmap

---

## Output Format

### Basic Scope

```markdown
# Keyword Research: [Topic]

## Top Opportunities (Quick Wins)
| Keyword | Volume | Difficulty | Intent | Priority |
|---------|--------|------------|--------|----------|
| [keyword] | [vol] | [diff] | [intent] | 🟢 High |

## Secondary Keywords
[List of additional keywords to consider]

## Next Steps
1. [Action item]
```

### Recommended Scope

```markdown
# Keyword Research: [Topic]

## Executive Summary
[Overview of keyword landscape and opportunities]

## Topic Clusters

### Cluster 1: [Pillar Topic]
**Pillar Keyword:** [main keyword]
| Cluster Keyword | Volume | Difficulty | Content Type |
|-----------------|--------|------------|--------------|
| [keyword] | [vol] | [diff] | [blog/page] |

### Cluster 2: [Pillar Topic]
[Same structure]

## Quick Wins (Low Difficulty, Decent Volume)
[Prioritized list]

## Content Roadmap
| Priority | Keyword | Content Type | Target URL |
|----------|---------|--------------|------------|
| 1 | [keyword] | [type] | /[slug] |

## Competitor Gap Analysis
[Keywords competitors rank for that we don't]
```

### Complete Scope

[Include Recommended + Full SERP Analysis + Featured Snippet Opportunities + Content Calendar + Seasonal Trends]

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Keyword research | `attraction-specialist` | Primary task |
| Competitor analysis | `researcher` | Gap analysis |
| Content planning | `planner` | Roadmap creation |

---

## Output Location

Save research to: `./docs/seo/keywords/[topic]-research.md`
