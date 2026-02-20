---
description: Build SEO pages at scale using templates and data
version: "1.0.0"
brand: AgentKits Marketing by AityTech
argument-hint: [keyword-pattern-or-context]
---

## Prerequisites

Before running this command, ensure you have:
- [ ] Keyword pattern identified
- [ ] Data source available or identified
- [ ] Scale target determined

## Context Loading

Load these files first:
1. `./README.md` - Product context
2. `./docs/seo/` - Existing SEO research
3. `.claude/skills/programmatic-seo/SKILL.md` - pSEO frameworks

---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `programmatic-seo`, `seo-mastery`, `schema-markup` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of programmatic SEO planning do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Opportunity assessment
- **Recommended** - Full plan with templates
- **Complete** - Implementation-ready specs
- **Custom** - I'll specify what I need

---

### Step 2: Ask Playbook Type

**Question:** "Which programmatic SEO pattern fits best?"
**Header:** "Pattern"
**MultiSelect:** false

**Options:**
- **Locations** - [service] in [city]
- **Comparisons** - [X] vs [Y]
- **Integrations** - [product] + [integration]
- **Other** - Different pattern

---

### Step 3: Ask Scale Target

**Question:** "How many pages are you planning to create?"
**Header:** "Scale"
**MultiSelect:** false

**Options:**
- **Small (10-50)** - Focused, high-quality
- **Medium (50-500)** - Balanced approach
- **Large (500-5000)** - Significant scale
- **Massive (5000+)** - Enterprise-level

---

### Step 4: Ask Data Source

**Question:** "What's your data source for page generation?"
**Header:** "Data"
**MultiSelect:** false

**Options:**
- **Internal Database** - Your own data
- **Public APIs** - Third-party data
- **Scraped/Collected** - Aggregated data
- **To Be Determined** - Need help identifying

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Programmatic SEO Configuration

| Parameter | Value |
|-----------|-------|
| Keyword Pattern | [pattern description] |
| Playbook Type | [selected type] |
| Scale Target | [selected scale] |
| Data Source | [selected source] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create programmatic SEO plan?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create plan** - Start planning
- **No, change settings** - Go back to modify

---

## Core Principles

1. **Unique Value Per Page**: Not just variable substitution
2. **Proprietary Data Wins**: Data competitors can't replicate
3. **Subfolders, Not Subdomains**: `/templates/resume/` not `templates.yoursite.com`
4. **Search Intent Match**: Actually answer the search
5. **Quality Over Quantity**: 100 great > 10,000 thin

---

## The 12 Programmatic SEO Playbooks

| Playbook | Pattern | Example |
|----------|---------|---------|
| Templates | "[Type] template" | resume template |
| Curation | "best [category]" | best CRM software |
| Conversions | "[X] to [Y]" | USD to GBP |
| Comparisons | "[X] vs [Y]" | Notion vs Coda |
| Examples | "[type] examples" | landing page examples |
| Locations | "[service] in [city]" | dentists in Austin |
| Personas | "[product] for [audience]" | CRM for real estate |
| Integrations | "[product] integration" | Slack Asana integration |
| Glossary | "what is [term]" | what is SEO |
| Translations | Multi-language content | content in Spanish |
| Directory | "[category] tools" | AI writing tools |
| Profiles | "[entity] info" | company profiles |

---

## Workflow

1. **Keyword Pattern Research**
   - Identify repeating structure
   - Validate demand (volume, trend)
   - Assess competition

2. **Data Requirements**
   - Identify data sources
   - Design data schema
   - Plan updates/freshness

3. **Template Design**
   - Page structure
   - Unique content per page
   - Internal linking

4. **Indexation Strategy**
   - Sitemap approach
   - Priority pages
   - Crawl budget management

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| pSEO planning | `attraction-specialist` | Primary task |
| Template copy | `copywriter` | Content structure |
| Technical specs | `seo-specialist` | Schema, indexation |

---

## Output Format

### Basic Scope

```markdown
## Programmatic SEO Opportunity: [Pattern]

### Keyword Analysis
- Pattern: [pattern]
- Est. Volume: [volume or ⚠️ requires MCP]
- Competition: [assessment]

### Feasibility
- Data availability: [yes/no/partial]
- Unique value: [description]
- Recommendation: [proceed/reconsider]
```

### Recommended Scope

[Include Basic + Template structure + Data schema + URL structure + Internal linking plan + Phase rollout]

### Complete Scope

[Include all + Full template specs + Schema markup + Quality checklist + Implementation code + Monitoring plan]

---

## Pre-Delivery Validation

Before delivering programmatic SEO plan:
- [ ] Unique value per page defined
- [ ] Data source reliable
- [ ] Template structure complete
- [ ] Quality controls in place
- [ ] Indexation strategy clear

---

## Output Location

Save plan to: `./docs/seo/programmatic-[pattern]-[YYYY-MM-DD].md`

---

## Next Steps

After programmatic SEO plan, consider:
- `/seo:schema` - Add schema markup to templates
- `/seo:keywords` - Validate keyword demand
- `/seo:audit` - Audit after launch
