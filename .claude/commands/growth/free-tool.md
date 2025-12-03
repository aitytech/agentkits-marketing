---
description: Plan free tool or calculator for engineering-as-marketing
argument-hint: [product-or-audience]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `free-tool-strategy`, `programmatic-seo`, `marketing-ideas` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of free tool strategy do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Tool recommendations and rationale
- **Recommended** - Full plan with lead capture
- **Complete** - Comprehensive with SEO strategy
- **Custom** - I'll specify what I need

---

### Step 2: Ask Tool Type

**Question:** "What type of free tool are you considering?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Calculator** - ROI, pricing, savings calculators
- **Generator** - Name, headline, code generators
- **Analyzer** - Website, SEO, security analyzers
- **Converter** - File, format, unit converters

---

### Step 3: Ask Primary Goal

**Question:** "What's the primary goal for this free tool?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **Lead Generation** - Email capture focus
- **SEO Value** - Traffic and backlinks
- **Brand Awareness** - Visibility and trust
- **Product Adoption** - Drive to main product

---

### Step 4: Ask Lead Capture Strategy

**Question:** "How should we gate the tool?"
**Header:** "Gating"
**MultiSelect:** false

**Options:**
- **Full Access** - No gate, maximize usage
- **Gated Results** - Email for detailed results
- **Freemium** - Basic free, premium gated
- **Progressive** - Gate after X uses

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Free Tool Strategy Configuration

| Parameter | Value |
|-----------|-------|
| Product/Audience | [description] |
| Tool Type | [selected type] |
| Primary Goal | [selected goal] |
| Lead Capture | [selected gating] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this free tool strategy?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create strategy** - Start planning
- **No, change settings** - Go back to modify

---

## Tool Categories

| Category | Examples | Lead Capture |
|----------|----------|--------------|
| Calculators | ROI, pricing, savings | Email for results |
| Generators | Name, headline, code | Email for premium |
| Analyzers | Website, SEO, security | Email for full report |
| Converters | File, format, unit | Light/no gate |
| Templates | Docs, spreadsheets | Email to download |
| Checkers | Grammar, speed, links | Email for details |

---

## Workflow

1. **Tool Selection**
   - Audience pain point match
   - Search volume analysis
   - Complexity vs value
   - Competitive landscape

2. **Lead Capture Design**
   - Gating strategy
   - Email gate timing
   - Progressive profiling
   - Value exchange clarity

3. **SEO Optimization**
   - Keyword targeting
   - Programmatic pages
   - Schema markup
   - Link building

4. **Conversion Path**
   - Tool → Lead magnet → Product
   - In-tool product mentions
   - Follow-up sequence

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Tool ideation | `brainstormer` | Concept generation |
| Strategy design | `attraction-specialist` | Primary task |
| SEO planning | `seo-specialist` | Complete scope |

---

## Output Format

### Basic Scope

```markdown
## Free Tool Strategy: [Context]

### Recommended Tool
- Type: [Calculator/Generator/etc.]
- Concept: [Description]
- Target Audience: [ICP]

### Why This Tool
- Audience fit: [Rationale]
- Search demand: [Volume estimate]
- Competitive gap: [Opportunity]

### Lead Capture
- Strategy: [Gating approach]
- Expected conversion: [Estimate]
```

### Recommended Scope

[Include Basic + Technical requirements + Lead capture flow + Promotion plan + Success metrics]

### Complete Scope

[Include all + SEO strategy + Programmatic pages + Link building + A/B testing + Launch timeline]

---

## Output Location

Save strategy to: `./docs/growth/free-tool-[concept]-[YYYY-MM-DD].md`
