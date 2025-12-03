---
description: Create competitor comparison or alternative pages for SEO and sales
argument-hint: [competitor-or-product]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `competitor-alternatives`, `seo-mastery`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of alternatives page do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Page outline and key points
- **Recommended** - Full page with copy
- **Complete** - SEO-optimized with schema
- **Custom** - I'll specify what I need

---

### Step 2: Ask Page Type

**Question:** "What type of alternatives page?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Singular** - "[Product]: Best [Competitor] Alternative"
- **Plural** - "Best [Competitor] Alternatives in 2024"
- **Vs Page** - "[Your Product] vs [Competitor]"
- **Head-to-Head** - "[Competitor A] vs [Competitor B]"

---

### Step 3: Ask Content Depth

**Question:** "How detailed should the comparison be?"
**Header:** "Depth"
**MultiSelect:** false

**Options:**
- **Overview** - High-level comparison
- **Detailed** - Feature-by-feature analysis
- **Comprehensive** - Full research with use cases
- **Authority** - Industry expert perspective

---

### Step 4: Ask SEO Priority

**Question:** "What's the SEO priority?"
**Header:** "SEO"
**MultiSelect:** false

**Options:**
- **Standard** - Basic optimization
- **Competitive** - Target ranking keywords
- **Aggressive** - Full schema and linking
- **Programmatic** - Template for scale

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Alternatives Page Configuration

| Parameter | Value |
|-----------|-------|
| Competitor/Product | [description] |
| Page Type | [selected type] |
| Content Depth | [selected depth] |
| SEO Priority | [selected seo] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Create this alternatives page?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create page** - Start creation
- **No, change settings** - Go back to modify

---

## Workflow

1. **Research Phase**
   - Competitor product features
   - Pricing structure
   - Common complaints
   - Strengths to acknowledge

2. **Page Structure**
   - Hook and intro
   - Comparison table
   - Feature breakdown
   - Use case recommendations

3. **SEO Optimization**
   - Title and meta tags
   - Schema markup
   - Internal linking
   - Content structure

4. **Copy Creation**
   - Headlines
   - Comparison copy
   - CTAs

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Competitor research | `researcher` | Data gathering |
| Page copy | `copywriter` | Primary task |
| SEO optimization | `seo-specialist` | Complete scope |

---

## Output Format

### Basic Scope

```markdown
## [Page Title]

### Page Strategy
- Type: [Page type]
- URL: /[url-slug]/
- Target Keywords: [List]

### Outline
1. [Section 1]
2. [Section 2]
3. Comparison Table
4. CTA

### Key Messages
- [Message 1]
- [Message 2]
```

### Recommended Scope

[Include Basic + Full page copy + Comparison table + Feature breakdown + SEO elements]

### Complete Scope

[Include all + Schema markup + FAQ section + Internal linking plan + Headline variants]

---

## Output Location

Save page to: `./docs/content/alternatives-[competitor]-[YYYY-MM-DD].md`
