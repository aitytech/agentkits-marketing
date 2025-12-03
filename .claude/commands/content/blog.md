---
description: Create SEO-optimized blog post
argument-hint: [topic]
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `seo-mastery`, `content-strategy`, `copywriting` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Content Scope

**Question:** "What level of blog post do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick outline + key points (~500-800 words)
- **Recommended** - Full post with SEO optimization (~1200-1500 words)
- **Complete** - Comprehensive guide with visuals (~2000+ words)
- **Custom** - I'll specify exact requirements

---

### Step 2: Ask Content Goal

**Question:** "What is the primary goal of this blog post?"
**Header:** "Goal"
**MultiSelect:** false

**Options:**
- **SEO Traffic** - Rank for keywords, drive organic traffic
- **Lead Generation** - Capture leads with content upgrade
- **Thought Leadership** - Establish authority, share insights
- **Product/News** - Explain features or announce updates

---

### Step 3: Ask Target Audience

**Question:** "Who is the primary reader for this post?"
**Header:** "Audience"
**MultiSelect:** false

**Options:**
- **Beginners** - New to the topic, need fundamentals
- **Intermediate** - Some knowledge, want deeper insights
- **Advanced** - Experts looking for cutting-edge info
- **Decision Makers** - Executives, buyers making decisions

---

### Step 4: Ask Content Style

**Question:** "What tone and style should we use?"
**Header:** "Style"
**MultiSelect:** false

**Options:**
- **Professional** - Formal, authoritative, business-focused
- **Conversational** - Friendly, approachable, casual
- **Educational** - Tutorial-style, step-by-step
- **Persuasive** - Sales-oriented, benefit-focused

---

### Step 5: Ask Post Format

**Question:** "What format works best for this content?"
**Header:** "Format"
**MultiSelect:** false

**Options:**
- **How-To Guide** - Step-by-step instructions
- **List Post** - "X Ways to..." or "Top X..."
- **Deep Dive** - Comprehensive analysis of one topic
- **Comparison/Case Study** - "X vs Y" or real examples

---

### Step 6: Ask SEO Focus (If Goal = SEO Traffic)

**Question:** "Do you have a target keyword in mind?"
**Header:** "Keyword"
**MultiSelect:** false

**Options:**
- **Yes, I have a keyword** - I'll provide the target keyword
- **Help me find one** - Research keywords based on topic
- **No specific keyword** - Focus on topic coverage
- **Multiple keywords** - Target a keyword cluster

---

### Step 7: Confirmation

**Display summary:**

```markdown
## Blog Post Configuration

| Parameter | Value |
|-----------|-------|
| Topic | [topic] |
| Goal | [selected goal] |
| Audience | [selected audience] |
| Style | [selected style] |
| Format | [selected format] |
| Target Keyword | [keyword if provided] |
| Word Count | [estimated based on scope] |
```

**Question:** "Proceed with this blog post?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, create post** - Generate blog post
- **No, change settings** - Go back to modify

---

## Workflow

1. **Keyword Research** (if SEO goal)
   - Primary keyword analysis
   - Secondary keywords
   - Search intent alignment
   - Competitor content review

2. **Content Structure**
   - Compelling headline
   - Optimized subheadings
   - Logical flow
   - Internal linking plan

3. **Content Creation**
   - Hook/introduction
   - Main content sections
   - Examples and data
   - Visual suggestions

4. **SEO Optimization**
   - Title tag
   - Meta description
   - Header tags (H1-H3)
   - Keyword placement
   - Alt text suggestions

5. **Engagement Elements**
   - CTAs throughout
   - Lead magnet tie-in
   - Social sharing hooks
   - Comment prompts

---

## Output Format

```markdown
# [H1: Primary Keyword + Benefit]

**Meta Title:** [60 chars max]
**Meta Description:** [155 chars max]
**Target Keyword:** [keyword]
**Word Count:** [X words]

---

[Hook paragraph - address reader pain point]

## [H2: Section 1]
[Content with keyword integration]

## [H2: Section 2]
[Content with examples]

### [H3: Subsection]
[Detailed content]

## [H2: Section 3]
[Content with data/stats]

## Key Takeaways
- [Takeaway 1]
- [Takeaway 2]
- [Takeaway 3]

## [CTA Section]
[Call to action with lead magnet or next step]

---

## SEO Checklist
- [ ] Keyword in title
- [ ] Keyword in first 100 words
- [ ] Keyword in at least one H2
- [ ] Internal links: [X]
- [ ] External links: [X]
- [ ] Image alt text suggestions included
```

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Content writing | `copywriter` | Primary task |
| SEO optimization | `seo-specialist` | Technical SEO |
| Keyword research | `attraction-specialist` | Topic research |

---

## Output Location

Save post to: `./content/blog/[slug].md`
