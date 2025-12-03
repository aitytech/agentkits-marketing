---
description: Edit, review, or improve existing marketing copy
argument-hint: [copy-to-edit] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `copy-editing`, `copywriting`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Edit Scope

**Question:** "What level of editing do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick polish and essential fixes
- **Recommended** - Full multi-pass editing
- **Complete** - Deep edit with alternatives
- **Custom** - I'll specify focus areas

---

### Step 2: Ask Content Type

**Question:** "What type of content are you editing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Web Copy** - Landing pages, product pages
- **Marketing Materials** - Ads, emails, social
- **Long-form** - Blog posts, articles, guides
- **Short-form** - Headlines, taglines, CTAs

---

### Step 3: Ask Edit Focus

**Question:** "What should we focus on?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Clarity** - Remove jargon, simplify
- **Concision** - Cut fluff, tighten
- **Persuasion** - Strengthen value, CTAs
- **Polish** - Grammar, flow, consistency

---

### Step 4: Ask Output Preference

**Question:** "How should edits be presented?"
**Header:** "Output"
**MultiSelect:** false

**Options:**
- **Clean** - Final version only
- **Track Changes** - Show before/after
- **Annotated** - With edit explanations
- **Multiple** - Several alternative versions

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Copy Editing Configuration

| Parameter | Value |
|-----------|-------|
| Content | [content description] |
| Type | [selected type] |
| Focus Areas | [selected areas] |
| Output Style | [selected output] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Edit this copy?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, edit copy** - Start editing
- **No, change settings** - Go back to modify

---

## Workflow

1. **Content Analysis**
   - Identify content type and purpose
   - Assess current state
   - Note key issues

2. **Multi-Pass Editing**
   - Pass 1: Clarity - simplify language
   - Pass 2: Concision - cut fluff
   - Pass 3: Persuasion - strengthen CTAs
   - Pass 4: Flow - smooth transitions
   - Pass 5: Polish - grammar, spelling

3. **Quality Check**
   - Verify reading level (Grade 6-8)
   - Check brand voice alignment
   - Validate conversion elements

4. **Output Delivery**
   - Present edited version
   - Show changes per preference
   - Include improvement metrics

---

## Common Issues to Fix

| Issue | Before | After |
|-------|--------|-------|
| Passive voice | "was created by us" | "we created" |
| Weak verbs | "is able to" | "can" |
| Nominalization | "implementation of" | "implement" |
| Redundancy | "advance planning" | "planning" |
| Filler | "in order to" | "to" |
| Jargon | "leverage synergies" | "work together" |

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Copy editing | `copywriter` | Primary task |
| Voice review | `brand-voice-guardian` | Tone consistency |
| CRO check | `conversion-optimizer` | Persuasion elements |
| SEO review | `seo-specialist` | Keyword optimization |

---

## Output Format

### Basic Scope

```markdown
# Copy Edit: [Content Name]

## Edited Version
[Improved content]

## Key Changes
- [Change]: [Reason]
```

### Recommended Scope

[Include Basic + Before/after comparison + Metrics (word count, reading level) + Pass-by-pass changes]

### Complete Scope

[Include all + Alternative versions + A/B test suggestions + Style notes + Brand alignment report]

---

## Output Location

Save edited copy to: `./docs/content/edited/[content-name]-[YYYY-MM-DD].md`
