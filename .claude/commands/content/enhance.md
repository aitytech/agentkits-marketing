---
description: Analyze the current copy issues and enhance it
argument-hint: [url-or-content] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `copywriting`, `marketing-psychology`, `content-strategy` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Enhancement Scope

**Question:** "What level of enhancement do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Basic** - Quick fixes and polish
- **Recommended** - Full enhancement with alternatives
- **Complete** - Deep rewrite with multiple versions
- **Custom** - I'll specify enhancement areas

---

### Step 2: Ask Content Type

**Question:** "What type of content are you enhancing?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Web Copy** - Landing pages, homepage, product pages
- **Marketing Copy** - Ads, emails, social posts
- **Long-form** - Blog posts, articles, guides
- **Short-form** - Headlines, taglines, CTAs

---

### Step 3: Ask Enhancement Focus

**Question:** "What should we focus on improving?"
**Header:** "Focus"
**MultiSelect:** true

**Options:**
- **Clarity** - Simpler, easier to understand
- **Persuasion** - More compelling, action-driving
- **Concision** - Shorter, tighter, no fluff
- **Tone/Voice** - Brand alignment, consistency

---

### Step 4: Ask Output Preference

**Question:** "What output format do you prefer?"
**Header:** "Output"
**MultiSelect:** false

**Options:**
- **Enhanced Only** - Final improved version
- **Comparison** - Before and after side-by-side
- **Alternatives** - Multiple enhanced versions
- **Annotated** - Changes with explanations

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Content Enhancement Configuration

| Parameter | Value |
|-----------|-------|
| Content | [description or URL] |
| Type | [selected type] |
| Focus Areas | [selected areas] |
| Output Format | [selected format] |
| Scope | [Basic/Recommended/Complete] |
```

**Question:** "Enhance this content?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, enhance** - Start enhancement
- **No, change settings** - Go back to modify

---

## Workflow

1. **Content Analysis**
   - If URL: Use WebFetch to retrieve
   - If screenshot: Use multimodal analysis
   - Identify issues and opportunities
   - Document current state

2. **Issue Diagnosis**
   - Identify weak spots
   - Note missing elements
   - Assess conversion potential
   - Check brand alignment

3. **Enhancement Process**
   - Apply focus area improvements
   - Maintain original intent
   - Preserve key messages
   - Strengthen weak areas

4. **Output Delivery**
   - Enhanced version
   - Before/after comparison
   - Explanation of changes
   - Improvement metrics

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Copy enhancement | `copywriter` | Primary task |
| Brand review | `brand-voice-guardian` | Tone consistency |
| CRO check | `conversion-optimizer` | Conversion elements |
| Psychology review | `brainstormer` | Persuasion elements |

---

## Output Format

### Basic Scope

```markdown
# Content Enhancement

## Enhanced Version
[Improved content]

## Key Changes
- [Change 1]: [Reason]
- [Change 2]: [Reason]
```

### Recommended Scope

[Include Basic + Before/after comparison + Alternative versions + Improvement metrics]

### Complete Scope

[Include all + Multiple rewrites + A/B test suggestions + Style guide notes + Conversion analysis]

---

## Output Location

Save enhancement to: `./docs/content/enhanced/[content-name]-[YYYY-MM-DD].md`
