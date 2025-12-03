---
description: Write creative & smart copy [FAST]
argument-hint: [user-request] - Interactive mode, user will be asked for all parameters
---

## Language & Quality Standards

**CRITICAL**: Respond in the same language the user is using. If Vietnamese, respond in Vietnamese. If Spanish, respond in Spanish.

**Standards**: Token efficiency, sacrifice grammar for concision, list unresolved questions at end.

**Skills**: Activate `copywriting`, `marketing-psychology` skills.

**Components**: Reference `./.claude/components/interactive-questions.md`

---

## Interactive Parameter Collection

### Step 1: Ask Output Scope

**Question:** "What level of output do you need?"
**Header:** "Scope"
**MultiSelect:** false

**Options:**
- **Quick** - Single fast version
- **Standard** - 3 variations (Recommended)
- **Complete** - 5+ variations with analysis
- **Custom** - I'll specify requirements

---

### Step 2: Ask Content Type

**Question:** "What type of copy do you need?"
**Header:** "Type"
**MultiSelect:** false

**Options:**
- **Headlines/Taglines** - Short, punchy copy
- **Social Posts** - Platform-ready content
- **Email Copy** - Subject lines, body text
- **Ad Copy** - Ads for any platform

---

### Step 3: Ask Tone

**Question:** "What tone should we use?"
**Header:** "Tone"
**MultiSelect:** false

**Options:**
- **Professional** - Business, formal
- **Casual** - Friendly, conversational
- **Bold** - Confident, assertive
- **Playful** - Fun, creative

---

### Step 4: Ask Platform/Context

**Question:** "Where will this copy be used?"
**Header:** "Platform"
**MultiSelect:** false

**Options:**
- **Website** - Landing, product pages
- **Social Media** - LinkedIn, Twitter, etc
- **Email** - Campaigns, newsletters
- **Ads** - Google, Meta, display

---

### Step 5: Confirmation

**Display summary:**

```markdown
## Fast Copy Configuration

| Parameter | Value |
|-----------|-------|
| Request | [user request summary] |
| Type | [selected type] |
| Tone | [selected tone] |
| Platform | [selected platform] |
| Scope | [Quick/Standard/Complete] |
```

**Question:** "Generate copy now?"
**Header:** "Confirm"
**MultiSelect:** false

**Options:**
- **Yes, write copy** - Start immediately
- **No, change settings** - Go back to modify

---

## Workflow

1. **Quick Analysis**
   - Parse user request
   - If screenshot: Use multimodal analysis
   - If video: Extract key context
   - Identify key messages

2. **Rapid Creation**
   - Generate copy using `copywriter` agent
   - Focus on speed and quality
   - Apply tone and platform context

3. **Variation Generation**
   - Create alternative versions
   - Different angles/approaches
   - Ready-to-use format

4. **Deliver Output**
   - Multiple variations per scope
   - Platform-optimized formatting
   - Clear labeling

---

## Agent Delegation

| Task | Agent | Trigger |
|------|-------|---------|
| Copy creation | `copywriter` | Primary task |
| Voice check | `brand-voice-guardian` | Brand alignment |
| CRO review | `conversion-optimizer` | CTAs and hooks |

---

## Output Format

### Quick Scope

```markdown
## [Content Type]: [Brief Description]

### Copy
[Final version]
```

### Standard Scope

```markdown
## [Content Type]: [Brief Description]

### Version 1 (Primary)
[Copy]

### Version 2 (Alternative)
[Copy]

### Version 3 (Alternative)
[Copy]
```

### Complete Scope

[Include Standard + 5+ variations + Different angles + A/B test suggestions + Platform-specific versions]

---

## Output Location

Save fast copy to: `./docs/content/fast/[type]-[YYYY-MM-DD].md`

---

## Note

For deeper research and planning, use `/content:good` instead.
