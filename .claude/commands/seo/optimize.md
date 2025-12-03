---
description: Optimize content for target keywords
argument-hint: [content-file] [target-keyword]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `seo-mastery`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of SEO optimization do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick optimization pass
- **Recommended** - Full on-page optimization
- **Complete** - Comprehensive with schema + links
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Content Type

**Question:** "What type of content are you optimizing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Blog Post** - Article, guide, tutorial
- **Landing Page** - Product, service page
- **Homepage** - Main site page
- **Category Page** - Collection, archive page

---

### Step 3: Ask Optimization Focus

**Question:** "Which areas should we prioritize?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Title & Meta** - Title tag, meta description
- **Headings** - H1/H2/H3 structure
- **Content** - Keyword placement, depth
- **Technical** - Schema, images, links

---

### Step 4: Ask Current State

**Question:** "What's the current ranking for target keyword?"
**Header:** "Rank"
**MultiSelect:** false

**Options:**
- **Not Ranking** - Not in top 100
- **Page 2-5** - Position 11-50
- **Bottom Page 1** - Position 6-10
- **Top 5** - Position 1-5

---

### Step 5: Confirmation

**Display summary:**

```markdown
## SEO Optimization Configuration

| Parameter | Value |
|-----------|-------|
| Content | [content description] |
| Target Keyword | [keyword] |
| Content Type | [selected type] |
| Focus Areas | [selected areas] |
| Current Rank | [selected rank] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Optimize this content?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, optimize content** - Start SEO optimization
- **No, change settings** - Go back to modify

---

## Workflow

1. **Current State Analysis**
   - Review existing optimization
   - Identify keyword usage
   - Analyze content structure

2. **Title & Meta Optimization**
   - Optimize title tag (60 chars max)
   - Write compelling meta description (155 chars)
   - Include primary keyword naturally

3. **Heading Structure**
   - Optimize H1 tag
   - Structure H2/H3 hierarchy
   - Include keyword variations

4. **Content Optimization**
   - Improve keyword placement
   - Add semantic variations
   - Enhance content depth
   - Improve readability

5. **Internal Linking**
   - Add relevant internal links
   - Optimize anchor text
   - Build topic cluster connections

6. **Technical Elements**
   - Optimize images (alt text)
   - Add schema markup
   - Check URL structure

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| SEO analysis | `seo-specialist` | Primary task |
| Content enhancement | `copywriter` | Content depth |
| Technical SEO | `attraction-specialist` | Schema, technical |

---

## Output Format

### Basic Scope

```markdown
## SEO Optimization: [Content Title]

### Title Tag
Before: [current]
After: [optimized]

### Meta Description
[Optimized meta description]

### Quick Wins
- [Change 1]
- [Change 2]
```

### Recommended Scope

[Include Basic + Heading restructure + Keyword placement map + Internal link suggestions + Image optimization]

### Complete Scope

[Include all + Schema markup code + Content expansion recommendations + Competitor comparison + Before/after analysis]

---

## Output Location

Save optimization to: `./docs/seo/optimize-[content-name]-[YYYY-MM-DD].md`
